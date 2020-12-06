const getAllCSSColors = (styleSheets = document.styleSheets) => {
  var cssVars = [];
  
  for(let i = 0; i < styleSheets.length; i++){
     try{
        for( var j = 0; j < styleSheets[i].cssRules.length; j++){
           try{
              for(var k = 0; k < styleSheets[i].cssRules[j].style.length; k++){
                 let name = styleSheets[i].cssRules[j].style[k];
                 if(name.startsWith('--') && cssVars.indexOf(name) === -1 && name.split('-')[2] === 'color'){
                    cssVars.push(name);
                 }
              }
           } catch (error) {}
        }
     } catch (error) {}
  }

  return cssVars;
};

export { getAllCSSColors };