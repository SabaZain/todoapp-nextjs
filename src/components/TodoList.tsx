"use client"
import { useState } from "react"

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

const TodoList = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [inputValue, setInputValue] = useState("");

    // add of items
    const addTodo = () => {
        if (inputValue.trim() === "") return;
        setTodos([
            ...todos,
            { id: Date.now(), text: inputValue, completed: false },
        ]);

        setInputValue("");
    };

    // add values id:
    const toggleTodo = (id: number) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo

            )
        )
    };

    // delete todo section
    const deleteTodo = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <div className="flex flex-col min-h-screen">
            <header className="bg-purple-500 text-white py-4 border-black rounded-lg">
                <div className="max-w-3xl mx-auto text-center">

                    <h1 className="text-3xl font-ariel">Todo List App By Saba Zain</h1>
                    <p className="font-ariel mt-2">Effortlessly manage your tasks and enhance your productivity with our intuitive to-do app.
                    </p>
                </div>
            </header>



            <main className="flex-grow flex items-center justify-center">
                <div className="max-w-md mx-auto p-4 bg-gray-400 border-black rounded-lg shadow-md">
                    <div className="mb-4">
                        <div className="flex">

                            <input type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                className="flex-grow p-2 border border-blue-400 rounded-lg"
                                placeholder="Insert a new task...."
                            />
                            <button
                                onClick={addTodo}
                                className="ml-2 px-4 py-2 bg-blue-500 text-black rounded-lg hover:bg-blue-400">
                                Insert
                            </button>
                        </div>
                    </div>


                    <ul className="space-y-2">
                        {todos.map((todo) => (
                            <li key={todo.id}
                                className={`flex items-center justify-between p-2 border-slate-400 rounded-lg ${todo.completed ? "bg-skyblue-400 line-through" : "bg-amber-300"
                                    }`}
                            >

                                <span>{todo.text}</span>

                                <div>
                                    <button
                                    onClick={() => toggleTodo(todo.id)}
                                    className="text-black px-2 py-1 text-sm bg-lime-500 rounded-lg hover:bg-lime-400">
                                        {todo.completed ? "undo" : "Complete"}

                                    </button>

                                    <button
                                    onClick={() => deleteTodo(todo.id)}
                                    className="text-black px-2 py-1 text-sm bg-red-700 rounded-lg hover:bg-red-500"
                                    >
                                Delete
                                        

                                    </button>

                                    
                                </div>

                            </li>
                        ))}
                    </ul>
                </div>
            </main>
        </div>

    );
};

export default TodoList