interface Props {
  attribute: string,
  rate: number,
}

export function Skill({
  attribute,
  rate
}: Props) {
  return (
    <>
      <div 
        className={`flex justify-between text-sm rounded-md mb-4 md:p-2 p-3 bg-gray-200 overflow-hidden`}
      >
        <p className="self-center">{attribute}</p>
        <p className="self-center">{rate}</p>
      </div>
    </>
  )
}