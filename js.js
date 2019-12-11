function lengthh(){
    var l1 = document.getElementById("w1");
    var i=15;
    var l11=window.setInterval(function(){
        if(i>30)
        window.clearInterval(l11);
        l1.style.width=i+"%";
        i++;
    },50)
    
}

function lengthh1(){
    var l1 = document.getElementById("w2");
    var i=15;
    var l11=window.setInterval(function(){
        if(i>30)
        window.clearInterval(l11);
        l1.style.width=i+"%";
        i++;
    },50)
    
}

function lengthh2(){
    var l1 = document.getElementById("w3");
    var i=15;
    var l11=window.setInterval(function(){
        if(i>60)
        window.clearInterval(l11);
        l1.style.width=i+"%";
        i++;
    },50)
    
}

function lengthh3(){
    var l1 = document.getElementById("w4");
    var i=15;
    var l11=window.setInterval(function(){
        if(i>40)
        window.clearInterval(l11);
        l1.style.width=i+"%";
        i++;
    },50)
    
}
window.onload=function(){
    lengthh();
    lengthh1();
    lengthh2();
    lengthh3();
}