<script lang="ts">
  import { values } from "$lib/asker";
  import Estimate from "$lib/components/Estimate.svelte";
  import Question from "$lib/components/Question.svelte";
  import Results from "$lib/components/Results.svelte";
  import { questions } from "$lib/questions";
  import { tick } from "svelte";
  import { fly } from "svelte/transition";

  const duration = 500;

  let question = 0;
  let animate = false;
  let prev = -1;

  function changeQuestion(offset: number) {
    // Check condition
    if (
      offset > 0 &&
      question + offset < questions.length &&
      questions[question + offset].condition
    ) {
      let cond = questions[question + offset].condition!;
      if (!cond.check($values[question + offset + cond.offset])) {
        // Call check function
        offset += 1;
      }
    }

    prev = question;
    animate = true;
    tick().then(() => {
      animate = false;
    });
    question += offset;
  }
</script>

{#if animate}
  <div
    out:fly={{
      x: (question - prev > 0 ? -1 : 1) * window.innerWidth,
      duration,
    }}
  >
    {#if prev < questions.length}
      <Question id={prev} />
    {:else}
      <Results />
    {/if}
  </div>
{/if}

{#if !animate}
  <div
    in:fly={{ x: (question - prev > 0 ? 1 : -1) * window.innerWidth, duration }}
  >
    {#if question < questions.length}
      <Question id={question} />
    {:else}
      <Results />
    {/if}
  </div>
{/if}

<Estimate />

<div class="switcher input-group">
  <button
    class="btn btn-outline-primary left-btn"
    on:click={() => {
      changeQuestion(-1);
    }}
    disabled={question == 0}><i class="bi bi-arrow-left" /></button
  >
  <input
    readonly
    value={question < questions.length
      ? "Question " + (question + 1) + " of " + questions.length
      : "Finished"}
    class="form-control input"
  />
  <button
    class="btn btn-outline-primary right-btn"
    on:click={() => {
      changeQuestion(1);
    }}
    disabled={question >= questions.length}
    ><i class="bi bi-arrow-right" /></button
  >
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
