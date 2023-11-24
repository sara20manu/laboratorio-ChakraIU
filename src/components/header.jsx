import React from "react";
import { Box, Flex, Stack } from "@chakra-ui/react";
import { Button, Heading } from "@chakra-ui/react";
import bgImage from "../images/gax.jpg";

export default function Header() {
  return (
    <Box
      h="37vh"
      bg="gay"
      bgImage={`url(${bgImage})`}
      bgSize="cover"
      bgRepeat="no-repeat"
    >
      <Flex
        direction="column"
        p={["0 10%", null, "0 20%"]}
        alignItems="center"
        justify="center"
        h="100%"
        bg="rgb(0 0 0 / 15%)"
      >
        <Heading
          color="white"
          textTransform="uppercase"
          textAlign="center"
          fontWeight="light"
          letterSpacing="5px"
        >
          NO MAN'S SKY UWU
        </Heading>

        <Stack
          mt="35px"
          spacing="40px"
          w={["100%", null, "auto"]}
          direction={{ base: "column", md: "row" }}
          ss
        >
          <Button
            variant="outline"
            size="lg"
            textTransform="uppercase"
            fontWeight="light"
            borderRadius="0"
            color="white"
            letterSpacing="1px"
            _hover={{ color: "black", bg: "white" }}
          >
            VER PLANETAS
          </Button>

          <Button
            variant="outline"
            size="lg"
            textTransform="uppercase"
            fontWeight="light"
            borderRadius="0"
            color="white"
            letterSpacing="1px"
            _hover={{ color: "black", bg: "white" }}
          >
            VER GUÍAS
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
}
