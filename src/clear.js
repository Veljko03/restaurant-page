
function clear(){
    const content = document.querySelector("#content");

    while(content.firstChild){
        content.removeChild(content.lastChild);
    }
}


export default clear;