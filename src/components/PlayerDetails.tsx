import { Skill } from "./Skill";

import { Skills } from '../utils/mockedSkills';
import { CustomeButton } from "./CustomButton";
import { ChangeEvent, useState } from "react";

export default function PlayerDetails(props: { handlePlayerDetailsClose: any, submitPlayerSkills: any, skills: Skills }) {

  const { skills, handlePlayerDetailsClose, submitPlayerSkills } = props;

  const [playerSkills, setPlayerSkills] = useState<Skills>(skills)

  const handleSetPlayerSkills = (e: ChangeEvent<HTMLInputElement>, previousValue: number = 0) => {
    const { name, value } = e.target;
    const currentValue = previousValue > 0 ? previousValue : Number(value);
        
    if (currentValue >= 0 && currentValue <= 20) {
      setPlayerSkills({
        ...playerSkills,
        [name]: currentValue === 0 ? '' : currentValue,
      });
    }
  };

  return (
    <>
      <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50">
        <div className="bg-white rounded-lg shadow-lg md:w-3/4 lg:w-3/5 xl:w-2/5 w-full px-4 overflow-scroll h-full">
          <h3 className="text-center font-bold text-lg p-4 m-2">Romilton Alves Gomes</h3>

          <div className="flex justify-between rounded-md p-4 bg-gray-300">
            <div>
              <div>
                <p className="text-lg font-semibold">MC</p>
                <p className="text-xs">Posição</p>
              </div>
              <div className="mt-4">
                <p className="text-lg font-semibold">Direito</p>
                <p className="text-xs">Pé</p>
              </div>
            </div>

            <div className="text-end">
              <p className="text-xs">anos</p>
              <p className="text-lg font-semibold">30</p>
              <p className="text-xs">28-09-1992</p>
            </div>
          </div>

          <div className="sm:flex justify-between p-4 mt-12">
            <div className="w-full sm:pr-4">
              <h4 className="font-semibold text-lg mb-2 border-t pt-2">Técnica</h4>
              <Skill
                attribute="Cabeceamento"
                inputName="heading"
                playerSkills={playerSkills}
                defaultPlayerSkills={skills}
                setRate={handleSetPlayerSkills}
              />
              <Skill
                attribute="Cantos"
                inputName="corner"
                playerSkills={playerSkills}
                defaultPlayerSkills={skills}
                setRate={handleSetPlayerSkills}
              />
              <Skill
                attribute="Cruzamentos"
                inputName="crossing"
                playerSkills={playerSkills}
                defaultPlayerSkills={skills}
                setRate={handleSetPlayerSkills}
              />
              <Skill
                attribute="Desarme"
                inputName="tackling"
                playerSkills={playerSkills}
                defaultPlayerSkills={skills}
                setRate={handleSetPlayerSkills}
              />
              <Skill
                attribute="Finalização"
                inputName="finishing"
                playerSkills={playerSkills}
                defaultPlayerSkills={skills}
                setRate={handleSetPlayerSkills}
              />
              <Skill
                attribute="Finta"
                inputName="dribbling"
                playerSkills={playerSkills}
                defaultPlayerSkills={skills}
                setRate={handleSetPlayerSkills}
              />
              <Skill
                attribute="Livres"
                inputName="free_kick"
                playerSkills={playerSkills}
                defaultPlayerSkills={skills}
                setRate={handleSetPlayerSkills}
              />
              <Skill
                attribute="Marcação"
                inputName="marking"
                playerSkills={playerSkills}
                defaultPlayerSkills={skills}
                setRate={handleSetPlayerSkills}
              />
              <Skill
                attribute="Marcação de Penalti"
                inputName="penalty"
                playerSkills={playerSkills}
                defaultPlayerSkills={skills}
                setRate={handleSetPlayerSkills}
              />
              <Skill
                attribute="Passe"
                inputName="passing"
                playerSkills={playerSkills}
                defaultPlayerSkills={skills}
                setRate={handleSetPlayerSkills}
              />
              <Skill
                attribute="Primeiro toque"
                inputName="first_touch"
                playerSkills={playerSkills}
                defaultPlayerSkills={skills}
                setRate={handleSetPlayerSkills}
              />
              <Skill
                attribute="Técnica"
                inputName="technique"
                playerSkills={playerSkills}
                defaultPlayerSkills={skills}
                setRate={handleSetPlayerSkills}
              />
            </div>

            <div className="w-full sm:pl-4 sm:mt-0 mt-12">
              <h4 className="font-semibold text-lg mb-2 border-t pt-2">Mental</h4>
              <Skill
                attribute="Disciplina"
                inputName="discipline"
                playerSkills={playerSkills}
                defaultPlayerSkills={skills}
                setRate={handleSetPlayerSkills}
              />
              <Skill
                attribute="Agressividade"
                inputName="aggression"
                playerSkills={playerSkills}
                defaultPlayerSkills={skills}
                setRate={handleSetPlayerSkills}
              />
              <Skill
                attribute="Antecipação"
                inputName="anticipation"
                playerSkills={playerSkills}
                defaultPlayerSkills={skills}
                setRate={handleSetPlayerSkills}
              />
              <Skill
                attribute="Concentração"
                inputName="concentration"
                playerSkills={playerSkills}
                defaultPlayerSkills={skills}
                setRate={handleSetPlayerSkills}
              />
              <Skill
                attribute="Decisão"
                inputName="decision"
                playerSkills={playerSkills}
                defaultPlayerSkills={skills}
                setRate={handleSetPlayerSkills}
              />
              <Skill
                attribute="Determinação"
                inputName="determination"
                playerSkills={playerSkills}
                defaultPlayerSkills={skills}
                setRate={handleSetPlayerSkills}
              />
              <Skill
                attribute="Liderança"
                inputName="leadership"
                playerSkills={playerSkills}
                defaultPlayerSkills={skills}
                setRate={handleSetPlayerSkills}
              />
              <Skill
                attribute="Posicionamento"
                inputName="positioning"
                playerSkills={playerSkills}
                defaultPlayerSkills={skills}
                setRate={handleSetPlayerSkills}
              />
              <Skill
                attribute="Trabalho de Equipa"
                inputName="teamwork"
                playerSkills={playerSkills}
                defaultPlayerSkills={skills}
                setRate={handleSetPlayerSkills}
              />
              <Skill
                attribute="Visão de Jogo"
                inputName="vision"
                playerSkills={playerSkills}
                defaultPlayerSkills={skills}
                setRate={handleSetPlayerSkills}
              />
            </div>
          </div>

          <div className="sm:flex justify-between p-4">
            <div className="w-full sm:pr-4">
              <h4 className="font-semibold text-lg mb-2 border-t pt-2">Físico</h4>
              <Skill
                attribute="Aceleração"
                inputName="acceleration"
                playerSkills={playerSkills}
                defaultPlayerSkills={skills}
                setRate={handleSetPlayerSkills}
              />
              <Skill
                attribute="Agilidade"
                inputName="agility"
                playerSkills={playerSkills}
                defaultPlayerSkills={skills}
                setRate={handleSetPlayerSkills}
              />
              <Skill
                attribute="Força"
                inputName="strength"
                playerSkills={playerSkills}
                defaultPlayerSkills={skills}
                setRate={handleSetPlayerSkills}
              />
              <Skill
                attribute="Impulsão"
                inputName="jumping_reach"
                playerSkills={playerSkills}
                defaultPlayerSkills={skills}
                setRate={handleSetPlayerSkills}
              />
              <Skill
                attribute="Resistência"
                inputName="stamina"
                playerSkills={playerSkills}
                defaultPlayerSkills={skills}
                setRate={handleSetPlayerSkills}
              />
              <Skill
                attribute="Velocidade"
                inputName="pace"
                playerSkills={playerSkills}
                defaultPlayerSkills={skills}
                setRate={handleSetPlayerSkills}
              />
            </div>

            <div className="w-full sm:pl-4 sm:mt-0 mt-12">
              <h4 className="font-semibold text-lg mb-2 border-t pt-2">Encarregados de Educação</h4>

              <div className="mb-4 border shadow-md">
                <p className="p-2 text-sm cursor-pointer hover:bg-gray-200">Perpétua Antónia Alves</p>
                <p className="py-1 px-2 text-xs cursor-pointer hover:bg-gray-200">+238 9929618</p>
              </div>

              <div className="mb-4 border shadow-md">
                <p className="p-2 text-sm cursor-pointer hover:bg-gray-200">Albertino Alberto Gomes</p>
                <p className="py-1 px-2 text-xs cursor-pointer hover:bg-gray-200">+238 9369726</p>
              </div>
            </div>
          </div>

          <div
            className="flex justify-end gap-2 border-t-2 mt-10 pt-8 pb-12 md:pb-0"
          >
            <CustomeButton
              color="bg-gray-500"
              secondaryColor='bg-gray-700'
              message="Cancelar"
              handleOnClick={handlePlayerDetailsClose}
            />
            <CustomeButton
              type="submit"
              color="bg-red-500"
              secondaryColor='bg-red-700'
              message="Guardar"
              handleOnClick={() => submitPlayerSkills(playerSkills)}
            />
          </div>
          <div className="mb-4 h-10"></div>
        </div>
      </div>
    </>
  )
}
