import { Link } from 'react-router-dom';

export default function AppFooter() {
    const year = new Date().getFullYear();

    return (
        <footer>
            <div>
                <p>© {year} Samantha Colin | All Rights Reserved</p>
            </div>
            <div>
                <Link to="/pages/form/ContactUsPage">Contact Us</Link>
            </div>
        </footer>
    );
}