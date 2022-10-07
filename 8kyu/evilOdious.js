function evil(n) {
   let m = n.toString(2).split("")
   return m.filter((a)=>a%2 == 1).length % 2 == 1 ? "It's Odious!" : "It's Evil!"
}
