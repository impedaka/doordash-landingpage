import { ReactElement } from "react";
import {
  Box,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Flex,
  Heading,
  Image,
} from "@chakra-ui/react";
import { FcAssistant, FcDonate, FcInTransit } from "react-icons/fc";
import Space from "./Space";

const Feature = ({ title, text, icon }) => {
  return (
    <Stack align={"center"} justify={"center"}>
      <Box align={"center"} justify={"center"} size="sm">
        <Image src={icon} />
        <Heading>{title}</Heading>
        <Text color={"gray.600"}>{text}</Text>
      </Box>
    </Stack>
  );
};

export default function FeatureSection() {
  return (
    <Box p={4}>
      <Space />
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          icon={
            "https://cdn.doordash.com/media/consumer/home/landing/new/ScootScoot.svg"
          }
          title={"Become a Dasher"}
          text={
            "As a delivery driver, you'll make reliable money—working anytime, anywhere."
          }
        />
        <Feature
          icon={
            "https://cdn.doordash.com/media/consumer/home/landing/new/Storefront.svg"
          }
          title={"Become a Partner"}
          text={
            "Grow your business and reach new customers by partnering with us."
          }
        />
        <Feature
          icon={
            "https://cdn.doordash.com/media/consumer/home/landing/new/iphone.svg"
          }
          title={"Try the App"}
          text={
            "Experience the best your neighborhood has to offer, all in one app."
          }
        />
      </SimpleGrid>
      <Space />
    </Box>
  );
}
