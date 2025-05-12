// import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';
import { getPermalink } from './utils/permalinks';

// Convert headerDataRings from an object to a function that accepts a showBookOnline parameter
export const headerDataRings = (showBookOnline: boolean = false, showClasses: string = 'basic') => {
  // Define class menu configurations
  const classMenuOptions = {
    basic: {
      text: 'Classes',
      href: '#classes',
    },
    ringd: {
      text: 'Classes',
      href: '#classes',
      links: [
        {
          text: 'Demonstrations',
          href: '#demonstrations',
        },
        {
          text: 'Classes',
          href: '#classes',
        },
      ],
    },
    ringa1: {
      text: 'Classes',
      href: '#classes',
      links: [
        {
          text: 'Holstein Friesian',
          href: '#classes',
        },
        {
          text: 'Ayrshire & any other Dairy Breed',
          href: '#classes2',
        },
        {
          text: 'Beef Cattle',
          href: '#classes3',
        },
      ],
    },
  };

  // Create the base links array
  const links = [
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
        },
        {
          text: 'Ring 4: Show Jumping',
          href: getPermalink('/rings/ring4'),
        },
        {
          text: 'Ring 5: Clydesdale Horses',
          href: getPermalink('/rings/ring5'),
        },
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
    {
      text: 'Ring Details',
      href: '#ring',
    },
  ];

  // Conditionally add the appropriate Classes menu item
  if (showClasses && classMenuOptions[showClasses]) {
    links.push(classMenuOptions[showClasses]);
  }

  // Conditionally add the "Book Online" menu item if showBookOnline is true
  if (showBookOnline) {
    links.push({
      text: 'Book Online',
      href: '#calltoaction',
    });
  }

  return {
    links,
    actions: [{ text: 'Download Programme', href: '/pdfs/Dundonald-Show_equine.pdf', target: '_blank' }],
  };
};
// {
//   text: 'Sponsors',
//   href: getPermalink('/sponsors'),
//   links: [
//     {
//       text: 'Platinum Sponsors',
//       href: getPermalink('/sponsors/platinum'),
//     },
//     {
//       text: 'Gold Sponsors',
//       href: getPermalink('/sponsors/gold'),
//     },
//     {
//       text: 'Silver Sponsors',
//       href: getPermalink('/sponsors/silver'),
//     },
//   ],
// },
