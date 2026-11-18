export interface MachineItem {
  id: string;
  name: string;
  category: "excavator" | "loader" | "crane" | "dumptruck" | "roadwork" | "mining";
  categoryLabel: string;
  brandOptions: string[];
  operatingWeight: string;
  enginePower: string;
  capacity: string;
  fuelEfficiency: string;
  idealFor: string[];
  status: "In Stock (Addis Depot)" | "Express Import (25-35 Days)" | "Custom Sourcing Available";
  image: string;
  description: string;
  specs: { [key: string]: string };
}

export const MACHINERY_DATA: MachineItem[] = [
  {
    id: "crawler-excavator-330",
    name: "Heavy-Duty Crawler Excavator Series",
    category: "excavator",
    categoryLabel: "Excavators & Earthmoving",
    brandOptions: ["Caterpillar", "Komatsu", "SANY", "Volvo", "XCMG"],
    operatingWeight: "31,500 – 34,200 kg",
    enginePower: "212 kW (285 HP) @ 1,800 rpm",
    capacity: "1.6 – 2.1 m³ Heavy Rock Bucket",
    fuelEfficiency: "Optimized Common-Rail Diesel",
    idealFor: [
      "Deep foundation excavation",
      "Quarry bedrock extraction",
      "Highway road cutting in Ethiopian highlands",
      "Heavy trenching & drainage channels"
    ],
    status: "In Stock (Addis Depot)",
    image: "/images/fleet-excavator.jpg",
    description:
      "Engineered for the demanding rocky terrain and high-altitude operational conditions across Ethiopia. Features heavy-duty reinforced booms, high-flow hydraulic auxiliary piping, and certified roll-over protective cabs.",
    specs: {
      "Max Digging Depth": "7,390 mm",
      "Max Reach Ground Level": "10,720 mm",
      "Hydraulic Pressure": "34.3 MPa",
      "Track Shoe Width": "600 mm / 800 mm",
      "Cabin": "Pressurized ROPS/FOPS with High-Efficiency AC"
    }
  },
  {
    id: "articulated-wheel-loader-50",
    name: "5-Ton Articulated Heavy Wheel Loader",
    category: "loader",
    categoryLabel: "Wheel Loaders",
    brandOptions: ["SDLG", "XCMG", "Liugong", "Komatsu", "Caterpillar"],
    operatingWeight: "17,500 – 18,200 kg",
    enginePower: "162 kW (220 HP) Turbocharged",
    capacity: "3.0 – 3.5 m³ Material / Rock Bucket",
    fuelEfficiency: "Multi-stage Power Shift Transmission",
    idealFor: [
      "Aggregate quarry loading",
      "Batching plant aggregate handling",
      "Bulk earth stockpiling",
      "Road construction base spreading"
    ],
    status: "Express Import (25-35 Days)",
    image: "/images/fleet-wheel-loader.jpg",
    description:
      "A workhorse for Ethiopian batching plants, quarries, and construction yards. High breakout force combined with quick cycle times and durable radial construction tires.",
    specs: {
      "Rated Payload": "5,000 kg",
      "Dumping Clearance": "3,180 mm",
      "Dump Reach": "1,160 mm",
      "Cycle Time": "≤ 10.5 seconds",
      "Braking System": "Air-Over-Hydraulic Four Wheel Calipers"
    }
  },
  {
    id: "all-terrain-mobile-crane-70",
    name: "Telescopic All-Terrain Mobile Crane",
    category: "crane",
    categoryLabel: "Mobile Cranes & Lifting",
    brandOptions: ["Zoomlion", "XCMG", "SANY", "Liebherr", "Tadano"],
    operatingWeight: "44,000 kg (Chassis)",
    enginePower: "280 kW (375 HP) Euro III/IV",
    capacity: "70 – 100 Ton Max Lifting Capacity",
    fuelEfficiency: "Dual-Engine / High-Torque Travel Mode",
    idealFor: [
      "Addis Ababa high-rise structural erection",
      "Bridge girder placement",
      "Substation transformer installations",
      "Heavy industrial machinery offloading"
    ],
    status: "Custom Sourcing Available",
    image: "/images/fleet-crane.jpg",
    description:
      "Built for exceptional lifting stability and maneuverability through Ethiopian urban and inter-city roadways. Equipped with 5-section U-shaped main booms, hydraulic outriggers, and computerized load moment limiters.",
    specs: {
      "Main Boom Length": "45.0 meters",
      "Jib Extension": "16.0 meters",
      "Max Hoisting Height": "61.5 meters",
      "Outrigger Span": "7.6 m x 6.2 m",
      "Safety System": "Computerized Hirschmann LMI with Auto-cut"
    }
  },
  {
    id: "mining-dump-truck-rigid-hauler",
    name: "Heavy Mining & Quarry Dump Hauler",
    category: "dumptruck",
    categoryLabel: "Dump Trucks & Mining",
    brandOptions: ["Sinotruk HOWO", "Shacman", "Volvo FMX", "Beiben", "SANY"],
    operatingWeight: "35,000 – 45,000 kg (GVW)",
    enginePower: "294 kW (400 HP) – 338 kW (460 HP)",
    capacity: "22 – 28 m³ Reinforced Hardox Box",
    fuelEfficiency: "Optimized Heavy Axle Reduction Ratio",
    idealFor: [
      "Open-pit quarry rock haulage",
      "Dam & reservoir earthworks",
      "Large-scale cut and fill operations",
      "Cement raw material transport"
    ],
    status: "In Stock (Addis Depot)",
    image: "/images/fleet-dump-truck.jpg",
    description:
      "Extra-heavy duty reinforced tipper trucks designed specifically to handle punishing Ethiopian quarry conditions. Built with high-tensile steel bodies, heavy planetary hub reduction drive axles, and heavy-duty front suspensions.",
    specs: {
      "Drive Configuration": "6x4 / 8x4 Heavy-Duty",
      "Body Thickness": "Floor 12mm / Side 8mm NM450 Steel",
      "Tire Size": "12.00R20 Heavy Lug Mining Tires",
      "Tipping Mechanism": "Front Multi-Stage Hydraulic Hoist",
      "Fuel Tank": "400L Aluminum with Sediment Separator"
    }
  },
  {
    id: "motor-grader-road-series",
    name: "Precision Heavy Motor Grader Series",
    category: "roadwork",
    categoryLabel: "Road Construction & Rollers",
    brandOptions: ["Caterpillar", "SEM", "XCMG", "SANY", "Shantui"],
    operatingWeight: "16,200 – 19,500 kg",
    enginePower: "160 kW (215 HP) Electronic Injection",
    capacity: "4,270 mm (14 ft) Heavy Moldboard",
    fuelEfficiency: "Load-Sensing Variable Hydraulic Pump",
    idealFor: [
      "Ethiopian Roads Authority (ERA) standard highway grading",
      "Gravel road formation & camber shaping",
      "Slope banking and ditch carving",
      "Airport runway sub-base leveling"
    ],
    status: "Express Import (25-35 Days)",
    image: "/images/infrastructure-road.jpg",
    description:
      "Precision surface finishing machinery with direct drive power shift transmission and responsive blade controls. Ensures exact road cross-slopes and smooth surface compaction prep.",
    specs: {
      "Blade Width": "4,270 mm (14 ft)",
      "Max Blade Lift Above Ground": "460 mm",
      "Max Bank Cutting Angle": "90° Left and Right",
      "Turning Radius": "7.3 meters (Articulated Frame)",
      "Rear Attachment": "5-Shank Heavy Ripper + Front Dozer Blade"
    }
  },
  {
    id: "heavy-crawler-bulldozer-series",
    name: "Track-Type Crawler Bulldozer Series",
    category: "excavator",
    categoryLabel: "Excavators & Earthmoving",
    brandOptions: ["Shantui", "Caterpillar", "Komatsu", "HBXG / Shehwa"],
    operatingWeight: "17,800 – 24,500 kg",
    enginePower: "175 kW (235 HP) Weichai / Cummins",
    capacity: "Semi-U / Straight Tilt Blade 6.4 m³",
    fuelEfficiency: "Planetary Power Shift with Torque Converter",
    idealFor: [
      "Pioneering road alignment carving",
      "Forestry and agricultural land clearing",
      "Quarry overburden stripping",
      "Landfill & bulk earth compaction spreading"
    ],
    status: "In Stock (Addis Depot)",
    image: "/images/partnership-handover.jpg",
    description:
      "Tough, field-proven track bulldozers offering maximum traction on steep inclines and soft soils. Modular design enables straightforward maintenance and widespread spare parts availability throughout Ethiopia.",
    specs: {
      "Ground Pressure": "67 kPa",
      "Blade Width x Height": "3,725 mm x 1,315 mm",
      "Max Tilt": "735 mm",
      "Ripper Type": "3-Shank Hydraulic Ripper (Max depth 572 mm)",
      "Undercarriage": "Sealed and Lubricated Track Links"
    }
  }
];

export const CATEGORIES = [
  { id: "all", label: "All Machinery" },
  { id: "excavator", label: "Excavators & Bulldozers" },
  { id: "loader", label: "Wheel Loaders" },
  { id: "crane", label: "Mobile Cranes & Lifting" },
  { id: "dumptruck", label: "Heavy Dump Trucks" },
  { id: "roadwork", label: "Road Construction & Rollers" }
];
