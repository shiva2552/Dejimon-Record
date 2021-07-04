interface Services{
    add(d: Dejimon):void;
    showAll():Dejimon[];
}
class DejimonServices implements Services{
    dejimon: Dejimon[];
    static currentID = 0;
    constructor(){
        this.dejimon = [];
    }
    add(d:Dejimon){
        d.id = DejimonServices.currentID;
        d.overall = (d.height + d.weight + d.strength)/3;
        DejimonServices.currentID++;
        this.dejimon.push(d);
        //console.log("add");
    
    }
    addOld(d:Dejimon){
        //d.id = DejimonServices.currentID;
        //DejimonServices.currentID++;
        this.dejimon.push(d);
        //console.log("addOLD");
    
    }
    showAll(){
        //console.log("show all");
        return this.dejimon;
    }
    newArray(){
        this.dejimon = [];
    }
    setCount(len:number):void{
        DejimonServices.currentID = len;
    }
}