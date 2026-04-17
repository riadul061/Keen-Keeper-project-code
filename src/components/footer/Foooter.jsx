import React from 'react';
import facebookImg from "@/assets/facebook.png";
import instagramImg from "@/assets/instagram.png";
import twitterImg from "@/assets/twitter.png";
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="bg-green-900 text-white py-12 mt-10">
            
            {/* Container */}
            <div className="max-w-6xl mx-auto px-4 text-center">

                {/* Title */}
                <h2 className="text-3xl font-bold">KeenKeeper</h2>

                {/* Description */}
                <p className="mt-3 max-w-xl mx-auto text-sm text-gray-200">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                </p>

                {/* Social Links */}
                <div className='mt-6'>Social Links</div>
                <div className="flex justify-center gap-4 mt-6">
                    <div className="w-10 h-10 bg-white text-black flex items-center justify-center rounded-full">
                        <Image src={instagramImg} alt="Instagram logo" className="w-5 h-5" />
                    </div>
                    <div className="w-10 h-10 bg-white text-black flex items-center justify-center rounded-full">
                        <Image src={facebookImg} alt="Facebook logo" className="w-5 h-5" />
                    </div>
                    <div className="w-10 h-10 bg-white text-black flex items-center justify-center rounded-full">
                        <Image src={twitterImg} alt="Twitter logo" className="w-5 h-5" />
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-10 border-t border-gray-600 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
                    
                    <p>© 2025 KeenKeeper. All rights reserved.</p>

                    <div className="flex gap-6">
                        <p className="hover:text-white cursor-pointer">Privacy Policy</p>
                        <p className="hover:text-white cursor-pointer">Terms of Service</p>
                        <p className="hover:text-white cursor-pointer">Contact</p>
                    </div>

                </div>

            </div>
        </footer>
    );
};

export default Footer;