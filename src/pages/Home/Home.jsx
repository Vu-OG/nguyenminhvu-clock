import "./Home.css";
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <>
      <div className="banner">
        <div className="filter"></div>
        <div className="title">
          <h1>EternaTime</h1>
          <h2>The Essence of Time</h2>
          <p>Discover a collection of exquisite timepieces, where precision meets elegance.</p>
        </div>
      </div>
      <footer>
            <div className="footer-container">
                <div className="footer-section brand">
                    <h2>EternaTime</h2>
                    <p className="tagline">The Essence of Time</p>
                    <p>Timeless craftsmanship meets modern elegance. Experience precision and luxury in every timepiece.</p>
                </div>

                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/news">News</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/cart">Cart</Link></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Support & Policies</h3>
                    <ul>
                        <li><Link to="/shipping">Shipping & Returns</Link></li>
                        <li><Link to="/warranty">Warranty & Repairs</Link></li>
                    </ul>
                </div>

                <div className="footer-section contact">
                    <h3>Contact Us</h3>
                    <p>Email: support@eternatime.com</p>
                    <p>Phone: +1 (123) 456-7890</p>
                    <p>Address: 123 Timepiece St, Luxury City, USA</p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© 2025 EternaTime. All Rights Reserved.</p>
            </div>
        </footer>
    </>
  );
};
export default Home;
