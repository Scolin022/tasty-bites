import { Link } from 'react-router-dom';
import './../styles/footer.css';

export default function AppFooter() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-column">
                <div className="footer-title">Current projects</div>
            </div>
    
            <div className="footer-column">
                <div className="footer-title">" Contact " TastyBites</div>
                    <div className="footer-item"><Link to="/pages/form/ContactUsPage">Contact Us</Link></div>
                    
                <div className="footer-title">Jump to</div>
                    <div className="footer-item">Home</div>
            </div>
        
            <div class="footer-column">
                <div className="footer-title">More about me</div>
                <div className="footer-item">Personal blog</div>
            </div>
        
            <div className="footer-column">
                <div className="footer-title">Reach out</div>
                    <div className="footer-item"><a href="https://www.linkedin.com/in/samcolin/">LinkedIn</a></div>
                    <div className="footer-item"><a href="#">Twitter(X)</a></div>
                    <div className="footer-item"><a href="#">Email</a></div>
            </div>
        
            <div className="footer-separator"></div>

            <div class="footer-quote">"Some cool quote."</div>
            <div className="footer-credit">Wireframed, designed, prototyped, and hand-coded by ...</div>

            <div className="footer-column">
                <div>© {year} Samantha Colin</div>
                <div>All Rights Reserved.</div>
            </div>
        </footer>
    );
}