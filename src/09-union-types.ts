(() => {
  let userID: string | number;
  userID = 1212
  userID = 'asasa'

  function greeting(myText: string | number) {
    if (typeof myText === 'string') {
      console.log(`string ${myText.toLowerCase()}`);
    } else {
      console.log(`number ${myText.toFixed(1)}`)
    }
  }

  greeting('TONNY')
  greeting(121.77772)
})();
