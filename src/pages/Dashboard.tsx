import { Link } from 'react-router-dom';

export function Dashboard() {
  return (
    <div className="bg-[#f8f6f7] dark:bg-[#1a0f14] text-slate-900 dark:text-slate-100 min-h-screen font-['Plus_Jakarta_Sans',_sans-serif] pb-32 max-w-[430px] mx-auto overflow-hidden shadow-2xl relative">
      <style>{`
        .soft-glow {
            box-shadow: 0 0 25px 2px rgba(232, 48, 125, 0.12);
        }
        .backdrop-blur-ios {
            backdrop-filter: blur(25px) saturate(200%);
        }
        .nav-active-glow {
            position: relative;
        }
        .nav-active-glow::after {
            content: '';
            position: absolute;
            bottom: -8px;
            left: 50%;
            transform: translateX(-50%);
            width: 4px;
            height: 4px;
            background: #e8307d;
            border-radius: 50%;
            box-shadow: 0 0 8px #e8307d;
        }
      `}</style>

      <header className="sticky top-0 z-50 bg-white/70 dark:bg-[#1a0f14]/70 backdrop-blur-ios px-4 py-4 flex items-center justify-between border-b border-[#e8307d]/5">
        <div className="flex items-center gap-2">
          <Link to="/history" className="p-2 rounded-full hover:bg-[#e8307d]/10 transition-colors">
            <span className="material-symbols-outlined text-[#e8307d] text-[20px]">arrow_back_ios_new</span>
          </Link>
        </div>
        <h1 className="text-md font-bold tracking-tight text-slate-900 dark:text-slate-100 text-center flex-1">Insights & Health</h1>
        <div className="flex items-center">
          <button className="p-2 rounded-full bg-[#e8307d]/10 text-[#e8307d]">
            <span className="material-symbols-outlined text-[20px]">settings_heart</span>
          </button>
        </div>
      </header>

      <main className="px-4 py-6 space-y-6">
        {/* Top Stats */}
        <section className="grid grid-cols-3 gap-3">
          <div className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm p-3 rounded-2xl border border-white dark:border-white/5 text-center shadow-sm">
            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Sessions</p>
            <p className="text-xl font-bold text-[#e8307d]">42</p>
          </div>
          <div className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm p-3 rounded-2xl border border-white dark:border-white/5 text-center shadow-sm">
            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Streak</p>
            <p className="text-xl font-bold text-[#e8307d]">5d</p>
          </div>
          <div className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm p-3 rounded-2xl border border-white dark:border-white/5 text-center shadow-sm">
            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Focus</p>
            <p className="text-sm font-bold text-[#e8307d] truncate">Confidence</p>
          </div>
        </section>

        {/* Cycle Tracker */}
        <section className="space-y-4">
          <h2 className="text-sm font-bold flex items-center gap-2 px-1">
            <span className="material-symbols-outlined text-[#e8307d] text-[20px]">calendar_month</span>
            Cycle Tracker
          </h2>
          <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-3xl p-5 shadow-sm border border-white dark:border-white/5">
            <div className="flex items-center justify-between mb-5">
              <div className="space-y-0.5">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Current Phase</span>
                <p className="text-base font-bold text-slate-800 dark:text-slate-100">Luteal Phase</p>
              </div>
              <span className="text-[11px] font-bold text-[#e8307d] bg-[#e8307d]/10 px-3 py-1.5 rounded-full border border-[#e8307d]/10">DAY 22</span>
            </div>
            
            <div className="relative h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full flex overflow-hidden mb-6">
              <div className="w-[20%] h-full bg-rose-200 opacity-60"></div>
              <div className="w-[20%] h-full bg-sky-200 opacity-60"></div>
              <div className="w-[25%] h-full bg-emerald-200 opacity-60"></div>
              <div className="w-[35%] h-full bg-[#e8307d]/20 relative">
                <div className="absolute right-[30%] top-1/2 -translate-y-1/2 w-4 h-4 bg-[#e8307d] border-[3px] border-white dark:border-slate-900 rounded-full shadow-lg"></div>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-1 text-center">
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">Menstrual</span>
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">Follicular</span>
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">Ovulation</span>
              <span className="text-[9px] font-bold text-[#e8307d] uppercase tracking-tighter">Luteal</span>
            </div>
          </div>
        </section>

        {/* Bestie Advice Card */}
        <section>
          <div className="bg-[#fef2f2]/80 dark:bg-red-950/20 backdrop-blur-sm rounded-3xl p-5 border border-[#fca5a5]/20 flex gap-4 soft-glow">
            <div className="flex-1 space-y-3">
              <div className="flex items-center gap-2">
                <div className="size-6 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center shadow-sm">
                  <span className="material-symbols-outlined text-[#e8307d] text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                </div>
                <h3 className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">Bestie Advice</h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                You're in your <span className="text-[#e8307d] font-bold">Luteal phase</span>—let's go for something extra cozy today!
              </p>
              <button className="text-[11px] font-bold text-[#e8307d] flex items-center gap-1 group">
                See more tips <span className="material-symbols-outlined text-[14px] group-hover:translate-x-1 transition-transform">chevron_right</span>
              </button>
            </div>
            <div className="relative group">
              <div className="w-24 h-24 bg-white dark:bg-slate-800 rounded-2xl border border-[#e8307d]/10 flex items-center justify-center p-1.5 shadow-sm overflow-hidden transform group-hover:scale-[1.02] transition-transform">
                <img alt="Cozy outfit" className="w-full h-full object-cover rounded-xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxTFyKP4ehEcOuXh9Xh0no8CTV9S4iCSXgk0hqGQS5rKXaicIu9OGkcX8NvaoBCVpiY59PukeA7586CoMJyBqwFxoJS9tCne_pNwkvQqJH8hSIG7Q8sB6zaLRjngoI1gpqQrcKPbb79Buto_1BOxk5jAGSSlTXgyHPXwg7HlPmgD5t2COqPNauSlOqnP6qIHecHYV2lwLZo99WvyORDbsRYUdhpjFQl_lU5lkGzGRxX8T3KnjUhRDw4RNFe2Vi5TQig1L4mWlMk9xJ"/>
              </div>
              <div className="absolute -top-1 -right-1 bg-[#e8307d] text-white text-[8px] font-bold px-1.5 py-0.5 rounded-full">OOTD</div>
            </div>
          </div>
        </section>

        {/* Mood Distribution */}
        <section className="space-y-4">
          <h2 className="text-sm font-bold flex items-center gap-2 px-1">
            <span className="material-symbols-outlined text-[#e8307d] text-[20px]">bubble_chart</span>
            Mood Distribution
          </h2>
          <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-3xl p-6 shadow-sm border border-white dark:border-white/5">
            <div className="flex flex-col items-center">
              <div className="relative size-44 mb-8">
                <svg className="size-full -rotate-90" viewBox="0 0 36 36">
                  <circle className="stroke-emerald-200/50" cx="18" cy="18" fill="none" r="16" strokeDasharray="60 100" strokeWidth="4"></circle>
                  <circle className="stroke-indigo-200/50" cx="18" cy="18" fill="none" r="16" strokeDasharray="25 100" strokeDashoffset="-60" strokeWidth="4"></circle>
                  <circle className="stroke-[#e8307d]/40" cx="18" cy="18" fill="none" r="16" strokeDasharray="15 100" strokeDashoffset="-85" strokeWidth="4"></circle>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-bold text-[#e8307d]">72%</span>
                  <span className="text-[9px] uppercase font-bold tracking-widest text-slate-400">Glow Rate</span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-6 w-full px-2">
                <div className="flex flex-col items-center gap-1.5">
                  <div className="size-2.5 rounded-full bg-emerald-300"></div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase">Happy</span>
                  <span className="text-sm font-bold">60%</span>
                </div>
                <div className="flex flex-col items-center gap-1.5">
                  <div className="size-2.5 rounded-full bg-indigo-300"></div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase">Anxious</span>
                  <span className="text-sm font-bold">25%</span>
                </div>
                <div className="flex flex-col items-center gap-1.5">
                  <div className="size-2.5 rounded-full bg-[#e8307d]/50"></div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase">Lit</span>
                  <span className="text-sm font-bold">15%</span>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <nav className="absolute z-50 bottom-0 left-0 right-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-ios border-t border-[#e8307d]/10 px-6 pb-8 pt-3">
        <div className="flex items-center justify-between max-w-sm mx-auto">
          <Link to="/history" className="flex-1 flex flex-col items-center gap-1 text-slate-400 hover:text-[#e8307d] transition-all duration-300">
            <span className="material-symbols-outlined text-[26px]">auto_awesome</span>
            <span className="text-[10px] font-bold uppercase tracking-[0.05em]">Chat</span>
          </Link>
          <Link to="/dashboard" className="flex-1 flex flex-col items-center gap-1 text-[#e8307d] nav-active-glow">
            <span className="material-symbols-outlined text-[26px]" style={{ fontVariationSettings: "'FILL' 1" }}>bar_chart_4_bars</span>
            <span className="text-[10px] font-bold uppercase tracking-[0.05em]">Insights</span>
          </Link>
          <Link to="/outfits" className="flex-1 flex flex-col items-center gap-1 text-slate-400 hover:text-[#e8307d] transition-all duration-300">
            <span className="material-symbols-outlined text-[26px]">checkroom</span>
            <span className="text-[10px] font-bold uppercase tracking-[0.05em]">Outfits</span>
          </Link>
          <Link to="/profile" className="flex-1 flex flex-col items-center gap-1 text-slate-400 hover:text-[#e8307d] transition-all duration-300">
            <div className="size-7 rounded-full border-2 border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 flex items-center justify-center overflow-hidden">
              <span className="material-symbols-outlined text-[20px] opacity-40">person</span>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-[0.05em]">Profile</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
