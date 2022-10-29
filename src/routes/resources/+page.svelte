
<h1>Resources</h1>
<p><strong>Learn more about how water footprint, how where you live affects you and what you can do the help the Earth.</strong></p>
<script>
    function page1() {
        window.open("https://www.epa.gov/watersense/understanding-your-water-bill")
    };
    function page2() {
        window.open("https://www.epa.gov/watersense/how-we-use-water")
    };
    function page3() {
        window.open("https://lookforwatersense.epa.gov/products/")
    };
    function page4() {
        window.open("https://dripfina.com/water-bill-by-us-states/#:~:text=What%27s%20The%20Average%20Monthly%20Water%20Bill%20in%20the,7%20Colorado%20...%208%20Connecticut%20...%20More%20items")
    };
    function page5() {
        window.open("https://www.usgs.gov/mission-areas/water-resources/science/domestic-water-use")
    };
    function page6() {
        window.open("https://www.conservenorthtexas.org/regional-indicators/us-domestic-water-use-gallons-day-person")
    };
    
</script>
  
  <main>
    
    <!-- Learn about water bill epa.gov -->
    <h3>Water Bill</h3>
    <p>Click here to understand you water bill more in-depth:
    </p>
    <button type="button" class="btn btn-primary"  on:click={page1}>Learn more</button>

    <!-- Learn about how we use water epa.gov -->
    <h3>How we use water</h3>
    <p>Click here to understand you on how you use water everyday in your life more in-depth:
    </p>
    <button type="button" class="btn btn-primary"  on:click={page2}>Learn more</button>

    <!-- Learn about Watersense Products epa.gov -->
    <h3>Find a Watersense Product</h3>
    <p>Click here to find approved Watersense Products you can use:
    </p>
    <button type="button" class="btn btn-primary"  on:click={page3}>Find</button>

    <!-- Learn about Water Bills -->
    <h3>External Resources for Domestic Water Use and Water Bills</h3>
    <p>Learn more about Domestic Water Use and Water Bills by State:
    </p>
    <button type="button" class="btn btn-primary"  on:click={page4}>Water Bills By State</button>
    <button type="button" class="btn btn-primary"  on:click={page5}>Domestic Water Usage Survey</button>
    <button type="button" class="btn btn-primary"  on:click={page6}>Domestic Water Usage Growth</button>
  </main>
