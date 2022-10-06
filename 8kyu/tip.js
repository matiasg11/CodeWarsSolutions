function calculateTip(amount, rating) {
switch(rating.toLowerCase()) {
    case "excellent":
        return Math.ceil(amount*0.2)
        break;
    case "great":
        return Math.ceil(amount*0.15)
        break;
    case "good":
        return Math.ceil(amount*0.1)
        break;
    case "poor":
        return Math.ceil(amount*0.05)
        break;
    case "terrible":
        return 0
        break;
    default:
        return 'Rating not recognised'
}
}
