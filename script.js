var Mode = 0
function LC() {
    if(Mode==0) {
        window.location.replace("www.evilmountain.com/Hub");
    }
    else if (Mode==1) {
        window.location.replace("www.evilmountain.com/woe");
    }
}
function RC() {
    if(Mode==0) {
        document.getElementById("Face").src="images/Evil.png"
        Mode = 1
    }
    else if (Mode==1) {
        document.getElementById("Face").src="images/Link.png" 
        Mode = 0
    }
}