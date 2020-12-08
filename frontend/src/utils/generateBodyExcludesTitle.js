const generateBodyExcludesTitle = (string, title) => {
  var modifiers = "gi";
  const newString = String(string.split(title)[1]).replace(/(<([^>]+)>)/ig, '').substring(0, 15);
  var patt = new RegExp(title, modifiers);
  // console.log(string);
  console.log(string.split(patt));
  // console.log(title);
  return newString;
};

export { generateBodyExcludesTitle };