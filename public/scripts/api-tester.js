async function testReadAll(){
    const config = new Object();
    config.method = "GET";
    const response = await fetch("https://monster-stat-api.herokuapp.com/Monster", config);
    const data = await response.json()
    document.getElementById('testSpace').value = `<p>${JSON.stringify(data)}</p>`
    }
    