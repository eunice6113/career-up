// career-up/apps/network/src/styles/f.css.ts

const prefix = "network--";

export const style = (classNames: string[]): string => {
  return classNames.map((className) => `${prefix}${className}`).join(" ");
};