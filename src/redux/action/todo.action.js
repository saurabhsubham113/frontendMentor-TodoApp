import { ADD_TASK, UPDATE_TASK, DELETE_TASK } from "./action.type";


export const addTask = task => {
    return {
        type: ADD_TASK,
        payload: task
    }
}

export const updateTask = task => {
    return {
        type: UPDATE_TASK,
        payload: task
    }
}

export const deleteTask = id => {
    return {
        type: DELETE_TASK,
        payload: id
    }
}