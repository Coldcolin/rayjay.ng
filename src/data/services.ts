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
      "Introductory training for personnel with little or no experience in rigging and lifting operations.",
    description:
      "Introductory training for personnel with little or no experience in rigging and lifting operations. Focuses on mechanical lifting equipment such as chain blocks, lever hoists, tirfors, shackles, slings, and wire ropes.",
    duration: "2 days",
    entryRequirements: "None",
    courseContent: [
      "Rigging principles",
      "Hazards and risks",
      "Legislation awareness",
      "Practice of rigging operations",
    ],
    assessmentMethod: "Written exam and practical observation.",
    syllabus: "LEEA Syllabus",
    heroImage: {
      src: "https://www.altrad.com/files/medias/services/4-Mechanical/Lifting%20and%20rigging.jpg",
      alt: "Rigging equipment and lifting slings",
    },
    icon: HardHat,
  },
  {
    title: "Electric Overhead Travelling Crane",
    slug: "electric-overhead-travelling-crane",
    summary:
      "Training for personnel required to operate overhead cranes, delivered on client sites.",
    description:
      "Training for personnel required to operate overhead cranes. Delivered only on client sites.",
    duration: "2–3 days",
    entryRequirements: "None",
    courseContent: [
      "Legislation",
      "Force influences",
      "Load estimation",
      "Center of gravity",
      "Sling configurations",
    ],
    assessmentMethod: "Written exam and practical observation.",
    syllabus: "LEEA Syllabus",
    notes: ["Delivered only on client sites."],
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
      "Hands-on knowledge for Slingers, Signallers, and Riggers working with crane lifting operations.",
    description:
      "Course for personnel working as Slingers/Signallers or Riggers. Provides hands-on knowledge of lifting operations involving cranes.",
    duration: "3 days",
    entryRequirements: "None",
    courseContent: [
      "Duties of a Slinger/Banksman",
      "Safe lifting operations",
      "Accident prevention",
    ],
    assessmentMethod: "Written exam (closed book) and practical observation.",
    syllabus: "LEEA Syllabus",
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
    title: "Rigging Loft Management & Equipment Inspection",
    slug: "rigging-loft-management-equipment-inspection",
    summary:
      "Training for Rigging Loft Controllers on loft setup, management, and equipment organization.",
    description:
      "Designed for individuals managing rigging lofts as Rigging Loft Controllers.",
    duration: "1 day (8 hours)",
    entryRequirements: "None",
    courseContent: [
      "Loft setup",
      "Management skills",
      "Equipment organization",
    ],
    assessmentMethod: "Written test and practical observation.",
    syllabus: "LEEA Syllabus",
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
    title: "Forklift Training",
    slug: "forklift-training",
    summary:
      "Introductory forklift training covering theory, practical skills, and final assessment.",
    description:
      "Introductory forklift training for personnel with no prior experience. Covers theory, practical skills, and final assessment.",
    duration: "2–3 days",
    entryRequirements: "None",
    courseContent: ["Forklift operation", "Safety procedures", "Load handling"],
    assessmentMethod: "Written and practical assessment.",
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
    title: "Lift Planning",
    slug: "lift-planning",
    summary:
      "Course for professionals planning and supervising high-risk lifting operations.",
    description:
      "Course for professionals planning and supervising high-risk lifting operations.",
    duration: "3 days (2 training + 1 assessment)",
    entryRequirements: "None",
    courseContent: [
      "Roles and responsibilities",
      "Crane selection",
      "Site preparation",
      "Lift planning",
      "Calculations",
      "Documentation",
      "Practical lift execution",
    ],
    assessmentMethod: "Written lift plan and supervised practical lift.",
    heroImage: {
      src: "https://primeliftsafetyng.com/wp-content/uploads/2024/05/Lifting-Operation-Planning.png",
      alt: "Engineers reviewing a lift plan on site",
    },
    icon: ClipboardCheck,
  },
]
