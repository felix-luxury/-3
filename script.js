btn.addEventlistener (click, Min(a,b),Option)

function Min(a,b)
{
  document.getElementById("a").checked =a;
  document.getElementById("b").checked =b;
  a=Number.parseInt(a)
  b=Number.parseInt(b)
  if (a>b)
  {
      alert("Минимальное" =b)
  }  
  else
  alert ("Максимальное")

} 