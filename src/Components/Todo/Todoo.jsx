
import { useState } from 'react';
import './todoo.css';
import Draggable from "react-draggable";


function Todoo() {
    const [input, setInput] = useState('');
    const [list, setList] = useState([]);

    function addTodo(todo) {
        if(input !== ''){
        const newtodo = {
            id: Math.random(),
            todolist: todo
        }
        setList([...list, newtodo])
        console.log(list, "list");
        setInput('')
        }
    }

    return (
        <>
        <div className='title'>
            <div className='todooTitle'><h1>Add your list</h1></div>
            <div className='todooTitle'> <h1>Drop in</h1></div>
        </div>
    <div className="todoo">
        <div className="containers">
            <div className="tools">
                <input
                className='myInput' 
                placeholder='type...'
                type="text" 
                value={input} 
                onChange={(e)=>{setInput(e.target.value)}}
                />
                <button onClick={()=>{addTodo(input)}} className='myButton'> Add</button>

            </div>
            <div className="box">
                    <ul>
                        {
                            list.map((todo)=>{
                                return(
                                    <Draggable>
                                    <li key={todo.id}>
                                        {todo.todolist}
                                    </li>
                                    </Draggable> 
                                )
                            })
                        }
                    </ul>
            </div>
        </div>
        <div className="containers">

        </div>
    </div>
        </>
    )
}

export default Todoo;

// <div className='todoo'>
// <div className='tools'>
//     <input
//     className='inp'
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         placeholder='type...'
//     />
//     <button onClick={() => addTodo(input)}>add</button>
// </div>
// <div className='do'>
// <ul>
//     {list.map((todo) => {
//         return (
//             <>
//                 <li key={todo.id}>{todo.todolist}</li>
//             </>
//         )
//     })}
// </ul>
// </div>
// </div>