interface Players {
  name: string;
  age: string;
  genre: string;
  average?: string;
  position?: string
}

export default function PlayersTable(props: { players: Players[]; }) {
  const { players } = props;

  const tableBody = () => {
    return players.map((player, index) => {
      const averageColor = Number(player?.average) > 9 ? "text-green-500" : "text-red-500";

      return (
        <tr key={index} className="bg-gray-100 border-white border-y-8 cursor-pointer hover:bg-gray-200">
          <td className="text-left whitespace-nowrap px-3 py-8">
            {player.genre}
          </td>
          <td className="text-left whitespace-nowrap px-3 py-8">
            {player.name}
          </td>
          <td className="text-left whitespace-nowrap px-3 py-8">
            {player.age}
          </td>
          <td className="text-left whitespace-nowrap px-3 py-8">
            {player?.position}
          </td>
          <td className={`text-left whitespace-nowrap px-3 py-8 ${averageColor}`}>
            {player.average}
          </td>
        </tr>
      )
    })
  }

  return (
    <table className="table-auto w-full">
      <thead>
        <tr className="text-gray-400">
          <th className="text-left p-3">SEXO</th>
          <th className="text-left whitespace-nowrap p-3">NOME</th>
          <th className="text-left whitespace-nowrap p-3">IDADE</th>
          <th className="text-left whitespace-nowrap p-3">POSIÇÃO</th>
          <th className="text-left whitespace-nowrap p-3">CLASSIFICAÇÃO</th>
        </tr>
      </thead>

      <tbody>
        {
          tableBody()
        }
      </tbody>
    </table>
  )
}
