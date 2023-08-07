import { useState } from 'react';
import Box from '@mui/joy/Box';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Textarea from '@mui/joy/Textarea';
import Button from '@mui/joy/Button';
import Alert from '@mui/joy/Alert';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import ModalDialog from '@mui/joy/ModalDialog';
import Typography from '@mui/joy/Typography';
import styles from './ContactForm.module.css';

import { validateEmail } from '../../utils/helpers';

function ContactForm() {
    const [name, setName] = useState('');
    const [nameError, setNameError] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [message, setMessage] = useState('');
    const [messageError, setMessageError] = useState('');
    const [open, setOpen] = useState(false);

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;
    
        if (inputType === 'email') {
            setEmail(inputValue);
            setEmailError('');
        } else if (inputType === 'name') {
            setName(inputValue);
            setNameError('');
        } else {
            setMessage(inputValue);
            setMessageError('');
        }
    };

    const handleInputBlur = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;
    
        if (inputType === 'email' && inputValue === '') {
            setEmailError('Email cannot be left empty');
        } else if (inputType === 'name' && inputValue === '') {
            setNameError('Name cannot be left empty');
        } else if (inputValue === '') {
            setMessageError('Message cannot be left empty');
        } else if (!validateEmail(email)) {
            setEmailError('Email is invalid');
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (name === '') {
            setNameError('Name cannot be left empty');
        }

        if (email === '') {
            setEmailError('Email cannot be left empty');
        } else if (!validateEmail(email)) {
            setEmailError('Email is invalid');
        }

        if (message === '') {
            setMessageError('Message cannot be left empty');
        }

        // If everything passes, submit the form and clear the input values
        if (name !== '' && email !== '' && message !== '' && validateEmail(email)) {
            setName('');
            setEmail('');
            setMessage('');
            setNameError('');
            setEmailError('');
            setMessageError('');
            setOpen(true);
        }
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box className={styles.formWrapper} >
            <Typography>
                If you want to get in touch with me, fill out the form below and I will be in touch soon!
            </Typography>
            <form onSubmit={handleFormSubmit}>
                <FormControl className={styles.formItem}>
                    <FormLabel>Name</FormLabel>
                    <Input
                        name='name'
                        value={name}
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                        type='text'
                        placeholder='Name'
                        error={!!nameError}
                        className={styles.input}
                    />
                    {nameError && (
                        <Alert
                            size='sm'
                            variant='plain'
                            color='danger'
                            className={styles.alert}
                        >
                            {nameError}
                        </Alert>
                    )}
                </FormControl>

                <FormControl className={styles.formItem}>
                    <FormLabel>Email</FormLabel>
                    <Input
                        value={email}
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                        name='email'
                        type='email'
                        placeholder='johndoe@email.com'
                        error={!!emailError}
                        className={styles.input}
                    />
                    {emailError && (
                        <Alert
                            size='sm'
                            variant='plain'
                            color='danger'
                            className={styles.alert}
                        >
                            {emailError}
                        </Alert>
                    )}
                </FormControl>

                <FormControl className={styles.formItem}>
                    <FormLabel>Message</FormLabel>
                    <Textarea
                        value={message}
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                        minRows={2}
                        placeholder='Your message...'
                        error={!!messageError}
                        className={styles.input}
                    />
                    {messageError && (
                        <Alert
                            size='sm'
                            variant='plain'
                            color='danger'
                            className={styles.alert}
                        >
                            {messageError}
                        </Alert>
                    )}
                </FormControl>

                <Button type='submit'>Send it</Button>
            </form>
            <Modal
                variant='plain'
                open={open}
                onClose={handleClose}
                aria-labelledby='modal-title'
                aria-describedby='modal-desc'
            >
                <ModalDialog
                    aria-labelledby='variant-modal-title'
                    aria-describedby='variant-modal-description'
                    variant='plain'
                >
                    <ModalClose
                        variant='plain'
                        sx={{
                            top: 'calc(-1/4 * var(--IconButton-size))',
                            right: 'calc(-1/4 * var(--IconButton-size))',
                            boxShadow: '0 2px 12px 0 rgba(0 0 0 / 0.2)',
                            borderRadius: '50%',
                            bgcolor: 'background.surface',
                        }}
                    />
                    <Typography
                        component='h2'
                        id='modal-title'
                        level='h4'
                        textColor='inherit'
                        fontWeight='lg'
                        mb={1}
                    >
                        Message sent!
                    </Typography>
                    <Typography id='modal-desc' textColor='text.tertiary'>
                        Well... kinda. This is just a demo. But soon it will!
                    </Typography>
                </ModalDialog>
            </Modal>
        </Box>
    );
}

export default ContactForm;