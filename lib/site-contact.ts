/**
 * Canonical company contact and social links for PCL Limited / Pier Contractors Limited.
 * Update YouTube URL and set showYouTube when the channel is ready.
 */
export const siteContact = {
  phoneDisplay: "01992 576 404",
  /** E.164 for tel: links */
  phoneTel: "+441992576404",
  email: "info@pcl-limited.com",
  address: {
    lines: ["Unit 5, Woodside Industrial Estate", "Epping", "CM16 6LJ", "UK"] as const,
    /** Google Maps search for the registered office */
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Unit+5+Woodside+Industrial+Estate+Epping+CM16+6LJ"
  },
  /**
   * Suggested public-facing hours (Mon–Fri 9–5).
   * Site visits and on-site work are scheduled per project.
   */
  hours: {
    summary: "Monday–Friday, 9am–5pm",
    note: "Standard office hours for enquiries. Site visits and project works are arranged separately."
  },
  social: {
    linkedin: "https://www.linkedin.com/company/pier-contractors-limited",
    facebook: "https://www.facebook.com/PierContractorsLtd",
    x: "https://x.com/PierContractors",
    /** Replace when the live channel URL is confirmed */
    youtube: "https://www.youtube.com/"
  },
  /** Set true when YouTube should appear in the footer */
  showYouTube: false
} as const;
