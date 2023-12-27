import { Router } from "express";
import {
  addTask,
  deleteEvent,
  deleteTask,
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
router.delete("/delete-event", protect, deleteEvent);

//@desc     New Task
//@route    POST /api/task/add-task
router.post("/add-task", protect, addTask);

//@desc     Delete Task
//@route    DELETE /api/task/delete-task
router.post("/delete-task", protect, deleteTask);

//@desc     Get Events
//@route    GET /api/task/get-events
router.get("/get-events", protect, getEvents);

//@desc     Get Task
//@route    GET /api/task/get-task
router.get("/get-tasks", protect, gettasks);

export default router;
