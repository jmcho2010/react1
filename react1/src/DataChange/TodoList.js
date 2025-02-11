import { useState } from "react";


function TodoList(){
    const [newTodo, setNewTodo] = useState('');

    return(
        <div>
            <form>
                <input 
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="새 할 일 추가"
                />
                <button type="submit">추가하기</button>
            </form>

            <div>
                <button onClick={() => dispatch(setFilter('all'))}></button>
                <button onClick={() => dispatch(setFilter('active'))}></button>
                <button onClick={() => dispatch(setFilter('completed'))}></button>
            </div>

        {/*화면 랜더링*/}
            <ul>
                {filteredTodos.map}
            </ul>
        </div>
    )

}