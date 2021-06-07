const headers=new Headers();
headers.append('Content-type','application/json');
const options={
method:'POST',
headers,
body:JSON.stringify({
firstName: 'heba',
  idBook: 1000,
  lastName: 'thaher'
})
};
const options2={
method:'PUT',
headers,
body:JSON.stringify({
firstName: 'First Name1',
   id: 1,
  idBook: 1,
  lastName: 'Last Name1'
})
};
const options3={
method:'GET',
headers,
};
const Replaceoptions={
method:'PATCH',
headers,
body:JSON.stringify({
firstName: "First Name 5",
   idBook: 155,
  lastName: "Last Name 5"
})
};
const responsePromise=fetch('https://fakerestapi.azurewebsites.net/api/v1/Authors');
const newauthor=fetch('https://fakerestapi.azurewebsites.net/api/v1/Authors',options);
const updateauthor=fetch('https://fakerestapi.azurewebsites.net/api/v1/Authors/1',options2);
const Getuser3=fetch('https://fakerestapi.azurewebsites.net/api/v1/Authors/3',options3);
const Replaceauthor=fetch('https://fakerestapi.azurewebsites.net/api/v1/Authors/5',Replaceoptions);
const authorsPromise=responsePromise.then(response => response.json());
const authors3=Getuser3.then(response => response.json());
const authorsPromiseNew=newauthor.then(response => response.json());
const authorsPromiseupdate=updateauthor.then(response => response.json());
const authorsReplace=Replaceauthor.then(response => response.json());

authorsPromise.then(data =>{
console.log("all authors")
console.log(data);
});

authorsPromiseupdate.then(data =>{
console.log("Upadte author 1");
console.log(data);
});
authors3.then(data =>{
console.log("information about author 3");
console.log(data);
});
authorsPromiseNew.then(data =>{
console.log("New Author");
console.log(data);
});

authorsReplace.then(data =>{
console.log("Replace idBook for author 5 to 155");
console.log(data);
});

fetch('https://fakerestapi.azurewebsites.net/api/v1/Authors/3', {
method:'DELETE',
headers,
});
