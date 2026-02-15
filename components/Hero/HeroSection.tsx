"use client";

const HeroSection = () => {
    return (
        <main className="relative flex-1 flex flex-col items-center justify-center pt-32 pb-20 px-6 min-h-screen bg-background-dark overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 hero-overlay z-10"></div>
                <div
                    className="w-full h-full bg-center bg-cover"
                    style={{
                        backgroundImage:
                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBe4Fo4191ZV58N-SwAyRSTrypfVRHhBLu6xnW9tI6OWMBHRJ_0DkShNGo8EYZ7dKvLrRNnStrpcf1BOmIuYxqoxFp4rguB9w7VBXmJyyO-o8I24kQ63tm8gDq90efvNDlUwA7RVj0crhw2zccH5Cq2TR_Sg904wjbB2tngkdyBdqi8tjBOLxClWIGSisiHAsLQcu3eUE3-wyUmRjcOOI01gD8taMebaBxYhbBF88lwx-y1LTLM2BjaOUYq5DwvVSZPyBNY9Pp1dFE')",
                    }}
                ></div>
            </div>

            {/* Content Area */}
            <div className="relative z-20 max-w-4xl mx-auto text-center space-y-8">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    <span className="text-primary text-xs font-bold uppercase tracking-widest font-display">
                        Next-Gen Intelligence Platform
                    </span>
                </div>

                {/* Main Heading */}
                <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1] font-display">
                    Powering the Future of <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
                        Enterprise Intelligence
                    </span>
                </h1>

                {/* Subheading */}
                <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 leading-relaxed font-display">
                    Scalable infrastructure and cutting-edge AI solutions designed for the modern data landscape. Harness the power of real-time insights today.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                    <button className="w-full sm:w-auto min-w-[180px] bg-primary hover:bg-primary/90 text-background-dark px-8 py-4 rounded-xl font-extrabold text-base shadow-2xl shadow-primary/30 transition-all hover:-translate-y-1 active:scale-95 font-display">
                        Get Started Free
                    </button>
                    <button className="w-full sm:w-auto min-w-[180px] bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-xl font-extrabold text-base transition-all hover:-translate-y-1 flex items-center justify-center gap-2 font-display">
                        <span className="material-symbols-outlined">play_circle</span>
                        Watch Demo
                    </button>
                </div>

                {/* Stats Section */}

            </div>
        </main>
    );
};

export default HeroSection;
