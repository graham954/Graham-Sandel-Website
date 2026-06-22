// ============================================================
// Single source of truth for site content / facts.
// Edit values here — they flow into the pages and footer.
// ============================================================

export const name = 'Graham Sandel';
export const tagline = 'Student leader, DECA state officer, and nonprofit founder.';
export const location = 'Lexington, South Carolina';
export const email = 'graham@childreninarts.com';

export const brandWords = ['Outgoing', 'Charismatic', 'Philanthropist'];

export const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/graham-sandel-694767338/' },
  { label: 'Instagram', href: 'https://instagram.com/grahamsandel' },
  { label: 'DECA Instagram', href: 'https://instagram.com/scdeca_graham' },
];

// Headline stats shown on the home page.
export const stats = [
  { value: '3,500+', label: 'SC DECA members served' },
  { value: '2,500+', label: 'Classmates led' },
  { value: '$3,500+', label: 'Raised for the arts' },
  { value: '2×', label: 'ICDC qualifier' },
];

// Leadership & activities — drives the Leadership page.
export const leadership = [
  {
    org: 'South Carolina DECA',
    role: 'VP of Hospitality',
    period: 'State Officer',
    summary:
      'Serve 3,500+ members across South Carolina — preparing competitors and improving the state conference experience.',
    highlights: [
      '1st place — PMCA at SCDC (state) this year',
      '2nd place — PMCA the prior year',
      '2× ICDC qualifier and competitor',
    ],
    image: '/images/deca.jpg',
    alt: 'Graham presenting a marketing roleplay timeline at a DECA event.',
  },
  {
    org: 'Lexington High School',
    role: 'Junior Class President',
    period: 'Current · prev. Sophomore Class President',
    summary:
      'Lead projects, fundraisers, and school-spirit initiatives for a class of 2,500+ students.',
    highlights: [
      'Two consecutive years in elected class leadership',
      'Plan and execute fundraisers and class events',
      'Drive school spirit and student engagement',
    ],
    image: '/images/student-gov.jpg',
    alt: 'Graham and classmates holding a hand-painted "Go Wildcats" school-spirit banner.',
  },
  {
    org: 'Children in the Arts',
    role: 'Nonprofit Founder',
    period: 'childreninarts.com',
    summary:
      'Founded a 501(c)(3) nonprofit bringing the arts to kids across South Carolina — funded through community events and fundraisers.',
    highlights: [
      'Reached 50,000+ people with an arts-access campaign',
      'Donated 350+ art supplies to 50+ kids via Imagination Kits',
      'Founded the 501(c)(3) and ran the first Arts for All 5K',
    ],
    image: '/images/children-in-arts.jpg',
    alt: 'Graham and volunteers with bins of donated supplies at a community donation drive.',
  },
  {
    org: 'Lexington High School Athletics',
    role: 'Varsity Track & Field · Varsity Swim',
    period: 'Two-year varsity athlete',
    summary:
      'Two-year varsity athlete in two sports, competing at the regional level.',
    highlights: [
      'All-Region — Track & Field',
      '2-year varsity — Track & Field',
      '2-year varsity — Swim',
    ],
    image: '/images/sports.jpg',
    alt: 'Graham with his track teammates at a meet under the stadium lights.',
  },
];
