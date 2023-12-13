import React from "react";
import { switchTasks } from "../helper/axiosHelper";

export const Tables = ({ taskLists, fetchTasks, setResp }) => {
  const entryArr = taskLists.filter((item) => item.type === "entry");
  const badArr = taskLists.filter((item) => item.type === "bad");

  const handleOnSwitch = async (_id, type) => {
    const data = await switchTasks({ _id, type });

    if (data.status === "success") {
      setResp(data);
      fetchTasks();
    }
  };
  return (
    <div className="list">
      <div>
        <h2>Entry List</h2>
        <hr />
      </div>
      <div className="fw-bolder m-2">
        {entryArr.length} tasks has been found.
      </div>
      <table className="table table-striped">
        <tbody>
          {entryArr.map(({ hr, task, _id }) => {
            return (
              <tr key={_id}>
                <td className="ml-2">{task}</td>
                <td>{hr} hr</td>
                <td className="text-end">
                  <button
                    onClick={() => handleOnSwitch(_id, "bad")}
                    className="btn btn-success"
                  >
                    <i class="fa-solid fa-arrow-right"></i>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="bad-list">
        <div>
          <h2>Bad List</h2>
          <hr />
        </div>
        <div className="fw-bolder m-2">
          {badArr.length} tasks has been found.
        </div>
        <table className="table table-striped">
          <tbody>
            {badArr.map(({ hr, task, _id }) => {
              return (
                <tr key={_id}>
                  <td className="ml-2">{task}</td>
                  <td>{hr} hr</td>
                  <td className="text-end">
                    <button
                      onClick={() => handleOnSwitch(_id, "entry")}
                      className="btn btn-success"
                    >
                      <i class="fa-solid fa-arrow-left"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
