import { cloneElement } from 'react';
import { BadgeProps, Badge as MantineBadge, ThemeIconProps } from '@mantine/core';

import classes from './badge.module.css';

const Badge: React.FC<{ label: string; icon?: React.ReactElement<ThemeIconProps>; variant?: BadgeProps['variant'] }> = ({ label, icon, variant = 'filled' }) => (
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
