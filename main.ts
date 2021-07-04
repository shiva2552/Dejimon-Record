var ds = new DejimonServices();
var More: HTMLTableElement = <HTMLTableElement> document.getElementById("info");
var table: HTMLTableElement = <HTMLTableElement> document.getElementById("myTable");
var Add: HTMLTableElement = <HTMLTableElement> document.getElementById("addInfo");

document.getElementById("create")!.addEventListener('click',function(){
    console.log((<HTMLInputElement>document.getElementById("name")).value)
    if((<HTMLInputElement>document.getElementById("name")).value.trim().length == 0){
        (<HTMLInputElement>document.getElementById("name")).value = "Dejimon"
    }
    var per = {
        name: (<HTMLInputElement>document.getElementById("name")).value,
        type: (<HTMLInputElement>document.getElementById("type")).value,
        weight: parseInt((<HTMLInputElement>document.getElementById("weight")).value),
        height: parseInt((<HTMLInputElement>document.getElementById("height")).value),
        strength: parseInt((<HTMLInputElement>document.getElementById("strength")).value)
    }
    ds.newArray();
    if (localStorage.getItem("Dejimon") !== null) {
        var obj2 = JSON.parse(localStorage.Dejimon);
        for (var i = 0; i < obj2.dejimon.length; i++) { 
            ds.addOld(obj2.dejimon[i]);
        }
    }
    ds.add(per);
    //console.log(document.getElementById("name")!.innerHTML)
    //localStorage.setItem("Dejimon",JSON.stringify(ds))
    
    //ds.add(per);
    //console.log(ds.dejimon)
    localStorage.Dejimon = JSON.stringify(ds);
    //console.log("here")
    //console.log(ds.dejimon[0]);
    ///ddmdj
    // add to table
    //var table: HTMLTableElement = <HTMLTableElement> document.getElementById("myTable");
    //var header = table.createTHead();
    /*
    var row = table.insertRow(-1);
    //var cell1 = row.insertCell(0);
    row.insertCell(0).innerHTML = "<td>" + ds.dejimon[ds.dejimon.length-1].id + "</td>";
    row.insertCell(1).innerHTML = "<td>" + ds.dejimon[ds.dejimon.length-1].name + "</td>";
    row.insertCell(2).innerHTML = "<td>" + ds.dejimon[ds.dejimon.length-1].type + "</td>";
    row.insertCell(3).innerHTML = '<td><input type="button" value="More" onclick="showMore(this)"/></td>';
    row.insertCell(4).innerHTML = '<td><input type="button" value="Delete" onclick="deleteRow(this)"/></td>';

    console.log("hello")
    console.log(ds.dejimon.length-1)
    table.rows[ds.dejimon.length].cells[0].style.visibility = "hidden";

    More.style.visibility = "hidden";*/

    //console.log("here")
    cleanTable();
    fileRead();
    Add.style.visibility = "hidden";
    //dont refresh assume - TODO
    // the table doesnt erase WORKING


})

/*document.getElementById("get")!.addEventListener('click',function(){
    console.log(ds.showAll())
    var obj2 = JSON.parse(localStorage.Dejimon);
    //var obj2 = localStorage.getItem("Dejimon");
    //var m = JSON.parse(localStorage.getItem("Dejimon"));
    console.log(obj2.dejimon);
    console.log(obj2.dejimon[0].name);
})*/

function deleteRow(btn:any) {
    var msg:boolean = confirm("Are you sure that you want to delete this Dijimon?!");
    if(msg == true){
        var row = btn.parentNode.parentNode;
        var dID = btn.parentNode.parentNode.firstChild.innerHTML;
        row.parentNode.removeChild(row);
        var obj2 = JSON.parse(localStorage.Dejimon);
        for (var i = 0; i < obj2.dejimon.length; i++) { 
            if(obj2.dejimon[i].id == dID){
                obj2.dejimon.splice(i,1);
            }
        }
        localStorage.Dejimon = JSON.stringify(obj2);

    }
    More.style.visibility = "hidden";
    Add.style.visibility = "hidden";

}

function showMore(btn:any){
    var dID = btn.parentNode.parentNode.firstChild.innerHTML;
    //console.log(dID);
    //console.log("^");
    var obj2 = JSON.parse(localStorage.Dejimon);
    for (var i = 0; i < obj2.dejimon.length; i++) { 
        if(obj2.dejimon[i].id == dID){
            var info: HTMLTableElement = <HTMLTableElement> document.getElementById("infoTable");
            info.rows[0].cells[1].innerHTML = obj2.dejimon[i].name;
            //console.log(info.rows[0].cells[1])
            info.rows[1].cells[1].innerHTML = obj2.dejimon[i].type;
            info.rows[2].cells[1].innerHTML = obj2.dejimon[i].height;
            info.rows[3].cells[1].innerHTML = obj2.dejimon[i].weight;
            info.rows[4].cells[1].innerHTML = obj2.dejimon[i].strength;
            info.rows[5].cells[1].innerHTML = (obj2.dejimon[i].overall).toFixed(2);
            if("yorkshire" == obj2.dejimon[i].type){
                info.rows[4].cells[0].innerHTML = "Water and Ice Abilities:"
            }
            //console.log(obj2.dejimon[i].type)
            if("lean" == obj2.dejimon[i].type){
                info.rows[4].cells[0].innerHTML = "Fire and Charm Abilities:"
            }
            if("potbelly" == obj2.dejimon[i].type){
                info.rows[4].cells[0].innerHTML = "Electric Abilities:"
            }
        }
    }
    
    More.style.visibility = "visible";
    Add.style.visibility = "hidden";

}

function fileRead(){
    if (localStorage.getItem("Dejimon") !== null) {
        var obj2 = JSON.parse(localStorage.Dejimon);
        //console.log(" number look ")
        //console.log(maxID())
        ds.setCount(maxID()+1);

        for (var i = 0; i < obj2.dejimon.length; i++) { 
            var row = table.insertRow(-1);
            //var cell1 = row.insertCell(0);
            row.insertCell(0).innerHTML = "<td>" + obj2.dejimon[i].id + "</td>";
            row.insertCell(1).innerHTML = "<td>" + obj2.dejimon[i].name + "</td>";
            row.insertCell(2).innerHTML = "<td>" + obj2.dejimon[i].type + "</td>";
            row.insertCell(3).innerHTML = '<td><input type="button" value="More" onclick="showMore(this)"/></td>';
            row.insertCell(4).innerHTML = '<td><input type="button" value="Delete" onclick="deleteRow(this)"/></td>';
        
            //console.log("hello")
            //console.log(ds.dejimon.length-1)
            table.rows[i+1].cells[0].style.visibility = "hidden";
        
        
        }
        More.style.visibility = "hidden";
        Add.style.visibility = "hidden";

        //console.log(obj2.dejimon[0].name);
    }
}

function cleanTable(){
    for(var i = 1;i< table.rows.length;){
        table.deleteRow(i);
    }
    //console.log("not clean");
}
function maxID(){
    var obj2 = JSON.parse(localStorage.Dejimon);
    var max: number = 0;
    for (var i = 0; i < obj2.dejimon.length; i++) {
        if(max < obj2.dejimon[i].id){
            max = obj2.dejimon[i].id;
        }
       
    }
    return max;
}


document.getElementById("add")!.addEventListener('click',function(){
    Add.style.visibility = "visible";
    More.style.visibility = "hidden";
})

var ws = <HTMLInputElement>document.getElementById("weight");
var hs  = <HTMLInputElement>document.getElementById("height");
var ss = <HTMLInputElement>document.getElementById("strength");

var woutput = <HTMLElement>document.getElementById("ws");
woutput.innerHTML = ws.value;
var houtput = <HTMLElement>document.getElementById("hs");
houtput.innerHTML = hs.value;
var soutput = <HTMLElement>document.getElementById("ss");
soutput.innerHTML = ss.value;

ws.oninput = function() {
    woutput.innerHTML = ws.value;
}
hs.oninput = function() {
    houtput.innerHTML = hs.value;
}
ss.oninput = function() {
    soutput.innerHTML = ss.value;
}