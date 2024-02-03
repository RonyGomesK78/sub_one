import { MouseEventHandler, ReactNode } from "react";

import { FootballCategory } from "@/interfaces/FootballCategory";
import { FootballPosition } from "@/interfaces/FootballPosition";
import { Guardian } from "@/interfaces/Guardian";

import calculateAge from "@/utils/calculateAge";


interface Props {
  name: string;
  positions?: FootballPosition[];
  foot?: [{
    id: string,
    name: string,
  }];
  birthdate: string;
  categories: FootballCategory[];
  guardians?: Guardian[];
  handleCloseModal: MouseEventHandler<HTMLButtonElement>;
}

const PlayerDetails = ({
  name,
  positions,
  foot,
  birthdate,
  categories,
  guardians,
  handleCloseModal
}: Props) => {

  const renderPositions = (positions: FootballPosition[]): ReactNode[] => {
    return positions.map(position => (
      <p className="text-md font-medium" key={position.id}>
        {position.id}     
      </p>
    ));
  };

  const renderCategories = (categories: FootballCategory[]): ReactNode[] => {
    return categories.map(category => (
      <p className="text-md font-medium" key={category.id}>
        {category.name}
      </p>
    ));
  };

  const renderGuardians = (guardians: Guardian[]): ReactNode[] => {
    return guardians.map(guardian => (
      <>
        <div className="flex justify-between border shadow-md  p-4 mb-2 text-sm">
          <p>{guardian.name}</p>
          <p className="text-right">{guardian.countryCode} {guardian.phoneNumber}</p>
        </div>
      </>
    ))
  };

  return (
    <>
      <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-60">
        <div className="bg-white rounded-lg shadow-lg md:w-3/4 lg:w-3/5 xl:w-2/5 w-full px-4 overflow-scroll">
          <h3 className="text-center font-bold text-lg p-4 m-2">{name}</h3>

          <div className="flex justify-between rounded-md p-4 bg-gray-300">
            <div>
              <div>
                {
                  positions?.length && positions?.length >= 1 
                  ? 
                    renderPositions(positions) 
                  : 
                    <p className="text-md font-medium">-</p>
                }
                <p className="text-xs opacity-70">Posição</p>
              </div>

              <div className="mt-4">
                <p
                  className="text-md font-medium"
                >
                  Direito
                </p>
                <p className="text-xs opacity-70">Pé</p>
              </div>
            </div>

            <div className="text-end">
              <div>
                <p className="text-md font-medium">{calculateAge(birthdate)}</p>
                <p className="text-xs opacity-70">Anos</p>
              </div>

              <div className="mt-4">
                {
                  categories.length >= 0
                  ?
                    renderCategories(categories)
                  :
                    <p className="text-md font-medium">-</p>
                }
                <p className="text-xs opacity-70">Categoria</p>
              </div>
            </div>
          </div>

          <div className="w-full my-8">
            <h4 className="mb-4 p-2 text-center font-medium rounded-md bg-gray-300">Encarregados de Educação</h4>

            {
              guardians && guardians.length >= 1
              ?
                renderGuardians(guardians)
              :
              <div className="border shadow-md p-4 mb-2 text-sm">
                <p className="text-center">Sem Informação</p>
              </div>
            }
          </div>

          <div className="flex justify-end py-4">
            <button 
              className="text-gray-600 text-sm p-2 hover:bg-gray-100"
              onClick={handleCloseModal}
            >
                VOLTAR
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default PlayerDetails;
