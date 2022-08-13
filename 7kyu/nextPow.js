function findNextPower(val, pow_) {
    let top = Math.ceil(val**(1/pow_)) === val**(1/pow_) ? val**(1/pow_)+1 : Math.ceil(val**(1/pow_))
    
    return top**pow_;
}
