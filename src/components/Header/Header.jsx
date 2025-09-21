export default function Header() {
  return (
    <header className="flex flex-col items-center justify-center pb-8 text-center">
      <h1 className="text-3xl font-bold text-blue-600 mb-2">
        WhatsHub
      </h1>
      <p className="text-gray-600 max-w-2xl">
        O jeito mais rápido de iniciar conversas no WhatsApp. Gere links instantâneos
        e mantenha seus contatos organizados.
      </p>
    </header>
  );
}