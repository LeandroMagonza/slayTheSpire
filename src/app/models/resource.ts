export class Resource {
    name: String;
    currentAmount: number;
    initialValue: number;
    gain: number;
    constructor() {
        this.currentAmount = this.initialValue;
    }
    get currentResourceAmount() { return this.currentAmount; }
    get maxResourceAmount() { return this.currentAmount; }
    startCombat() { };
    startTurn() { };
    endCombat() { };
    endTurn() { };

}

export class Energy implements Resource {

    name: String = "Energy";
    currentAmount: number;
    initialValue: number = 3;
    gain: number;

    get currentResourceAmount() { return this.currentAmount; }
    get maxResourceAmount() { return this.currentAmount; }
    startCombat(): void {
        throw new Error("Method not implemented.");
    }
    startTurn(): void {
        this.currentAmount = this.gain;
    }
    endCombat(): void {
        throw new Error("Method not implemented.");
    }
    endTurn(): void {
        throw new Error("Method not implemented.");
    }

}
export class Faith implements Resource {

    name: String = "Faith";
    currentAmount: number;
    initialValue: number;
    gain: number;
    get currentResourceAmount() { return this.currentAmount; }
    get maxResourceAmount() { return this.currentAmount; }
    startCombat(): void {
        throw new Error("Method not implemented.");
    }
    startTurn(): void {
        this.currentAmount = this.initialValue;
    }
    endCombat(): void {
        throw new Error("Method not implemented.");
    }
    endTurn(): void {
        
    }

}