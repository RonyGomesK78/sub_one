import { Skills } from "@/utils/mockedSkills";
import { ChangeEvent, useState } from "react"

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
        className={`flex justify-between text-sm rounded-md mb-4 md:p-2 p-3 shadow-md  ${isEditing ? 'bg-blue-300 text-gray-700' : 'bg-gray-200'}`}
      >
        <p
          className={`self-center cursor-pointer`}
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
    </>
  )
}
