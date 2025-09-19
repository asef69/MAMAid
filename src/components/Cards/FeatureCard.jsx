function FeatureCard({ title, desc, icon }) {
    return (
        <div className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-100 text-rose-700">
                {icon}
            </div>
            <h4 className="mt-4 text-base font-semibold text-gray-900">{title}</h4>
            <p className="mt-2 text-sm leading-6 text-gray-600">{desc}</p>
            <div className="mt-4 text-xs font-medium text-rose-700 opacity-0 transition group-hover:opacity-100">
                Learn more →
            </div>
        </div>
    );
}

export default FeatureCard;