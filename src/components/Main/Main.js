import { Routes, Route } from 'react-router-dom';

import Home from '../../pages/Home/Home';
import PostList from '../../pages/Post/PostList';
import About from '../../pages/About/About';
import PostDetail from '../../pages/Post/PostDetail';

export default function Main() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/post" element={<PostList />} />
                <Route path="/post/:postId" element={<PostDetail />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </div>
    );
}
