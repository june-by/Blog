import { type ReactNode } from "react";

export interface ArchiveContentProps<T> {
  fetcher: () => Promise<T>;
  children: (data: T) => ReactNode;
  title: ((data: T) => string) | string;
}
