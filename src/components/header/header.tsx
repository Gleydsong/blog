import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ActiveLink } from "../active-link";
import { Logo } from "../logo";

export const Header = () => {
  return (
    <header>
      <div className="fixed top-0 z-50 w-full border-b border-gray-400 bg-gray-700/95 backdrop-blur supports-backdrop-filter:bg-gray-700/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Logo />

            <nav className="flex items-center gap-6">
              <ActiveLink href="/">Inicio</ActiveLink>
              <ActiveLink href="/blog">Blog</ActiveLink>
              <Button asChild>
                <Link href="/começar">Começar</Link>
              </Button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
