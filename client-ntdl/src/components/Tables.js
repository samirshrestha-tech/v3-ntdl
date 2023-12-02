import React from "react";
import { switchTasks } from "../helper/axiosHelper";

export const Tables = ({ taskLists, fetchTasks }) => {
  const entryArr = taskLists.filter((item) => item.type === "entry");
  const badArr = taskLists.filter((item) => item.type === "bad");

  const handleOnSwitch = () => {};
  return (
    <div className="entry list">
      <div>
        <h2>Entry List</h2>
        <hr />
      </div>
      <div className="fw-bolder m-2">
        {taskLists.length} tasks has been found.
      </div>
      <table className="table table-striped">
        {entryArr.map(({ hr, task, _id }) => {
          return (
            <tbody>
              <tr>
                <td className="ml-2">{task}</td>
                <td>{hr} hr</td>
                <td className="text-end">
                  <button onClick={handleOnSwitch} className="btn btn-success">
                    <i class="fa-solid fa-arrow-right"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};
