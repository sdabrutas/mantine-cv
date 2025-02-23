import { Badge, createTheme, DEFAULT_THEME, ThemeIcon } from "@mantine/core";
import localFont from "next/font/local";

const now = localFont({
  src: [
    {
      path: './fonts/Now-Thin.otf',
      weight: '100',
      style: 'normal',
    },
    {
      path: './fonts/Now-Light.otf',
      weight: '200',
      style: 'normal',
    },
    {
      path: './fonts/Now-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Now-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Now-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/Now-Black.otf',
      weight: '900',
      style: 'normal',
    },
  ]
});

export const theme = createTheme({
  fontFamily: now.style.fontFamily,
  fontFamilyMonospace: 'Monaco, Courier, monospace',
  headings: {
    fontFamily: `${now.style.fontFamily}, ${DEFAULT_THEME.fontFamily}`,
  },
  components: {
    Badge: Badge.extend({
      defaultProps: {
        color: "#323b4c",
      },
    }),
    ThemeIcon: ThemeIcon.extend({
      defaultProps: {
        color: "#323b4c",
      },
    }),
  }
});
