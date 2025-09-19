import axiosInstance from "@/helpers/axiosInstance";

export async function signin(userObject){
    try {
        const response = await axiosInstance.post('/auth/login/', userObject);
        return response.data;
    } catch (error) {
        console.log("Error occured during signing in: ", error);
    }
}