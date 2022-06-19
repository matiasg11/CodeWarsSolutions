function isVow(a){
  for (let i=0; i<a.length; i++){
    switch (a[i]){
        case 117: //u
        a[i]="u"
        break;
        case 97: //a
        a[i]="a"
        break;
        case 101: //e
        a[i]="e"
        break;
        case 105: //i
        a[i]="i"
        break;
        case 111: //o
        a[i]="o"
        break;
    }
  }
  return a
}
