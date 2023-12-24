import { Navbar } from "keep-react";
import { Link } from "react-router-dom";


const Nav = () => {

    const nav =
        <>
            <Link to="/">Home</Link>
            <Link to="/user">Profile</Link>
            <Link to="admin">Admin</Link>
        </>



    return (
        <div className="py-4 max-w-7xl mx-auto ">
            <Navbar fluid={true}>
                <Navbar.Container className="flex items-center justify-between">

                    <Navbar.Brand>
                        logo
                    </Navbar.Brand>

                    <Navbar.Collapse collapseType="sidebar">
                        <Navbar.Container tag="ul" className="flex flex-col gap-5">
                            {
                                nav
                            }
                        </Navbar.Container>
                    </Navbar.Collapse>

                    <Navbar.Container className="flex items-center gap-3">
                        <Navbar.Container
                            tag="ul"
                            className="lg:flex hidden items-center justify-between gap-5"
                        >
                            {
                                nav
                            }
                        </Navbar.Container>
                        <Navbar.Toggle />
                    </Navbar.Container>
                </Navbar.Container>
            </Navbar>
        </div>
    );
};

export default Nav;