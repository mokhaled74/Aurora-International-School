// Real school details. Empty values are hidden from the site automatically.
export const site = {
  name: "Aurora International School", // full name — metadata, footer, copyright
  nameAr: "مدرسة أورورا الدولية",
  shortName: "Aurora", // logo mark
  shortNameAr: "أورورا",
  address: "24 Al Nakheel District, Riyadh 12382, Saudi Arabia", // replace with the school's real address
  addressAr: "حي النخيل، الرياض ١٢٣٨٢، المملكة العربية السعودية",
  phone: "+966 11 234 5678",
  email: "admissions@aurora.edu.sa",
  hours: "Sun–Thu, 7:30–16:00",
  hoursAr: "الأحد–الخميس، ٧:٣٠–١٦:٠٠",
  mapEmbed: "", // Google Maps → Share → Embed a map → copy the src="..." URL
  socials: [
    { name: "Instagram", url: "https://instagram.com/auroraschool" },
    { name: "X", url: "https://x.com/auroraschool" },
    { name: "LinkedIn", url: "https://linkedin.com/company/auroraschool" },
  ] as { name: string; url: string }[],
};
