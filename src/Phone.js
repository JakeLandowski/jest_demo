'use strict';

import Battery from './Battery.js';
import Screen from './Screen.js';

class Phone
{
    constructor()
    {
        this.battery = new Battery();
        this.screen  = new Screen();
        this.on      = false;
        this.updateScreen();
    }

    turnOn()
    {
        if(this.battery.getChargeLevel() >= 5)
        {
            this.on = true;
            this.screen.turnOn();
        }
    }

    turnOff()
    {
        this.on = true;
        this.screen.turnOff();
    }

    plugInPower()
    {
        this.chargeInterval = setInterval(() => 
        {
            this.battery.addCharge(5)
            this.updateScreen();

        }, 500);
    }

    unPlugPower()
    {
        clearInterval(this.chargeInterval);
    }

    updateScreen()
    {
        this.screen.updateChargeDisplay(this.battery.getChargeLevel());
    }
}

export default Phone;