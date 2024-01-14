"use client";

import { useEffect, useState } from "react";

import { EmptyPlayers } from "@/components/EmptyPlayers";
import PlayerForm from "@/components/PlayerForm";
import PlayersTable from "@/components/PlayersTable";
import PlayerDetails from "@/components/PlayerDetails";

import getAge from "../../../utils/getYear";
import compareSkill from "@/utils/compareSkill";
import mapTeamSlugName from "@/utils/mapTeamSlugName";
import { Skill, Skills } from "@/utils/mockedSkills";

import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";

import { fetchPlayers, selectPlayers } from "@/lib/redux/features/playersSlice";
import { RootState } from "@/lib/redux/store";

import { Guardian } from "@/interfaces/Guardian";
import Loading from "@/components/Loading";

interface Player {
  id: string;
  name: string;
  age: string;
  genre: string;
  average: string;
  position?: string;
  guardians?: Guardian[];
}

interface NewPlayer {
  name: string;
  age: string;
  genre: string;
  average: string;
  position?: string;
  guardians?: Guardian[];
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
  
  const dispatch = useAppDispatch();
  const players = useAppSelector((state: RootState) => selectPlayers(state));
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPlayerDetailsOpen, setIsPlayerDetailOpen] = useState(false);
  const [newPlayer, setNewPlayer] = useState<NewPlayer>();
  const [selectedPlayer, setSelectedPlayer] = useState<Player|null>(null);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  }

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPlayer(null);
  }

  const addPlayer = (player: PlayerSubmitInfo) => {
    setIsModalOpen(false);
    const newPlayer: NewPlayer = {
      age: getAge(new Date(player.birthday)).toString(),
      average: '-',
      genre: player.genre,
      name: player.name,
      position: '-',
    }
    setNewPlayer(newPlayer);
  }

  const handlePlayerDetailsOpen = (player: Player) => {
    setIsPlayerDetailOpen(true);
    setSelectedPlayer(player);
  }

  const handlePlayerDetailsClose = () => {
    setIsPlayerDetailOpen(false);
  }

  const submitPlayerSkill = (values: Skills) => {
 
    setIsPlayerDetailOpen(false);
  }

  useEffect(() => {
    // Dispatch the async action to fetch todos when the component mounts
    dispatch(fetchPlayers());
  }, [dispatch]);

  if (players.status === 'idle' || players.status === 'loading') {
    return <Loading />
  }
  else if (players.status === 'succeeded' && players.data.length === 0) {
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
          players={players.data as unknown as Player []}
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
        !isModalOpen && isPlayerDetailsOpen && selectedPlayer && (
          <PlayerDetails
            handlePlayerDetailsClose={handlePlayerDetailsClose}
            submitPlayerSkills={submitPlayerSkill}
            skills={Skill}
            player={selectedPlayer}
          />
        )
      }
    </>
  )
}
