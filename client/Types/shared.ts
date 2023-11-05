export interface MutationParams {
  onSuccess: () => void;
  onError?: (error: Error) => void;
}

export interface DateType {
  year: number;
  month: number;
  date: number;
}
