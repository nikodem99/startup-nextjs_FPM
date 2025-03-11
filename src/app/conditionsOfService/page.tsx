"use client";
import Breadcrumb from "@/components/Common/Breadcrumb";
import ConditionsOfService from "@/components/ConditionsOfService/ConditionsOfService";
import ConditionsOfServiceTwo from "@/components/ConditionsOfService/ConditionsOfServiceTwo";

export default function ConditionsOfServicePage() {
  return (
    <>
      <Breadcrumb
        pageName=""
        description=""
      />
      <ConditionsOfService/>
      <ConditionsOfServiceTwo />
    </>
  );
}
