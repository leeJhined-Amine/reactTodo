import { useState } from "react";
import Task from "./components/Task";
import BasicModal from "./components/AddForm";

function App() {
  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const handleUpdate = (x) => {
    setTasks([...tasks, x]);
  };

  const updateTasks = (updated) => {
    setTasks(updated);
  };

  return (
    <section className="flex flex-col w-screen h-screen justify-center bg-[#14213D] items-center">
      <div className="bg-[#E5E5E5] w-96">
        {/* This will make the container filled with the h1 when there are no tasks yet, just making it more clear */}
        {tasks.length == 0 ? (
          <h1 className="py-10 text-center text-slate-600 font-semibold text-xl">
            Tasks will show here
          </h1>
        ) : (
          <div className="p-10 flex flex-col gap-2">
            {tasks.map((task, index) => (
              <Task
                key={index}
                title={task}
                tasks={tasks}
                handleUpdate={updateTasks}
              />
            ))}
          </div>
        )}
      </div>

      {/* This is the add new task button, its in this component */}

      <BasicModal tasks={tasks} handleUpdate={handleUpdate} />
    </section>
  );
}

export default App;
