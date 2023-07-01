export function EmptyPlayers() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-8">
      <h2
        className="text-xl text-gray-400 opacity-80 font-bold px-4 text-center"
      >
        Não tens nenhum jogador adicionado.
      </h2>
      <button
        className="bg-red-700 text-white p-3 rounded-md hover:bg-red-600"
      >
        Adicionar Jogador
      </button>
    </div>
  )
} 