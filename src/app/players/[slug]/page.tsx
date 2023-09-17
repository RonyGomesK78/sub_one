"use client";

import { useState } from "react";

import { EmptyPlayers } from "@/components/EmptyPlayers";
import PlayerForm from "@/components/PlayerForm";
import PlayersTable from "@/components/PlayersTable";
import PlayerDetails from "@/components/PlayerDetails";

import getAge from "../../../utils/getYear";
import compareSkill from "@/utils/compareSkill";
import mapTeamSlugName from "@/utils/mapTeamSlugName";
import { Skill, Skills } from "@/utils/mockedSkills";

interface Player {
  name: string;
  age: string;
  genre: string;
  average: string;
  position?: string
}

interface PlayerSubmitInfo {
  name: string;
  birthday: string;
  genre: string;
  motherName?: string;
  fatherName?: string;
  playerPhone?: string;
  motherPhone?: string;
  fatherPhone?: string;
}

export default function Team({ params }: { params: { slug: string } }) {

  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPlayerDetailsOpen, setIsPlayerDetailOpen] = useState(false);
  const [players, setPlayers] = useState<Player[]>([
    {
      age: '18',
      name: 'Romilton Gomes',
      genre: 'M',
      average: '5'
    }
  ]);

  const guardiansData = [
    {
      name: 'Perpétua Antónia Alves',
      phoneNumber: '9929618'
    },
    {
      name: 'Albertino Alberto Gomes',
      phoneNumber: '9369726'
    }
  ];

  const handleOpenModal = () => {
    setIsModalOpen(true);
  }

  const handleCloseModal = () => {
    setIsModalOpen(false);
  }

  
  const addPlayer = (player: PlayerSubmitInfo) => {
    setIsModalOpen(false);
    const newPlayer: Player = {
      age: getAge(new Date(player.birthday)).toString(),
      average: '-',
      genre: player.genre,
      name: player.name,
      position: '-',
    }
    setPlayers([...players, newPlayer]);
  }

  const handlePlayerDetailsOpen = () => {
    setIsPlayerDetailOpen(true);
  }

  const handlePlayerDetailsClose = () => {
    setIsPlayerDetailOpen(false);
  }

  const submitPlayerSkill = (values: Skills) => {
 
    console.log(compareSkill(Skill, values));
    setIsPlayerDetailOpen(false);
  }

  if (players.length === 0) {
    return (
      <>
        <EmptyPlayers
          handleOpenModal={handleOpenModal}
        />

        {
          isModalOpen &&
            <PlayerForm
              handleCloseModal={handleCloseModal}
              addPlayer={addPlayer}
            />
        }
      </>
    )
  }

  return (
    <>
      <div className="flex justify-between">
        <div className="xl:mx-80 mx-4">
          <h1 className="font-semibold text-xl mt-4">Jogadores</h1>
          <h2 className="text-gray-600 text-xs mb-8">{mapTeamSlugName(params.slug)}</h2>
        </div>
        <div className="justify-end xl:mr-80 mr-4 mt-4">
          <button
            className="bg-red-700 text-white font-semibold rounded-md shadow-lg hover:bg-red-600 xl:p-3 p-2"
            onClick={handleOpenModal}
          >
            Adicionar
          </button>
        </div>
      </div>
      <div className="overflow-x-auto shadow-inner xl:mx-80 m-4">
        <PlayersTable 
          players={players}
          handlePlayerDetailOpen={handlePlayerDetailsOpen}
        />
      </div>
      
      {
        isModalOpen && (
          <PlayerForm 
            handleCloseModal={handleCloseModal}
            addPlayer={addPlayer}
          />
        )
      }

      {
        !isModalOpen && isPlayerDetailsOpen && (
          <PlayerDetails
            handlePlayerDetailsClose={handlePlayerDetailsClose}
            submitPlayerSkills={submitPlayerSkill}
            skills={Skill}
            guardiansData={guardiansData}
          />
        )
      }
    </>
  )
}
