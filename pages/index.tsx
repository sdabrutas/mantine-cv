import { Anchor, Avatar, Box, Card, Container, Divider, Flex, Group, List, Progress, Spoiler, Stack, Text, ThemeIcon, Timeline, Title, useMantineTheme } from '@mantine/core';

import { IconBrandAdobePhotoshop, IconBrandAngular, IconBrandCpp, IconBrandCss3, IconBrandFigma, IconBrandGit, IconBrandHtml5, IconBrandJavascript, IconBrandLinkedin, IconBrandLinkedinFilled, IconBrandMantine, IconBrandNextjs, IconBrandNodejs, IconBrandNotion, IconBrandPython, IconBrandReact, IconBrandReactNative, IconBrandRedux, IconBrandStorybook, IconBrandTailwind, IconBrandThreejs, IconBrandTypescript, IconBrandVite, IconCircleCheck, IconFoldDown, IconFoldUp, IconMail, IconMailFilled, IconMapPin, IconMapPinFilled, IconPhone, IconPhoneFilled, IconSkull } from '@tabler/icons-react';
import classes from './index.module.css';
import profilePicture from '../assets/img/profile_photo.jpg';
import { ReactComponent as JavaIcon } from '../assets/icons/java.svg';
import { Badge } from '../components';

export default function IndexPage() {
  return (
    <Container my="md" size="lg">
      <Box className={classes.banner}>
        <Group p="xl">
          <Box w={300} />
          <Box flex={1}>
            <Stack>
              <Title fz={48} order={1}>SANDY BRUTAS</Title>
              <Title fw={500} order={2}>FRONT-END DEVELOPER</Title>
            </Stack>
          </Box>
        </Group>
      </Box>
      <Group align="flex-start" justify="stretch">
        <Box className={classes.sidebar}>
          <Box className={classes.avatarWrapper}>
            <img className={classes.avatarImage} alt="avatar" src={profilePicture.src} />
          </Box>
          <Box mb="md">
            <Title order={3} fw="500">CONTACT</Title>
            <Divider size="md" mb="sm" color="dark" />
            <List spacing="xs" size="sm" center>
              <List.Item icon={<IconPhone size={16} stroke={2} />}>+63 999  996 8834</List.Item>
              <List.Item icon={<IconMail size={16} stroke={2} />}>
                <Anchor underline="hover" href="mailto:sandy.brutas06@gmail.com" fz="sm" c="black">
                  sandy.brutas06@gmail.com
                </Anchor>
              </List.Item>
              <List.Item icon={<IconMapPin size={16} stroke={2} />}>Naga City, Philippines</List.Item>
              <List.Item icon={<IconBrandLinkedin size={16} stroke={2} />}>
                <Anchor underline="hover" href="https://www.linkedin.com/in/sdabrutas/" fz="sm" c="black">
                  linkedin.com/in/sdabrutas
                </Anchor>
              </List.Item>
            </List>
          </Box>
          <Box mb="md">
            <Title order={3} fw="500">INDUSTRY SKILLS</Title>
            <Divider size="md" mb="sm" color="dark" />
            <Title order={5} fw="400">Languages</Title>
            <Flex align="center" mb="xs">
              <ThemeIcon size={36} radius="md" className={classes.languageIcon}>
                <IconBrandJavascript size={20} />
              </ThemeIcon>
              <Box flex="1">
                <Text size="xs">JavaScript</Text>
                <Group grow gap={1}>
                  <Progress value={100} size="sm" color="#323b4c" />
                  <Progress value={100} size="sm" color="#323b4c" />
                  <Progress value={100} size="sm" color="#323b4c" />
                  <Progress value={100} size="sm" color="#323b4c" />
                  <Progress value={50} size="sm" color="#323b4c" />
                </Group>
              </Box>
            </Flex>  
            <Flex align="center" mb="xs">
              <ThemeIcon size={36} radius="md" className={classes.languageIcon}>
                <IconBrandPython size={20} />
              </ThemeIcon>
              <Box flex="1">
                <Text size="xs">Python</Text>
                <Group grow gap={1}>
                  <Progress value={100} size="sm" color="#323b4c" />
                  <Progress value={100} size="sm" color="#323b4c" />
                  <Progress value={50} size="sm" color="#323b4c" />
                  <Progress value={0} size="sm" color="#323b4c" />
                  <Progress value={0} size="sm" color="#323b4c" />
                </Group>
              </Box>
            </Flex>
            <Flex align="center" mb="xs">
              <ThemeIcon size={36} radius="md" className={classes.languageIcon}>
                <JavaIcon width={20} />
              </ThemeIcon>
              <Box flex="1">
                <Text size="xs">Java</Text>
                <Group grow gap={1}>
                  <Progress value={100} size="sm" color="#323b4c" />
                  <Progress value={100} size="sm" color="#323b4c" />
                  <Progress value={0} size="sm" color="#323b4c" />
                  <Progress value={0} size="sm" color="#323b4c" />
                  <Progress value={0} size="sm" color="#323b4c" />
                </Group>
              </Box>
            </Flex>
            <Flex align="center" mb="xs">
              <ThemeIcon size={36} radius="md" className={classes.languageIcon}>
                <IconBrandCpp size={20} />
              </ThemeIcon>
              <Box flex="1">
                <Text size="xs">C++</Text>
                <Group grow gap={1}>
                  <Progress value={100} size="sm" color="#323b4c" />
                  <Progress value={100} size="sm" color="#323b4c" />
                  <Progress value={0} size="sm" color="#323b4c" />
                  <Progress value={0} size="sm" color="#323b4c" />
                  <Progress value={0} size="sm" color="#323b4c" />
                </Group>
              </Box>
            </Flex>
            <Title order={5} fw="400">Front-end Frameworks / Libraries</Title>
            <Flex gap={4} wrap="wrap" mb="sm">
              <Badge label="React" icon={<IconBrandReact />} />
              <Badge label="Angular" icon={<IconBrandAngular size={14} />} />
              <Badge label="Vite" icon={<IconBrandVite size={14} />} />
              <Badge label="Next.js" icon={<IconBrandNextjs size={14} />} />
              <Badge label="React Native" icon={<IconBrandReactNative size={14} />} />
              <Badge label="create-react-app" icon={<IconSkull size={14} />} />
            </Flex>
            <Title order={5} fw="400">State Management / Middlewares</Title>
            <Flex gap={4} wrap="wrap" mb="sm">
              <Badge label="Redux" icon={<IconBrandRedux size={14} />} />
              <Badge label="Redux Thunk" />
              <Badge label="Redux Saga" />
              <Badge label="RTK Query" />
              <Badge label="React Query" />
            </Flex>
            <Title order={5} fw="400">Styling / Component Libraries</Title>
            <Flex gap={4} wrap="wrap" mb="sm">
              <Badge label="styled-components" />
              <Badge label="Emotion" />
              <Badge label="Tailwind" icon={<IconBrandTailwind size={14} />} />
              <Badge label="Material UI" />
              <Badge label="Ant Design" />
              <Badge label="Mantine" icon={<IconBrandMantine size={14} />} />
            </Flex>
            <Title order={5} fw="400">Testing</Title>
            <Flex gap={4} wrap="wrap" mb="sm">
              <Badge label="Testing Library" />
              <Badge label="Jest" />
              <Badge label="Enzyme" />
              <Badge label="Vitest" icon={<IconBrandVite size={14} />} />
              <Badge label="Selenium" />
              <Badge label="Playwright" />
            </Flex>
            <Title order={5} fw="400">Other</Title>
            <Flex gap={4} wrap="wrap" mb="sm">
              <Badge label="Typescript" icon={<IconBrandTypescript size={14} />} />
              <Badge label="HTML" icon={<IconBrandHtml5 size={14} />} />
              <Badge label="CSS" icon={<IconBrandCss3 size={14} />} />
              <Badge label="Node.js" icon={<IconBrandNodejs size={14} />} />
              <Badge label="Express" />
              <Badge label="Git" icon={<IconBrandGit size={14} />} />
              <Badge label="Storybook" icon={<IconBrandStorybook size={14} />} />
              <Badge label="Three.js" icon={<IconBrandThreejs size={14} />} />
              <Badge label="Figma" icon={<IconBrandFigma size={14} />} />
              <Badge label="Adobe Photoshop" icon={<IconBrandAdobePhotoshop size={14} />} />
              <Badge label="Agile SDLC" />
            </Flex>
          </Box>
          <Box mb="md">
            <Title order={3} fw="500">REFERENCES</Title>
            <Divider size="md" mb="sm" color="dark" />
            <Text>Available upon request</Text>
          </Box>
        </Box>
        <Stack flex={1} pl="sm" pt="md">
          <Box>
            <Title order={3} fw="500">KEY STRENGTH</Title>
            <Divider size="md" mb="sm" color="dark" />
            <List
              spacing="xs"
              size="sm"
              center
              icon={
                <ThemeIcon size={24} radius="xl">
                  <IconCircleCheck size={16} />
                </ThemeIcon>
              }
            >
              <List.Item>Proficiency in developing applications with React and React Native from ground up</List.Item>
              <List.Item>Excellent grasp on data structures, algorithms, software optimization, and clean coding</List.Item>
              <List.Item>Ability to create working features from wireframes and UI/UX designs</List.Item>
              <List.Item>Critical thinking, systems planning and efficient problem solving skills</List.Item>
              <List.Item>Good oral and written communication</List.Item>
              <List.Item>Can efficiently work under minimal supervision</List.Item>
            </List>
          </Box>
          <Box>
            <Title order={3} fw="500">EDUCATIONAL BACKGROUND</Title>
            <Divider size="md" mb="sm" color="dark" />
            <Group justify="space-between">
              <Text fw={500}>Ateneo de Naga University</Text>
              <Text fs="italic">2012 - 2016</Text>
            </Group>
            <Text>Bachelor of Science in Information Technology</Text>
            <Text size="sm" fs="italic">* College Honors</Text>
          </Box>
          <Box>
            <Title order={3} fw="500">WORK EXPERIENCE</Title>
            <Divider size="md" mb="sm" color="dark" />
            <Timeline reverseActive active={5} color="#323b4c" bulletSize={16} lineWidth={2} styles={{ itemTitle: { marginBottom: 0 } }}>
              <Timeline.Item
                title={
                  <Group justify="space-between">
                    <Text fw={500}>Senior Software Engineer</Text>
                    <Text fs="italic">October 2024 - present</Text>
                  </Group>
                }
              >
                <Spoiler
                  classNames={{ control: classes.spoilerControl }}
                  maxHeight={64}
                  showLabel={<IconFoldDown size={20} />}
                  hideLabel={<IconFoldUp size={20} />}
                  initialState={true}
                >
                  <Text>Reap Technologies Limited</Text>
                  <List>
                    <List.Item fz="sm">
                      focuses on creating reusable React components for the company's front-end applications
                    </List.Item>
                    <List.Item fz="sm">
                      works on the front-end side of a couple fintech platform applications
                    </List.Item>
                  </List>
                  <Flex mt="sm" mb="sm" columnGap={2} rowGap={4} wrap="wrap">
                    <Badge variant="light" label="React" icon={<IconBrandReact />} />
                    <Badge variant="light" label="Typescript" icon={<IconBrandTypescript />} />
                    <Badge variant="light" label="Vite" icon={<IconBrandVite />} />
                    <Badge variant="light" label="React Query" />
                    <Badge variant="light" label="Material UI" />
                    <Badge variant="light" label="Testing Library" />
                    <Badge variant="light" label="Vitest" icon={<IconBrandVite />} />
                    <Badge variant="light" label="Git" icon={<IconBrandGit />} />
                    <Badge variant="light" label="Figma" icon={<IconBrandFigma />} />
                    <Badge variant="light" label="Notion" icon={<IconBrandNotion />} />
                  </Flex>
                </Spoiler>
              </Timeline.Item>
              <Timeline.Item
                title={
                  <Group justify="space-between">
                    <Text fw={500}>Front End Developer</Text>
                    <Text fs="italic">March 2022 - October 2024</Text>
                  </Group>
                }
              >
                <Spoiler
                  classNames={{ control: classes.spoilerControl }}
                  maxHeight={64}
                  showLabel={<IconFoldDown size={20} />
                  }
                  hideLabel={<IconFoldUp size={20} />}
                >
                  <Text>Biarri Networks</Text>
                  <List>
                    <List.Item fz="sm">
                      worked as a front-end developer on a fiber optic network planning tool, mainly visualizing geographic data using React
                    </List.Item>
                  </List>
                  <Flex mt="sm" mb="sm" columnGap={2} rowGap={4} wrap="wrap">
                    <Badge variant="light" label="React" icon={<IconBrandReact />} />
                    <Badge variant="light" label="Typescript" icon={<IconBrandTypescript />} />
                    <Badge variant="light" label="Vite" icon={<IconBrandVite />} />
                    <Badge variant="light" label="Redux" icon={<IconBrandRedux />} />
                    <Badge variant="light" label="RTK Query" />
                    <Badge variant="light" label="Mapbox GL JS" />
                    <Badge variant="light" label="Ag Grid" />
                    <Badge variant="light" label="Material UI" />
                    <Badge variant="light" label="msw" />
                    <Badge variant="light" label="Testing Library" />
                    <Badge variant="light" label="Jest" />
                    <Badge variant="light" label="Selenium" />
                    <Badge variant="light" label="Git" icon={<IconBrandGit />} />
                    <Badge variant="light" label="Figma" icon={<IconBrandFigma />} />
                  </Flex>
                </Spoiler>
              </Timeline.Item>
              <Timeline.Item
                title={
                  <Group justify="space-between">
                    <Text fw={500}>Senior Front-end Developer</Text>
                    <Text fs="italic">August 2021 - March 2022</Text>
                  </Group>
                }                                                                                                                                             
              >
                <Spoiler
                  classNames={{ control: classes.spoilerControl }}
                  maxHeight={64}
                  showLabel={<IconFoldDown size={20} />
                  }
                  hideLabel={<IconFoldUp size={20} />}
                >
                  <Text>FlixForge Ltd. (Contract / Consultancy)</Text>
                  <List>
                    <List.Item fz="sm">
                      offered services related to maintenance and development of a client's OTT and VOD platform, migrating it from Angular to React
                    </List.Item>
                  </List>
                  <Flex mt="sm" mb="sm" columnGap={2} rowGap={4} wrap="wrap">
                    <Badge variant="light" label="React" icon={<IconBrandReact />} />
                    <Badge variant="light" label="Typescript" icon={<IconBrandTypescript />} />
                    <Badge variant="light" label="Angular" icon={<IconBrandAngular />} />
                    <Badge variant="light" label="create-react-app" />
                    <Badge variant="light" label="Progressive Web App" />
                    <Badge variant="light" label="Git" icon={<IconBrandGit />} />
                  </Flex>
                </Spoiler>
              </Timeline.Item>
              <Timeline.Item
                title={
                  <Group justify="space-between">
                    <Text fw={500}>Senior Software Engineer</Text>
                    <Text fs="italic">April 2020 - August 2021</Text>
                  </Group>
                }                                                                                                                                             
              >
                <Spoiler
                  classNames={{ control: classes.spoilerControl }}
                  maxHeight={64}
                  showLabel={<IconFoldDown size={20} />
                  }
                  hideLabel={<IconFoldUp size={20} />}
                >
                  <Text>Cambridge University Press & Assessment (DSCL Manila — ROHQ)</Text>
                  <List>
                    <List.Item fz="sm">
                      performed maintenance tasks that include new feature developments and bug fixing for multiple customer-facing web applications
                    </List.Item>
                  </List>
                  <Flex mt="sm" mb="sm" columnGap={2} rowGap={4} wrap="wrap">
                    <Badge variant="light" label="Angular" icon={<IconBrandAngular />} />
                    <Badge variant="light" label="jQuery" />
                    <Badge variant="light" label="Vanilla JS" icon={<IconBrandJavascript />} />
                    <Badge variant="light" label="Handlebars" />
                    <Badge variant="light" label="EJS" />
                    <Badge variant="light" label="Gulp" />
                    <Badge variant="light" label="Webpack" />
                    <Badge variant="light" label="Spring Boot" />
                    <Badge variant="light" label="Git" icon={<IconBrandGit />} />
                    <Badge variant="light" label="Perforce" icon={<IconBrandGit />} />
                  </Flex>
                </Spoiler>
              </Timeline.Item>
              <Timeline.Item
                title={
                  <Group justify="space-between">
                    <Text fw={500}>Software Engineer II</Text>
                    <Text fs="italic">July 2018 - April 2020</Text>
                  </Group>
                }                                                                                                                                             
              >
                <Spoiler
                  classNames={{ control: classes.spoilerControl }}
                  maxHeight={64}
                  showLabel={<IconFoldDown size={20} />
                  }
                  hideLabel={<IconFoldUp size={20} />}
                >
                  <Text>Samsung Research & Development Institute, Philippines</Text>
                  <List>
                    <List.Item fz="sm">
                      delegated to design various projects’ front-end architecture
                    </List.Item>
                    <List.Item fz="sm">
                      worked on a number of large-scale data visualization and virtualization projects using React
                    </List.Item>
                  </List>
                  <Flex mt="sm" mb="sm" columnGap={2} rowGap={4} wrap="wrap">
                    <Badge variant="light" label="React" icon={<IconBrandReact />} />
                    <Badge variant="light" label="Typescript" icon={<IconBrandTypescript />} />
                    <Badge variant="light" label="Redux" icon={<IconBrandRedux />} />
                    <Badge variant="light" label="Redux Saga" />
                    <Badge variant="light" label="Redux Thunk" />
                    <Badge variant="light" label="styled-components" />
                    <Badge variant="light" label="Three.js" icon={<IconBrandThreejs />} />
                    <Badge variant="light" label="Highcharts" />
                    <Badge variant="light" label="create-react-app" />
                    <Badge variant="light" label="Testing Library" />
                    <Badge variant="light" label="Jest" />
                    <Badge variant="light" label="Enzyme" />
                    <Badge variant="light" label="Git" icon={<IconBrandGit />} />
                    <Badge variant="light" label="Zeplin" />
                  </Flex>
                </Spoiler>
              </Timeline.Item>
              <Timeline.Item
                title={
                  <Group justify="space-between">
                    <Text fw={500}>Software Engineer</Text>
                    <Text fs="italic">June 2016 - July 2018</Text>
                  </Group>
                }                                                                                                                                             
              >
                <Spoiler
                  classNames={{ control: classes.spoilerControl }}
                  maxHeight={64}
                  showLabel={<IconFoldDown size={20} />
                  }
                  hideLabel={<IconFoldUp size={20} />}
                >
                  <Text>98Labs, Inc.</Text>
                  <List>
                    <List.Item fz="sm">
                      trained to be proficient in end-to-end web development using JavaScript and technologies such as Node.js, Angular, React, etc.
                    </List.Item>
                    <List.Item fz="sm">
                    tasked to work on multiple web-based projects and mobile applications as front-end developer using React.js and React Native
                    </List.Item>
                  </List>
                  <Flex mt="sm" mb="sm" columnGap={2} rowGap={4} wrap="wrap">
                    <Badge variant="light" label="React" icon={<IconBrandReact />} />
                    <Badge variant="light" label="React Native" icon={<IconBrandReactNative />} />
                    <Badge variant="light" label="Angular" icon={<IconBrandAngular />} />
                    <Badge variant="light" label="jQuery" />
                    <Badge variant="light" label="Redux" icon={<IconBrandRedux />} />
                    <Badge variant="light" label="Redux Saga" />
                    <Badge variant="light" label="Emotion" />
                    <Badge variant="light" label="create-react-app" />
                    <Badge variant="light" label="Jest" />
                    <Badge variant="light" label="Enzyme" />
                    <Badge variant="light" label="Git" icon={<IconBrandGit />} />
                    <Badge variant="light" label="Adobe Photoshop" icon={<IconBrandAdobePhotoshop />} />
                  </Flex>
                </Spoiler>
              </Timeline.Item>
            </Timeline>
          </Box>
        </Stack>
      </Group>
    </Container>
  );
}