function initials(name) {
    return name
        .split(" ")
        .filter(Boolean)
        .slice(0, 2)
        .map((n) => n[0]?.toUpperCase())
        .join("");
}

export default initials;