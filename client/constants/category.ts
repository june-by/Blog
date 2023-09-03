export const Category = [
  "JavaScript",
  "React",
  "Web",
  "TypeScript",
  "TroubleShooting",
  "Book",
  "NodeJs",
  "OperatingSystem",
  "NetWork",
  "HTML-CSS",
  "Git",
  "회고",
] as const;

export type CategoryType = (typeof Category)[number];

export const CATEGORY_TO_HLJS_CLASS: Record<CategoryType, string> = {
  TypeScript: "typescript",
  JavaScript: "javascript",
  TroubleShooting: "typescript",
  Book: "typescript",
  React: "tsx",
  Web: "javascript",
  NodeJs: "javascript",
  OperatingSystem: "",
  NetWork: "",
  "HTML-CSS": "",
  Git: "",
  회고: "",
};

export const SnippetsCategory = ["JavaScript", "TypeScript", "React", "HTML/CSS"];
