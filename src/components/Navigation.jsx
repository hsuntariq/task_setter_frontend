import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../assets/aim.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { logout } from "../features/auth/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";


function Navigation() {
    const {user,isLoading,isError,message,isSuccess} = useSelector(state=>state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(()=>{
      if(isError){
        toast(message);
      }
      if(isSuccess){
        navigate('/login');
      }
    },[isError,message,isSuccess,navigate])
  const handleLogout = () => {
    dispatch(logout());
    
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img style={{ width: "50px" }} src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link>
              <Link to="/register">Register</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/login">Login</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="add-goal">Add Goal</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to='show-goal'>Show Goals</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to='show-admin'>Show Admin</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to='show-user'>Show Users</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to='show-user' className="text-decoration-none fw-bold text-dark">Hello {user?.name}</Link>
            </Nav.Link>
            {user && <Nav.Link onClick={handleLogout} className="text-decoration-none fw-bold text-danger">
              Logout
            </Nav.Link> }
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
