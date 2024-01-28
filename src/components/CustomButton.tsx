interface Props {
  message: string,
  handleOnClick?: any,
  color: string,
  secondaryColor: string,
  type?: "submit" | "button" | "reset"
}
export function CustomButton({
  color,
  secondaryColor,
  message,
  handleOnClick,
  type
}: Props) {

  return (
    <button
      className={`xl:p-3 p-4 rounded shadow-lg text-white ${color} hover:${secondaryColor}`}
      onClick={handleOnClick}
      type={type}
    >
      {message}
    </button>
  )
}