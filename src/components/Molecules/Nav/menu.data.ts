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
