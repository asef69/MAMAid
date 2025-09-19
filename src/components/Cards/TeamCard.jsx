import initials from "@/helpers/initials";

function TeamCard({ name, role }) {
    return (
        <div className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-rose-400 to-fuchsia-500 text-white text-lg font-bold">
                {initials(name)}
            </div>
            <div>
                <p className="text-sm font-semibold text-gray-900">{name}</p>
                <p className="text-xs text-gray-600">{role}</p>
            </div>
        </div>
    );
}

export default TeamCard;