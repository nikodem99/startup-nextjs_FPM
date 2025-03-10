
import AboutSectionFour from "@/components/About/AboutSectionFour";
import AdditionalSectionOne from "@/components/Additional/AdditionalSectionOne";
import AdditionalSectionTwo from "@/components/Additional/AdditionalSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pomoc prawna | Fundacja pomagamy cudzoziemcom",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName=""
        description=""
      />
    <AdditionalSectionOne/>
    <AdditionalSectionTwo/>
    </>
  );
};

export default AboutPage;
