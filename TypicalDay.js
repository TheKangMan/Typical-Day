let cloudColor = ["#fff0f5", "#f8f8ff", "#d3d3d3", "#708090"]

let cloudIndex = (Math.random() * 10000) % 5


let treeLeaves = ["seagreen", "springgreen", "mediumspringgreen", "green", "darkgreen", "darkolivegreen"]

let treeStump = ["sienna", "saddlebrown", "darkgoldenrod", "brown", "maroon", "sandybrown"]

function clouds(){
    getRandomColor(cloudColor)
    setXScale(cloudIndex)
    setYPos(20)
    return sphere()
}

function cloudClump(){
    
    let clump = group();
    
    for(let a=0; a<5; a++){
    let xPos = Math.random() * 5;
    let zPos = Math.random() * 5;
    
    setXPos(xPos);
    setZPos(zPos);
    
    clump.add(clouds());
    
    }
    return clump
}


function tree1(){
    
    getRandomColor(treeLeaves);
    setYPos(3)
    setRadius(1);
    cone();
    
    setYPos(2.5)
    setYScale(1.5);
    setRadius(1.5);
    cone();
    
    setYPos(2);
    setYScale(1.75);
    setRadius(1.75);
    cone();
    
    getRandomColor(treeStump);
    setYPos(0)
    setRadius(.2)
    setYScale(5)
    cylinder();
}

function tree2(){
    getRandomColor(treeLeaves)
    setYPos(3)
    sphere();
    
    getRandomColor(treeStump);
    setYPos(0)
    setRadius(.2)
    setYScale(5)
    cylinder();
}


for(let x = 0; x < 9; x++){
    for(let z = 0; z < 9; z++){
        resetCursor();
        
        let xPos = (Math.random() - .5) * 80;
        let zPos = (Math.random() - .5) * 80;
        
        setXPos(xPos);
        setZPos(zPos);
        
        tree1();
    }
}

for(let x = 0; x < 9; x++){
    for(let z = 0; z < 9; z++){
        resetCursor();
        
        let xPos = (Math.random() - .5) * 80;
        let zPos = (Math.random() - .5) * 80;
        
        setXPos(xPos);
        setZPos(zPos);
        
        tree2();
    }
}

for(let x = 0; x < 4; x++){
    for(let z = 0; z < 4; z++){
        resetCursor();
        
        let xPos = (Math.random() - .5) * 80;
        let zPos = (Math.random() - .5) * 80;
        
        setXPos(xPos);
        setZPos(zPos);
        
        sideToSide(cloudClump());
    }
}


