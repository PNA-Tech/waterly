<script lang="ts">
  import { calculate, cost, tips } from "$lib/asker";

  const currencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  });

  let res = calculate();
  tips.sort((a, b) => b.save - a.save);
</script>

<svelte:head>
  <title>Water Calculator - Results</title>
</svelte:head>

<h1>Your Results</h1>
<div class="card-group">
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Water Consumption</h5>
      <h1>{(res * 365).toLocaleString()}</h1>
      <p class="card-text"><small class="text-muted">gallons/year</small></p>
    </div>
  </div>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Bill*</h5>
      <h1>$100</h1>
      <p class="card-text"><small class="text-muted">per month</small></p>
    </div>
  </div>
</div>

<h1 class="mt-5">Tips</h1>
<div class="row row-cols-1 row-cols-md-3 g-4 mb-5">
  {#each tips as tip}
  <div class="col">
    <div class="card h-100">
      <div class="card-body">
        <h5 class="card-title">{tip.title}</h5>
        <p class="card-text">{tip.description}</p>
      </div>
      <div class="card-footer text-muted">
        <div class="row">
          <div class="col">
            <i class="bi bi-droplet-half"></i>
            {(tip.save * 365).toLocaleString()} 
          </div>
          <div class="col">
            <i class="bi bi-cash-coin"></i>
            {currencyFormat.format(cost(tip.save * 365))}
          </div>
        </div>
      </div>
    </div>
  </div>
  {/each}
</div>
