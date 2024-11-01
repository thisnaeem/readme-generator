import { UserData } from './types';
import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateMarkdown(userData: UserData): string {
  let markdown = '';

  // Add header
  markdown += `<h1 align="center">Hi 👋, I'm ${userData.name}</h1>\n\n`;
  markdown += `<h3 align="center">${userData.title}</h3>\n\n`;

  // Add about section
  if (userData.showSections.about && userData.about) {
    markdown += `## About Me\n\n${userData.about}\n\n`;
  }

  // Add current status
  if (userData.currentWork || userData.currentLearn) {
    markdown += '## Current Status\n\n';
    if (userData.currentWork) markdown += `- 🔭 I'm currently working on ${userData.currentWork}\n`;
    if (userData.currentLearn) markdown += `- 🌱 I'm currently learning ${userData.currentLearn}\n`;
    markdown += '\n';
  }

  // Add tech stack
  if (userData.showSections.techStack && userData.techStack.length > 0) {
    markdown += '## Skills\n\n<p align="center">\n';
    markdown += `  <img src="https://skillicons.dev/icons?i=${userData.techStack.join(',')}" />\n`;
    markdown += '</p>\n\n';
  }

  // Add GitHub stats
  if (userData.showSections.stats && userData.github) {
    markdown += '## GitHub Stats\n\n<p align="center">\n';
    markdown += `  <img src="https://github-readme-stats.vercel.app/api?username=${userData.github}&show_icons=true&theme=tokyonight" />\n`;
    markdown += `  <img src="https://github-readme-streak-stats.herokuapp.com/?user=${userData.github}&theme=tokyonight" />\n`;
    markdown += '</p>\n\n';
  }

  // Add projects
  if (userData.showSections.projects && userData.projects.length > 0) {
    markdown += '## Projects\n\n';
    userData.projects.forEach(project => {
      markdown += `### [${project.name}](${project.url})\n\n`;
      markdown += `${project.description}\n\n`;
      if (project.tech.length > 0) {
        markdown += `Technologies: ${project.tech.join(', ')}\n\n`;
      }
    });
  }

  // Add social links
  if (userData.showSections.social) {
    markdown += '## Connect With Me\n\n<p align="center">\n';
    if (userData.github) markdown += `  <a href="https://github.com/${userData.github}"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" /></a>\n`;
    if (userData.linkedin) markdown += `  <a href="${userData.linkedin}"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" /></a>\n`;
    if (userData.twitter) markdown += `  <a href="https://twitter.com/${userData.twitter}"><img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" /></a>\n`;
    markdown += '</p>\n';
  }

  return markdown;
}