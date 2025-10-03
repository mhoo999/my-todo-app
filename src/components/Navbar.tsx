import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav style={{
            padding: '20px',
            backgroundColor: '#333',
            display: 'flex',
            gap: '20px'
        }}>
            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
                홈
            </Link>
            <Link to="/todos" style={{ color: 'white', textDecoration: 'none' }}>
                Todo
            </Link>
            <Link to="/about" style={{ color: 'white', textDecoration: 'none'}}>
                소개
            </Link>
        </nav>
    );
}

export default Navbar;