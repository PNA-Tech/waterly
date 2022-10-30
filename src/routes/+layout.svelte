<script lang="ts">
  import { page } from "$app/stores";
</script>

<nav class="navbar navbar-expand-lg bg-dark navbar-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">
      <img src="/favicon.png" width="24" height="24" alt="Logo" class="d-inline-block align-text-top">
      Waterly
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" class:active={$page.routeId == "about"} href="/about">About Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" class:active={$page.routeId == "resources"} href="/resources">Resources</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<slot></slot>

<style>
  .nav-link {
    pointer-events: auto;
  }
</style>