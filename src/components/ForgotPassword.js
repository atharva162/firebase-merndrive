import React, { useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';

function ForgotPassword() {
    const [formValue, setFormValue] = useState({
        email: ''
    })

    const handleChange = (event) => {
        setFormValue({...formValue, [event.target.name]: event.target.value })
    }
    const { resetPassword } = useAuth()
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e){
        e.preventDefault();
        try {
            setMessage('');
            setError('');
            setLoading(true);
            await resetPassword(formValue.email)
            setMessage('Check your inbox for further instructions')
        } catch (error) {
            setError('Failed to reset password')
        }
        setLoading(false);
    }

    return (
        <>
       <Card>
           <Card.Body>
           <h2 className="text-center mb-4">Password reset</h2>
           {error && <Alert variant="danger">{error}</Alert>}
           {message && <Alert variant="success">{message}</Alert>}
           <Form onSubmit={handleSubmit}>
           <Form.Group id="email">
            <Form.Label>
                Email
            </Form.Label>
            <Form.Control type="email" name="email" required value={formValue.email} onChange={handleChange}/>
            </Form.Group>    
            <Button className="w-100" type="submit" disabled={loading}>Reset Password</Button>
           </Form>
           <div className="w-100 text-center mt-3">
          <Link to="login">Log In</Link>
           </div>
           </Card.Body>
       </Card>
       <div className="w-100 text-center mt-2">
       Don't have an account? <Link to="/signup">Sign up</Link> 
       </div>
        </>
    )
}

export default ForgotPassword