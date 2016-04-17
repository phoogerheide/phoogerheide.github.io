function bouncyButton(){
    var ele = document.getElementById("btn4");
    dynamics.animate(ele, {
        translateY: -8,
        scale: 1,
        opacity: 0.5
    }, {
        type: dynamics.forceWithGravity,
        bounciness: 400,
        elasticity: 500,
        duration: 600
    });   
}