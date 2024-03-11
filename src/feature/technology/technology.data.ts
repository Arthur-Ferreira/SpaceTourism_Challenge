import data from "../../data.json"
import { images } from "../../components/Global/vars"

const [lauchVehicle, spaceport, spaceCapsule] = data.technology;

export const technology: ITechnology[] = [
  {
    name: lauchVehicle.name,
    images: {
      portrait: images.lauchVehiclePortrait,
      landscape: images.lauchVehicleLandscape,
    },
    description: lauchVehicle.description,
  },
  {
    name: spaceport.name,
    images: {
      portrait: images.spaceportPortrait,
      landscape: images.spaceportLandscape,
    },
    description: spaceport.description,
  },
  {
    name: spaceCapsule.name,
    images: {
      portrait: images.spaceCapsulePortrait,
      landscape: images.spaceCapsuleLandscape,
    },
    description: spaceCapsule.description,
  }
];