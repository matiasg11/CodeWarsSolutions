Array.prototype.square  = function () { 
    return this.map(function(n) { 
      return n*n; 
    }); 
}
Array.prototype.cube  = function () { 
    return this.map(function(n) { 
      return n*n*n; 
    }); 
}
Array.prototype.average  = function () { 
    return this.length == 0 ? NaN :
     this.sum()/(this.length||1); 
}
Array.prototype.sum  = function () { 
    return this.length == 0 ?  0 :
     this.reduce(function(acc,n) { 
      return acc+n; 
    }); 
}
Array.prototype.even  = function () { 
    return this.filter(function(n) { 
      return n%2 == 0; 
    }); 
}
Array.prototype.odd  = function () { 
    return this.filter(function(n) { 
      return n%2 == 1; 
    }); 
}
//Prototype functions!