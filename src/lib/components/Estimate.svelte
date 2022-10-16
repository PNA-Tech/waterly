<script lang="ts">
  import { calculate, values } from "../asker";

  let estimate = 0;
  let display = 0;
  values.subscribe(() => {
    estimate = calculate();
  })
  setInterval(() => {
    if (estimate > display) {
      display += 1;
    } else if (estimate < display) {
      display -= 1;
    }
  }, 10)
</script>

<div class="estimate">
  <div>{display*365} gal/year</div>
  <div>$idk/year</div>
</div>

<style>
  .estimate {
    position: fixed;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
</style>