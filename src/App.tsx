import { Button } from "@/components/ui/button"
import { services, type Service } from "@/data/services"
import {
  Anchor,
  ArrowLeft,
  ArrowUpRight,
  BadgeCheck,
  BookCheck,
  CheckCircle2,
  ClipboardCheck,
  Compass,
  Factory,
  Globe,
  Handshake,
  LifeBuoy,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Truck,
  Users,
} from "lucide-react"
import { useEffect, useMemo, useState } from "react"

const coreValues = [
  {
    title: "People First",
    description:
      "We place premium on our human capital both skilled and unskilled before and within the job.",
  },
  {
    title: "Continuous Training",
    description:
      "We train and re-train our workforce on new technologies and safety procedures.",
  },
  {
    title: "Local Content Commitment",
    description:
      "We adhere to local content policies with emphasis on host community development.",
  },
  {
    title: "Modern Infrastructure",
    description:
      "We constantly upgrade facilities, infrastructure, and equipment to achieve our goals.",
  },
  {
    title: "Regulatory Alignment",
    description:
      "We build harmonious relationships with host communities and comply with global standards.",
  },
  {
    title: "QA/QC Discipline",
    description:
      "We focus on quality control, assurance, and innovation to meet customer expectations.",
  },
]

const excellence = [
  {
    title: "Community Relations / CSR",
    description:
      "We maintain MOUs with host communities, provide local employment, and support infrastructure.",
    icon: Handshake,
  },
  {
    title: "Nigeria Content Development",
    description:
      "Our technical crew leads maintenance and repairs locally to prevent downtime.",
    icon: Globe,
  },
  {
    title: "Proactive Crew",
    description:
      "Highly trained teams deliver accurate reporting, risk mitigation, and HSE compliance.",
    icon: Users,
  },
  {
    title: "Fast Mobilization",
    description:
      "Route mapping enables safe, cost-effective mobilization by road, water, or air.",
    icon: Truck,
  },
  {
    title: "Site Facility Readiness",
    description:
      "We provide accommodation, transport, first-aid, and communication support on site.",
    icon: LifeBuoy,
  },
]

const stats = [
  { label: "Indigenous Strength", value: "100% Local Content" },
  { label: "CAC Registration", value: "RC 1621639" },
  { label: "Quality System", value: "ISO 9001:2015 Aligned" },
  { label: "Regional Reach", value: "West Africa Focus" },
]

const projects = [
  {
    title: "Offshore Lifting Inspection Program",
    category: "Marine & Oil",
    image:
      "/offLift.jpeg",
  },
  {
    title: "Heavy Equipment Fleet Audit",
    category: "Construction",
    image:
      "/constructionequipment.webp",
  },
  {
    title: "Instrumentation Calibration Campaign",
    category: "Oil & Gas",
    image:
      "/InstruCal.png",
  },
  {
    title: "Marine Logistics Corridor",
    category: "Logistics",
    image:
      "/MarineLog.png",
  },
  {
    title: "Rope Access Maintenance",
    category: "Industrial",
    image:
      "/RopeStuff.jpg",
  },
  {
    title: "Fabric Maintenance & Refurbishment",
    category: "Infrastructure",
    image:
      "/FabMent.jpeg",
  },
]

const process = [
  {
    title: "Assess & Plan",
    description:
      "We evaluate assets, scope, and risks to build a disciplined execution plan.",
    icon: ClipboardCheck,
  },
  {
    title: "Mobilize",
    description:
      "Route mapping and logistics ensure safe and fast mobilization to site.",
    icon: Compass,
  },
  {
    title: "Execute",
    description:
      "Specialist crews deliver inspections, maintenance, and operations with precision.",
    icon: Factory,
  },
  {
    title: "Assure Quality",
    description:
      "Audits, feedback, and QA/QC controls keep outcomes aligned with standards.",
    icon: BadgeCheck,
  },
]

const navLinks = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "values", label: "Values" },
  { id: "operations", label: "Operations" },
  { id: "quality", label: "Quality" },
]

type NavigateFn = (path: string, sectionId?: string) => void

const getServiceSlug = (pathname: string) => {
  const marker = "/services"
  const index = pathname.indexOf(marker)
  if (index === -1) {
    return null
  }
  const slug = pathname
    .slice(index + marker.length)
    .replace(/^\/+/, "")
    .replace(/\/+$/, "")
  return slug.length > 0 ? slug : null
}

function SiteHeader({
  isDetail = false,
  onNavigate,
}: {
  isDetail?: boolean
  onNavigate?: NavigateFn
}) {
  return (
    <header className="relative">
      <div className="bg-ink-950 text-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-6 py-3 text-xs uppercase tracking-[0.2em] text-white/70">
          <span>rayjay mc ltd</span>
          <span>Marine • Oil & Gas • Construction • Exploration</span>
          <span>Accountable. Trustworthy. Indigenous.</span>
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="flex size-28 shrink-0 items-center justify-center overflow-hidden rounded-2xl">
            <img
              src="/rayjay.png"
              alt="Rayjay Multinational Company Limited logo"
              className="h-full w-full object-contain shadow-soft"
            />
          </div>
          <div>
            <p className="font-display text-lg uppercase tracking-[0.2em]">Rayjay</p>
            <p className="text-xs uppercase tracking-[0.3em] text-ink-800/70">
              Multinational Company Limited
            </p>
          </div>
        </div>
        <nav className="hidden items-center gap-6 text-sm font-medium text-ink-800 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={isDetail ? `/#${link.id}` : `#${link.id}`}
              onClick={(event) => {
                if (!isDetail || !onNavigate) {
                  return
                }
                event.preventDefault()
                onNavigate("/", link.id)
              }}
              className="hover:text-sea-500"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <Button asChild className="bg-sea-600 text-ember-400 shadow-soft hover:bg-sea-700">
          <a href="mailto:info@rayjayng.com?subject=Quotation%20Request">
            Get a Quote
            <ArrowUpRight className="ml-2 size-4" />
          </a>
        </Button>
      </div>
    </header>
  )
}

function ServiceCard({
  service,
  onNavigate,
}: {
  service: Service
  onNavigate: NavigateFn
}) {
  const Icon = service.icon

  return (
    <a
      href={`/services/${service.slug}`}
      onClick={(event) => {
        event.preventDefault()
        onNavigate(`/services/${service.slug}`)
      }}
      className="group relative flex h-full min-h-[240px] flex-col rounded-3xl border border-white/10 bg-white/5 p-6 text-left transition hover:-translate-y-1 hover:border-ember-400/70 hover:bg-white/10"
      aria-label={`View ${service.title} details`}
    >
      <div className="flex items-center gap-3">
        <span className="flex size-11 items-center justify-center rounded-2xl bg-white/10 text-ember-300 group-hover:bg-ember-400 group-hover:text-ink-950">
          <Icon className="size-5" />
        </span>
        <h3 className="text-lg font-semibold">{service.title}</h3>
      </div>
      <div className="mt-3 flex flex-wrap gap-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/60">
        {service.syllabus ? (
          <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1">
            {service.syllabus}
          </span>
        ) : null}
        <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1">
          {service.duration}
        </span>
      </div>
      <p className="mt-4 min-h-[72px] max-h-[96px] translate-y-2 overflow-hidden text-sm leading-relaxed text-white/70 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        {service.summary}
      </p>
      <div className="mt-auto flex items-center justify-between pt-4 text-xs uppercase tracking-[0.3em] text-white/60">
        <span>View Details</span>
        <ArrowUpRight className="size-4 text-ember-300" />
      </div>
    </a>
  )
}

function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid gap-8 rounded-[32px] border border-sea-200 bg-sea-600 p-10 text-white shadow-lift lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-white/70">
            Let’s Work Together
          </p>
          <h2 className="text-balance font-display text-3xl font-semibold uppercase tracking-[0.08em]">
            Ready to mobilize your next project?
          </h2>
          <p className="text-lg text-white/80">
            Partner with Rayjay Multinational Company Limited for reliable
            inspections, logistics, and technical services across West Africa.
          </p>
        </div>
        <div className="flex flex-col justify-between gap-6">
          <div className="rounded-2xl bg-white/15 p-5">
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">
              Contact
            </p>
            <div className="mt-4 space-y-4 text-sm text-white/80">
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 size-4 text-ember-200" />
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                    Number
                  </p>
                  <a
                    href="tel:+2348151201017"
                    className="text-base font-semibold text-white hover:text-white/90"
                  >
                    +234 815 120 1017
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 size-4 text-ember-200" />
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                    Email
                  </p>
                  <a
                    href="mailto:info@rayjayng.com"
                    className="text-base font-semibold text-white hover:text-white/90"
                  >
                    info@rayjayng.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 text-ember-200" />
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                    Address
                  </p>
                  <p className="text-sm text-white/80">
                    No 2 Shell Location Road, Agbada 2 Flow Station, opposite
                    Bolingo, Igwuruta.
                    <span className="block text-white/70">Port Harcourt.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Button asChild className="bg-white text-sea-700 hover:bg-white/90">
            <a href="tel:+2348151201017">
              Schedule a Call
              <ArrowUpRight className="ml-2 size-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

function SiteFooter() {
  return (
    <footer className="border-t border-ink-900/10 bg-white/70 py-8">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 text-sm text-ink-800/70">
        <div className="flex items-center gap-2">
          <Anchor className="size-4 text-ember-400" />
          <span>Rayjay Multinational Company Limited</span>
        </div>
        <span>CAC RC 1621639 • 100% Indigenous • ISO 9001:2015 Aligned</span>
      </div>
    </footer>
  )
}

function ServiceDetailPage({
  service,
  allServices,
  onNavigate,
}: {
  service?: Service
  allServices: Service[]
  onNavigate: NavigateFn
}) {
  const [heroSrc, setHeroSrc] = useState(service?.heroImage.src ?? "")

  useEffect(() => {
    if (service) {
      setHeroSrc(service.heroImage.src)
    }
  }, [service])

  const heroFallback = service
    ? `https://placehold.co/1600x900?text=${encodeURIComponent(service.title)}`
    : ""

  if (!service) {
    return (
      <div className="text-ink-950">
        <SiteHeader isDetail onNavigate={onNavigate} />
        <main className="mx-auto max-w-6xl px-6 py-16">
          <div className="rounded-3xl border border-ink-900/10 bg-white/90 p-10 text-center shadow-soft">
            <p className="text-xs uppercase tracking-[0.4em] text-ink-800/60">
              Service
            </p>
            <h1 className="mt-4 text-balance font-display text-3xl font-semibold uppercase tracking-[0.08em] text-ink-950">
              Service Not Found
            </h1>
            <p className="mx-auto mt-3 max-w-2xl text-lg text-ink-800">
              We couldn’t locate that training service. Browse the catalog below
              or return to the main services list.
            </p>
            <Button
              onClick={() => onNavigate("/", "services")}
              className="mt-6 bg-sea-600 text-ember-200 hover:bg-sea-700"
            >
              Back to Services
              <ArrowUpRight className="ml-2 size-4" />
            </Button>
          </div>
          <div className="mt-10 grid auto-rows-fr gap-6 md:grid-cols-2 xl:grid-cols-3">
            {allServices.map((item) => (
              <ServiceCard
                key={item.slug}
                service={item}
                onNavigate={onNavigate}
              />
            ))}
          </div>
        </main>
        <ContactSection />
        <SiteFooter />
      </div>
    )
  }

  const otherServices = allServices
    .filter((item) => item.slug !== service.slug)
    .slice(0, 6)

  return (
    <div className="text-ink-950">
      <SiteHeader isDetail onNavigate={onNavigate} />
      <main>
        <section className="relative isolate">
          <div className="absolute inset-0">
            <img
              src={heroSrc}
              alt={service.heroImage.alt}
              className="h-full w-full object-cover"
              onError={() => {
                if (heroSrc !== heroFallback) {
                  setHeroSrc(heroFallback)
                }
              }}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950/90 via-ink-950/60 to-transparent" />
          <div className="relative z-10 mx-auto flex min-h-[320px] max-w-6xl flex-col px-6 pb-10 pt-8 md:min-h-[420px]">
            <div className="mt-auto w-full">
              <Button
                variant="outline"
                onClick={() => onNavigate("/", "services")}
                className="mb-6 w-fit border-white/30 text-black hover:border-white/60 hover:bg-white/10"
              >
                <ArrowLeft className="mr-2 size-4 text-black" />
                Back to Services
              </Button>
              <div className="max-w-2xl space-y-4 text-white">
                <div className="flex flex-wrap items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/70">
                  {service.syllabus ? (
                    <span className="rounded-full border border-ember-300/40 bg-ember-300/10 px-3 py-1 text-ember-100">
                      {service.syllabus}
                    </span>
                  ) : null}
                  <span className="rounded-full border border-white/30 bg-white/10 px-3 py-1">
                    Training Program
                  </span>
                </div>
                <h1 className="text-balance font-display text-4xl font-semibold uppercase tracking-[0.06em] text-white md:text-5xl">
                  {service.title}
                </h1>
                <p className="text-lg text-white/80">{service.summary}</p>
                <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-white/70">
                  <span className="rounded-full border border-white/30 bg-white/10 px-3 py-1">
                    Duration: {service.duration}
                  </span>
                  <span className="rounded-full border border-white/30 bg-white/10 px-3 py-1">
                    Entry: {service.entryRequirements}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16 pt-10">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-3xl border border-white/70 bg-white/95 p-8 shadow-lift">
              <p className="text-xs uppercase tracking-[0.4em] text-ink-800/60">
                Course Description
              </p>
              <p className="mt-4 text-lg text-ink-900">{service.description}</p>
              <div className="mt-8">
                <p className="text-xs uppercase tracking-[0.4em] text-ink-800/60">
                  Course Content
                </p>
                <div className="mt-4 grid gap-3 text-sm text-ink-800">
                  {service.courseContent.map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 size-4 text-ember-500" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="rounded-3xl border border-ink-900/10 bg-white/95 p-6 shadow-soft">
                <p className="text-xs uppercase tracking-[0.4em] text-ink-800/60">
                  Program Details
                </p>
                <div className="mt-4 space-y-4 text-sm text-ink-800">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-ink-800/60">
                      Duration
                    </p>
                    <p className="mt-1 text-base font-semibold text-ink-950">
                      {service.duration}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-ink-800/60">
                      Entry Requirements
                    </p>
                    <p className="mt-1 text-base font-semibold text-ink-950">
                      {service.entryRequirements}
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-3xl border border-sea-200 bg-sea-600 p-6 text-white shadow-soft">
                <div className="flex items-center gap-3">
                  <BookCheck className="size-5 text-ember-200" />
                  <h3 className="text-lg font-semibold">Assessment Method</h3>
                </div>
                <p className="mt-3 text-sm text-white/80">
                  {service.assessmentMethod}
                </p>
              </div>
              {service.notes?.length ? (
                <div className="rounded-3xl border border-ember-200 bg-ember-50 p-6 shadow-soft">
                  <p className="text-xs uppercase tracking-[0.4em] text-ink-800/60">
                    Delivery Notes
                  </p>
                  <div className="mt-3 grid gap-2 text-sm text-ink-800">
                    {service.notes.map((note) => (
                      <div key={note} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 size-4 text-ember-500" />
                        <span>{note}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
              <Button
                asChild
                className="bg-sea-600 text-ember-200 shadow-soft hover:bg-sea-700"
              >
                <a
                  href={`mailto:info@rayjayng.com?subject=${encodeURIComponent(
                    `${service.title} Training Request`
                  )}`}
                >
                  Request Training
                  <ArrowUpRight className="ml-2 size-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {otherServices.length > 0 ? (
          <section className="bg-ink-950 py-16 text-white">
            <div className="mx-auto max-w-6xl px-6">
              <div className="flex flex-wrap items-end justify-between gap-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-white/60">
                    Explore More
                  </p>
                  <h2 className="mt-4 text-3xl font-semibold uppercase tracking-[0.08em] text-white">
                    More Training Services
                  </h2>
                </div>
                <Button
                  onClick={() => onNavigate("/", "services")}
                  className="bg-ember-400 text-ink-950 hover:bg-ember-300"
                >
                  View All Services
                  <ArrowUpRight className="ml-2 size-4" />
                </Button>
              </div>
              <div className="mt-10 grid auto-rows-fr gap-6 md:grid-cols-2 xl:grid-cols-3">
                {otherServices.map((item) => (
                  <ServiceCard
                    key={item.slug}
                    service={item}
                    onNavigate={onNavigate}
                  />
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  )
}

export default function App() {
  const [path, setPath] = useState(() => window.location.pathname)

  useEffect(() => {
    const handlePopState = () => {
      setPath(window.location.pathname)
    }
    window.addEventListener("popstate", handlePopState)
    return () => window.removeEventListener("popstate", handlePopState)
  }, [])

  const navigate: NavigateFn = (to, sectionId) => {
    window.history.pushState({}, "", to)
    setPath(to)
    if (sectionId) {
      setTimeout(() => {
        const target = document.getElementById(sectionId)
        if (target) {
          target.scrollIntoView({ behavior: "smooth" })
        }
      }, 80)
      return
    }
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const serviceSlug = useMemo(() => getServiceSlug(path), [path])
  const activeService = useMemo(() => {
    if (!serviceSlug) {
      return undefined
    }
    return services.find((service) => service.slug === serviceSlug)
  }, [serviceSlug, services])

  if (serviceSlug) {
    return (
      <ServiceDetailPage
        service={activeService}
        allServices={services}
        onNavigate={navigate}
      />
    )
  }

  return (
    <div className="text-ink-950">
      <SiteHeader onNavigate={navigate} />

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-20" />
          <div className="absolute -right-24 top-24 size-72 rounded-full bg-ember-200/60 blur-3xl" />
          <div className="absolute -left-20 bottom-10 size-60 rounded-full bg-sea-200/60 blur-3xl" />
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
            <div className="relative z-10 space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-ember-200 bg-ember-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-ember-700">
                <Anchor className="size-4" />
                West Africa Operations
              </div>
              <h1
                className="text-balance font-display text-4xl font-semibold uppercase tracking-[0.06em] text-ink-950 opacity-0 animate-reveal lg:text-6xl"
                style={{ animationDelay: "0.05s" }}
              >
                Reliable Marine, Oil &amp; Gas, Construction &amp; Exploration
                Services Built on Accountability.
              </h1>
              <p
                className="max-w-xl text-lg text-ink-800 opacity-0 animate-reveal"
                style={{ animationDelay: "0.15s" }}
              >
                Rayjay Multinational Company Limited was born out of the demand
                for a quality alternative in specialty service delivery. We are a
                100% indigenous company facilitating local content while solving
                demanding challenges across critical sectors.
              </p>
              <div
                className="flex flex-wrap items-center gap-4 opacity-0 animate-reveal"
                style={{ animationDelay: "0.25s" }}
              >
                <Button asChild className="bg-sea-600 text-ember-400 hover:bg-sea-700">
                  <a href="mailto:info@rayjayng.com?subject=Consultation%20Request">
                    Request a Consultation
                    <ArrowUpRight className="ml-2 size-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-ink-900/20 text-ink-900 hover:border-ember-400 hover:text-ink-950"
                >
                  <a href="#services">View Services</a>
                </Button>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/50 bg-white/80 p-4 shadow-soft opacity-0 animate-reveal"
                    style={{ animationDelay: `${0.35 + index * 0.08}s` }}
                  >
                    <p className="text-xs uppercase tracking-[0.3em] text-ink-800/60">
                      {stat.label}
                    </p>
                    <p className="mt-2 text-lg font-semibold text-ink-950">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative z-10">
              <div className="absolute -top-6 right-8 z-20 flex items-center gap-3 rounded-2xl border border-white/60 bg-white/90 px-4 py-3 text-sm shadow-soft">
                <ShieldCheck className="size-5 text-ember-600" />
                ISO 9001:2015 Requirements Aligned
              </div>
              <div className="relative z-0 overflow-hidden rounded-[32px] border border-white/70 bg-white/80 shadow-lift animate-floaty">
                <img
                  src="/hero.png"
                  alt="Industrial operations"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="group absolute -bottom-10 left-6 overflow-hidden rounded-2xl border border-white/90 bg-white/95 shadow-lift backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:border-sea-200/70">
                <div className="absolute -right-6 -top-6 size-20 rounded-full bg-gradient-to-br from-sea-500/10 to-ember-500/5" />
                <div className="relative flex items-start gap-4 p-5">
                  <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-sea-500/20 to-sea-600/10 text-sea-600 ring-1 ring-sea-500/15">
                    <BadgeCheck className="size-7" strokeWidth={2.5} />
                  </div>
                  <div className="min-w-0 pt-0.5">
                    <p className="font-mono text-2xl font-bold tracking-tight text-ink-950">
                      RC 1621639
                    </p>
                    <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-sea-600">
                      CAC Verified · Nigeria
                    </p>
                    <p className="mt-2.5 text-xs leading-relaxed text-ink-600/70">
                      Corporate Affairs Commission
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.4em] text-ink-800/60">
                Introduction
              </p>
              <h2 className="text-balance font-display text-3xl font-semibold uppercase tracking-[0.08em] text-ink-950">
                A trusted partner for complex operations across marine and
                industrial sectors.
              </h2>
              <p className="text-lg text-ink-800">
                With a multinational perspective, Rayjay Multinational Company
                Limited delivers accountable, trustworthy service delivery
                across West Africa. Our teams focus on operational efficiency,
                proactive planning, and local content development to keep
                projects on track.
              </p>
              <div className="flex flex-wrap gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-ink-800/70">
                <span className="rounded-full border border-ink-900/10 bg-white px-4 py-2">
                  Marine
                </span>
                <span className="rounded-full border border-ink-900/10 bg-white px-4 py-2">
                  Oil &amp; Gas
                </span>
                <span className="rounded-full border border-ink-900/10 bg-white px-4 py-2">
                  Construction
                </span>
                <span className="rounded-full border border-ink-900/10 bg-white px-4 py-2">
                  Exploration
                </span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-3xl border border-ember-100 bg-white/90 p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-ember-200/80 hover:shadow-lift">
                <p className="text-xs uppercase tracking-[0.3em] text-ink-800/60">
                  Vision
                </p>
                <p className="mt-3 text-lg font-semibold text-ink-950">
                  To be an accomplished standpoint for accountability and
                  trustworthy service delivery across West Africa.
                </p>
              </div>
              <div className="rounded-3xl border border-sea-100 bg-white/90 p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-sea-200/80 hover:shadow-lift">
                <p className="text-xs uppercase tracking-[0.3em] text-ink-800/60">
                  Mission
                </p>
                <p className="mt-3 text-lg font-semibold text-ink-950">
                  Deploy quality, reliable, and effective services leveraging
                  technology and innovation in conformity with ISO 9001:2015
                  requirements and best practices.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="bg-ink-950 py-16 text-white">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-white/60">
                  Services
                </p>
                <h2 className="mt-4 text-3xl font-semibold uppercase tracking-[0.08em] text-white">
                  LEEA-aligned lifting and safety training programs.
                </h2>
              </div>
              <div className="flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-ember-200">
                <span className="inline-flex size-2 rounded-full bg-ember-300" />
                Industry-ready training delivery
              </div>
            </div>
            <div className="mt-10 grid auto-rows-fr gap-6 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service) => (
                <ServiceCard
                  key={service.slug}
                  service={service}
                  onNavigate={navigate}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-ink-800/60">
                Projects
              </p>
              <h2 className="mt-4 text-3xl font-semibold uppercase tracking-[0.08em] text-ink-950">
                Recent operations across marine, construction, and industrial assets.
              </h2>
            </div>
            {/* <Button
              variant="outline"
              className="border-ink-900/20 text-ink-900 hover:border-ember-400 hover:text-ink-950"
            >
              View All Projects
            </Button> */}
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group overflow-hidden rounded-3xl border border-ink-900/10 bg-white/90 shadow-soft"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-ink-950/10 to-transparent" />
                  <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-ink-900">
                    {project.category}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-3 p-6">
                  <h3 className="text-lg font-semibold text-ink-950">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="size-5 text-ember-400" />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="values" className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.4em] text-ink-800/60">
                Core Values
              </p>
              <h2 className="text-balance font-display text-3xl font-semibold uppercase tracking-[0.08em] text-ink-950">
                Values that drive performance, safety, and accountability.
              </h2>
              <p className="text-lg text-ink-800">
                Our values guide how we develop people, maintain compliance, and
                build long-term relationships in every host community.
              </p>
            </div>
            <div className="grid gap-5">
              {coreValues.map((value, index) => (
                <div
                  key={value.title}
                  className="group rounded-2xl border border-ink-900/10 bg-white/90 p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-ember-200/80 hover:shadow-lift"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex size-9 items-center justify-center rounded-full bg-ember-100 text-sm font-semibold text-ember-700 transition group-hover:bg-ember-200 group-hover:text-ember-800">
                      {index + 1}
                    </span>
                    <h3 className="text-lg font-semibold text-ink-950">
                      {value.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-ink-800">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="operations" className="bg-sea-50/60 py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="space-y-6">
                <p className="text-xs uppercase tracking-[0.4em] text-ink-800/60">
                  Operational Excellence
                </p>
                <h2 className="text-balance font-display text-3xl font-semibold uppercase tracking-[0.08em] text-ink-950">
                  Proactive crew, fast mobilization, and local technical
                  strength.
                </h2>
                <p className="text-lg text-ink-800">
                  Rayjay Multinational emphasizes a single source of
                  responsibility from project conception to completion. Our
                  project coordinators and local technical teams ensure minimal
                  downtime, accurate reporting, and responsive decision-making.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {process.map((step) => {
                    const Icon = step.icon
                    return (
                      <div
                        key={step.title}
                        className="group rounded-2xl border border-ink-900/10 bg-white/90 p-4 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-ember-200/80 hover:shadow-lift"
                      >
                        <div className="flex items-center gap-3">
                          <span className="flex size-9 items-center justify-center rounded-xl bg-ember-100 text-ember-700 transition group-hover:bg-ember-200 group-hover:text-ember-800">
                            <Icon className="size-4" />
                          </span>
                          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-ink-800">
                            {step.title}
                          </h3>
                        </div>
                        <p className="mt-3 text-sm text-ink-800/80">
                          {step.description}
                        </p>
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className="space-y-5">
                {excellence.map((item) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={item.title}
                      className="group rounded-3xl border border-white/70 bg-white/90 p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-sea-200/80 hover:shadow-lift"
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex size-10 items-center justify-center rounded-2xl bg-sea-100 text-sea-700 transition group-hover:bg-sea-200 group-hover:text-sea-800">
                          <Icon className="size-5" />
                        </span>
                        <h3 className="text-lg font-semibold text-ink-950">
                          {item.title}
                        </h3>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-ink-800/80">
                        {item.description}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="quality" className="bg-ink-950 py-16 text-white">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="space-y-6">
                <p className="text-xs uppercase tracking-[0.4em] text-white/60">
                  Quality &amp; Safety
                </p>
                <h2 className="text-balance font-display text-3xl font-semibold uppercase tracking-[0.08em] text-white">
                  Quality management aligned with ISO 9001:2015 requirements.
                </h2>
                <p className="text-lg text-white/70">
                  We operate a disciplined Quality Management System focused on
                  internal audits, management reviews, and continuous
                  improvement. Our policy emphasizes leadership responsibility,
                  employee involvement, and cooperation with regulatory bodies.
                </p>
                <div className="grid gap-3 text-sm text-white/70">
                  {[
                    "Scheduled internal audits and periodic management reviews",
                    "Independent external audits by certifying authorities and customers",
                    "Regular review of quality objectives and customer feedback",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-1 size-4 text-ember-300" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="size-6 text-ember-300" />
                  <h3 className="text-xl font-semibold">Workplace Violence Policy</h3>
                </div>
                <p className="text-sm leading-relaxed text-white/70">
                  Rayjay Multinational Company Limited is committed to a work
                  environment free from violence. We investigate concerns
                  promptly, prohibit weapons on company property, and safeguard
                  employees who report incidents.
                </p>
                <div className="space-y-3 text-sm text-white/70">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 size-4 text-ember-300" />
                    <span>Immediate response to Q/HSE reports and risk mitigations</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 size-4 text-ember-300" />
                    <span>Clear accountability and single point of responsibility</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>

      <SiteFooter />
    </div>
  )
}
