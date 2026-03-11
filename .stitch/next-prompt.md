---
page: chatHistory_2
---
# Enhanced Stitch Prompt: Chat History (The Vault)

A beautifully soft, highly polished, and empowering chat history screen titled "The Vault" for the AI Bestie app. It features a soft, glassmorphic aesthetic with vibrant accents, feeling personal, inviting, and premium.

**DESIGN SYSTEM (REQUIRED):**
- Platform: Mobile-first
- Theme: Light, modern glassmorphism, warm, airy
- Background: Soft Glam Gradient (diagonal gradient of very pale pink #fdf4ff to very pale purple #f5f3ff)
- Surface: Glass White (rgba(255, 255, 255, 0.9)) for the chat history cards, utilizing heavy backdrop blur.
- Primary Accent: Vibrant Magenta-Pink (#E8307D) for active filters, glowing accents, and floating action button.
- Secondary Accent: Soft Lavender (#f3e8ff) and Soft Rose (#fce7f3) for avatar/icon backgrounds.
- Text Primary: Deep Maroon-Black (#1A0F14) for headings
- Typography: Plus Jakarta Sans, heavy font weights for headers, relaxed spacing for body copy.
- Component Style: Pill-shaped buttons (rounded-full), heavily rounded cards (rounded-xl) with subtle, warm drop-shadows (soft glow effect).
- Layout: Generous whitespace, floating cards with side padding.

**Page Structure:**
1. **Header:** Sticky top header with a "Back" chevron (left), bold centered title "The Vault" (Center), and a "Search" magnifying glass icon (Right). Background is a slightly frosted glass (`backdrop-blur-md`).
2. **Filter Bar:** A horizontal, scrollable row of pill-shaped filter buttons right below the header. The first pill ("All Chats") is filled solidly with the Primary Accent (#E8307D) and white text. The other pills ("Favorites", "Reflections", "Mood Tracker") have a lightly tinted background (`bg-primary/10`) with primary colored text and a faint border.
3. **Chat List (Recent Sessions):** A vertical list of past conversations. Above the list is a small, uppercase, widely tracked header "RECENT SESSIONS".
4. **Chat Card Design:** Each chat session in the list is a glassmorphic card (frosted white, gently rounded). It contains:
    *   **Left:** A generously sized, square-icon container (heavily rounded) with a softly tinted pastel background (e.g., Soft Rose or Soft Lavender) containing a large Emoji (✨, 🌸, ☁️, ☀️).
    *   **Center:** The chat title (bold, dark text) and below it the date/timestamp (uppercase, very small, bold, in the Primary Accent color).
    *   **Right:** A subtle trash/delete icon (grayed out).
    *   **Bottom:** A two-line preview of the chat text in italics, feeling like a quoted memory.
5. **Floating Action Button (FAB):** A large, circular Primary Accent button with a "plus" icon hovering in the bottom right corner (above the bottom nav), casting a soft, primary-colored glow/shadow.
6. **Bottom Navigation:** A frosted glass bottom bar with 4 evenly spaced tab items: Chat (Active, glowing primary icon), Insights (inactive), Outfits (inactive), Profile (inactive).
