import { useEffect, useRef, useState } from "react";
import "./App.css";
import { Form } from "./components/Form";
import { Message } from "./components/Message";
import { getTasks } from "./helper/axiosHelper";
import { Tables } from "./components/Tables";

const App = () => {
  const [resp, setResp] = useState({});
  const [taskLists, setTask] = useState([]);

  const fetchTasks = async () => {
    const { data } = await getTasks();

    if (data.status === "success") {
      setTask(data.tasklist);
    }

    console.log(taskLists);
  };
  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      <div className="fw-bolder d-flex justify-content-center mt-4 ">
        <h1>Not to-do List</h1>
      </div>
      {/* message component for displaying the message in the UI */}

      {resp?.data?.message && <Message resp={resp} />}

      {/* form for collecting the tasks */}

      <Form setResp={setResp} resp={resp} fetchTasks={fetchTasks} />

      {/* lists of the collected tasks */}
      <Tables taskLists={taskLists} fetchTasks={fetchTasks} />

      {/* Entry List */}

      {/* Bad list */}

      {/* Total collected hours */}

      {/* Total saved hours */}
    </div>
  );
};

export default App;
