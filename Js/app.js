//GOAL: render two cat pictures to the page
// get the 'cat-container' parent element
var parentElement = document.getElementById('lab-assets');


// I'm gonna need a constructor function
// filepath
// alt
// title
var imageArray = [];

function image(name, ext){
  this.filepath = `../img/${name}.${ext}`;
  this.alt = name;
  this.title = name;
  this.clicks = 0;

  imageArray.push(this);
}
new image('bag','jpg');
new image('bathroom','jpg');
new image('boots','jpg');
new image('breakfast','jpg');
new image('pen','jpg');
new image('bubblegum','jpg');
new image('chair','jpg');
new image('cthulhu','jpg');
new image('dog-duck','jpg');
new image('dragon','jpg');
new image('dog-duck','jpg');
new image('banana','jpg');
new image('pet-sweep','jpg');
new image('scissors','jpg');
new image('shark','jpg');
new image('sweep','png');
new image('tauntaun','jpg');
new image('unicorn','jpg');
new image('water-can','jpg');
new image('wine-glass','jpg');
new image('usb','gif');

// create a function that will get a random image
// get a random number between 0 and the length of the catArray
// assign that random number to index number in the catArray
// that will be that image that we show

function getRandomImage(){
  // get a random number from the helper function betweet 0 and one less than the length of the array
  var randomIndex = getRandomNumber(imageArray.length);

  // use that random number as the index for our catArray
  var chosenImage = imageArray[randomIndex];

  // create an img tag
  var imageElement = document.createElement('img');
  // give that img tag a src = the path of where my image is
  imageElement.setAttribute('src', chosenImage.filepath);
  // give the img tag an alt
  imageElement.setAttribute('alt', chosenImage.alt);
  // give the img tag a title
  imageElement.setAttribute('title', chosenImage.title);
  // append it to the parent
  parentElement.appendChild(imageElement);
}

// helper function - got this from mdn
function getRandomNumber(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function handleClick(event){

  // HERE!!!    JSON.parce();     !!!HERE

  // figure out what was clicked on
  console.log(`event.target is ${event.target.alt}`);
  var alt = event.target.alt;

  // loop through my catsArray until I find the alt that matches my alt
  for(var i=0; i<imageArray.length; i++){
    if(event.target.alt === imageArray[i].alt){
      imageArray[i].clicks++;
    }
  }
  // once I've found my object instance
  // increment the clicks on that object instance
  console.log('an image was clicked');
  parentElement.innerHTML = '';
  getRandomImage();
  getRandomImage();
}


parentElement.addEventListener('click', handleClick);

// initally generates the images on page load
getRandomImage();
getRandomImage();

