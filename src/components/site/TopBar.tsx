import { Clock, Facebook, Twitter, Linkedin, Globe } from "lucide-react";

export function TopBar() {
  return (
    <div className="hidden md:block bg-navy text-white text-xs">
      <div className="container mx-auto max-w-7xl px-6 flex items-center justify-between h-10">
        <div className="flex items-center gap-2 text-white/80">
          <Clock className="h-3.5 w-3.5 text-red-brand" />
          <span className="tracking-wider">MON - SAT: 6:00 AM - 10:00 PM | SUN: CLOSED</span>
        </div>
        <div className="flex items-center gap-1">
          {[Facebook, Twitter, Linkedin, Globe].map((Icon, i) => (
            <a
              key={i}
              href="#"
              aria-label={`social-${i}`}
              className="h-8 w-8 grid place-items-center text-white/70 hover:text-red-brand transition-colors"
            >
              <Icon className="h-3.5 w-3.5" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
