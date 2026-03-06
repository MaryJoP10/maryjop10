"use client"

import {Navigation} from "@/components/navigation"
import { HeroSection} from "@/components/hero_section";


export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <img src={"https://png.pngtree.com/background/20250709/original/pngtree-anime-girl-cityscape-night-view-beautiful-picture-image_16695392.jpg"}/>
        <img src={"https://png.pngtree.com/background/20250709/original/pngtree-anime-girl-cityscape-night-view-beautiful-picture-image_16695392.jpg"}/>
      </main>
    </>
  );
}
