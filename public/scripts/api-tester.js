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

    async function createCharacter(){
    const config = new Object();
    config.method = "POST";
    const pName = document.getElementById('pName').value;
    const HP = document.getElementById('HP').value;
    const AC = document.getElementById('AC').value;
    const STR = document.getElementById('STR').value;
    const DEX = document.getElementById('DEX').value;
    const CON = document.getElementById('CON').value;
    const INT = document.getElementById('INT').value;
    const WIS = document.getElementById('WIS').value;
    const CHA = document.getElementById('CHA').value;
    const response = await fetch(`https://monster-stat-api.herokuapp.com/Player?NAME=${pNAME}&HP=${HP}&AC=${AC}&SPEED=${SPEED}&STR=${STR}&DEX=${DEX}&CON=${CON}&WIS=${WIS}&INT=${INT}&CHA=${CHA}`, config);
    const data = await response.json()
    document.getElementById('testPSpace').innerHTML = `<p>${JSON.stringify(data)}</p>`
    }

    async function testPlayerGet(){
    const config = new Object();
    config.method = "GET";
    const id = document.getElementById('id').value;
    const response = await fetch(`https://monster-stat-api.herokuapp.com/Player/${id}`, config);
    const data = await response.json()
    document.getElementById('testSpae').innerHTML = `<p>${JSON.stringify(data)}</p>`
    }