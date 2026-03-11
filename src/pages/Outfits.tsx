import { Link } from 'react-router-dom';

export function Outfits() {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-white overflow-hidden shadow-2xl max-w-[430px] mx-auto text-slate-800 font-display">
      <style>{`
        .glass-card {
            background: rgba(255, 255, 255, 0.4);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.6);
            box-shadow: 0 8px 32px 0 rgba(244, 114, 182, 0.05);
        }
        .ai-recommendation-card {
            background: rgba(255, 255, 255, 0.5);
            backdrop-filter: blur(16px);
            border: 1px solid rgba(251, 113, 133, 0.3);
            box-shadow: 0 0 25px rgba(251, 113, 133, 0.2);
        }
        .nav-glass {
            background: rgba(255, 255, 255, 0.85);
            backdrop-filter: blur(24px);
            border-top: 1px solid rgba(255, 255, 255, 0.8);
        }
      `}</style>
      
      <div className="absolute inset-0 bg-gradient-to-br from-[#fffcf9] via-[#fce7f3] to-[#f3f0ff] z-0"></div>

      <div className="h-11 w-full flex items-center justify-between px-8 bg-transparent shrink-0 z-50"></div>

      <div className="flex-1 flex flex-col overflow-hidden z-10">
        <div className="px-5 pt-2 pb-4 shrink-0">
          <div className="ai-recommendation-card rounded-3xl p-5 flex flex-col gap-3 relative overflow-hidden">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs">✨</span>
              <h3 className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#fb7185]">Bestie Suggestion</h3>
            </div>
            <p className="font-serif italic text-[15px] leading-relaxed text-slate-700">
              "Since you have that big presentation tomorrow, here’s a confident, professional look paired with your favorite blazer!"
            </p>
            <div className="flex items-center gap-3 mt-1">
              <div className="w-16 h-16 rounded-xl overflow-hidden glass-card border-white/40 flex-shrink-0">
                <img alt="Suggested Look" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuuT127hjbpRLqL3eu8uPiQCfn-BrGf3SV0sAv-U9uocvhfUdU37XVx9YxkJgm9VnE0oPjk0Sz-1Txj_5auiS7D6Yo74s8YiWV9KEymmLOmUaMWbkAI8ebaEaUHB69L3MNDUlH1S4xVRO_sASATsY7vt5s9C9TtfAWPOrxvPNq_DH9VhRdIcFNFdrxmDjdF_Zlpr9xhhm9Dm5nUVn-46Lg_ecLxgOMIqAPRBo4pTmu-x65BvWPnu3QJzMgUyBPBvxF_aOLUINQvF3n"/>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">Power Dressing</span>
                <button className="text-[12px] font-serif italic text-[#fb7185] flex items-center gap-1">
                  View details <span className="material-symbols-outlined text-[14px]">arrow_forward_ios</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 flex overflow-hidden">
          <div className="w-[45%] relative flex flex-col items-center justify-center bg-gradient-to-b from-transparent to-[#e9d5ff]/30">
            <div className="absolute top-4 left-6 opacity-40">
              <span className="material-symbols-outlined text-slate-400">auto_fix_high</span>
            </div>
            <div className="relative flex flex-col items-center">
              <div className="z-20 transform -translate-y-4">
                <img alt="Full Outfit Preview" className="w-40 h-52 object-contain drop-shadow-xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQxy_SJXDIg3u5cBs9MS1fsCXWGF-JOIgsXpbYFK6Mr3CDj4zqvZe5tccKc1s12zInsSj0pSj7dG_PZAOeL6hkCFDHP_BTPvhqHd4QPVXiQaoPaYTwVqnUreRfXXBetd4rCs38P0gZfCmEPtFUhoHnaMGZIlwVLi3CMkr71tRbcI7nYbvWnZpSYi7fWKBiS-xZnHbTmuzj_GwD1tybZbsarlYXwZ5NtAh7_UxlhT_C3M8o_CD2aZxFUE7lizYlBGXQg5cD4PxlNvZg"/>
              </div>
              <div className="w-32 h-10 bg-white/40 rounded-t-full backdrop-blur-md -mt-4 border-t border-white/60"></div>
            </div>
            <div className="mt-6 text-center px-4">
              <h2 className="font-serif italic text-lg text-slate-700 mb-1">Today's Look</h2>
              <p className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold">Ready for magic</p>
            </div>
            <button className="mt-8 glass-card px-5 py-2.5 rounded-full border border-white/50 shadow-sm flex items-center gap-2 active:scale-95 transition-all">
              <span className="text-slate-600 italic font-serif text-sm">try it on</span>
              <span className="material-symbols-outlined text-xs text-pink-400">colors_spark</span>
            </button>
          </div>

          <div className="w-[55%] flex flex-col bg-white/20 backdrop-blur-md border-l border-white/40">
            <div className="pt-4 pb-2 px-3 overflow-x-auto no-scrollbar flex gap-4 items-center justify-start border-b border-white/20">
              <button className="text-[11px] font-bold uppercase tracking-wider text-[#fb7185] border-b-2 border-[#fb7185] pb-1 shrink-0">tops</button>
              <button className="text-[11px] font-medium uppercase tracking-wider text-slate-400 pb-1 shrink-0">bottoms</button>
              <button className="text-[11px] font-medium uppercase tracking-wider text-slate-400 pb-1 shrink-0">shoes</button>
            </div>
            <div className="flex-1 overflow-y-auto no-scrollbar p-3 pt-4">
              <div className="grid grid-cols-1 gap-4 pb-32">
                <div className="aspect-[1/1.2] rounded-2xl glass-card overflow-hidden p-1">
                  <img alt="Blazer" className="w-full h-full object-cover rounded-xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuuT127hjbpRLqL3eu8uPiQCfn-BrGf3SV0sAv-U9uocvhfUdU37XVx9YxkJgm9VnE0oPjk0Sz-1Txj_5auiS7D6Yo74s8YiWV9KEymmLOmUaMWbkAI8ebaEaUHB69L3MNDUlH1S4xVRO_sASATsY7vt5s9C9TtfAWPOrxvPNq_DH9VhRdIcFNFdrxmDjdF_Zlpr9xhhm9Dm5nUVn-46Lg_ecLxgOMIqAPRBo4pTmu-x65BvWPnu3QJzMgUyBPBvxF_aOLUINQvF3n"/>
                </div>
                <div className="aspect-[1/1.2] rounded-2xl glass-card overflow-hidden p-1">
                  <img alt="Floral Dress" className="w-full h-full object-cover rounded-xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzwvw5TjzFjyc8xlnpOIUlPcFEN21ouGxT8LVW5ORqXWfdXOf8B7OHoNKCv-RCUWB9AjXwe2f9Okw-vcqhaDyxTqiKJi-ksxxNPVvlY7NRZlPMeH5lGtyakmSFcLOBERvFKh4gzAGfRBc5p5x5mMBWagJwzWqgHbgCSc-zVYI2W-dj7TX6WcmLP8WTPcr2uJ-yAWdKtWt1Jar9AUZf5A9pzI5Lq8O8R-Py3P8Z7tTWn7LgDaFmHCpni9sj_QTYZYP7Cx1gZFbpZb7Z"/>
                </div>
                <button className="aspect-[1/1.2] rounded-2xl bg-white/40 border-2 border-dashed border-white/80 flex flex-col items-center justify-center gap-2 active:scale-95 transition-transform">
                  <span className="material-symbols-outlined text-pink-300 text-3xl font-light">add_circle</span>
                  <span className="text-[9px] uppercase tracking-tighter font-bold text-slate-400">Add Item</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 w-full nav-glass px-6 pt-4 pb-8 z-50 rounded-t-[2rem]">
        <div className="flex justify-between items-center max-w-[320px] mx-auto">
          <Link to="/history" className="flex flex-col items-center gap-1 text-slate-400 hover:text-[#fb7185] transition-colors duration-300">
            <span className="material-symbols-outlined text-[24px]">forum</span>
            <p className="text-[10px] font-bold uppercase tracking-wider">Chat</p>
          </Link>
          <Link to="/dashboard" className="flex flex-col items-center gap-1 text-slate-400 hover:text-[#fb7185] transition-colors duration-300">
            <span className="material-symbols-outlined text-[24px]">bar_chart</span>
            <p className="text-[10px] font-bold uppercase tracking-wider">Insights</p>
          </Link>
          <Link to="/outfits" className="flex flex-col items-center gap-1 text-[#fb7185]">
            <div className="relative flex flex-col items-center">
              <span className="material-symbols-outlined text-[26px]" style={{ fontVariationSettings: "'FILL' 1" }}>checkroom</span>
              <p className="text-[10px] font-serif italic tracking-wide mt-0.5">Outfits</p>
            </div>
          </Link>
          <Link to="/profile" className="flex flex-col items-center gap-1 text-slate-400 hover:text-[#fb7185] transition-colors duration-300">
            <div className="w-6 h-6 rounded-full border border-slate-200 bg-white overflow-hidden flex items-center justify-center">
              <span className="material-symbols-outlined text-[18px] text-slate-300">account_circle</span>
            </div>
            <p className="text-[10px] font-bold uppercase tracking-wider">Profile</p>
          </Link>
        </div>
        <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-32 h-1 bg-slate-300 dark:bg-slate-700/50 rounded-full"></div>
      </div>
    </div>
  );
}
