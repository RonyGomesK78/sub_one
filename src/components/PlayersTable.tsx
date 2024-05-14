import { Guardian } from "@/interfaces/Guardian";
import { PlayerResponse } from "@/interfaces/PlayerRequest";

export default function PlayersTable(props: { players: PlayerResponse[]; handlePlayerDetailOpen: any }) {
  const { players, handlePlayerDetailOpen } = props;

  const renderGuardians = (guardians: Guardian[]) => {
    if (guardians.length === 0) {
      return '-'
    }
    if (guardians.length === 2) {
      return (
        <li className="list-none">
          <ul>{guardians[0].name}</ul>
          <ul>{guardians[1].name}</ul>
        </li>
      )
    }
    return `${guardians[0].name}`;
  }

  const tableBody = () => {
    
    return players.map((player, index) => {
      return (
        <tr 
          key={player.id} 
          className="bg-gray-100 border-white border-y-8 cursor-pointer hover:bg-gray-300"
          onClick={() => handlePlayerDetailOpen(player)}
        >
          <td className="text-left whitespace-nowrap p-8">
            {++index}
          </td>
          <td className="text-left whitespace-nowrap p-8">
            {player.genre}
          </td>
          <td className="text-left whitespace-nowrap px-4">
            {player.name}
          </td>
          <td className="text-left whitespace-nowrap px-4">
            {player.nickname || '-'}
          </td>
          <td className="text-left whitespace-nowrap px-4">
            {player?.positions?.length  ? player?.positions[0].name : '-'}
          </td>
          <td className={"text-left whitespace-nowrap px-4"}>
            {player.birthdate}
          </td>
          <td className={"text-left whitespace-nowrap px-4"}>
            {player.address || '-'}
          </td>
          <td className={"text-right whitespace-nowrap px-4 pr-8"}>
            {player.guardians ? renderGuardians(player.guardians) : '-'}
          </td>
        </tr>
      )
    })
  }

  return (
    <table className="table-auto w-full">
      <thead>
        <tr className="text-gray-400 ">
          <th className="text-left pl-8 pt-3 align-middle">#</th>
          <th className="text-left pl-8 pt-3 align-middle">SEXO</th>
          <th className="text-left whitespace-nowrap pt-3 px-4">NOME</th>
          <th className="text-left whitespace-nowrap pt-3 px-4">ALCUNHA</th>
          <th className="text-left whitespace-nowrap pt-3 px-4">POSIÇÃO</th>
          <th className="text-left whitespace-nowrap pt-3 px-4">DATA DE NASCIMENTO</th>
          <th className="text-left whitespace-nowrap pt-3 px-4">ENDEREÇO</th>
          <th className="text-right whitespace-nowrap pt-3 px-4 pr-8">ENCARREGADOS DE EDUCAÇÃO</th>
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
