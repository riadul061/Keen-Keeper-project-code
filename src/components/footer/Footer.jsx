import React from 'react';

const Footer = () => {
    return (
        <div>
    <footer className="bg-green-900 text-white text-center py-12 mt-10">
      
      <h2 className="text-3xl font-bold">KeenKeeper</h2>

      <p className="text-gray-400 mt-3 max-w-xl mx-auto">
        Your personal shelf of meaningful connections. Browse, tend, and nurture 
        the relationships that matter most.
      </p>

      {/* Social Icons */}
              <div className='mt-6'>Social Links</div>
      <div className="flex justify-center gap-4 mt-6">
        <div className="w-10 h-10 bg-white text-black flex items-center justify-center rounded-full">
          f
        </div>
        <div className="w-10 h-10 bg-white text-black flex items-center justify-center rounded-full">
          in
        </div>
        <div className="w-10 h-10 bg-white text-black flex items-center justify-center rounded-full">
          x
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