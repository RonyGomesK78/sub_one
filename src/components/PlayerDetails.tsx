import { useState } from "react";
import { Skill } from "./Skill";

import { Skills } from '../utils/mockedSkills';
import { CustomeButton } from "./CustomButton";

export default function PlayerDetails(props: { handlePlayerDetailsClose: any }) {

  const [isEditing, setIsEditing] = useState(false);

  const { handlePlayerDetailsClose } = props;

  const handleEditing = () => {
    console.log(isEditing);
    setIsEditing(!isEditing);

  }
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
                rate={Skills.heading}
              />
              <Skill
                attribute="Cantos"
                rate={Skills.corner}
              />
              <Skill
                attribute="Cruzamentos"
                rate={Skills.crossing}
              />
              <Skill
                attribute="Desarme"
                rate={Skills.tackling}
              />
              <Skill
                attribute="Finalização"
                rate={Skills.finishing}
              />
              <Skill
                attribute="Finta"
                rate={Skills.crossing}
              />
              <Skill
                attribute="Livres"
                rate={Skills.corner}
              />
              <Skill
                attribute="Marcação"
                rate={Skills.tackling}
              />
              <Skill
                attribute="Marcação de Penalti"
                rate={Skills.crossing}
              />
              <Skill
                attribute="Passe"
                rate={Skills.tackling}
              />
              <Skill
                attribute="Primeiro toque"
                rate={Skills.tackling}
              />
              <Skill
                attribute="Técnica"
                rate={Skills.corner}
              />
            </div>

            <div className="w-full sm:pl-4 sm:mt-0 mt-12">
              <h4 className="font-semibold text-lg mb-2 border-t pt-2">Mental</h4>
              <Skill
                attribute="Disciplina"
                rate={Skills.crossing}
              />
              <Skill
                attribute="Agressividade"
                rate={Skills.crossing}
              />
              <Skill
                attribute="Antecipação"
                rate={Skills.crossing}
              />
              <Skill
                attribute="Concentração"
                rate={Skills.crossing}
              />
              <Skill
                attribute="Decisão"
                rate={Skills.crossing}
              />
              <Skill
                attribute="Determinação"
                rate={Skills.crossing}
              />
              <Skill
                attribute="Liderança"
                rate={Skills.crossing}
              />
              <Skill
                attribute="Posicionamento"
                rate={Skills.crossing}
              />
              <Skill
                attribute="Trabalho de Equipa"
                rate={Skills.crossing}
              />
              <Skill
                attribute="Visão de Jogo"
                rate={Skills.crossing}
              />
            </div>
          </div>

          <div className="sm:flex justify-between p-4">
            <div className="w-full sm:pr-4">
              <h4 className="font-semibold text-lg mb-2 border-t pt-2">Físico</h4>
              <Skill
                attribute="Aceleração"
                rate={Skills.crossing}
              />
              <Skill
                attribute="Agilidade"
                rate={Skills.crossing}
              />
              <Skill
                attribute="Equilibrio"
                rate={Skills.crossing}
              />
              <Skill
                attribute="Força"
                rate={Skills.crossing}
              />
              <Skill
                attribute="Impulsão"
                rate={Skills.crossing}
              />
              <Skill
                attribute="Resistência"
                rate={Skills.crossing}
              />
              <Skill
                attribute="Velocidade"
                rate={Skills.crossing}
              />
            </div>

            <div className="w-full sm:pl-4 self-end sm:mt-0 mt-12 p-2">
              <p className="text-xs">Encarregado Educação 1</p>
              <p className="text-base font-semibold">Perpétua Antónia Alves</p>
              <p className="text-xs mb-4 shadow-md">+238 9929618</p>

              <p className="text-xs pt-2">Encarregado Educação 2</p>
              <p className="text-base font-semibold">Albertino Alberto Gomes</p>
              <p className="text-xs mb-4 shadow-md">+238 9369726</p>
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
              color="bg-red-500"
              secondaryColor='bg-red-700'
              message="Guardar"
              handleOnClick={handlePlayerDetailsClose}
            />
          </div>
          <div className="mb-4 h-10"></div>
        </div>
      </div>
    </>
  )
}
