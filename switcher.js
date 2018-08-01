var elements = document.getElementsByClassName('js-issue-title');

for (var i = 0; i < elements.length; i++) {
  elements[i].innerHTML = elements[i].innerHTML.replace(/\[(PROD-\d+)\]/, '[<a target="_blank" href="https://jira.robot.car/browse/$1">$1</a>]');
}

