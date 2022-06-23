import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  Input,
  useBreakpointValue,
  HStack,
} from "@chakra-ui/react";
import { HiOutlineLocationMarker } from "react-icons/hi";

export default function HeroSection() {
  return (
    <Flex
      w={"full"}
      h={"100vh"}
      backgroundImage={
        "url(https://images.wsj.net/im-414406?width=860&height=573)"
      }
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.800, blackAlpha.200)"}
      >
        <Stack maxW={"2xl"} align={"center"} spacing={6}>
          <Text
            color={"white"}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "3xl", md: "6xl" })}
          >
            Restaurants and more, delivered to your door
          </Text>

          <HStack>
            <Input placeholder="Enter your address" bg="white" maxW="lg" />
            <Button colorScheme={"red"}>Submit</Button>
          </HStack>
        </Stack>
      </VStack>
    </Flex>
  );
}
