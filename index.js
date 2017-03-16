function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementsByClassName('target')[0]
}

function deepestChild() {
  return document.getElementById('grand-node')
}
function increaseRankBy(n) {
  const node_list = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for (var i = 0, l = node_list.length; i < l; i++){
    node_list[i].innerHTML = (parseInt(node_list[i].innerHTML) + n).toString()
  }
}
