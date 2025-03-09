import { forwardRef } from 'react';
import { Box, Button, Collapse, Flex, Group, List, Spoiler, Text, Timeline } from '@mantine/core';
import { ExperienceBlockProps } from './types';
import { IconChevronDown, IconChevronUp, IconFoldDown, IconFoldUp } from '@tabler/icons-react';

import classes from './experience.module.css';
import { Badge } from '..';
import { useDisclosure } from '@mantine/hooks';

const ExperienceBlock = forwardRef<HTMLDivElement, ExperienceBlockProps>(
  ({ role, company, tenure, summary, techstack, defaultExpanded = false, ...rest }, ref) => {
    const [opened, { toggle }] = useDisclosure(defaultExpanded);

    return (
      <Timeline.Item
        ref={ref}
        className={classes.timelineItem}
        title={
          <Group justify="space-between" align="flex-start" gap="lg">
            <Text fw={500} style={{ flex: 1, overflowWrap: 'break-word' }}>{company}</Text>
            <Text fs="italic">{tenure}</Text>
          </Group>
        }
        {...rest}
      >
        <Text>{role}</Text>
        <List>
          {summary.map((item, index) => (
            <List.Item key={`summary-item-${index}`} fz="sm">
              {item}
            </List.Item>
          ))}
        </List>
        <Box className={classes.container} mt="xs">
          <Button
            fullWidth
            justify="flex-start"
            onClick={toggle}
            leftSection={opened ? <IconChevronUp size={20} /> : <IconChevronDown size={20} />}
            color="#323b4c"
            fw={400}
            radius={0}
          >
            Tech stack
          </Button>
          <Collapse in={opened}>
            <Flex columnGap={2} rowGap={4} wrap="wrap" p="xs">
              {techstack.map((tech) => <Badge key={tech.label} variant="light" label={tech.label} icon={tech.icon} />)}
            </Flex>
          </Collapse>
        </Box>
      </Timeline.Item>
    );
  });

export default ExperienceBlock;
