import { BookOpen, FileText, Users, Anchor, Star } from 'lucide-react';

export interface Resource {
  title: string;
  description: string;
  url: string;
  icon: any;
  category: string;
  isPrimary: boolean;
}

export const seaScoutResources: Resource[] = [
  {
    title: "Sea Scout Manual",
    description: "The official handbook for all Sea Scouts covering advancement, activities, and traditions.",
    url: "https://seascout.org/wp-content/uploads/2025/02/3323925-Sea-Scout-Manual-PDF-Posted-02182025.pdf",
    icon: BookOpen,
    category: "Essential",
    isPrimary: true
  },
  {
    title: "Youth Training",
    description: "Comprehensive guide to seamanship, leadership, and outdoor adventures on the water.",
    url: "https://seascout.org/youth-training-and-education/",
    icon: Anchor,
    category: "Essential",
    isPrimary: true
  },
  {
    title: "Texas Boating Safety Course",
    description: "Required safety certification for all Sea Scouts and Scouters in command of a vessel.",
    url: "https://tpwd.texas.gov/education/boater-education",
    icon: FileText,
    category: "Safety",
    isPrimary: false
  },
  {
    title: "Sea Scout Advancement Requirements",
    description: "Summary of the Sea Scout advancement requirements.",
    url: "https://seascout.org/wp-content/uploads/2024/09/2024-Sea-Scout-Advancement47.pdf",
    icon: Star,
    category: "Advancement",
    isPrimary: false
  }
];

export const shipFormationResources: Resource[] = [
  {
    title: "Starting a New Sea Scout Ship",
    description: "Complete guide to chartering and organizing a new Sea Scout Ship.",
    url: "https://www.scouting.org/programs/sea-scouts/local-council-support/starting-a-ship/",
    icon: Users,
    category: "Ship Formation",
    isPrimary: true
  },
  {
    title: "New Ship Organization Kit",
    description: "Forms, requirements, and procedures for officially chartering your ship.",
    url: "https://seascout.org/new-ship-organization-kit//",
    icon: FileText,
    category: "Administrative",
    isPrimary: true
  },
  {
    title: "Sea Scout Ship Committee Guide",
    description: "Guidelines for establishing and operating an effective ship committee.",
    url: "https://www.scouting.org/programs/sea-scouts/adults/",
    icon: Users,
    category: "Leadership",
    isPrimary: false
  },
  {
    title: "Sea Scout Adult Leader Training",
    description: "Training modules required for all adult leaders in Sea Scout Ships.",
    url: "https://www.scouting.org/training/adult/",
    icon: BookOpen,
    category: "Training",
    isPrimary: false
  }
];

export const additionalResources: Resource[] = [
  {
    title: "BSA Youth Protection Training",
    description: "Mandatory training for all adult leaders and volunteers.",
    url: "https://www.scouting.org/training/youth-protection/",
    icon: FileText,
    category: "Required",
    isPrimary: true
  },
  {
    title: "Sea Scout Uniform and Insignia Guide",
    description: "Official guide to proper Sea Scout uniform and insignia placement.",
    url: "https://www.scouting.org/resources/insignia-guide/",
    icon: Star,
    category: "Uniform",
    isPrimary: false
  },
  {
    title: "Maritime Heritage and Traditions",
    description: "Learn about the rich maritime traditions that Sea Scouting celebrates.",
    url: "https://www.scouting.org/programs/sea-scouts/about/",
    icon: Anchor,
    category: "Culture",
    isPrimary: false
  },
  {
    title: "Sea Scout Activities and Events",
    description: "Calendar of regional and national Sea Scout events and regattas.",
    url: "https://www.scouting.org/programs/sea-scouts/activities/",
    icon: Users,
    category: "Events",
    isPrimary: false
  }
];