
import Hexagon from "./hexagon.js";
import map from "./hexagonmap.js";

export default function fillHexagons(id="container") {
    var root=document.getElementById(id);
    if(!root) throw new DOMException("no element with id: "+id);

    map.setDimensions(10,10);

    for(var i = 0 ; i<10; i++){
        var row=document.createElement("div");
        row.classList.add("hex-row");
        if(i%2==1){
            row.classList.add("even");
        }
        for(var j=0; j<10; j++){
            var hexagon=Hexagon(true);
            row.appendChild(hexagon.hex);
            map.add(hexagon);
        }
        root.appendChild(row);
    }
}

