import { Link } from 'react-router-dom';
import { ReactComponent as Symbol } from '../../shared/symbol.svg';

export default function Header() {
    return (
        <div>
            <div>
                <Link to={'/'}>
                    <Symbol width="15" height="15" stroke="#e0e3da" />
                </Link>
                <Link to={'/post'}>Post</Link>
                <Link to={'/about'}>About</Link>
            </div>
        </div>
    );
}
