import { Link } from 'react-router-dom';

export function Profile() {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-[#f8f6f7] dark:bg-[#1a0f14] font-display text-slate-900 dark:text-slate-100 overflow-hidden shadow-2xl max-w-[430px] mx-auto">
      <div className="h-11 w-full bg-white dark:bg-slate-900 border-b border-[#e8307d]/10 border-transparent"></div>
      
      <div className="px-6 pt-6 pb-4 bg-white dark:bg-slate-900">
        <div className="flex items-center gap-5">
          <div className="relative">
            <div className="size-20 rounded-full border-4 border-[#e8307d]/10 p-0.5">
              <div className="w-full h-full rounded-full bg-center bg-cover bg-no-repeat" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBGc_HsBL3rrMCRHzVo0bXQZQT6FLRgQ52NwgweAL3XozxIIVlv66fre6OlgC25RW5CCrZ0Mr29ZGJlsfQk21QXGB8533L4oIM-gWRbKEqefUC-PhXV5-0bWZ4o4Ki1s0OfE4osRbg4ZKtAT9RwjJ7Zj7BUqyrc9sIEnPIZxu7JZQtUJy5s68twd3UICAybpRQeVgCNJYwvUvw9_v6EqAuKodiaI6GRToSN7BWIgwjHMLnZTCyHdH2MToUROD_jVABRdVFE3XRATmZR")' }}></div>
            </div>
            <div className="absolute bottom-0 right-0 bg-[#e8307d] text-white p-1 rounded-full border-2 border-white dark:border-slate-900 shadow-sm">
              <span className="material-symbols-outlined text-[14px] block">edit</span>
            </div>
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-900 dark:text-white">Sarah Jenkins</h1>
            <p className="text-sm text-slate-500 dark:text-slate-400">Dreaming & Doing ✨</p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar px-6 pb-32 pt-6 space-y-6">
        <div className="bg-[#fff0f6] dark:bg-[#e8307d]/5 rounded-3xl p-5 border border-[#e8307d]/10">
          <div className="flex items-center gap-2 mb-3">
            <span className="material-symbols-outlined text-[#e8307d] text-xl">auto_awesome</span>
            <h3 className="font-bold text-slate-800 dark:text-slate-100">Life Context</h3>
          </div>
          <label className="block text-xs font-semibold text-[#e8307d]/70 uppercase tracking-wider mb-2">What should I know about your life right now?</label>
          <textarea 
            className="w-full bg-white/80 dark:bg-slate-800/80 border-none rounded-2xl p-4 text-sm text-slate-700 dark:text-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-[#e8307d]/20 resize-none shadow-sm outline-none" 
            placeholder="Tell your bestie about your current goals, struggles, or vibes..." 
            rows={4}
            defaultValue="I'm navigating a delicate balance between pushing hard for my career goals and trying to stay grounded. Just started taking daily walks to clear my head."
          />
          <p className="mt-2 text-[10px] text-slate-400 italic">This helps your AI Bestie give more personal advice.</p>
        </div>

        <div className="space-y-1">
          <h3 className="px-2 pb-2 text-xs font-bold text-slate-400 uppercase tracking-widest">Preferences</h3>
          <div className="bg-white/50 dark:bg-slate-800/40 rounded-2xl overflow-hidden shadow-sm">
            <div className="flex items-center justify-between p-4 border-b border-[#e8307d]/5 dark:border-slate-700">
              <div className="flex items-center gap-3">
                <div className="bg-indigo-100 dark:bg-indigo-900/30 p-2 rounded-xl">
                  <span className="material-symbols-outlined text-indigo-600 dark:text-indigo-400 text-[20px]">dark_mode</span>
                </div>
                <span className="text-sm font-semibold">Dark Mode</span>
              </div>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-slate-200 dark:bg-[#e8307d] transition-colors">
                <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-1 dark:translate-x-6"></span>
              </button>
            </div>
            <div className="flex items-center justify-between p-4 border-b border-[#e8307d]/5 dark:border-slate-700">
              <div className="flex items-center gap-3">
                <div className="bg-rose-100 dark:bg-rose-900/30 p-2 rounded-xl">
                  <span className="material-symbols-outlined text-rose-600 dark:text-rose-400 text-[20px]">notifications</span>
                </div>
                <span className="text-sm font-semibold">Push Notifications</span>
              </div>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-[#e8307d] transition-colors">
                <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6"></span>
              </button>
            </div>
            <div className="flex items-center justify-between p-4 flex-wrap hover:bg-slate-50 dark:hover:bg-slate-800/60 cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="bg-amber-100 dark:bg-amber-900/30 p-2 rounded-xl">
                  <span className="material-symbols-outlined text-amber-600 dark:text-amber-400 text-[20px]">lock</span>
                </div>
                <span className="text-sm font-semibold">Privacy & Security</span>
              </div>
              <span className="material-symbols-outlined text-slate-400">chevron_right</span>
            </div>
          </div>
        </div>

        <button className="w-full py-4 bg-red-50 dark:bg-red-950/20 border border-red-100 dark:border-red-900/30 rounded-2xl flex items-center justify-center gap-2 text-red-500 dark:text-red-400 font-bold hover:bg-red-100 transition-all mt-6 shadow-sm">
          <span className="material-symbols-outlined text-[20px]">logout</span>
          Log Out
        </button>
      </div>

      <nav className="absolute bottom-0 left-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-t border-[#e8307d]/10 px-4 pt-4 pb-6 z-50 rounded-t-[2rem]">
        <div className="flex justify-around items-end max-w-sm mx-auto">
          <Link to="/history" className="flex flex-col items-center gap-1.5 text-slate-400 dark:text-slate-500 hover:text-[#e8307d] transition-colors">
            <span className="material-symbols-outlined text-[26px]">forum</span>
            <p className="text-[10px] font-semibold tracking-wide uppercase">Chat</p>
          </Link>
          <Link to="/dashboard" className="flex flex-col items-center gap-1.5 text-slate-400 dark:text-slate-500 hover:text-[#e8307d] transition-colors">
            <span className="material-symbols-outlined text-[26px]">bar_chart</span>
            <p className="text-[10px] font-semibold tracking-wide uppercase">Insights</p>
          </Link>
          <Link to="/outfits" className="flex flex-col items-center gap-1.5 text-slate-400 dark:text-slate-500 hover:text-[#e8307d] transition-colors">
            <span className="material-symbols-outlined text-[26px]">checkroom</span>
            <p className="text-[10px] font-semibold tracking-wide uppercase">Outfits</p>
          </Link>
          <Link to="/profile" className="relative flex flex-col items-center gap-1.5 text-[#f472b6] transition-all pb-1">
            <span className="material-symbols-outlined text-[26px]" style={{ fontVariationSettings: "'FILL' 1" }}>account_circle</span>
            <p className="text-[10px] font-bold tracking-wide uppercase">Profile</p>
            <div className="absolute -bottom-1 w-1.5 h-1.5 bg-[#f472b6] rounded-full"></div>
          </Link>
        </div>
        <div className="flex justify-center mt-6">
          <div className="w-32 h-1 bg-slate-200 dark:bg-slate-700/50 rounded-full"></div>
        </div>
      </nav>
    </div>
  );
}
