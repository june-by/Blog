import { toast } from "react-toastify";

export const MOCK_FN = {
  intersectionObserver: () => {
    const intersectionObserverMock = () => ({
      observe: () => null,
    });
    window.IntersectionObserver = jest.fn().mockImplementation(intersectionObserverMock);
  },
};

export const mockingToast = (type: "success" | "error") => {
  return jest.spyOn(toast, type).mockImplementation();
};
