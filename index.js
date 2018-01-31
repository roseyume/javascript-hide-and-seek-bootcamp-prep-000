function getFirstSelector(selector)
{
  var select = document.querySelector(selector);
  return select;
}

function nestedTarget(){
  var target= document.getElementById('nested').getElementsByClassName('target');
  return target;
}