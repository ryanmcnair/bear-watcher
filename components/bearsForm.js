import { addBears } from './addBears.js'
import { makeRiver } from './river.js';
import { bearsArray } from '../helpers/bearsArray.js'


const makeBearsForm = () => {

  const BearsForm = `
  <h1>Bear Tracker</h1>
  <form>
  <div class="form-group">
    <label for="addName">Add Name:</label>
    <input type="text" class="form-control" id="name" aria-describedby="emailHelp" placeholder="Add Name of Bear">
  </div>
  <div class="form-group">
    <label for="imageUrl">Add Image URL of the Bear:</label>
    <input type="text" class="form-control" id="imageUrl"" placeholder="Image Url">
  </div>
  
  <button type="submit" id="submit" class="btn btn-dark">Submit</button>
</form>`;

  $('#bearsform').append(BearsForm);

  $("#submit").click(function (e) {
      e.preventDefault()
      const name = $("#name").val();
      const imageUrl = $("#imageUrl").val();
      if (name != undefined && imageUrl != undefined) {
          addBears(bearsArray);
      }

  });
  makeRiver();
}

export { makeBearsForm }