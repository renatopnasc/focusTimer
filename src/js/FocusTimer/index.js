import state from "./states.js";
import * as el from "./elements.js";
import * as events from "./events.js";
import * as timer from "./timer.js";

export function start(minutes, seconds) {
  state.minutes = minutes;
  state.seconds = seconds;

  timer.updateDisplay();

  events.registerControls();
  events.registerSoundsControls();
}