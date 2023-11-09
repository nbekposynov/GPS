'use client'

import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from '@chakra-ui/react'
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from 'react-icons/md'
import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs'

export default function Contact() {
  return (
    <Container bg="#ffffff" maxW="full" mt={0} centerContent overflow="hidden">
      <Flex>
        <Box
          bg="#06cb6d"
          color="white"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}>
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading width='400px'><center>Наши Контакты</center></Heading>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems="flex-start">
                      <Button
                        size="md"
                        height="48px"
                        width="400px"
                        variant="ghost"
                        color="white"
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdPhone color="white" size="20px" />}>
                        +7 771 2222833
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="400px"
                        variant="ghost"
                        color="white"
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdEmail color="white" size="20px" />}>
                        forest_bsm@mail.ru
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="400px"
                        variant="ghost"
                        color="white"
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdLocationOn color="white" size="20px" />}>
                        г. Алматы, мкр.Аксай -3Б, д.2/93
                      </Button>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  )
}