import { Button, DarkThemeToggle, Flowbite, Navbar } from 'flowbite-react';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Nav = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(result => {
                console.log(result?.user);
                navigate('/');
            })
            .catch(error => console.error(error))
    }
    return (
        <Navbar
            fluid={true}
            rounded={true}
        >
            <Navbar.Brand href="/">

                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    Task Manager
                </span>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Navbar.Link
                    href="/add"
                >
                    Add task
                </Navbar.Link>
                <Navbar.Link href="/my">
                    My Tasks
                </Navbar.Link>
                <Navbar.Link href="/complete">
                    Completed Tasks
                </Navbar.Link>
                {!user && <> <Navbar.Link href="/login">
                    Login
                </Navbar.Link>
                    <Navbar.Link href="/reg">
                        Register
                    </Navbar.Link>
                </>}
                {user &&
                    <Button onClick={handleLogOut}>
                        Logout
                    </Button>
                }
                <>
                    <Flowbite>
                        <DarkThemeToggle />
                    </Flowbite>
                </>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Nav;