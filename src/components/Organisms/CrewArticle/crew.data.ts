import data from "../../../data.json"
import { images } from "../../Global/vars"


const { crew: crewData } = data;
const [douglasHurley, markShuttleworth, victorGlover, anoushehAnsari] = crewData;

export const crewInfos: ICrew[] = [
  {
    name: douglasHurley.name,
    images: {
      png: images.douglasHurleyPng,
      webp: images.douglasHurleyWebp,
    },
    role: douglasHurley.role,
    bio: douglasHurley.bio,
  },
  {
    name: markShuttleworth.name,
    images: {
      png: images.markShuttleworthPng,
      webp: images.markShuttleworthWebp,
    },
    role: markShuttleworth.role,
    bio: markShuttleworth.bio,
  },
  {
    name: victorGlover.name,
    images: {
      png: images.victorGloverPng,
      webp: images.victorGloverWebp,
    },
    role: victorGlover.role,
    bio: victorGlover.bio,
  },
  {
    name: anoushehAnsari.name,
    images: {
      png: images.anoushehAnsariPng,
      webp: images.anoushehAnsariWebp,
    },
    role: anoushehAnsari.role,
    bio: anoushehAnsari.bio,
  }
];