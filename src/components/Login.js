import React, { useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';

function Login() {
    const [formValue, setFormValue] = useState({
        email: '',
        password: ''
    })

    const handleChange = (event) => {
        setFormValue({...formValue, [event.target.name]: event.target.value })
    }
    const { login } = useAuth()
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e){
        e.preventDefault();
        try {
            setError('');
            setLoading(true);
            await login(formValue.email, formValue.password)
            window.location ="/";
        } catch (error) {
            setError('Failed to log in, please try again')
        }
        setLoading(false);
    }

    return (
        <>
          <h2 className="text-center mb-4">Welcome to MERNKeep!!, a one search end to all your space storage problems...</h2>
       <Card>
           <Card.Body>
           <h2 className="text-center mb-4">Login In</h2>
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
            <Button className="w-100" type="submit" disabled={loading}>Log In</Button>
           </Form>
           <div className="w-100 text-center mt-3">
          <Link to="forgot-password">Forgot Password</Link>
           </div>
           </Card.Body>
       </Card>
       <div className="w-100 text-center mt-2">
       Don't have an account? <Link to="/signup">Sign up</Link> 
       </div>
        </>
    )
}

export default Login
