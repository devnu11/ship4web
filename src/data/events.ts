import type { Event } from '../types';
import { SITE_CONFIG } from '../config/siteConfig';

export const upcomingEvents: Event[] = [
  {
    id: 1,
    title: "First Meeting",
    date: "2025-08-24",
    time: "4:00 PM-5:00 PM",
    location: SITE_CONFIG.meetingVenue,
    description: `First formal meeting of ${SITE_CONFIG.shipShortName}.`
  },
  {
    id: 2,
    title: "Pool Party & Quarter Deck Training",
    date: "2025-09-01",
    time: "1:30 PM-5:00 PM",
    location: "409 Riva Ridge Place, Austin, TX",
    description: "Over Zoom - Skipper Palm teaches leadership, planning and communication. And then the crew gets wet!",
    url: "mailto:dallas@rliv.net?subject=Quarter Deck Training on September 1st"
  },
  {
    id: 3,
    title: "Kayaking at Jessica Hollis Park",
    date: "2025-09-14",
    time: "10:00 AM-5:00 PM",
    location: "Jessica Hollis Park, 14100 Low Water Crossing Rd., Austin, TX 78732",
    description: "Meet at Patriots Hall to carpool. Scouts are cooking lunch. Bring swimwear, towel, change of clothes, sunscreen, hat, water bottle, and a life jacket if you have one.",
    url: "https://lcraparks.com/parks/jessica-hollis-park"
  },
  {
    id: 4,
    title: "Individual Training - Council Swimming and Water Rescue Training",
    date: "2025-09-14",
    time: "4:00 PM-9:00 PM",
    description: "Training for Leaders and Scouts older than 15.  Requires attending Zoom session before the class.",
    location: "Blackhawk Amenity Center, 3111 Speidel Drive, Pflugerville, TX 78660",
    url: "https://scoutingevent.com/564-104180"
  },
  {
    id: 5,
    title: "SOLO SCOUT ADVENTURE - Sea Scout Minto Rendezvous",
    date: "2025-09-19 - 2025-09-21",
    time: "5:00 PM-11:00 AM",
    location: "Camp Strake, SHAC",
    description: "Regional Sea Scout rendezvous. Compete with other ships in sailing, seamanship, and leadership challenges.",
    url: "https://shacbsa.org/minto-rendezvous"
  },
  {
    id: 6,
    title: "SOLO SCOUT ADVENTURE - Sailing Academy - Texas Trails Council",
    date: "2026-TBD",
    time: "TBD",
    location: "Abilene Sailing Assocation, Lake Ft. Phantom Hill, TX",
    description: "Earn US Sailing Certification. And Sea Scout rank advancement.",
    url: "https://www.texastrailsbsa.com"
  },
  {
    id: 7,
    title: "Adult Training - Introduction to On the Water Leadership",
    date: "2026-04-TBD",
    time: "TBD",
    location: "Lost Pines, Bastrop, TX",
    description: "Learn how to lead a scout ship."
  },
  {
    id: 8,
    title: "Sea Scout Academy",
    date: "2026-04-24 - 2026-04-26",
    time: "TBD",
    location: "Lost Pines, Bastrop, TX",
    description: "Learn how to lead a scout ship.  Earn Sea Scout rank advancement.",
    url: "https://scoutingevent.com/564-81102"
  },
  {
    id: 9,
    title: "SOLO SCOUT ADVENTURE - Aquatic School - Longhorn Council",
    date: "2026-07-12 - 2026-07-18",
    time: "5:00 PM",
    location: "Worth Ranch, Palo Pinto, TX",
    description: "Week-long leadership program for Scouts ages 13-17",
    url: "https://www.aquaticschool.org"
  }
];