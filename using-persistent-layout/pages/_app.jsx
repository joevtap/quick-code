import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import Link from "next/link";

function MyApp({ Component, pageProps }) {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#">Persistent Layout</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link>
                            <Link href="/">Home</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link href="/products">Products</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link href="/myApi">API</Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;
