import { useState } from "react";
import "./App.css";
import { Form } from "./components/Form";
import { Message } from "./components/Message";

const App = () => {
  const [resp, setResp] = useState({});

  return (
    <div>
      <div class="fw-bolder d-flex justify-content-center mt-4 ">
        <h1>Not to-do List</h1>
      </div>
      {/* message component for displaying the message in the UI */}

      {resp?.data?.message && <Message resp={resp} />}

      {/* form for collecting the tasks */}

      <Form setResp={setResp} />

      {/* lists of the collected tasks */}

      {/* Entry List */}

      {/* Bad list */}

      {/* Total collected hours */}

      {/* Total saved hours */}
    </div>
  );
};

export default App;
