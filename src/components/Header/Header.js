import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div>
            <div>
                <Link to={'/'}>Home</Link>
                <Link to={'/post'}>Post</Link>
                <Link to={'/about'}>About</Link>
            </div>
        </div>
    );
}
