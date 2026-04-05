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
]
