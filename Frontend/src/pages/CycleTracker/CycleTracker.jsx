import { cycleGet } from "@/services/cycleGetService";
import { cyclePost } from "@/services/cyclePostService";
import userStore from "@/state/userState";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";

function CycleTracker(){
    const [last_period_date, setLastPeriodDate] = useState("");
    const [cycle_length, setCycleLength] = useState(0);
    const [next_period_date, setNextPeriodDate] = useState("");


    const cycleMutation = useMutation({
        mutationFn: (cycleData) => cyclePost(cycleData)
    })

    const { user } = userStore();
    const id = user.details.id;

    const { data } = useQuery({
        queryKey: ['cycleData'],
        queryFn: () => cycleGet(id),
        cacheTime: 0,
        // refetchInterval: 2000,
    })

    console.log("cycle data", data);

    // Helper to format date as yyyy-mm-dd
    function formatDate(dateStr) {
        if (!dateStr) return "";
        const d = new Date(dateStr);
        const yyyy = d.getFullYear();
        const mm = String(d.getMonth() + 1).padStart(2, '0');
        const dd = String(d.getDate()).padStart(2, '0');
        return `${yyyy}-${mm}-${dd}`;
    }

    const handleSubmit = () => {
        const cycleData = {
            last_period_date: formatDate(last_period_date),
            cycle_length,
            next_period_date: formatDate(next_period_date)
        };
        cycleMutation.mutate(cycleData);
    }

    return(
        <div className="min-h-screen flex flex-col items-center justify-start p-4">

            {/* heading div */}

            <div>
                <h1 className="text-3xl font-bold mb-4">Period Cycle Tracker</h1>
            </div>

            {/* search div */}

            <div className="flex justify-between items-center w-full mt-4 border-2 rounded-lg p-2 gap-5">

                <div className="flex flex-col gap-5">
                    <label>Last period date:</label>
                    <input type="date" className="w-[200px] border-2 rounded-lg p-3" value={last_period_date} onChange={(e) => setLastPeriodDate(e.target.value)} />
                </div>

                <div className="flex flex-col gap-5">
                    <label>Cycle length:</label>
                    <input type="number" className="w-[200px] border-2 rounded-lg p-3" value={cycle_length} onChange={(e) => setCycleLength(e.target.value)} />
                </div>

                <div className="flex flex-col gap-5">
                    <label>Next period date:</label>
                    <input type="date" className="w-[200px] border-2 rounded-lg p-3" value={next_period_date} onChange={(e) => setNextPeriodDate(e.target.value)} />
                </div>

                <button onClick={handleSubmit} className="bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition">
                    Submit
                </button>

            </div>

            <div>
                {data && (
                    <div className="mt-6 p-4 border rounded-lg w-full max-w-md bg-white shadow">
                        <h2 className="text-2xl font-semibold mb-4 text-pink-600">Your Cycle Data</h2>
                        <p><span className="font-semibold">Last Period Date:</span> {data.last_period_date}</p>
                        <p><span className="font-semibold">Cycle Length:</span> {data.cycle_length} days</p>
                        <p><span className="font-semibold">Next Period Date:</span> {data.next_period_date}</p>
                        <p><span className="font-semibold">Predicted Date:</span> 
                            <div className="flex flex-col gap-1 mt-1">
                                {
                                data.predictions?.map((date, idx) => (
                                    <span key={idx}>{date}{idx < data.predictions.length - 1 ? ', ' : ''}</span>
                                ))
                                }
                            </div>
                        </p>
                    </div>
                )}
            </div>

        </div>
    )
}

export default CycleTracker;