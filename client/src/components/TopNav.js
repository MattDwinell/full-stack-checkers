import {Navbar, Nav,Col , Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import logo from './../images/checkers_piece_icon.PNG';
import {auth} from './../auth/firebase';
const TopNav = () => {
    return (
<Navbar  bg="light" expand="sm" className = 'style-nav-bar' >

  <Navbar.Brand> 
      <Link exact to='/'><div className = 'logo-holder'> <img src = {logo} alt='checkers logo'/></div></Link>
       </Navbar.Brand>

  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
      <Row>
    <Nav defaultActiveKey = '/' className="mr-auto">
      <Col md={3}><Nav.Item>
     <Link className='top-nav-link' exact to='/' >Home</Link>          
       </Nav.Item>
       </Col> 
       <Col md={3}><Nav.Item>
     <Link className='top-nav-link' exact to='/rules' >Rules</Link>          
       </Nav.Item>
       </Col>
       <Col md={3}>
       <Nav.Item>
   <Link className='top-nav-link' to='/about'>About</Link>   
       </Nav.Item>
       </Col>
       <Col md={3}>
       <Nav.Item>
      <Link className='top-nav-link' to='/preferences'>Preferences</Link>
       </Nav.Item>
       </Col>
       <Col md={3}>
       <Nav.Item>
      <Link className='top-nav-link' to='/openseeks'>Open Games</Link>
       </Nav.Item>
       </Col>
       <Col md={3}>
       <Nav.Item>
        <button onClick = {() => {auth.signOut()}}> Sign out</button>   
       </Nav.Item>
       </Col>
       
    </Nav>
      </Row>
  </Navbar.Collapse>
</Navbar>
    )
}

export default TopNav
