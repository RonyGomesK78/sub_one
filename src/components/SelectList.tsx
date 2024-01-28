import React from 'react';

import { SelectOption } from "@/interfaces/SelectOption"

interface SelectListProps {
  id: string;
  name: string;
  defaultRequired?: boolean;
  items: SelectOption[];
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectList: React.FC<SelectListProps> = (props) => {
  const { id, name, defaultRequired = false, items, handleChange } = props;
  
  return (
    <select
      className="block w-full p-4 h-14 mt-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-blue-300"
      id={id}
      name={name}
      onChange={handleChange}
    >
      {
        defaultRequired ? <option value="">-</option> : ''
      }
      
      <option disabled>
        Selecione uma opção
      </option>

      {items.map((item) => (
        <option key={item.id} value={item.id}>
          {item.name}
        </option>
      ))}
    </select>
  );
}

export default SelectList;
