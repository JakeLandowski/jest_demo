'use strict';

import Battery from '../src/Battery.js';

//========= Setup =========//

let battery;

beforeEach(() => 
{
    battery = new Battery();
});

//========= Tests =========//

describe('Testing Battery class constructor', () => 
{
    test('creates an object', () => 
    {
        expect(typeof battery).toBe('object');
    });

    test('charge level starts at 0', () => 
    {
        expect(battery.charge).toBe(0);
    });
});

describe('Testing addCharge() method', () => 
{
    test('adding 5 charge to battery with 0 charge leaves it at 5.', () => 
    {
        battery.charge = 0;
        battery.addCharge(5);
   
        expect(battery.charge).toBe(5);
    });

    test('adding 5 charge to battery with 98 charge leaves it at 100.', () => 
    {
        battery.charge = 98;
        battery.addCharge(5);
   
        expect(battery.charge).toBe(100);
    });
});

describe('Testing getChargeLevel() method', () => 
{
    test('should return 5 if battery\'s charge is 5', () => 
    {
        battery.charge = 5;
      
        expect(battery.getChargeLevel()).toBe(5);
    });
});