///2
async function getFact() {
    let response = await fetch("https://catfact.ninja/fact");
    let data = await response.json();

    console.log(data.fact);
}

getFact();