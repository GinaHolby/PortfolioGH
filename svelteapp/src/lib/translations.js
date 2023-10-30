export function translateCategoryWord(language, categoryWord) {
  const translations = {
      dinner: 'Middag',
          stew: 'Gryte', 
          soup: 'Suppe',
          pizza: 'Pizza',
          pasta: 'Pasta',
          panrecipie: 'Ovnsret',
          onePot: 'One-Pot',
          saladdinner: 'Middagssalat',
          piedinner: 'Middagspai',
          otherdinner: 'Annen middag',
      sides: 'Tilbehør',
          sauce: 'Saus',
          dressing: 'Dressing',
          dip: 'Dip',
          marinade: 'Marinade',
      minies: 'Småretter',
          tapas: 'Tapas',
          sidesalad: 'Sidesalat',
          baking: 'Brødbakst',
          sandwich: 'Smørbrød',
          lunchbox: 'Matpakkemat',
          toppings: 'Pålegg',
          otherminies: 'Annen smårett',
      dessert: 'Dessert',
          ice: 'Is',
          cake: 'Kake',
          minicakes: 'Småkaker',
          waffles: 'Vafler og Pannekaker',
          pastry: 'Søt gjærbakst',
          dessertpie: 'Dessertpai',
          otherdessert: 'Annen dessert',
      preserve: 'Preserver selv',
          pickling: 'Sylting',
          fermentation: 'Fermentering',
          drying: 'Tørking',
          freezing: 'Frysing',
          canning: 'Hermetisering',
          otherkonserving: 'Annen konservering',
      preferances: 'Preferanser',
          lowglysimic: 'lav glysimic',
          vegetarian: 'Vegetar',
          vegan: 'Vegansk',
      nationality: 'Nasjonalitet',
          italian: 'Italiensk',
          asian: 'Asiatisk',
          norwegian: 'Norsk',
      seasonandholyday: 'Sesong og Høytider',
          grill: 'Grillmat',
          christmas: 'Jul',
          easter: 'Påske',
  };

  if (language === 'Norwegian' && translations[categoryWord]) {
    return translations[categoryWord];
  } else {
    return categoryWord;
  }
}

export function translateCategoryList(language, categoryList) {
    // Filter out null values from the categoryList
    const filteredCategoryList = categoryList.filter(category => category !== null);
  
    // Translate the filtered category list
    return filteredCategoryList.map(category => translateCategoryWord(language, category));
  }

