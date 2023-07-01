import { EmptyPlayers } from "@/components/EmptyPlayers";
import PlayersTable from "@/components/PlayersTable";

interface Players {
  name: string;
  age: string;
  genre: string;
  average: string;
  position?: string
}

export default function Sub13() {

  let players : Players[] = [
    {
      name: 'Rodrigo Rocha Verissimo',
      age: '12',
      genre: 'F',
      average: '18',
      position: 'MC'
    },
    {
      name: 'Eder Morais Silva',
      age: '12',
      genre: 'M',
      average: '18'
    },
    {
      name: 'Genisvaldo',
      age: '12',
      genre: 'F',
      average: '9'
    },
    {
      name: 'Genisvaldo',
      age: '12',
      genre: 'F',
      average: '0'
    },
    {
      name: 'Genisvaldo',
      age: '12',
      genre: 'M',
      average: '20'
    },
    {
      name: 'Genisvaldo',
      age: '12',
      genre: 'M',
      average: '18'
    },
    {
      name: 'Genisvaldo',
      age: '12',
      genre: 'M',
      average: '18'
    },
    {
      name: 'Genisvaldo',
      age: '12',
      genre: 'M',
      average: '18'
    },
    {
      name: 'Genisvaldo',
      age: '12',
      genre: 'M',
      average: '18'
    },
    {
      name: 'Genisvaldo',
      age: '12',
      genre: 'M',
      average: '18'
    },
    {
      name: 'Rodrigo Rocha Verissimo',
      age: '12',
      genre: 'M',
      average: '18',
      position: 'MC'
    },
    {
      name: 'Eder Morais Silva',
      age: '12',
      genre: 'M',
      average: '18'
    },{
      name: 'Rodrigo Rocha Verissimo',
      age: '12',
      genre: 'M',
      average: '18',
      position: 'MC'
    },
    {
      name: 'Eder Morais Silva',
      age: '12',
      genre: 'M',
      average: '18'
    },
  ];

  if (players.length === 0) {
    return (
      <>
        <EmptyPlayers />
      </>
    )
  }

  return (
    <>
      <div className="flex justify-between">
        <div className="2xl:mx-80 mx-4">
          <h1 className="font-semibold text-xl mt-4">Jogadores</h1>
          <h2 className="text-gray-600 text-xs mb-8">SUB-13</h2>
        </div>
        <div className="justify-end 2xl:mr-80 mr-4 mt-4">
          <button
            className="bg-red-700 text-white font-semibold rounded-md shadow-lg hover:bg-red-600 2xl:p-3 p-2"
          >
            Adicionar
          </button>
        </div>
      </div>
      <div className="overflow-x-auto shadow-inner 2xl:mx-80 m-4">
        <PlayersTable 
          players={players}
        />
      </div>
    </>
  )
}