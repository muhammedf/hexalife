
var HexagonMap;
export default HexagonMap={
    hexagons: [],
    index: 0,
    rowcount: 0,
    colcount: 0,
    add: function (hexagon) {
        this.hexagons[this.index++]=hexagon;
    },
    get: function(row, col){
        return this.hexagons[row*this.width+col];
    },
    setDimensions: function(rowcount, colcount){
        this.rowcount=rowcount; this.colcount=colcount;
    },
    toString: function(){
        console.log(this.colcount);
        var string="\n";
        for(var i=0;i<this.rowcount;i++){
            string+=this.hexagons.slice(i*this.colcount, (i+1)*this.colcount).join(" ");
            string+="\n";
        }
        return string;
    }

};