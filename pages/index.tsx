import { Anchor, Avatar, Box, Card, Container, Divider, Flex, Group, List, Progress, Spoiler, Stack, Text, ThemeIcon, Timeline, Title, useMantineTheme } from '@mantine/core';

import { IconBrandAdobePhotoshop, IconBrandAngular, IconBrandAws, IconBrandCpp, IconBrandCss3, IconBrandFigma, IconBrandGit, IconBrandGithub, IconBrandGithubFilled, IconBrandHtml5, IconBrandJavascript, IconBrandLinkedin, IconBrandLinkedinFilled, IconBrandMantine, IconBrandNextjs, IconBrandNodejs, IconBrandNotion, IconBrandPython, IconBrandReact, IconBrandReactNative, IconBrandRedux, IconBrandStorybook, IconBrandTailwind, IconBrandThreejs, IconBrandTypescript, IconBrandVite, IconCircleCheck, IconFoldDown, IconFoldUp, IconMail, IconMailFilled, IconMapPin, IconMapPinFilled, IconPhone, IconPhoneFilled, IconSkull } from '@tabler/icons-react';
import classes from './index.module.css';
import profilePicture from '../assets/img/profile_photo.jpg';
import { ReactComponent as JavaIcon } from '../assets/icons/java.svg';
import { Badge, ExperienceBlock } from '../components';
import LanguageMeter from '../components/LanguageMeter/LanguageMeter';

export default function IndexPage() {
  return (
    <Container my="md" size="lg">
      {/**
       * ------------ BANNER ------------
       */}
      <Box className={classes.banner}>
        <Group p="xl">
          <Box w={300} />
          <Box flex={1}>
            <Stack className={classes.bannerContent}>
              <Title fz="3rem" order={1}>SANDY BRUTAS</Title>
              <Title fw={500} order={2}>FRONT-END DEVELOPER</Title>
            </Stack>
          </Box>
        </Group>
      </Box>
      {/**
       * ------------ BANNER ------------
       */}
      <Group align="flex-start" justify="stretch">
        {/**
         * ------------ SIDE BAR ------------
         */}
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
            <LanguageMeter name="Javascript" icon={<IconBrandJavascript size={20} />} rating={4.5} />
            <LanguageMeter name="Python" icon={<IconBrandPython size={20} />} rating={2.5} />
            <LanguageMeter name="Java" icon={<JavaIcon width={20} />} rating={2} />
            <LanguageMeter name="C++" icon={<IconBrandCpp size={20} />} rating={2} />
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
              <Badge label="AWS CloudFront" icon={<IconBrandAws />} />
              <Badge label="AWS S3" icon={<IconBrandAws />} />
              <Badge label="CircleCI" />
              <Badge label="Github" icon={<IconBrandGithubFilled />} />
            </Flex>
          </Box>
          <Box mb="md">
            <Title order={3} fw="500">REFERENCES</Title>
            <Divider size="md" mb="sm" color="dark" />
            <Text>Available upon request</Text>
          </Box>
        </Box>
        {/**
         * ------------ SIDE BAR ------------
         */}
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
              {/* <ExperienceBlock
                role="Senior Software Engineer"
                tenure="October 2024 - present"
                company="Reap Technologies Limited"
                defaultExpanded
                summary={[
                  "focuses on creating reusable React components for the company's front-end applications",
                  'works on the front-end side of a couple fintech platform applications',
                ]}
                techstack={[
                  { label: 'React', icon: <IconBrandReact /> },
                  { label: 'Typescript', icon: <IconBrandTypescript /> },
                  { label: 'Vite', icon: <IconBrandVite /> },
                  { label: 'React Query' },
                  { label: 'Material UI' },
                  { label: 'Testing Library' },
                  { label: 'Vitest', icon: <IconBrandVite /> },
                  { label: 'Git', icon: <IconBrandGit /> },
                  { label: 'Figma', icon: <IconBrandFigma /> },
                  { label: 'Notion', icon: <IconBrandNotion /> },
                ]}
              /> */}
              <ExperienceBlock
                role="Front End Developer"
                tenure="March 2022 - October 2024"
                company="Biarri Networks"
                summary={[
                  "focuses on creating reusable React components for the company's front-end applications",
                  'works on the front-end side of a couple fintech platform applications',
                ]}
                techstack={[
                  { label: 'React', icon: <IconBrandReact /> },
                  { label: 'Typescript', icon: <IconBrandTypescript /> },
                  { label: 'Vite', icon: <IconBrandVite /> },
                  { label: 'React Query' },
                  { label: 'Material UI' },
                  { label: 'Testing Library' },
                  { label: 'Vitest', icon: <IconBrandVite /> },
                  { label: 'Git', icon: <IconBrandGit /> },
                  { label: 'Figma', icon: <IconBrandFigma /> },
                  { label: 'Notion', icon: <IconBrandNotion /> },
                ]}
              />
              <ExperienceBlock
                role="Senior Front-end Developer (Contract)"
                tenure="August 2021 - March 2022"
                company="FlixForge Ltd."
                summary={[
                  "offered services related to maintenance and development of a client's OTT and VOD platform, migrating it from Angular to React",
                ]}
                techstack={[
                  { label: "React", icon: <IconBrandReact /> },
                  { label: "Typescript", icon: <IconBrandTypescript /> },
                  { label: "Angular", icon: <IconBrandAngular /> },
                  { label: "create-react-app" },
                  { label: "Progressive Web App" },
                  { label: "Git", icon: <IconBrandGit /> },
                ]}
              />
              <ExperienceBlock
                role="Senior Software Engineer"
                tenure="April 2020 - August 2021"
                company="Cambridge University Press & Assessment (DSCL Manila — ROHQ)"
                summary={[
                  "performed maintenance tasks that include new feature developments and bug fixing for multiple customer-facing web applications",
                ]}
                techstack={[
                  { label: 'Angular', icon: <IconBrandAngular /> },
                  { label: 'jQuery' },
                  { label: 'Vanilla JS', icon: <IconBrandJavascript /> },
                  { label: 'Handlebars' },
                  { label: 'EJS' },
                  { label: 'Gulp' },
                  { label: 'Webpack' },
                  { label: 'Spring Boot' },
                  { label: 'Git', icon: <IconBrandGit /> },
                  { label: 'Perforce' },
                ]}
              />
              <ExperienceBlock 
                role="Software Engineer II" 
                tenure="July 2018 - April 2020" 
                company="Samsung Research & Development Institute, Philippines"
                summary={[
                  "delegated to design various projects’ front-end architecture" , "worked on a number of large-scale data visualization and virtualization projects using React",
                ]} 
                techstack={[
                  { label: 'React', icon: <IconBrandReact /> },
                  { label: 'Typescript', icon: <IconBrandTypescript /> },
                  { label: 'Redux', icon: <IconBrandRedux /> },
                  { label: 'Redux Saga' },
                  { label: 'Redux Thunk'  },
                  { label: 'styled-components' },
                  { label: 'Three.js', icon: <IconBrandThreejs /> },
                  { label: 'Highcharts' },
                  { label: 'create-react-app' },
                  { label: 'Testing Library' },
                  { label: 'Jest' },
                  { label: 'Enzyme' },
                  { label: 'Git', icon: <IconBrandGit /> },
                  { label: 'Zeplin' },
                ]} 
             />
              <ExperienceBlock 
                role="Software Engineer" 
                tenure="June 2016 - July 2018" 
                company="98Labs, Inc."
                summary={[
                  "Trained to be proficient in end-to-end web development using JavaScript and technologies such as Node.js, Angular, React, etc.",
                  "Worked alongside senior developers to migrate an e-commerce platform from PHP to React and develop additional features",
                  "Developed a WYSIWYG tool by creating a React wrapper for an existing jQuery rich text editor, which allows administrators to easily generate static pages in the platform",
                  "Contributed to some major features including the dashboard and checkout pages",
                  "Worked on mobile app POCs for the e-commerce platform and an e-wallet and payments solution using React Native",
                ]} 
                techstack={[
                  { label: 'React', icon: <IconBrandReact /> },
                  { label: 'React Native', icon: <IconBrandReactNative /> },
                  { label: 'Angular', icon: <IconBrandAngular /> },
                  { label: 'jQuery'  },
                  { label: 'Redux', icon: <IconBrandRedux /> },
                  { label: 'Redux Saga' },
                  { label: 'Emotion' },
                  { label: 'create-react-app' },
                  { label: 'Jest' },
                  { label: 'Enzyme' },
                  { label: 'Git', icon: <IconBrandGit /> },
                  { label: 'Adobe Photoshop', icon: <IconBrandAdobePhotoshop /> },
                ]}              
              />
            </Timeline>
          </Box>
        </Stack>
      </Group>
    </Container>
  );
}