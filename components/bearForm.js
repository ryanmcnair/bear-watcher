import { addBears } from './river.js'
import { makeRiver } from './river.js';

const makeBearsForm = () => {

    const BearsForm = `<form>
    <div class="form-group">
      <label for="addName">Add Name</label>
      <input type="text" class="form-control" id="name" aria-describedby="emailHelp" placeholder="Add Name of Bear">
    </div>
    <div class="form-group">
      <label for="imageUrl">Image URL</label>
      <input type="text" class="form-control" id="imageUrl"" placeholder="Image Url">
    </div>
    
    <button type="submit" id="submit" class="btn btn-primary">Submit</button>
  </form>`;

    $('#bearsform').append(BearsForm);

    $("#submit").click(function (e) {
        e.preventDefault()
        const name = $("#name").val();
        const imageUrl = $("#imageUrl").val();
        if (name != undefined && imageUrl != undefined) {
            addBears();
        }

    });
    makeRiver();

};

export { makeBearsForm }