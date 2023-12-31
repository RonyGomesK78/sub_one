import { ChangeEvent, useState } from "react";
import Image from "next/image";

import { Skills } from "@/utils/mockedSkills";

import returnIcon from "../assets/return.svg";

interface Props {
  attribute: string,
  inputName: 'heading' | 'corner' | 'crossing' | 'tackling' | 'finishing' | 'dribbling' | 'free_kick'
    | 'marking' | 'penalty' | 'passing' | 'first_touch' | 'technique' | 'discipline' | 'aggression'
    | 'anticipation' | 'concentration' | 'decision' | 'determination' | 'leadership' | 'positioning'
    | 'teamwork' | 'vision' | 'acceleration' | 'agility' | 'strength' | 'jumping_reach' | 'stamina' | 'pace'
  playerSkills: Skills,
  defaultPlayerSkills: Skills,
  setRate: any,
}

export function Skill({
  attribute,
  inputName,
  playerSkills,
  defaultPlayerSkills,
  setRate
}: Props) {

  const [isEditing, setIsEditing] = useState(false);

  const handleOnEditing = () => {
    setIsEditing(true);
  }

  const handleOnBlur = (e: ChangeEvent<HTMLInputElement>) => {

    if (defaultPlayerSkills[inputName].toString() === playerSkills[inputName].toString() || (Number(playerSkills[inputName]) < 1 || Number(playerSkills[inputName]) > 20)) {
      // since on editing the div was set with a bg color and a text color we keep this one if the input was really edited
      setIsEditing(false);      
      setRate(e, defaultPlayerSkills[inputName]);
    }
  }


  return (
    <>
      <div
        className={`flex justify-between text-sm rounded-md md:p-2 p-3 shadow-md  ${isEditing ? 'mb-0 bg-blue-300 text-gray-700' : 'mb-4 bg-gray-200'}`}
      >
        <p
          className={`self-center cursor-pointer ${isEditing ? 'bg-white border rounded-sm' : ''}`}
          onClick={handleOnEditing}
        >
          {attribute}
        </p>
        {
          isEditing
            ?
              <input
                name={inputName}
                autoFocus
                min={1}
                max={20}
                type="number"
                className="py-1 px-2 ml-2 w-12 text-center focus:outline-none focus:ring-2 focus:ring-blue-500 border rounded-md shadow-md [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                value={playerSkills[inputName]}
                onBlur={(e) => handleOnBlur(e)}
                onChange={(e) => setRate(e)}
              />
            :
              <p className="self-center pr-4">{playerSkills[inputName]}</p>
        }
      </div>
      {
        isEditing && (
          <div className="mb-4 flex justify-end">
            <Image
              alt="return icon"
              src={returnIcon}
              className="justify-end w-7 bg-white rounded-md border shadow-lg"
              onClick={() => {
                setRate({ target: { name: inputName, value: null }}, defaultPlayerSkills[inputName]);
                setIsEditing(false);
              }}
            />
          </div>
        )
      }
    </>
  )
}
