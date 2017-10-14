
export default function Ruler(rules = rule_set_1) {

    return {
        apply: function (hexagonmap) {
            var funcs=[];
            for(let hex of hexagonmap.iterator()){
                funcs.push(apply(hex, hexagonmap.getNeighboursOf(hex).map(n=>n.getState()).reduce((a,b)=>a+b)));
            }
            funcs.filter(f=>f!==undefined).forEach(f=>f());
        }
    };

    function apply(hex, neiState){

        var ruleset=rules[hex.getState()];

        if(ruleset){
            var rule = ruleset.filter(rs=>rs.neiState.includes(neiState));
            if(rule.length===1)
                rule=rule[0];
            else if(rule.length===0)
                return undefined;
            else throw "more than one rule for a spesific state";

            return ()=> hex.setState(rule.nextState);
        }

        return undefined;

    }

}

var rule_set_1={
    0: [
        {neiState: [4], nextState: 1}
    ],
    1: [
        {neiState: [1,2,3,4,6], nextState: 2},
        {neiState: [5], nextState: 0}
    ],
    2: [
        {neiState: [4], nextState: 1},
        {neiState: [0,3,5,6], nextState: 0}
    ]
}
