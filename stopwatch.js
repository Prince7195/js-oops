function Stopwatch() {
  let startTime,
    endTime,
    running,
    duration = 0;

  this.start = () => {
    if (running) {
      throw new Error("Stopwatch is already running");
    }
    running = true;
    startTime = new Date();
  };

  this.stop = () => {
    if (!running) {
      throw new Error("Stopwatch is already stoped");
    }
    running = false;
    endTime = new Date();
    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds;
  };

  this.reset = () => {
    duration = 0;
    startTime = null;
    endTime = null;
    running = false;
  };

  Object.defineProperty(this, "duration", {
    get: () => {
      return duration;
    }
  });
}
