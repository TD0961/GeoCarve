export interface IndustryItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  recommendedFleet: string[];
  keyBenefit: string;
  iconName: string;
}

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: "construction",
    title: "Construction & Civil Engineering",
    subtitle: "Structural Foundations & Civil Works",
    description:
      "From high-rise commercial structures in Addis Ababa to major regional civil works, GeoCarve supplies high-capacity crawler excavators, foundation drilling rigs, and heavy mobile cranes to keep critical path deadlines on schedule.",
    recommendedFleet: ["30-40 Ton Crawler Excavators", "70-100 Ton Mobile Cranes", "Heavy Concrete & Material Handlers"],
    keyBenefit: "High uptime machinery with pre-tested hydraulic reliability for demanding continuous pours and deep excavations.",
    iconName: "Building2"
  },
  {
    id: "roads",
    title: "Road & Infrastructure Development",
    subtitle: "Highways, Expressways & Camber Works",
    description:
      "Ethiopia's rugged highlands and expansive rift valleys demand rugged road building equipment. We provide motor graders, soil compactors, asphalt paving machinery, and track-type bulldozers to carve durable transport networks.",
    recommendedFleet: ["Articulated Motor Graders", "16-22 Ton Vibratory Rollers", "Heavy Track Bulldozers"],
    keyBenefit: "Certified to meet Ethiopian Roads Authority (ERA) precision grading standards and high-altitude engine outputs.",
    iconName: "Truck"
  },
  {
    id: "mining",
    title: "Mining & Quarrying Operations",
    subtitle: "Aggregates, Basalt, Gold & Industrial Minerals",
    description:
      "Quarries supplying aggregates for concrete and cement, as well as mineral extraction operations across Afar, Oromia, Tigray, and Southern regions, rely on our rock-duty excavators, heavy wheel loaders, and high-tensile dump haulers.",
    recommendedFleet: ["50-70 Ton Mining Excavators", "5-7 Ton Rock Wheel Loaders", "Heavy Multi-Axle Off-Road Tippers"],
    keyBenefit: "Extreme-wear Hardox steel buckets and reinforced rock protection plates minimize maintenance shutdowns.",
    iconName: "Pickaxe"
  },
  {
    id: "industrial",
    title: "Industrial & Manufacturing Operations",
    subtitle: "Industrial Parks & Production Logistics",
    description:
      "Supporting industrial parks like Hawassa, Bole Lemi, and Kilinto. We supply industrial forklifts, yard cranes, internal transport dumpers, and loading machinery for bulk raw material handling.",
    recommendedFleet: ["Rough-Terrain Forklifts", "Industrial Telehandlers", "Electric & Diesel Yard Loaders"],
    keyBenefit: "Energy-efficient powertrains and nimble turning radius for high-throughput factory yards and warehouses.",
    iconName: "Factory"
  },
  {
    id: "realestate",
    title: "Real Estate & Property Development",
    subtitle: "Residential Estates & Commercial Complexes",
    description:
      "Accelerating mass housing, mixed-use commercial developments, and private real estate projects with fast-cycle earthmoving equipment, foundation prep excavators, and site utility machinery.",
    recommendedFleet: ["20-25 Ton Midi Excavators", "Compact Wheel Loaders", "Mini Skid-Steer Units"],
    keyBenefit: "Versatile attachments (hydraulic breakers, trenchers, augers) allowing a single machine to handle multiple construction phases.",
    iconName: "Home"
  },
  {
    id: "government",
    title: "Government & Institutional Projects",
    subtitle: "Dams, Irrigation, Utilities & Public Works",
    description:
      "Partnering with federal, regional, and municipal agencies on strategic public works: dam construction, irrigation canals, water supply reservoirs, and municipal infrastructure projects throughout Ethiopia.",
    recommendedFleet: ["Amphibious / Long-Reach Excavators", "Massive Earthmoving Fleets", "Heavy Rotary Drills"],
    keyBenefit: "Comprehensive international tender documentation, transparent Letter of Credit (LC) facilitation, and factory origin certifications.",
    iconName: "Landmark"
  },
  {
    id: "contractors",
    title: "Independent Contractors & Equipment Buyers",
    subtitle: "Private Fleet Growth & Rental Businesses",
    description:
      "We champion ambitious Ethiopian entrepreneurs, small contractors, and machinery rental companies. We provide transparent procurement, equipment selection guidance, and scalable financing pathways.",
    recommendedFleet: ["Versatile Backhoe Loaders", "3-5 Ton Wheel Loaders", "Single-Axle & Tandem Dumpers"],
    keyBenefit: "Personalized guidance to balance equipment lifecycle cost, spare parts availability, and rapid ROI on rental contracts.",
    iconName: "HardHat"
  }
];
