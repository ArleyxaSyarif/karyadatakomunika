import React from "react";

export default function OrganizationalStructure() {
  return (
    <>
      <main className="mx-auto w-full max-w-7xl flex-grow px-6 py-10 bg-white">
        {/* Hero Section */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Corporate Architecture
            </div>
            <h2 className="text-4xl font-black text-slate-900 sm:text-5xl font-display">
              Organizational Structure
            </h2>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed font-light">
              Visualizing the professional hierarchy and team dynamics of Global Corp.
              Manage reporting lines, department overlaps, and resource allocation in one view.
            </p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-bold text-slate-700 shadow-sm border border-slate-200 hover:bg-slate-50 transition-all font-display">
              <span className="material-symbols-outlined text-lg">download</span>
              Export PDF
            </button>
            <button className="flex items-center gap-2 rounded-xl bg-[#2563eb] px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-600/25 hover:opacity-90 transition-all font-display">
              <span className="material-symbols-outlined text-lg">add_circle</span>
              Add Member
            </button>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="mb-10 flex flex-wrap items-center gap-4 bg-white p-4 rounded-2xl border border-slate-200/60 shadow-sm">
          <div className="flex-grow min-w-[300px]">
            <div className="flex w-full items-center rounded-xl bg-slate-50 px-4 py-2.5 focus-within:ring-2 focus-within:ring-blue-600/20 transition-all">
              <span className="material-symbols-outlined text-slate-400 mr-2">search</span>
              <input
                className="w-full border-none bg-transparent text-sm focus:ring-0 outline-none font-display"
                placeholder="Search by name, role, or department..."
                type="text"
              />
            </div>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-1 md:pb-0 no-scrollbar">
            <button className="flex shrink-0 items-center gap-2 rounded-xl bg-[#2563eb] px-4 py-2.5 text-sm font-bold text-white font-display">
              <span className="material-symbols-outlined text-lg">grid_view</span>
              All Teams
            </button>
            <button className="flex shrink-0 items-center gap-2 rounded-xl bg-slate-50 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-100 transition-colors border border-slate-200 hover:border-blue-600/50 hover:bg-blue-600/5 active:scale-95 font-display">
              <span className="material-symbols-outlined text-lg text-[#2563eb]">developer_mode_tv</span>
              Engineering
            </button>
            <button className="flex shrink-0 items-center gap-2 rounded-xl bg-slate-50 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-100 transition-colors border border-slate-200 hover:border-[#16a34a]/50 hover:bg-[#16a34a]/5 active:scale-95 font-display">
              <span className="material-symbols-outlined text-lg text-[#16a34a]">campaign</span>
              Marketing
            </button>
            <button className="flex shrink-0 items-center gap-2 rounded-xl bg-slate-50 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-100 transition-colors border border-slate-200 hover:border-amber-500/50 hover:bg-amber-500/5 active:scale-95 font-display">
              <span className="material-symbols-outlined text-lg text-amber-500">inventory_2</span>
              Product
            </button>
          </div>
        </div>

        {/* Org Hierarchy Tree Section */}
        <div className="space-y-12">
          {/* CEO Section */}
          <div className="flex flex-col items-center">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#2563eb] to-[#16a34a] rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative flex w-80 flex-col items-center rounded-2xl bg-white p-6 text-center shadow-xl border border-slate-100">
                <div className="relative mb-4">
                  <div className="h-24 w-24 overflow-hidden rounded-full ring-4 ring-blue-600/10">
                    <img
                      className="h-full w-full object-cover"
                      alt="CEO Sarah Chen looking confident"
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#16a34a] text-white shadow-md ring-4 ring-white">
                    <span className="material-symbols-outlined text-sm">verified</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 font-display">Sarah Chen</h3>
                <p className="text-sm font-medium text-[#2563eb] font-display">Chief Executive Officer</p>
                <div className="mt-4 flex gap-2">
                  <span className="rounded-lg bg-slate-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-500 font-display">Board Member</span>
                  <span className="rounded-lg bg-blue-600/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#2563eb] font-display">Founder</span>
                </div>
              </div>
            </div>
            <div className="h-12 w-0.5 bg-slate-200"></div>
            <div className="h-0.5 w-full max-w-4xl bg-slate-200"></div>
          </div>

          {/* Leadership Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory no-scrollbar">

            {/* VP Engineering */}
            <div className="flex flex-col items-center min-w-[320px] md:min-w-[380px] snap-center shrink-0">
              <div className="h-10 w-0.5 bg-slate-200"></div>
              <div className="w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-lg border border-slate-100 hover:shadow-blue-600/5 transition-all group">
                <div className="h-2 bg-[#2563eb]"></div>
                <div className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-slate-100">
                      <img
                        className="h-full w-full object-cover"
                        alt="Portrait of VP Engineering Marcus Rodriguez"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 font-display">Marcus Rodriguez</h4>
                      <p className="text-sm text-slate-500 font-display">VP of Engineering</p>
                    </div>
                    <button className="ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-slate-50 text-slate-400 hover:text-[#2563eb] transition-colors">
                      <span className="material-symbols-outlined text-lg">info</span>
                    </button>
                  </div>
                  <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4 text-xs font-semibold text-slate-500 font-display">
                    <div className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">groups</span>
                      <span>42 Reports</span>
                    </div>
                    <div className="flex items-center gap-1 text-[#16a34a]">
                      <span className="material-symbols-outlined text-sm">circle</span>
                      <span>Active</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Leads */}
              <div className="mt-4 flex w-full flex-col gap-3">
                <div className="mx-auto h-6 w-0.5 bg-slate-200/50"></div>
                <div className="rounded-xl border border-dashed border-slate-200 p-4 bg-slate-50/50">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-10 w-10 overflow-hidden rounded-lg">
                      <img className="h-full w-full object-cover" alt="Senior Developer Emily Watson" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100" />
                    </div>
                    <div>
                      <p className="text-sm font-bold font-display">Emily Watson</p>
                      <p className="text-[10px] font-medium text-slate-500 font-display">Frontend Lead</p>
                    </div>
                    <span className="ml-auto h-2 w-2 rounded-full bg-[#16a34a]"></span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 overflow-hidden rounded-lg">
                      <img className="h-full w-full object-cover" alt="Backend Architect David Park" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100" />
                    </div>
                    <div>
                      <p className="text-sm font-bold font-display">David Park</p>
                      <p className="text-[10px] font-medium text-slate-500 font-display">Backend Architect</p>
                    </div>
                    <span className="ml-auto h-2 w-2 rounded-full bg-[#16a34a]"></span>
                  </div>
                </div>
              </div>
            </div>

            {/* VP Marketing */}
            <div className="flex flex-col items-center min-w-[320px] md:min-w-[380px] snap-center shrink-0">
              <div className="h-10 w-0.5 bg-slate-200"></div>
              <div className="w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-lg border border-slate-100 hover:shadow-[#16a34a]/5 transition-all group">
                <div className="h-2 bg-[#16a34a]"></div>
                <div className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-slate-100">
                      <img
                        className="h-full w-full object-cover"
                        alt="Portrait of VP Marketing Elena Petrova"
                        src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=200"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 font-display">Elena Petrova</h4>
                      <p className="text-sm text-slate-500 font-display">VP of Marketing</p>
                    </div>
                    <button className="ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-slate-50 text-slate-400 hover:text-[#16a34a] transition-colors">
                      <span className="material-symbols-outlined text-lg">info</span>
                    </button>
                  </div>
                  <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4 text-xs font-semibold text-slate-500 font-display">
                    <div className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">groups</span>
                      <span>28 Reports</span>
                    </div>
                    <div className="flex items-center gap-1 text-[#16a34a]">
                      <span className="material-symbols-outlined text-sm">circle</span>
                      <span>Remote</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Leads */}
              <div className="mt-4 flex w-full flex-col gap-3">
                <div className="mx-auto h-6 w-0.5 bg-slate-200/50"></div>
                <div className="rounded-xl border border-dashed border-slate-200 p-4 bg-slate-50/50">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-10 w-10 overflow-hidden rounded-lg">
                      <img className="h-full w-full object-cover" alt="Content Strategist Mia Wong" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100" />
                    </div>
                    <div>
                      <p className="text-sm font-bold font-display">Mia Wong</p>
                      <p className="text-[10px] font-medium text-slate-500 font-display">Content Strategist</p>
                    </div>
                    <span className="ml-auto h-2 w-2 rounded-full bg-[#16a34a]"></span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 overflow-hidden rounded-lg">
                      <img className="h-full w-full object-cover" alt="Ad Performance Lead Jason Smith" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100" />
                    </div>
                    <div>
                      <p className="text-sm font-bold font-display">Jason Smith</p>
                      <p className="text-[10px] font-medium text-slate-500 font-display">Ad Performance</p>
                    </div>
                    <span className="ml-auto h-2 w-2 rounded-full bg-amber-400"></span>
                  </div>
                </div>
              </div>
            </div>

            {/* Chief Product Officer */}
            <div className="flex flex-col items-center min-w-[320px] md:min-w-[380px] snap-center shrink-0">
              <div className="h-10 w-0.5 bg-slate-200"></div>
              <div className="w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-lg border border-slate-100 hover:shadow-amber-500/5 transition-all group">
                <div className="h-2 bg-amber-500"></div>
                <div className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-slate-100">
                      <img
                        className="h-full w-full object-cover"
                        alt="Portrait of CPO Alex Thompson"
                        src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 font-display">Alex Thompson</h4>
                      <p className="text-sm text-slate-500 font-display">Chief Product Officer</p>
                    </div>
                    <button className="ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-slate-50 text-slate-400 hover:text-amber-500 transition-colors">
                      <span className="material-symbols-outlined text-lg">info</span>
                    </button>
                  </div>
                  <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4 text-xs font-semibold text-slate-500 font-display">
                    <div className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">groups</span>
                      <span>15 Reports</span>
                    </div>
                    <div className="flex items-center gap-1 text-[#16a34a]">
                      <span className="material-symbols-outlined text-sm">circle</span>
                      <span>HQ</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Leads */}
              <div className="mt-4 flex w-full flex-col gap-3">
                <div className="mx-auto h-6 w-0.5 bg-slate-200/50"></div>
                <div className="rounded-xl border border-dashed border-slate-200 p-4 bg-slate-50/50">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-10 w-10 overflow-hidden rounded-lg">
                      <img className="h-full w-full object-cover" alt="Design Lead Sophia Loren" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100" />
                    </div>
                    <div>
                      <p className="text-sm font-bold font-display">Sophia Loren</p>
                      <p className="text-[10px] font-medium text-slate-500 font-display">Design Lead</p>
                    </div>
                    <span className="ml-auto h-2 w-2 rounded-full bg-[#16a34a]"></span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 overflow-hidden rounded-lg">
                      <img className="h-full w-full object-cover" alt="Product Manager Liam Neeson" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&q=80&w=100" />
                    </div>
                    <div>
                      <p className="text-sm font-bold font-display">Liam Neeson</p>
                      <p className="text-[10px] font-medium text-slate-500 font-display">Product Manager</p>
                    </div>
                    <span className="ml-auto h-2 w-2 rounded-full bg-slate-300"></span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Recent Changes / Stats Footer */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="rounded-2xl bg-white p-6 border border-slate-200/60 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 font-display">Total Employees</p>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-3xl font-black text-slate-900 font-display">1,248</span>
              <span className="text-sm font-bold text-[#16a34a] font-display">+12%</span>
            </div>
          </div>
          <div className="rounded-2xl bg-white p-6 border border-slate-200/60 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 font-display">Departments</p>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-3xl font-black text-slate-900 font-display">8</span>
              <span className="text-sm font-bold text-slate-500 font-display">Global</span>
            </div>
          </div>
          <div className="rounded-2xl bg-white p-6 border border-slate-200/60 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 font-display">Open Roles</p>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-3xl font-black text-slate-900 font-display">34</span>
              <span className="text-sm font-bold text-[#2563eb] font-display">Hiring</span>
            </div>
          </div>
          <div className="rounded-2xl bg-[#2563eb] p-6 shadow-xl shadow-blue-600/20 flex flex-col justify-between">
            <p className="text-xs font-bold uppercase tracking-widest text-white/70 font-display">Next Team Sync</p>
            <div className="mt-2 text-white font-display">
              <p className="text-xl font-bold">Tomorrow, 10:00 AM</p>
              <p className="text-sm opacity-80">All Hands Meeting</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="mt-auto border-t border-slate-200 bg-white py-8">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#2563eb]">hub</span>
            <span className="text-sm font-semibold text-slate-500 font-display">© 2024 Global Corp Org Chart. All rights reserved.</span>
          </div>
          <div className="flex gap-6">
            <a className="text-sm font-medium text-slate-500 hover:text-[#2563eb] transition-colors font-display" href="#">Privacy Policy</a>
            <a className="text-sm font-medium text-slate-500 hover:text-[#2563eb] transition-colors font-display" href="#">Terms of Service</a>
            <a className="text-sm font-medium text-slate-500 hover:text-[#2563eb] transition-colors font-display" href="#">Contact Admin</a>
          </div>
        </div>
      </footer>
    </>
  );
}
