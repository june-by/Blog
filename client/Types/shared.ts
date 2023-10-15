import "axios";

export interface MutationParams {
  onSuccess: () => void;
  onError?: (error: Error) => void;
}

declare module "axios" {
  export interface HeadersDefaults {
    Cookie?: string;
  }
}

export interface DateType {
  year: number;
  month: number;
  date: number;
}
