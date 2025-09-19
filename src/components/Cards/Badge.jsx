function Badge({ children }) {
    return (
        <span className="inline-flex items-center rounded-full border border-rose-200 bg-white px-3 py-1 text-xs font-medium text-rose-700 shadow-sm">
            {children}
        </span>
    );
}

export default Badge;