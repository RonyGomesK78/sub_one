import { ChangeEvent, useState } from "react";

import { Skill } from "./Skill";
import { CustomeButton } from "./CustomButton";
import { Guardians } from "./Guardians";

import { Guardian } from "@/interfaces/Guardian";

import { Skills } from '../utils/mockedSkills';

interface Player {
  id?: string;
  name: string;
  age: string;
  genre: string;
  average: string;
  position?: string;
  guardians?: Guardian[];
}

export default function PlayerDetails(props: { handlePlayerDetailsClose: any, submitPlayerSkills: any, skills: Skills, player: Player }) {


  const { skills, handlePlayerDetailsClose, submitPlayerSkills, player } = props;

  const [playerSkills, setPlayerSkills] = useState<Skills>(skills)

  // const [guardians, setGuardians] = useState<Guardian[]>(guardiansData);

  const [foot, setFoot] = useState<string>('Direito');

  const [position, setPosition] = useState<string|undefined>(player.position);

  const [isEditingFoot, setIsEditingFoot] = useState<boolean>(false);

  const [isEditingPosition, setIsEditingPosition] = useState<boolean>(false);

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

  const handleSetGuardianInfo = (e: ChangeEvent<HTMLInputElement>, index: number, resetData: boolean = false ) => {
    const { name, value } = e.target;

    // const updatedGuardians = [...guardians];
    const inputName = name === 'name' ? 'name' : 'phoneNumber'; // to assert the value that guardiansData accept
    // const currentValue = resetData ? guardiansData[index][inputName] : value;
   
    // updatedGuardians[index] = {
    //   ...updatedGuardians[index],
    //   [name]: currentValue
    // }

    // setGuardians(updatedGuardians);
  }
  return (
    <>
      <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50">
        <div className="bg-white rounded-lg shadow-lg md:w-3/4 lg:w-3/5 xl:w-2/5 w-full px-4 overflow-scroll h-full">
          <h3 className="text-center font-bold text-lg p-4 m-2">{player.name}</h3>

          <div className="flex justify-between rounded-md p-4 bg-gray-300">
            <div>
              <div>
                {
                  isEditingPosition
                    ?
                      <select
                        autoFocus
                        value={position}  
                        className="mb-1 text-lg bg-white border border-gray-300 rounded-md shadow-sm focus:outline-blue-300"
                        name="position" 
                        id="position" 
                        onChange={(e) => {
                          setPosition(e.target.value);
                          setIsEditingPosition(false);
                        }}
                        onBlur={() => setIsEditingPosition(false)}
                      >
                        <option value="GR">GR</option>
                        <option value="DC">DC</option>
                        <option value="LE">LE</option>
                        <option value="LD">LD</option>
                        <option value="MD">MD</option>
                        <option value="MC">MC</option>
                        <option value="MO">MO</option>
                        <option value="EE">EE</option>
                        <option value="ED">ED</option>
                        <option value="PL">PL</option>
                      </select>
                    :
                      <p 
                        className="text-lg font-semibold cursor-pointer"
                        onClick={() => setIsEditingPosition(true)}
                      >
                        {position}
                      </p>
                }
                <p className="text-xs">Posição</p>
              </div>

              <div className="mt-4">
                {
                  isEditingFoot
                    ?
                      <select
                        autoFocus
                        value={foot}  
                        className="mb-1 text-lg bg-white border border-gray-300 rounded-md shadow-sm focus:outline-blue-300"
                        name="foot" 
                        id="foot" 
                        onChange={(e) => {
                          setFoot(e.target.value);
                          setIsEditingFoot(false);
                        }}
                        onBlur={() => setIsEditingFoot(false)}
                      >
                        <option value="Esquerdo">Esquerdo</option>
                        <option value="Direito">Direito</option>
                        <option value="Direito e Esquerdo">Direito e Esquerdo</option>
                      </select>
                    :
                      <p
                        className="text-lg font-semibold cursor-pointer"
                        onClick={() => setIsEditingFoot(true)}
                      >
                        {foot}
                      </p>
                }
                <p className="text-xs">Pé</p>
              </div>
            </div>

            <div className="text-end">
              <p className="text-xs">anos</p>
              <p className="text-lg font-semibold">{player.age}</p>
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

              <Guardians 
                guardianData={player.guardians && player?.guardians[0]}
                setValue={handleSetGuardianInfo}
                index={0}
              />
              <Guardians 
                guardianData={player.guardians && player?.guardians[1]}
                setValue={handleSetGuardianInfo}
                index={1}
              />
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
