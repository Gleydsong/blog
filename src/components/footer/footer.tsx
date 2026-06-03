import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="border-t border-white/10 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between md:flex-row  md:justify-start gap-8 py-8">
          <Link rel="stylesheet" href="/">
            <Image src="/logo.svg" alt="Logo" width={116} height={32} />
          </Link>

          <nav className="flex flex-col md:flex-row items-center gap-4 text-sm text-muted-foreground not-even:">
            <Link
              href="/politica-de-privacidade"
              className="hover:text-primary"
            >
              Política de Privacidade
            </Link>
            <Link href="/termos-de-uso" className="hover:text-primary">
              Termos de Uso
            </Link>
            <Link href="/feedback" className="hover:text-primary">
              Feedback
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};
