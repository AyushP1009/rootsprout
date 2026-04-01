// lib/food-resources-data.ts
// Static data for Charlotte-area food resources
// To add or edit resources, update this file and redeploy.

export type OperatingHour = {
  dayOfWeek: string;
  openTime: string;
  closeTime: string;
  notes?: string;
};

export type FoodResource = {
  id: number;
  name: string;
  slug: string;
  resourceType: "FOOD_BANK" | "PANTRY" | "MEAL_PROGRAM";
  address: string;
  city: string;
  state: string;
  zip: string;
  phone?: string;
  website?: string;
  description?: string;
  eligibilityNotes?: string;
  idRequired: boolean;
  servesChildren: boolean;
  acceptsDonations: boolean;
  isActive: boolean;
  operatingHours: OperatingHour[];
};

export const foodResources: FoodResource[] = [
  {
    id: 1,
    name: "Second Harvest Food Bank of Metrolina",
    slug: "second-harvest-food-bank",
    resourceType: "FOOD_BANK",
    address: "500-B Spratt St",
    city: "Charlotte",
    state: "NC",
    zip: "28206",
    phone: "(704) 376-1785",
    website: "https://www.secondharvestmetrolina.org",
    description:
      "One of the largest food banks in the Carolinas, Second Harvest distributes food across 24 counties. They offer drive-through distributions with no paperwork required.",
    idRequired: false,
    servesChildren: true,
    acceptsDonations: true,
    isActive: true,
    operatingHours: [
      { dayOfWeek: "Monday", openTime: "9:00", closeTime: "17:00" },
      { dayOfWeek: "Tuesday", openTime: "9:00", closeTime: "17:00" },
      { dayOfWeek: "Wednesday", openTime: "9:00", closeTime: "17:00" },
      { dayOfWeek: "Thursday", openTime: "9:00", closeTime: "17:00" },
      { dayOfWeek: "Friday", openTime: "9:00", closeTime: "17:00" },
    ],
  },
  {
    id: 2,
    name: "Nourish Up",
    slug: "nourish-up",
    resourceType: "PANTRY",
    address: "901 Carrier Drive",
    city: "Charlotte",
    state: "NC",
    zip: "28216",
    phone: "(704) 523-4333",
    website: "https://nourishup.org",
    description:
      "Formed by the merger of Loaves & Fishes and Friendship Trays, Nourish Up runs the largest network of food pantries in North Carolina. They offer client-choice grocery pickup, home delivery, and a weekday Meals on Wheels program.",
    eligibilityNotes: "Serves Mecklenburg County residents experiencing a food crisis.",
    idRequired: false,
    servesChildren: true,
    acceptsDonations: true,
    isActive: true,
    operatingHours: [
      { dayOfWeek: "Tuesday", openTime: "15:00", closeTime: "17:00" },
      { dayOfWeek: "Wednesday", openTime: "15:00", closeTime: "17:00" },
      { dayOfWeek: "Thursday", openTime: "15:00", closeTime: "17:00" },
      { dayOfWeek: "Friday", openTime: "15:00", closeTime: "17:00" },
      { dayOfWeek: "Saturday", openTime: "9:00", closeTime: "12:00" },
    ],
  },
  {
    id: 3,
    name: "Hearts & Hands Food Pantry",
    slug: "hearts-and-hands-food-pantry",
    resourceType: "PANTRY",
    address: "4040 Chesapeake Drive",
    city: "Charlotte",
    state: "NC",
    zip: "28216",
    phone: "(980) 292-0357",
    website: "https://www.heartsandhandsfoodpantry.com",
    description:
      "A community food pantry serving the west Charlotte area with free groceries and household essentials.",
    idRequired: false,
    servesChildren: true,
    acceptsDonations: true,
    isActive: true,
    operatingHours: [
      { dayOfWeek: "Wednesday", openTime: "10:00", closeTime: "13:00" },
      { dayOfWeek: "Saturday", openTime: "10:00", closeTime: "13:00" },
    ],
  },
  {
    id: 4,
    name: "The Harvest Center of Charlotte",
    slug: "harvest-center-charlotte",
    resourceType: "FOOD_BANK",
    address: "5415 Airport Dr",
    city: "Charlotte",
    state: "NC",
    zip: "28208",
    phone: "(704) 335-1616",
    website: "https://theharvestcenter.org",
    description:
      "The Harvest Center provides food assistance alongside other wraparound services for families and individuals in need in the Charlotte area.",
    idRequired: false,
    servesChildren: true,
    acceptsDonations: true,
    isActive: true,
    operatingHours: [
      { dayOfWeek: "Monday", openTime: "9:00", closeTime: "16:00" },
      { dayOfWeek: "Tuesday", openTime: "9:00", closeTime: "16:00" },
      { dayOfWeek: "Wednesday", openTime: "9:00", closeTime: "16:00" },
      { dayOfWeek: "Thursday", openTime: "9:00", closeTime: "16:00" },
      { dayOfWeek: "Friday", openTime: "9:00", closeTime: "16:00" },
    ],
  },
  {
    id: 5,
    name: "Hope Street Food Pantry",
    slug: "hope-street-food-pantry",
    resourceType: "PANTRY",
    address: "4100 Johnston Oehler Road",
    city: "Charlotte",
    state: "NC",
    zip: "28269",
    phone: "(704) 584-9073",
    website: "https://hopestreetfoodpantry.com",
    description:
      "Hope Street Food Pantry serves the north Charlotte community with free groceries for families in need.",
    idRequired: false,
    servesChildren: true,
    acceptsDonations: true,
    isActive: true,
    operatingHours: [
      { dayOfWeek: "Tuesday", openTime: "10:00", closeTime: "13:00" },
      { dayOfWeek: "Thursday", openTime: "10:00", closeTime: "13:00" },
    ],
  },
  {
    id: 6,
    name: "Care Ring Food Pantry",
    slug: "care-ring-food-pantry",
    resourceType: "PANTRY",
    address: "1514 N. Graham Street",
    city: "Charlotte",
    state: "NC",
    zip: "28206",
    phone: "(704) 375-0172",
    website: "https://careringnc.org/food-pantry",
    description:
      "Care Ring's client-choice pantry provides a full week's worth of nutritious groceries at no cost to those facing food insecurity. They also host The Bulb fresh produce pop-up every Thursday.",
    eligibilityNotes: "Open to anyone facing food insecurity. No referral needed for produce pop-up.",
    idRequired: false,
    servesChildren: true,
    acceptsDonations: true,
    isActive: true,
    operatingHours: [
      { dayOfWeek: "Tuesday", openTime: "9:00", closeTime: "13:00" },
      { dayOfWeek: "Thursday", openTime: "9:00", closeTime: "13:00", notes: "The Bulb fresh produce pop-up 11am–12pm" },
    ],
  },
  {
    id: 7,
    name: "Angels & Sparrows Community Table",
    slug: "angels-and-sparrows-community-table",
    resourceType: "MEAL_PROGRAM",
    address: "1220 Alleghany St",
    city: "Charlotte",
    state: "NC",
    zip: "28208",
    website: "https://angelsandsparrows.org",
    description:
      "Angels & Sparrows serves hot, nourishing meals Monday through Friday. They provide a welcoming environment and also offer an emergency food pantry for those with a referral.",
    eligibilityNotes: "Meals are open to all. Emergency pantry requires a referral from a partner organization.",
    idRequired: false,
    servesChildren: true,
    acceptsDonations: true,
    isActive: true,
    operatingHours: [
      { dayOfWeek: "Monday", openTime: "11:00", closeTime: "13:00" },
      { dayOfWeek: "Tuesday", openTime: "11:00", closeTime: "13:00" },
      { dayOfWeek: "Wednesday", openTime: "11:00", closeTime: "13:00" },
      { dayOfWeek: "Thursday", openTime: "11:00", closeTime: "13:00" },
      { dayOfWeek: "Friday", openTime: "11:00", closeTime: "13:00" },
    ],
  },
  {
    id: 8,
    name: "Crisis Assistance Ministry",
    slug: "crisis-assistance-ministry",
    resourceType: "PANTRY",
    address: "500-A Spratt St",
    city: "Charlotte",
    state: "NC",
    zip: "28206",
    phone: "(704) 371-3001",
    website: "https://www.crisisassistance.org",
    description:
      "Crisis Assistance Ministry helps families in financial crisis with food, clothing, and utility assistance. They operate a free store and provide emergency food supplies.",
    idRequired: true,
    servesChildren: true,
    acceptsDonations: true,
    isActive: true,
    operatingHours: [
      { dayOfWeek: "Monday", openTime: "8:30", closeTime: "16:30" },
      { dayOfWeek: "Tuesday", openTime: "8:30", closeTime: "16:30" },
      { dayOfWeek: "Wednesday", openTime: "8:30", closeTime: "16:30" },
      { dayOfWeek: "Thursday", openTime: "8:30", closeTime: "16:30" },
      { dayOfWeek: "Friday", openTime: "8:30", closeTime: "16:30" },
    ],
  },
  {
    id: 9,
    name: "Matthews Help Center",
    slug: "matthews-help-center",
    resourceType: "PANTRY",
    address: "119 N. Ames St",
    city: "Matthews",
    state: "NC",
    zip: "28105",
    phone: "(704) 847-8383",
    website: "https://matthewshelpcenter.org",
    description:
      "The Matthews Help Center provides food and other assistance to families in the Matthews and southeast Charlotte area.",
    idRequired: false,
    servesChildren: true,
    acceptsDonations: true,
    isActive: true,
    operatingHours: [
      { dayOfWeek: "Monday", openTime: "10:00", closeTime: "14:00" },
      { dayOfWeek: "Wednesday", openTime: "10:00", closeTime: "14:00" },
      { dayOfWeek: "Friday", openTime: "10:00", closeTime: "14:00" },
    ],
  },
  {
    id: 10,
    name: "Catholic Social Services Food Pantry",
    slug: "catholic-social-services",
    resourceType: "PANTRY",
    address: "1123 S. Church St",
    city: "Charlotte",
    state: "NC",
    zip: "28203",
    phone: "(704) 370-3262",
    website: "https://ccdoc.org",
    description:
      "Catholic Social Services provides food assistance and other social services to anyone in need, regardless of faith background.",
    idRequired: false,
    servesChildren: true,
    acceptsDonations: true,
    isActive: true,
    operatingHours: [
      { dayOfWeek: "Monday", openTime: "9:00", closeTime: "16:00" },
      { dayOfWeek: "Tuesday", openTime: "9:00", closeTime: "16:00" },
      { dayOfWeek: "Wednesday", openTime: "9:00", closeTime: "16:00" },
      { dayOfWeek: "Thursday", openTime: "9:00", closeTime: "16:00" },
      { dayOfWeek: "Friday", openTime: "9:00", closeTime: "16:00" },
    ],
  },
  {
    id: 11,
    name: "Thrift United Methodist Church Food Pantry",
    slug: "thrift-umc-food-pantry",
    resourceType: "PANTRY",
    address: "8245 Moores Chapel Rd",
    city: "Charlotte",
    state: "NC",
    zip: "28214",
    phone: "(704) 392-9807",
    description:
      "A church-based food pantry serving the west Charlotte community with free groceries.",
    idRequired: false,
    servesChildren: true,
    acceptsDonations: true,
    isActive: true,
    operatingHours: [
      { dayOfWeek: "Saturday", openTime: "9:00", closeTime: "12:00" },
    ],
  },
  {
    id: 12,
    name: "Pineville Church of Nazarene Food Ministry",
    slug: "pineville-church-nazarene",
    resourceType: "PANTRY",
    address: "8614 Pineville-Matthews Rd",
    city: "Pineville",
    state: "NC",
    zip: "28226",
    phone: "(704) 542-3618",
    website: "https://pineville.church",
    description:
      "A faith-based food pantry serving the Pineville and south Charlotte area with free groceries for families in need.",
    idRequired: false,
    servesChildren: true,
    acceptsDonations: true,
    isActive: true,
    operatingHours: [
      { dayOfWeek: "Wednesday", openTime: "18:00", closeTime: "20:00" },
      { dayOfWeek: "Saturday", openTime: "10:00", closeTime: "12:00" },
    ],
  },
];