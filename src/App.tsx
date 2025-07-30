import React, {useState, useEffect} from "react";
import {
  Main,
  Timeline,
  Expertise,
  Certificates,
  Project,
  Contact,
  Navigation,
  Footer,
} from "./components";
import FadeIn from './components/FadeIn';
import GiscusBoard from './components/GiscusBoard';
import './index.scss';

function App() {
    // 优先从 localStorage 读取主题，否则根据系统偏好
    const [mode, setMode] = useState<string>(() => {
        const saved = localStorage.getItem('theme');
        if (saved === 'light' || saved === 'dark') {
            return saved;
        }
        // 检查系统偏好
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        return prefersDark ? 'dark' : 'light';
    });

    const handleModeChange = () => {
        const newMode = mode === 'dark' ? 'light' : 'dark';
        setMode(newMode);
        localStorage.setItem('theme', newMode);
    }

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);

    // 每次 mode 变化时，写入 localStorage
    useEffect(() => {
        localStorage.setItem('theme', mode);
    }, [mode]);

    return (
    <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
        <Navigation parentToChild={{mode}} modeChange={handleModeChange}/>
        <FadeIn transitionDuration={700}>
            <Main/>
            <Expertise/>
            <Timeline/>
            <Certificates/>
            <Project/>
            <GiscusBoard theme={mode === 'dark' ? 'dark' : 'light'} />
            <Contact/>
        </FadeIn>
        <Footer />
    </div>
    );
}

export default App;