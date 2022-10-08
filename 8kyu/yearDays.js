function yearDays(year)
{
  if ((year % 100 == 0 && year % 400 != 0) || year % 4 != 0){
    return `${year} has 365 days`
  }else{
    return `${year} has 366 days`
    
  }
}
