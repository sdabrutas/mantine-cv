import { BadgeProps } from "../Badge/types";

export interface ExperienceBlockProps {
  role: string;
  tenure: string;
  company: string;
  summary: string[];
  techstack: BadgeProps[];
  defaultExpanded?: boolean;
}