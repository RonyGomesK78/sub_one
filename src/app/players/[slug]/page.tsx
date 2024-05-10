"use client";

import { useEffect, useState } from "react";

import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { RootState } from "@/lib/redux/store";

import { fetchPlayers, footballPlayers, addPlayer } from "@/lib/redux/features/playersSlice";
import { fetchFootballPositions, footballPositions } from "@/lib/redux/features/footballPositionsSlice";
import { fetchFootballCategories, footballCategories } from "@/lib/redux/features/footballCategoriesSlice";

import PlayerForm from "@/components/PlayerForm";
import PlayersTable from "@/components/PlayersTable";
import PlayerDetails from "@/components/PlayerDetails";
import { EmptyPlayers } from "@/components/EmptyPlayers";
import Loading from "@/components/Loading";
import Toast from '@/components/Toast';

import { Guardian } from "@/interfaces/Guardian";
import { PlayerRequest, PlayerResponse } from "@/interfaces/PlayerRequest";

import mapTeamSlugName from "@/utils/mapTeamSlugName";
import { Header } from "@/components/Header";

interface Player {
  id: string;
  name: string;
  age: string;
  genre: string;
  average: string;
  position?: string;
  guardians: Guardian[];
}

export default function Team({ params }: { params: { slug: string } }) {
  
  const dispatch = useAppDispatch();

  const [message, setMessage] = useState('');
  const [toastColor, setToastColor] = useState('');
  const [showToast, setShowToast] = useState(false);

  const players = useAppSelector((state: RootState) => footballPlayers(state));
  const positions = useAppSelector((state: RootState) => footballPositions(state));
  const categories = useAppSelector((state: RootState) => footballCategories(state));
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPlayerDetailsOpen, setIsPlayerDetailOpen] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState<PlayerResponse|null>(null);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPlayer(null);
  };

  const submitPlayer = (player: PlayerRequest) => {
    setIsModalOpen(false);
    dispatch(addPlayer(player));
  };

  const handlePlayerDetailsOpen = (player: PlayerResponse) => {
    setIsPlayerDetailOpen(true);
    setSelectedPlayer(player);
  };

  useEffect(() => {
    dispatch(fetchPlayers(params.slug));
    dispatch(fetchFootballPositions());
    dispatch(fetchFootballCategories());
  }, [dispatch, params.slug]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowToast(false);
    }, 5000);

    return () => clearTimeout(timeout);
  }, [showToast, setShowToast]);

  useEffect(() => {
    if (players.createdStatus === 'succeeded') {
      setMessage('Guardado com sucesso.');
      setToastColor('bg-green-500');
      setShowToast(true);
    }

    if (players.createdStatus === 'failed') {
      setMessage('Ocorreu um erro, tente novamente mais tarde.');
      setToastColor('bg-red-500');
      setShowToast(true);
    }
  }, [players.createdStatus]);

  if (players.status === 'idle' || players.status === 'loading' || positions.status === 'loading') {
    return <Loading />
  }
  else if (players.status === 'succeeded' && players.data.length === 0) {
    return (
      <>
        <Header />
        <EmptyPlayers
          handleOpenModal={handleOpenModal}
        />

        {
          isModalOpen &&
            <PlayerForm
              handleCloseModal={handleCloseModal}
              addPlayer={submitPlayer}
              positions={positions.data}
              categories={categories.data}
            />
        }
      </>
    )
  }

  return (
    <>
      <Header />
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
          // add key
          players={players.data as unknown as PlayerResponse []}
          handlePlayerDetailOpen={handlePlayerDetailsOpen}
        />
      </div>
      
      {
        isModalOpen && (
          <PlayerForm 
            handleCloseModal={handleCloseModal}
            addPlayer={submitPlayer}
            positions={positions.data}
            categories={categories.data}
          />
        )
      }

      {
        !isModalOpen && isPlayerDetailsOpen && selectedPlayer && (
          <PlayerDetails
            name={selectedPlayer.name}
            birthdate={selectedPlayer.birthdate}
            categories={selectedPlayer.categories}
            positions={selectedPlayer.positions}
            guardians={selectedPlayer.guardians}
            handleCloseModal={handleCloseModal}
          />
        )
      }

      <Toast 
        message={message}
        showToast={showToast}
        color={toastColor}
      />
    </>
  )
}
