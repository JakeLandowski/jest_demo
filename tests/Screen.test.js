'use strict';

import Screen from '../src/Screen.js';

//========= Setup =========//

let screen;

beforeEach(() => 
{
    screen = new Screen();
});

//========= Tests =========//

describe('Testing Screen class constructor', () => 
{
    test('creates an object', () => 
    {
        expect(typeof screen).toBe('object');
    });

    test('brightness level starts at 50', () => 
    {
        expect(screen.brightness).toBe(50);
    });

    test('on field should start out false', () => 
    {
        expect(screen.on).toBe(false);
    });
});

describe('Testing turnOn() method', () => 
{
    test('should set on field to true', () => 
    {
        screen.on = false;
        screen.turnOn();

        expect(screen.on).toBe(true);
    });
});

describe('Testing turnOff() method', () => 
{
    test('should set on field to false', () => 
    {
        screen.on = true;
        screen.turnOff();
        
        expect(screen.on).toBe(false);
    });
});

describe('Testing updateChargeDisplay() method', () => 
{
    beforeEach(() => 
    {
        screen.updateChargeDisplay(5);
    });
    
    test('chargeDisplay should be a string after method is called', () => 
    {    
        expect(typeof screen.chargeDisplay).toBe('string');
    });

    test('chargeDisplay should be 5 after passing 5', () => 
    {    
        expect(screen.chargeDisplay).toBe('5');
    });
});