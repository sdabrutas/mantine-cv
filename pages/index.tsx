import { Badge, Box, Card, Container, Divider, Flex, Group, List, Progress, Stack, Text, ThemeIcon, Title, useMantineTheme } from '@mantine/core';

import { IconBrandAdobePhotoshop, IconBrandAngular, IconBrandCpp, IconBrandCss3, IconBrandFigma, IconBrandGit, IconBrandHtml5, IconBrandJavascript, IconBrandLinkedin, IconBrandLinkedinFilled, IconBrandMantine, IconBrandNextjs, IconBrandNodejs, IconBrandNotion, IconBrandPython, IconBrandReact, IconBrandReactNative, IconBrandRedux, IconBrandStorybook, IconBrandTailwind, IconBrandThreejs, IconBrandTypescript, IconBrandVite, IconCircleCheck, IconMail, IconMailFilled, IconMapPin, IconMapPinFilled, IconPhone, IconPhoneFilled, IconSkull } from '@tabler/icons-react';
import classes from './index.module.css';
import { ReactComponent as JavaIcon } from '../assets/icons/java.svg';

export default function IndexPage() {
  return (
    <Container my="md" size="lg">
      <Box className={classes.banner}>
        <Group p="xl">
          <Box w={300} />
          <Box flex={1}>
            <Stack>
              <Title order={1}>SANDY BRUTAS</Title>
              <Title order={2}>FRONT-END DEVELOPER</Title>
            </Stack>
          </Box>
        </Group>
      </Box>
      <Group align="flex-start">
        <Box className={classes.sidebar}>
          <Box mb="md">
            <Title order={3} fw="500">CONTACT</Title>
            <Divider size="md" mb="sm" color="dark" />
            <List spacing="xs" size="sm" center>
              <List.Item icon={<IconPhone size={16} stroke={2} />}>+63 999  996 8834</List.Item>
              <List.Item icon={<IconMail size={16} stroke={2} />}>sandy.brutas06@gmail.com</List.Item>
              <List.Item icon={<IconMapPin size={16} stroke={2} />}>Naga City, Philippines</List.Item>
              <List.Item icon={<IconBrandLinkedin size={16} stroke={2} />}>linkedin.com/in/sdabrutas</List.Item>
            </List>
          </Box>
          <Box>
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
              <Badge
                className={classes.skillBadge}
                size="lg"
                leftSection={<IconBrandReact size={14} />}
              >
                React
              </Badge>
              <Badge
                className={classes.skillBadge}
                size="lg"
                leftSection={<IconBrandAngular size={14} />}
              >
                Angular
              </Badge>
              <Badge
                className={classes.skillBadge}
                size="lg"
                leftSection={<IconBrandVite size={14} />}
              >
                Vite
              </Badge>
              <Badge
                className={classes.skillBadge}
                size="lg"
                leftSection={<IconBrandNextjs size={14} />}
              >
                Next.js
              </Badge>   
              <Badge
                className={classes.skillBadge}
                size="lg"
                leftSection={<IconBrandReactNative size={14} />}
              >
                React Native
              </Badge>
              <Badge
                className={classes.skillBadge}
                size="lg"
                leftSection={<IconSkull size={14} />}
              >
                create-react-app
              </Badge>
            </Flex>
            <Title order={5} fw="400">State Management / Middlewares</Title>
            <Flex gap={4} wrap="wrap" mb="sm">
              <Badge
                className={classes.skillBadge}
                size="lg"
                leftSection={<IconBrandRedux size={14} />}
              >
                Redux
              </Badge>
              <Badge
                className={classes.skillBadge}
                size="lg"
              >
                Redux Thunk
              </Badge>
              <Badge
                className={classes.skillBadge}
                size="lg"
              >
                Redux Saga
              </Badge>
              <Badge
                className={classes.skillBadge}
                size="lg"
              >
                RTK Query
              </Badge>
              <Badge
                className={classes.skillBadge}
                size="lg"
              >
                React Query
              </Badge>
            </Flex>
            <Title order={5} fw="400">Styling / Component Libraries</Title>
            <Flex gap={4} wrap="wrap" mb="sm">
              <Badge
                className={classes.skillBadge}
                size="lg"
              >
                styled-components
              </Badge>
              <Badge
                className={classes.skillBadge}
                size="lg"
              >
                Emotion
              </Badge>
              <Badge
                className={classes.skillBadge}
                size="lg"
                leftSection={<IconBrandTailwind size={14} />}
              >
                Tailwind
              </Badge>
              <Badge
                className={classes.skillBadge}
                size="lg"
              >
                Material UI
              </Badge>
              <Badge
                className={classes.skillBadge}
                size="lg"
              >
                Ant Design
              </Badge>
              <Badge
                className={classes.skillBadge}
                size="lg"
                leftSection={<IconBrandMantine size={14} />}
              >
                Mantine
              </Badge>
            </Flex>
            <Title order={5} fw="400">Testing</Title>
            <Flex gap={4} wrap="wrap" mb="sm">
              <Badge
                className={classes.skillBadge}
                size="lg"
              >
                Testing Library
              </Badge>
              <Badge
                className={classes.skillBadge}
                size="lg"
              >
                Jest
              </Badge>
              <Badge
                className={classes.skillBadge}
                size="lg"
              >
                Enzyme
              </Badge>
              <Badge
                className={classes.skillBadge}
                size="lg"
                leftSection={<IconBrandVite size={14} />}
              >
                Vitest
              </Badge>
              <Badge
                className={classes.skillBadge}
                size="lg"
              >
                Selenium
              </Badge>
              <Badge
                className={classes.skillBadge}
                size="lg"
              >
                Playwright
              </Badge>
            </Flex>
            <Title order={5} fw="400">Other</Title>
            <Flex gap={4} wrap="wrap" mb="sm">
              <Badge
                className={classes.skillBadge}
                size="lg"
                leftSection={<IconBrandTypescript size={14} />}
              >
                Typescript
              </Badge>
              <Badge
                className={classes.skillBadge}
                size="lg"
                leftSection={<IconBrandHtml5 size={14} />}
              >
                HTML
              </Badge>
              <Badge
                className={classes.skillBadge}
                size="lg"
                leftSection={<IconBrandCss3 size={14} />}
              >
                CSS
              </Badge>
              <Badge
                className={classes.skillBadge}
                size="lg"
                leftSection={<IconBrandNodejs size={14} />}
              >
                Node.js
              </Badge>
              <Badge
                className={classes.skillBadge}
                size="lg"
              >
                Express
              </Badge>
              <Badge
                className={classes.skillBadge}
                size="lg"
                leftSection={<IconBrandGit size={14} />}
              >
                Git
              </Badge>
              <Badge
                className={classes.skillBadge}
                size="lg"
                leftSection={<IconBrandStorybook size={14} />}
              >
                Storybook
              </Badge>
              <Badge
                className={classes.skillBadge}
                size="lg"
                leftSection={<IconBrandThreejs size={14} />}
              >
                Three.js
              </Badge>
              <Badge
                className={classes.skillBadge}
                size="lg"
                leftSection={<IconBrandFigma size={14} />}
              >
                Figma
              </Badge>
              <Badge
                className={classes.skillBadge}
                size="lg"
                leftSection={<IconBrandAdobePhotoshop size={14} />}
              >
                Adobe Photoshop
              </Badge>
              <Badge
                className={classes.skillBadge}
                size="lg"
              >
                Agile SDLC
              </Badge>
              <Badge
                className={classes.skillBadge}
                size="lg"
                leftSection={<IconBrandNotion size={14} />}
              >
                Notion
              </Badge>
            </Flex>
          </Box>
        </Box>
        <Stack flex={1} pl="sm" pt="md">
          <Box mb="lg">
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
          </Box>
        </Stack>
      </Group>
    </Container>
  );
}