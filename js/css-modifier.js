
export default function modify_edge_length($root, _edge, _space = 3) {

var edge;
/*
width of hex class
 */
var width;
/*
height of hex class
 */
var height;
/*
margin-left of hex class
 */
var space = _space;
/*
margin-left of .hex-row.even
 */
var mlhe;
/*
margin-bottom and margin-top of .hex-row.even
 */
var mbthe;

edge = _edge;
width = edge * Math.sqrt(3);
height = edge * 2;
mlhe = width / 2 + space / 2;
mbthe = - edge / 2 + space / 2;

Array.from($root.getElementsByClassName("hex")).forEach(hex);
Array.from($root.getElementsByClassName("hex-row even")).forEach(hex_row_even);

function hex($hex){
    $hex.style["width"] = width + "px";
    $hex.style["height"] = height + "px";
    $hex.style["margin-left"] = space + "px";
}

function hex_row_even($hex_row_even){
    $hex_row_even.style["margin-left"] = mlhe + "px";
    $hex_row_even.style["margin-bottom"] = mbthe + "px";
    $hex_row_even.style["margin-top"] = mbthe + "px";
}

}