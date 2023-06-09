import { Routes, Route, Outlet, Link } from 'react-router-dom'; 
import App from "./App.jsx"; 

function Layout(){
    return (
        <>
            <div>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </div>
        </>
    )
}

function About(){
    return (
        <>
            <h1> ASU </h1>
        </>
    )
}

function Test(){
    return(
        <>
            <h1>IT WORKS</h1>
            <p> Ya jadi gitu??</p>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<App />}/>
                    <Route path="about" element={<About />} />
                </Route>
            </Routes>
        </>
    )
}

export default Test
