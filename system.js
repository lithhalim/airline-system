'use strict';

const eventEmmiter = require("./event");
const { faker } = require('@faker-js/faker');
require('./pilot');


//ALERT NEW FLIGHT AND TACKOFF AND ARRIVED
eventEmmiter.on('new-flight', Flight1);
eventEmmiter.on('took-off', Flight2);
eventEmmiter.on('Arrived', Flight3);


function Flight1() {
  let flight1 = {
    Flight: {
      event: 'new-flight',
      time: faker.date.past(),
      Details: {
        airLine: 'Qatar airlines',
        flightID: faker.datatype.uuid(),
        pilot: faker.internet.userName(),
        destination: faker.address.city(),
      },
    },
  };
  console.log(flight1);
}
function Flight2() {
  let flight1 = {
    Flight: {
      event: 'took_off',
      time: faker.date.past(),
      Details: {
        airLine: 'Qatar airlines',
        flightID: faker.datatype.uuid(),
        pilot: faker.internet.userName(),
        destination: faker.address.city(),
      },
    },
  };
  console.log(flight1);
}
function Flight3() {
  let flight1 = {
    Flight: {
      event: 'arrived',
      time: faker.date.past(),
      Details: {
        airLine: 'Qatar airlines',
        flightID: faker.datatype.uuid(),
        pilot: faker.internet.userName(),
        destination: faker.address.city(),
      },
    },
  };
  console.log(flight1);
}
