<script lang="ts">
  import { page } from "$app/stores";
</script>

<nav class="navbar navbar-expand-lg py-0" style="background-color: #0e1525;">
  <div class="container-fluid">
    <a class="navbar-brand" href="/" style="color: #f5f9fc;">
      <img src="/favicon.png" width="28" height="28" alt="Logo" class="d-inline-block align-text-top">
      Waterly
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" class:active={$page.routeId == "about"} href="/about" style="color: #f5f9fc;">About Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" class:active={$page.routeId == "resources"} href="/resources" style="color: #f5f9fc;">Resources</a>
        </li>
      </ul>
      <div class="collapse navbar-collapse justify-content-end">
        <h1 class="m-4">
          <a href="https://github.com/Interlake-Congressional-App-Challenge/Waterly" target="_blank"><i class="bi bi-github fa-6x text-white m-3" style="font-size:40px;"></i></a>
          
        </h1>
      </div>
    </div>
  </div>
</nav>

<slot></slot>

<style>
  .nav-link {
    pointer-events: auto;
  }
</style>