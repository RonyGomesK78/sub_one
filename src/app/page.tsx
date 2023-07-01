import { TeamCard } from "@/components/TeamCard";

import femaleImage from '../assets/feminino.jpg';
import sub13Image from "../assets/sub13.jpg";

export default function Home() {
  return (
    <>
      <div className="grid sm:grid-cols-2 gap-6 2xl:mx-80 mx-2 p-4">
        <TeamCard
          name="FEMININO"
          image={femaleImage}
          teamLink="/players/women"
        />
        <TeamCard
          name="SUB-15"
          image={sub13Image}
          teamLink="/players/sub-15"
        />
        <TeamCard
          name="SUB-13"
          image={sub13Image}
          teamLink="/players/sub-13"
        />
        <TeamCard
          name="SUB-11"
          image={sub13Image}
          teamLink="/players/sub-11"
        />
        <TeamCard
          name="SUB-6"
          image={sub13Image}
          teamLink="/players/sub-6"
        />

      </div>
    </>
  )
}
