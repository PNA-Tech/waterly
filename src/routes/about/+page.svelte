<svelte:head>
  <title>About Us</title>
</svelte:head>

<head>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <style>
    body {
      font-family: Arial, Helvetica, sans-serif;
      margin: 0;
    }

    html {
      box-sizing: border-box;
    }

    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }

    .column {
      float: left;
      width: 33.3%;
      margin-bottom: 16px;
      padding: 0 8px;
    }

    .card {
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      margin: 8px;
    }

    .about-section {
      padding: 50px;
      text-align: center;
      background-color: #474e5d;
      color: white;
    }

    .container {
      padding: 0 16px;
    }

    .container::after,
    .row::after {
      content: "";
      clear: both;
      display: table;
    }

    .title {
      color: grey;
    }

    .button {
      border: none;
      outline: 0;
      display: inline-block;
      padding: 8px;
      color: white;
      background-color: #000;
      text-align: center;
      cursor: pointer;
      width: 100%;
    }

    .button:hover {
      background-color: #555;
    }

    @media screen and (max-width: 650px) {
      .column {
        width: 100%;
        display: block;
      }
    }
  </style>
</head>
<body>
  <div class="about-section">
    <h1>About Us Page</h1>
    <p>Some text about who we are and what we do.</p>
    <p>
      Resize the browser window to see that this page is responsive by the way.
    </p>
  </div>

  <h2 style="text-align:center">Our Team</h2>
  <div class="row">
    <div class="column">
      <div class="card">
        <img src="/w3images/team1.jpg" alt="Test" style="width:100%" />
        <div class="container">
          <h2>Aarnav Bhat</h2>
          <p class="title">Researcher</p>
          <p>Some text that describes me lorem ipsum ipsum lorem.</p>
          <p>jane@example.com</p>
          <p><button class="button">Contact</button></p>
        </div>
      </div>
    </div>

    <div class="column">
      <div class="card">
        <img src="src\about\Profile Picture.png" alt="Mike" style="width:100%" />
        <div class="container">
          <h2>Piyush Acharya</h2>
          <p class="title">Researcher + Website Developer</p>
          <p>Piyush Acharya is an freshman at Interlake High School interested in SWE and ML. He recently placed first at the U.S. Department of Energy's National Science Bowl Finals. Piyush is highly passionate about exploring different ways in which he can advance his skills in the branches of science while also tying it with his passion for computer science. He created and is the lead developer at DNAnalyzer, an open source project for analyzing DNA sequences where he manages a team of over 20 developers.</p>
          <p>contact@piyushacharya.com</p>
          <p><button href="www.piyushacharya.com" class="button">Contact</button></p>
        </div>
      </div>
    </div>

    <div class="column">
      <div class="card">
        <img src="/w3images/team3.jpg" alt="John" style="width:100%" />
        <div class="container">
          <h2>Nishant Vikramaditya</h2>
          <p class="title">Website Developer</p>
          <p>Some text that describes me lorem ipsum ipsum lorem.</p>
          <p>john@example.com</p>
          <p><button class="button">Contact</button></p>
        </div>
      </div>
    </div>
  </div>
</body>
