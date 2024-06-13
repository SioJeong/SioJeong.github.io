import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home/Home';
import Post from './pages/Post/Post';
import About from './pages/About/About';

export default function App() {
    return (
        <div>
            <h1>Blog</h1>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/post" element={<Post />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </div>
    );
}
