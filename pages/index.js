import {
  Heading,
  VStack,
  HStack,
  Icon,
  Text,
  Link,
  Avatar
} from '@chakra-ui/react';

import { FaTwitter, FaGithub, } from 'react-icons/fa';

export default function Home() {
  return (
    <VStack align="center" gap="32px" justify="center">
      <Avatar src="/anime-dom.png" size="2xl" />
      <VStack>
        <Heading as="h1">Stas *Teis* Zayets</Heading>
        <Heading size="md" as="h3">DX Engineer & Community creator</Heading>
      </VStack>
      <Text textAlign="center">👋 heyo! My names Domitrius. Ive been a UI/DX Engineer over the past 5 years. Finding solutions while improving someones ability to vist or build websites is my passion. I love video games, anime, and spending my time with those I love. <br /> Lets connect 👇</Text>
      <HStack spacing="20px" justifySelf="center">
        <Link href="https://twitter.com/staszarc" target="_blank">
          <Icon color="blue.200" as={FaTwitter} />
        </Link>
        <Link href="https://github.com/staszarc741" target='_blank'>
          <Icon color="black" as={FaGithub} />
        </Link>
      </HStack>
    </VStack>
  )
}