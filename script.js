var h=document.createElement('h1')
h.setAttribute("id","title")
h.classList.add("text-center")
h.innerText="Quotes"
document.body.append(h)


var div1=document.createElement('div')
div1.classList.add('container')
document.body.appendChild(div1)


var row=document.createElement('div')
row.classList.add('row')
// row.innerText="hello"
div1.appendChild(row)

fetch('https://type.fit/api/quotes')
.then((d)=>d.json())
.then((data)=>{
    console.log(data)
    console.log(data.length)
    // console.log(data[2].flag)
    for(let i=1;i<200;i++){
        //console.log(data[i])
        // a=data[i].capital
        row.innerHTML += `  <div class="col-sm-6 col-md-4 col-lg-4 col-xl-4 my-2 b">
        <div class="card  text-center">${i}
        <div class="card-header text-center"> Poetry<div>
        <div class=" card-body ">
            <div class = " card-text "> Author: ${data[i].author}</div>
            <div class = " card-text a">  Quote: ${data[i].text}  
            </div>
        </div>
        </div>`
    }
})
.catch((er)=>{
    console.log("error")
})