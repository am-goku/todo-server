import { Router } from "express";
import {
  addTask,
  clearTasks,
  deleteEvent,
  deleteTask,
  getEvent,
  getEvents,
  gettasks,
  newEvet,
} from "../controllers/task-controller.js";
import protect from "../middleware/auth.js";

const router = Router();

//@desc     New Event
//@route    /api/task/create-event
router.post("/create-event", protect, newEvet);

//@desc     Delete Event
//@route    DELETE /api/task/delete-event
router.delete("/delete-event/:id", protect, deleteEvent);

//@desc     New Task
//@route    POST /api/task/add-task
router.post("/add-task", protect, addTask);

//@desc     Delete Task
//@route    DELETE /api/task/delete-task
router.delete("/delete-task/:taskId", protect, deleteTask);

//@desc     Get Events
//@route    GET /api/task/get-events
router.get("/get-events", protect, getEvents);

//@desc     Get Task
//@route    GET /api/task/get-task
router.get("/get-tasks/:eventId", protect, gettasks);

router.delete("/clear-tasks/:eventId", protect, clearTasks);


router.get("/get-event/:eventId", protect, getEvent)

export default router;
