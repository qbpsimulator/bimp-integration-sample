import React from "react";

export const PostFormSample = () => (
  <form
    action="http://www.qbp-simulator.com/.netlify/functions/uploadfile?to=/simulator%3Ffrom%3Ddemo"
    method="POST"
    encType="multipart/form-data"
  >
    <h1>Option 1 - POST form sample</h1>
    <div>
      <label htmlFor="file">BPMN file</label>
      <input type="file" name="file" id="file" />
    </div>
    <div>
      <input type="submit" value="Submit" />
    </div>
  </form>
);
