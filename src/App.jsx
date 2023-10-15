import {MalButton} from "mal-react-component";
import ButtonPage from "./pages/ButtonPage.jsx";
import {Link, Outlet} from "react-router-dom";
import {Routes, Route} from 'react-router-dom'
import HomePage from "./pages/HomePage.jsx";
import {useState} from "react";
// import style from './App.css'
import './App.css'
import {GridPage} from "./pages/GridPage.jsx";
import {UploadPage} from "./pages/Upload/UploadPage.jsx";

function App() {
    const [isActive, setActive] = useState('');

    return (
        <>
            <nav>
                welcome to MalComponents
            </nav>
            {/*<ul className={style.sideNav}>*/}
            <ul className={'side-nav'}>
                <li><img src="/logo.png" alt=""/></li>
                {
                    [
                        {
                            name: '介绍',
                            to: '/home'
                        },
                        {
                            name: '按钮',
                            to: '/btn'
                        },
                        {
                            name: '网格布局',
                            to: '/grid'
                        },
                        {
                            name: '文件上传',
                            to: '/upload'
                        },
                    ].map((item) => (
                        <li
                            onClick={() => setActive(item.name)}
                            className={isActive == item.name ? "active" : ""}
                            key={item.name}>
                            <Link to={item.to}>{item.name}</Link></li>
                    ))
                }
            </ul>
            <Routes>
                <Route path="/home">
                    <Route index element={<HomePage/>}/>
                </Route>
                <Route path='/btn'>
                    <Route index element={<ButtonPage/>}/>
                </Route>
                <Route path='/grid'>
                    <Route index element={<GridPage/>}/>
                </Route>
                <Route path='/upload'>
                    <Route index element={<UploadPage/>}/>
                </Route>
            </Routes>
        </>
    )
}

export default App
