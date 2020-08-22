import { bearsArray } from "../helpers/bearsArray.js";
import { timeEvent, dateTime } from "./fishtally.js"
import { addBears } from "./addBears.js"

const makeRiver = () => {
    $("#river").html("");
    bearsArray.forEach((item, index) => {
      $("#river").append(`
          
          <div class="card" style="width: 18rem;">
          <div class="img-container" style="background-image: url(${item.imageUrl})">
          </div>
              
              <div class="card-body">
                <h2 class="card-title">${item.name}</h2>
                <p class="card-text"></p>
              </div>
              <div class="progressButtons">
                  <button id="attempted-${index}">Attempted</button>
                  <b id="attempt-${index}">${item.attempted}</b>
                  <button id="caught-${index}">Caught</button>
              </div
              <div class="counters">
                  <h6 id="time">Last Caught</h6>
                  <b id="timeStamp-${index}">${item.dateTime}</b>
                  <h6 id="totalTitle">Total Fish Caught</h6>
                  <b id="totalCount-${index}">${item.total}</b>
             
          </div>
          `);
          
          timeEvent(bearsArray, index);
          
    });
    
        
};
  
  
  export { makeRiver };