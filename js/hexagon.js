
export default function Hexagon(isalive){
    var hex=document.createElement("div");
    hex.classList.add("hex");
    if(isalive) hex.classList.add("alive");
    else hex.classList.add("dead");
    hex.onclick=onclick;
    return {hex, isalive, toString};

    function toString() {
        return isalive ? "1" : "0";
    }

    function onclick() {
        if(this.classList.contains("alive")){
            this.classList.remove("alive");
            this.classList.add("dead");
        }
        else{
            this.classList.remove("dead");
            this.classList.add("alive");
        }
    }
}