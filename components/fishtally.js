import { bearsArray } from "../helpers/bearsArray.js";
import { makeRiver } from "./river.js"

const dateTime = () =>{
    const today = new Date();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    return today + time
  }
  const timeEvent = (array, index)  =>{
    $(`#attempted-${index}`).on('click', ()=> { 
        bearsArray[index].dateTime = dateTime()
        bearsArray[index].attempted++
        $(`#timeStamp-${index}`).html(`${dateTime()}`)
        $(`attempt-${index}`).html(`${bearsArray[index].attempted}`)
      makeRiver(array[index])
  })
  $(`#caught-${index}`).on('click', ()=> {
    bearsArray[index].dateTime = dateTime()
    bearsArray[index].total++ 
    $(`#timeStamp-${index}`).html(`${dateTime()}`)
    
    $(`#totalCount-${index}`).html(`${bearsArray[index].total}`)
    makeRiver(array[index])
  
  })
  }

export { dateTime, timeEvent }