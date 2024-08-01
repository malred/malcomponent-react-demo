import ButtonPage from "./pages/ButtonPage.jsx";
import {Link, Outlet} from "react-router-dom";
import {Routes, Route} from 'react-router-dom'
import HomePage from "./pages/HomePage.jsx";
import {useState} from "react";
import './App.css'
import {GridPage} from "./pages/GridPage.jsx";
import CardPage from "./pages/Card3DPage.jsx";
import Ball3DPage from "./pages/Ball3DPage.jsx";
import ProjectCardPage from "./pages/projectCardPage.jsx";

function App() {
    const [isActive, setActive] = useState('');

    return (
        <div className={'w-screen h-screen'}>
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
                        // {
                        //     name: '文件上传',
                        //     to: '/upload'
                        // },
                        {
                            name: '可翻转卡片',
                            to: '/3d/card'
                        },
                        {
                            name: '3d项目卡片',
                            to: '/3d/project-card'
                        },
                        {
                            name: '3d小球',
                            to: '/3d/ball'
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
                <Route path='/3d/card'>
                    <Route index element={<CardPage/>}/>
                </Route>
                <Route path='/3d/project-card'>
                    <Route index element={<ProjectCardPage/>}/>
                </Route>
                <Route path='/3d/ball'>
                    <Route index element={<Ball3DPage/>}/>
                </Route>
                {/*<Route path='/upload'>*/}
                {/*    <Route index element={<UploadPage/>}/>*/}
                {/*</Route>*/}
            </Routes>
        </div>
    )
}

export default App
