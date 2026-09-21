export interface SectorItem {
  id: string;
  category: string;
  name: string;
  tagline: string;
  desc: string;
  impactMetric: string;
  impactLabel: string;
  usecases: string[];
}

export const sectorsData: SectorItem[] = [
  {
    id: "01",
    category: "Retail & Shopping Centers",
    name: "Retail & Modern Trade",
    tagline: "Store conversion optimization & loss prevention",
    desc: "Turn passive surveillance into actionable intelligence: analyze visitor dwell times, popular aisle heatmaps, and prevent inventory shrinkage in real time.",
    impactMetric: "+35%",
    impactLabel: "Visitor footfall data accuracy",
    usecases: [
      "In/Out Visitor Footfall Counting",
      "Aisle Heatmaps & Dwell Time Analysis",
      "Cashier Queue Length Monitoring",
      "Shoplifting Watchlist Alerts",
    ],
  },
  {
    id: "02",
    category: "Manufacturing & Industrial Zones",
    name: "Factories & Warehousing",
    tagline: "EHS compliance automation & incident prevention",
    desc: "Enforce workplace safety regulations (PPE/K3) around the clock without requiring manual inspections across dangerous production floors.",
    impactMetric: "99.8%",
    impactLabel: "PPE safety gear compliance rate",
    usecases: [
      "Automated Helmet & Vest Auditing",
      "Early Fire & Smoke Cloud Detection",
      "Worker Fall & Man-Down Emergency Alerts",
      "Perimeter Security & Loading Dock Control",
    ],
  },
  {
    id: "03",
    category: "Banking & Financial Institutions",
    name: "Banking & Financial Services",
    tagline: "Priority client experience & vault room protection",
    desc: "Greet VIP clients the instant they enter, while continuously safeguarding ATM vestibules, server rooms, and vault corridors from security breaches.",
    impactMetric: "< 1s",
    impactLabel: "VIP client arrival notification",
    usecases: [
      "VIP Client & Executive Face Recognition",
      "ATM Loitering & Suspicious Behavior Detection",
      "Concealed Weapon & Threat Identification",
      "Anti-Tailgating at Data Vault Entrances",
    ],
  },
  {
    id: "04",
    category: "Government & Smart Campuses",
    name: "Smart City & Managed Estates",
    tagline: "Smooth traffic flow & public safety enforcement",
    desc: "Monitor vehicular flow across estate gates, public thoroughfares, and campus perimeters to identify traffic congestion, wrong-way drivers, and license plates.",
    impactMetric: "24/7",
    impactLabel: "Continuous automated monitoring",
    usecases: [
      "Automatic Number Plate Recognition (ANPR)",
      "Wrong-Way Vehicle & Speed Anomaly Alerts",
      "Crowd Density & Public Gathering Alerts",
      "Automated Parking Occupancy Management",
    ],
  },
];
