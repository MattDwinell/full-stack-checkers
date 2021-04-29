import {Navbar, Nav,Col , Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import logo from './../images/checkers_piece_icon.PNG';
import {auth} from './../auth/firebase';
const TopNav = () => {
  const signOutAndRedirect = async()=>{
    window.location.href = window.location.host;
    await auth.signOut();
  }

    return (
<Navbar  bg="light" expand="sm" className = 'style-nav-bar' >

  <Navbar.Brand> 
      <Link exact={true} to='/'><div className = 'logo-holder'> <img src = {logo} alt='checkers logo'/></div></Link>
       </Navbar.Brand>

  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
      <Row>
    <Nav defaultActiveKey = '/' className="mr-auto">
    <Col md={3}>
       <Nav.Item>
      <Link className='top-nav-link' to='/multiplayer'>Multiplayer</Link>
       </Nav.Item>
       </Col>
      <Col md={3}><Nav.Item>
     <Link className='top-nav-link' to='/' >Solo Play</Link>          
       </Nav.Item>
       </Col>
       <Col md={3}>
       <Nav.Item>
      <Link className='top-nav-link' to='/preferences'>Preferences</Link>
       </Nav.Item>
       </Col> 
       <Col md={3}><Nav.Item>
     <Link className='top-nav-link' to='/rules' >Rules</Link>          
       </Nav.Item>
       </Col>
       <Col md={3}>
       <Nav.Item>
   <Link className='top-nav-link' to='/about'>About</Link>   
       </Nav.Item>
       </Col>
       <Col md={3}>
       <Nav.Item>
       <Link to='/'> <button onClick = {signOutAndRedirect}> Sign out</button>  </Link> 
       </Nav.Item>
       </Col>
       
    </Nav>
      </Row>
  </Navbar.Collapse>
</Navbar>
    )
}

export default TopNav
