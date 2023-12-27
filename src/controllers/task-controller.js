import { response } from "express";
import {
  deleteEventHelper,
  deleteTaskHelper,
  getEventsHelper,
  getTasksHelper,
  newEventHelper,
  newTaskHelper,
} from "../helpers/task-helper.js";

//@desc     New Event
//@route    /api/task/create-event
export const newEvet = (req, res) => {
  try {
    const data = {
      eventName: req.body,
      userId: req?.user?._id,
    };

    newEventHelper(data)
      .then((response) => {
        res.status(200).send(response);
      })
      .catch((err) => res.status(err.status || 500).send(err));
  } catch (error) {
    res.status(error.status || 500).send(error);
  }
};

//@desc     Delete Event
//@route    DELETE /api/task/delete-event
export const deleteEvent = (req, res) => {
  try {
    deleteEventHelper(req.body.eventId).then((response) => {
      res.status(200).send(response);
    });
  } catch (error) {
    res.status(error.status || 500).send(error);
  }
};

//@desc     New Task
//@route    POST /api/task/add-task
export const addTask = (req, res) => {
  try {
    const data = {
      userId: req.user?._id,
      eventId: req.body?.evetId,
      task: req.body?.task,
    };

    newTaskHelper(data).then((response) => {
      res.status(200).send(response);
    });
  } catch (error) {
    res.status(error.status || 500).send(error);
  }
};

//@desc     Delete Task
//@route    DELETE /api/task/delete-task
export const deleteTask = (req, res) => {
  try {
    deleteTaskHelper(req?.body?.taskId).then((response) => {
      res.status(200).send(response);
    });
  } catch (error) {
    res.status(error.status || 500).send(error);
  }
};

//@desc     Get Task
//@route    GET /api/task/get-task
export const gettasks = (req, res) => {
  try {
    getTasksHelper(req.body.eventId).then((response) => {
      res.status(200).send(response);
    });
  } catch (error) {
    res.status(error.status || 500).send(error);
  }
};

//@desc     Get Events
//@route    GET /api/task/get-events
export const getEvents = (req, res) => {
  try {
    getEventsHelper(req.user?._id).then((response) => {
      res.status(200).send(response);
    });
  } catch (error) {
    res.status(error.status || 500).send(error);
  }
};
