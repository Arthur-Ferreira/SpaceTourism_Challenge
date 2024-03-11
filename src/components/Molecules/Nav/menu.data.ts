import data from "../../../data.json"

const { destinations, crew, technology } = data;

interface IMenu extends ILink {
  number: string;
}

export const destinationLinks: ILink[] = (
  destinations.map((char: { name: string; }) => {
    return {
      title: char.name,
      href: char.name,
    }
  })
)

export const crewLinks: ILink[] = (
  crew.map((char: { name: string; }) => {
    return {
      title: char.name,
      href: char.name,
    }
  })
)

export const technologyLinks: ILink[] = (
  technology.map((char: { name: string; }) => {
    return {
      title: char.name,
      href: char.name,
    }
  })
)

export const menuLinks: IMenu[] = [
  {
    number: '00',
    title: 'home',
    href: '/',
  },
  {
    number: '01',
    title: 'destinations',
    href: '/destinations',
  },
  {
    number: '02',
    title: 'crew',
    href: '/crew',
  },
  {
    number: '03',
    title: 'technology',
    href: '/technology',
  },
];

