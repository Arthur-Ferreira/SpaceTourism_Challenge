interface ILink {
  number: string;
  title: string;
  href: string;
}

export const menuLinks: ILink[] = [
  {
    number: '00',
    title: 'home',
    href: '/',
  },
  {
    number: '01',
    title: 'destination',
    href: '/destination',
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