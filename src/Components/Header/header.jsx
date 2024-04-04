import React, { useState, useEffect, useRef } from "react";
import "./header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope, faAddressCard, faLaptopCode, faCode, faShoppingBag } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

const Header = () => {
    const [navbar, setNavbar] = useState(false);
    const navbarRef = useRef(null);

    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", changeBackground);
        window.addEventListener("click", handleOutsideClick);
        return () => {
            window.removeEventListener("scroll", changeBackground);
            window.removeEventListener("click", handleOutsideClick);
        };
    }, []);

    const handleOutsideClick = (event) => {
        if (navbarRef.current && !navbarRef.current.contains(event.target)) {
            const navbarToggler = document.querySelector(".navbar-toggler");
            if (navbarToggler && navbarToggler.classList.contains("collapsed")) {
                return;
            }
            const navbarCollapse = document.querySelector(".navbar-collapse");
            if (navbarCollapse) {
                navbarCollapse.classList.remove("show");
            }
        }
    };

    return (
        <div id="Header">
            <Container fluid>
                <Navbar
                    expand="lg"
                    className={`navbar navbar-expand-sm navbar-dark fixed-top ${navbar ? "navbar-scrolled" : ""}`}
                    ref={navbarRef}
                >
                    <Container fluid>
                        <Navbar.Brand href="#">
                            <img
                                src="\src\assets\brand.png"
                                alt="BrainStem Media Logo"
                                height="30"
                                className="brainstemLogo"
                                style={{ objectFit: "cover" }}
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="mx-auto my-2 my-lg-0"
                                navbarScroll
                                style={{ justifyContent: "center" }}
                            >
                                <Nav.Link href="#Projects" className="nav-link">
                                    <FontAwesomeIcon icon={faShoppingBag} /> Live Products
                                </Nav.Link>
                                <Nav.Link href="#MiniProjects" className="nav-link">
                                    <FontAwesomeIcon icon={faLaptopCode} />Projects
                                </Nav.Link>
                                <Nav.Link href="#Skills" className="nav-link">
                                    <FontAwesomeIcon icon={faCode} /> Skills
                                </Nav.Link>
                                <Nav.Link href="#AboutMe" className="nav-link">
                                    <FontAwesomeIcon icon={faAddressCard} /> About Me
                                </Nav.Link>
                                <Nav.Link href="#ContactSection" className="nav-link">
                                    <FontAwesomeIcon icon={faEnvelope} /> Contact Me
                                </Nav.Link>
                                {/* Uncomment this section if you want to use dropdown
                                <NavDropdown
                                    title={<span><FontAwesomeIcon icon={faBox} /> Products</span>}
                                    id="navbarScrollingDropdown"
                                    show={isDropdownOpen}
                                    onMouseOver={handleDropdownHover}
                                    onMouseLeave={handleDropdownLeave}
                                >
                                    <NavDropdown.Item href="#Products" className="nav-link drop">
                                        All Products
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#ProductVideoAI" className="nav-link drop">
                                        VideoAI
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#ProductOTT" className="nav-link drop">
                                        OTT
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#ProductAssettore" className="nav-link drop">
                                        Assettore
                                    </NavDropdown.Item>
                                </NavDropdown>
                                */}
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>
        </div>
    );
};

export default Header;
