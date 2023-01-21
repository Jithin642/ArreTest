const but=document.getElementById("button1");
async function makeCall(data){
    const urlPost="http://localhost:3000/add";
    const response =fetch(urlPost, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) // body data type must match "Content-Type" header
      })
    }

async function clickHandler(){
    var name = document.getElementById("name").value;
    var message = document.getElementById("message").value;
    document.getElementById("name").value = "";
    document.getElementById("message").value = "";
    console.log(name,message);
    const respos=await makeCall({name:name,message:message});
}
const urlGet="http://localhost:3000/seeall"
const data=fetch(urlGet)
  .then((response) => response.json())
  .then((data) => console.log(data));

but.addEventListener("click",clickHandler);