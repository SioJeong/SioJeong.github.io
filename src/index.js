import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Buffer } from 'buffer';

import App from './App';
import './fonts/Font.css'; // 폰트 스타일
import './index.css'; // 전역 스타일
import { PostProvider } from './\bcontext/PostContext';

window.Buffer = Buffer;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <PostProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </PostProvider>
);
