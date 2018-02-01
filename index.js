function getFirstSelector(selector)
{
  var select = document.querySelector(selector);
  return select;
}

function nestedTarget(){
  var target= document.querySelector('#nested .target');
  return target;
}

function deepestChild(){
  var target = document.querySelector('div#grand-node div div div div');
  return target;
}

function increaseRankBy(n)
{
  var target = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for(var x =0; x< target.length; x++)
  {
      var value = parseInt(target[x])+n;
      target[x].innerHTML=value.toString();
    
  }
  
}