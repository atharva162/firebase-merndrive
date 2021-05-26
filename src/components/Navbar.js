import React from 'react'
import { Navbar, Button } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext';

function AppBar() {
  const { currentUser, logout} = useAuth()
  async function handleLogout(){
      try {
          await logout();
          window.location = "/login";
      } catch (error) {
          console.log(error);
      }
  }
    return (
        <>
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand>Hey {currentUser?.email}!!</Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
           <Button variant="outline-light" onClick={handleLogout}>Log Out</Button>            
            </Navbar.Collapse>
        </Navbar>
        </>
    )
}

export default AppBar
