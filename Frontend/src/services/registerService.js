import axiosInstance from "@/helpers/axiosInstance";

export async function register(userObject){
    try {
        const response = await axiosInstance.post(`/auth/register/`, userObject);
        return response.data;
    } catch (error) {
        console.log("Error khaisen vai: ", error);
    }
}