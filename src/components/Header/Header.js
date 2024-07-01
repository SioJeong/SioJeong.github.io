import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div>
            <div>
                <Link to={'/'}>
                    <img src="SioJeong.github.io/public/assets/symbol.svg" alt="symbol" />
                </Link>
                <Link to={'/post'}>Post</Link>
                <Link to={'/about'}>About</Link>
            </div>
        </div>
    );
}
