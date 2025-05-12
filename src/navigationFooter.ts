import { getPermalink } from './utils/permalinks';

export const footerData = {
  links: [
    {
      title: 'Show Rings',
      links: [
        { text: 'Ring A1: Cattle', href: '/rings/ringa1' },
        { text: 'Ring A2: Sheep', href: '/rings/ringa2' },
        { text: 'Ring D1: Canine Any Variety', href: '/rings/ringd1' },
        { text: 'Ring D2: Canine Best of', href: '/rings/ringd2' },
        { text: 'Ring 1: Working Hunter', href: '/rings/ring1' },
        { text: 'Ring 2: Equine Show Ring', href: '/rings/ring2' },
        { text: 'Ring 3: Hazards', href: '/rings/ring3' },
        { text: 'Ring 4: Show Jumping', href: '/rings/ring4' },
        { text: 'Ring 5: Cyldesdales', href: '/rings/ring5' },
      ],
    },
    // {
    //   title: 'The Stars',
    //   links: [
    //     { text: 'Bovine', href: '/stars/bovine' },
    //     { text: 'Canine', href: '/stars/canine' },
    //     { text: 'Equine', href: '/stars/equine' },
    //     { text: 'Ovine', href: '/stars/ovine' },
    //   ],
    // },
    // {
    //   title: 'Sponsors',
    //   links: [
    //     { text: 'Platinum', href: '/sponsors/platinum' },
    //     { text: 'Gold', href: '/sponsors/gold' },
    //     { text: 'Silver', href: '/sponsors/silver' },
    //   ],
    // },
    {
      title: 'Results',
      href: getPermalink('/results2025'),
      links: [
        { text: 'Ring 1: Working Hunter', href: getPermalink('/results2025') },
        { text: 'Ring 2: Equine Show Ring', href: getPermalink('/results2025') },
        { text: 'Ring 3: Hazards & Obedience', href: getPermalink('/results2025') },
        { text: 'Ring 4: Show Jumping', href: getPermalink('/results2025') },
        { text: 'Ring 5: Clydesdale Horses', href: getPermalink('/results2025') },
        { text: 'Ring A1: Cattle', href: getPermalink('/results2025') },
        { text: 'Ring A2: Sheep', href: getPermalink('/results2025') },
        { text: 'Ring D1: Canine Any Variety', href: getPermalink('/results2025') },
        { text: 'Ring D2: Canine Best of', href: getPermalink('/results2025') },
      ],
    },
    {
      title: 'Trophies',
      links: [
        { text: 'Bovine', href: '/trophies/#bovine' },
        { text: 'Canine', href: '/trophies/#canine' },
        { text: 'Clydesdale', href: '/trophies/#clydesdale' },
        { text: 'Driving', href: '/trophies/#driving' },
        { text: 'Equine', href: '/trophies/#equine' },
        { text: 'Show Jumping', href: '/trophies/#showjumping' },
        { text: 'Working Hunter', href: '/trophies/#workinghunter' },
        // { text: 'Ovine', href: '/trophies/#ovine' },
      ],
    },
    {
      title: 'Information',
      links: [
        { text: 'Show Programmes', href: '/info/programmes' },
        { text: 'Contact', href: '/info/contact' },
        { text: 'About', href: '/info/about' },
        { text: 'Rules & Regulations', href: getPermalink('/rules') },
      ],
    },
  ],
  secondaryLinks: [
    // { text: 'Rules', href: getPermalink('/rules') },
    // { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    // { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    // { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    {
      ariaLabel: 'Facebook',
      icon: 'tabler:brand-facebook',
      href: 'https://www.facebook.com/profile.php?id=100032848585944',
    },
    // { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/Ian-T-Price/astrowind-fork' },
  ],
  footNote: `
    <a href="https://centreline.biz" target="_blank" rel="noopener noreferrer"><img class="w-12 h-9 md:w-12 md:h-9 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://assets.zyrosite.com/mxBr5r33JqHoERQ1/cs_2col_logo_rgb_10_0-AwvDR2bzazfkgJV4.gif" alt="Centreline logo" loading="lazy"></img></a>
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://centreline.biz" target="_blank" rel="noopener noreferrer"> Ian T Price</a> · All rights reserved.
  `,
};
