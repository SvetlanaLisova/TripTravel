function raditDatus() {
  var tabheaddrsar = ["Vārds","Uzvārds","Telefona numurs"]
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
     <td>${data.draugi[i].Phone_nr}</td>
   </tr>
   `
                  } 

    
     
//      this.textblock.appendChild(table);
   });;
}


raditDatus();
