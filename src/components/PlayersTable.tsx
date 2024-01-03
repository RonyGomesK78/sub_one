interface Players {
  id: string;
  name: string;
  age: string;
  genre: string;
  average?: string;
  position?: string
}

export default function PlayersTable(props: { players: Players[]; handlePlayerDetailOpen: any }) {
  const { players, handlePlayerDetailOpen } = props;

  const tableBody = () => {
    return players.map((player) => {
      const averageColor = Number(player?.average) > 9 ? "text-green-500" : "text-red-500";

      return (
        <tr 
          key={player.id} 
          className="bg-gray-100 border-white border-y-8 cursor-pointer hover:bg-gray-200"
          onClick={() => handlePlayerDetailOpen(player)}
        >
          <td className="text-left whitespace-nowrap p-8">
            {player.genre}
          </td>
          <td className="text-center whitespace-nowrap px-3">
            {player.name}
          </td>
          <td className="text-center whitespace-nowrap px-3">
            {player.age}
          </td>
          <td className="text-center whitespace-nowrap px-3">
            {player?.position}
          </td>
          <td className={`text-right whitespace-nowrap px-4 pr-8 ${averageColor}`}>
            {player.average}
          </td>
        </tr>
      )
    })
  }

  return (
    <table className="table-auto w-full">
      <thead>
        <tr className="text-gray-400 ">
          <th className="text-left pl-8 pt-3 align-middle">SEXO</th>
          <th className="whitespace-nowrap pt-3 px-4">NOME</th>
          <th className="whitespace-nowrap pt-3 px-4">IDADE</th>
          <th className="whitespace-nowrap pt-3 px-4">POSIÇÃO</th>
          <th className="text-right whitespace-nowrap pt-3 px-4 pr-8">CLASSIFICAÇÃO</th>
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
