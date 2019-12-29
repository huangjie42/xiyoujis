function playlist(a){
    var MV=document.getElementById("myVideo");
    MV.src=a.id+'.mp4';
    MV.play();
}