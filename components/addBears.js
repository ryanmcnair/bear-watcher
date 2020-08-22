import { bearsArray } from '../helpers/bearsArray.js';
import { makeRiver } from './river.js';

const addBears = () => {
    const name = $("#name").val();
    const imageUrl = $("#imageUrl").val();

    bearsArray.push({
        name: name,
        imageUrl: imageUrl,
        attempted: 0,
        total: 0,
        dateTime: ''
    });

    makeRiver(bearsArray);
    
    $("#name").val("");
    $("#imageUrl").val("");

}

export { addBears }