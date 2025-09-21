import { cycleGet } from "@/services/cycleGetService";
import { pregGet } from "@/services/pregGetService";
import { pregPost } from "@/services/pregPostService";
import userStore from "@/state/userState";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";

function PregnancyTracker(){
    const [lmp, setlmp] = useState("");
    const [notes, setNotes] = useState("");
    const [due_date, setDueDate] = useState("");


    const pregMutation = useMutation({
        mutationFn: (pregData) => pregPost(pregData)
    })

    const { user } = userStore();
    const id = user.details.id;

    const { data } = useQuery({
        queryKey: ['pregData'],
        queryFn: () => pregGet(id),
        cacheTime: 0,
        // refetchInterval: 2000,
    })

    console.log("preg data", data);

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
        const pregData = {
            lmp: formatDate(lmp),
            notes,
            due_date: formatDate(due_date)
        };
        pregMutation.mutate(pregData);
    }

    return(
        <div className="min-h-screen flex flex-col items-center justify-start p-4">

            {/* heading div */}

            <div>
                <h1 className="text-3xl font-bold mb-4">Pregnancy Tracker</h1>
            </div>

            {/* search div */}

            <div className="flex justify-between items-center w-full mt-4 border-2 rounded-lg p-2 gap-5">

                <div className="flex flex-col gap-5">
                    <label>Last Menstrual Period:</label>
                    <input type="date" className="w-[200px] border-2 rounded-lg p-3" value={lmp} onChange={(e) => setlmp(e.target.value)} />
                </div>

                <div className="flex flex-col gap-5">
                    <label>Notes:</label>
                    <input type="text" className="w-[200px] border-2 rounded-lg p-3" value={notes} onChange={(e) => setNotes(e.target.value)} />
                </div>

                <div className="flex flex-col gap-5">
                    <label>Next period date:</label>
                    <input type="date" className="w-[200px] border-2 rounded-lg p-3" value={due_date} onChange={(e) => setDueDate(e.target.value)} />
                </div>

                <button onClick={handleSubmit} className="bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition">
                    Submit
                </button>

            </div>

            <div>
                {data && (
                    <div className="mt-6 p-4 border rounded-lg w-full max-w-md bg-white shadow">
                        <h2 className="text-2xl font-semibold mb-4 text-pink-600">Your Cycle Data</h2>
                        <p><span>Current Week: </span>{data?.current_week}</p>
                        <p><span>Trimester: </span>{data?.trimester}</p>
                    </div>
                )}
            </div>

        </div>
    )
}

export default PregnancyTracker;