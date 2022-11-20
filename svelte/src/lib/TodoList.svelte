<script>
  import TodoForm from "./TodoForm.svelte";
import TodoItem from "./TodoItem.svelte";

    let todos = [{id: 1, text: "Learn React"}]

    function addTodo(e)
    {
        const newTodos = [...todos, {id: todos.length + 1, text: e.detail}]
        todos = newTodos
    }
</script>

<TodoForm on:onSubmit={addTodo} />
<ul>
    {#each todos as todo(todo.id)}
        <TodoItem todoItem={todo} />
    {/each}
</ul>