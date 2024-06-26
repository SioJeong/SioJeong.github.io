import { Routes, Route } from 'react-router-dom';

import Home from '../../pages/home/Home';
import PostList from '../../pages/post/PostList';
import About from '../../pages/about/About';
import PostDetail from '../../pages/post/PostDetail';

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
