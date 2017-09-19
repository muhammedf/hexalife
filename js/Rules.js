
export var rule1={
  apply: function (hex, aliveNeiCount) {
      if(hex.isalive){
          if(this.die(aliveNeiCount)){
              return ()=>hex.die();
          }
      }
      else if(this.revive(aliveNeiCount)){
          return ()=>hex.revive();
      }
      return undefined;
  },
  die: function (aliveNeiCount) {
      return aliveNeiCount<3 || aliveNeiCount>4;
  },
  revive: function (aliveNeiCount) {
      return aliveNeiCount==2;
  }
};