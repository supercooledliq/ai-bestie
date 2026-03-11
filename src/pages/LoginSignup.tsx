import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';

export function LoginSignup() {
  const [mode, setMode] = useState<'Login' | 'Sign Up'>('Login');

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-[#f8f6f7] dark:bg-[#211118] font-['Plus_Jakarta_Sans',_sans-serif] text-slate-900 dark:text-slate-100">
      {/* Header Image Section */}
      <div className="h-[40vh] w-full relative">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(232, 48, 125, 0.2) 0%, rgba(248, 246, 247, 1) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCJogn0RATSA6h2tLv7ypHkC1QMJeQ7SlecoQp9SqC-9NC7ualKuvk_XW414jS8fGMFdt-l8iQF6OPGtuESb1NPyaD2f5d4cUC5Vgj-VpYaBVN7vzeW-Z6nvp24ezEqdgPGXuPKW1LaEr9N7DjB0Ak4iVvBy3XjMqbNi1gCz4Bb46la0WRZHVcMjFBtfTJ3V0B9PkRC3V-u1BvWlg8RcPT18_hxqp3_2KnJnXVDmLfYlaD0NKXqL-QKkAsVOvkB1IHAAxcw62MqaDc1")`
          }}
        ></div>
        <div className="relative h-full flex flex-col items-center justify-center px-8 text-center">
          <h1 className="text-[#e8307d] text-3xl font-bold leading-tight drop-shadow-sm">You are your own muse.</h1>
          <p className="text-[#e8307d]/70 mt-2 font-medium">Empower your journey with AI Bestie</p>
        </div>
      </div>

      {/* Glassmorphism Auth Card */}
      <div className="flex-1 -mt-10 px-4 pb-10 z-10 max-w-md mx-auto w-full">
        <Card className="bg-[rgba(255,255,255,0.7)] dark:bg-[#211118]/80 backdrop-blur-xl rounded-[1.5rem] shadow-xl border border-white/40 dark:border-[#e8307d]/20 p-6 flex flex-col gap-6">
          {/* Toggle Switch */}
          <div className="flex h-12 w-full items-center justify-center rounded-xl bg-[#e8307d]/10 p-1">
            <button 
              onClick={() => setMode('Login')}
              className={`flex h-full grow items-center justify-center overflow-hidden rounded-lg px-2 text-sm font-semibold transition-all ${
                mode === 'Login' ? 'bg-white shadow-sm text-[#e8307d]' : 'text-[#e8307d]/60'
              }`}
            >
              <span className="truncate">Login</span>
            </button>
            <button 
              onClick={() => setMode('Sign Up')}
              className={`flex h-full grow items-center justify-center overflow-hidden rounded-lg px-2 text-sm font-semibold transition-all ${
                mode === 'Sign Up' ? 'bg-white shadow-sm text-[#e8307d]' : 'text-[#e8307d]/60'
              }`}
            >
              <span className="truncate">Sign Up</span>
            </button>
          </div>

          {/* Form Fields */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <Label className="text-[#e8307d] text-sm font-semibold px-1">Email</Label>
              <Input 
                type="email" 
                placeholder="hello@beautiful.com" 
                className="w-full rounded-xl border-none bg-[#fceef3] dark:bg-[#e8307d]/5 text-slate-900 dark:text-slate-100 focus-visible:ring-2 focus-visible:ring-[#e8307d]/30 h-14 px-4 placeholder:text-[#e8307d]/40 text-base"
              />
            </div>
            
            <div className="flex flex-col gap-1.5">
              <Label className="text-[#e8307d] text-sm font-semibold px-1">Password</Label>
              <div className="relative flex items-center">
                <Input 
                  type="password" 
                  placeholder="••••••••" 
                  className="w-full rounded-xl border-none bg-[#fceef3] dark:bg-[#e8307d]/5 text-slate-900 dark:text-slate-100 focus-visible:ring-2 focus-visible:ring-[#e8307d]/30 h-14 px-4 pr-12 placeholder:text-[#e8307d]/40 text-base"
                />
                <button className="absolute right-4 text-[#e8307d]/60">
                  <span className="material-symbols-outlined">visibility</span>
                </button>
              </div>
            </div>
          </div>

          {/* Primary Button */}
          <button className="w-full bg-[#e8307d] hover:bg-[#e8307d]/90 text-white font-bold h-14 rounded-xl shadow-lg shadow-[#e8307d]/20 transition-all active:scale-[0.98]">
            Continue
          </button>

          {/* Divider */}
          <div className="flex items-center gap-4 py-2">
            <div className="h-px flex-1 bg-[#e8307d]/20"></div>
            <span className="text-[#e8307d]/40 text-xs font-bold uppercase tracking-widest">or connect with</span>
            <div className="h-px flex-1 bg-[#e8307d]/20"></div>
          </div>

          {/* Social Logins */}
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 h-12 rounded-xl bg-white border border-[#e8307d]/10 shadow-sm text-slate-700 font-medium active:bg-slate-50">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwcIo8MJOldodxOItrzJYyD6ej1hO1jkeOo2oCVITaDjsrOZYVJnXkfs29sMizObwLFhBI01qojHD-Lms2dI2s9RGqy69YTsgz-sIdi9MJrGaW7YanCrPOInj0Cssnk6HkZPGd-7nKsYOKMzs7erV6s3tBJbmMGmjLOIR6bnEs2eCrFXBBjwO9UGCijVifInWHCBeHZ6ArdgmPktukpNez5c2YSmcnHggGoAs0IhYGRQJfxh7yTONzggaHY66lloMB1G2WdXsRd171" alt="Google" className="w-5 h-5" />
              <span>Google</span>
            </button>
            <button className="flex items-center justify-center gap-2 h-12 rounded-xl bg-slate-900 border border-slate-900 shadow-sm text-white font-medium active:opacity-90">
              <span className="material-symbols-outlined text-xl">ios</span>
              <span>Apple</span>
            </button>
          </div>

          {/* Footer Link */}
          <p className="text-center text-sm text-[#e8307d]/60">
            Forgot your password? <a href="#" className="text-[#e8307d] font-bold">Get help</a>
          </p>
        </Card>
      </div>

      {/* Decorative Elements */}
      <div className="fixed top-20 -left-10 w-32 h-32 bg-[#e8307d]/10 blur-3xl rounded-full pointer-events-none"></div>
      <div className="fixed bottom-20 -right-10 w-40 h-40 bg-[#e8307d]/10 blur-3xl rounded-full pointer-events-none"></div>
    </div>
  );
}
