import type { LucideIcon } from "lucide-react"
import {
  Boxes,
  ClipboardCheck,
  Compass,
  Factory,
  Gauge,
  HardHat,
  LifeBuoy,
  Radar,
  ShieldCheck,
  Ship,
  Shovel,
  Truck,
  Users,
  Wrench,
  Zap,
} from "lucide-react"

type HeroImage = {
  src: string
  alt: string
}

export type Service = {
  title: string
  slug: string
  summary: string
  description: string
  duration: string
  entryRequirements: string
  courseContent: string[]
  assessmentMethod: string
  syllabus?: string
  notes?: string[]
  heroImage: HeroImage
  icon: LucideIcon
}

export type ServiceSubcategory = {
  id: string
  title: string
  /** Service slugs in display order */
  serviceSlugs: string[]
}

export type ServiceCategoryGroup = {
  id: string
  title: string
  description: string
  subcategories: ServiceSubcategory[]
}

export const services: Service[] = [
  {
    title: "Rigging & Lifting",
    slug: "rigging-lifting",
    summary:
      "Essential skills to safely move heavy loads, reducing risks of accidents and equipment damage.",
    description:
      "Equips personnel with essential skills to safely move heavy loads, reducing risks of accidents and equipment damage across construction, oil & gas, and manufacturing environments.",
    duration: "2 days",
    entryRequirements:
      "Personnel working in construction, oil & gas, and manufacturing industries.",
    courseContent: [
      "Equipment inspection",
      "Load weight calculation",
      "Sling selection",
      "Proper signaling",
    ],
    assessmentMethod: "Written exam and practical observation.",
    syllabus: "LEEA Syllabus",
    notes: ["Theory sessions supported by hands-on rigging and lifting practice."],
    heroImage: {
      src: "https://www.altrad.com/files/medias/services/4-Mechanical/Lifting%20and%20rigging.jpg",
      alt: "Rigging equipment and lifting slings",
    },
    icon: HardHat,
  },
  {
    title: "Crane Operator Training",
    slug: "crane-operator-training",
    summary:
      "Program to ensure safe and efficient operation of heavy lifting machinery across construction, shipping, manufacturing, and oil & gas sectors.",
    description:
      "This program ensures safe and efficient operation of heavy lifting machinery across construction, shipping, manufacturing, and oil & gas sectors.",
    duration: "Custom schedule",
    entryRequirements:
      "Personnel responsible for operating cranes in industrial environments.",
    courseContent: [
      "Crane mechanics and load calculations",
      "Load chart interpretation",
      "Rigging principles",
      "Safety regulations and compliance",
    ],
    assessmentMethod: "Assessment method tailored to client requirements.",
    notes: [
      "Classroom instruction covering crane systems and safety standards.",
      "Hands-on training with supervised crane operation, precision lifting, and manoeuvring in varied site conditions.",
    ],
    heroImage: {
      src: "/HeavyLifting.png",
      alt: "Crane lifting heavy equipment on site",
    },
    icon: Truck,
  },
  {
    title: "Overhead Crane Operator Training",
    slug: "electric-overhead-travelling-crane",
    summary:
      "Knowledge and skills to safely operate bridge, gantry, and monorail cranes with a focus on compliance, inspections, and load handling.",
    description:
      "Provides knowledge and skills to safely operate bridge, gantry, and monorail cranes with a focus on compliance, inspections, and load handling.",
    duration: "2–3 days",
    entryRequirements:
      "Personnel operating overhead cranes in construction, manufacturing, or shipping.",
    courseContent: [
      "Rigging techniques and hand signals",
      "Hazard awareness",
      "Pre-use inspections",
      "Safe lifting operations",
    ],
    assessmentMethod: "Written exam and practical observation.",
    syllabus: "LEEA Syllabus",
    notes: ["Classroom theory combined with practical evaluations."],
    heroImage: {
      src: "https://s.alicdn.com/@sc04/kf/Hc3e82c0921f140f49cd9285913d2f834S/Industrial-Warehouse-Electric-Double-Girder-Overhead-Hoist-European-Bridge-Crane-Traveling-Foundry-Casting-Overhead-Crane.jpg",
      alt: "Overhead crane in an industrial facility",
    },
    icon: Factory,
  },
  {
    title: "Banksman / Slinging Training Course",
    slug: "banksman-slinging-training",
    summary:
      "Prepares personnel to safely secure loads and direct crane movements in construction and oil & gas environments.",
    description:
      "Prepares personnel to safely secure loads (slinger) and direct crane movements (banksman) in industries such as construction and oil & gas.",
    duration: "3 days",
    entryRequirements:
      "Individuals working as slingers or banksmen in lifting operations.",
    courseContent: [
      "Lifting regulations (LOLER)",
      "Rigging techniques",
      "Hand signals and radio communication",
      "Safe load handling",
    ],
    assessmentMethod: "Written exam (closed book) and practical observation.",
    syllabus: "LEEA Syllabus",
    notes: ["Classroom instruction and supervised practical exercises."],
    heroImage: {
      src: "https://clydetrainingsolutions.com/wp-content/uploads/2024/02/OPITO-Banksman-Slinger.webp",
      alt: "Signaler guiding a crane lift",
    },
    icon: Users,
  },
  {
    title: "Appointed Person for Lifting Operations",
    slug: "appointed-person-lifting-operations",
    summary:
      "Comprehensive program to plan, manage, and supervise lifting operations.",
    description:
      "Comprehensive program qualifying individuals to plan, manage, and supervise lifting operations.",
    duration: "5 days (4 training + 1 assessment)",
    entryRequirements: "Recommended supervisory experience and mathematics skills.",
    courseContent: [
      "Legislation",
      "Roles and responsibilities",
      "Crane types",
      "Lift planning",
      "Calculations",
      "Documentation",
      "Live lifting operation",
    ],
    assessmentMethod: "Written exam and practical observation.",
    syllabus: "LEEA Syllabus",
    heroImage: {
      src: "https://ges-org.com/wp-content/uploads/2023/05/WhatsApp-Image-2023-01-19-at-19.43.26.jpg",
      alt: "Team planning a lifting operation",
    },
    icon: ShieldCheck,
  },
  {
    title: "Rigging Loft Management Training",
    slug: "rigging-loft-management-equipment-inspection",
    summary:
      "Prepares personnel to control, inspect, and maintain lifting equipment such as slings, shackles, and hoists in offshore or construction environments.",
    description:
      "Prepares personnel to control, inspect, and maintain lifting equipment such as slings, shackles, and hoists in offshore or construction environments.",
    duration: "1 day (8 hours)",
    entryRequirements: "Personnel responsible for managing rigging lofts.",
    courseContent: [
      "Loft organization and equipment control",
      "Inspection procedures",
      "Maintenance practices",
    ],
    assessmentMethod: "Written test and practical observation.",
    syllabus: "LEEA Syllabus",
    notes: ["Classroom instruction and practical loft management exercises."],
    heroImage: {
      src: "https://primeliftsafetyng.com/wp-content/uploads/2020/09/Rigging-Loft-Management-Training.jpg",
      alt: "Rigging equipment organized in a workshop",
    },
    icon: Boxes,
  },
  {
    title: "Mobile Crane Operation",
    slug: "mobile-crane-operation",
    summary:
      "Introductory training for certification in mobile crane operations.",
    description:
      "Introductory training for personnel seeking certification in mobile crane operations.",
    duration: "4 days (32 hours)",
    entryRequirements: "Valid driving license.",
    courseContent: [
      "Duties of a mobile crane operator",
      "Safe lifting operations",
    ],
    assessmentMethod: "Written exam and practical lifting plan exercise.",
    syllabus: "LEEA Syllabus",
    heroImage: {
      src: "https://d9z1tpn605xsl.cloudfront.net/uploads/ckeditor/pictures/4702/content_blog-img.jpg",
      alt: "Mobile crane on a construction site",
    },
    icon: Truck,
  },
  {
    title: "Lifting Accessories Inspection Training",
    slug: "lifting-accessories-inspection",
    summary:
      "Qualification for inspecting and maintaining slings, shackles, hooks, chains, and accessories.",
    description:
      "Qualification for professionals inspecting and maintaining lifting accessories such as slings, shackles, hooks, and chains.",
    duration: "5 days",
    entryRequirements: "None",
    courseContent: [
      "Slinging accessories (slings, chains, shackles, eyebolts, etc.)",
      "Non-fixed load attachments (plate clamps, lifting beams, magnets, etc.)",
    ],
    assessmentMethod: "Written exam and practical inspection exercises.",
    syllabus: "LEEA Syllabus",
    heroImage: {
      src: "https://www.petrobasegroup.com/public/images/services/lifting-gear-inspection.jpg",
      alt: "Close-up of lifting accessories",
    },
    icon: Wrench,
  },
  {
    title: "Manual Lifting Machines Training",
    slug: "manual-lifting-machines",
    summary:
      "Qualification for inspecting and maintaining manual lifting machines like hoists and winches.",
    description:
      "Qualification for professionals inspecting and maintaining manual lifting machines (hoists, winches, jacks, pulley blocks).",
    duration: "5 days",
    entryRequirements: "Basic knowledge of lifting equipment recommended.",
    courseContent: [
      "Inspection principles",
      "Maintenance procedures",
      "Safety standards",
    ],
    assessmentMethod: "Written exam and practical inspection evaluation.",
    syllabus: "LEEA Syllabus",
    heroImage: {
      src: "https://cdn.cpdonline.co.uk/wp-content/uploads/2025/01/29134415/Equipment-Aids-for-Manual-Handling-scaled.jpg",
      alt: "Manual hoist equipment in use",
    },
    icon: Gauge,
  },
  {
    title: "Offshore Containers Certification Training",
    slug: "offshore-containers-certification",
    summary:
      "Qualification for inspecting offshore containers and lifting sets.",
    description:
      "Qualification for professionals inspecting offshore containers and lifting sets.",
    duration: "4 days",
    entryRequirements: "None",
    courseContent: [
      "Legislation",
      "Container design",
      "Certification",
      "Corrosion assessment",
      "Documentation",
    ],
    assessmentMethod: "Written exam and practical inspection exercises.",
    syllabus: "LEEA Syllabus",
    heroImage: {
      src: "https://ww2.eagle.org/content/eagle/en/Products-and-Services/vendor-certification/container-certification/offshore-containers/_jcr_content/root/container/centerpar/image.img.jpg/1647297732277.jpg",
      alt: "Offshore containers on a dock",
    },
    icon: Ship,
  },
  {
    title: "Powered Lifting Machines Training",
    slug: "powered-lifting-machines",
    summary:
      "Program for inspecting and maintaining powered lifting machines like electric hoists and cranes.",
    description:
      "Program for professionals inspecting and maintaining powered lifting machines (electric hoists, overhead cranes, powered winches).",
    duration: "5 days",
    entryRequirements: "Basic electrical/mechanical knowledge recommended.",
    courseContent: [
      "Standards",
      "Components",
      "Inspection procedures",
      "Electrical fault identification",
    ],
    assessmentMethod: "Written exam and practical inspection evaluation.",
    syllabus: "LEEA Syllabus",
    heroImage: {
      src: "https://primeliftsafetyng.com/oil-and-gas-training-services/lifting-operations-planning-and-supervision-pic-2/",
      alt: "Powered lifting machine in an industrial setting",
    },
    icon: Zap,
  },
  {
    title: "Offshore Crane Inspection",
    slug: "offshore-crane-inspection",
    summary:
      "Advanced training for inspecting offshore cranes in line with API RP2D2 and LEEA standards.",
    description:
      "Advanced training for professionals inspecting offshore cranes in line with API RP2D2 and LEEA standards.",
    duration: "4 days",
    entryRequirements: "Prior exposure to lifting operations recommended.",
    courseContent: [
      "Legislation",
      "Risk management",
      "Lifting equipment",
      "Inspection procedures",
    ],
    assessmentMethod: "Written exam and practical observation.",
    syllabus: "LEEA Syllabus",
    heroImage: {
      src: "https://cdn.prod.website-files.com/681c87ee5d6228a6104ef53d/6878cb78117d8e2326ea0d21_IMG_20210531_142431-7.jpg",
      alt: "Offshore crane on an oil platform",
    },
    icon: Radar,
  },
  {
    title: "Forklift Operator Training",
    slug: "forklift-training",
    summary:
      "Mandatory safety training for personnel operating powered industrial trucks to prevent accidents such as tipovers and collisions.",
    description:
      "Mandatory safety training for personnel operating powered industrial trucks, designed to prevent accidents such as tipovers and collisions in construction and oil & gas environments.",
    duration: "2–3 days",
    entryRequirements:
      "Employees required to operate forklifts in industrial settings.",
    courseContent: [
      "Forklift mechanics and load handling",
      "Load chart interpretation",
      "Rigging principles",
      "Safety regulations",
    ],
    assessmentMethod: "Written and practical assessment.",
    notes: [
      "Classroom instruction covering forklift systems and safety standards.",
      "Hands-on training with supervised forklift operation, precision lifting, and maneuvering in site conditions.",
    ],
    heroImage: {
      src: "https://allpurposeforklifttraining.com/images/forklift-dock-loader.jpg",
      alt: "Forklift operating in a warehouse",
    },
    icon: Shovel,
  },
  {
    title: "Manual Handling Training",
    slug: "manual-handling-training",
    summary:
      "Training for personnel performing manual handling tasks, with optional site customization.",
    description:
      "Training for personnel performing manual handling tasks. Can be customized for site-specific requirements.",
    duration: "1 day",
    entryRequirements: "None",
    courseContent: ["Safe lifting techniques", "Hazard awareness", "Ergonomics"],
    assessmentMethod: "Written and practical assessment.",
    notes: ["Can be customized for site-specific requirements."],
    heroImage: {
      src: "https://www.pragmatic-consulting.co.uk/user_uploads/images/news/large/20250422130907Why-EUSR-Manual-Handling-Training-Matters---And-How-Pragmatic-Consulting-Ltd-Can-Help-You-.jpg",
      alt: "Worker practicing safe manual handling",
    },
    icon: LifeBuoy,
  },
  {
    title: "Work at Height",
    slug: "work-at-height",
    summary:
      "Essential training for safe work at height combining theory and practical skills.",
    description:
      "Essential training combining theory and practical skills for safe work at height.",
    duration: "1–2 days",
    entryRequirements: "None",
    courseContent: [
      "Legal requirements",
      "Hazard identification",
      "Equipment use",
      "Fall-protection systems",
    ],
    assessmentMethod: "Written and practical assessment.",
    heroImage: {
      src: "https://constructionmanagement.co.uk/wp-content/uploads/2018/06/Safe-Working-at-Height-Dreamstime.jpg",
      alt: "Technician working at height with safety gear",
    },
    icon: Compass,
  },
  {
    title: "Scaffold Erection and Inspection Training",
    slug: "scaffold-erection-inspection-training",
    summary:
      "Covers scaffold safety requirements, components, erection, use, and dismantling of supported and suspended scaffolds.",
    description:
      "Covers scaffold safety requirements, components, erection, use, and dismantling of supported and suspended scaffolds.",
    duration: "Custom schedule",
    entryRequirements:
      "Personnel involved in scaffold erection, use, and inspection.",
    courseContent: [
      "Safe erection and dismantling procedures",
      "Scaffold use guidelines",
      "Inspection techniques for supported and suspended scaffolds",
      "Hazard awareness and compliance",
    ],
    assessmentMethod: "Assessment method tailored to client requirements.",
    notes: [
      "Classroom instruction and practical scaffold erection/inspection exercises.",
    ],
    heroImage: {
      src: "https://www.thesafetymaster.com/wp-content/uploads/2023/06/WhatsApp-Image-2023-06-07-at-9.52.09-AM.jpeg",
      alt: "Scaffold structure on a construction site",
    },
    icon: HardHat,
  },
  {
    title: "Lift Planning",
    slug: "lift-planning",
    summary:
      "Teaches personnel how to design, document, and supervise crane and lifting operations in compliance with industry standards and BS 7121.",
    description:
      "Teaches personnel how to design, document, and supervise crane and lifting operations in compliance with industry standards and BS 7121.",
    duration: "3 days (2 training + 1 assessment)",
    entryRequirements:
      "Supervisors, engineers, and planners involved in lifting operations.",
    courseContent: [
      "Load assessment and rigging selection",
      "Crane configuration and ground stability",
      "Risk management and documentation",
      "Safe lift execution",
    ],
    assessmentMethod: "Written lift plan and supervised practical lift.",
    notes: ["Classroom theory and supervised practical lift planning."],
    heroImage: {
      src: "https://primeliftsafetyng.com/wp-content/uploads/2024/05/Lifting-Operation-Planning.png",
      alt: "Engineers reviewing a lift plan on site",
    },
    icon: ClipboardCheck,
  },
  {
    title: "Lifting Equipment Inspection & Certification",
    slug: "lifting-equipment-inspection-certification",
    summary:
      "Thorough examination and certification of lifting equipment for safety, compliance, and structural integrity.",
    description:
      "We conduct comprehensive inspections and certification of lifting equipment using visual checks, non-destructive testing, and load testing to confirm safe operation and regulatory compliance.",
    duration: "Every 6-12 months or as required",
    entryRequirements:
      "Asset owners and operators of cranes, forklifts, hoists, and lifting accessories.",
    courseContent: [
      "Visual and functional inspection",
      "Non-destructive testing (NDT) checks",
      "Load testing and performance verification",
      "Compliance documentation and certification",
    ],
    assessmentMethod:
      "Certified inspection report with defect classification and certificate issuance.",
    notes: [
      "Applies to cranes, forklifts, hoists, and lifting accessories.",
    ],
    heroImage: {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgBbDbhEN2zWe2vCN3LLtMEyOUtkXY3vs7dQ&s",
      alt: "Inspection team assessing lifting equipment",
    },
    icon: ClipboardCheck,
  },
  {
    title: "Earthmoving Equipment Inspection",
    slug: "earthmoving-equipment-inspection",
    summary:
      "Comprehensive inspection for earthmoving machinery to ensure safe, efficient, and compliant operations.",
    description:
      "Our certified team inspects earthmoving equipment to verify safety systems, mechanical condition, and regulatory compliance before and during operation.",
    duration: "Scheduled or on-demand",
    entryRequirements:
      "Companies operating excavators, loaders, bulldozers, graders, and related equipment.",
    courseContent: [
      "Mechanical and structural condition checks",
      "Hydraulic and control-system verification",
      "Brake, steering, and stability checks",
      "Regulatory compliance reporting",
    ],
    assessmentMethod:
      "Inspection checklist, deficiency report, and compliance recommendation.",
    heroImage: {
      src: "/constructionequipment.webp",
      alt: "Earthmoving equipment under field inspection",
    },
    icon: Shovel,
  },
  {
    title: "Work-at-Height Equipment Inspection",
    slug: "work-at-height-equipment-inspection",
    summary:
      "Professional inspection of harnesses, lanyards, lifelines, and anchors to reduce fall risks.",
    description:
      "We provide documented inspections for work-at-height equipment to ensure every item remains compliant, fit for purpose, and ready for safe use.",
    duration: "Periodic and pre-use intervals",
    entryRequirements:
      "Organizations deploying personnel for elevated or rope-supported work.",
    courseContent: [
      "Harness and lanyard integrity checks",
      "Lifeline and anchor-point inspection",
      "Serviceability tagging and documentation",
      "Compliance tracking and replacement advice",
    ],
    assessmentMethod:
      "Competent-person inspection log with pass/fail status and corrective actions.",
    heroImage: {
      src: "/RopeStuff.jpg",
      alt: "Technician inspecting fall-protection equipment",
    },
    icon: Compass,
  },
  {
    title: "Non-Destructive Testing (NDT) Services",
    slug: "non-destructive-testing-services",
    summary:
      "Advanced NDT services to detect defects and assess material integrity without damaging components.",
    description:
      "We deliver a full range of NDT inspections to evaluate the strength, integrity, and reliability of materials and equipment while preserving operational usability.",
    duration: "Per project scope",
    entryRequirements:
      "Industrial assets requiring integrity assurance and defect detection.",
    courseContent: [
      "Surface and subsurface defect detection",
      "Weld and joint integrity assessment",
      "Thickness and corrosion monitoring",
      "Reporting for maintenance planning",
    ],
    assessmentMethod:
      "Technique-based NDT reports with findings, severity ratings, and recommendations.",
    heroImage: {
      src: "/InstruCal.png",
      alt: "Technician performing non-destructive testing",
    },
    icon: Radar,
  },
  {
    title: "Life Rafts & Scramble Nets Inspection",
    slug: "life-rafts-scramble-nets-inspection",
    summary:
      "Certified inspection of life rafts and scramble nets in line with SOLAS maritime safety requirements.",
    description:
      "We inspect life rafts and scramble nets to verify emergency readiness, serviceability, and compliance with international maritime standards.",
    duration: "As required by marine safety schedule",
    entryRequirements:
      "Vessel operators, offshore facilities, and marine logistics teams.",
    courseContent: [
      "Life raft condition and readiness checks",
      "Scramble net structural inspection",
      "Emergency deployment readiness verification",
      "Compliance documentation and status records",
    ],
    assessmentMethod:
      "Certified inspection outcome with deficiencies and corrective action guidance.",
    heroImage: {
      src: "/MarineLog.png",
      alt: "Marine safety gear prepared for inspection",
    },
    icon: LifeBuoy,
  },
  {
    title: "Industrial Lifting Equipment Supply",
    slug: "industrial-lifting-equipment-supply",
    summary:
      "Supply of industrial lifting equipment including cranes, forklifts, and MEWPs for project operations.",
    description:
      "We source and deliver lifting equipment tailored to project needs, with equipment verification and support for safe operational deployment.",
    duration: "Project-based and recurring supply",
    entryRequirements:
      "Organizations requiring procurement support for lifting operations.",
    courseContent: [
      "Equipment selection based on project requirements",
      "Technical specification and compatibility checks",
      "Supply logistics and delivery coordination",
      "Pre-delivery equipment verification",
    ],
    assessmentMethod:
      "Vendor quality checks, delivery verification, and documentation handover.",
    heroImage: {
      src: "/HeavyLifting.png",
      alt: "Industrial lifting equipment staged for deployment",
    },
    icon: Truck,
  },
  {
    title: "Lifting Accessories Supply",
    slug: "lifting-accessories-supply",
    summary:
      "Supply of certified lifting accessories including slings, shackles, chain blocks, and rigging hardware.",
    description:
      "We provide a broad inventory of lifting accessories to support safe and compliant rigging operations across marine and industrial projects.",
    duration: "On-demand and contract supply",
    entryRequirements:
      "Teams managing lifting, rigging, and materials-handling operations.",
    courseContent: [
      "Wire rope and webbing sling supply",
      "Shackles, hooks, chain blocks, and rigging screws",
      "Specification matching to load requirements",
      "Traceability and product documentation",
    ],
    assessmentMethod:
      "Pre-dispatch quality verification and conformity documentation.",
    heroImage: {
      src: "/HeavyLifting.png",
      alt: "Certified lifting accessories arranged for supply",
    },
    icon: Wrench,
  },
  {
    title: "Marine Equipment Supply",
    slug: "marine-equipment-supply",
    summary:
      "Supply of essential marine equipment including life buoys, davits, winches, nets, fenders, and rafts.",
    description:
      "We deliver marine-grade equipment required for vessel operations, offshore support, and emergency readiness with dependable logistics.",
    duration: "Routine and emergency procurement",
    entryRequirements:
      "Marine operators, offshore projects, and logistics providers.",
    courseContent: [
      "Safety and lifesaving equipment supply",
      "Deck and handling equipment procurement",
      "Marine asset compatibility checks",
      "Logistics and delivery support",
    ],
    assessmentMethod:
      "Supply quality controls and conformance documentation at handover.",
    heroImage: {
      src: "https://www.freightcenter.com/wp-content/webp-express/webp-images/uploads/2025/07/Screenshot-2025-07-08-105801.png.webp",
      alt: "Marine equipment prepared for offshore use",
    },
    icon: Ship,
  },
  {
    title: "Technical Manpower Supply",
    slug: "technical-manpower-supply",
    summary:
      "Provision of skilled technical manpower including riggers, crane operators, scaffolders, and welders.",
    description:
      "We deploy qualified personnel to support lifting, maintenance, and industrial operations with reliable, safety-focused workforce coverage.",
    duration: "Short-term, rotational, or long-term engagement",
    entryRequirements:
      "Projects requiring vetted and competent technical personnel.",
    courseContent: [
      "Role-based personnel matching",
      "Competency and certification verification",
      "Mobilization and shift planning support",
      "Performance and compliance oversight",
    ],
    assessmentMethod:
      "Workforce qualification validation and assignment quality monitoring.",
    heroImage: {
      src: "/FabMent.jpeg",
      alt: "Technical crew deployed for field operations",
    },
    icon: Users,
  },
  {
    title: "Rope Access Services",
    slug: "rope-access-services",
    summary:
      "Safe rope access operations for difficult-to-reach maintenance and inspection locations.",
    description:
      "Our rope access teams execute inspection, maintenance, and repair scopes in elevated or confined locations where conventional access is impractical.",
    duration: "Per task scope",
    entryRequirements:
      "Sites requiring safe access to high or hard-to-reach structures.",
    courseContent: [
      "Task planning and rescue readiness",
      "Access setup and safety controls",
      "Inspection and maintenance execution",
      "Close-out reporting and recommendations",
    ],
    assessmentMethod:
      "Method statement compliance and task completion verification.",
    heroImage: {
      src: "/RopeStuff.jpg",
      alt: "Rope access technicians on industrial structure",
    },
    icon: Compass,
  },
  {
    title: "Marine Maintenance Works",
    slug: "marine-maintenance-works",
    summary:
      "Specialized marine maintenance services to keep vessels and offshore assets operational.",
    description:
      "We provide planned and corrective marine maintenance works covering mechanical systems, deck equipment, and structural upkeep for reliable uptime—including offshore maintenance using C-claw technology for metal bonding where applicable.",
    duration: "Planned or corrective maintenance windows",
    entryRequirements:
      "Marine assets requiring preventive or breakdown maintenance support.",
    courseContent: [
      "Mechanical and deck equipment servicing",
      "Structural and corrosion-related maintenance",
      "Operational readiness checks",
      "Maintenance documentation and handover",
    ],
    assessmentMethod:
      "Maintenance completion records with verification against approved scope.",
    heroImage: {
      src: "/MarineLog.png",
      alt: "Marine maintenance team working on deck equipment",
    },
    icon: Ship,
  },
  {
    title: "Crane LMI Calibration",
    slug: "crane-lmi-calibration",
    summary:
      "Calibration of crane Load Moment Indicator systems for precise and safe lifting operations.",
    description:
      "We calibrate and verify crane LMI systems to improve load monitoring accuracy, reduce lifting risk, and support operational compliance.",
    duration: "Scheduled calibration intervals",
    entryRequirements:
      "Operators and owners of cranes equipped with LMI systems.",
    courseContent: [
      "LMI system diagnostics",
      "Sensor and display calibration",
      "Load verification checks",
      "Calibration documentation",
    ],
    assessmentMethod:
      "Calibration certificate and post-calibration performance verification.",
    heroImage: {
      src: "https://qualitycalibrationbd.com/wp-content/uploads/2025/06/Tower-Crane-Calibration-Matters-1024x768.webp",
      alt: "Engineer calibrating crane LMI instrumentation",
    },
    icon: Gauge,
  },
  {
    title: "Street Solar Light Installation",
    slug: "street-solar-light-installation",
    summary:
      "Design and installation of street solar lighting systems for roads, facilities, and communities.",
    description:
      "We deliver end-to-end solar street light installations including site assessment, mounting, wiring, and commissioning for reliable outdoor lighting.",
    duration: "Project implementation timeline",
    entryRequirements:
      "Public or private sites requiring off-grid or hybrid lighting solutions.",
    courseContent: [
      "Site survey and layout planning",
      "Mounting and civil preparation",
      "Electrical connections and commissioning",
      "Post-installation performance checks",
    ],
    assessmentMethod:
      "Commissioning checklist and installation quality verification.",
    heroImage: {
      src: "https://solarledlight.com/wp-content/uploads/2023/11/Solar-led-street-light-installation-in-Antigua.jpg",
      alt: "Installed solar street lights along a roadway",
    },
    icon: Zap,
  },
  {
    title: "General Contracting Services",
    slug: "general-contracting-services",
    summary:
      "Comprehensive contracting support across industrial, marine, and infrastructure projects.",
    description:
      "We execute multidisciplinary contracting scopes from planning and resource mobilization to delivery and quality close-out across varied project environments.",
    duration: "Per contract scope and schedule",
    entryRequirements:
      "Clients requiring single-point coordination for complex service delivery.",
    courseContent: [
      "Scope planning and project coordination",
      "Technical resource and vendor mobilization",
      "Execution supervision and HSE compliance",
      "Quality control and final handover",
    ],
    assessmentMethod:
      "Milestone-based quality reviews and contractual deliverable validation.",
    heroImage: {
      src: "https://baamiis.com/wp-content/uploads/2025/07/Contracting.png",
      alt: "Project team coordinating a general contracting scope",
    },
    icon: HardHat,
  },
  {
    title: "Rope Access Kits Inspection",
    slug: "rope-access-kits-inspection",
    summary:
      "Documented inspection of rope access kits, harnesses, connectors, and related PPE for safe deployment.",
    description:
      "We inspect rope access kits and associated personal protective equipment to verify configuration, serviceability, and compliance before work-at-height or rope access operations.",
    duration: "Periodic and pre-use intervals",
    entryRequirements:
      "Teams using rope access systems, work-at-height PPE, and rescue kits on industrial or offshore sites.",
    courseContent: [
      "Rope, kernmantle, and accessory integrity checks",
      "Connector, descender, and harness inspection",
      "Traceability, tagging, and retirement criteria",
      "Compliance documentation and corrective actions",
    ],
    assessmentMethod:
      "Competent-person inspection records with pass/fail status and replacement guidance.",
    heroImage: {
      src: "/RopeStuff.jpg",
      alt: "Rope access kit laid out for inspection",
    },
    icon: Compass,
  },
  {
    title: "Earthmoving Equipment Supply",
    slug: "earthmoving-equipment-supply",
    summary:
      "Supply of earthmoving machinery including dozers, excavators, loaders, and graders for project delivery.",
    description:
      "We support procurement and supply of earthmoving equipment aligned to project scope, with specification checks and logistics coordination for safe site deployment.",
    duration: "Project-based and recurring supply",
    entryRequirements:
      "Construction, mining, and infrastructure teams requiring heavy earthmoving assets.",
    courseContent: [
      "Equipment selection to match ground conditions and production targets",
      "Technical specification and compatibility review",
      "Supply logistics and delivery coordination",
      "Pre-delivery verification and documentation handover",
    ],
    assessmentMethod:
      "Vendor quality checks, delivery verification, and conformity documentation.",
    heroImage: {
      src: "/constructionequipment.webp",
      alt: "Earthmoving equipment on a project site",
    },
    icon: Shovel,
  },
  {
    title: "Safety Equipment Supply",
    slug: "safety-equipment-supply",
    summary:
      "Supply of industrial safety equipment including PPE, fall protection, gas detection, and site safety consumables.",
    description:
      "We source and deliver safety equipment to support compliant operations across lifting, marine, and industrial environments, with traceability and specification matching.",
    duration: "On-demand and contract supply",
    entryRequirements:
      "Organizations standardizing PPE, rescue, and site safety inventories.",
    courseContent: [
      "PPE and fall-arrest consumables",
      "Gas detection and breathing apparatus support items",
      "Rescue and emergency readiness accessories",
      "Specification matching and product documentation",
    ],
    assessmentMethod:
      "Pre-dispatch quality verification and conformity documentation.",
    heroImage: {
      src: "https://www.supplyone.com/wp-content/uploads/2024/06/supplyone-Safety-PPE-1.jpg",
      alt: "Safety equipment staged for deployment",
    },
    icon: ShieldCheck,
  },
]

export const serviceCategories: ServiceCategoryGroup[] = [
  {
    id: "training",
    title: "Training",
    description:
      "LOLER-aligned and inspector programmes covering operators, rigging, planning, and equipment examination skills.",
    subcategories: [
      {
        id: "loler-training",
        title: "LOLER training",
        serviceSlugs: [
          "crane-operator-training",
          "forklift-training",
          "electric-overhead-travelling-crane",
          "banksman-slinging-training",
          "rigging-lifting",
          "lift-planning",
          "work-at-height",
          "appointed-person-lifting-operations",
          "mobile-crane-operation",
          "manual-handling-training",
          "scaffold-erection-inspection-training",
          "rigging-loft-management-equipment-inspection",
        ],
      },
      {
        id: "lifting-equipment-inspector-training",
        title: "Lifting equipment inspector training",
        serviceSlugs: [
          "lifting-accessories-inspection",
          "manual-lifting-machines",
          "powered-lifting-machines",
          "offshore-containers-certification",
        ],
      },
    ],
  },
  {
    id: "inspection",
    title: "Inspection & certification",
    description:
      "Thorough examination, certification, and compliance reporting for lifting, earthmoving, height, rope access, and lifesaving assets.",
    subcategories: [
      {
        id: "inspection-certification",
        title: "Inspection & certification",
        serviceSlugs: [
          "lifting-equipment-inspection-certification",
          "offshore-crane-inspection",
          "earthmoving-equipment-inspection",
          "work-at-height-equipment-inspection",
          "rope-access-kits-inspection",
          "life-rafts-scramble-nets-inspection",
        ],
      },
    ],
  },
  {
    id: "supplies",
    title: "Supplies",
    description:
      "Equipment, accessories, marine assets, safety inventories, and technical manpower to keep operations moving.",
    subcategories: [
      {
        id: "supplies-main",
        title: "Equipment & resources",
        serviceSlugs: [
          "industrial-lifting-equipment-supply",
          "earthmoving-equipment-supply",
          "lifting-accessories-supply",
          "marine-equipment-supply",
          "safety-equipment-supply",
          "technical-manpower-supply",
        ],
      },
    ],
  },
  {
    id: "special",
    title: "Special services",
    description:
      "Rope access, NDT, solar installation, offshore maintenance, contracting, and crane LMI calibration.",
    subcategories: [
      {
        id: "special-main",
        title: "Specialist offerings",
        serviceSlugs: [
          "rope-access-services",
          "non-destructive-testing-services",
          "street-solar-light-installation",
          "marine-maintenance-works",
          "general-contracting-services",
          "crane-lmi-calibration",
        ],
      },
    ],
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}

export function resolveServicesBySlugs(slugs: string[]): Service[] {
  return slugs
    .map((slug) => getServiceBySlug(slug))
    .filter((s): s is Service => Boolean(s))
}
