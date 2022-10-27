function display_number(num)
{
   document.getElementById("display").value =document.getElementById("display").value + num;

}

function cal()
{
   let str = document.getElementById("display").value
   if(str)
   {
      document.getElementById("display").value = eval(str);
   }
}
function C()
{
   document.getElementById("display").value = "";
}
function del()
{
   let str = document.getElementById("display").value;
   document.getElementById("display").value = str.substring(0 , str.length - 1);
}