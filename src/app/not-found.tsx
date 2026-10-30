import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0E1110] text-[#F4F0EA] flex flex-col items-center justify-center px-4 text-center">
      <div className="max-w-md w-full p-8 rounded-xl bg-[#14221C] border border-[#2A3F35] shadow-2xl">
        <span className="text-[#8C694F] text-sm font-semibold tracking-widest uppercase mb-2 block">
          Chyba 404
        </span>
        <h1 className="text-4xl font-bold text-white mb-4">Stránka nenalezena</h1>
        <p className="text-[#A0A0A0] text-sm mb-8 leading-relaxed">
          Tato trasa v mapě chybí nebo stránka již neexistuje. Vrať se zpět na hlavní stránku portfolio.
        </p>
        <Link
          href="/"
          className="inline-block bg-[#14221C] hover:bg-[#1C2F27] text-white font-medium px-6 py-3 rounded-lg border border-[#2A3F35] transition-all duration-200 shadow-md"
        >
          [ Zpět na hlavní stránku ]
        </Link>
      </div>
    </div>
  );
}