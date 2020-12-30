function istouching(ansh,parth){
    if(ansh.x-parth.x<parth.width/2+ansh.width/2&&
      parth.x-ansh.x<parth.width/2+ansh.width/2&&
      ansh.y-parth.y<parth.height/2+ansh.height/2&&
      parth.y-ansh.y<parth.height/2+ansh.height/2){
   // movingrect.shapeColor="blue"
    //fixedrect.shapeColor = "blue"
    return true
    }
    else{
   //movingrect.shapeColor="red"
   //fixedrect.shapeColor = "red"
   return false
    }
  }