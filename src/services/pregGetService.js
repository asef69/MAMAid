import axiosInstance from "@/helpers/axiosInstance"

export async function pregGet(id){
    try {
        const response = await axiosInstance(`/tracker/pregnancy/${id}/`);
        return response.data;
    } catch (error) {
        console.log("Error occured: ", error)
    }
}