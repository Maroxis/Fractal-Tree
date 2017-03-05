
function setup(){
  noFill()

  createCanvas(1200,800)
  branches = []
  branches.push(new Branch(600,800,Math.PI/2))
  growTree(treeHeight)
  for(var i = 0; i < branches.length; i++){
    branches[i].draw();
  }
}
function growTree(count){
  count--
  for(var i = branches.length-1; i >= 0 ; i--){
      branches[i].age++
    if(branches[i].leaf){
      branches[i].grow()
    }
    
    
  }
  brLenght*=(0.72+0.01*branches[0].age)
  if(count > 0)
    growTree(count)
}