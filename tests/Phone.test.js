'use strict';

import Phone from '../src/Phone.js';
import Battery from '../src/Battery.js';
import Screen from '../src/Screen.js';

//========= Setup =========//

let phone, batteryMock, screenMock;

beforeEach(() => 
{   
    phone = new Phone();

    batteryMock = 
    {
        addCharge: jest.fn(),
        getChargeLevel: jest.fn(() => 5)
    };

    screenMock = 
    {
        turnOn: jest.fn(),
        turnOff: jest.fn(),
        updateChargeDisplay: jest.fn()
    };
    
    // hijack battery/screen objects with our own fakes
    phone.battery = batteryMock;
    phone.screen  = screenMock;
});

//========= Tests =========//

describe('Testing Phone class constructor', () => 
{
    const realPhone = new Phone();

    test('creates an object', () => 
    {
        expect(typeof realPhone).toBe('object');
    });

    test('has an initialized battery object', () => 
    {
        expect(realPhone.battery instanceof Battery).toBe(true);
    });

    test('has an initialized screen object', () => 
    {
        expect(realPhone.screen instanceof Screen).toBe(true);
    });

    test('on field should start out false', () => 
    {
        expect(realPhone.on).toBe(false);
    });
});


describe('Testing turnOn() method', () => 
{
    test('should call getChargeLevel() on battery to check it', () => 
    {
        phone.turnOn();
        expect(batteryMock.getChargeLevel).toHaveBeenCalledTimes(1);
    });

    describe('with battery charge >= 5', () => 
    {
        test('on field should be true', () => 
        {
            phone.turnOn();
            expect(phone.on).toBe(true);
        });
    
        test('screen should be told to turn on', () => 
        {
            phone.turnOn();
            expect(screenMock.turnOn).toHaveBeenCalledTimes(1);
        });
    });

    describe('with battery charge < 5', () => 
    {
        test('on field should be false', () => 
        {
            batteryMock.getChargeLevel.mockImplementation(() => 0);
            phone.turnOn();
            
            expect(phone.on).toBe(false);
        });
    
        test('screen should be not have been told to turn on', () => 
        {
            batteryMock.getChargeLevel.mockImplementation(() => 0);
            phone.turnOn();

            expect(screenMock.turnOn).toHaveBeenCalledTimes(0);
        });
    });
});