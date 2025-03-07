import { forwardRef } from 'react';
import { Flex, Group, List, Spoiler, Text, Timeline } from '@mantine/core';

import { IconFoldDown, IconFoldUp } from '@tabler/icons-react';
import classes from './experience.module.css';
import { Badge } from '..';
import { ExperienceBlockProps } from './types';

const ExperienceBlock = forwardRef<HTMLDivElement, ExperienceBlockProps>(
  ({ role, company, tenure, summary, techstack, defaultExpanded = false, ...rest }, ref) => (
    <Timeline.Item
      ref={ref}
      title={
        <Group justify="space-between">
          <Text fw={500}>{role}</Text>
          <Text fs="italic">{tenure}</Text>
        </Group>
      }
      {...rest}
    >
      <Spoiler
        classNames={{ control: classes.spoilerControl }}
        maxHeight={64}
        showLabel={<IconFoldDown size={20} />}
        hideLabel={<IconFoldUp size={20} />}
        initialState={defaultExpanded}
      >
        <Text>{company}</Text>
        <List>
          {summary.map((item, index) => (
            <List.Item key={`summary-item-${index}`} fz="sm">
              {item}
            </List.Item>
          ))}
        </List>
        <Flex mt="sm" mb="sm" columnGap={2} rowGap={4} wrap="wrap">
          {techstack.map((tech) => <Badge key={tech.label} variant="light" label={tech.label} icon={tech.icon} />)}
        </Flex>
      </Spoiler>
    </Timeline.Item>
  ));

export default ExperienceBlock;
