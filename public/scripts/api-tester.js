async function testReadAll(){
    const config = new Object();
    config.method = "GET";
    const response = await fetch("https://monster-stat-api.herokuapp.com/Monster", config);
    const data = await response.json()
    document.getElementById('testSpace').innerHTML = `<p>${JSON.stringify(data)}</p>`
    }
    
  async function testMonsterCont(){
    const config = new Object();
    config.method = "GET";
    const mName = document.getElementById('mName').value;
    const response = await fetch(`https://monster-stat-api.herokuapp.com/Monster/containing/${mName}`, config);
    const data = await response.json()
    document.getElementById('testSpac').innerHTML = `<p>${JSON.stringify(data)}</p>`
    }