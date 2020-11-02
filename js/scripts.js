console.log('Hello from js/scripts.js!');

const customName = document.getElementById('customname');
const customName2 = document.getElementById('customname2');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = 'It was a hot summer day with a temperature of 94 fahrenheit outside. A Lion and a Boar reach a small :insertx: for a drink. After carrying 100 pounds worth weight on them, they begin arguing and fighting about who should drink first. After a while, they are tired and stop for breath, when they notice :inserty: nearby. Soon they realize that the scavenging animals are waiting for one or both of them to fall, to feast on them. The animals then decided that it was best to make up and be friends than fight and become :insertz:. They drink water together and go their ways after.';
let insertX = ['pond','river','reservoir'];
let insertY = ['bearded vultures','harpy eagles','hyenas'];
let insertZ = ['an anticipated meal','a scary dinner','food'];


randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Lion',name);
  }

  if(customName.value !== '') {
    const name = customname2.value;
    newStory = newStory.replace('Boar',name);
}

  if(document.getElementById("uk").checked) {
    let weight = Math.round(300*0.0714286)+ ' stone';
    let temperature =  Math.round(94-32)+ ' centigrade';
    newStory = newStory.replace('100 pounds', weight);
    newStory = newStory.replace('94 fahrenheit', temperature);
  }

  if(document.getElementById("kv").checked) {
    let weight = Math.round(300/2.205)+ ' kilogram';
    let temperature =  Math.round(94+273.15)+ ' kelvin';
    newStory = newStory.replace('100 pounds', weight);
    newStory = newStory.replace('94 fahrenheit', temperature);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
