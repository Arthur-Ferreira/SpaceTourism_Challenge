export { }

declare global {
  interface ILink {
    title: string;
    href: string;
  }

  interface IImages {
    png: string;
    webp: string;
  }

  interface IDestination {
    name: string;
    images: IImages;
    description: string;
    distance: string;
    travel: string;
  }

  interface ICrew {
    name: string;
    images: IImages;
    role: string;
    bio: string;
  }

  interface ITechnology {
    name: string;
    images: IImages;
    description: string;
  }
}