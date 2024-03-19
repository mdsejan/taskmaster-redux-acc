import { useForm } from "react-hook-form";
import Modal from "../ui/Modal";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/features/tasks/taskSlice";

const AddTaskModal = ({ isOpen, setIsOpen }) => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const onCancel = () => {
    reset();
    setIsOpen(false);
  };

  const onSubmit = (data) => {
    // console.log(data);
    dispatch(addTask(data));
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={"Add New Task"}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-3 mt-5">
          <label htmlFor="title">Title</label>
          <input
            className="w-full rounded-md"
            type="text"
            id="title"
            {...register("name")}
          />
        </div>
        <div className="flex flex-col gap-3 mt-5">
          <label htmlFor="description">Description</label>
          <textarea
            className="form-textarea mt-1 block w-full h-24 rounded-md"
            rows="3"
            id="description"
            {...register("description")}
            placeholder="Enter some long form content."
          ></textarea>
        </div>

        <div className="flex flex-col gap-3 mt-5">
          <label htmlFor="deadline">Deadline</label>
          <input
            type="date"
            id="deadline"
            {...register("deadline")}
            className="form-input  block w-full rounded-md"
          />
        </div>

        <div className="flex flex-col gap-3 mt-5">
          <label htmlFor="assign">Assign to</label>
          <select
            id="assign"
            {...register("assign")}
            className="block w-full rounded-md"
          >
            <option>Sanjida Ahmed</option>
            <option>Farhan Khan</option>
            <option>Sumaiya Islam</option>
            <option>Nazmul Hasan</option>
            <option>Tasnim Akhtar</option>
            <option>Rezaul Karim</option>
          </select>
        </div>

        <div className="flex flex-col gap-3 mt-5">
          <label htmlFor="priority">Priority</label>
          <select
            id="priority"
            {...register("priority")}
            className="block w-full rounded-md"
          >
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </div>

        <div className="flex gap-4">
          <button
            className="mt-4 bg-blue-500 text-white py-2 px-6 rounded-md"
            type="submit"
          >
            Submit
          </button>
          <button
            onClick={onCancel}
            className="mt-4 bg-red-500 text-white py-2 px-6 rounded-md"
          >
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AddTaskModal;
