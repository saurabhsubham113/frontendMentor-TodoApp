import { ADD_TASK, UPDATE_TASK, DELETE_TASK } from '../action/action.type'

const initialState = {
    tasks: [
        { id: 1, task: "complete reducer", isDone: true },
        { id: 2, task: "complete action", isDone: false },
        { id: 3, task: "complete store", isDone: true }
    ]
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }
        case UPDATE_TASK:
            return {
                ...state,
                tasks: state.tasks.map(task => (
                    task.id === action.payload.id ? action.payload : task
                ))
            }
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(task => {
                    return task.id !== action.payload
                })
            }
        default:
            return state
    }
}

export default todoReducer