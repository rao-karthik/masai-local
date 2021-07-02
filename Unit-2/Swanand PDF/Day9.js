//We are learning about HTTP requests
//Curl, Postman - external tools
//xhr - 4 steps of xhr var xhr=new XMLHttpRequest()
//fetch API

//What is fetch? - modern and simple way of making network request
//Why fetch? - its just better
//how fetch?

/*3 steps of XHR

fetch(url) //1 - you are creating a promise that I will make an API call

.then(function(response){

  //what do you want to do when request is sent
}) //2

.catch(function(err){

  //What to do when you get an error

})

//promise- either be fullfilled or rejected

fetch('https://reqres.in/api/users/2') //step 1- go and fetch, whatever you get run inside .then, creating a promise
  .then(function (response) {
    return response.json(); //returning a promise, it needed time, usually a promise
  })
  .then(function (response) {
    console.log(response);
  }); //step 2

//.json is collecting stream
//all those small data packets- we have to make whole file out of it (it takes time)
//just working with the stream- stream is a continiuos sending of data packets

//.then is executed whenever a promise is completed
//if song is released, make the tickets availible
/*releasing a song - promise, .then(function (){ console.log('make the tickets availiable') }).then(function(){

  console.log('book the tickets, come to the party')
})

*/
//Step 1- Grab all the formdata

function Register() {
  var formData = {
    name: document.getElementById('inp1').value,
    email: document.getElementById('inp2').value,

    password: document.getElementById('inp3').value,

    username: document.getElementById('inp4').value,

    mobile: document.getElementById('inp5').value,

    description: document.getElementById('inp6').value
  };

  formData = JSON.stringify(formData); //our data is ready for internet

  fetch('https://masai-api-mocker.herokuapp.com/auth/register', {
    method: 'POST',
    body: formData,
    headers: {
      'Content-Type': 'application/json'
    }
  }) //intitilize and send
    .then(function (response) {
      return response.json(); //tries to collect all data packets and bring them together
    })
    .then(function (response) {
      console.log(response);
    });
}

function Login() {
  var formData = {
    password: document.getElementById('inp7').value,

    username: document.getElementById('inp8').value
  };

  formData = JSON.stringify(formData); //data is ready in json

  fetch('https://masai-api-mocker.herokuapp.com/auth/login', {
    method: 'POST',
    mode: 'cors',
    body: formData,
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log(response);

      getmyData(response.token); //getmyData('fb0fc43b61b7796f9ff9a5d8e20b291e')
    });
}

//template literals

function getmyData(token) {
  fetch('https://masai-api-mocker.herokuapp.com/user/raj1234', {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log(response);
    });
}
