import Breadcrumb from "@/components/Common/Breadcrumb";
import TipsSectionOne from "@/components/Tips/TipsSectionOne";
import TipsSectionTwo from "@/components/Tips/TipsSectionTwo";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Szkolenia | Fundacja pomagamy cudzoziemcom",
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
  <TipsSectionOne/>
  <TipsSectionTwo/>
    </>
  )
};

export default AboutPage;
