'use strict';

class Screen
{
    constructor()
    {
        this.brightness = 50;
        this.on         = false;
    }

    turnOn()
    {
        this.on = true;
    }

    turnOff()
    {
        this.on = false;
    }

    updateChargeDisplay(amount)
    {
        this.chargeDisplay = `${amount}`;
    }
}

export default Screen;