Branch = function(x1,y1,angle){
  this.x1 = x1;
  this.y1 = y1;
  this.angle = angle
  this.length = brLenght;
  this.leaf = true;
  this.age = 0
  
  this.x2 = this.x1 - Math.cos(this.angle) * this.length
  this.y2 = this.y1 - Math.sin(this.angle) * this.length
  
}
Branch.prototype.grow = function(){
  this.leaf = false;
  for(var i = -(floor(brNumber/2)); i < floor(brNumber/2)+1; i++){
    if(brNumber%2 == 1 ){
      branches.push(new Branch(this.x2,this.y2,this.angle+i*angle));
    }
    else if(i !== 0){
      var brAngle = floor(angle/2)
      if(i > 0 )
        brAngle*=-1
      branches.push(new Branch(this.x2,this.y2,this.angle+i*angle+brAngle));
    }
  }
}
Branch.prototype.draw = function(){
  if(this.age < leafNumber){
    stroke(0,128,0)
  }
  else{
    stroke(133,94,66)
  }
  strokeWeight(brThick*(this.age*Math.sqrt(this.age))+brThick)
  line(this.x1,this.y1,this.x2,this.y2)
}