
export default function Hexagon(isalive){
    var hex=document.createElement("div");
    hex.classList.add("hex");
    if(isalive) hex.classList.add("alive");
    else hex.classList.add("dead");

    hex.addEventListener("click", onclick);

    var ret = {hex, isalive, toString, die, born, isInEvenRow, getState, setState};

    var state = isalive ? 1 : 0;

    return ret;

    function toString() {
        return this.isalive ? "1" : "0";
    }

    function onclick() {
        if(ret.isalive){
            ret.setState(0);
        }
        else{
            ret.setState(1);
        }
    }

    function die(){
        this.hex.classList.remove("alive");
        this.hex.classList.add("dead");
        this.isalive=false;
    }
    function born() {
        this.hex.classList.remove("dead");
        this.hex.classList.add("alive");
        this.isalive=true;
    }

    function isInEvenRow() {
        return this.hex.parentNode.classList.contains("even");
    }
    
    function getState() {
        return state;
    }

    function setState(s){
        state=s;
        if(!this.isalive && state>0){
            this.born();
        }
        else if(this.isalive && state<1){
            this.die();
        }
    }
}