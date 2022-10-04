import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import './Home.css'

function Home() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container className=' text-danger fs-5 '>
                    <Navbar.Brand href="/">Navbar</Navbar.Brand>
                    <Nav className='nav'>
                        <NavLink to="/home">Home</NavLink>
                        <NavLink to="/country">Countries</NavLink>
                        
                    </Nav>
                </Container>
            </Navbar>

        </>
    );
}

export default Home;