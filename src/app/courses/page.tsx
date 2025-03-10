import Breadcrumb from "@/components/Common/Breadcrumb";
import CourseSectionOne from "@/components/Course/CourseSectionOne";
import CourseSectionTwo from "@/components/Course/CourseSectionTwo";

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
  <CourseSectionOne/>
  <CourseSectionTwo/>
    </>
  );
};

export default AboutPage;
