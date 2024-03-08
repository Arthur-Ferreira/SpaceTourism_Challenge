interface IMenu extends ILink {
  number: string;
}

export const menuLinks: IMenu[] = [
  {
    number: '00',
    title: 'home',
    href: '/',
  },
  {
    number: '01',
    title: 'destination',
    href: '/destination/moon',
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

export const destinationLinks: ILink[] = [
  {
    title: 'moon',
    href: 'moon',
  },
  {
    title: 'mars',
    href: 'mars',
  },
  {
    title: 'europa',
    href: 'europa',
  },
  {
    title: 'titan',
    href: 'titan',
  },
];

export const crewLinks: ILink[] = [
  {
    title: 'commander',
    href: 'commander',
  },
  {
    title: 'mission-specialist',
    href: 'mission-specialist',
  },
  {
    title: 'pilot',
    href: 'pilot',
  },
  {
    title: 'flight-engineer',
    href: 'flight-engineer',
  },
];