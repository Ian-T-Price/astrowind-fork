// import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';
import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Show Rings',
      href: getPermalink('/rings'),
      links: [
        {
          text: 'Ring A1: Cattle',
          href: getPermalink('/rings/ringa1'),
        },
        {
          text: 'Ring A2: Sheep',
          href: getPermalink('/rings/ringa2'),
        },
        {
          text: 'Ring D1: Canine Any Variety',
          href: getPermalink('/rings/ringd1'),
        },
        {
          text: 'Ring D2: Canine Best of',
          href: getPermalink('/rings/ringd2'),
        },
        {
          text: 'Ring 1: Working Hunter',
          href: getPermalink('/rings/ring1'),
        },
        {
          text: 'Ring 2: Equine Show Ring',
          href: getPermalink('/rings/ring2'),
        },
        {
          text: 'Ring 3: Hazards & Obedience',
          href: getPermalink('/rings/ring3'),
        }, {
          text: 'Ring 4: Show Jumping',
          href: getPermalink('/rings/ring4'),
        },
        {
          text: 'Ring 5: Clydesdale Horses',
          href: getPermalink('/rings/ring5'),
        },
      ],
    },
    // {
    //   text: 'The Stars',
    //   href: getPermalink('/stars'),
    //   links: [
    //     {
    //       text: 'Bovine',
    //       href: getPermalink('/stars/bovine'),
    //     },
    //     {
    //       text: 'Canine',
    //       href: getPermalink('/stars/canine'),
    //     },
    //     {
    //       text: 'Equine',
    //       href: getPermalink('/stars/equine'),
    //     },
    //     {
    //       text: 'Ovine',
    //       href: getPermalink('/stars/ovine'),
    //     },
    //   ],
    // },
    {
      text: 'Sponsors',
      href: getPermalink('/sponsors'),
      links: [
        {
          text: 'Platinum Sponsors',
          href: getPermalink('/sponsors/platinum'),
        },
        {
          text: 'Gold Sponsors',
          href: getPermalink('/sponsors/gold'),
        },
        {
          text: 'Silver Sponsors',
          href: getPermalink('/sponsors/silver'),
        },
      ],
    },
    {
      text: 'Trophies',
      href: getPermalink('/trophies'),
      links: [
        {
          text: 'Bovine',
          href: '/trophies/#bovine',
        },
        {
          text: 'Canine',
          href: '/trophies/#canine',
        },
        {
          text: 'Clydesdale',
          href: '/trophies/#clydesdale',
        },
        {
          text: 'Driving',
          href: '/trophies/#driving',
        },
        {
          text: 'Equine',
          href: '/trophies/#equine',
        },
        {
          text: 'Show Jumping (Equine)',
          href: '/trophies/#showjumping',
        },
        {
          text: 'Working Hunter (Equine)',
          href: '/trophies/#workinghunter',
        },
        // {
        //   text: 'Ovine',
        //   href: '/trophies/#ovine',
        // },
      ],
    },
    {
      text: 'Info',
      href: getPermalink('/info'),
      links: [
        {
          text: 'Show Programmes',
          href: getPermalink('/info/programmes'),
        },
        {
          text: 'Showground Maps',
          href: getPermalink('/info/showground'),
        },
        {
          text: 'About Us',
          href: getPermalink('/about'),
        },
        {
          text: 'Contact',
          href: getPermalink('/contact'),
        },
        {
          text: 'Rules & Regulations',
          href: getPermalink('/rules'),
        },
      ],
    },

    // {
    //   text: 'Blog',
    //   links: [
    //     {
    //       text: 'Blog List',
    //       href: getBlogPermalink(),
    //     },
    //     {
    //       text: 'Article',
    //       href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
    //     },
    //     {
    //       text: 'Article (with MDX)',
    //       href: getPermalink('markdown-elements-demo-post', 'post'),
    //     },
    //     {
    //       text: 'Category Page',
    //       href: getPermalink('tutorials', 'category'),
    //     },
    //     {
    //       text: 'Tag Page',
    //       href: getPermalink('astro', 'tag'),
    //     },
    //   ],
    // },
  ],
  actions: [{ text: 'Download Programme', href: '/pdfs/Dundonald-Show_equine.pdf', target: '_blank' }],
};
