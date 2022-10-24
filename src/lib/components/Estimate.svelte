<script lang="ts">
  import { calculate, cost, values } from "../asker";

  let estimate = 0;
  let display = 0;
  values.subscribe(() => {
    estimate = calculate() * 365;
  })
  const currencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  });
  setInterval(() => {
    if (display != estimate) {
      display += Math.round((estimate - display) / 10);
      if (Math.abs(display - estimate) < 10) {
        display = estimate;
      }
    }
  }, 10)
</script>

<div class="estimate">
  <div>{display.toLocaleString()} gal/year</div>
  <div>{currencyFormat.format(cost(display))}/year</div>
</div>

<style>
  .estimate {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding-right: 2vw;
    padding-top: 0.5vh;
    font-weight: bold;
    text-align: right;
    width: 100vw;
  }
</style>