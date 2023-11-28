let downloaded = false;
function download(){
    if (downloaded){
        window.location = "extremely_rare_letter_scanner";
        downloaded = false;
    }
    else{
        window.location = "download/extremely_rare_letter_scanner";
        downloaded = true;
    }
}
function hashes(){
    var ch = document.getElementById("checksums");
    if (ch.style.display == "none") {
        ch.style.display="inherit";
        for (opacity = 0; opacity < 1; opacity = opacity + 0.01)
        {
            setTimeout(function(){ch.style.opacity = opacity;},100)
        }

    }
    else {
        ch.style.opacity="0";
        ch.style.display="none";
    }

}
window.onkeydown = function( event ) {
    if ( event.keyCode == 27 ) {
        var ch = document.getElementById("checksums");
        ch.style.opacity="0";
        ch.style.display="none";
    }
};

