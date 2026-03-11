import { Link } from 'react-router-dom';

export function Chat() {
  return (
    <div className="relative flex h-screen w-full flex-col bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 overflow-hidden shadow-2xl max-w-[430px] mx-auto">
      <div className="h-11 w-full bg-white dark:bg-slate-900 border-b border-[#e8307d]/10"></div>
      
      <div className="flex items-center bg-white dark:bg-slate-900 p-4 border-b border-[#e8307d]/10 justify-between">
        <div className="flex size-10 shrink-0 items-center">
          <Link to="/history" className="flex size-10 items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors mr-2">
            <span className="material-symbols-outlined text-[20px] text-slate-600 dark:text-slate-300">arrow_back_ios_new</span>
          </Link>
          <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-[#e8307d]/20" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBGc_HsBL3rrMCRHzVo0bXQZQT6FLRgQ52NwgweAL3XozxIIVlv66fre6OlgC25RW5CCrZ0Mr29ZGJlsfQk21QXGB8533L4oIM-gWRbKEqefUC-PhXV5-0bWZ4o4Ki1s0OfE4osRbg4ZKtAT9RwjJ7Zj7BUqyrc9sIEnPIZxu7JZQtUJy5s68twd3UICAybpRQeVgCNJYwvUvw9_v6EqAuKodiaI6GRToSN7BWIgwjHMLnZTCyHdH2MToUROD_jVABRdVFE3XRATmZR")' }}></div>
        </div>
        <div className="flex-1 ml-3">
          <h2 className="text-slate-900 dark:text-slate-100 text-base font-bold leading-tight">AI Bestie</h2>
          <div className="flex items-center gap-1">
            <span className="size-2 bg-green-500 rounded-full"></span>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Always here for you</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="flex size-10 items-center justify-center rounded-full bg-[#f8f6f7] dark:bg-slate-800 text-[#e8307d]">
            <span className="material-symbols-outlined text-[20px]">call</span>
          </button>
          <button className="flex size-10 items-center justify-center rounded-full bg-[#f8f6f7] dark:bg-slate-800 text-[#e8307d]">
            <span className="material-symbols-outlined text-[20px]">info</span>
          </button>
        </div>
      </div>

      <div className="flex gap-2 p-3 overflow-x-auto no-scrollbar bg-white dark:bg-slate-900 border-b border-[#e8307d]/5">
        {['I\'m feeling stressed', 'Big Win!', 'Need advice', 'Just venting'].map((pill, idx) => (
          <div key={idx} className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#e8307d]/10 border border-[#e8307d]/20 px-4">
            <span className="material-symbols-outlined text-[#e8307d] text-sm">
              {idx === 0 ? 'psychology' : idx === 1 ? 'celebration' : idx === 2 ? 'favorite' : 'forum'}
            </span>
            <p className="text-[#e8307d] text-xs font-semibold whitespace-nowrap">{pill}</p>
          </div>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white dark:bg-slate-900 pb-32">
        <div className="flex justify-center">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Today</span>
        </div>
        
        <div className="flex items-end gap-2 max-w-[85%]">
          <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-8 h-8 shrink-0 mb-1" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCahAHF8D32I6gXcxWREiRC1HWeaShIGu2ZreA2aGsMV_Ckj5r6AZ9S8IEUlMb2WfVU63_87PaIVasmVveOmNk_DRtyIWwb-qK7xA7XYnI9w3F8MddU01HYM-bDCcBwLXyVGvqLXWUxpd1trfCBjt6cTUNsFNzpFEak4BK5Pn9IYifAhTK7KoCOqjiPlBVMx1OQPQUYqNKRhcGDpBz5Y1UneidsMsEIYQ0wmKZdk3iCeO2665MLZ_cKqbNbN3DZS3jF9WRmv8tnEIyk")' }}></div>
          <div className="flex flex-col gap-1">
            <p className="text-slate-900 dark:text-slate-100 text-sm font-normal leading-relaxed rounded-2xl rounded-bl-none px-4 py-3 bg-[#f8f6f7] dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
              Hey girl! I've been thinking about you. How was your day? I'm all ears! ✨
            </p>
            <p className="text-[10px] text-slate-400 ml-1">2:45 PM</p>
          </div>
        </div>
        
        <div className="flex items-end gap-2 justify-end">
          <div className="flex flex-col gap-1 items-end max-w-[85%]">
            <p className="text-white text-sm font-normal leading-relaxed rounded-2xl rounded-br-none px-4 py-3 bg-[#e8307d] shadow-md">
              It was okay, but I'm feeling a bit overwhelmed with school and work right now. 😔
            </p>
            <div className="flex items-center gap-1 mr-1">
              <p className="text-[10px] text-slate-400">2:46 PM</p>
              <span className="material-symbols-outlined text-[#e8307d] text-[12px]">done_all</span>
            </div>
          </div>
        </div>
        
        <div className="flex items-end gap-2 max-w-[85%]">
          <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-8 h-8 shrink-0 mb-1" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCOZkFXIiEOFJ6I0qIpin9wSMrx4QnG37SrPE9wZJpQ5_PtMDZ7scBb09Pnh6L7YbJZ1-0AlvQsB9OCKuN0CUm52FycuETxCC3cWmdyHrG3tySwrwrRmzYtozKpD2Gn5EdMPB4slbSkanpV38S9o88wHV7rbPssTllWnEq9mkycGuY-k8pf6SbaTg3NL4nWsWcOq0UKi-E5wWrFpZSHhtLjFXUAdknWVCxYQaL97aBxpkq-h5U3xi8_4G0xFuFYgdXzfIhKT3lWnSvs")' }}></div>
          <div className="flex flex-col gap-1">
            <p className="text-slate-900 dark:text-slate-100 text-sm font-normal leading-relaxed rounded-2xl rounded-bl-none px-4 py-3 bg-[#f8f6f7] dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
              I totally hear you. You've been juggling so much lately! Remember that it's okay to take a breather. What's one small thing we can do to make you feel lighter today? 💖
            </p>
            <p className="text-[10px] text-slate-400 ml-1">2:47 PM</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 bg-[#f8f6f7] dark:bg-slate-800 px-3 py-2 rounded-full border border-slate-100 dark:border-slate-700 shadow-sm">
            <div className="flex gap-1">
              <span className="size-1.5 bg-[#e8307d]/40 rounded-full animate-pulse"></span>
              <span className="size-1.5 bg-[#e8307d]/60 rounded-full animate-pulse delay-75"></span>
              <span className="size-1.5 bg-[#e8307d]/80 rounded-full animate-pulse delay-150"></span>
            </div>
            <span className="text-[11px] font-medium text-slate-500 italic ml-2">Bestie is typing...</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full z-20">
        <div className="px-4 py-2 bg-gradient-to-t from-white/90 to-transparent dark:from-slate-900/90">
          <div className="flex items-center gap-2 bg-white/90 dark:bg-slate-800/90 rounded-full px-4 py-2 border border-[#e8307d]/10 backdrop-blur-md shadow-lg">
            <button className="text-slate-400 dark:text-slate-500 hover:text-[#e8307d]">
              <span className="material-symbols-outlined">add_circle</span>
            </button>
            <input className="flex-1 bg-transparent border-none focus:ring-0 text-sm text-slate-700 dark:text-slate-200 outline-none placeholder:text-slate-400" placeholder="Tell Bestie anything..." type="text"/>
            <button className="flex size-8 items-center justify-center rounded-full bg-[#e8307d] text-white shadow-lg shadow-[#e8307d]/20">
              <span className="material-symbols-outlined text-[18px]">send</span>
            </button>
          </div>
        </div>

        <nav className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-t border-[#e8307d]/10 px-6 pt-3 pb-8">
          <div className="flex items-center justify-between max-w-sm mx-auto">
            <Link to="/history" className="flex flex-col items-center gap-1 group">
              <span className="material-symbols-outlined text-[24px] text-[#e8307d] transition-transform group-hover:scale-110" style={{ fontVariationSettings: "'FILL' 1" }}>chat_bubble</span>
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#e8307d]">Chat</span>
            </Link>
            <Link to="/dashboard" className="flex flex-col items-center gap-1 group">
              <span className="material-symbols-outlined text-[24px] text-slate-400 group-hover:text-[#e8307d] transition-colors">bar_chart_4_bars</span>
              <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400 group-hover:text-[#e8307d] transition-colors">Insights</span>
            </Link>
            <Link to="/outfits" className="flex flex-col items-center gap-1 group">
              <span className="material-symbols-outlined text-[24px] text-slate-400 group-hover:text-[#e8307d] transition-colors">checkroom</span>
              <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400 group-hover:text-[#e8307d] transition-colors">Outfits</span>
            </Link>
            <Link to="/profile" className="flex flex-col items-center gap-1 group">
              <div className="size-6 rounded-full border-2 border-slate-300 group-hover:border-[#e8307d] transition-colors overflow-hidden flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px] text-slate-400 group-hover:text-[#e8307d]">account_circle</span>
              </div>
              <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400 group-hover:text-[#e8307d] transition-colors">Profile</span>
            </Link>
          </div>
          <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-32 h-1 bg-slate-300 dark:bg-slate-700/50 rounded-full"></div>
        </nav>
      </div>
    </div>
  );
}
