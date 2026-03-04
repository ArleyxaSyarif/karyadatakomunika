export default function TransformPorto() {
    return (
        <section className="py-24 px-6 lg:px-20 bg-blue-50/50 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-black text-blue-950 mb-4">Extreme Transformation</h2>
                    <p className="text-blue-700 max-w-2xl mx-auto text-lg">Witness the power of engineering as we turn derelict spaces into state-of-the-art infrastructure.</p>
                </div>
                <div className="grid lg:grid-cols-2 gap-8 relative">
                    <div className="group relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/10 border border-blue-100">
                        <img className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Abandoned industrial site before renovation" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxphuEHbSAK8QnBpb5jsdTVELGk_C7kbBJyJa6QokCwr0kcYZjHFRtLNtzUcQ3YU7Y2B4n_GkEcw5UY1N3Mq7AwdBaO4NEWma4Jx5oRRz1cL-jDRtlUyZHGsxDpCsO_dxXD4MmfiSnZpK1VyIALB13aHWfAOSyxjAQapfrmwLmQPGzD7DfgjEoHFdajPYk0R3uYCzhQHjR_k5yFHoTPeGKMXzFKtDp7aARzkZC7F7mWd_aPOmSGCTrD6rWPzcc2FoMDulPIE2mPOE" alt="Abandoned industrial site before renovation" />
                        <div className="absolute top-6 left-6 bg-blue-950/80 text-white px-5 py-2.5 rounded-xl font-bold text-sm backdrop-blur-md border border-white/10 shadow-lg">BEFORE: 2018</div>
                        <div className="absolute inset-0 bg-blue-950/20 group-hover:bg-transparent transition-all duration-500"></div>
                    </div>
                    <div className="group relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/10 border border-blue-100">
                        <img className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Stunning modern glass office complex after renovation" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOFYHa2mUv64sLmhKh7xEefEHdHdgrx3AGi7RwY9jGfzhNPcGC-KKqEmh7G98-AqpCb9315u25WfRcYYSWTNQ2J5zM4BrOtXYj-fspKcNTns7yePt0O5iIFc-Dg56tt09RCJLdI_sSNRzx6jw9wLs6gEuG55En_qYCkRig-TESZQKbvNsvwORPGyQLxhXFMzZkHApy6krW-wpbCnIgx32VpoJC4eWMVWJw8-4mhkbgbcWo93sYjrXnO_gdic35c7cVLK2UlhUIBK0" alt="Stunning modern glass office complex after renovation" />
                        <div className="absolute top-6 left-6 bg-blue-600/90 text-white px-5 py-2.5 rounded-xl font-bold text-sm backdrop-blur-md border border-white/20 shadow-lg">AFTER: 2024</div>
                        <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-transparent transition-all duration-500"></div>
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden lg:flex items-center justify-center">
                        <div className="bg-green-500 text-white w-20 h-20 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/30 animate-pulse border-4 border-white">
                            <span className="material-symbols-outlined text-4xl">swap_horiz</span>
                        </div>
                    </div>
                </div>
                <div className="mt-16 bg-white p-10 rounded-3xl border border-blue-100 grid md:grid-cols-3 gap-10 shadow-xl shadow-blue-900/5 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-green-400 to-blue-600"></div>
                    <div className="flex items-start gap-5">
                        <span className="material-symbols-outlined text-green-500 bg-green-50 p-3 rounded-2xl text-2xl shadow-sm border border-green-100">eco</span>
                        <div>
                            <h4 className="font-bold text-blue-950 text-lg mb-1">Eco-Friendly</h4>
                            <p className="text-sm text-blue-700 leading-relaxed">40% reduction in carbon footprint post-renovation.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-5">
                        <span className="material-symbols-outlined text-blue-600 bg-blue-50 p-3 rounded-2xl text-2xl shadow-sm border border-blue-100">speed</span>
                        <div>
                            <h4 className="font-bold text-blue-950 text-lg mb-1">Efficient Build</h4>
                            <p className="text-sm text-blue-700 leading-relaxed">Completed 3 months ahead of initial estimation.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-5">
                        <span className="material-symbols-outlined text-blue-600 bg-blue-50 p-3 rounded-2xl text-2xl shadow-sm border border-blue-100">trending_up</span>
                        <div>
                            <h4 className="font-bold text-blue-950 text-lg mb-1">Property Value</h4>
                            <p className="text-sm text-blue-700 leading-relaxed">Surrounding area value increased by 300%.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
