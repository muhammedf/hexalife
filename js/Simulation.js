import Ruler from "./Rules"

export default function Simulation(hexagonmap, ruler=Ruler()) {

    var iterating=false;

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
                setTimeout(()=>this.iterate(), 1000);
            }
        }
    };
}