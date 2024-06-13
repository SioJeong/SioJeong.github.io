import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div>
            <h1>Header</h1>
            <div>
                <Link to={'/'}>Home</Link>
                <Link to={'/post'}>Post</Link>
                <Link to={'/about'}>About</Link>
            </div>
        </div>
    );
}
