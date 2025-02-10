
import { Box, Button, Container, Heading, Image, Text, VStack, Grid, Input, Textarea, Card, Badge, HStack, SimpleGrid, DialogActionTrigger, DialogBody, DialogCloseTrigger, DialogContent, DialogFooter, DialogHeader, DialogRoot, DialogTitle, DialogTrigger, MenuContent, MenuItem, MenuRoot, MenuTrigger, MenuItemGroup, MenuSeparator, MenuTriggerItem, Flex, Tabs, Avatar } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import Tab from "./Tab";

const images = [
 "https://images-pw.pixieset.com/elementfield/pZd8Z4O/IMG_0069-Enhanced-NR-2-7efb25dc-1000.jpg",
 "https://images-pw.pixieset.com/elementfield/G5465mx/IMG_7633-Enhanced-NR-edc77d5f-1000.jpg",
 "https://images-pw.pixieset.com/elementfield/G5465mx/IMG_7234-Enhanced-NR-7e2b9cbc-1000.jpg",
 "https://scontent-ord5-3.xx.fbcdn.net/v/t39.30808-6/466086785_10107039896802566_7216112883107886991_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=E6nx_Fz71jQQ7kNvgHhlI7S&_nc_oc=AdhgyRM1_-iHFyqOsny2F-PbfSzdRrZRalNRt-jDRpipntMAdw_aRJbwcLJRIMPx3CXm8JohbbRiboCN6erPmsvT&_nc_zt=23&_nc_ht=scontent-ord5-3.xx&_nc_gid=A9LeFSOq4qU9dS08kL6qpp0&oh=00_AYCZGPGcwC78w79emeE8UU3MI8uwoqrIXUQjzEq8NEiUHg&oe=67B00032",
];

const galleryFamily = [
"https://scontent-ord5-3.xx.fbcdn.net/v/t39.30808-6/475120197_10107413303073406_7628029141701631211_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=ZO3ChWNjS4UQ7kNvgHUfZ75&_nc_oc=AdhtjGEv-yt3lK5Ld1OjY5DlF2WiIa9QZcV9JzfuuHCijFgUPIaWCa3z3th9fvEeuhyO3FXP_bz4GwdGggKKeand&_nc_zt=23&_nc_ht=scontent-ord5-3.xx&_nc_gid=ACT9gQg8SkM3u4dnqH64Vyg&oh=00_AYB4O_LgxukBQ6sfl2WBxAtLrUd2RrctipXh2ISJtU-9_Q&oe=67B025E9",
"https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/474975573_10107413304016516_5292501527620635073_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=dsE8F2pwS5cQ7kNvgEyCNbR&_nc_oc=AdjSTHziQXaioisohs2265ZaDihUBraFlo9VWQcwwBf5_-39kV_V-vlJGb6uWZT1FowKRKWg7p9LohFmDB2HIxcv&_nc_zt=23&_nc_ht=scontent-ord5-2.xx&_nc_gid=A42Ynj3BKN4OXt0ENuZ77WQ&oh=00_AYAn3Mos43vj7PkLOx1QCKbptuhGFMVy56k1JBtIQFheuQ&oe=67B019B2",
"https://images-pw.pixieset.com/elementfield/G5465mx/IMG_8137-Enhanced-NR-0d7f3cc6-1000.jpg",
"https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/475039628_10107413303362826_431062751056579705_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=N1Cktf9JhcYQ7kNvgH8Z98P&_nc_oc=AdgB9ZhsGknV75Dyp1HZRPmLd_2SsH_UUxG2XbOu05h0ytXoUvwkJLO7PCtFCK30HF-tLBJcGRBTpA7X09BSdm7U&_nc_zt=23&_nc_ht=scontent-ord5-1.xx&_nc_gid=A0jFB144c3SfCUvUwOM8pTc&oh=00_AYAtpoZwCHT5stlXYpjhHPpk61yIRTmRUcBlOrigOj4-fw&oe=67B0041B",
"https://images-pw.pixieset.com/elementfield/G5465mx/IMG_0181-Enhanced-NR-6a6bfbf2-1000.jpg",
"https://images-pw.pixieset.com/elementfield/G5465mx/IMG_0046-Enhanced-NR-510268df-1000.jpg",
"https://images-pw.pixieset.com/elementfield/G5465mx/IMG_2889-37c41bf3-1000.jpg",
"https://images-pw.pixieset.com/elementfield/G5465mx/IMG_4855-Enhanced-NR-f2d92107-1000.jpg",
"https://images-pw.pixieset.com/elementfield/G5465mx/IMG_7234-Enhanced-NR-7e2b9cbc-1000.jpg",
"https://scontent-ord5-3.xx.fbcdn.net/v/t39.30808-6/468768175_10107316009275956_769072892152795811_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=keE5chm2xb4Q7kNvgHLBWzh&_nc_oc=AdgbrsgTC62WqYDMCwlZz5x5uiXQ3RhcmUA5NVdyNR8wirBkJAPaxZHnYgj-qLKncoq-Uy4HZ4qWVzmgEF4Tg8Wh&_nc_zt=23&_nc_ht=scontent-ord5-3.xx&_nc_gid=AttEC4-6TSAFyhttkphr1oh&oh=00_AYDFLdOio_RyREPnUHUs8gYSjIBsMS3VOag0bdezvHJ-UQ&oe=67B0277A",
"https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/468651479_10107316009031446_2288360331771603912_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=QAzZWPEQPrcQ7kNvgFyv1oo&_nc_oc=AdidyZrz0Fg3SZ0puAyvGUk-uEXe9Dq2zJgIDh9tuRfuv5uExa-vapHGuyD-RhzGp2AyOgLTwKCd_C_edjqJEJJv&_nc_zt=23&_nc_ht=scontent-ord5-2.xx&_nc_gid=AIfCTNKxO-h0EofDVXUv4N0&oh=00_AYCDtfaPg49gWmWquImV_J1dwtQMkTgb6HpBwJM6MWlW8A&oe=67B02486",
"https://scontent-ord5-3.xx.fbcdn.net/v/t39.30808-6/469494932_10107316008881746_5722819008903264476_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=HPG65dQ4R-EQ7kNvgEpqwnW&_nc_oc=AdhdpZtwGHfZbh1zrGkoq1zFwInN7bo_LJ7fwLOn8GN_blm7KDvobnhHM0L9GTmLgaSImtxjBmG1aYmYZfluSUb4&_nc_zt=23&_nc_ht=scontent-ord5-3.xx&_nc_gid=Ae2sajQ-_mZuDf6mAUPkiN4&oh=00_AYCm1g9Ahgs2_bVKOJnd5QrLSM-6937RlvTg8ztM6adW2A&oe=67B0109A",
"https://scontent-ord5-3.xx.fbcdn.net/v/t39.30808-6/469385518_10107316007050416_1475109381494488819_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=Zx8JJvCQqroQ7kNvgEHQGxv&_nc_oc=AdhPU7NKczPi-fqiZT2zKuC92b6vY-93MO-8HQg32cSDZdEnK8b5sfVQyA3ye4AYVdAoEI_U74gFu0alBgB0ZiRk&_nc_zt=23&_nc_ht=scontent-ord5-3.xx&_nc_gid=ACwme8c7xbX2VtQTy2LS8Vc&oh=00_AYAzrT_s2OAKNyS280bbklHugcyG4KY0ozinK7kyym7f_A&oe=67B020BF",
"https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/468716527_10107316006810896_6577528416569455859_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=wr0_Sv6U-04Q7kNvgH_R3Tf&_nc_oc=Adi1SVgGznfPICrWdv1ar6HLpOvyHdaCg2FWsgoJtbZmfMQwY-GxNK2cykaDPXV06Friq745Pf9MDonScMzKQnKt&_nc_zt=23&_nc_ht=scontent-ord5-2.xx&_nc_gid=A3-lmAwALXHtguMPGbdnWc-&oh=00_AYDqOzODMe2TLtXrRrlUq20x_XGwPe3wm5z7ornTO28hoQ&oe=67B01E4F",
"https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/475206420_10107413304844856_4276610341814743542_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=phpqch6bQ_gQ7kNvgF9sOuw&_nc_oc=Adi4-3IbHzBkQoS8r4r-en8yH7KEcKEKoW0OUYNbu2eb_6Bkv-jSoSmrzE3Q9TgRl2AwUZnAPP4gCAb9d_TEW9wZ&_nc_zt=23&_nc_ht=scontent-ord5-2.xx&_nc_gid=AfT74ed2QXp9UYO4cVBUJka&oh=00_AYCqxSct8_hsmUMXpnOYgGDEeEjfjKw9MHKeJz28qSv7cg&oe=67B00731",
 ];

const galleryEngage = [

  "https://images-pw.pixieset.com/elementfield/G5465mx/IMG_8903-Enhanced-NR-75db742d-1000.jpg",
  "https://images-pw.pixieset.com/elementfield/G5465mx/IMG_8566-Enhanced-NR-64223dee-1000.jpg",
  "https://images-pw.pixieset.com/elementfield/G5465mx/IMG_8865-Enhanced-NR-c5e77bfe-1000.jpg",
  "https://images-pw.pixieset.com/elementfield/G5465mx/IMG_8521-Enhanced-NR-04f4a9ba-1000.jpg",
  "https://images-pw.pixieset.com/elementfield/G5465mx/IMG_8687-Enhanced-NR-2-3750f90d-1000.jpg",

];

const galleryPreg = [
"https://images-pw.pixieset.com/elementfield/G5465mx/IMG_7633-Enhanced-NR-edc77d5f-1000.jpg",
"https://images-pw.pixieset.com/elementfield/G5465mx/IMG_2422-Enhanced-NR-71812def-1000.jpg",
"https://images-pw.pixieset.com/elementfield/G5465mx/IMG_7633-Enhanced-NR-edc77d5f-1000.jpg",
"https://images-pw.pixieset.com/elementfield/G5465mx/IMG_2459-9414ab67-1000.jpg",

];

const galleryNew = [
  "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/475277667_10107416366224826_7814853106002779546_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=RXeId9trdhwQ7kNvgHu42W9&_nc_oc=AdilOc-ggPlcdqoiZbn4IHW0-6qJzcLEZNYjXacJZZZgbwWVYeRjaGB09l5fBEKPfnjJlSZSNGiJ_gCZ9bqsvxE2&_nc_zt=23&_nc_ht=scontent-ord5-2.xx&_nc_gid=AGD2Lw9e6nhs0N3i-ZeZSHn&oh=00_AYCsHU4SexG5oedxbTx0pH4DUfUPpuzYeYu--h-s9nE29A&oe=67B00AC5",
  "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/475420933_10107416366339596_3717017278107250526_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=i9HP3EQnq2MQ7kNvgGGY9TC&_nc_oc=AdjwOByLF81bcBpiFfS-9_EA7c6V3eJKDRw7txQw7OrrbfEpHmuPnVgeoHiHOx1OpwLpOCaP8i4pXXcJPKBy33yn&_nc_zt=23&_nc_ht=scontent-ord5-2.xx&_nc_gid=AFzz3ambKPVbSy4ETbsDShh&oh=00_AYARpaP6Luc176PvSVpeJrfxQ_WMFowlNy6UvVtrqR5giA&oe=67B01146",
  "https://images-pw.pixieset.com/elementfield/G5465mx/IMG_4744-Enhanced-NR-531c6717-1000.jpg",
  "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/475441526_10107416366913446_6561804270672552073_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=qAE8WT4DieMQ7kNvgGQckqd&_nc_oc=Adjyzc1o_JnCKAft7ukYOwNYgGruoY-KbQ55PzoqgRj4fcxIES63Vurd48EE9IcWDcc8IzGyTPrwoDPjzYbSlk3K&_nc_zt=23&_nc_ht=scontent-ord5-1.xx&_nc_gid=AkQ15WF7b6mIpQOJq8uYjM-&oh=00_AYCW0WAqZk7M2Tbv7UYiYNCHgakfC7-Cd5-FvXpWkH0kTQ&oe=67B01D81",
  "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/475278946_10107416366529216_7354634503836779512_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=QC03YBNLMEEQ7kNvgE-HgsC&_nc_oc=AdhygmaLS8byLxjjzN1SEcvNxVkHwHEmJE6wncMrH8FTrp4X4TAFztaToq6KUP7AltK0u5GgbsHgDv1A8MCnsf6G&_nc_zt=23&_nc_ht=scontent-ord5-2.xx&_nc_gid=Aq1B5vz7-iEYUWvoux811x0&oh=00_AYDclbB-80c-LzDlwrux7YDhzEeQvpoUkMKVkASCqIt7pQ&oe=67B0313D",
  ];

const gallerySenior = [
  "https://images-pw.pixieset.com/elementfield/G5465mx/IMG_9482-Enhanced-NR-36459dd5-1000.jpg",
  "https://images-pw.pixieset.com/elementfield/G5465mx/IMG_0015-Enhanced-NR-c4108336-1000.jpg",
  "https://images-pw.pixieset.com/elementfield/G5465mx/IMG_9191-Enhanced-NR-5c7ad5ac-1000.jpg",
  "https://images-pw.pixieset.com/elementfield/G5465mx/IMG_8691-Enhanced-NR-384aa63d-1000.jpg",
  "https://images-pw.pixieset.com/elementfield/G5465mx/IMG_9964-Enhanced-NR-976247d5-1000.jpg",
  ];

const items = [
  {
    title: "About Me",
    content:"I believe that every moment tells a unique story. Our passion is capturing the beauty, emotion, and essence of life through the lens, creating timeless images that you will cherish forever. Whether you’re looking for lifestyle maternity and newborns portraits, captivating senior photos, or candid snapshots of your wild and crazy toddler, we bring creativity and technical skill to every shot. Explore our gallery to see a diverse collection of our work!",
  },
  {
    title: "WHy Hire A Photographer?",
    content:
      "Hiring a family photographer ensures that you capture high-quality, professional images of your loved ones during special moments and milestones. With their expertise in lighting, composition, and editing, they create beautiful photos that you can cherish for years to come. A family photographer takes the stress out of organizing the shoot and brings a creative touch to make your memories truly special. It’s a wonderful way to preserve and celebrate the unique dynamics and joys of your family",
  },
]

const testimonials = [
  { name: "John Doe", quote: "Amazing photography! Truly breathtaking shots." },
  { name: "Jane Smith", quote: "Captured the essence of every moment beautifully." },
  { name: "Michael Brown", quote: "A true professional with an incredible eye for detail." }
];

const App = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box id="hero-section">
      {/* Hero Section */}
      <Box position="relative" height="100vh" width="100vw" overflow="hidden" display="flex" alignItems="center" justifyContent="center" transition={'ease-in-out'}>
        <Image src={images[index]} alt="Hero Image" objectFit="cover" width="100%" height="100%" position="absolute" />
        <Container position="relative" fontFamily={'Fraunces'} centerContent>
          <VStack spaceX={6} textAlign="center" >
            <Heading size="2xl" fontFamily={'Fraunces'}  >AMY CURLEY PHOTOGRAPHY</Heading> {/*bg={'#fdfaf1'} borderRadius={15} padding={15} */}
            <Text fontSize="lg" >Capturing love stories reminds me that every moment, big or small, has is own beauty.</Text> {/*bg={'#fdfaf1'} borderRadius={5} padding={2} */}
            
            <DialogRoot>
              <DialogTrigger asChild>
                <Button variant="outline" size="xl" margin={95} bg={'#fdfaf1'} fontSize={'2xl'}>
                <Avatar.Root>
                    <Avatar.Fallback name="Amy Curley" />
                    <Avatar.Image src="https://images-pw.pixieset.com/elementfield/rQJMQve/IMG_4867-ed89d39c-1000.jpg" />
                  </Avatar.Root>
                Hello there!
                </Button>
              </DialogTrigger>
              <DialogContent top={95} position={"absolute"} bg={'#fdfaf1'}>
                <DialogHeader>
                  <Avatar.Root>
                    <Avatar.Fallback name="Amy Curley" />
                    <Avatar.Image src="https://images-pw.pixieset.com/elementfield/rQJMQve/IMG_4867-ed89d39c-1000.jpg" />
                  </Avatar.Root>
                  <DialogTitle>Welcome to Amy Curley Photography!</DialogTitle>
                </DialogHeader>
                <DialogBody >
                  <Flex minH="auto">
                    <Tabs.Root defaultValue="About Me" width="full">
                      <Tabs.List>
                        {items.map((item, index) => (
                          <Tabs.Trigger key={index} value={item.title}>
                              {item.title}
                          </Tabs.Trigger>
                        ))}
                      </Tabs.List>
                      <Box pos="relative" minH="200px" width="full">
                        {items.map((item, index) => (
                          <Tabs.Content
                            key={index}
                            value={item.title}
                            fontSize={18}
                            position="absolute"
                            inset="0"
                            _open={{
                              animationName: "fade-in, scale-in",
                              animationDuration: "300ms",
                            }}
                            _closed={{
                              animationName: "fade-out, scale-out",
                              animationDuration: "120ms",
                            }}
                          >
                            {item.content}
                          </Tabs.Content>
                        ))}
                      </Box>
                    </Tabs.Root>
                  </Flex>
                </DialogBody>
                <DialogFooter>
                  <DialogActionTrigger asChild>
                    <Button variant="subtle">Close</Button>
                  </DialogActionTrigger>
                  <Button variant="subtle"><a href="#gallery">See My Work!</a></Button>
                </DialogFooter>
                <DialogCloseTrigger />
              </DialogContent>
            </DialogRoot>
          </VStack>
        </Container>
      </Box>
      
      {/* Gallery Section */}
      <Container maxW="container.lg" py={10} id="gallery">
        <Grid templateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap={6} alignItems={"center"} margin={15}>

          <Button variant="subtle"><a href="#gallery">Maternity</a></Button>
          <Button variant="subtle"><a href="#Family">Family</a></Button>
          <Button variant="subtle"><a href="#NewBorn">Newborn</a></Button>
          <Button variant="subtle"><a href="#Senior">Seniors</a></Button>
          <Button variant="subtle"><a href="#Engagement">Engagement</a></Button>
          {/* <Button variant="subtle"><a href="#gallery">Extended Family</a></Button>
          <Button variant="subtle"><a href="#gallery">Fresh 48</a></Button>
          <Button variant="subtle"><a href="#gallery">Milestones</a></Button> */}


          {/* <MenuRoot>
            <MenuTrigger asChild>
              <Button variant="outline" size="sm">
                Open
              </Button>
            </MenuTrigger>
            <MenuContent position="bottom" alignItems="start">
              <MenuItem value="new-txt">New Text File</MenuItem>
              <MenuItem value="new-file">New File...</MenuItem>
              <MenuItem value="open-file">Open File...</MenuItem>
              <MenuItem value="export">Export</MenuItem>
            </MenuContent>
          </MenuRoot>


          <MenuRoot positioning={{ placement: "bottom" }}>
              <MenuTrigger asChild>
                <Button size="sm" variant="outline">
                  Select Anime
                </Button>
              </MenuTrigger>
              <MenuContent>
                <MenuItem asChild value="">
                  <a
                    href=""
                    target="_blank"
                    rel="noreferrer"
                  >
                    Extened Family
                  </a>
                </MenuItem>
                <MenuItem asChild value="one-piece">
                  <a
                    href=""
                    target="_blank"
                    rel="noreferrer"
                  >
                    One Piece
                  </a>
                </MenuItem>
                <MenuItem asChild value="attack-on-titan">
                  <a
                    href=""
                    target="_blank"
                    rel="noreferrer"
                  >
                    Attack on Titan
                  </a>
                </MenuItem>
              </MenuContent>
          </MenuRoot> */}


        </Grid>

          {/* <Box justifyItems={"center"}>
            <Tab></Tab>
          </Box> */}


        <Heading textAlign="center" mb={6} fontFamily={'Fraunces'} margin={25} id="Family">Family</Heading>
        <Grid templateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap={6} alignItems={"center"}>
          {galleryFamily.map((src, index) => (
            <Image key={index} src={src} alt={`Gallery Image ${index + 1}`} borderRadius="md" />
          ))}
        </Grid>


        <Heading textAlign="center" mb={6} fontFamily={'Fraunces'}margin={45} id="Engagement">Engagement</Heading>
        <Grid templateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap={6} alignItems={"center"}>
          {galleryEngage.map((src, index) => (
            <Image key={index} src={src} alt={`Gallery Image ${index + 1}`} borderRadius="md" />
          ))}
        </Grid>

        <Heading textAlign="center" mb={6} fontFamily={'Fraunces'} margin={45} id="NewBorn">New Born</Heading>
        <Grid templateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap={6} alignItems={"center"}>
          {galleryNew.map((src, index) => (
            <Image key={index} src={src} alt={`Gallery Image ${index + 1}`} borderRadius="md" />
          ))}
        </Grid>

        <Heading textAlign="center" mb={6} fontFamily={'Fraunces'} margin={45} id="Senior">Senior</Heading>
        <Grid templateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap={6} alignItems={"center"}>
          {gallerySenior.map((src, index) => (
            <Image key={index} src={src} alt={`Gallery Image ${index + 1}`} borderRadius="md" />
          ))}
        </Grid>

        <Heading textAlign="center" mb={6} fontFamily={'Fraunces'} margin={45} id="Pregnancy">Pregnancy</Heading>
        <Grid templateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap={6} alignItems={"center"}>
          {galleryPreg.map((src, index) => (
            <Image key={index} src={src} alt={`Gallery Image ${index + 1}`} borderRadius="md" />
          ))}
        </Grid>

      </Container>

      
      
      {/* Testimonials Section */}
      <Box bg="#e5dcca" py={10} textAlign="center">
        <Heading fontSize="2xl" fontFamily={'Fraunces'} mb={6}>What People Say</Heading>
        <VStack spaceX={4}>
          {testimonials.map((testimonial, index) => (
            <Box key={index} p={4} bg="white" fontFamily={'Fraunces'} borderRadius="md" boxShadow="md" maxW="500px">
              <Text fontStyle="italic">"{testimonial.quote}"</Text>
              <Text fontWeight="bold" mt={2}>- {testimonial.name}</Text>
            </Box>
          ))}
        </VStack>
      </Box>


      <HStack justifyContent={"center"}>
        <SimpleGrid columns={{ base: 1, md: 1, lg: 3 }} gap={8} >
          <Box>
            <Card.Root flexDirection="row" overflow={{ base: "scroll", sm: "hidden" }} maxW="xl" fontFamily={'Fraunces'}>
              <Image
                objectFit="cover"
                maxW="200px"
                src="https://photos.batcars.com/images/garden.jpg"
                alt="The Garden Package"
              />
              <Box>
                <Card.Body>
                  <Card.Title mb="2">The Garden</Card.Title>
                  <Card.Description>
                    4 Hours Coverage <br />
                    All RAW Images <br />
                    Edited Gallery <br />
                    Highlight Video <br />
                    One Photographer
                  </Card.Description>
                  <HStack mt="4">
                    <Badge>You Wont Even Notice Us</Badge>
                    <Badge>Value</Badge>
                  </HStack>
                </Card.Body>
                <Card.Footer>
                  <Button><a href="https://book.squareup.com/appointments/sf9q2x0g6px9gv/location/LSPHA6ACEP0K2/services" target="_blank">Purchase Garden</a></Button>
                </Card.Footer>
              </Box>
            </Card.Root>
          </Box>
          
          <Box>
            <Card.Root flexDirection="row" overflow={{ base: "scroll", sm: "hidden" }} maxW="xl" fontFamily={'Fraunces'}>
              <Image
                objectFit="cover"
                maxW="200px"
                src="https://photos.batcars.com/images/chapel.jpg"
                alt="The Chapel Package"
              />
              <Box>
                <Card.Body>
                  <Card.Title mb="2">The Chapel</Card.Title>
                  <Card.Description>
                    4 Hours Coverage <br />
                    All RAW Images <br />
                    Edited Gallery <br />
                    Highlight Video <br />
                    Travel Included
                  </Card.Description>
                  <HStack mt="4">
                    <Badge>Most Popular</Badge>
                    <Badge>Quality</Badge>
                  </HStack>
                </Card.Body>
                <Card.Footer>
                  <Button><a href="https://book.squareup.com/appointments/sf9q2x0g6px9gv/location/LSPHA6ACEP0K2/services" target="_blank">Purchase Chapel</a></Button>
                </Card.Footer>
              </Box>
            </Card.Root>
          </Box>

          <Box>
            <Card.Root flexDirection="row" overflow={{ base: "scroll", sm: "hidden" }} maxW="xl" fontFamily={'Fraunces'}>
              <Image
                objectFit="cover"
                maxW="200px"
                src="https://photos.batcars.com/images/estate.jpg"
                alt="The Estate Package"
              />
              <Box>
                <Card.Body>
                <Card.Title mb="2">The Estate</Card.Title>
                  <Card.Description>
                    4 Hours Coverage <br />
                    All RAW Images <br />
                    Edited Gallery <br />
                    Highlight Video <br />
                    Travel Included
                  </Card.Description>
                  <HStack mt="4">
                    <Badge>Capture Every Moment</Badge>
                    <Badge>Top Tier</Badge>
                  </HStack>
                </Card.Body>
                <Card.Footer>
                  <Button><a href="https://book.squareup.com/appointments/sf9q2x0g6px9gv/location/LSPHA6ACEP0K2/services" target="_blank">Purchase Estate</a></Button>
                </Card.Footer>
              </Box>
            </Card.Root>
          </Box>
        </SimpleGrid>

      </HStack>


      {/* Contact Section */}
      <Box bg={'#ebe4d6'} py={10} textAlign="center" fontFamily={'Fraunces'}>
        <Heading fontSize="xl" fontFamily={'Fraunces'}>Memories Are Worth Everything. Invest In Your Family's Lagacy</Heading> <br />
        <Heading fontSize="2xl" fontFamily={'Fraunces'}>Contact Me</Heading>
        <Container maxW="500px" p={4}>
          <VStack spaceX={3}>
            <Input placeholder="Your Name" size="lg" />
            <Input placeholder="Your Email" size="lg" />
            <Textarea placeholder="Your Message" size="lg" />
            <Button colorScheme="blue" w="full">Send Message</Button>
          </VStack>
        </Container>
      </Box>

      


    </Box>
  );
};

export default App;


