import path from "path";
const rootDir = path.resolve(__dirname, "../");
import { ClockProps } from "./index.d";

const delay = (timeout: number): Promise<void> =>
  new Promise(resolve => setTimeout(resolve, timeout));
console.log(rootDir);

class Clock implements ClockProps {
  time: number;
  constructor() {
    this.time = Date.now();
  }
  log() {
    console.log(new Date(this.time));
  }
  add1s() {
    this.time += 1000;
  }
}

(async () => {
  const clock = new Clock();
  clock.log();
  await delay(1000);
  clock.add1s();
  clock.log();
  await delay(1000);
  clock.add1s();
  clock.log();
  await delay(1000);
  clock.add1s();
})();
