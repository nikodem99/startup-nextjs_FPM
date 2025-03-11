"use client";
import Breadcrumb from "@/components/Common/Breadcrumb";
import PrivatePolicy from "@/components/PrivatePolicy/PrivatePolicy";
import PrivatePolicyTwo from "@/components/PrivatePolicy/PrivatePolicyTwo";

export default function PrivatePolicyPage() {
  return (
    <>
      <Breadcrumb
        pageName=""
        description=""
      />
      <PrivatePolicy />
      <PrivatePolicyTwo />
    </>
  );
}