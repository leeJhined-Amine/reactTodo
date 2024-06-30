import { useState } from "react";
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";
import { RiCheckboxCircleLine } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import BasicModal2 from "./EditForm";

// The 1st function handles the check button
// The 2nd function handles the edit action, it passes the new task to App.jsx
// The 3rd function handles the delete action, it finds the element that we want to delete and update the tasks list

function Task(props) {
  const [checked, setChecked] = useState(false);

  const handleEdit = (newTasks) => {
    props.handleUpdate(newTasks);
  };

  const handleDelete = (x) => {
    let temp = props.tasks.filter((name) => name != x);
    props.handleUpdate(temp);
  };

  return (
    <div className="flex w-4/5 justify-between mx-auto">
      <div className="flex gap-3 items-center">
        {checked ? (
          <RiCheckboxCircleLine onClick={() => setChecked(false)} />
        ) : (
          <MdOutlineRadioButtonUnchecked onClick={() => setChecked(true)} />
        )}

        <h1 className="text-xl font-medium">{props.title}</h1>
      </div>
      <div className="flex gap-4 items-center">
        <BasicModal2
          tasks={props.tasks}
          oldTask={props.title}
          handleUpdate={handleEdit}
        />
        <MdDelete onClick={() => handleDelete(props.title)} />
      </div>
    </div>
  );
}

export default Task;
