<script>
  import { createEventDispatcher } from "svelte";


    let todoValue = ""
    const dispatcher = createEventDispatcher()
    function handleSubmit(e)
    {
        dispatcher("onSubmit", todoValue)
    }
</script>

<form on:submit|preventDefault={handleSubmit}>
<input type="text" bind:value={todoValue} />
<button type="submit"> Add Todo</button>
</form>