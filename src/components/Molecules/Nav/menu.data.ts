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
    href: '/crew/douglas hurley',
  },
  {
    number: '03',
    title: 'technology',
    href: '/technology/launch vehicle',
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
