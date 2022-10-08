const initialCap = (str) => str[0].toUpperCase();
const isValidName = (name) => /^[a-z]/i.test(name);
const aliasGen = (fName, lName) => {
  return (isValidName(fName) && isValidName(lName))
    ? `${ firstName[initialCap(fName)] } ${ surname[initialCap(lName)] }`
    : 'Your name must start with a letter from A - Z.';
}
