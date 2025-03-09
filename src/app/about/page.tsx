import AboutSectionFour from "@/components/About/AboutSectionFour";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionThree from "@/components/About/AboutSectionThree";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "O Nas | Fundacja pomagamy cudzoziemcom",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="O nas"
        description=""
      />
      <AboutSectionThree />
      <AboutSectionFour />
    </>
  );
};

export default AboutPage;
