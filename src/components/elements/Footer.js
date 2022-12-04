import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Footer() {
    return (
        <>
            <Navbar bg="dark" variant="dark" className='bg-gradient p-2'>
                <Container className='d-flex justify-content-center p-2'>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="https://yt3.googleusercontent.com/ytc/AMLnZu8RvTjTvjB8769_yz72lOfIQaDGRlTHhWvazjuB=s88-c-k-c0x00ffffff-no-rj"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        ITdude | <span>Copyright © 2022 ITdude.in</span>
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    );
}

export default Footer;