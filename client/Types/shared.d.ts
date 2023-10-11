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
