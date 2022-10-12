function stringLength(string) {
  let leng = string.length; 
  if(leng < 1){
    throw new Error('Expected length to be greater than OR equal to 1')
  }else if(leng > 10){
    throw new Error('Expected length to be less than OR equal to 10')
  }else return leng;

}
module.exports = stringLength;