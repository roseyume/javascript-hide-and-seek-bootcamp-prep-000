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
  var target = document.querySelectorAll('div#grand-node ul');
  for(var x =0; x< target.length; x++)
  {
      var value = parseInt(listNode[x])+n;
      listNode[y].innerHTML=value.toString();
    
  }
  
}