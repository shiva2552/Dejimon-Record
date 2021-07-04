"use strict";
class DejimonServices {
    constructor() {
        this.dejimon = [];
    }
    add(d) {
        d.id = DejimonServices.currentID;
        d.overall = (d.height + d.weight + d.strength) / 3;
        DejimonServices.currentID++;
        this.dejimon.push(d);
        //console.log("add");
    }
    addOld(d) {
        //d.id = DejimonServices.currentID;
        //DejimonServices.currentID++;
        this.dejimon.push(d);
        //console.log("addOLD");
    }
    showAll() {
        //console.log("show all");
        return this.dejimon;
    }
    newArray() {
        this.dejimon = [];
    }
    setCount(len) {
        DejimonServices.currentID = len;
    }
}
DejimonServices.currentID = 0;
