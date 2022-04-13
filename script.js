var label=document.createElement("label");
label.innerHTML="Enter the brand name:"
label.setAttribute("class","brand");

var br=document.createElement("br");

var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","text");

var br1=document.createElement("br");

var button=document.createElement("button");
button.addEventListener("click",foo);
button.setAttribute("class","btn btn-primary");
button.innerHTML="Search";






document.body.append(label,br,input,br1,button);





async function foo(){
    
        let cc=document.getElementById("text").value;
    let res=await fetch(`https://makeup-api.herokuapp.com/api/v1/products.json?brand=${cc}`);
    let data=await res.json();
    console.log(data);
    for(var i=0;i<data.length;i++){
        var ele=document.createElement("div")
        ele.style.color="black";
        ele.style.fontSize="12px";
        ele.innerHTML=`<div class="row" >
        <img src="${data[i].image_link}" class="col-md-3" alt="Image not available">
          <p class="col-md-9">
          Name: ${data[i].name}<br>
          Brand: ${data[i].brand}<br>
          Price: ${data[i].price}<br>
          Description: ${data[i].description}<br>
          <a href="${data[i].product_link}" class="btn btn-light">Product link</a></p>
          
        </div>`
        document.body.append(ele);
    }

    

}