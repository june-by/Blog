const throttle = (callback: () => void, waitTime: number) => {
  let timerId: null | ReturnType<typeof setTimeout> = null;
  return () => {
    if (timerId) {
      return;
    }
    timerId = setTimeout(() => {
      callback.call(this);
      timerId = null;
    }, waitTime);
  };
};

export default throttle;
