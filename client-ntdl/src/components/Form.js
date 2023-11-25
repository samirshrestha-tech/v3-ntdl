import React from "react";

export const Form = () => {
  return (
    <form class="d-flex justify-content">
      <div class="mb-3">
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div class="mb-3">
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
        />
      </div>

      <button type="submit" class="btn btn-secondary">
        Submit
      </button>
    </form>
  );
};
