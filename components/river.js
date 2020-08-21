import { bearsArray } from './../helpers/bearsArray.js'

const makeRiver = () => {

    $("#river").html("");
    bearsArray.forEach((item, index) => {
        $("#river").append(`
        
        <div class="card" style="width: 18rem;">
            <img class="img-thumbnail" src="${item.imageUrl}" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">${item.name}</h5>
              <p class="card-text"></p>
            </div>
        </div>
        `);
    });

}

const addBears = () => {
    console.log("in here bears");
    const name = $("#name").val();
    const imageUrl = $("#imageUrl").val();

    bearsArray.push({
        name: name,
        imageUrl: imageUrl
    });

    makeRiver(bearsArray);
    console.log(bearsArray);
    $("#name").val("");
    $("#imageUrl").val("");

}

// https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/GrizzlyBearJeanBeaufort.jpg/1024px-GrizzlyBearJeanBeaufort.jpg




export { addBears, makeRiver }