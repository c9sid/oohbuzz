import { HiOutlineChartBar, HiOutlineChatAlt2, HiOutlineCheckCircle, HiOutlineClock, HiOutlineCurrencyDollar, HiOutlineUsers } from "react-icons/hi";

export default function Why() {
    const reasons = [
        {
            icon: <HiOutlineCheckCircle />,
            title: "Verified Media Sites",
            description: "Access to 10,000+ verified outdoor advertising locations across India",
        },
        {
            icon: <HiOutlineClock />,
            title: "Real-Time Estimation",
            description: "Get instant pricing and availability without waiting for quotes",
        },
        {
            icon: <HiOutlineChatAlt2 />,
            title: "WhatsApp-first Experience",
            description: "Manage your entire campaign through WhatsApp for convenience",
        },
        {
            icon: <HiOutlineCurrencyDollar />,
            title: "No Hidden Charges",
            description: "Transparent pricing with all costs clearly displayed upfront",
        },
        {
            icon: <HiOutlineChartBar />,
            title: "Performance Analytics",
            description: "Track campaign performance with detailed analytics and reporting",
        },
        {
            icon: <HiOutlineUsers />,
            title: "Trusted by Top Brands",
            description: "Join hundreds of leading brands who trust OOHBUZZ for their campaigns",
        },
    ];

    return (
        <section id="about" className="bg-blue-600 text-white py-20 px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Why OOHBUZZ?</h2>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                {reasons.map((reason, index) => (
                    <div
                        key={index}
                        className="bg-blue-700 hover:bg-blue-800 focus:bg-blue-800 transition-all duration-300 ease-in-out p-6 flex flex-col rounded-lg gap-4 group"
                    >
                        <div className="flex items-center gap-3">
                            <div className="bg-yellow-400 text-blue-700 rounded-full p-3 flex items-center justify-center text-xl group-hover:bg-white">
                                {reason.icon}
                            </div>
                            <h3 className="font-semibold text-xl">{reason.title}</h3>
                        </div>

                        <div>
                            <p className=" text-gray-50 font-light mt-1">{reason.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
