import { useNavigate } from "react-router-dom";

function Dashboard(){
    const navigate = useNavigate();
    return(
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-5xl font-bold">Dashboard</h1>
            <div>
                <div className="mt-10 p-6 border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition duration-300 h-[150px] w-[200px] flex flex-col items-center justify-center cursor-pointer hover:scale-105">
                    <p className="text-2xl" onClick={() => navigate("post")}>Post a blog</p>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;