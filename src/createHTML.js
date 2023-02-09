function createHTML(teamArray) {
    const cardArray = [];

    function createManager(manager) {
        return `
        <h2>${manager.getRole()}</h2>
        <h2>${manager.getName()}</h2>
        <h2>${manager.getId()}</h2>
        <h2>${manager.getEmail()}</h2>
        <h2>${manager.getOfficeNumber()}</h2>
        `
    }



for (var i = 0; i < teamArray.length; i ++) {
    if (teamArray[i].getRole()==="Manager"){
        cardArray.push(createManager(teamArray[i]))
    }
    else if (teamArray[i].getRole()==="Engineer"){
        cardArray.push(createEngineer(teamArray[i]))
    }
    else if (teamArray[i].getRole()==="Intern"){
        cardArray.push(createIntern(teamArray[i]))
    }
}
    return cardArray.join("");
}

module.exports = teamArray => {
    return `
    <!DOCTYPE html>
<html lang="en-us">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <nav>Team Members</nav>
    <div>
        ${createHTML(teamArray)}
    </div>
</body>
</html>
    
    
    
    `
}