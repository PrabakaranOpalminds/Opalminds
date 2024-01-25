import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        contactNumber: '',
        command: '', // Added new state for comment
    });

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = () => {
        // Here you can send the form details to prabu@gmail.com
        console.log('Form submitted:', formData);
    };

    return (
        <>
            <Grid>
                <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px'  }}>
                    <TextField
                        label="Name"
                        variant="outlined"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                         sx={{
                            width: {xs:"80%" , md:"50%"},
                            '& .MuiOutlinedInput-root.Mui-focused fieldset': {
                                borderColor: 'gray',
                            },
                            '& .MuiInputLabel-root.Mui-focused': {
                                color: 'gray',
                            },
                        }}
                        margin="normal"
                    />
                    <TextField
                        label="Contact Number"
                        variant="outlined"
                        name="contactNumber"
                        value={formData.contactNumber}
                        onChange={handleChange}
                        sx={{
                            width: {xs:"80%",md:"50%"},
                            '& .MuiOutlinedInput-root.Mui-focused fieldset': {
                                borderColor: 'gray',
                            },
                            '& .MuiInputLabel-root.Mui-focused': {
                                color: 'gray',
                            },
                        }}
                        margin="normal"
                    />
                    <TextField
                        label="Command"
                        variant="outlined"
                        name="command"
                        value={formData.command}
                        onChange={handleChange}
                        sx={{
                            
                            width: {xs:"80%",md:"50%"},
                            '& .MuiOutlinedInput-root.Mui-focused fieldset': {
                                borderColor: 'gray',
                            },
                            '& .MuiInputLabel-root.Mui-focused': {
                                color: 'gray',
                            },
                        }}
                        inputProps={{
                            style: {
                              height: '150px', // Adjust the height as needed
                            },
                          }}
                        margin="normal"
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleSubmit}
                        sx={{
                            width: {xs:"80%",md:"50%"},
                        }}
                    >
                        Submit
                    </Button>
                </form>
            </Grid>
        </>
    );
};

export default ContactForm;
