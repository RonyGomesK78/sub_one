interface Players {
  id: string;
  name: string;
  nickname?: string;
  birthdate?: string;
  genre: string;
  address?: string;
  position?: string
}

export default function PlayersTable(props: { players: Players[]; handlePlayerDetailOpen: any }) {
  const { players, handlePlayerDetailOpen } = props;

  const tableBody = () => {
    return players.map((player) => {
      return (
        <tr 
          key={player.id} 
          className="bg-gray-100 border-white border-y-8 cursor-pointer hover:bg-gray-200"
          onClick={() => handlePlayerDetailOpen(player)}
        >
          <td className="text-left whitespace-nowrap p-8">
            {player.genre}
          </td>
          <td className="text-left whitespace-nowrap px-4">
            {player.name}
          </td>
          <td className="text-left whitespace-nowrap px-4">
            {player.nickname}
          </td>
          <td className="text-left whitespace-nowrap px-4">
            {player?.position}
          </td>
          <td className={"text-left whitespace-nowrap px-4"}>
            {player.birthdate}
          </td>
          <td className={"text-right whitespace-nowrap px-4 pr-8"}>
            {player.address}
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
          <th className="text-left whitespace-nowrap pt-3 px-4">NOME</th>
          <th className="text-left whitespace-nowrap pt-3 px-4">ALCUNHA</th>
          <th className="text-left whitespace-nowrap pt-3 px-4">POSIÇÃO</th>
          <th className="text-left whitespace-nowrap pt-3 px-4">DATA DE NASCIMENTO</th>
          <th className="text-right whitespace-nowrap pt-3 px-4 pr-8">ENDEREÇO</th>
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
