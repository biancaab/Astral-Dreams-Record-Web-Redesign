function leftTrigger(){
    const checkbox_dom = document.getElementById("openSidebarMenu");
    if(checkbox_dom.checked == true){
        checkbox_dom.checked = false;
    }
    else{
        checkbox_dom.checked = true;
    }
}

function rightTrigger(){
    const checkbox_dom = document.getElementById("right_openSidebarMenu");
    if(checkbox_dom.checked == true){
        checkbox_dom.checked = false;
    }
    else{
        checkbox_dom.checked = true;
    }
}