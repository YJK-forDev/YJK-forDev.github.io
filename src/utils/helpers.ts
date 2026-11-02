export const pillButtonClass = "px-4! py-1! text-xs! sm:text-sm! shadow-[0_5px_12px_rgba(15,47,44,0.5)] transition-all hover:shadow-[0_8px_16px_rgba(15,47,44,0.5)]";

export const withBase = (path: string) => `${import.meta.env.BASE_URL.replace(/\/$/, '')}${path}`;