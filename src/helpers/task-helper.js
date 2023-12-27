import { Event } from "../models/eventSchema.js";
import { Tasks } from "../models/taskSchema.js";

//@desc     New Event
//@route    POST /api/task/create-event
export const newEventHelper = ({ eventName, userId }) => {
  return new Promise((resolve, reject) => {
    const newEvent = new Event({
      eventName: eventName,
      userId: userId,
    });

    newEvent
      .save({ new: true })
      .then((event) => {
        resolve(event);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

//@desc     Delete Event
//@route    DELETE /api/task/delete-event
export const deleteEventHelper = (eventId) => {
  return new Promise((resolve, reject) => {
    try {
      Event.deleteOne({ _id: eventId }).then((res) => {
        Event.find({}).then((events) => {
          resolve(events);
        });
      });
    } catch (error) {
      reject(error);
    }
  });
};

//@desc     New Task
//@route    POST /api/task/add-task
export const newTaskHelper = ({ userId, eventId, task }) => {
  return new Promise((resolve, reject) => {
    try {
      const newTask = new Tasks({
        task: task,
        useId: userId,
        eventId: eventId,
      });

      newTask.save({ new: true }).then((response) => {
        resolve(response);
      });
    } catch (error) {
      reject(error);
    }
  });
};

//@desc     Delete Task
//@route    DELETE /api/task/delete-task
export const deleteTaskHelper = (taskId) => {
  return new Promise((resolve, reject) => {
    try {
      Tasks.deleteOne({ _id: taskId }).then((res) => {
        resolve(res);
      });
    } catch (error) {
      reject(error);
    }
  });
};

//@desc     Get Task
//@route    GET /api/task/get-task
export const getTasksHelper = (eventId) => {
  return new Promise((resolve, reject) => {
    try {
      Tasks.find({ eventId: eventId }).then((res) => {
        resolve(res);
      });
    } catch (error) {
      reject(error);
    }
  });
};

//@desc     Get Events
//@route    GET /api/task/get-events
export const getEventsHelper = (userId) => {
  return new Promise((resolve, reject) => {
    try {
      Event.find({ userId: userId }).then((res) => {
        resolve(res);
      });
    } catch (error) {
      reject(error);
    }
  });
};
