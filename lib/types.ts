import { ButtonHTMLAttributes, InputHTMLAttributes, SelectHTMLAttributes, ReactNode } from 'react';

export interface UserData {
  name: string;
  title: string;
  subtitle: string;
  about: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  twitter: string;
  website: string;
  currentWork: string;
  currentLearn: string;
  collaboration: string;
  askMe: string;
  funFact: string;
  techStack: string[];
  projects: Project[];
  showSections: {
    stats: boolean;
    graph: boolean;
    about: boolean;
    techStack: boolean;
    social: boolean;
    projects: boolean;
  };
}

export interface Project {
  name: string;
  description: string;
  url: string;
  tech: string[];
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'secondary' | 'ghost';
  size?: 'default' | 'sm' | 'lg';
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export interface CheckboxProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  className?: string;
}

export interface TabsProps {
  value: string;
  onChange: (value: string) => void;
  children: ReactNode;
  className?: string;
}

export interface TabProps {
  value: string;
  label: string;
  isSelected?: boolean;
  onClick?: () => void;
}

export interface ToastProps {
  message: string;
  type?: 'default' | 'success' | 'error';
  onClose: () => void;
  className?: string;
}

export interface TechCategory {
  title: string;
  items: string[];
}

export interface TechCategories {
  [key: string]: TechCategory;
}

export interface SectionProps {
  userData: UserData;
  setUserData: (data: UserData) => void;
}

export type SectionKey = keyof UserData['showSections'];