export type ServiceFaqItem = {
  question: string;
  answer: string;
};

export const homeFaqItems: readonly ServiceFaqItem[] = [
  {
    question: "Which areas do you cover?",
    answer:
      "We work across the UK on industrial, commercial, and institutional sites. Programme and mobilisation are planned around your location, access, and any site-specific constraints."
  },
  {
    question: "How do we start a conversation about our site?",
    answer:
      "The best first step is to get in touch by phone or email with a short description of the site and what you need (survey, removal, demolition, refurbishment, or remediation). We will advise on proportionate next steps and who should attend an initial discussion."
  },
  {
    question: "Are you licensed for asbestos removal?",
    answer:
      "Yes. Asbestos removal is delivered under HSE licensing with the documentation, air monitoring, and clearances you would expect on regulated work. We can explain how that applies to your building and occupancy."
  },
  {
    question: "Can you work in occupied buildings?",
    answer:
      "Often yes. Many of our services are planned for phased or occupied sites, with segregation, noise and dust controls, and agreed working hours. The approach is agreed with you and documented before work starts."
  },
  {
    question: "What information helps you quote or programme work?",
    answer:
      "Drawings or surveys if you have them, known hazards, your preferred programme window, and any access or operational constraints. If you do not have full information yet, we can still help you scope proportionate investigations."
  },
  {
    question: "Under CDM, can you act as principal contractor?",
    answer:
      "Where it matches the duties and your procurement model, we can take principal contractor responsibilities with an appropriate construction phase plan, welfare, and coordination arrangements. On larger schemes we are also comfortable working within your existing principal contractor team."
  },
  {
    question: "What pre-qualification or supply-chain information do you hold?",
    answer:
      "We maintain the accreditations, insurances, and SSIP-type assessments clients typically request, and we can complete PQQ or tender data sheets to your format. If you need project-specific references, we will agree redacted examples subject to confidentiality."
  },
  {
    question: "Do you carry professional indemnity and employer's liability insurance?",
    answer:
      "Yes. We hold the insurances appropriate to the scale and nature of our works, and we can issue schedules and endorsements for named projects when your contract requires them."
  }
];

export const asbestosRemovalFaqItems: readonly ServiceFaqItem[] = [
  {
    question: "When is licensed asbestos removal required?",
    answer:
      "Licensed removal is required for higher-risk asbestos-containing materials and notifiable work as defined under UK law. We confirm the correct licensing route from your survey and risk assessment before we programme any removal."
  },
  {
    question: "Do you provide four-stage clearances?",
    answer:
      "Yes. Where clearance is part of the scope, we work with accredited analysts for air monitoring and four-stage clearance in line with HSE guidance, with certificates issued for handover."
  },
  {
    question: "Can asbestos removal continue while other trades are on site?",
    answer:
      "Sometimes, with strict segregation, permits, and agreed sequencing. We plan containment, air management, and decontamination routes so other works can continue only where it is safe and proportionate."
  },
  {
    question: "What happens to asbestos waste?",
    answer:
      "Waste is double-bagged or packed as required, labelled, and consigned through licensed disposal routes with full traceability and documentation for your records."
  },
  {
    question: "How long does a typical removal package take?",
    answer:
      "Duration depends on ACM type, extent, access, and whether the building is occupied. After review of your survey and site constraints, we provide a programme with realistic milestones and hold points for clearance."
  },
  {
    question: "Do we need a refurbishment or demolition survey before you can firm up the price?",
    answer:
      "For notifiable or higher-risk work, a suitable survey is essential to define scope, access, and sequencing. We can work from an existing report where it is recent and representative, or we will flag where a refurbishment or demolition survey should be updated before we fix the commercial proposal."
  },
  {
    question: "Can you reinstate linings and fire compartmentation after removal?",
    answer:
      "Yes, where that is in scope. We agree the specification with you and your fire engineer if required, then programme first fix before decoration or follow-on trades, with photographs and inspection records captured for O&M handover."
  },
  {
    question: "What reassurance monitoring is available during works?",
    answer:
      "Beyond mandatory four-stage clearance, we can arrange reassurance or background air monitoring through accredited laboratories where your risk assessment or occupation profile calls for additional evidence for building users."
  }
];

export const demolitionFaqItems: readonly ServiceFaqItem[] = [
  {
    question: "What is the difference between strip out and full demolition?",
    answer:
      "Strip out usually removes finishes, M&E, and non-structural elements while retaining the frame or shell. Full demolition removes the structure to agreed levels, often with utilities isolated and neighbouring properties protected. We scope the right option for your site."
  },
  {
    question: "How do you control dust, noise, and vibration?",
    answer:
      "We agree limits and monitoring with you and the local authority where required, then implement suppression, screening, sequencing, and, where appropriate, vibration monitoring so impacts stay within agreed parameters."
  },
  {
    question: "Can you retain a façade or party wall?",
    answer:
      "Yes, where structurally viable. We work from engineer-approved retention schemes, temporary works, and sequenced demolition so retained elements and neighbours remain protected."
  },
  {
    question: "Who produces the demolition documentation?",
    answer:
      "We prepare or contribute to pre-demolition information, method statements, and risk assessments under CDM, aligned with your principal designer and principal contractor where applicable."
  },
  {
    question: "How is waste from demolition handled?",
    answer:
      "We segregate materials for reuse and recycling where practical, with remaining arisings routed through licensed carriers and disposal sites, supported by waste transfer notes and reporting."
  },
  {
    question: "Is a pre-demolition asbestos survey always needed?",
    answer:
      "Best practice and HSE guidance expect a suitable survey where asbestos could be disturbed during demolition. We review what you hold and advise on gaps, then align removal or encapsulation with the demolition sequence so the site stays lawful and controlled."
  },
  {
    question: "How are unexpected finds handled once demolition starts?",
    answer:
      "We stop the affected area, reassess, and notify you immediately. The site is secured with revised controls until any additional testing, removal, or engineered solution is agreed, with all changes recorded in the site file."
  },
  {
    question: "Do you coordinate temporary works with structural engineers?",
    answer:
      "Yes. Propping, retention schemes, and crane or plant foundations are designed by suitable engineers, installed under inspection regimes, and struck only when sign-off criteria are met."
  }
];

export const enablingWorksFaqItems: readonly ServiceFaqItem[] = [
  {
    question: "What counts as enabling works and structural alterations?",
    answer:
      "Typical enabling works and structural alterations include isolations and diversions, hoarding, temporary works, structural openings, ground preparation, and logistics set-up so main construction or refurbishment can start safely and on programme."
  },
  {
    question: "How do enabling works and structural alterations interface with the main contractor?",
    answer:
      "We agree handover criteria, tolerances, and programme slots with your main contractor or client team, then document completions so follow-on trades have a clear baseline."
  },
  {
    question: "Can you work to a fixed mobilisation date?",
    answer:
      "Yes. We build programmes from your gate date backwards, including lead times for design checks, permits, and any early orders, and flag dependencies early if they could affect the date."
  },
  {
    question: "Do you carry out utility surveys and isolations?",
    answer:
      "We coordinate with statutory undertakers and your survey information to plan isolations, supports, and diversions. Field work follows agreed permits and lock-out procedures."
  },
  {
    question: "What evidence do we receive at handover?",
    answer:
      "You receive agreed handover packs: completion records, test certificates where applicable, as-built notes for openings and temporary works removal, and any O&M inputs your contract requires."
  },
  {
    question: "Can you install acoustic or dust hoarding while the building remains occupied?",
    answer:
      "Yes. We design hoarding to your performance brief—including fire rating where required—then install with minimal disruption, agreed delivery slots, and clear sign-off for handover to follow-on packages."
  },
  {
    question: "Who leads traffic management and any highway licences?",
    answer:
      "We split responsibility by contract, but we routinely prepare TMPs, coordinate Chapter 8 signing, and support you with local authority applications where enabling works and structural alterations require road space or abnormal loads."
  },
  {
    question: "Can enabling works and structural alterations include asbestos or soft strip ahead of the main shell package?",
    answer:
      "Often yes. We programme controlled strip-out, waste segregation, and licensed removals where required, then hand over a clean baseline with utilities isolated and penetrations recorded for the principal contractor."
  }
];

export const refurbishmentFaqItems: readonly ServiceFaqItem[] = [
  {
    question: "Can you refurbish while we stay operational?",
    answer:
      "Often yes. We programme phased works, out-of-hours activity, and segregated routes so offices, campuses, or housing blocks can keep functioning, with noise and dust controls agreed in advance."
  },
  {
    question: "Do you deliver Cat A, Cat B, or both?",
    answer:
      "We deliver both, either as a single package or in stages. Cat A typically establishes core services and shell readiness; Cat B tailors space to your teams. We align packages to your lease and fit-out strategy."
  },
  {
    question: "How do you manage MEP coordination on site?",
    answer:
      "We run coordinated surveys and clash checks with your designers, hold installation quality reviews, and sequence first and second fix so commissioning and handover stay on track."
  },
  {
    question: "What snagging and handover support do you provide?",
    answer:
      "We maintain structured snagging lists, agree priority defects, and support O&M compilation, training, and witness testing so you receive a controlled handover rather than an open-ended list."
  },
  {
    question: "Can you work within listed building or landlord constraints?",
    answer:
      "Yes. We are used to landlord approvals, heritage conditions, and tenant lease requirements, and we build those constraints into programmes, specifications, and inspection and test plans."
  },
  {
    question: "Do you deliver education and social housing refurbishment?",
    answer:
      "Yes. We align programmes with term dates, exam periods, and safeguarding protocols on schools and colleges, and we plan resident communications, decants, and communal access on housing estates so works stay controlled and predictable."
  },
  {
    question: "How do you approach fire stopping and passive fire protection?",
    answer:
      "We work to third-party-tested detail libraries or project-specific fire strategy, maintain penetration registers, photograph critical nodes, and coordinate witness inspections with building control or your clerk of works before services are buried."
  },
  {
    question: "Can you target BREEAM or SKA criteria on a fit-out?",
    answer:
      "Where your brief includes sustainability credits, we align waste reporting, responsibly sourced materials, and indoor air quality measures with the assessor's methodology so evidence is captured during the works rather than reconstructed afterwards."
  },
  {
    question: "What defect liability arrangements do you offer?",
    answer:
      "We follow the defect period set out in your contract—commonly 12 months after practical completion—and operate a structured defects process with agreed response times and revisit dates until the list is closed out."
  }
];

export const remediationFaqItems: readonly ServiceFaqItem[] = [
  {
    question: "What types of remediation do you undertake?",
    answer:
      "We undertake industrial and environmental remediation and clearance where hazards or sensitive environments require controlled methods, containment, validation, and documented sign-off. Scope is always agreed from risk and survey data."
  },
  {
    question: "How is containment and validation planned?",
    answer:
      "We define containment boundaries, negative pressure or equivalent controls, cleaning sequences, and sampling or testing criteria with you and any specialist consultants, then record outcomes for sign-off."
  },
  {
    question: "Can you work in laboratories or healthcare settings?",
    answer:
      "Where the scope requires it, we align with infection control, gowning, and clean/dirty zoning rules for your facility, with RAMS written around your operational protocols."
  },
  {
    question: "What documentation do we receive after completion?",
    answer:
      "You receive the agreed validation pack: certificates, test results, waste documentation where relevant, and formal clearance statements aligned with your regulator or internal QA requirements."
  },
  {
    question: "How do remediation programmes align with wider projects?",
    answer:
      "We link hold points and reoccupation criteria to your wider programme so follow-on trades or commissioning only start once agreed clearance milestones are met."
  },
  {
    question: "How is validation demonstrated after excavation or treatment?",
    answer:
      "We agree validation criteria up front—chemical or geotechnical testing grids, leachate monitoring, or vapour checks as appropriate—then carry out sampling or commissioning so you receive a clear statement of compliance against the agreed remedial objectives."
  },
  {
    question: "Can you support emergency spills or contamination incidents?",
    answer:
      "We can mobilise specialist resources on agreed terms to contain spread, characterise material, remove or stabilise arisings, and document waste movements, always with regulator engagement where your environmental permit or duty of care requires it."
  },
  {
    question: "How is reinstatement agreed after remediation works?",
    answer:
      "Reinstatement levels, surfaces, and drainage are agreed with you and your engineer as part of the remedial verification plan, with agreed materials and placement records so the site can be handed to permanent construction or landscaping without ambiguity."
  }
];
