function estSubsets(arr) {
    let m = new Set(arr)
    return 2**(m.size)-1
}
