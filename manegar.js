'use strict';
const eventEmitter = require('./event')
const { faker } = require('@faker-js/faker');

require('./pilot');
require('./system');
let ID = faker.datatype.uuid();
let pilot = faker.internet.userName();


//trigger new flight every 10 secand
setInterval(() => {
  let InformationNewFlight = `New Fligh Number:${ID}`;
  console.log(InformationNewFlight);
  eventEmitter.emit('new-flight', InformationNewFlight);
}, 10000);


//keep manegar alerted for any flight
eventEmitter.on('Arrived', manager2);
function manager2() {
  console.log(`We Arrive With The Pilot ${pilot}`);
}
