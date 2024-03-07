export { }

declare global {

  interface IDestination {
    name: string;
    images: object;
    description: string;
    distance: string;
    travel: string;
  }

  interface ICrew {
    name: string;
    images: object;
    role: string;
    bio: string;
  }

  interface ITechnology {
    name: string;
    images: object;
    description: string;
  }
}