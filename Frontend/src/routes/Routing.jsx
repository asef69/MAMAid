import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import LoginOrSignup from "@/pages/LoginOrSignup/LoginOrSignup";
import HomePage from "@/pages/HomePage/HomePage";
import Emergency from "@/pages/Emergency/Emergency";
import AboutUs from "@/pages/About/AboutUs";
import ContactUs from "@/pages/Contact/ContactUs";
import Dashboard from "@/pages/Dashboard/Dashboard";
import PostBlog from "@/pages/Dashboard/PostBlog";
import BlogList from "@/pages/Blogs/BlogList";
import Blog from "@/pages/Blogs/Blog";
import userStore from "@/state/userState";
import CycleTracker from "@/pages/CycleTracker/CycleTracker";
import PregnancyTracker from "@/pages/PregnancyTracker/PregnancyTracker";

function Routing(){
    const { user } = userStore();
    return(
        <Routes>
            <Route path="/*" element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path="login" element={<LoginOrSignup />} />
                <Route path="emergency" element={<Emergency />} />
                <Route path="about-us" element={<AboutUs />} />
                <Route path="contact-us" element={<ContactUs />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="dashboard/post" element={<PostBlog />} />
                <Route path="blogs" element={<BlogList />} />
                <Route path="blogs/:id" element={<Blog />} />
                <Route path="cycle-tracker" element={user ? <CycleTracker /> : <LoginOrSignup />} />
                <Route path="pregnancy-tracker" element={user ? <PregnancyTracker /> : <LoginOrSignup />} />
            </Route>
        </Routes>
    )
}

export default Routing;