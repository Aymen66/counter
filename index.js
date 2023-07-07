

let items = []


function save() {
   let  inputEl =document.getElementById("input-el");

if(inputEl.value){
    let idNo = items.length +1;



  items.push({
    inputEl: inputEl.value,
    id: idNo

  })
  inputEl.value = ""

localStorage.setItem('items', JSON.stringify(items));
displayImage()
window.location.reload();

}

}


  let DataFromLocalStorage = JSON.parse(localStorage.getItem('items'));
let dataNew = JSON.parse(localStorage.getItem('items'))
  function entry(){
    for(let i =0; i<dataNew.length; i++){
        if(dataNew[i] !==null){
            document.getElementById("noEntry").innerHTML="Saved Entries:"
            // document.getElementById("noEntry").style.display="none"
        } 
        
    }
   
    
}entry()

if (DataFromLocalStorage) {
items = DataFromLocalStorage

}
else {
  console.log("In nodeJS");
}

function displayImage() {
let savedEl = document.getElementById("save-el");

    let liEl= ""
    for (let i = 0; i<items.length; i++){
     
liEl += `



<tr >
<div id="divTr">
<span id="addCount-btn" onclick="createDiv(${i})"> ${items[i].inputEl}</span><span> <button id="delete-btn" onclick="removeItem(${items[i].id})"><i class="fa fa-trash"></i> </button></span>  

</div>
</tr>


`

    }
    savedEl.innerHTML =liEl
    
   }displayImage()

   function removeItem(itemId) {
    // Find the index of the item with the provided itemId
    const index = items.findIndex(item => item.id === itemId);
    
    // If the item exists in the array, remove it
    if (index !== -1) {
      items.splice(index, 1);
      localStorage.setItem('items', JSON.stringify(items));
      const div = document.getElementById("div");
      if (div) {
        div.parentNode.removeChild(div);
        
      }
      displayImage();
      quit = false;

    }
window.location.reload();

  }

  let quit = false;

  function createDiv(index) {
    if(quit) {
      
      return;
   } 
   quit = true;
let main = document.getElementById("CountDiv")
let count = 0

  
      let div = document.createElement("div")
      div.id= "div"
      div.style.padding="10px"
      // countEl.innerHTML="red"
      localStorage.setItem('items', JSON.stringify(items));
      displayImage();
      main.append(div)
      let InputElName = document.createElement("h1")
      InputElName.innerHTML = items[index].inputEl
    //   div.textContent=items[index].inputEl
      // if (items[index].hasOwnProperty("inputEl")) {
      //   InputElName.innerHTML = items[index]=.inputEl; // Set the value of InputElName to the name property of the item at the given index
      // }
      InputElName.id= "InputElName"
      div.append(InputElName)
     
      if(div){
        let increament = document.createElement("button")
        increament.id="increament"
        increament.innerHTML="Increament"
        div.append(increament)
        let result = document.createElement("h2")
        result.id="result"
        result.innerHTML=0
        div.append(result)
          let reset = document.createElement("button")
          reset.innerHTML="reset"
          reset.id="reset"
          reset.style.display= "none"
  
          div.append(reset)
          reset.addEventListener("click", resetCount);
        
        
        increament.addEventListener("click", increment);
        
        function increment() {

          count += 1
          result.innerHTML = count
          if(count > 0 ){
          reset.style.display= "block"
            
          }
       
      }
      
      function resetCount() {
        
        count = 0;
        result.innerHTML = count
        reset.style.display= "none"

      }
     
      }
     
    
    

  }

  //  function removeItem(){
  //   for (let i = 0; i < items.length; i++){
  //     if(items[i].id){
  //       alert("touched")
  //          items.pop();


  //     }

  //   }
    // var filt = items.filter((a,i)=>{
    //       if(del== a.id){
    //         items.splice(i,1);
    //         displayImage();
    //         localStorage.setItem("items", JSON.stringify(items) )
      
    //       }
    //     })
    
    // }
  //  source.forEach((item, i) => {
  //   item.id = i + 1;
  // });

// let countEl = document.getElementById("count-el")
// let count = 0



// function save() {
//     let countStr = count + " - "
//     saveEl.textContent += countStr
//     countEl.textContent = 0
//     count = 0
// }
// // 
