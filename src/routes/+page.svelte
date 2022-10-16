<script lang="ts">
  import Estimate from "$lib/components/Estimate.svelte";
  import Question from "$lib/components/Question.svelte";
  import { questions } from "$lib/questions";
  import { tick } from "svelte";
    import { fly } from "svelte/transition";
  
  const duration = 1000;

  let question = 0;
  let animate = false;
  let prev = -1;

  function changeQuestion(offset: number) {
    prev = question;
    animate = true;
    tick().then(() => {animate = false;});
    question += offset;
  } 
</script>

{#if animate}
<div out:fly={{x: ((question - prev) > 0 ? -1 : 1) * window.innerWidth, duration }}>
  <Question id={prev}></Question>
</div>
{/if}

{#if !animate}
<div in:fly={{x: ((question - prev) > 0 ? 1 : -1) * window.innerWidth, duration }}>
  <Question id={question}></Question>
</div>
{/if}

<Estimate></Estimate>

<div class="switcher input-group">
  <button class="btn btn-outline-primary left-btn" on:click={() => {changeQuestion(-1)}} disabled={question == 0}><i class="bi bi-arrow-left"></i></button>
  <input readonly value={"Question " + (question + 1) + " of " + questions.length} class="form-control input"/>
  <button class="btn btn-outline-primary right-btn" on:click={() => {changeQuestion(1)}} disabled={question == questions.length - 1}><i class="bi bi-arrow-right"></i></button>
</div>

<style>
  .switcher {
    position: fixed;
    bottom: 0;
    left: 0;
  }

  .left-btn {
    border-radius: 0;
  }

  .right-btn {
    border-bottom-right-radius: 0;
  }

  .input {
    flex: 0.5 1 auto;
  }
</style>