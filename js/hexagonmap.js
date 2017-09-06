import Hexagon from "./hexagon.js"

export default function HexagonMap(rowc, colc){

    var hexagons = [];

    function add(hexagon) {
        if(hexagons.length == rowc*colc) throw "Map is full!!";
        hexagons.push(hexagon);
    }

    return {

        get: function (row, col) {
            return hexagons[row * colc + col];
        },

        toString: function () {
            var string = "\n";
            for (var i = 0; i < rowc; i++) {
                string += hexagons.slice(i * colc, (i + 1) * colc).join(" ");
                string += "\n";
            }
            return string;
        },

        fill: function(id="container") {
            var root=document.getElementById(id);
            if(!root) throw "no element with id: "+id;

            for(var i = 0 ; i<rowc; i++){
                var row=document.createElement("div");
                row.classList.add("hex-row");
                if(i%2==1){
                    row.classList.add("even");
                }
                for(var j=0; j<colc; j++){
                    var hexagon=Hexagon(true);
                    row.appendChild(hexagon.hex);
                    add(hexagon);
                }
                root.appendChild(row);
            }
        }
    }

};