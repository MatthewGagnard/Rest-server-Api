async function testReadAll(){
    const config = new Object();
    config.method = "POST";
    const response = await fetch("http://localhost:80/Player?NAME=Vensin&HP=45&AC=14&WIS=20", config);
    const data = await response.json()
    document.body.innerHTML += `<p>${JSON.stringify(data)}</p>`
    }
    