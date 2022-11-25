import { useEffect, useReducer } from 'react'
import { todoReducer } from '../reducer/todoReducer';

export const useTodos = () => {
    const init = () => ( JSON.parse(localStorage.getItem('todos')) || [] )
    
    const [todos, dispatch] = useReducer(todoReducer, [], init)

    const handleNewTodo = (newTodo) => {
        dispatch({ type: '[TODO] Add Todo', payload: newTodo })
    }

    const handleRemoveTodo = (id) => {
        dispatch({ type: '[TODO] Delete Todo', payload: id })
    }

    const handleDoneTodo = (id) => {
        dispatch({ type: '[TODO] Done Todo', payload: id })
    }

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    return {
        todos,
        countTodos: todos.length,
        countPending: todos.filter( o => !o.done ).length,
        handleRemoveTodo,
        handleDoneTodo,
        handleNewTodo
    }
}