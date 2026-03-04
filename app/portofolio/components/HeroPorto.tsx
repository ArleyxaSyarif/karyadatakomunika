export default function HeroPorto() {
    return (
        <section className="relative px-6 lg:px-20 pt-10 pb-20 overflow-hidden bg-blue-50">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-7 z-10">
                    <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        Leading the Engineering Frontier
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-black text-blue-950 leading-[1.1] mb-6">
                        Designing the <span className="text-blue-600">Future</span> of Modern Infrastructure.
                    </h1>
                    <p className="text-lg text-blue-800 mb-10 max-w-xl leading-relaxed">
                        A high-end engineering firm specializing in complex architectural marvels, sustainable energy plants, and urban transformation.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-blue-700 hover:translate-y-[-2px] transition-all shadow-lg shadow-blue-600/30">
                            Explore Portfolio <span className="material-symbols-outlined">arrow_forward</span>
                        </button>
                        <button className="bg-white border border-blue-200 text-blue-900 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-colors">
                            Our Strategy
                        </button>
                    </div>

                    {/* Stats Overlay */}
                    <div className="mt-16 grid grid-cols-3 gap-8 border-t border-blue-200 pt-10">
                        <div>
                            <p className="text-3xl font-black text-blue-600">500+</p>
                            <p className="text-sm text-blue-700 font-medium">Projects Completed</p>
                        </div>
                        <div>
                            <p className="text-3xl font-black text-green-500">150+</p>
                            <p className="text-sm text-blue-700 font-medium">Expert Engineers</p>
                        </div>
                        <div>
                            <p className="text-3xl font-black text-blue-950">30+</p>
                            <p className="text-sm text-blue-700 font-medium">Cities Transformed</p>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-5 relative">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/20 aspect-[4/5] lg:aspect-square group border border-blue-100">
                        <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Modern glass skyscraper architecture with blue sky" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDl9_f1UBzLNOkcEf0phlIq1Ftb25hzlXF1OoR-bpJkQjWNTUhGacIipInPxTcqWkYVcedozkm8Bwy5CDYKuq5JCZ8ZA004C2YUq8C-YLmRK4_TV1SP_yUn61O4QiYnnb044j5jFKBk0_vBLnG_xeH5JdrnQW8IuWOjL7OhUsNWJcUAQol39FxQhWxcv0oSie7rI5Oz5qvVlRNmF57r-XYKMLGn0_Ef6eyJdNJDU6dY2gioJ0Ta8fyvvHRL4rguyUP-pIv2TusAUA8" alt="Modern glass skyscraper architecture with blue sky" />
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
                        <div className="absolute bottom-6 left-6 right-6 bg-white/80 backdrop-blur-md border border-white/40 p-6 rounded-xl shadow-lg">
                            <p className="text-xs font-bold text-blue-600 uppercase mb-1">Featured Project</p>
                            <h3 className="text-xl font-bold text-blue-950">The Zenith Tower, Jakarta</h3>
                            <div className="flex justify-between items-center mt-4 pt-4 border-t border-blue-100">
                                <span className="text-sm text-blue-800 font-medium">Completed 2023</span>
                                <span className="text-green-600 font-bold text-sm flex items-center gap-1">View Details <span className="material-symbols-outlined text-sm">chevron_right</span></span>
                            </div>
                        </div>
                    </div>

                    {/* Decorative element */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-400/20 rounded-full blur-3xl -z-10"></div>
                    <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-blue-500/20 rounded-full blur-3xl -z-10"></div>
                </div>
            </div>
        </section>
    );
}
