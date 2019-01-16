'use strict';

class Battery
{
    constructor()
    {
        this.charge = 0;
    }

    addCharge(amount)
    {
        this.charge += amount;
        if(this.charge > 100) this.charge = 100;
    }

    getChargeLevel()
    {
        return this.charge;
    }
}

export default Battery;