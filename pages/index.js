import { Box, Container } from "@chakra-ui/react";
import CaptionCarousel from "./Components/Carousel";
import DetailSection from "./Components/Details";

import FeatureSection from "./Components/Features";
import FooterSection from "./Components/Footer";
import HeroSection from "./Components/Hero";
import WithSubnavigation from "./Components/Navbar";
import Space from "./Components/Space";
import Section from "./Components/Section";
export default function Home() {
  return (
    <Box>
      <WithSubnavigation />
      <Section delay={0.1}>
        <HeroSection />
      </Section>
      <CaptionCarousel />

      <Container maxW="container.lg">
        <FeatureSection />
        <Space />
        <DetailSection />
      </Container>
      <FooterSection />
    </Box>
  );
}
