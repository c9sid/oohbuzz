import { FaWhatsapp, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { HiOutlineCalculator, HiOutlineLocationMarker, HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

export default function Footer() {
    return (
        <footer id="contact" className="bg-[#0d1321] text-white pt-20 px-6">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 pb-8">
                {/* Contact Section */}
                <div className="flex flex-col gap-3">
                    <h3 className="text-2xl font-bold mb-2">Need Help or a Custom Plan?</h3>
                    <p className="mb-4">
                        Our team is ready to help you create the perfect outdoor advertising campaign.
                    </p>
                    <div className="flex flex-col space-y-2">
                        <p className="inline-flex gap-3 items-center"><HiOutlinePhone className="text-yellow-500 text-xl" /><a href="tel:+919876543210">+91 98765 43210</a></p>
                        <p className="inline-flex gap-3 items-center"><HiOutlineMail className="text-yellow-500 text-xl" /> <a href="mailto:hello@ohhbuzz.com">hello@oohbuzz.com</a></p>
                        <p className="inline-flex gap-3 items-center"><HiOutlineLocationMarker className="text-yellow-500 text-xl" /><a href="https://maps.google.com/">Mumbai, India</a></p>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="flex flex-col gap-3">
                    <h3 className="text-2xl font-bold mb-2">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-yellow-500">About Us</a></li>
                        <li><a href="#" className="hover:text-yellow-500">Services</a></li>
                        <li><a href="#" className="hover:text-yellow-500">Case Studies</a></li>
                        <li><a href="#" className="hover:text-yellow-500">Pricing</a></li>
                        <li><a href="#" className="hover:text-yellow-500">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-yellow-500">Terms of Use</a></li>
                    </ul>
                </div>

                {/* WhatsApp & Social */}
                <div className="flex flex-col gap-3">
                    <h3 className="text-2xl font-semibold mb-2">Connect on WhatsApp</h3>
                    <p className="mb-4">
                        Get instant support and updates directly on WhatsApp
                    </p>
                    <a
                        href="https://wa.me/919876543210"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-green-600 text-white py-3 px-4 rounded-md hover:bg-green-700"
                    >
                        <FaWhatsapp className="text-2xl" /> Chat with Us
                    </a>

                    <div className="mt-6 flex flex-col gap-3">
                        <h4 className="font-semibold mb-2 text-2xl">Follow Us</h4>
                        <div className="flex gap-4 text-xl text-gray-300">
                            <a href="https://www.linkedin.com/" className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 hover:scale-105 hover:text-white"><FaLinkedinIn /></a>
                            <a href="https://www.instagram.com/" className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 hover:scale-105 hover:text-white"><FaInstagram /></a>
                            <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 hover:scale-105 hover:text-white"><FaXTwitter /></a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-700 mt-10 py-4 text-center text-sm text-gray-400">
                © 2025 OOHBUZZ. All Rights Reserved.
            </div>

            <div className="fixed bottom-5 right-5 z-10 flex md:hidden">
                <Link href={"#ad-estimate"} className="inline-flex gap-2 items-center bg-blue-600 hover:bg-blue-700 text-white rounded-md px-4 py-2 shadow-sm hover:shadow-md backdrop-blur-lg hover:shadow-blue-300 hover:-translate-y-0.5 transition-all delay-100 ease-in-out"><HiOutlineCalculator /> GET ESTIMATE</Link>
            </div>
        </footer>
    );
}
