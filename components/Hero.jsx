import Image from 'next/image';

const Hero = () => {
    return (
        <section
            id="home"
            className="bg-[#f6f9fe] w-full px-6 md:px-12"
        >
            <div className="md:h-[90vh] container block md:flex items-center justify-between gap-12">
                {/* Left content */}
                <div className="flex-1 md:text-left py-20 md:py-0">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        India's Smartest Outdoor Ad Booking Platform
                    </h1>
                    <p className="text-lg text-gray-600 mb-8">
                        Book high-impact billboards, metro, transit, and LED ads with ease.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <a
                            href="#locations"
                            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium"
                        >
                            EXPLORE LOCATIONS
                        </a>
                        <a
                            href="#estimate"
                            className="px-6 py-3 border border-blue-600 text-blue-600 hover:bg-blue-50 rounded-lg font-medium"
                        >
                            GET INSTANT ESTIMATE
                        </a>
                    </div>

                    <div className="mt-10 text-gray-500 text-sm">
                        <p className="mb-2">Trusted by leading brands</p>
                        <div className="flex flex-wrap gap-6 font-semibold text-gray-400">
                            <span>BRAND A</span>
                            <span>BRAND B</span>
                            <span>BRAND C</span>
                            <span>BRAND D</span>
                        </div>
                    </div>
                </div>

                {/* Right image */}
                <div className="flex-1 flex justify-center">
                    <Image
                        src="/animated.svg"
                        alt="Hero Illustration"
                        width={500}
                        height={300}
                        priority
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
