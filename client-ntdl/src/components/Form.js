import React, { useState } from "react";
import { postTasks } from "../helper/axiosHelper";

const initialState = {
  task: "",
  hr: "",
};

export const Form = ({ setResp }) => {
  const [form, setForm] = useState(initialState);

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  console.log(form);

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    // call the api

    const data = await postTasks(form);
    setResp(data);

    if (data?.status === "success") {
      setForm(initialState);
    }
  };
  return (
    <>
      <form
        class="d-flex justify-content-center gap-3 m-5 border border-warning p-5 "
        onSubmit={handleOnSubmit}
      >
        <div class="mb-3 d-flex gap-3 justify-content-center align-items-center  ">
          <i class="fa-solid fa-list-check fs-2"></i>
          <input
            type="text"
            name="task"
            class="form-control"
            placeholder="Tasks"
            onChange={handleOnChange}
            required
          />
        </div>
        <div class="mb-3 d-flex gap-3 justify-content-center align-items-center">
          <i class="fa-solid fa-hourglass-start fs-2"></i>
          <input
            type="number"
            name="hr"
            class="form-control"
            placeholder="Hours allocated"
            onChange={handleOnChange}
            required
          />
        </div>

        <div class="mb-3" onSubmit={handleOnSubmit}>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};
