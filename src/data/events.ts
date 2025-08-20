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
    description: "Over Zoon Skipper Palm teaches leadership, planning and communication. And then the crew gets wet!",
    url: "mailto:dallas@rliv.net?subject=Quarter Deck Training on September 1st"
  },
  {
    id: 3,
    title: "CAC High Adventure Day",
    date: "2025-09-13",
    time: "8:30 AM-5:00 PM",
    location: "Lost Pines",
    description: "Shooting, swimming and climbing.",
    url: "https://scoutingevent.com/564-94448"
  },
  {
    id: 4,
    title: "SOLO SCOUT ADVENTURE - Sea Scout Minto Rendezvous",
    date: "2025-09-19 - 2025-09-21",
    time: "5:00 PM-11:00 AM",
    location: "Camp Strake, SHAC",
    description: "Regional Sea Scout rendezvous. Compete with other ships in sailing, seamanship, and leadership challenges.",
    url: "https://shacbsa.org/minto-rendezvous"
  },
  {
    id: 5,
    title: "US Coast Guard - Safety at Sea",
    date: "2025-11-Saturday_TBD",
    time: "7:30 AM - 5:00 PM",
    location: "US Coast Guard Station, Galveston, TX",
    description: "Fire a flare gun (the only legal way to do so).  Learn to start (and fight) fuel fires.  Don a survival suit and swim to an island.",
    url: "https://www.bacbsa.org/activities/safety-at-sea-2018/65520"
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