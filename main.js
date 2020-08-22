import { makeBearsForm } from './components/bearsForm.js';
import { makeRiver } from './components/river.js';
import { timeEvent } from './components/fishtally.js';
import { bearsArray } from './helpers/bearsArray.js';

const init = () => {
    makeBearsForm();
    makeRiver();
    timeEvent(bearsArray);
}

init();