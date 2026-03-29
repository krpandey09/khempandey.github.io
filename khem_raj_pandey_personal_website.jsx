import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, MapPin, ShieldCheck, BriefcaseBusiness, Award, GraduationCap, Database, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const experience = [
  {
    role: "General Manager — Internal Audit",
    company: "Golyan Group, Kathmandu, Nepal",
    period: "Nov 2022 – Present",
    points: [
      "Lead risk-based internal audits across group companies, covering operational, financial, and compliance processes.",
      "Drive risk management, process improvement, and re-engineering initiatives.",
      "Led SAP S/4HANA implementation across 8 business verticals and 50+ companies as Project Manager, partnering with PwC to embed automated controls, audit trails, and compliance frameworks.",
      "Deliver MIS reporting and management analytics to support senior leadership decisions.",
    ],
  },
  {
    role: "Associate Vice President — Internal Audit",
    company: "SREI Equipment Finance Ltd, India",
    period: "Jul 2017 – Nov 2022",
    points: [
      "Supported the Head of Internal Audit across annual planning, execution, reporting, and Audit Committee presentations.",
      "Conducted audits across credit, sourcing, collections, legal, expenses, buyback, subvention, and IT processes.",
      "Led risk-based audits across 100+ branches pan-India, including regional and zonal offices.",
      "Handled AML/KYC reviews, regulatory compliance assessments, RBI reporting, and fraud investigations.",
    ],
  },
  {
    role: "Senior Manager — Internal Audit",
    company: "Kotak Mahindra Bank, India",
    period: "Aug 2014 – Jul 2017",
    points: [
      "Performed internal audits of branches pan-India, retail asset and liability portfolios.",
      "Conducted IT audits, housing loans, car finance, loans against deposits, and compliance audits.",
      "Used data analysis to identify high-risk areas as part of offsite monitoring.",
    ],
  },
  {
    role: "FI Consultant — SAP",
    company: "Tata Consultancy Services (TCS), India",
    period: "Apr 2013 – Aug 2014",
    points: [
      "Supported SAP FI implementation, rollout, and post-go-live support.",
      "Worked with finance and audit stakeholders to align system configuration with control and reporting requirements.",
    ],
  },
  {
    role: "Industrial Trainee — Finance",
    company: "Bharat Petroleum Corporation Ltd (BPCL), India",
    period: "Mar 2012 – Mar 2013",
    points: [
      "Conducted procurement tender evaluations and commercial assessments of vendors.",
      "Performed GL reviews and monthly financial analysis.",
      "Prepared a finance handbook for site engineers to standardize financial and control processes.",
    ],
  },
];

const competencies = [
  "Risk-Based Internal Audit",
  "Enterprise Risk Management",
  "Fraud Investigations",
  "AML/KYC & Compliance",
  "Audit Committee Reporting",
  "Process Re-engineering",
  "Data Analytics & Reporting",
  "SAP S/4HANA Controls",
  "IT Audits & ITGC",
];

const achievements = [
  "Led SAP S/4HANA implementation as Project Manager for a diversified group spanning 8+ business verticals and 50+ companies.",
  "Identified revenue leakage and control gaps, driving corrective actions and operational improvements.",
  "Automated internal audit processes to improve audit coverage, consistency, and efficiency.",
  "Conducted complex fraud risk assessments and forensic investigations across banking and NBFC operations.",
  "Recognized with a ‘Shabash Card’ for contribution to process improvement initiatives.",
];

const SectionTitle = ({ eyebrow, title, subtitle }) => (
  <div className="mb-8">
    <div className="text-sm font-semibold tracking-[0.2em] text-slate-500 uppercase">{eyebrow}</div>
    <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">{title}</h2>
    {subtitle ? <p className="mt-3 max-w-3xl text-slate-600 text-base md:text-lg">{subtitle}</p> : null}
  </div>
);

const Stat = ({ label, value }) => (
  <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
    <div className="text-3xl font-bold text-slate-900">{value}</div>
    <div className="mt-1 text-sm text-slate-500">{label}</div>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(15,23,42,0.06),transparent_30%),linear-gradient(to_bottom,#f8fafc,#eef2ff_45%,#f8fafc)] text-slate-900">
      <main className="mx-auto max-w-7xl px-4 py-6 md:px-8 md:py-10">
        <section className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white/90 shadow-[0_20px_80px_rgba(15,23,42,0.08)] backdrop-blur">
          <div className="grid gap-0 lg:grid-cols-[1.3fr_0.9fr]">
            <div className="p-6 md:p-10 lg:p-12">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex flex-wrap items-center gap-2">
                  <Badge className="rounded-full px-3 py-1 text-sm bg-slate-900 text-white hover:bg-slate-900">
                    CA | CIA | Internal Audit Leader
                  </Badge>
                  <Badge variant="secondary" className="rounded-full px-3 py-1 text-sm">
                    Kathmandu, Nepal
                  </Badge>
                </div>

                <h1 className="mt-5 text-4xl font-black tracking-tight md:text-6xl">
                  CA Khem Raj Pandey
                </h1>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
                  Senior Internal Audit and Risk Professional with 13+ years of experience across banking, NBFCs, energy, and diversified conglomerates in India and Nepal.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Button className="rounded-full px-5">
                    <Mail className="mr-2 h-4 w-4" /> Contact
                  </Button>
                  <Button variant="outline" className="rounded-full px-5">
                    <Linkedin className="mr-2 h-4 w-4" /> LinkedIn Profile
                  </Button>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                  <Stat label="Years of experience" value="13+" />
                  <Stat label="Companies / groups impacted" value="50+" />
                  <Stat label="Business verticals" value="8" />
                  <Stat label="Countries worked in" value="2" />
                </div>
              </motion.div>
            </div>

            <div className="border-t lg:border-t-0 lg:border-l border-slate-200 bg-slate-950 p-6 md:p-10 lg:p-12 text-white">
              <div className="flex h-full flex-col justify-between gap-6">
                <div>
                  <div className="text-sm font-semibold tracking-[0.2em] text-slate-400 uppercase">Profile Snapshot</div>
                  <p className="mt-4 text-xl leading-8 text-slate-200">
                    Expertise in risk-based internal audit, fraud risk management, AML/KYC, ERM, IT audits, and SAP controls.
                  </p>

                  <div className="mt-8 space-y-4">
                    <div className="flex items-center gap-3 text-slate-200">
                      <Mail className="h-5 w-5 text-slate-400" />
                      <span>krpandey09@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-200">
                      <Phone className="h-5 w-5 text-slate-400" />
                      <span>+977-9702037030 | +91-9035010700</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-200">
                      <Linkedin className="h-5 w-5 text-slate-400" />
                      <span>linkedin.com/in/ca-khem-raj-pandey</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="flex items-center gap-3 font-semibold">
                    <ShieldCheck className="h-5 w-5" />
                    Professional Positioning
                  </div>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    A board-ready internal audit leader who combines governance, controls, and data-driven insight with strong execution across complex multi-business environments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-14">
          <SectionTitle
            eyebrow="About"
            title="Executive profile"
            subtitle="A concise, client-facing summary that positions your experience in a clear and modern way."
          />
          <Card className="rounded-[2rem] border-slate-200 shadow-sm">
            <CardContent className="p-6 md:p-8 text-slate-700 leading-8">
              Senior Internal Audit & Risk Professional (CA, CIA) with progressive experience in banking, NBFCs, energy, and diversified family conglomerates in India and Nepal. Strong expertise in risk-based internal audit, AML/KYC, fraud investigations, ERM, and corporate governance, with regular Audit Committee and senior management exposure. Led SAP S/4HANA implementation from a controls and governance standpoint, strengthening automated controls, audit trails, and compliance frameworks.
            </CardContent>
          </Card>
        </section>

        <section className="mt-14">
          <SectionTitle
            eyebrow="Capabilities"
            title="Core competencies"
            subtitle="These are the themes that should be most visible on the homepage of a professional personal website."
          />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {competencies.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <CheckCircle2 className="h-5 w-5 text-slate-900" />
                <span className="text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <SectionTitle
            eyebrow="Experience"
            title="Professional journey"
            subtitle="A clean timeline format helps visitors quickly understand the seniority and scope of your background."
          />
          <div className="space-y-5">
            {experience.map((job) => (
              <Card key={`${job.role}-${job.company}`} className="rounded-[2rem] border-slate-200 shadow-sm">
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-xl font-bold text-slate-900">
                        <BriefcaseBusiness className="h-5 w-5 text-slate-500" />
                        {job.role}
                      </div>
                      <div className="mt-1 text-slate-600">{job.company}</div>
                    </div>
                    <Badge variant="secondary" className="w-fit rounded-full px-3 py-1">
                      {job.period}
                    </Badge>
                  </div>
                  <ul className="mt-5 grid gap-3 md:grid-cols-2">
                    {job.points.map((point) => (
                      <li key={point} className="flex gap-3 text-slate-700 leading-7">
                        <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-slate-500" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mt-14 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <SectionTitle
              eyebrow="Impact"
              title="Selected achievements"
              subtitle="Use this section to show outcomes, not only responsibilities."
            />
            <div className="space-y-3">
              {achievements.map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="flex gap-3">
                    <Award className="mt-1 h-5 w-5 text-slate-900" />
                    <p className="text-slate-700 leading-7">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <SectionTitle
              eyebrow="Education"
              title="Qualifications & tools"
              subtitle="A concise summary of credentials and systems gives the site a strong executive profile."
            />
            <div className="space-y-5">
              <Card className="rounded-[2rem] border-slate-200 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 font-semibold text-slate-900">
                    <GraduationCap className="h-5 w-5" />
                    Education & Certifications
                  </div>
                  <div className="mt-4 space-y-3 text-slate-700 leading-7">
                    <div>Certified Internal Auditor (CIA) – IIA, USA, 2021</div>
                    <div>Chartered Accountant (CA) – ICAI, 2012</div>
                    <div>Bachelor of Commerce (B.Com) – IGNOU, 2012</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-[2rem] border-slate-200 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 font-semibold text-slate-900">
                    <Database className="h-5 w-5" />
                    Systems & Tools
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {[
                      "SAP S/4HANA",
                      "SAP FI",
                      "Oracle",
                      "Ambit",
                      "Newgen",
                      "Tally",
                      "Excel",
                      "Power BI",
                    ].map((tool) => (
                      <Badge key={tool} variant="outline" className="rounded-full px-3 py-1">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="mt-14 mb-4">
          <Card className="overflow-hidden rounded-[2rem] border-slate-200 shadow-sm">
            <CardContent className="grid gap-6 p-6 md:p-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <h3 className="text-2xl font-bold text-slate-900">Ready to make it live</h3>
                <p className="mt-3 max-w-2xl text-slate-600 leading-7">
                  This homepage can be extended into a full personal website with pages for about, experience, achievements, and contact. It is already structured to look polished on desktop and mobile.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                <Button className="rounded-full px-5">
                  <Mail className="mr-2 h-4 w-4" /> Email Me
                </Button>
                <Button variant="outline" className="rounded-full px-5">
                  <MapPin className="mr-2 h-4 w-4" /> Kathmandu, Nepal
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
