import Link from "next/link";
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Navbar() {
    return (
        <nav className="navbar">
            {/* Left Section: Yellow background with brand information */}
            <div className="navbar-left">
                <i className="fa-solid fa-helmet-safety icon"></i>
                <div className="brand-name">
                    <h3>SPHERE</h3>
                    <h3>CONSTRUCTIONS</h3>
                </div>
            </div>

            {/* Right Section: Blue background with navigation links */}
            <div className="navbar-right">
                <Link href="/" className="nav-link">HOME</Link>
                <Link href="/about" className="nav-link">ABOUT</Link>
                <Link href="/services" className="nav-link">SERVICES</Link>
                <Link href="/contacts" className="nav-link">CONTACTS</Link>
            </div>
        </nav>
    );
}
