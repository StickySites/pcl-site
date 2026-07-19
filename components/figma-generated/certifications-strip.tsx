import Image from "next/image";

type CredentialLogo = { src: string; alt: string };

// Original logos — commented out; replaced with updated set per client brief June 2026
// { src: "/credentials/CHAS_Creditation.png", alt: "CHAS accreditation logo" },
// { src: "/credentials/cyberessentials.png", alt: "Cyber Essentials certification logo" },
// { src: "/credentials/BP_Creditation.png", alt: "Industry accreditation logo" },
// { src: "/credentials/Ciro.png", alt: "Industry affiliation logo" },          // removed: client does not hold this
// { src: "/credentials/AccreditationImage1.png", alt: "Professional accreditation logo, badge one of three" },
// { src: "/credentials/AccreditationImage2.png", alt: "Professional accreditation logo, badge two of three" },
// { src: "/credentials/AccreditationImage3.png", alt: "Professional accreditation logo, badge three of three" },

const credentialLogos: readonly CredentialLogo[] = [
  { src: "/credentials/Home Page - CHAS Veriforce Logo.png",      alt: "CHAS Veriforce accreditation logo" },
  { src: "/credentials/Home Page - SSIP Logo.png",                alt: "SSIP Safety Scheme in Procurement logo" },
  { src: "/credentials/Home Page - Builders Profile Logo.png",    alt: "Builders Profile logo" },
  { src: "/credentials/Home Page - SafeContractor Logo.png",      alt: "SafeContractor approved logo" },
  { src: "/credentials/Home Page - Cyber Essentials Logo.png",    alt: "Cyber Essentials certification logo" },
  { src: "/credentials/Home Page - Constructionline Logo.png",    alt: "Constructionline logo" },
  { src: "/credentials/Home Page - ACAD Logo.png",                alt: "ACAD logo" },
  { src: "/credentials/Home Page - ARCA Logo.png",                alt: "ARCA logo" },
  { src: "/credentials/Home Page - ASESA Logo.png",               alt: "ASESA Asbestos & Environmental Safety Association logo" },
  { src: "/credentials/Home Page - Social Value Logo.png",        alt: "Social Value logo" },
  // ISO badges added per client brief July 2026
  { src: "/credentials/iso-9001-ukas.png",                        alt: "ISO 9001 Quality Management certification" },
  { src: "/credentials/iso-14001-ukas.png",                       alt: "ISO 14001 Environmental Management certification" },
  { src: "/credentials/iso-45001-ukas.png",                       alt: "ISO 45001 Occupational Health & Safety certification" },
];

function LogoCell({ logo }: { logo: CredentialLogo }) {
  return (
    <li className="list-none">
      <div className="relative h-10 w-[6.75rem] shrink-0 transition duration-200 ease-out hover:-translate-y-0.5 sm:h-12 sm:w-[8rem] md:h-14 md:w-[9rem]">
        <Image
          src={logo.src}
          alt={logo.alt}
          fill
          sizes="(max-width: 640px) 108px, (max-width: 768px) 128px, 144px"
          className="object-contain object-center opacity-[0.82] grayscale transition duration-200 ease-out hover:opacity-100 hover:grayscale-0"
        />
      </div>
    </li>
  );
}

export function CertificationsStrip() {
  return (
    <section
      className="border-y border-border bg-muted/45 py-7 sm:py-9"
      aria-labelledby="accreditations-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          id="accreditations-heading"
          className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground sm:mb-7 sm:text-sm"
        >
          Accreditations &amp; certifications
        </h2>
        <div className="overflow-hidden motion-reduce:overflow-x-auto">
          <ul
            className="flex w-max list-none flex-nowrap items-center gap-x-8 sm:gap-x-10 animate-cert-marquee motion-reduce:mx-auto motion-reduce:w-max motion-reduce:max-w-full motion-reduce:animate-none motion-reduce:justify-center hover:[animation-play-state:paused] focus-within:[animation-play-state:paused]"
          >
            {credentialLogos.map((logo) => (
              <LogoCell key={logo.src} logo={logo} />
            ))}
            {credentialLogos.map((logo) => (
              <li key={`${logo.src}-marquee-repeat`} className="list-none motion-reduce:hidden" aria-hidden="true">
                <div className="relative h-10 w-[6.75rem] shrink-0 sm:h-12 sm:w-[8rem] md:h-14 md:w-[9rem]">
                  <Image
                    src={logo.src}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 108px, (max-width: 768px) 128px, 144px"
                    className="object-contain object-center opacity-[0.82] grayscale"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
