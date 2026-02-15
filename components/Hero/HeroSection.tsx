"use client";

import { MdArrowForward, MdPlayCircleOutline } from "react-icons/md";

const HeroSection = () => {
    return (
        <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-20 overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 -z-10">
                <img
                    alt="Modern Workspace Background"
                    className="w-full h-full object-cover object-center"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSEFtpmoBEBLRfJtgVmHFJbIGX3RgrFhY4hd8McWglwbkZwJ4ixB5pLfnbkawGvTkXQQZ6Ba5ZfcNUusG3e7TjRls2sh_r2NUDQnp2DUEmdJmidImoK4SPlLnNQ-FCcPaCyRHVm_6nSnC3tgRNidi_NeIs0_vAOhBN7MstlrXb4h-fJIePXuMsfMpdPP04q1v71V7pGeK1HMkwiP75ongAiSIrMdXzJj87FODsOXj6CKmghu07mjcqR5nY_xUssAHaDmDwy3gpyXo"
                />
                <div className="absolute inset-0 bg-gray-900/60 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/20 via-transparent to-gray-900/60"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-orange-200 text-sm font-semibold mb-8">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    v2.0 is now live
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-8 max-w-4xl mx-auto leading-tight drop-shadow-sm font-display">
                    Transform Your Workflow with <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">Speed & Precision</span>
                </h1>

                <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-sm font-display">
                    Join thousands of professionals who have streamlined their daily tasks. Our platform offers the intelligent tools you need to succeed in a fast-paced environment.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                    <a
                        href="#"
                        className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-xl text-white bg-primary hover:bg-orange-600 transition-all shadow-lg shadow-orange-900/20 hover:shadow-orange-900/40 transform hover:-translate-y-0.5 border border-transparent font-display"
                    >
                        Get Started Free
                        <MdArrowForward className="text-sm ml-2" />
                    </a>
                    <a
                        href="#"
                        className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-xl text-white bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all shadow-sm font-display"
                    >
                        <MdPlayCircleOutline className="text-primary mr-2" />
                        Watch Video
                    </a>
                </div>


            </div>
        </section>
    );
};

export default HeroSection;
