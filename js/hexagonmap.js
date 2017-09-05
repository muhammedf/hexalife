import Hexagon from "./hexagon.js"

export default function HexagonMap(rowc, colc){

    return {
        hexagons: [],
        index: 0,
        rowcount: rowc,
        colcount: colc,
        add: function (hexagon) {
            this.hexagons[this.index++] = hexagon;
        },
        get: function (row, col) {
            console.log(this.hexagons[row * this.width + col])
            return this.hexagons[row * this.width + col];
        },
        setDimensions: function (rowcount, colcount) {
            this.rowcount = rowcount;
            this.colcount = colcount;
        },
        toString: function () {
            console.log(this.colcount);
            var string = "\n";
            for (var i = 0; i < this.rowcount; i++) {
                string += this.hexagons.slice(i * this.colcount, (i + 1) * this.colcount).join(" ");
                string += "\n";
            }
            return string;
        },

        fill: function(id="container") {
            var root=document.getElementById(id);
            if(!root) throw new DOMException("no element with id: "+id);

            for(var i = 0 ; i<this.rowcount; i++){
                var row=document.createElement("div");
                row.classList.add("hex-row");
                if(i%2==1){
                    row.classList.add("even");
                }
                for(var j=0; j<this.colcount; j++){
                    var hexagon=Hexagon(true);
                    row.appendChild(hexagon.hex);
                    this.add(hexagon);
                }
                root.appendChild(row);
            }
        }
    }

};