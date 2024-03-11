import data from "../../data.json"
import { images } from "../../components/Global/vars"

const { destinations: destinationsData } = data;
const [moon, mars, europa, titan] = destinationsData;

export const destinations: IDestination[] = [
  {
    name: moon.name,
    images: {
      png: images.moonPng,
      webp: images.moonWebp,
    },
    description: moon.description,
    distance: moon.distance,
    travel: moon.travel,
  },
  {
    name: mars.name,
    images: {
      png: images.marsPng,
      webp: images.marsWebp,
    },
    description: mars.description,
    distance: mars.distance,
    travel: mars.travel,
  },
  {
    name: europa.name,
    images: {
      png: images.europaPng,
      webp: images.europaWebp,
    },
    description: europa.description,
    distance: europa.distance,
    travel: europa.travel,
  },
  {
    name: titan.name,
    images: {
      png: images.titanPng,
      webp: images.titanWebp,
    },
    description: titan.description,
    distance: titan.distance,
    travel: titan.travel,
  }
];