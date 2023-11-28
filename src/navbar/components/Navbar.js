import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav style={{ display: 'flex', flexDirection: 'row', width: '100%', height: '55px', position: 'fixed', top: 0 }}>
        <div style={{ display: 'flex', width: '10%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' }}>
          
        </div>
        <div style={{ display: 'flex', flexGrow: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' }}>
            <a style={{ margin: '0px 8px' }}>
              <Link to="/" style={{ textDecoration: 'none', color: 'white'}}>Home</Link>
            </a>
            <a style={{ margin: '0px 8px' }}>
              <Link to="/login" style={{ textDecoration: 'none', color: 'white'}}>Login</Link>
            </a>
            <a style={{ margin: '0px 8px' }}>
              <Link to="/languages" style={{ textDecoration: 'none', color: 'white'}}>Languages</Link>
            </a>
        </div>
        <div style={{ display: 'flex', width: '10%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' }}>

        </div>
      </nav>

      <Outlet />
    </>
  )
};

export default Navbar;