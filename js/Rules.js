
export var rule1={
  apply: function (hex, aliveNeiCount) {
      if(hex.isalive){
          if(this.die(aliveNeiCount)){
              return ()=>hex.die();
          }
      }
      else if(this.born(aliveNeiCount)){
          return ()=>hex.born();
      }
      return undefined;
  },
  die: function (aliveNeiCount) {
      return aliveNeiCount<3 || aliveNeiCount>4;
  },
  born: function (aliveNeiCount) {
      return aliveNeiCount==2;
  }
};