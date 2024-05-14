import { TeamCard } from "@/components/TeamCard";
import { Header } from "@/components/Header";

import sub6Image from '../../public/sub6.jpeg';
import femaleImage from '../assets/feminino.jpg';
import sub13Image from "../../public/sub13.jpeg";
import sub15Image from "../assets/sub13.jpg";
import sub11Image from "../assets/sub13.jpg";

export default function Home() {
  return (
    <>
      <Header />
      <div className="grid sm:grid-cols-2 gap-6 xl:mx-80 mx-2 p-4">
        <TeamCard
          name="FEMININO"
          image={femaleImage}
          teamLink="/players/senior-feminino"
        />
        <TeamCard
          name="SUB-15"
          image={sub15Image}
          teamLink="/players/sub-15"
        />
        <TeamCard
          name="SUB-13"
          image={sub13Image}
          teamLink="/players/sub-13"
        />
        <TeamCard
          name="SUB-11"
          image={sub11Image}
          teamLink="/players/sub-11"
        />
        <TeamCard
          name="SUB-6"
          image={sub6Image}
          teamLink="/players/sub-6"
        />

      </div>
    </>
  )
}
