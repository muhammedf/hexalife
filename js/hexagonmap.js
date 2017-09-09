import Hexagon from "./hexagon.js"
import modify_edge from "./css-modifier"

export default function HexagonMap(rowc, colc, edge_length=30, space_between_hexes=3, rootid="container"){

    var hexagons = [];
    var $root;

    $root=document.getElementById(rootid);
    if(!$root) throw "no element with id: "+rootid;

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

        fill: function() {
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
                $root.appendChild(row);
            }
            this.set_edge_length(edge_length);
        },

        set_edge_length: function (length) {
            modify_edge($root, length, space_between_hexes);
            edge_length = length;
        }
    }

};