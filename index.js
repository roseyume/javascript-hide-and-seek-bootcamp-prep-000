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
  var target = document.querySelectorAll('div#grand-node');
  for(var x =0; x< target.length; x++)
  {
    var listNode = target[x].querySelectorAll('ul');
    for(var y = 0; y < target.length; y++)
    {
      var value = parseInt(listNode[y])+1;
      listNode[y].textContent=value;
    }
  }
  
}