import axiosInstance from "@/helpers/axiosInstance";

export async function cyclePost(cycleData) {
    try {
        const response = await axiosInstance.post('/tracker/cycle/', cycleData);
        return response.data;
    } catch (error) {
        console.error("Error posting cycle data:", error);
    }
}