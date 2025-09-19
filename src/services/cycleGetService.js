import axiosInstance from "@/helpers/axiosInstance";

export async function cycleGet(id) {
    try {
        const response = await axiosInstance.get(`/tracker/cycle/${id}/`);
        return response.data;
    } catch (error) {
        console.error("Error getting cycle data:", error);
    }
}