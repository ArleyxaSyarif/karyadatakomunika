export default function PemerintahPorto() {
    return (
        <section className="bg-white py-20 px-6 lg:px-20 border-t border-blue-50">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                    <div>
                        <h2 className="text-3xl font-black text-blue-950 mb-2">Project Pemerintah</h2>
                        <p className="text-blue-700 font-medium">Leading public sector infrastructure and national landmarks.</p>
                    </div>
                    <button className="text-blue-600 font-bold flex items-center gap-1 hover:gap-2 hover:text-green-600 transition-all">
                        View All Public Projects <span className="material-symbols-outlined">chevron_right</span>
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[240px]">
                    <div className="md:col-span-2 md:row-span-2 relative rounded-2xl overflow-hidden group shadow-lg shadow-blue-900/10">
                        <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Grand national library building exterior" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnlLLqaOLHGZHEIdh4Qt3nuACzW-4nYjJ07MWqSPVUAfCwJcIE2b4b24TZJ9nclNjvswROD4juE2XY5QJfVSmIqHk-KaoKQqLhl_Rn9N3f-bKtVcopeAw5hYYc4YGgJ8uQ_nVGYRam4Jvh1RWi3hJLHB5jh94e0OoVl1FNfth_qIr9VbTnDtcseFR4f8jK3BCd_EQ1T3Ik3XQZkqtbP7SsghJx11QZPk8liXyWtVXR1zgUdzgj4SRlg8o0HBbLH_4Irc_M18f2u_A" alt="Grand national library building exterior" />
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-900/20 to-transparent mix-blend-multiply"></div>
                        <div className="absolute top-4 left-4 flex gap-2">
                            <span className="bg-blue-600 text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-tighter shadow-sm">Public Sector</span>
                            <span className="bg-green-500 text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-tighter shadow-sm">Completed</span>
                        </div>
                        <div className="absolute bottom-6 left-6 pr-6">
                            <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-green-300 transition-colors">National Library Innovation Hub</h4>
                            <p className="text-blue-100 text-sm max-w-sm">Strategic redevelopment of the central literacy district including smart-building integration.</p>
                        </div>
                    </div>

                    <div className="md:col-span-2 relative rounded-2xl overflow-hidden group shadow-lg shadow-blue-900/10">
                        <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Modern airport terminal interior with high ceilings" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoe0DzLdQjZx9yGH6tywWulefUTEwOk8qZChRv2xXQnYcUdqeljYylDARg64dsfzRNGKXpe2_wrwko0mZ-yxc5gDMUHcB8Ug9H0LUcxdO60lIRkjfC8W89__JYKlecMn2m818t61fY-CyqU0ujmqtrrN0we2nK0uaHHHL6XEomnozMhVvfy11_lKWg1iH-NoNVHf5JISP41LhXHDoBcBK2uPH47WmNZ1s43MgCVU-gD_g01DZrB1jl7EDt6gba9e7kDWPbnm4WyfI" alt="Modern airport terminal interior with high ceilings" />
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 to-transparent mix-blend-multiply"></div>
                        <div className="absolute top-4 left-4">
                            <span className="bg-blue-600 text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-tighter shadow-sm">Public Sector</span>
                        </div>
                        <div className="absolute bottom-4 left-4">
                            <h4 className="text-xl font-bold text-white group-hover:text-green-300 transition-colors">City Transit Terminal Expansion</h4>
                        </div>
                    </div>

                    <div className="relative rounded-2xl overflow-hidden group shadow-lg shadow-blue-900/10 border border-blue-50">
                        <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Renewable energy solar farm landscape" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCr5wDF508tgHvRqwrlqEGuC-Gy6PgJWBb4PcBvp_UN5x84sAOu2oIlBq1JN7tijAfPYY9Nnf4ZRtkp1lFPdJQUHkaJnFdpLf1OcYz-pc3P3szwQ6-ssWzWf4WII5EY116XDLHCR8Ct610u9ogkN4LKRqwzw0xJPfqfvWUKwPuRuMhjA15r5Hqb55yHbSO9JPQsA3PaSn98zTNNX3CtKM_EuIhHw2TUNSK9xueQEy0KvRDxk2eT-V8wWCPf5ciqKycwt_ihSwjAQDY" alt="Renewable energy solar farm landscape" />
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 to-transparent mix-blend-multiply"></div>
                        <div className="absolute bottom-4 left-4">
                            <h4 className="text-lg font-bold text-white group-hover:text-green-300 transition-colors">Green Energy Plant</h4>
                            <p className="text-green-400 text-xs font-bold uppercase mt-1">95% Progress</p>
                        </div>
                    </div>

                    <div className="relative rounded-2xl overflow-hidden group shadow-lg shadow-blue-900/10 border border-blue-50">
                        <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Modern public plaza with water feature" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcNCIRYr8gpWdvIznQAwZqOBFK9mLD8ML9kZtYuVIKpheTAkDYeGyBpiXK430G0UzJdwScPcIts2DRIxt9KygnxVLI5OghwbPffdWakAgN3vYUi1HuhvQEI9K9S_edDdebLy7-166aEb8-73lOopZLZA7epYunMLks28SiDlm4Q2x7XkU48OLfijS6s9Rte9sqPsxkrVxu5q20wQcKuHKdtOEXO1kNkg8qIuLLmyJFIJ26c9ZKEx3uGwbcn2znNQZaZqJgpuYFb1c" alt="Modern public plaza with water feature" />
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 to-transparent mix-blend-multiply"></div>
                        <div className="absolute bottom-4 left-4">
                            <h4 className="text-lg font-bold text-white group-hover:text-green-300 transition-colors">Urban Plaza </h4>
                            <p className="text-blue-300 text-xs font-bold uppercase mt-1 flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>Designing phase</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
