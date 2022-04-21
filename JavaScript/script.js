var display;
var index=1 , maxNum=6;
var Image_Id = document.getElementById('getImage');

function next()
{
  index++;
  if (index > maxNum)
  {
    index=maxNum;
  }
  Image_Id.src = "../images/"+ index +".jpg";
}

function previous()
{
  index--;
  if ( index < 1 )
  {
    index=1;
  }
  Image_Id.src = "../images/"+ index +".jpg";
}

function slideshow()
{
    clearInterval(display);
    display = setInterval(()=>
    {
      index++;
      if ( index > maxNum )
      {
        index=1;
      }
      Image_Id.src = "../images/"+ index +".jpg";

    }, 1000);
}

function stop()
{
    clearInterval(display);
}