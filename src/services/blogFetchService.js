import axiosInstance from "@/helpers/axiosInstance";

export async function fetchBlogs(){
    try {
        console.log("Fetching blogs...");
        const response = await axiosInstance.get('/education/posts/');
        return response.data;
    } catch (error) {
        console.log("Error fetching blogs: ", error);
    }
}