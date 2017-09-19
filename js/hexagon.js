
export default function Hexagon(isalive){
    var hex=document.createElement("div");
    hex.classList.add("hex");
    if(isalive) hex.classList.add("alive");
    else hex.classList.add("dead");

    hex.addEventListener("click", onclick);

    var ret = {hex, isalive, toString, die, revive, isInEvenRow};

    return ret;

    function toString() {
        return this.isalive ? "1" : "0";
    }

    function onclick() {
        if(ret.isalive){
            ret.die();
        }
        else{
            ret.revive();
        }
    }

    function die(){
        this.hex.classList.remove("alive");
        this.hex.classList.add("dead");
        this.isalive=false;
    }
    function revive() {
        this.hex.classList.remove("dead");
        this.hex.classList.add("alive");
        this.isalive=true;
    }

    function isInEvenRow() {
        return this.hex.parentNode.classList.contains("even");
    }
}