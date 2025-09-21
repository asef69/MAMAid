import Badge from "@/components/Cards/Badge";
import FeatureCard from "@/components/Cards/FeatureCard";
import TeamCard from "@/components/Cards/TeamCard";
import { useNavigate } from "react-router-dom";

function HomePage() {
    const navigate = useNavigate();
    const features = [
        // {
        //     title: "Anonymous AI Chat",
        //     desc:
        //         "Ask sensitive questions safely. Conversations are private and judgement‑free.",
        //     url: "http://192.168.0.178:5000/",
        //     icon: (
        //         <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
        //             <path
        //                 d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9l-5 5v-5H5a2 2 0 0 1-2-2V5Z"
        //                 fill="currentColor"
        //                 opacity=".1"
        //             />
        //             <path
        //                 d="M5 3h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9l-5 5v-5H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Zm0 2v9h14V5H5Z"
        //                 fill="currentColor"
        //             />
        //         </svg>
        //     ),
        // },
        {
            title: "Cycle Tracker",
            desc:
                "Track periods, symptoms, and insights to understand patterns and plan ahead.",
            url: "cycle-tracker",
            icon: (
                <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" fill="none" />
                    <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
            ),
        },
        {
            title: "Pregnancy Tracker",
            desc:
                "Week‑by‑week milestones, checklists, and reminders for tests, meds, and visits.",
            url: "pregnancy-tracker",
            icon: (
                <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
                    <path d="M12 3a6 6 0 0 0-6 6c0 2.8 1.9 5.2 4.5 5.8A4 4 0 1 0 16 21h1a4 4 0 0 0 0-8 6 6 0 0 0-5-10Z" fill="currentColor" />
                </svg>
            ),
        },
        {
            title: "Emergency & Nearby Care",
            desc:
                "One‑tap emergency help and nearest clinics via maps when minutes matter.",
            url: "emergency",
            icon: (
                <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
                    <path d="M12 2C7 2 3 6 3 11c0 6 9 11 9 11s9-5 9-11c0-5-4-9-9-9Zm0 12a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" fill="currentColor" />
                </svg>
            ),
        },
        {
            title: "Education Blogs",
            desc:
                "Trusted content on menstrual, reproductive, and mental health to fight myths.",
            url: "blogs",
            icon: (
                <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
                    <path d="M4 5a2 2 0 0 1 2-2h11a3 3 0 0 1 3 3v13l-3-2-3 2-3-2-3 2-3-2-1 1V5Z" fill="currentColor" />
                </svg>
            ),
        },
    ];

    const values = [
        {
            title: "Privacy by Design",
            desc: "Anonymity comes first. We minimize data and give you control.",
        },
        {
            title: "Accessible for All",
            desc: "Lightweight web app that works on low‑cost devices and slow networks.",
        },
        {
            title: "Prevention‑Focused",
            desc: "Proactive reminders and early guidance to reduce health risks.",
        },
    ];

    const team = [
        { name: "Md. Iztihad Islam", role: "Team Leader" },
        { name: "Kazi Asef Kabir", role: "Member" },
        { name: "Rayyan Khalil", role: "Member" },
    ];

    return (
        <div className="min-h-screen w-full bg-gradient-to-b from-rose-50 via-white to-white text-gray-800">
            {/* Hero Section */}
            
            <section className="relative overflow-hidden">
                <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-rose-200/60 blur-3xl" />
                <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-fuchsia-200/60 blur-3xl" />
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
                    <div className="grid items-center gap-12 lg:grid-cols-2">
                        <div className="space-y-6">
                            <span className="inline-flex items-center gap-2 rounded-full bg-rose-100 px-3 py-1 text-sm font-medium text-rose-700">
                                <span className="h-2 w-2 rounded-full bg-rose-500" /> Team AIR
                            </span>
                            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                                MAMAid — Women’s Health & Wellness Assistant
                            </h1>
                            <p className="text-lg leading-8 text-gray-600">
                                We build stigma‑free, accessible digital tools that support women’s health — from menstrual and reproductive care to pregnancy and mental well‑being — with privacy at the core.
                            </p>
                            <div className="flex flex-wrap items-center gap-3">
                                <Badge>SDG 3: Good Health</Badge>
                                <Badge>SDG 5: Gender Equality</Badge>
                                <Badge>Privacy‑First</Badge>
                            </div>
                            <div className="flex gap-3 pt-2">
                                <a
                                    onClick={() => navigate("/login")}
                                    className="inline-flex items-center justify-center rounded-2xl bg-rose-600 px-5 py-3 text-white shadow-lg shadow-rose-600/20 transition hover:-translate-y-0.5 hover:bg-rose-700"
                                >
                                    Get Started
                                </a>
                                <a
                                    onClick={() => navigate("/contact-us")}
                                    className="inline-flex items-center justify-center rounded-2xl border border-gray-300 px-5 py-3 text-gray-800 transition hover:-translate-y-0.5 hover:bg-gray-50"
                                >
                                    Contact Us
                                </a>
                                <button
                                    onClick={() => window.open("http://192.168.0.178:5000/", "_blank")}
                                    className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-5 py-3 text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
                                >
                                    Open Chatbot
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}

            <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                    What MAMAid Does
                </h2>
                <p className="mt-2 max-w-2xl text-gray-600">
                    A focused feature set to deliver real impact from day one.
                </p>
                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((f) => (
                        <div key={f.title} onClick={() => navigate(`/${f.url}`)} className="cursor-pointer">
                            <FeatureCard title={f.title} desc={f.desc} icon={f.icon} />
                        </div>
                    ))}
                </div>
            </section>

            {/* Values Section */}

            <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
                <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
                    <h3 className="text-xl font-semibold text-gray-900">Our Principles</h3>
                    <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {values.map((v) => (
                            <div
                                key={v.title}
                                className="rounded-2xl border border-gray-100 bg-gradient-to-br from-white to-gray-50 p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                            >
                                <p className="text-base font-semibold text-gray-900">{v.title}</p>
                                <p className="mt-2 text-sm leading-6 text-gray-600">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}

            <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Meet the Team</h2>
                <p className="mt-2 max-w-2xl text-gray-600">
                    Three builders committed to privacy, accessibility, and real‑world impact.
                </p>
                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {team.map((m) => (
                        <TeamCard key={m.name} name={m.name} role={m.role} />
                    ))}
                </div>
            </section>

        </div>
    );
}

export default HomePage;