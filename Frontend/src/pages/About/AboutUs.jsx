import React from 'react';
import Pic from "@/assets/teamPic.jpg"

function AboutUs() {
    return (
        <div className="w-full h-full bg-gradient-to-b from-[#FF7A8B] to-[#FDCB82] py-10 px-6">
            <header className="text-center mb-12">
                <h1 className="text-5xl font-extrabold text-white tracking-tight mb-4">
                    About MAMAid – Women’s Health & Wellness Assistant
                </h1>
                <p className="text-lg text-white">
                    Empowering women with timely health support, guidance, and education.
                </p>
            </header>

            <section className="text-center max-w-4xl mx-auto mb-10">
                <h2 className="text-3xl font-semibold text-white mb-6">Our Mission</h2>
                <p className="text-xl text-white leading-relaxed">
                    MAMAid is designed to bridge the gap in healthcare access for women in underserved regions. Our goal is to provide a stigma-free, confidential platform where women can get support on maternal health, menstrual health, reproductive issues, and mental well-being. We believe in making health information and support accessible to all women, regardless of their location or social status.
                </p>
            </section>

            <section className="text-center max-w-4xl mx-auto mb-10">
                <h2 className="text-3xl font-semibold text-white mb-6">Why MAMAid?</h2>
                <p className="text-xl text-white leading-relaxed">
                    MAMAid was created to address the pressing issues women face in accessing healthcare. With over 287,000 maternal deaths in 2020 alone, many of these deaths could have been prevented with timely guidance and support. Our chatbot and tracking system empowers women with the tools they need to take control of their health.
                </p>
                <ul className="text-white text-lg mt-6 list-inside">
                    <li>Confidential, stigma-free platform</li>
                    <li>Support for maternal, menstrual, reproductive, and mental health</li>
                    <li>Accessible on low-cost devices</li>
                    <li>Free and available to all, particularly in rural communities</li>
                </ul>
            </section>

            <section className="text-center max-w-4xl mx-auto mb-10">
                <h2 className="text-3xl font-semibold text-white mb-6">Our Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold text-[#FF7A8B] mb-4">Cycle & Pregnancy Tracker</h3>
                        <p className="text-lg">
                            Track your menstrual cycle and pregnancy milestones with reminders for medicines, vaccinations, and checkups.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold text-[#FF7A8B] mb-4">Emergency Help & Locator</h3>
                        <p className="text-lg">
                            In case of an emergency, instantly find the nearest clinic or hospital with our location-based service powered by Google Maps.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold text-[#FF7A8B] mb-4">Anonymous Chatbot</h3>
                        <p className="text-lg">
                            Engage with a safe, anonymous chatbot for confidential health inquiries, without the fear of judgment.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold text-[#FF7A8B] mb-4">Educational Resources</h3>
                        <p className="text-lg">
                            Access blogs and articles on maternal health, reproductive well-being, and mental health to empower yourself with knowledge.
                        </p>
                    </div>
                </div>
            </section>

            <section className="text-center max-w-4xl mx-auto mb-10">
                <h2 className="text-3xl font-semibold text-white mb-6">Our Vision</h2>
                <p className="text-xl text-white leading-relaxed">
                    MAMAid envisions a future where women everywhere, especially in rural and low-income communities, have access to essential health information and support. By tackling maternal mortality, mental health issues, and reproductive health stigma, we aim to create a healthier, more empowered world for women.
                </p>
            </section>

            <section className="text-center mb-10 flex flex-col justify-center items-center">
                <h2 className="text-3xl font-semibold text-white mb-6">The Team Behind MAMAid</h2>
                <img src={Pic} alt="" className='w-[300px] h-[400px]' />
                <p className="text-lg text-white">
                    Our team is passionate about women's health and well-being. We are committed to creating solutions that break down barriers and empower women worldwide.
                </p>
                <div className="flex justify-center gap-6 mt-6">
                    <div className="text-white">
                        <h3 className="font-semibold text-xl">Md. Iztihad Islam</h3>
                        <p className="text-lg">Team Leader</p>
                    </div>
                    <div className="text-white">
                        <h3 className="font-semibold text-xl">Kazi Asef Kabir</h3>
                        <p className="text-lg">Team Member</p>
                    </div>
                    <div className="text-white">
                        <h3 className="font-semibold text-xl">Rayyan Khalil</h3>
                        <p className="text-lg">Team Member</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AboutUs;
