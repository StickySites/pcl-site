"use client";

import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+44 (0) 1234 567890", "Mon-Fri, 8am-6pm"]
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@pcllimited.co.uk", "quotes@pcllimited.co.uk"]
  },
  {
    icon: MapPin,
    title: "Head Office",
    details: ["PCL Limited", "United Kingdom"]
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Monday - Friday: 8:00 - 18:00", "Saturday: 9:00 - 13:00"]
  }
];

const serviceOptions = [
  "Asbestos Removal",
  "Demolition & Strip Out",
  "Enabling Works & Structural Alterations",
  "Commercial Refurbishments",
  "Decontamination & Specialist Cleaning",
  "General Enquiry"
];

export function PageContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <>
      <section className="bg-black py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-4xl font-bold text-white sm:text-5xl">Contact Us</h1>
            <p className="text-xl text-gray-300">
              Get in touch with our team to discuss your industrial contracting requirements. We&apos;re here to help
              with expert advice and comprehensive project assessments.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
            <div className="lg:col-span-2">
              <div className="rounded-lg bg-white p-8 shadow-lg">
                <h2 className="mb-6 text-2xl font-bold text-black">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-black">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full rounded border border-border bg-muted px-4 py-3 text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                        placeholder="John Smith"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="mb-2 block text-black">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full rounded border border-border bg-muted px-4 py-3 text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="phone" className="mb-2 block text-black">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full rounded border border-border bg-muted px-4 py-3 text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                        placeholder="+44 1234 567890"
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="mb-2 block text-black">
                        Service Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full rounded border border-border bg-muted px-4 py-3 text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                      >
                        <option value="">Select a service</option>
                        {serviceOptions.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block text-black">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full rounded border border-border bg-muted px-4 py-3 text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                      placeholder="Tell us about your project requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded bg-brand px-6 py-4 font-semibold text-brand-foreground transition-colors hover:bg-brand-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:w-auto"
                  >
                    Send Message
                    <Send className="h-5 w-5" />
                  </button>
                </form>
              </div>
            </div>

            <div className="space-y-6">
              {contactInfo.map((item) => (
                <div key={item.title} className="rounded-lg bg-muted p-6">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand">
                    <item.icon className="h-5 w-5 text-brand-foreground" />
                  </div>
                  <h3 className="mb-2 font-bold text-black">{item.title}</h3>
                  {item.details.map((detail, index) => (
                    <p key={index} className="text-muted-foreground">
                      {detail}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-lg">
            <div className="flex h-96 items-center justify-center bg-gray-300">
              <div className="text-center">
                <MapPin className="mx-auto mb-2 h-12 w-12 text-gray-500" />
                <p className="text-gray-600">Map integration placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
