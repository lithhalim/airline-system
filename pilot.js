'use strict';

const eventEmmiter = require('./event');
const { faker } = require('@faker-js/faker');
require('./system');

let ID = faker.datatype.uuid();

//Keep Pilot Alerted 
eventEmmiter.on('new-flight', pilot);
function pilot() {
  setTimeout(() => {
    let PilotTackOff = `Pilot Number ${ID} Have Been TackOff`;
    console.log(PilotTackOff);
    //Emit Tack off
    eventEmmiter.emit('took-off', PilotTackOff);
  }, 4000);

  setTimeout(() => {
    let arrived = `Pilut Number ${ID} have Been Arrived`;
    console.log(arrived);
    //Emit arrive
    eventEmmiter.emit('Arrived', arrived);
  }, 7000);

}
