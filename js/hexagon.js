
export default function Hexagon(isalive){
    var hex=document.createElement("div");
    var top=document.createElement("div");
    var middle=document.createElement("div");
    var bottom=document.createElement("div");
    hex.classList.add("hex");
    top.classList.add("top");
    middle.classList.add("middle");
    bottom.classList.add("bottom");
    hex.appendChild(top);
    hex.appendChild(middle);
    hex.appendChild(bottom);
    if(isalive) Array.from(hex.children).forEach(c=>c.classList.add("alive"));
    return {hex, isalive, toString};

    function toString() {
        return isalive ? "1" : "0";
    }
}