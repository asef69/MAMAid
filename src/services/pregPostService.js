import axiosInstance from "@/helpers/axiosInstance";

export async function pregPost(dataObject){
    try {
        const response = await axiosInstance.post("/tracker/pregnancy/", dataObject);
        return response.data;
    } catch (error) {
        console.log("Error occured: ", error);
    }
}