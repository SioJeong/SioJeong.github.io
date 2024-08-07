import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Buffer } from 'buffer';

import App from './App';
import './shared/fonts/Font.css'; // 폰트 스타일
import { PostProvider } from './\bcontext/PostContext';
import './index.scss';

window.Buffer = Buffer;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <PostProvider>
        <BrowserRouter>
            <App className="root-container" />
        </BrowserRouter>
    </PostProvider>
);
