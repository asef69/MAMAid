import axiosInstance from "@/helpers/axiosInstance";

export async function blogPost(blogData){
    try {
        const response = await axiosInstance.post("/education/posts/mine/", blogData);
        return response.data;
    } catch (error) {
        console.log("Error posting blog: ", error);
    }
}