import { useState } from 'react';

import { IconButton } from './IconButton';

import acceptIcon from '../assets/correct.svg';
import deleteIcon from '../assets/wrong.svg';

import { Guardian } from '@/interfaces/Guardian';

interface Props {
  guardianData: Guardian[],
  setValue: any,
  index: number
}

export function Guardians(props: Props) {

  const {
    guardianData,
    setValue,
    index
  } = props;

  const [isEditingName, setIsEditingName] = useState<boolean>(false);
  const [isEditingPhoneNumber, setIsEditingPhoneNumber] = useState<boolean>(false);
  
  const handleOnInputRejection = (inputName: string) => {
    setValue({ target: { name: inputName , value: '' } }, index, true);
    if (inputName === 'name') {
      setIsEditingName(false);
    }
    else {
      setIsEditingPhoneNumber(false);
    }
  }

  return (
    <>
      <div className="mb-4 border-y border-l shadow-lg">
        <div className="flex flex-col">
          {
            isEditingName
              ?
              <>
                <input
                  autoFocus
                  className="text-sm p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 border rounded-md shadow-md"
                  type="text"
                  name='name'
                  placeholder="Digite o nome do encarregado."
                  value={guardianData[index].name}
                  onChange={(e) => setValue(e, index)}
                />
                <div className="mt-2 self-end flex gap-2">
                  <IconButton
                    alt='accept icon'
                    src={acceptIcon}
                    handleOnClick={() => setIsEditingName(false)}
                  />
                  <IconButton
                    alt='reject icon'
                    src={deleteIcon}
                    handleOnClick={() => handleOnInputRejection('name')}
                  />
                </div>
              </>
              :
              <p
                className="p-2 text-sm cursor-pointer hover:bg-gray-200"
                onClick={(e) => {
                  setIsEditingName(true);
                  if (isEditingPhoneNumber) {
                    handleOnInputRejection('phoneNumber');
                  }
                }}
              >
                {guardianData[index]?.name || 'Adicione um encarregado...'}
              </p>
          }
        </div>
        <div className="flex flex-col">
          {
            isEditingPhoneNumber
              ?
              <>
                <input
                  autoFocus
                  className="text-xs mt-2 p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 border rounded-md shadow-md [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  type="number"
                  inputMode="numeric"
                  name="phoneNumber"
                  value={guardianData[index].phoneNumber}
                  onChange={  (e) => setValue(e, index)}
                  placeholder="Digite o telefone do encarregado."
                />
                <div className="mt-2 self-end flex gap-2">
                  <IconButton
                    alt='accept icon'
                    src={acceptIcon}
                    handleOnClick={() => setIsEditingPhoneNumber(false)}
                  />
                  <IconButton
                    alt='reject icon'
                    src={deleteIcon}
                    handleOnClick={() => handleOnInputRejection('phoneNumber')}
                  />
                </div>
              </>
              :
              <p
                className="mt-2 p-2 text-xs cursor-pointer hover:bg-gray-200"
                onClick={(e) => {
                  setIsEditingPhoneNumber(true);
                  if (isEditingName) {
                    handleOnInputRejection('name');
                  }
                }}
              >
                {`+238 ${guardianData[index].phoneNumber}`}
              </p>
          }
        </div>
      </div>
    </>
  )
} 