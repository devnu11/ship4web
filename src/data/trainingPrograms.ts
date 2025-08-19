import { BookOpen, Anchor, Users, Calendar } from 'lucide-react';

export interface TrainingProgram {
  title: string;
  description: string;
  icon: any;
  topics: string[];
}

export const trainingPrograms: TrainingProgram[] = [
  {
    title: "Basic Seamanship",
    description: "Essential skills for all Sea Scouts including knot tying, line handling, and boat safety.",
    icon: Anchor,
    topics: ["Knots and Splices", "Line Handling", "Boat Safety", "Navigation Basics"]
  },
  {
    title: "Leadership Development", 
    description: "Build leadership skills through hands-on maritime experiences and team challenges.",
    icon: Users,
    topics: ["Team Leadership", "Communication", "Decision Making", "Conflict Resolution"]
  },
  {
    title: "Advanced Navigation",
    description: "Chart reading, compass work, and modern GPS navigation techniques.",
    icon: BookOpen,
    topics: ["Chart Reading", "Compass Navigation", "GPS Systems", "Weather Patterns"]
  },
  {
    title: "Sailing Certification",
    description: "Comprehensive sailing program leading to US Sailing certification.",
    icon: Calendar,
    topics: ["Sailing Theory", "Boat Handling", "Safety Procedures", "Certification Prep"]
  }
];