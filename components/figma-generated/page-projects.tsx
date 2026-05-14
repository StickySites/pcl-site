"use client";

import Image from "next/image";
import { Building2, Factory, HardHat, ShieldCheck, Sparkles, Wrench } from "lucide-react";
import { useState } from "react";

const categories = [
  { id: "all", name: "All Projects" },
  { id: "asbestos", name: "Asbestos Removal" },
  { id: "demolition", name: "Demolition" },
  { id: "refurbishment", name: "Refurbishment" },
  { id: "enabling", name: "Enabling Works" },
  { id: "remediation", name: "Remediation" }
];

const projects = [
  {
    id: 1,
    title: "Industrial Warehouse Demolition",
    category: "demolition",
    categoryLabel: "Demolition",
    location: "Manchester",
    duration: "8 weeks",
    description:
      "Complete demolition of 50,000 sq ft industrial warehouse including hazardous material removal.",
    image: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&q=80",
    icon: Factory
  },
  {
    id: 2,
    title: "Commercial Office Refurbishment",
    category: "refurbishment",
    categoryLabel: "Refurbishment",
    location: "London",
    duration: "12 weeks",
    description: "Full interior refurbishment of 30,000 sq ft office space with minimal operational disruption.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    icon: Building2
  },
  {
    id: 3,
    title: "Hospital Asbestos Remediation",
    category: "asbestos",
    categoryLabel: "Asbestos Removal",
    location: "Birmingham",
    duration: "6 weeks",
    description:
      "Licensed asbestos removal from occupied hospital facility with stringent infection control protocols.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    icon: ShieldCheck
  },
  {
    id: 4,
    title: "Retail Park Enabling Works",
    category: "enabling",
    categoryLabel: "Enabling Works",
    location: "Leeds",
    duration: "10 weeks",
    description: "Site preparation and structural alterations for major retail development.",
    image: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=800&q=80",
    icon: HardHat
  },
  {
    id: 5,
    title: "Manufacturing Facility Strip Out",
    category: "demolition",
    categoryLabel: "Demolition",
    location: "Sheffield",
    duration: "5 weeks",
    description:
      "Complete strip out of former manufacturing facility including machinery removal and disposal.",
    image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&q=80",
    icon: Wrench
  },
  {
    id: 6,
    title: "Laboratory remediation",
    category: "remediation",
    categoryLabel: "Remediation",
    location: "Cambridge",
    duration: "4 weeks",
    description: "Specialist remediation, decontamination, and asbestos removal from a research laboratory facility.",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80",
    icon: Sparkles
  }
];

export function PageProjects() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory);

  return (
    <>
      <section className="bg-black py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-4xl font-bold text-white sm:text-5xl">Our Projects</h1>
            <p className="text-xl text-gray-300">
              Delivering complex industrial projects across the UK with uncompromising safety standards and technical
              excellence.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setActiveCategory(category.id)}
                  className={`rounded-full px-5 py-2.5 font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${
                    activeCategory === category.id
                      ? "bg-brand text-brand-foreground"
                      : "bg-muted text-black hover:bg-gray-300"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-3 flex items-center gap-2">
                    <project.icon className="h-5 w-5 text-brand" />
                    <span className="text-sm font-semibold text-brand">{project.categoryLabel}</span>
                  </div>
                  <h3 className="mb-2 font-bold text-black">{project.title}</h3>
                  <p className="mb-4 text-sm text-muted-foreground">{project.description}</p>
                  <div className="flex items-center justify-between border-t border-border pt-4 text-sm text-muted-foreground">
                    <span>{project.location}</span>
                    <span>{project.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 ? (
            <div className="py-12 text-center text-muted-foreground">
              <p>No projects found in this category.</p>
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
}
