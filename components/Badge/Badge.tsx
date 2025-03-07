import { cloneElement } from 'react';
import { Badge as MantineBadge, ThemeIconProps } from '@mantine/core';

import classes from './badge.module.css';
import { BadgeProps } from './types';

const Badge: React.FC<BadgeProps> = ({ label, icon, variant = 'filled' }) => (
  <MantineBadge
    className={classes.skillBadge}
    size="lg"
    leftSection={icon && cloneElement(icon, { size: 14 })}
    variant={variant}
  >
    {label}
  </MantineBadge>
);

export default Badge;
