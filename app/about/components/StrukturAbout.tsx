import React from "react";

export default function OrganizationalStructure() {
  return (
    <>
      <main className="mx-auto w-full max-w-7xl flex-grow px-6 py-10">
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
            <h2 className="text-4xl font-black text-slate-900 dark:text-white sm:text-5xl">
              Organizational Structure
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Visualizing the professional hierarchy and team dynamics of Global Corp. 
              Manage reporting lines, department overlaps, and resource allocation in one view.
            </p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 rounded-xl bg-white dark:bg-slate-800 px-5 py-2.5 text-sm font-bold text-slate-700 dark:text-slate-200 shadow-sm border border-slate-200 dark:border-slate-700 hover:bg-slate-50 transition-all">
              <span className="material-symbols-outlined text-lg">download</span>
              Export PDF
            </button>
            <button className="flex items-center gap-2 rounded-xl bg-primary px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-primary/25 hover:opacity-90 transition-all">
              <span className="material-symbols-outlined text-lg">add_circle</span>
              Add Member
            </button>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="mb-10 flex flex-wrap items-center gap-4 bg-white dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-200/60 dark:border-slate-800 shadow-sm">
          <div className="flex-grow min-w-[300px]">
            <div className="flex w-full items-center rounded-xl bg-slate-50 dark:bg-slate-800 px-4 py-2.5 focus-within:ring-2 focus-within:ring-primary/20 transition-all">
              <span className="material-symbols-outlined text-slate-400 mr-2">search</span>
              <input
                className="w-full border-none bg-transparent text-sm focus:ring-0 outline-none"
                placeholder="Search by name, role, or department..."
                type="text"
              />
            </div>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-1 md:pb-0 no-scrollbar">
            <button className="flex shrink-0 items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-bold text-white">
              <span className="material-symbols-outlined text-lg">grid_view</span>
              All Teams
            </button>
            <button className="flex shrink-0 items-center gap-2 rounded-xl bg-slate-50 dark:bg-slate-800 px-4 py-2.5 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 transition-colors border border-slate-200 dark:border-slate-700 hover:border-primary/50 hover:bg-primary/5 active:scale-95">
              <span className="material-symbols-outlined text-lg text-primary">developer_mode_tv</span>
              Engineering
            </button>
            <button className="flex shrink-0 items-center gap-2 rounded-xl bg-slate-50 dark:bg-slate-800 px-4 py-2.5 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 transition-colors border border-slate-200 dark:border-slate-700 hover:border-accent-green/50 hover:bg-accent-green/5 active:scale-95">
              <span className="material-symbols-outlined text-lg text-accent-green">campaign</span>
              Marketing
            </button>
            <button className="flex shrink-0 items-center gap-2 rounded-xl bg-slate-50 dark:bg-slate-800 px-4 py-2.5 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 transition-colors border border-slate-200 dark:border-slate-700 hover:border-amber-500/50 hover:bg-amber-500/5 active:scale-95">
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
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent-green rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative flex w-80 flex-col items-center rounded-2xl bg-white dark:bg-slate-900 p-6 text-center shadow-xl border border-slate-100 dark:border-slate-800">
                <div className="relative mb-4">
                  <div className="h-24 w-24 overflow-hidden rounded-full ring-4 ring-primary/10">
                    <img
                      className="h-full w-full object-cover"
                      alt="CEO Sarah Chen looking confident"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQ9LSvpXotiDLwK08nvF4TVLrG6CLSSXb2QSUGKX9K5zrKXwz8-TRYy0u4-WX3M1bVvC8ZhpA3fmS4trVhBHHo3V3rW8kJwNSW0mEdxOr5Eb_NkxXyc9NLdWbEcUcPsZljcX-UA9LfG5Al5GvGK6quu54zsf4IXJAAuW8qL-6yQnsEzEyw8dQjCqE5o-J239I3BRmkuQCSQxPtCzR8rnLVVVtKnPqEMPQbBObHh1t1GPPdtN4lKr21gOn2SNheTvijfMpFkX4qY_HN"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-accent-green text-white shadow-md ring-4 ring-white dark:ring-slate-900">
                    <span className="material-symbols-outlined text-sm">verified</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Sarah Chen</h3>
                <p className="text-sm font-medium text-primary">Chief Executive Officer</p>
                <div className="mt-4 flex gap-2">
                  <span className="rounded-lg bg-slate-100 dark:bg-slate-800 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Board Member</span>
                  <span className="rounded-lg bg-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary">Founder</span>
                </div>
              </div>
            </div>
            <div className="h-12 w-0.5 bg-slate-200 dark:bg-slate-800"></div>
            <div className="h-0.5 w-full max-w-4xl bg-slate-200 dark:bg-slate-800"></div>
          </div>

          {/* Leadership Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory no-scrollbar">
            
            {/* VP Engineering */}
            <div className="flex flex-col items-center min-w-[320px] md:min-w-[380px] snap-center shrink-0">
              <div className="h-10 w-0.5 bg-slate-200 dark:bg-slate-800"></div>
              <div className="w-full max-w-sm overflow-hidden rounded-2xl bg-white dark:bg-slate-900 shadow-lg border border-slate-100 dark:border-slate-800 hover:shadow-primary/5 transition-all group">
                <div className="h-2 bg-primary"></div>
                <div className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-slate-100">
                      <img
                        className="h-full w-full object-cover"
                        alt="Portrait of VP Engineering Marcus Rodriguez"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjm-dkz7qyCrBri_0aMepNfL67ulpAidmtk48FV1ahVsprpg-aiXvztCvoknsdrCCemcRnAxVloJ49ZDR2jFs7Ni_KM-uJDwj_CTp_3hFP_K2vXswvJBL5qaydTGi04q51rklqCE0yN270Fs2S4x_habRZwlbU2HOsn3sUXLsq-SSoMc8q1mkVoEhKVkilGh-eQ_5q1PaHboQitdmeAw-dAw8LXhjX1VOHgziAmITXyJPcED90HM9wp-lJvx3AsmVPWH7Do5kvh1xg"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white">Marcus Rodriguez</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400">VP of Engineering</p>
                    </div>
                    <button className="ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-slate-50 dark:bg-slate-800 text-slate-400 hover:text-primary transition-colors">
                      <span className="material-symbols-outlined text-lg">info</span>
                    </button>
                  </div>
                  <div className="mt-4 flex items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-4 text-xs font-semibold text-slate-500">
                    <div className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">groups</span>
                      <span>42 Reports</span>
                    </div>
                    <div className="flex items-center gap-1 text-accent-green">
                      <span className="material-symbols-outlined text-sm">circle</span>
                      <span>Active</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Leads */}
              <div className="mt-4 flex w-full flex-col gap-3">
                <div className="mx-auto h-6 w-0.5 bg-slate-200 dark:bg-slate-800/50"></div>
                <div className="rounded-xl border border-dashed border-slate-200 dark:border-slate-800 p-4 bg-slate-50/50 dark:bg-slate-900/30">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-10 w-10 overflow-hidden rounded-lg">
                      <img className="h-full w-full object-cover" alt="Senior Developer Emily Watson" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBXW9NctNk06b7sS9JdPbT2PqlBmMr-jHi9CDKF0_foipCdT4iRm3zZPOGm5n2IKQ5yqNarjhMSeVaAJbS8Py958bIcarRZA_hcq5vAZ1zjK3bCOkDAF70IXAKUWjOTr-IkyUP2yeClgGZ9hWDm7JWch6jo59F8ZDTA_s115C34qeWNNSnbh1EeT5MjR3zOJZgenYBbzWT-c14QlAqHS5S_2DFJa9RgQBrXCf_8Za8gKyfE2LrgLcsE6mrd4eeddJGEpLmFFQOwfp2" />
                    </div>
                    <div>
                      <p className="text-sm font-bold">Emily Watson</p>
                      <p className="text-[10px] font-medium text-slate-500">Frontend Lead</p>
                    </div>
                    <span className="ml-auto h-2 w-2 rounded-full bg-accent-green"></span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 overflow-hidden rounded-lg">
                      <img className="h-full w-full object-cover" alt="Backend Architect David Park" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1eWQIU1FGdSHGUeUsm7ZpuM2f2LPsdVx0bLSm9HKRGXS5DzIdbIPzeeLpFLZjS8ctMEKHluFB4BsNVw3727TtS0wq0RysVKPLQ_ng2F2NmQxY0D9ul8n6zlozAegdddr6S9O02fJueuDTz4yoJ4QTtJN9Z1MKbuBrShrwYNKW-RmkMhPQUeRshIJSHvxWBIhZiEgK7qqIM8JPSD1yMsDGUJfVfzNHcpR3vK8rO4f4ERQHXlB9_B_ExXSO9QE6NbfodaogjOOxaDnS" />
                    </div>
                    <div>
                      <p className="text-sm font-bold">David Park</p>
                      <p className="text-[10px] font-medium text-slate-500">Backend Architect</p>
                    </div>
                    <span className="ml-auto h-2 w-2 rounded-full bg-accent-green"></span>
                  </div>
                </div>
              </div>
            </div>

            {/* VP Marketing */}
            <div className="flex flex-col items-center min-w-[320px] md:min-w-[380px] snap-center shrink-0">
              <div className="h-10 w-0.5 bg-slate-200 dark:bg-slate-800"></div>
              <div className="w-full max-w-sm overflow-hidden rounded-2xl bg-white dark:bg-slate-900 shadow-lg border border-slate-100 dark:border-slate-800 hover:shadow-accent-green/5 transition-all group">
                <div className="h-2 bg-accent-green"></div>
                <div className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-slate-100">
                      <img
                        className="h-full w-full object-cover"
                        alt="Portrait of VP Marketing Elena Petrova"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_4DaQ0xdimE2h6IJ2zJ1rqNg2Si4F3TJMuERGn7132M69qxd0dwBdchiHJ7LPnnKo8wAZ5fXSvmCnwY8JjT4EsWU2A3L7du4K7D6IEg-VL0tVVYz4BD-4RusL3tTopbN_XPg7jXNw4Psm3aToYKSpnZZCSB9yBh1uoSS_3PTlPIxWLTfnkta1V3Ew-yyXNoyMbnpNo-rtb5qGgZk1gtREEiNhtPqtxdKS2ctRbC86SyDOfG5wjAlw-GX3JUdNYe7qiiZ6jABBDrST"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white">Elena Petrova</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400">VP of Marketing</p>
                    </div>
                    <button className="ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-slate-50 dark:bg-slate-800 text-slate-400 hover:text-accent-green transition-colors">
                      <span className="material-symbols-outlined text-lg">info</span>
                    </button>
                  </div>
                  <div className="mt-4 flex items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-4 text-xs font-semibold text-slate-500">
                    <div className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">groups</span>
                      <span>28 Reports</span>
                    </div>
                    <div className="flex items-center gap-1 text-accent-green">
                      <span className="material-symbols-outlined text-sm">circle</span>
                      <span>Remote</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Leads */}
              <div className="mt-4 flex w-full flex-col gap-3">
                <div className="mx-auto h-6 w-0.5 bg-slate-200 dark:bg-slate-800/50"></div>
                <div className="rounded-xl border border-dashed border-slate-200 dark:border-slate-800 p-4 bg-slate-50/50 dark:bg-slate-900/30">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-10 w-10 overflow-hidden rounded-lg">
                      <img className="h-full w-full object-cover" alt="Content Strategist Mia Wong" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBluy4Q-rRqIcUhqQyIFCdZtH4aI7i3Y7Us7DC5NtXhmkBr0_O7XFiHXijgSiGc1oC-wSTWeN6BeahO7odYcAVskm3DpBfoonNS0Kf_DqogytP3LIeC1yUEUCGGDZLBxL8sKkvfldGI39vS0KI3A8RAZaUKc3Z0mWmexElIxW5x3Ez2VJLgaLTtsfldymYJty8NkvU4DEDYMFkQnimJupNEWEEqGEATSBnXYtWNy_494ETl27oyHI1FCkuMrH0-E7wVeYpEheGKZKvQ" />
                    </div>
                    <div>
                      <p className="text-sm font-bold">Mia Wong</p>
                      <p className="text-[10px] font-medium text-slate-500">Content Strategist</p>
                    </div>
                    <span className="ml-auto h-2 w-2 rounded-full bg-accent-green"></span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 overflow-hidden rounded-lg">
                      <img className="h-full w-full object-cover" alt="Ad Performance Lead Jason Smith" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCuO88yQSVnANzBAYb2TzclBdoyy4mtD58gHqwoqyx_8V0nfxU5gwGvunjOo-i3SwHV9dEM9QotTwFw2FkBp0wvbgfB1CRXHh4_fZ8VqzzPSTtiEh0JJPX-YH93Ywo_IOI4I2M2F_lf8_Ra3sxBj1ik3oVye2bzgTnkiGLOv9fBCxOSA3Du13qxhX1_xS4hTfxO5kob8wBmaMV7-haJ2-4PK3dicylWvExCtzFXiDErBec6QXwareBQAcTJb38N-My9mIpK73zZTdm" />
                    </div>
                    <div>
                      <p className="text-sm font-bold">Jason Smith</p>
                      <p className="text-[10px] font-medium text-slate-500">Ad Performance</p>
                    </div>
                    <span className="ml-auto h-2 w-2 rounded-full bg-amber-400"></span>
                  </div>
                </div>
              </div>
            </div>

            {/* Chief Product Officer */}
            <div className="flex flex-col items-center min-w-[320px] md:min-w-[380px] snap-center shrink-0">
              <div className="h-10 w-0.5 bg-slate-200 dark:bg-slate-800"></div>
              <div className="w-full max-w-sm overflow-hidden rounded-2xl bg-white dark:bg-slate-900 shadow-lg border border-slate-100 dark:border-slate-800 hover:shadow-amber-500/5 transition-all group">
                <div className="h-2 bg-amber-500"></div>
                <div className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-slate-100">
                      <img
                        className="h-full w-full object-cover"
                        alt="Portrait of CPO Alex Thompson"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6BiFn5jNN_KaAzkAAk9Nr1uozWR1tGezcr4rPX1_tdY0JIILthG3gN6bQuTsyiRL4QMhXZ32bNDoNv_FUpOSmK7AqM0--YzX2AQBXjAsnhJuMzt9SRDgN8o9o9CyVqkX9tSSGZLerDk_2V5DWTZ95iF_hvVnlXSbn0MRvXaKn1dPCLkCftJ98A-WFBkbPNN-NdWixu27Rlgv9Bq67jSzx85HG0WFR9vzXNAslfYqnrdYa6dwSbyPbqu_-HMdTLG5e1ALHe8qZHozS"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white">Alex Thompson</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Chief Product Officer</p>
                    </div>
                    <button className="ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-slate-50 dark:bg-slate-800 text-slate-400 hover:text-amber-500 transition-colors">
                      <span className="material-symbols-outlined text-lg">info</span>
                    </button>
                  </div>
                  <div className="mt-4 flex items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-4 text-xs font-semibold text-slate-500">
                    <div className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">groups</span>
                      <span>15 Reports</span>
                    </div>
                    <div className="flex items-center gap-1 text-accent-green">
                      <span className="material-symbols-outlined text-sm">circle</span>
                      <span>HQ</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Leads */}
              <div className="mt-4 flex w-full flex-col gap-3">
                <div className="mx-auto h-6 w-0.5 bg-slate-200 dark:bg-slate-800/50"></div>
                <div className="rounded-xl border border-dashed border-slate-200 dark:border-slate-800 p-4 bg-slate-50/50 dark:bg-slate-900/30">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-10 w-10 overflow-hidden rounded-lg">
                      <img className="h-full w-full object-cover" alt="Design Lead Sophia Loren" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZnrURBTyzG7LNlxoyQ0YxIxnKLheP0yQ_E9gXF5u8pvA2pBcJBpTV4xR0NwOo58c0KpF8AprOfiYF-R-FeZLXdXWG0dXn31GFk2qdkWfNF1KE__2z7GWrohpEu6YHPp0JkvLtO6lvwTd6sXGpow5Jp8gCpfeVJOQ1gErRt8pFqeta6zwy3NoC6zN5HdPq713iIN0Q8Xmmb1p5QQ7sqISXldKpRhPwW38fgclpn89TZsrIlDtmQfU2CAHLzfp-WVGvfxjgHl0QgpSL" />
                    </div>
                    <div>
                      <p className="text-sm font-bold">Sophia Loren</p>
                      <p className="text-[10px] font-medium text-slate-500">Design Lead</p>
                    </div>
                    <span className="ml-auto h-2 w-2 rounded-full bg-accent-green"></span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 overflow-hidden rounded-lg">
                      <img className="h-full w-full object-cover" alt="Product Manager Liam Neeson" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgYgli9FfCPglAz3ZZdEkWlaW1VmSCwbY9TlreWTqtWGmIFmRkP8qagEJTLqf5_KpsSNtmf6AcvdBhOiaYxqYE0NnKckflIOitp7EY9zGyuRpR1DIurAVEBzrLzcplaSWVA0E-GfJYvJAwgfWx21zQN73Cx9gmmdoxEKfszY_6G2dT9T1l52OAnS-sIUNVH1NHePwSGNacBwgDe2c_taetaLeiPmkGiv4LyFq6HonbCj683IiovFy7A7EOSuDVNxjPIL1U2bMgehyp" />
                    </div>
                    <div>
                      <p className="text-sm font-bold">Liam Neeson</p>
                      <p className="text-[10px] font-medium text-slate-500">Product Manager</p>
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
          <div className="rounded-2xl bg-white dark:bg-slate-900 p-6 border border-slate-200/60 dark:border-slate-800 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Total Employees</p>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-3xl font-black text-slate-900 dark:text-white">1,248</span>
              <span className="text-sm font-bold text-accent-green">+12%</span>
            </div>
          </div>
          <div className="rounded-2xl bg-white dark:bg-slate-900 p-6 border border-slate-200/60 dark:border-slate-800 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Departments</p>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-3xl font-black text-slate-900 dark:text-white">8</span>
              <span className="text-sm font-bold text-slate-500">Global</span>
            </div>
          </div>
          <div className="rounded-2xl bg-white dark:bg-slate-900 p-6 border border-slate-200/60 dark:border-slate-800 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Open Roles</p>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-3xl font-black text-slate-900 dark:text-white">34</span>
              <span className="text-sm font-bold text-primary">Hiring</span>
            </div>
          </div>
          <div className="rounded-2xl bg-primary p-6 shadow-xl shadow-primary/20 flex flex-col justify-between">
            <p className="text-xs font-bold uppercase tracking-widest text-white/70">Next Team Sync</p>
            <div className="mt-2 text-white">
              <p className="text-xl font-bold">Tomorrow, 10:00 AM</p>
              <p className="text-sm opacity-80">All Hands Meeting</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="mt-auto border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark py-8">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">hub</span>
            <span className="text-sm font-semibold text-slate-500">© 2024 Global Corp Org Chart. All rights reserved.</span>
          </div>
          <div className="flex gap-6">
            <a className="text-sm font-medium text-slate-500 hover:text-primary transition-colors" href="#">Privacy Policy</a>
            <a className="text-sm font-medium text-slate-500 hover:text-primary transition-colors" href="#">Terms of Service</a>
            <a className="text-sm font-medium text-slate-500 hover:text-primary transition-colors" href="#">Contact Admin</a>
          </div>
        </div>
      </footer>
    </>
  );
}