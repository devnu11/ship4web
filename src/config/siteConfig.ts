/**
 * Site configuration for Sea Scout Ship 4
 * Centralized configuration for easy maintenance by scout leaders
 */

export const SITE_CONFIG = {
  // Basic Information
  shipName: "Sea Scout Ship 4",
  shipShortName: "Ship 4",
  location: "Dripping Springs, TX",
  motto: "Paratus Sum",
  meetingTime: "Sunday 4:00 PM",
  meetingLocation: "Patriots Hall, US 290, Dripping Springs, TX",
  
  // Location Components
  meetingVenue: "Patriots Hall",
  meetingAddress: "US 290",
  city: "Dripping Springs",
  state: "TX",
  
  // Contact Information
  email: "skipper@ship4.org",
  phone: "(201) 74-EVANS",
  
  // Related Organizations
  brotherTroop: {
    name: "Troop 4",
    url: "https://troop4ds.com"
  },
  parentOrg: {
    name: "Dripping Springs Scouts",
    url: "https://dsscouts.com"
  },
  charterOrg: "American Legion Post 290",
  
  // Google Integration (TODO: Add actual IDs)
  googleCalendarId: "YOUR_CALENDAR_ID@group.calendar.google.com",
  googleSheetsId: "YOUR_SPREADSHEET_ID",
  
  // Official Ship 4 Color Palette
  colors: {
    primary: "#00205B", // Ship 4 Navy Blue
    secondary: "#C81010", // Ship 4 Red
    accent: "#0891b2", // Sea blue
    background: "#f8fafc",
    text: "#1e293b"
  }
} as const;