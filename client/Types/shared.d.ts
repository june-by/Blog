export interface ErrorMessage {
  messsage: string;
}

export interface MutationParams {
  onSuccess: () => void;
  onError: (error: ErrorMessage) => void;
}
