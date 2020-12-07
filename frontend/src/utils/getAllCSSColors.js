const getAllCSSColors = (styleSheets = document.styleSheets) => {
  const cssVars = [];

  for (let i = 0; i < styleSheets.length; i += 1) {
    try {
      for (let j = 0; j < styleSheets[i].cssRules.length; j += 1) {
        try {
          for (let k = 0; k < styleSheets[i].cssRules[j].style.length; k += 1) {
            const name = styleSheets[i].cssRules[j].style[k];
            if (name.startsWith('--') && cssVars.indexOf(name) === -1 && name.split('-')[2] === 'color') {
              cssVars.push(name);
            }
          }
        } catch (error) {
          console.log(error);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  return cssVars;
};

export { getAllCSSColors };
