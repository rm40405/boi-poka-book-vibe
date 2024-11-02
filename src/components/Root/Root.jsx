import { Outlet } from "react-router-dom";
import Footer from "../NavBar/Footer/Footer";
import Navbar from "../NavBar/Navbar";


const Root = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;