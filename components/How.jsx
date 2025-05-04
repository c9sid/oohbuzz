import { HiOutlineShieldCheck, HiOutlineLightningBolt, HiOutlineMap, HiOutlineCalculator } from "react-icons/hi";

export default function How() {
    const steps = [
        {
            icon: <HiOutlineMap />,
            title: "Choose Locations",
            description: "Select from pan-India OOH spots that match your target audience",
        },
        {
            icon: <HiOutlineCalculator />,
            title: "Get Instant Estimate",
            description: "Know your cost right away with our transparent pricing",
        },
        {
            icon: <HiOutlineShieldCheck />,
            title: "Book with Confidence",
            description: "Expert support and live tracking throughout your campaign",
        },
        {
            icon: <HiOutlineLightningBolt />,
            title: "Go Live Fast",
            description: "Activate your campaign in 48–72 hrs with our streamlined process",
        },
    ];

    return (
        <section id="how-it-works" className="container mx-auto py-20 bg-white text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-10">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
                {steps.map((step, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <div className="bg-blue-50 text-blue-600 text-3xl rounded-full p-6 mb-4">
                            {step.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
