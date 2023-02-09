export const MOCK_FN = {
  intersectionObserver: () => {
    const intersectionObserverMock = () => ({
      observe: () => null,
    });
    window.IntersectionObserver = jest.fn().mockImplementation(intersectionObserverMock);
  },
};
