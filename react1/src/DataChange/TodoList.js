

function TodoList(){


    return(
        <div>
            <form>
                <input 
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                />
            </form>

            <div>

            </div>

            <ul>

            </ul>
        </div>
    )

}