import { Navbar } from "keep-react";
import { Link } from "react-router-dom";


const Nav = () => {

    const nav =
        <>
            <Link to="/">Home</Link>
            <Link to="/user">Account</Link>
            <Link to="admin">Admin</Link>
        </>



    return (
        <div className="bg-[#711DB0]">
            <div className="lg:py-2 py-0 max-w-7xl mx-auto sticky top-0 z-10  ">
                <Navbar className="bg-[#711DB0] text-white" fluid={true}>
                    <Navbar.Container className="flex items-center justify-between">

                        <Navbar.Brand>
                           <h1 className="uppercase md:text-4xl text-3xl font-semibold ">
                            y.
                            <span className="text-[#FFA732]">p</span>.
                            <span>c</span>.
                            <span className="text-[#EF4040]">s</span>
                          </h1>
                        </Navbar.Brand>

                        <Navbar.Collapse className="bg-[#C21292] text-white" collapseType="sidebar">
                            <Navbar.Container tag="ul" className="flex uppercase flex-col gap-5">
                                {
                                    nav
                                }
                            </Navbar.Container>
                        </Navbar.Collapse>

                        <Navbar.Container className="flex items-center gap-3">
                            <Navbar.Container
                                tag="ul"
                                className="lg:flex hidden items-center uppercase justify-between gap-5"
                            >
                                {
                                    nav
                                }
                            </Navbar.Container>
                            <div className=" bg-slate-50 rounded">
                                <Navbar.Toggle />
                            </div>
                        </Navbar.Container>
                    </Navbar.Container>
                </Navbar>
            </div>
        </div>
    );
};

export default Nav;