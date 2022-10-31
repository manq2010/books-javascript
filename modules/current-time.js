import { DateTime } from './luxon.js';

const currentTime = () => {
  const timeHolder = document.querySelector('.time-container');
  timeHolder.innerHTML = DateTime.now().setZone('system').toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
};

export default currentTime;