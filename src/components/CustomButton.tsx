interface Props {
  message: string,
  handleOnClick?: any,
  color: string,
  secondaryColor: string,
  type?: "submit" | "button" | "reset"
}
export function CustomeButton({
  color,
  secondaryColor,
  message,
  handleOnClick,
  type
}: Props) {

  return (
    <button
      className={`xl:p-3 p-2 rounded text-white ${color} hover:${secondaryColor}`}
      onClick={handleOnClick}
      type={type}
    >
      {message}
    </button>
  )
}