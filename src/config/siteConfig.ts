/**
 * Site configuration for Sea Scout Ship 4
 * Centralized configuration for easy maintenance by scout leaders
 */

export const SITE_CONFIG = {
  // Basic Information
  shipName: "Sea Scout Ship 4",
  location: "Dripping Springs, TX",
  motto: "Paratus Sum",
  meetingTime: "Sunday 4:00 PM",
  meetingLocation: "Patriots Hall, US 290, Dripping Springs, TX",
  
  // Contact Information
  email: "ship4@dsscouts.com", // TODO: Replace with actual email
  phone: "(512) XXX-XXXX", // TODO: Replace with actual phone
  
  // Related Organizations
  sisterTroop: {
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
  
  // Color Palette Suggestions
  colors: {
    primary: "#1e40af", // Navy blue from logo
    secondary: "#dc2626", // Red from logo
    accent: "#0891b2", // Sea blue
    background: "#f8fafc",
    text: "#1e293b"
  }
} as const;