import { FootballCategory } from "./FootballCategory";
import { FootballPosition } from "./FootballPosition";
import { Guardian, GuardianRequest } from "./Guardian";

export interface PlayerRequest {
  name: string;
  nickname?: string;
  birthdate: string;
  genre: string;
  address?: string;
  position?: string;
  category?: string;
  phone_number?: string;
  country_code?: string;
  guardians: GuardianRequest[],
}

export interface PlayerResponse {
  id: string;
  name: string;
  nickname?: string;
  birthdate: string;
  genre: string;
  address?: string;
  countryCode?: string;
  phoneNumber?: string;
  createdAt: string;
  positions?: FootballPosition[];
  categories: FootballCategory[];
  guardians?: Guardian[];
}