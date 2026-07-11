import type { Metadata } from "next";
import AboutBanner from "@/components/AboutBanner";
import OurStory from "@/components/OurStory";
import VisionMission from "@/components/VisionMission";
import AchievementsLegal from "@/components/AchievementsLegal";
import TeamCTA from "@/components/TeamCTA";

const SITE_NAME = "[Nama Bisnis Anda]";
const SITE_URL = "https://namabisnis.com";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "Kenali kisah, visi, misi, dan tim di balik perjalanan wisata terpercaya. 10+ tahun pengalaman melayani 5.000+ wisatawan Indonesia.",
  alternates: {
    canonical: `${SITE_URL}/tentang-kami`,
  },
  openGraph: {
    title: `Tentang Kami | ${SITE_NAME}`,
    description:
      "Kenali kisah, visi, misi, dan tim di balik perjalanan wisata terpercaya.",
    url: `${SITE_URL}/tentang-kami`,
  },
  twitter: {
    title: `Tentang Kami | ${SITE_NAME}`,
    description:
      "Kenali kisah, visi, misi, dan tim di balik perjalanan wisata terpercaya.",
  },
};

export default function TentangKamiPage() {
  return (
    <>
      <AboutBanner />
      <OurStory />
      <VisionMission />
      <AchievementsLegal />
      <TeamCTA />
    </>
  );
}
