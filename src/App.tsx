import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Menu Navbar/Dialogs/Dialogs";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import News from "./components/Menu Navbar/News/News";
import Music from "./components/Menu Navbar/Music/Music";
import Settings from "./components/Menu Navbar/Settings/Settings";

function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <Navbar />
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path='/profile/*' element={<Profile />}/>
                        <Route path='/dialogs/*' element={<Dialogs />}/>
                        <Route path='/news' element={<News />}/>
                        <Route path='/music' element={<Music />}/>
                        <Route path='/settings' element={<Settings />}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
