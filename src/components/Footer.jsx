
import { Box, Button, HStack, Input, Stack, VStack, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineSend } from 'react-icons/ai'
const Footer = () => {
  return (
    <Box bgColor={"blackAlpha.900"} minH={"40"} p="16" color={'white'}>
   <Stack direction={["column", "row"]}>
<VStack alignItems={'stretch'} w={"full"} px={'4'}>
<Heading size="md" textTransform={'uppercase'} textAlign={['center','left']}>
    Subscribe to get updates
</Heading>
 <HStack
  borderBottom={'2px solid white'}
  py="2">
    <Input placeholder='Enter Email Here...' 
    border={"none"}
    borderRadius="none"
    outline={'none'}
    />
  <Button 
  p={"0"}
  colorScheme={"purple"}
  variant={'ghost'}
  borderRadius={'0, 20px, 20px,0'}
  >

    <AiOutlineSend size={20} />
  </Button>

 </HStack>
 </VStack> 
 <VStack w={'full'}
 borderLeft={['none', '1px solid white']}
 borderRight={['none', '1px solid white']}
>
<Heading size={'md'} textTransform={'uppercase'}
textAlign={'center'}>
    VIDEO HUB
</Heading>  
<Text>All rights received</Text> 
</VStack>
<VStack w={'full'} >
<Heading size={'md'} textTransform={'uppercase'}>
    Social Media
</Heading>
<Button variant={"link"} colorScheme={'whiteAlpha'} >
 <a target={'blank'} href='https://github.com/ShitalTarade'>Github</a>
</Button>
<Button variant={"link"} colorScheme={'whiteAlpha'} >
 <a target={'blank'} href='https://instagram.com/ShitalTarade'>Instagram</a>
</Button>
<Button variant={"link"} colorScheme={'whiteAlpha'} >
 <a target={'blank'} href='https://whatsapp.com/ShitalTarade'>Whatsapp</a>
</Button>
</VStack>

   </Stack>
   
   
   </Box>
  )
}

export default Footer