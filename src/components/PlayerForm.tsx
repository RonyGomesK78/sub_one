"use client";

import { MouseEventHandler, useState } from "react";
import { CustomeButton } from "./CustomButton";

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

interface Props {
  handleCloseModal: MouseEventHandler<HTMLButtonElement>,
  addPlayer: (playerSubmitInfo: PlayerSubmitInfo) => void,
}

export default function PlayerForm(props: Props) {
  const { handleCloseModal, addPlayer } = props;

  const [formData, setFormData] = useState({
    name: '',
    birthday: new Date().toISOString().slice(0, 10),
    genre: 'F'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50">
        <div className="bg-white rounded-lg shadow-lg md:w-3/4 lg:w-3/5 xl:w-2/5 2xl:w-1/4 w-full px-4 overflow-scroll xl:h-4/5 h-5/6">

          <div className="p-4 rounded-lg">
            <h2 className="p-4 font-bold text-xl mb-4 text-center">ADICIONAR JOGADOR</h2>
            <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                e.preventDefault();

                addPlayer(formData);
              }}
            >
              <div className="rounded p-4 mb-4 bg-gray-300">
                <h3 className="font-bold text-lg">Dados Pessoais</h3>
              </div>
              <div className="mb-4 px-4">
                <label htmlFor="name" className="block text-gray-700 font-semibold">
                  Nome *
                </label>
                <input
                  className="border border-gray-300 p-4 mt-2 rounded-md w-full focus:outline-blue-300"
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name} 
                  required
                  onChange={handleChange}
                  placeholder="Insira o nome do jogador"
                />
              </div>
              <div className="mb-4 px-4">
                <label htmlFor="birthday" className="block text-gray-700 font-semibold">
                  Data nascimento *
                </label>
                <input
                  className="border border-gray-300 w-1/2 text-sm mt-2 p-4 rounded-md focus:outline-blue-300"
                  type="date"
                  name="birthday"
                  id='birthday'
                  defaultValue={new Date().toISOString().slice(0, 10)}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-4 px-4">
                <label htmlFor="genre" className="block text-gray-700 font-semibold">Sexo *</label>
                <select
                  className="block w-1/2 p-4 mt-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-blue-300"
                  id="genre"
                  name="genre"
                  onChange={handleChange}
                  required
                >
                  <option value="F">Feminino</option>
                  <option value="M">Masculino</option>
                </select>
              </div>

              <div className="rounded p-4 mt-10 mb-4 bg-gray-300">
                <h3 className="font-bold text-lg">Encarregados de Educação</h3>
              </div>
              <div className="mb-4 px-4">
                <label htmlFor="mother_name" className="block text-gray-700 font-semibold">
                  Nome da mãe
                </label>
                <input
                  className="border border-gray-300 p-4 rounded-md w-full focus:outline-blue-300 mt-2"
                  type="text"
                  id="mother_name"
                  name="mother_name"
                  onChange={handleChange}
                  placeholder="Insira o nome da mãe"
                />
              </div>

              <div className="mb-4 px-4">
                <label htmlFor="father_name" className="block text-gray-700 font-semibold">
                  Nome do pai
                </label>
                <input
                  className="border border-gray-300 p-4 mt-2 rounded-md w-full focus:outline-blue-300"
                  type="text"
                  id="father_name"
                  name="father_name"
                  onChange={handleChange}
                  placeholder="Insira o nome do pai"
                />
              </div>

              <div className="rounded p-4 mb-4 mt-10 bg-gray-300">
                <h3 className="font-bold text-lg">Contactos</h3>
              </div>
              <div className="mb-4 px-4">
                <label htmlFor="player_phone" className="block text-gray-700 font-semibold">
                  Telefone do jogador
                </label>
                <div className="flex justify-between gap-1 w-full">
                  <input
                    className="border border-gray-300 p-4 w-1/4 rounded-md focus:outline-blue-300 mt-2 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    type="number"
                    disabled
                    placeholder="+238"
                  />
                  <input
                    className="border border-gray-300 p-4 w-3/4 rounded-md  focus:outline-blue-300 mt-2 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    type="number"
                    inputMode="numeric"
                    id="player_phone"
                    name="player_phone"
                    onChange={handleChange}
                    placeholder="0999999"
                  />
                </div>
              </div>

              <div className="mb-4 px-4">
                <label htmlFor="mother_phone" className="block text-gray-700 font-semibold">
                  Telefone da mãe
                </label>
                <div className="flex justify-between gap-1 w-full">
                  <input
                    type="number"
                    disabled
                    className="border border-gray-300 p-4 w-1/4 rounded-md focus:outline-blue-300 mt-2 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    placeholder="+238"
                  />
                  <input
                    className="border border-gray-300 p-4 rounded-md w-3/4 focus:outline-blue-300 mt-2"
                    type="tel"
                    id="mother_phone"
                    name="mother_phone"
                    onChange={handleChange}
                    placeholder="0999999"
                  />
                </div>
              </div>
              <div className="mb-4 px-4">
                <label htmlFor="father_phone" className="block text-gray-700 font-semibold">
                  Telefone do pai
                </label>
                <div className="flex justify-between gap-1 w-full">
                  <input
                    type="number"
                    disabled
                    className="border border-gray-300 p-4 w-1/4 rounded-md focus:outline-blue-300 mt-2 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    placeholder="+238"
                  />
                  <input
                    className="border border-gray-300 p-4 rounded-md w-3/4 focus:outline-blue-300 mt-2"
                    type="tel"
                    id="father_phone"
                    name="father_phone"
                    onChange={handleChange}
                    placeholder="0999999"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2 border-t-2 w-100 mt-10 py-8">
                <CustomeButton
                  color="bg-gray-500"
                  secondaryColor='bg-gray-700'
                  message="Cancelar"
                  handleOnClick={handleCloseModal}
                />
                <CustomeButton
                  color="bg-red-500"
                  secondaryColor='bg-red-700'
                  message="Adicionar"
                  type="submit"
                />
              </div>
            </form>
          </div>

        </div>
      </div>
    </>
  )
}