//function main(){
//}

//module.exports = {main}

let spaceValue = document.getElementById("space")

fetch("https://swapi.dev/api/people")
.then(val => val.json())
.then(data => {
  let dataArray = data["results"]
  for (let i = 0; i < dataArray.length; i++) {
      spaceValue.innerHTML += `
      <div class="col-sm-4"><br>
      <div class="card" style="width: 18rem;">
          <div class="card-body">
              <h5 class="card-title">${dataArray[i].name}</h5>
              <img src="./images/${i+1}.jpeg" class="card-img-top" alt="...">
              <p class="card-text">May the force be with you</p>
              <a href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal${i}">Get info</a>
          </div>
      </div>
      </div>


<!-- Modal -->
<div class="my-3 modal fade" id="exampleModal${i}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel"><h5 class="card-title">${dataArray[i].name}</h5></h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <h5 class="modal-title" id="exampleModalLabel"><h5 class="card-title">Gender: ${dataArray[i].gender.toUpperCase()}</h5></h5>
        <h5 class="modal-title" id="exampleModalLabel"><h5 class="card-title">Height: ${dataArray[i].height}</h5></h5>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
      `

      
       
      
      
      
      
  }
  console.log(dataArray[0].height);
})