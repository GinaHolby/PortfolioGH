import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder({
  baseUrl: 'https://cdn.sanity.io',
  projectId: import.meta.env.VITE_SANITY_ID,
  dataset: 'production',
})
 /* export function urlFor = (source) => builder.image(source)  */
 export function urlFor(source) {
  return builder
    .image(source)
    .size(source.width, source.height)
    .fit('crop');
} 

/*** Changes the minutes into hours and days if needed */
export function changeMinutes(minutes){
    if( 60 < minutes && minutes < (60*24)) {
      const totalHoures = minutes/60
      const integerHoures =  Math.trunc(minutes/60)
      const rest = Math.round((totalHoures - integerHoures)*60)

    if (rest < 5){
      minutes = integerHoures + 't'
    } else if (rest > 55 ){
      minutes = integerHoures + 1 + 't'
    } else {
      minutes = integerHoures + 't og ' + rest +'min'  
    }

    } else if ( minutes > (60*24)) {

      const totalHoures = minutes/(60*24)
      const integerHoures =  Math.trunc(minutes/(60*24))
      const rest = Math.round((totalHoures - integerHoures)*(24))

    if (rest == 0){
      minutes = integerHoures + 'd'
    } else {
      minutes = integerHoures + 'd og ' + rest +'t'  
    }

    } else {
      minutes = minutes + 'min'
    }
    return minutes
}

export function findtime(recipie){
    const timer = recipie.allinstructions.map(station => {
      return {
        totall: station.instructions && 
          station.instructions.total !== undefined 
            ? station.instructions.total
            : 0,
        activee: station.instructions && 
          station.instructions.active !== undefined
            ? station.instructions.active
            : 0
      }});
      
    let totalSum = 0;
    timer.forEach(num => { totalSum += num.totall });
    
    let activeSum = 0;
    timer.forEach(num => { activeSum += num.activee });
    
    return {
      tot: changeMinutes(totalSum), 
      totmin: totalSum,
      act: changeMinutes(activeSum),
      actmin: activeSum}
} 

  /* forklaring av koden: funksjonen findtime er en generisk kode som ikke blir tatt i bruk før de blir calla senere. 
  når jeg går gjennom foreach funksjonen caller jeg findtime funksjonen og sender recipie dataen. 
  så går recipie dataen gjennom findtime funksjonen og kalkulerer hvor lang tid. så blir den informasjonen sendt tilbake til foreach  */

export function roundQuantity(quantity){
  let checkForInteger = quantity - Math.trunc(quantity)
  if (quantity >= 10 || checkForInteger == 0){
    quantity = Math.round(quantity);
  } else {
    quantity = quantity.toFixed(2)
  }
  return quantity 
}