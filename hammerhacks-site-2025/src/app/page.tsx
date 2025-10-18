"use client"

import Header from "@/components/header";
import AboutUs from "@/components/about-us";
import HomepageComponent from "@/components/homepage";
import RecapComponent from "@/components/recap";
import SponsorsComponent from "@/components/sponsors";


export default function HomePage() {
  return (
    <div className="caps">
        <Header/>
        <HomepageComponent/>
        <AboutUs/>
        <RecapComponent/>
        <SponsorsComponent/>
    </div>
  )
}