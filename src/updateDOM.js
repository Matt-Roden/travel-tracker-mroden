import { destinations, allTrips, traveler } from './scripts.js'

var dayjs = require('dayjs')

const todaysDate = (dayjs().format('YYYY/MM/DD'))
console.log(todaysDate, 'todaybutt');



const domUpdateMethods = {

  renderSingleDestination() {
    console.log('test!!!<><><>')
  }

}; // END domUpdates
export default domUpdateMethods;
