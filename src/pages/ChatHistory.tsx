import { Link } from 'react-router-dom';

const CHATS = [
  {
    icon: '✨',
    bg: 'bg-[#fce7f3]',
    title: 'Feeling Radiant Today',
    date: 'OCT 24 • 10:15 AM',
    preview: '"I\'m feeling so much more confident after our talk about boundaries. You really helped me see things clearly..."'
  },
  {
    icon: '🌸',
    bg: 'bg-[#f3e8ff]',
    title: 'Morning Reflections',
    date: 'OCT 22 • 08:30 AM',
    preview: '"Remember that you are enough, exactly as you are. We practiced that breathing exercise and it felt so peaceful..."'
  },
  {
    icon: '☁️',
    bg: 'bg-blue-50',
    title: 'Midnight Thoughts',
    date: 'OCT 20 • 11:45 PM',
    preview: '"It’s okay to have down days, bestie. We talked about processing the stress from work and letting it go before sleep..."'
  },
  {
    icon: '☀️',
    bg: 'bg-orange-50',
    title: 'Weekly Wins Chat',
    date: 'OCT 18 • 02:00 PM',
    preview: '"Celebrating that job offer! We listed all your strengths today and you were absolutely glowing with pride..."'
  }
];

export function ChatHistory() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-hidden max-w-[430px] mx-auto bg-white dark:bg-[#211118] font-['Plus_Jakarta_Sans',_sans-serif] text-slate-900 dark:text-slate-100 shadow-2xl">
      <style>{`
        .soft-glam-gradient {
            background: linear-gradient(135deg, #fdf4ff 0%, #fae8ff 50%, #f5f3ff 100%);
        }
        .no-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}</style>
      
      <header className="sticky top-0 z-10 flex items-center justify-between bg-white/80 dark:bg-[#211118]/80 backdrop-blur-md px-4 py-4 border-b border-[#e8307d]/10">
        <Link to="/" className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-[#e8307d]/5">
          <span className="material-symbols-outlined text-slate-700 dark:text-slate-200 text-xl">arrow_back_ios_new</span>
        </Link>
        <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-50">The Vault</h1>
        <button className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-[#e8307d]/5">
          <span className="material-symbols-outlined text-slate-700 dark:text-slate-200 text-2xl">search</span>
        </button>
      </header>

      <div className="px-4 py-3 bg-white dark:bg-[#211118]">
        <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
          <button className="px-4 py-1.5 rounded-full bg-[#e8307d] text-white text-sm font-semibold whitespace-nowrap">All Chats</button>
          <button className="px-4 py-1.5 rounded-full bg-[#e8307d]/10 text-[#e8307d] text-sm font-semibold whitespace-nowrap border border-[#e8307d]/20">Favorites</button>
          <button className="px-4 py-1.5 rounded-full bg-[#e8307d]/10 text-[#e8307d] text-sm font-semibold whitespace-nowrap border border-[#e8307d]/20">Reflections</button>
          <button className="px-4 py-1.5 rounded-full bg-[#e8307d]/10 text-[#e8307d] text-sm font-semibold whitespace-nowrap border border-[#e8307d]/20">Mood Tracker</button>
        </div>
      </div>

      <main className="flex-1 overflow-y-auto soft-glam-gradient dark:bg-[#211118] dark:!bg-none px-4 py-4 space-y-4">
        <h3 className="text-xs font-bold uppercase tracking-widest text-[#e8307d]/60 px-1 mb-2">Recent Sessions</h3>
        
        {CHATS.map((chat, idx) => (
          <Link to="/chat" key={idx} className="group relative flex flex-col gap-3 bg-white/90 dark:bg-slate-900/50 backdrop-blur-sm p-4 rounded-xl border border-[#e8307d]/5 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl text-2xl shadow-inner ${chat.bg}`}>{chat.icon}</div>
                <div className="flex flex-col">
                  <h4 className="font-bold text-slate-900 dark:text-slate-100">{chat.title}</h4>
                  <span className="text-[10px] font-semibold text-[#e8307d] uppercase">{chat.date}</span>
                </div>
              </div>
              <button className="text-slate-400 hover:text-red-400 transition-colors" onClick={(e) => e.preventDefault()}>
                <span className="material-symbols-outlined text-[20px]">delete</span>
              </button>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed italic">
                {chat.preview}
            </p>
          </Link>
        ))}
        
        <div className="h-28"></div>
      </main>

      <button className="absolute bottom-28 right-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#e8307d] text-white shadow-lg shadow-[#e8307d]/30 hover:scale-105 transition-transform active:scale-95 z-20">
        <span className="material-symbols-outlined text-2xl">add</span>
      </button>

      <nav className="absolute bottom-0 z-30 w-full bg-white/80 dark:bg-[#211118]/80 backdrop-blur-xl border-t border-[#e8307d]/10 pt-3 pb-8 px-6">
        <div className="flex items-center justify-between max-w-sm mx-auto">
          <Link to="/history" className="flex flex-col items-center gap-1 group">
            <div className="relative flex items-center justify-center">
              <span className="material-symbols-outlined text-[28px] text-[#e8307d] transition-all duration-300 transform group-hover:scale-110" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome_motion</span>
            </div>
            <span className="text-[10px] font-bold tracking-widest uppercase text-[#e8307d]">Chat</span>
          </Link>
          <Link to="/dashboard" className="flex flex-col items-center gap-1 group">
            <div className="relative flex items-center justify-center">
              <span className="material-symbols-outlined text-[28px] text-slate-400 group-hover:text-[#e8307d] transition-all duration-300">bar_chart_4_bars</span>
            </div>
            <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400 group-hover:text-[#e8307d] transition-colors">Insights</span>
          </Link>
          <Link to="/outfits" className="flex flex-col items-center gap-1 group">
            <div className="relative flex items-center justify-center">
              <span className="material-symbols-outlined text-[28px] text-slate-400 group-hover:text-[#e8307d] transition-all duration-300">checkroom</span>
            </div>
            <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400 group-hover:text-[#e8307d] transition-colors">Outfits</span>
          </Link>
          <Link to="/profile" className="flex flex-col items-center gap-1 group">
            <div className="relative flex items-center justify-center">
              <div className="h-7 w-7 rounded-full border-2 border-slate-300 group-hover:border-[#e8307d] transition-colors overflow-hidden bg-slate-100 flex items-center justify-center">
                <span className="material-symbols-outlined text-xl text-slate-400 group-hover:text-[#e8307d]">person</span>
              </div>
            </div>
            <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400 group-hover:text-[#e8307d] transition-colors">Profile</span>
          </Link>
        </div>
      </nav>
      <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 h-1 w-32 bg-slate-300 dark:bg-slate-700 rounded-full z-40"></div>
    </div>
  );
}
