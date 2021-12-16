export default function countdown(seconds = 60, stopAt = 0, callback = null) {
  return {
    seconds,
    stopAt,

    init() {
      const interval = setInterval(() => {
        if (this.seconds !== stopAt) {
          --this.seconds;
        }

        if (this.seconds == stopAt && typeof callback === 'function') {
          callback();

          clearInterval(interval);
          return true;
        }
      }, 1000);
    },
  };
}
