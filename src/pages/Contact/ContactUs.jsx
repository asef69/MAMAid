const contactInfo = [
    {
        name: "Md. Iztihad Islam",
        email: "iiztihad@gmail.com",
        phone: "+8801781032582"
    },
    {
        name: "Kazi Asef Kabir",
        email: "asefkabir97@gmail.com",
        phone: "+8801401406567"
    },
    {
        name: "Rayyan Khalil",
        email: "rayyankhalil167373@gmail.com",
        phone: "+8801631039030"
    }
]

function ContactUs(){
    return(
        <div className="min-h-screen w-full flex flex-col justify-center items-center bg-gradient-to-b from-[#FF7A8B] to-[#FDCB82] text-gray-800">
            <h1 className="text-5xl font-bold">Contact Us</h1>

            <div className="mt-10 flex flex-wrap justify-center">
                {
                    contactInfo.map((contact, map) => {
                        return (
                            <div key={map} className="bg-white bg-opacity-70 rounded-lg shadow-lg p-6 m-4 w-80">
                                <h2 className="text-2xl font-semibold mb-2">{contact.name}</h2>
                                <p className="text-gray-700 mb-1">Email: <a href={`mailto:${contact.email}`} className="text-blue-600 hover:underline">{contact.email}</a></p>
                                <p className="text-gray-700">Phone: <a href={`tel:${contact.phone}`} className="text-blue-600 hover:underline">{contact.phone}</a></p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ContactUs;