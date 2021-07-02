/*let url = new URL('https://javascriptjeep.com?mode=night&page=2&mode=day');

let params = new URLSearchParams(url.search);

console.log(params);

params.append('msg', 'hello'); //to add your own parameters

params.set('msg', 'Hii');

params.append('name', 'Kartik');

console.log(params.getAll('mode'));

//get
//append
//set

//.getALL

//Go to Github
//search for username
//explore pages
//COPY THE URL
//try to play with that URL
//get, set, append

//xyz.get('')
*/

//1. What is pagination?
//2. It has to do with pages

//Buttons
//Buttons are divided accordingly
//Add buttons accordingly depending upon the dropdown value

function showButtons() {
  document.getElementById('buttonsdiv').innerText = ''; //emptying the buttons

  var val = document.getElementById('items').value; //grabbing checkbox values

  let buttons = val / 25; //figuring out how many buttons to add

  //console.log(buttons);

  for (var i = 1; i <= buttons; i++) {
    var newbutton = document.createElement('button'); //creating a button
    newbutton.innerText = i;
    newbutton.setAttribute('id', `button${i}`); //we are adding
    newbutton.onclick = showData; //adding onclick functionality

    document.getElementById('buttonsdiv').appendChild(newbutton); //append a child
  }
}

//when

async function showData() {
  document.getElementById('data').innerText = '';
  var currentbutton = event.target.id;

  let data = fetch('http://jsonplaceholder.typicode.com/posts');
  let response = await data;
  let alldata = await response.json();

  //1- 1 to 25
  //2 - 26 to 50
  //3 - 51-75
  //4- 76-100

  var start;
  var end;

  if (currentbutton == 'button1') {
    start = 0;
    end = 24;
  } else if (currentbutton == 'button2') {
    start = 25;
    end = 49;
  } else if (currentbutton == 'button3') {
    start = 50;
    end = 74;
  } else if (currentbutton == 'button4') {
    start = 75;
    end = 99;
  }

  for (var i = start; i <= end; i++) {
    let node = document.createElement('p');

    node.innerText = alldata[i].id + ' ' + alldata[i].title;

    document.getElementById('data').appendChild(node);
  }
}
