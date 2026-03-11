# Design System: AI Bestie
**Project ID:** Local Repository (`stitchScreens`)

## 1. Visual Theme & Atmosphere
The AI Bestie app exudes an **empowering, warm, and highly polished** atmosphere. The aesthetic philosophy is rooted in "modern glassmorphism"—balancing clean, spacious layouts with soft, translucent layers (`backdrop-blur-xl`) and vibrant, energetic accents. It feels personal, inviting, and premium, avoiding harsh lines in favor of pill-shapes and smooth gradients. Shadows are whisper-soft and often carry a subtle tint, creating a "soft glow" effect rather than deep contrast.

## 2. Color Palette & Roles
* **Vibrant Magenta-Pink (#E8307D):** Used for primary actions, active navigation states, call-out numbers (like streaks/sessions), and glowing accents. This is the energetic heartbeat of the app.
* **Soft Pearl / Warm Off-White (#F8F6F7):** The default light-mode background. It carries a very subtle warm pinkish undertone to avoid the harshness of pure white.
* **Deep Maroon-Black (#1A0F14 to #211118):** The dark-mode background alternative. It is profoundly dark but maintains a cohesive warm tint.
* **Whisper Pink / Soft Pink (#FCEEF3 / #FEF2F2):** Used for solid input backgrounds, gentle highlights, and secondary informative surfaces.
* **Soft Coral (#FCA5A5):** Used as an accent for phase indicators (e.g., Luteal Phase) or warm highlights.
* **Glass White (rgba(255, 255, 255, 0.7)):** Used as the primary color for translucent foreground cards, layered over background gradients to achieve the frosted glass effect.

## 3. Typography Rules
* **Primary Typeface:** `Plus Jakarta Sans`. Chosen for its exceptionally clean, modern, and friendly geometric proportions.
* **Headers:** Heavy font weights (Bold `700` to Semibold `600`). Often paired with tight tracking for impact (`tracking-tight`) on large titles. 
* **Small Labels & Metadata:** Small font sizes (`text-[10px]` to `text-xs`), bold (`700`), heavily uppercase, and widely spaced (`tracking-widest` or `tracking-wider`). Used heavily for "overline" labels (e.g., "SESSIONS", "CURRENT PHASE").
* **Body Copy:** Regular (`400`) or Medium (`500`), offering highly readable, relaxed spacing for longer paragraphs of advice or chat.

## 4. Component Stylings
* **Buttons:** Generously rounded corners (often pill-shaped `rounded-full` or heavily curved `rounded-xl`/` rounded-2xl`). Primary buttons use the Vibrant Magenta-Pink with a corresponding tinted drop-shadow for elevation.
* **Cards/Containers:** Frosted glass effect (`backdrop-blur-md` or `backdrop-blur-sm`). Backgrounds are highly translucent (e.g., `bg-white/60` or `bg-slate-900/60`), bordered by a very thin, barely visible stroke (`border-white/40` or `border-white/5`). Corners are dramatically rounded (`rounded-2xl` or `rounded-3xl` for main content blocks).
* **Inputs/Forms:** Borderless by default. They sit on a soft, solid background (like Whisper Pink) with heavily rounded corners (`rounded-xl`). They rely on inner background color rather than strokes to define their shape, switching to a colored ring (`focus:ring-2 focus:ring-[primary color]`) only when active.
* **Interactive Toggles:** Pill-shaped containers (`rounded-xl`) with floating, pill-shaped active state indicators that utilize clean spring-like transitions.

## 5. Layout Principles
* **Whitespace:** Generous and airy. Sections are distinctly separated by ample vertical padding (`space-y-4` or `space-y-6`).
* **Alignment:** Highly structured internally, but organic externally. Cards float within the container rather than stretching edge-to-edge seamlessly, maintaining padding on the left and right (`px-4`).
* **Navigation:** Bottom navigation bars are strictly styled with a glassmorphic backdrop, hovering slightly or pinned to the bottom, utilizing glowing active indicators (a small glowing dot below the active icon).

## 6. shadcn/ui Integration Strategy
When building the React components from these designs, we will map shadcn/ui variables as follows:
* `radius`: Set to `1rem` or `1.25rem` in the base config to ensure all primitive components (cards, dialogs) match the heavily rounded `2xl`/`3xl` aesthetic.
* `--primary`: Mapped to `232, 48, 125` (the RGB of #E8307D) to allow shadcn components like `<Button />` to inherently use the brand color.
* `--background` / `--card`: Will be customized to use the soft pearl `#F8F6F7` and the glassmorphic RGBA values rather than solid hexes where applicable, requiring manual CSS overrides in `globals.css` for utilities like `.bg-card` to include `backdrop-filter`.
* **Fonts:** `Plus Jakarta Sans` will be loaded centrally in `layout.tsx` and mapped to the Tailwind `font-sans` variable, which shadcn uses by default.
