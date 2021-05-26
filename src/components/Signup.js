import React, { useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';

function Signup() {
    const [formValue, setFormValue] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    })

    const handleChange = (event) => {
        setFormValue({...formValue, [event.target.name]: event.target.value })
    }
    const { signup } = useAuth()
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e){
        e.preventDefault();
        if(formValue.password !== formValue.confirmPassword){
            return setError('Passwords do not match')
        }
        try {
            setError('');
            setLoading(true);
            await signup(formValue.email, formValue.password)
            window.location ="/";
        } catch (error) {
            setError('Failed to create an account, make sure typed password is more than six characters and your internet connection is not troubling you')
        }
        setLoading(false);
    }

    return (
        <>
        <h2 className="text-center mb-4">Welcome to MERNKeeP!!, a one search end to all your storage problems...</h2>
       <Card>
           <Card.Body>
           <h2 className="text-center mb-4">Sign Up</h2>
           {error && <Alert variant="danger">{error}</Alert>}
           <Form onSubmit={handleSubmit}>
           <Form.Group id="email">
            <Form.Label>
                Email
            </Form.Label>
            <Form.Control type="email" name="email" required value={formValue.email} onChange={handleChange}/>
            </Form.Group>    
            <Form.Group id="password">
            <Form.Label>
                Password
            </Form.Label>
            <Form.Control type="password" name="password" required value={formValue.password} onChange={handleChange}/>
            </Form.Group>
            <Form.Group id="password-confirm">
            <Form.Label>
                Password Confirmation
            </Form.Label>
            <Form.Control type="password" name="confirmPassword" required value={formValue.confirmPassword} onChange={handleChange}/>
            </Form.Group>
            <Button className="w-100" type="submit" disabled={loading}>Sign Up</Button>
           </Form>
           </Card.Body>
       </Card>
       <div className="w-100 text-center mt-2">
       Already have an account? <Link to="/login">Log In</Link> 
       </div>
        </>
    )
}

export default Signup
