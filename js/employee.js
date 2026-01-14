const employees =[
    {
        name: "kavidu",
        address: "remunagoda, kalutara south",
        age:25,
        salary: 100000,
    }, 
    {
        name: "ima",
        address: "koshinna, kandy",
        age:26,
        salary: 150000,
    },
     {
        name: "kasun",
        address: "123 main street",
        age:24,
        salary: 90000,
    },
     {
        name: "nisal",
        address: "123 kalutra noth",
        age:28,
        salary: 70000,
    },
     {
        name: "sadula",
        address: "serupita, kaluta south",
        age:23,
        salary: 50000,
    },
];

console.log(employees[1].name);

const mainDiv = document.getElementById('container');

for(let i=0 ; i<employees.length ; i++){
  const div =document.createElement('div');
  div.innerText = "emplyee name : "+employees[i].name +" - "+employees[i].address +" - "+employees[i].age+" - "+employees[i].salary
  mainDiv.appendChild(div);
}



const savePost = () =>{
    const title = document.getElementById('title');
    const body = document.getElementById('body');
    const userid = document.getElementById('userid');
    fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: title.value,
        body: body.value,
        userId: userid.value,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.error('Error: ', error));
}

const getPosts = () =>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then(posts =>{
      const container = document.getElementById('container1');
      for(let j=0; j<posts.length ; j++){
        const div1 =document.createElement('div');
        div1.innerText = "title is : "+posts[j].title +"\n"+" body is : "+posts[j].body +"\n" +" user id is : "+posts[j].userId+"\n\n\n\n"
        container.appendChild(div1);
    }
    }

    )
    .catch((error) => console.error('Error: ', error));

    
}