import { Routes, Route } from 'react-router-dom';

import Home from '../../pages/Home/Home';
import Post from '../../pages/Post/Post';
import About from '../../pages/About/About';

export default function Main() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/post" element={<Post />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </div>
    );
}
