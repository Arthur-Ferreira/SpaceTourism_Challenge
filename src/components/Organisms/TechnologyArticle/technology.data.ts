import data from "../../../data.json"
import { images } from "../../Global/vars"


const { technology: technologyData } = data;
const [LauchVehicle, spaceport, spaceCapsule] = technologyData;

export const technologyInfos: ITechnology[] = [
  {
    name: LauchVehicle.name,
    images: {
      portrait: images.LauchVehiclePortrait,
      landscape: images.LauchVehicleLandscape,
    },
    description: LauchVehicle.description,
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