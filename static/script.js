function raditDatus() {
  var tabheaddrsar = ["Name","Surname","PhoneNumber"]
  let t=document.getElementById('dati-draugi')
  const url = '/gdraugi';
  var request = new Request (url, {
    headers: {
      'Content-Type': 'application/json'
    },
  });
  fetch(request)
    .then((resp)=>resp.json())
    .then((data)=>{
console.log(data);
var count = data.draugi.length;

console.log(count);

      for (let i = 0; i < count; i++)

    {
  t.innerHTML += `
   <tr>
     <td>${data.draugi[i].Name}</td>
     <td>${data.draugi[i].Surname}</td>
     <td>${data.draugi[i].PhoneNumber}</td>
   </tr>
   `
                  } 

    
      var textblock = document.getElementById("Draugu_saraksts");
      this.textblock.innerHTML = "<h1>Companions</h1>";
//      this.textblock.appendChild(table);
   });;
}


raditDatus();

function login(){
  let lgndata = new Object();
  lgndata.uname = document.getElementById('logininput').value;
  lgndata.pwd =  document.getElementById('loginpassword').value ;
    const xhr = new XMLHttpRequest(),
    method = 'POST',
    url = '/yn';
      xhr.open(method, url, true);
      xhr.onreadystatechange = function () {
      if(xhr.readyState == 4 && xhr.status == 200) {
        if (xhr.responseText == 'JAA'){
         return ieiet();
         }
         return alert("Jūsu lietotājvārds/parole nederīgi!!!")
      }
    }
xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
xhr.setRequestHeader("Content-type", "application/json, charset=utf-8");
xhr.send(JSON.stringify(lgndata));
}

function lgnpsscheck(){
  // let parole1 = document.getElementById("rpsw").value;
  // let parole2 = document.getElementById("rpsw2").value;
  // if(parole1!==parole2){
    // alert("Paroles nesakrīt :(");
  // }     
  // else{
    //Pārbauda, vai tāds Lietotāja vārds ir brīvs...
      let regchkdata = new Object();
      regchkdata.runame = document.getElementById('logininput').value;
      const xhr = new XMLHttpRequest(),
      method = 'POST',
      url = '/lgnchk';
        xhr.open(method, url, true);
        xhr.onreadystatechange = function () {
        if(xhr.readyState == 4 && xhr.status == 200) {
          if (xhr.responseText == 'NESAKRIIT'){
           return registracija();
           }
           return alert("Jūsu lietotājvārds jau lieto cits spēlētājs!!!")
        }
      }
  xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
  xhr.setRequestHeader("Content-type", "application/json, charset=utf-8");
  xhr.send(JSON.stringify(regchkdata));
    }
  

function registracija(){
  let regdata = new Object();
  regdata.reguname = document.getElementById('logininput').value;
  regdata.regpwd =  document.getElementById('loginpassword').value;
  const xhrr = new XMLHttpRequest(),
    method = 'POST',
    url = '/rgstr';
      xhrr.open(method, url, true);
      xhrr.onreadystatechange = function () {
      if(xhrr.readyState == 4 && xhrr.status == 200) {
        if (xhrr.responseText == 'IZDEVAS'){
          alert("Reģistrācija izdevas! \n Varāt spēlēt kā "+ regdata.reguname);
          return ieiet2();
         }
         return alert("Viss ir slikti!!! \n Jānospiež F5")
       }
    }
xhrr.setRequestHeader("Access-Control-Allow-Origin", "*");
xhrr.setRequestHeader("Content-type", "application/json, charset=utf-8");
xhrr.send(JSON.stringify(regdata));
}


raditDatus();
