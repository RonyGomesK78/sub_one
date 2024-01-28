"use client";

import { MouseEventHandler } from "react";

import { Form, Formik, FormikHelpers } from "formik";
import * as Yup from 'yup';

import { CustomButton } from "./CustomButton";
import SelectList from "./SelectList";
import CustomField from "./CustomField";
import CustomErrorMessageField from "./CustomErrorMessageField";

import { FootballPosition } from "@/interfaces/FootballPosition";
import { FootballCategory } from "@/interfaces/FootballCategory";
import { PlayerRequest } from "@/interfaces/PlayerRequest";

interface Props {
  handleCloseModal: MouseEventHandler<HTMLButtonElement>,
  addPlayer: (playerSubmitInfo: PlayerRequest) => void,
  positions: FootballPosition[],
  categories: FootballCategory[],
}

interface Schema {
  name: string;
  nickname?: string;
  birthdate: string;
  genre: string;
  address?: string;
  countryCode?: string;
  phoneNumber?: number;
  position?: string;
  category?: string;
  enc1Name?: string;
  enc2Name?: string;
  enc1Phone?: number;
  enc2Phone?: number;
}

const genres = [
  {
    id: 'F',
    name: "Feminino"
  },
  {
    id: 'M',
    name: "Masculino"
  }
];

const validationSchema = Yup.object().shape({
  name: Yup.string().trim().max(255, 'Nome deve conter no máximo 255 carateres').required('Campo obrigatório'),
  nickname: Yup.string().max(255, 'Alcunha deve conter no máximo 255 carateres'),
  birthdate: Yup.date().required('Campo obrigatório'),
  genre: Yup.string().oneOf(['M', 'F'], 'Aceita apenas Masculino ou Feminino').required('Campo obrigatório'),
  address: Yup.string().max(255, 'Endereço deve conter no máximo 255 carateres'),
  phoneNumber: Yup.number().min(1000000, 'Insira um número de telefone válido'),
  category: Yup.string().max(255),
  position: Yup.string().max(255),
  enc1Name: Yup.string().max(255, 'Nome deve conter no máximo 255 carateres'),
  enc2Name: Yup.string().max(255, 'Nome deve conter no máximo 255 carateres'),
  enc1Phone: Yup.number().min(1000000, 'Insira um número de telefone válido'),
  enc2Phone: Yup.number().min(1000000, 'Insira um número de telefone válido'),
});

export default function PlayerForm(props: Props) {
  const { handleCloseModal, addPlayer, positions, categories } = props;

  const initialValues: Schema = {
    name: '',
    nickname: '',
    birthdate: new Date().toISOString().slice(0, 10),
    genre: genres[0].id,
    address: '',
    phoneNumber: undefined,
    countryCode: '',
    category: categories[0].id,
    position: '',
    enc2Name: '',
    enc1Name: '',
    enc1Phone: undefined,
    enc2Phone: undefined,
  };

  return (
    <>
      <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50">
        <div className="bg-white rounded-lg shadow-lg md:w-3/4 lg:w-3/5 xl:w-2/5 2xl:w-1/4 w-full px-4 overflow-scroll xl:h-4/5 h-5/6">

          <div className="p-4 rounded-lg">
            <h2 className="p-4 font-bold text-xl mb-4 text-center">ADICIONAR JOGADOR(A)</h2>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(
                values: Schema,
                { setSubmitting }: FormikHelpers<Schema>
              ) => {
                const valuesToSubmit: PlayerRequest = {
                  name: values.name,
                  nickname: values.nickname || undefined,
                  birthdate: values.birthdate,
                  genre: values.genre,
                  address: values.address || undefined,
                  category: values.category,
                  position: values.position || undefined,
                  phone_number: values.phoneNumber ? String(values.phoneNumber) : undefined,
                  country_code: values.phoneNumber ? '+238' : undefined,
                  guardians: (values.enc1Name || values.enc2Name)
                    ?
                    [
                      {
                        name: values.enc1Name || undefined,
                        country_code: values.enc1Phone && values.enc1Name ? '+238' : undefined,
                        phone_number: values.enc1Phone && values.enc1Name ? String(values.enc1Phone) : undefined,
                      },
                      {
                        name: values.enc2Name || undefined,
                        country_code: values.enc2Phone && values.enc2Name ? '+238' : undefined,
                        phone_number: values.enc2Phone && values.enc2Name ? String(values.enc2Phone) : undefined,
                      }
                    ]
                    :
                    []
                };

                if (valuesToSubmit.guardians.length >= 1 && !valuesToSubmit.guardians[0]?.name) {
                  valuesToSubmit.guardians.splice(0, 1);
                }

                if (valuesToSubmit.guardians.length >= 1 && !valuesToSubmit.guardians[1]?.name) {
                  valuesToSubmit.guardians.splice(1, 1);
                }

                try {
                  addPlayer(valuesToSubmit);
                  setSubmitting(false);
                } catch (e) {

                }
              }}
            >
              {({ handleChange }) => (
                <Form>
                  <div className="rounded p-4 mb-4 bg-gray-300">
                    <h3 className="font-bold text-lg">Dados Pessoais</h3>
                  </div>
                  <div className="mb-4 px-4">
                    <label htmlFor="name" className="block text-gray-700 font-semibold">
                      Nome *
                    </label>
                    <CustomField
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Nome do Jogador(a)"
                    />
                    <CustomErrorMessageField name="name" />
                  </div>

                  <div className="mb-4 px-4">
                    <label htmlFor="alcunha" className="block text-gray-700 font-semibold">
                      Alcunha
                    </label>
                    <CustomField
                      id="nickname"
                      name="nickname"
                      type="text"
                      placeholder="Alcunha do Jogador(a)"
                    />
                    <CustomErrorMessageField name="nickname" />
                  </div>

                  <div className="mb-4 px-4">
                    <label htmlFor="birthdate" className="block text-gray-700 font-semibold">
                      Data nascimento *
                    </label>
                    <CustomField
                      id="birthdate"
                      name="birthdate"
                      type="date"
                    />
                    <CustomErrorMessageField name="birthdate" />
                  </div>

                  <div className="mb-4 px-4">
                    <label htmlFor="genre" className="block text-gray-700 font-semibold">Sexo *</label>
                    <SelectList
                      id="genre"
                      name="genre"
                      items={genres}
                      handleChange={handleChange}
                    />
                  </div>

                  <div className="mb-4 px-4">
                    <label htmlFor="birthday" className="block text-gray-700 font-semibold">
                      Endereço
                    </label>
                    <CustomField
                      id="address"
                      name="address"
                      type="text"
                      placeholder="Endereço do Jogador"
                    />
                    <CustomErrorMessageField name="address" />
                  </div>

                  <div className="mb-4 px-4">
                    <label htmlFor="phoneNumber" className="block text-gray-700 font-semibold">
                      Telefone do Jogador(a)
                    </label>
                    <div className="flex justify-between gap-1 w-full">
                      <CustomField
                        id={""}
                        name={""}
                        type="number"
                        disabled
                        placeholder="+238"
                        width="w-1/3"
                        textAlign="text-center"
                      />
                      <CustomField
                        type="number"
                        id="phoneNumber"
                        name="phoneNumber"
                        placeholder="Número de Telefone"
                      />
                    </div>
                    <CustomErrorMessageField name="phoneNumber" />
                  </div>

                  <div className="rounded p-4 mt-10 mb-4 bg-gray-300">
                    <h3 className="font-bold text-lg">Dados Técnicos</h3>
                  </div>
                  <div className="mb-4 px-4">
                    <label htmlFor="category" className="block text-gray-700 font-semibold">Categoria *</label>
                    <SelectList
                      id="category"
                      name="category"
                      items={categories}
                      handleChange={handleChange}
                    />
                  </div>
                  <div className="mb-4 px-4">
                    <label htmlFor="position" className="block text-gray-700 font-semibold">Posição</label>
                    <SelectList
                      id="position"
                      name="position"
                      defaultRequired={true}
                      items={positions}
                      handleChange={handleChange}
                    />
                  </div>

                  <div className="rounded p-4 mt-10 mb-4 bg-gray-300">
                    <h3 className="font-bold text-lg">Encarregados de Educação</h3>
                  </div>
                  <div className="mb-4 px-4">
                    <label htmlFor="enc1Name" className="block text-gray-700 font-semibold">
                      Nome do Encarregado Principal
                    </label>
                    <CustomField
                      type="text"
                      id="enc1Name"
                      name="enc1Name"
                      placeholder="Nome do Encarregado"
                    />
                    <CustomErrorMessageField name="enc1Name" />
                  </div>
                  <div className="mb-4 px-4">
                    <label htmlFor="enc1Phone" className="block text-gray-700 font-semibold">
                      Telefone do Encarregado Principal
                    </label>
                    <div className="flex justify-between gap-1 w-full">
                      <CustomField
                        id={""}
                        name={""}
                        type="number"
                        disabled
                        placeholder="+238"
                        width="w-1/3"
                        textAlign="text-center"
                      />
                      <CustomField
                        type="number"
                        id="enc1Phone"
                        name="enc1Phone"
                        placeholder="Número de Telefone"
                      />
                    </div>
                    <CustomErrorMessageField name="enc1Phone" />
                  </div>

                  <div className="border-t-2  mt-8 mx-4" />

                  <div className="my-4 px-4">
                    <label htmlFor="enc2Name" className="block text-gray-700 font-semibold">
                      Nome do Encarregado Secundário
                    </label>
                    <CustomField
                      type="text"
                      id="enc2Name"
                      name="enc2Name"
                      placeholder="Nome do Encarregado"
                    />
                    <CustomErrorMessageField name="enc2Name" />
                  </div>

                  <div className="mb-4 px-4">
                    <label htmlFor="enc2Phone" className="block text-gray-700 font-semibold">
                      Telefone do Encarregado Secundário
                    </label>
                    <div className="flex justify-between gap-1 w-full">
                      <CustomField
                        id={""}
                        name={""}
                        type="number"
                        disabled
                        placeholder="+238"
                        width="w-1/3"
                        textAlign="text-center"
                      />
                      <CustomField
                        type="number"
                        id="enc2Phone"
                        name="enc2Phone"
                        placeholder="Número de Telefone"
                      />
                    </div>
                    <CustomErrorMessageField name="enc2Phone" />

                  </div>

                  <div className="flex justify-end gap-2 w-100 mt-10 py-8">
                    <CustomButton
                      color="bg-gray-500"
                      secondaryColor='bg-gray-700'
                      message="Cancelar"
                      handleOnClick={handleCloseModal}
                    />
                    <CustomButton
                      color="bg-red-500"
                      secondaryColor='bg-red-700'
                      message="Adicionar"
                      type="submit"
                    />
                  </div>
                </Form>
              )}
            </Formik>
          </div>

        </div>
      </div>
    </>
  )
}