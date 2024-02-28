export const getDarkThemeClass = (classes: string) =>
  classes
    .split(" ")
    .map((className) => `dark:${className}`)
    .join(" ");
