"use client";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Regulations from "@/components/Regulations/Regulations";
import RegulationsTwo from "@/components/Regulations/RegulationsTwo";


export default function RegulationsPage() {
  return (
    <>
      <Breadcrumb
        pageName=""
        description=""
      />
      <Regulations />
      <RegulationsTwo />
    </>
  );
}
