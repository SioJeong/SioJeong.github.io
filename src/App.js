import Header from './components/header';
import Main from './components/main';

// import './App.scss'; // 전역 스타일

export default function App() {
    return (
        <div className="root-container">
            <Header />
            <Main />
        </div>
    );
}
