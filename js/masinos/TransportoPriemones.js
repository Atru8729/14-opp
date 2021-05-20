class TransportoPriemones {
    constructor (name, steeringWheelPosition, seatCount, wheelCount) {
        this.name = name;
        this.steeringWheelPosition = steeringWheelPosition;
        this.seatCount = seatCount;
        this.wheelCount = wheelCount;
        this.engineIsOn = false;
    }
        turnOnTheEngine() {
            this.turnOnTheEngine = true;
        }

        turnOfTheEngine() {
            this.turnOfTheEngine = false;
    }
}

module.exports = TransportoPriemones;