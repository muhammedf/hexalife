import {rule1} from "./Rules"

export default function Simulation(hexagonmap) {

    var iterating=false;

    function iterate() {
        var funcs=[];
        for(let hex of hexagonmap.iterator()){
            funcs.push(rule1.apply(hex, hexagonmap.getNeighboursOf(hex).filter(n=>n.isalive).length));
        }
        funcs.filter(f=>f!==undefined).forEach(f=>f());
    }

    return {
        start: function() {
            if(!iterating){
                iterating=true;
                this.iterate();
            }
        },
        stop: function(){
            iterating=false;
        },
        iterate: function () {
            iterate();
            if(iterating===true){
                setTimeout(()=>this.iterate(), 1000);
            }
        }
    };
}