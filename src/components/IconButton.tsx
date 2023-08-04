import Image from "next/image";

interface Props {
  alt: string,
  src: string,
  handleOnClick: any
}

export function IconButton(props: Props) {
  const {
    alt,
    src,
    handleOnClick
  } = props;

  return (
    <>
      <div
        className="w-fit p-2 border shadow-lg rounded-md hover:bg-gray-200"
        onClick={handleOnClick}
      >

        <Image 
          alt={alt}
          src={src}
          className='w-4 cursor-pointer'
        />
      </div>
    </>
  )
}