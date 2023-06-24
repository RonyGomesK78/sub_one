import { Header } from "@/components/Header";
import { TeamCard } from "@/components/TeamCard";

import femaleImage from '../assets/feminino.jpg';
import sub13Image from "../assets/sub13.jpg";

export default function Home() {
  return (
    <>
      <Header />

      <div className="grid sm:grid-cols-2 gap-6 2xl:mx-80 mx-2 p-4">
        <TeamCard
          name="FEMININO"
          image={femaleImage}
        />
        <TeamCard
          name="SUB-15"
          image={sub13Image}
        />
        <TeamCard
          name="SUB-13"
          image={sub13Image}
        />
        <TeamCard
          name="SUB-11"
          image={sub13Image}
        />
        <TeamCard
          name="SUB-6"
          image={sub13Image}
        />

      </div>
    </>
  )
}
