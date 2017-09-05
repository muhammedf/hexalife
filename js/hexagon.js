
export default function Hexagon(isalive){
    var hex=document.createElement("div");
    hex.classList.add("hex");
    if(isalive) hex.classList.add("alive");
    else hex.classList.add("dead");

    hex.addEventListener("click", onclick);

    var ret = {hex, isalive, toString};

    return ret;

    function toString() {
        return this.isalive ? "1" : "0";
    }

    function onclick() {
        if(ret.isalive){
            this.classList.remove("alive");
            this.classList.add("dead");
        }
        else{
            this.classList.remove("dead");
            this.classList.add("alive");
        }
        ret.isalive=!ret.isalive;
    }
}