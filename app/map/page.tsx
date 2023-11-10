"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import dynamic from "next/dynamic";

const PlanzyMap = dynamic(() => import("@/components/Map"), {
  ssr: false,
});

const MapPage = () => {
  return (
    <div className="h-screen">
      <Header backgroundColor="transparent" />
      <PlanzyMap />
      <Footer />
    </div>
  );
};

export default MapPage;
