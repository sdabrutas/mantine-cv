import { useMemo } from "react";
import { Box, Flex, Group, Progress, Text, ThemeIcon } from "@mantine/core";
import { IconBrandJavascript } from "@tabler/icons-react";

import classes from './language.module.css';

interface Props {
  name: string;
  icon: React.ReactNode;
  rating: number;
}

const LanguageMeter: React.FC<Props> = ({ name, icon, rating }) => {
  const ratingBars = useMemo(() => {
    const stack: number[] = [];
    for (let i = rating; i > 0; i--) {
      if (i > 1) stack.push(100);
      else stack.push(i * 100);
    }
    return Array.from(Array(5)).map((_, index) => <Progress key={`bar-${index}`} value={stack[index] ?? 0} size="sm" color="#323b4c" />);
  }, []);

  return (
    <Flex align="center" mb="xs">
      <ThemeIcon size={36} radius="md" className={classes.languageIcon}>
        {icon}
      </ThemeIcon>
      <Box flex="1">
        <Text size="xs">{name}</Text>
        <Group grow gap={1}>
          {ratingBars}
        </Group>
      </Box>
    </Flex> 
  );
};

export default LanguageMeter;
