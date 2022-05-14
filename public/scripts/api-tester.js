async function testReadAll(){
    const config = new Object();
    config.method = "POST";
    const response = await fetch("https://monster-stat-api.herokuapp.com/Player?NAME=Vensin&HP=45&AC=14&WIS=20", config);
    const data = await response.json()
    document.getElementById('testSpace').innerHTML += `<p>${JSON.stringify(data)}</p>`
    }
    