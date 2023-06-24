import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface Team {
  name: string;
  image: StaticImageData;
  playersLink?: string;
}

export function TeamCard(props: Team) {

  const {
    name,
    image,
  } = props;

  return (
    <div className='relative rounded-md drop-shadow-lg'>
      <Link
        href='/'
        className='rounded-md'
      >
        <Image
          src={image}
          alt='team photo'
          className='w-fit rounded-md'
        />
        <div className='absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-50 p-2 rounded-b-md'>
          <p className='w-fit font-bold text-white text-lg p-2 text-opacity-100 border-t-2 border-red-700'>{name}</p>
          <p className='w-fit text-white text-xs px-2 hover:border-b-2 border-red-700'>VER JOGADORES</p>
        </div>
      </Link>
    </div>
  )
}
