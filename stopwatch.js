function Stopwatch() {
  let startTime,
    endTime,
    running,
    duration = 0;

  Object.defineProperty(this, "duration", {
    get: () => {
      return duration;
    },
    set: val => {
      duration = val;
    }
  });
  Object.defineProperty(this, "startTime", {
    get: () => {
      return startTime;
    },
    set: val => {
      startTime = val;
    }
  });
  Object.defineProperty(this, "endTime", {
    get: () => {
      return endTime;
    },
    set: val => {
      endTime = val;
    }
  });
  Object.defineProperty(this, "running", {
    get: () => {
      return running;
    },
    set: val => {
      running = val;
    }
  });
}

Stopwatch.prototype.start = () => {
  if (this.running) {
    throw new Error("Stopwatch is already running");
  }
  this.running = true;
  this.startTime = new Date();
};

Stopwatch.prototype.stop = () => {
  if (!this.running) {
    throw new Error("Stopwatch is already stoped");
  }
  this.running = false;
  this.endTime = new Date();
  const seconds = (this.endTime.getTime() - this.startTime.getTime()) / 1000;
  this.duration += seconds;
};

Stopwatch.prototype.reset = () => {
  this.duration = 0;
  this.startTime = null;
  this.endTime = null;
  this.running = false;
};
