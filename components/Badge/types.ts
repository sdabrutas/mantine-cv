import { BadgeProps as MantineBadgeProps, ThemeIconProps } from "@mantine/core";

export interface BadgeProps {
  label: string;
  icon?: React.ReactElement<ThemeIconProps>;
  variant?: MantineBadgeProps['variant'];
}
