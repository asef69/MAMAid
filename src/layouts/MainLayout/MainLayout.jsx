import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function MainLayout(){
    return(
        <div className="flex flex-col min-h-screen justify-between items-center">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
}

export default MainLayout;