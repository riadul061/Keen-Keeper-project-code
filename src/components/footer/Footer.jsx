import React from 'react';
import { TiSocialFacebook } from 'react-icons/ti';

const Footer = () => {
    return (
        <div>
            <footer className="bg-green-900 text-white text-center py-12 mt-10">

                <h2 className="text-3xl font-bold">KeenKeeper</h2>

                <p className="text-[#ffffff] mt-3 max-w-xl mx-auto text-sm">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                </p>

                {/* Social Icons */}
                <div className='mt-6'>Social Links</div>
                <div className="flex justify-center gap-4 mt-6">
                    <div className="w-10 h-10 bg-white text-black flex items-center justify-center rounded-full">
                        <img src="/assets/instagram.png" alt="Instagram" className="w-5 h-5" />

                    </div>
                    <div className="w-10 h-10 bg-white text-black flex items-center justify-center rounded-full">
                        <img src="/assets/facebook.png" alt="Facebook" className="w-5 h-5" />
                    </div>
                    <div className="w-10 h-10 bg-white text-black flex items-center justify-center rounded-full">
                        <img src="/assets/twitter.png" alt="Twitter" className="w-5 h-5" />
                    </div>
                </div>

                {/* Bottom */}
                <div className='flex justify-between'>
                    <div className="mt-8 text-gray-500 text-sm flex flex-col md:flex-row justify-center gap-4">
                        <p>© 2025 KeenKeeper. All rights reserved.</p>
                    </div>

                    <div className="mt-8 text-gray-500 text-sm flex flex-col md:flex-row justify-center gap-4">
                        <p>Privacy Policy</p>
                        <p>Terms of Service</p>
                        <p>Contact</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;