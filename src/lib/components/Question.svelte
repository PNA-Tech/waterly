<script lang="ts">
  import { values } from "$lib/asker";
  import { questions, QuestionType, type Question, type MultipleChoiceQuestion, type NumberQuestion } from "$lib/questions";


  export let id: number;
  let question: Question<any>;
  let multipleChoiceData: MultipleChoiceQuestion<any>;
  let numberData: NumberQuestion;
  $: {
    question = questions[id];
    if (question.type === QuestionType.MultipleChoice) {
      multipleChoiceData = question.data as MultipleChoiceQuestion<any>;
    } else if (question.type === QuestionType.Number) {
      numberData = question.data as NumberQuestion;
    }
  }
</script>

<div class="container question">
  <h1 class="mb-3">{question.title}</h1>
  {#if question.type == QuestionType.MultipleChoice}
    <div class="btn-group-vertical btn-group-lg items">
      {#each Object.keys(multipleChoiceData.choices) as key, i}
        <input type="radio" name={"question" + id} bind:group={$values[id]} value={multipleChoiceData.choices[key]} class="btn-check" id={"item" + i + "-" + id}/>
        <label class="btn btn-outline-primary" for={"item" + i + "-" + id}>{key}</label>
      {/each}
    </div>
  {:else}
    <div class="input-group input-group-lg items">
      <button class="btn btn-primary" on:click={() => {$values[id] -= 1}}><i class="bi bi-dash"></i></button>
      <input type="number" class="form-control" bind:value={$values[id]}/>
      <button class="btn btn-primary" on:click={() => {$values[id] += 1}}><i class="bi bi-plus"></i></button>
    </div>
  {/if}
</div>

<style>
  .question {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 100%;
    pointer-events: none; 
  }

  .items {
    pointer-events: auto;
  }
</style>