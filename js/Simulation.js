import Ruler from "./Ruler"

export default function Simulation(hexagonmap, freq=1 /*hertz*/, ruler=Ruler()) {

    var iterating=false;
    var delay=1000/freq;

    function iterate() {
        ruler.apply(hexagonmap);
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
                setTimeout(()=>this.iterate(), delay);
            }
        }
    };
}