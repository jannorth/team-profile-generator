function createHTML(teamArray) {
  const cardArray = [];

  function createManager(manager) {
    return `
        <div class="card-body">
            <div class="card">
                <h2>${manager.getName()}</h2>
                <h3>${manager.getRole()}</h3>
                <div class="emp-contact">
                <ul>
                    <li>
                        <h4>${manager.getId()}</h4>
                    </li>
                    <li>
                        <h4><a href="mailto: ${manager.getEmail()}">${manager.getEmail()}</a></h4>
                    </li>
                    <li>
                        <h4>${manager.getOfficeNumber()}</h4>
                    </li>
                </ul>
            </div>
        </div>
        `;
  }
  function createEngineer(engineer) {
    return `
            <div class="card">
                <h2>${engineer.getName()}</h2>
                <h3>${engineer.getRole()}</h3>
                <div class="emp-contact">
                    <ul>
                        <li>
                            <h4>${engineer.getId()}</h4>
                        </li>
                        <li>
                            <h4><a href="mailto: ${engineer.getEmail()}">${engineer.getEmail()}</a></h4>
                        </li>
                        <li>
                            <h4><a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></h4>
                        </li>
                    </ul>
                </div>
            </div>
        `;
  }
  function createIntern(intern) {
    return `
            <div class="card">
                <h2>${intern.getName()}</h2>
                <h3>${intern.getRole()}</h3>
                <div class="emp-contact">
                    <ul>
                        <li>
                            <h4>${intern.getId()}</h4>
                        </li>
                        <li>
                            <h4><a href="mailto: ${intern.getEmail()}">${intern.getEmail()}</a></h4>
                        </li>
                        <li>
                            <h4>${intern.getSchool()}</h4>
                        </li>
                    </ul>
                </div>
            </div>
        `;
  }

  for (var i = 0; i < teamArray.length; i++) {
    if (teamArray[i].getRole() === "Manager") {
      cardArray.push(createManager(teamArray[i]));
    } else if (teamArray[i].getRole() === "Engineer") {
      cardArray.push(createEngineer(teamArray[i]));
    } else if (teamArray[i].getRole() === "Intern") {
      cardArray.push(createIntern(teamArray[i]));
    }
  }
  return cardArray.join("");
}

module.exports = (teamArray) => {
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
    `;
};
