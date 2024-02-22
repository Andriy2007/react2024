import {Outlet} from "react-router-dom";
import Header from "../commponents/Header/Header";

const MainLayout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};