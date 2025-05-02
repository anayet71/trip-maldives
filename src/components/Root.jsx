import { Outlet } from "react-router-dom";
import Banner from "./Banner";
import Navbar from "./Navbar";

const Root = () => {
    return (
        <div className="">
            <Navbar></Navbar>
            <Banner></Banner>
            <div className="flex justify-center py-8 bg-teal-50">
                <Outlet></Outlet>

            </div>
        </div>
    );
};

export default Root;