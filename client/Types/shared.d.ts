import "axios";

export interface ErrorMessage {
  messsage: string;
}

export interface MutationParams {
  onSuccess: () => void;
  onError?: (error: ErrorMessage) => void;
}

declare module "axios" {
  export interface HeadersDefaults {
    Cookie?: string;
  }
}
