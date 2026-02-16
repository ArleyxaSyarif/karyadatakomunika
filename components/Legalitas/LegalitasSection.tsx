import React from 'react';

const LegalitasSection = () => {
    return (
        <section className="bg-background-light font-display text-[#374151] antialiased py-20 px-6 md:px-20 lg:px-40">
            <div className="max-w-7xl mx-auto flex flex-col">
                {/* Section Header */}
                <div className="flex flex-col gap-4 mb-20">
                    <div className="flex items-center gap-2">
                        <div className="w-12 h-[2px] bg-primary"></div>
                        <span className="text-primary font-bold tracking-widest uppercase text-xs">Legal Center</span>
                    </div>
                    <h2 className="text-neutral-dark text-4xl md:text-5xl font-extrabold leading-tight tracking-tight font-display">
                        Compliance & <span className="text-primary">Transparency</span>
                    </h2>
                    <p className="text-[#6b7280] text-lg max-w-2xl leading-relaxed">
                        Our commitment to legal standards, data protection, and operational integrity. We believe in clear communication and absolute security for our users.
                    </p>
                </div>

                {/* Card Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {/* Card 1: Terms of Service */}
                    <div className="card-float flex flex-col bg-white p-7 rounded-2xl border border-stone-200 shadow-sm group">
                        <div className="flex justify-between items-start mb-8">
                            <div className="flex items-center justify-center size-14 rounded-xl bg-primary/10 text-primary">
                                <span className="material-symbols-outlined text-3xl group-hover:[font-variation-settings:'FILL'_1] transition-all">description</span>
                            </div>
                            <span className="px-2.5 py-0.5 rounded-md bg-green-50 text-green-700 border border-green-200 text-[10px] font-bold uppercase tracking-wider">Verified</span>
                        </div>
                        <h3 className="text-neutral-dark text-xl font-bold mb-3 font-display">Terms of Service</h3>
                        <p className="text-[#6b7280] text-sm leading-relaxed mb-8">
                            Standard operating procedures and user obligations for our platform services.
                        </p>
                        <div className="mt-auto flex flex-col gap-4">
                            <div className="text-[10px] uppercase font-bold tracking-widest text-stone-400">Last updated: Oct 2023</div>
                            <a className="flex items-center gap-1 text-primary text-sm font-bold hover:gap-2 transition-all" href="#">
                                Read Document
                                <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </a>
                        </div>
                    </div>

                    {/* Card 2: Privacy Policy */}
                    <div className="card-float flex flex-col bg-white p-7 rounded-2xl border border-stone-200 shadow-sm group">
                        <div className="flex justify-between items-start mb-8">
                            <div className="flex items-center justify-center size-14 rounded-xl bg-primary/10 text-primary">
                                <span className="material-symbols-outlined text-3xl group-hover:[font-variation-settings:'FILL'_1] transition-all">shield_person</span>
                            </div>
                            <span className="px-2.5 py-0.5 rounded-md bg-green-50 text-green-700 border border-green-200 text-[10px] font-bold uppercase tracking-wider">Verified</span>
                        </div>
                        <h3 className="text-neutral-dark text-xl font-bold mb-3 font-display">Privacy Policy</h3>
                        <p className="text-[#6b7280] text-sm leading-relaxed mb-8">
                            GDPR & CCPA Compliant framework for managing and protecting user personal data.
                        </p>
                        <div className="mt-auto flex flex-col gap-4">
                            <div className="text-[10px] uppercase font-bold tracking-widest text-stone-400">Version 2.4.0</div>
                            <a className="flex items-center gap-1 text-primary text-sm font-bold hover:gap-2 transition-all" href="#">
                                View Framework
                                <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </a>
                        </div>
                    </div>

                    {/* Card 3: Cookie Policy */}
                    <div className="card-float flex flex-col bg-white p-7 rounded-2xl border border-stone-200 shadow-sm group">
                        <div className="flex justify-between items-start mb-8">
                            <div className="flex items-center justify-center size-14 rounded-xl bg-primary/10 text-primary">
                                <span className="material-symbols-outlined text-3xl group-hover:[font-variation-settings:'FILL'_1] transition-all">cookie</span>
                            </div>
                            <span className="px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-700 border border-blue-200 text-[10px] font-bold uppercase tracking-wider">Active</span>
                        </div>
                        <h3 className="text-neutral-dark text-xl font-bold mb-3 font-display">Cookie Policy</h3>
                        <p className="text-[#6b7280] text-sm leading-relaxed mb-8">
                            Transparent data usage guidelines for tracking and browser-side storage technologies.
                        </p>
                        <div className="mt-auto flex flex-col gap-4">
                            <div className="text-[10px] uppercase font-bold tracking-widest text-stone-400">Public Access</div>
                            <a className="flex items-center gap-1 text-primary text-sm font-bold hover:gap-2 transition-all" href="#">
                                Manage Preferences
                                <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </a>
                        </div>
                    </div>

                    {/* Card 4: SOC2 Certification */}
                    <div className="card-float flex flex-col bg-white p-7 rounded-2xl border border-stone-200 shadow-sm group">
                        <div className="flex justify-between items-start mb-8">
                            <div className="flex items-center justify-center size-14 rounded-xl bg-primary/10 text-primary">
                                <span className="material-symbols-outlined text-3xl group-hover:[font-variation-settings:'FILL'_1] transition-all">verified_user</span>
                            </div>
                            <span className="px-2.5 py-0.5 rounded-md bg-orange-50 text-orange-700 border border-orange-200 text-[10px] font-bold uppercase tracking-wider">Certified</span>
                        </div>
                        <h3 className="text-neutral-dark text-xl font-bold mb-3 font-display">SOC2 Compliance</h3>
                        <p className="text-[#6b7280] text-sm leading-relaxed mb-8">
                            Independent security infrastructure audit verifying our commitment to data integrity.
                        </p>
                        <div className="mt-auto flex flex-col gap-4">
                            <div className="text-[10px] uppercase font-bold tracking-widest text-stone-400">Audited Annually</div>
                            <a className="flex items-center gap-1 text-primary text-sm font-bold hover:gap-2 transition-all" href="#">
                                Security Report
                                <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Detailed Documentation List Section */}
                <div className="flex flex-col gap-6">
                    <div className="flex items-center justify-between px-2 mb-2">
                        <h3 className="text-neutral-dark text-2xl font-bold tracking-tight font-display">Legal Archive</h3>
                        <button className="text-primary text-sm font-bold hover:opacity-80 transition-opacity">Download All (ZIP)</button>
                    </div>

                    {/* List Item 1 */}
                    <div className="flex items-center gap-6 bg-white px-8 py-6 rounded-2xl border border-stone-200 shadow-sm hover:border-primary/30 transition-all cursor-pointer group">
                        <div className="text-primary flex items-center justify-center rounded-xl bg-primary/5 shrink-0 size-16 border border-primary/10">
                            <span className="material-symbols-outlined text-3xl">article</span>
                        </div>
                        <div className="flex flex-col justify-center flex-1">
                            <p className="text-neutral-dark text-lg font-bold leading-normal font-display group-hover:text-primary transition-colors">User Data Agreement</p>
                            <p className="text-[#6b7280] text-sm font-normal line-clamp-1">A detailed breakdown of how we handle, process, and encrypt your sensitive information.</p>
                        </div>
                        <div className="shrink-0 flex items-center gap-6">
                            <span className="hidden md:block text-xs font-bold text-stone-400 tracking-wider">PDF • 1.2 MB</span>
                            <div className="flex size-12 items-center justify-center rounded-full bg-stone-50 text-stone-400 group-hover:text-primary group-hover:bg-primary/10 transition-all border border-transparent group-hover:border-primary/20">
                                <span className="material-symbols-outlined">download</span>
                            </div>
                        </div>
                    </div>

                    {/* List Item 2 */}
                    <div className="flex items-center gap-6 bg-white px-8 py-6 rounded-2xl border border-stone-200 shadow-sm hover:border-primary/30 transition-all cursor-pointer group">
                        <div className="text-primary flex items-center justify-center rounded-xl bg-primary/5 shrink-0 size-16 border border-primary/10">
                            <span className="material-symbols-outlined text-3xl">security</span>
                        </div>
                        <div className="flex flex-col justify-center flex-1">
                            <p className="text-neutral-dark text-lg font-bold leading-normal font-display group-hover:text-primary transition-colors">End User License Agreement (EULA)</p>
                            <p className="text-[#6b7280] text-sm font-normal line-clamp-1">Legal agreement between the provider and the end user regarding software usage rights.</p>
                        </div>
                        <div className="shrink-0 flex items-center gap-6">
                            <span className="hidden md:block text-xs font-bold text-stone-400 tracking-wider">PDF • 0.8 MB</span>
                            <div className="flex size-12 items-center justify-center rounded-full bg-stone-50 text-stone-400 group-hover:text-primary group-hover:bg-primary/10 transition-all border border-transparent group-hover:border-primary/20">
                                <span className="material-symbols-outlined">download</span>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
};

export default LegalitasSection;
