"use client"

import Header from "@/components/header";
import AboutUs from "@/components/about-us";
import HomepageComponent from "@/components/homepage";


export default function HomePage() {
  return (
    <div className="caps">
        <Header/>
        <HomepageComponent/>
        <AboutUs/>
    </div>
  )
}