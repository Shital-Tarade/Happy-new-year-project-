
import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assests/1.jpg';
import img2 from '../assests/2.jpg';
import img3 from '../assests/3.jpg';
import img4 from '../assests/4.jpg';
import img5 from '../assests/5.png';

const headingOptions ={
  pos:"absolute",
  left:"50%",
  top:"50%",
  textTransform:'uppercase',
  p: '4',
  size: '4xl',
};

const Home = () => {
  return (
    <Box>
<MyCarousel />
    <Container maxW={'container.xl'} minH={'100vh'} p="16">
        <Heading textTransform={"uppercase"} 
        py="2" w={"fit-content"} 
        borderBlockStartWidth={"2px solid"}
        m="auto"
        >
            Services
            </Heading>
            <Stack
            h="f"
            p={'4'}
            alignItems={'center'}
            direction={['column', 'row']}
            >
              <Image src={img5} h={["40", "400"]} filter={'hue-rotate(-130deg)'} /> 
              <Text letterSpacing={"widest"} lineHight={"190%"} p={["4","16"]} textAlign={"center"} >
                !!!!*** Wish You Happy New Year all *** !!!!
                KEEP IT POSITIVE-:
                A new year wish is an opportunity to set a positive tone for the year ahead. 
                Avoid mentioning any negative experiences or issues you may have had in the past year,
                and focus on expressing your hopes for a productive and successful year.
             </Text>  
            </Stack> 

    </Container> 

    </Box>   
);
  
};
const MyCarousel = ()=>(
<Carousel autoPlay infiniteLoop 
interval={1000} 
showStatus={false} 
showArrows={false}
showThumbs={false}
>

<Box w='haft' h={'10vh'}>
<Image src={img1} />
<Heading bgColor={'blackAlpha.10'} color={'white'} {...headingOptions}>
    My portfolio
</Heading>
</Box>

<Box w='full' h={'100vh'}>
<Image src={img2} />
<Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
    Watch the Future
</Heading>
</Box>
<Box w='full' h={'100vh'}>
<Image src={img3} />
<Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
    Watch the Future
</Heading>
</Box>

<Box w='full' h={'100vh'}>
<Image src={img4} />
<Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
    Watch the Future
</Heading>
</Box>

</Carousel>
)
export default Home