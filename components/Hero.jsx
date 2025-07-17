import Image from 'next/image';

const Hero = () => {
    return (
        <section
            id="home"
            className="bg-[#f6f9fe] w-full px-6 md:px-12"
        >
            <div className="md:h-[90vh] container block md:flex items-center justify-between gap-12">
                {/* Left content */}
                <div className="flex-1 md:text-left pt-32 pb-16 md:pt-0 md:pb-0">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        India's Smartest Outdoor Ad Booking Platform
                    </h1>
                    <p className="text-lg text-gray-600 mb-8">
                        Book high-impact billboards, metro, transit, and LED ads with ease.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <a
                            href="#ad-locations"
                            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium text-center hover:shadow-md backdrop-blur-lg hover:shadow-blue-300 hover:-translate-y-0.5 transition-all delay-100 ease-in-out"
                        >
                            EXPLORE LOCATIONS
                        </a>
                        <a
                            href="#ad-estimate"
                            className="px-6 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-100 rounded-lg font-medium text-center hover:-translate-y-0.5 transition-all delay-100 ease-in-out"
                        >
                            GET INSTANT ESTIMATE
                        </a>
                    </div>

                    <div className="mt-10 text-gray-500">
                        <p className="mb-2">Trusted by leading brands</p>
                        <div className="flex flex-wrap gap-6 font-semibold text-gray-400">
                            <span><Image className='rounded-sm' src={'/logos/iexpro.png'} width={100} height={40} alt='iexpro' /></span>
                            <span><Image className='rounded-sm' src={'/logos/northwood.png'} width={100} height={40} alt='iexpro' /></span>
                            <span><Image className='rounded-sm' src={'/logos/vas.png'} width={100} height={40} alt='iexpro' /></span>
                            <span><Image className='rounded-sm' src={'/logos/precise.png'} width={100} height={40} alt='iexpro' /></span>
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
