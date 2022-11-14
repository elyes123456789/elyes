function username(){
    const name = document.getElementById("nominput").value
    const p = document.getElementById("nom")
    p.innerHTML = "Utilisateur : "+ name
}

function btnDisabling(id){
    const btn = document.getElementById(id)
    btn.disabled = true
}

function btnenabling(btnid,inpid){
    const inp = document.getElementById(inpid).value
    const btn = document.getElementById(btnid)
    if (inp != ""){
        btn.disabled = false
    }
    else{
        btn.disabled=true
    }
}

function note(){
    const note = document.getElementById("noteinput").value
    const p = document.getElementById("message")
    if (note>=20){
        p.innerHTML="Trés Trés bien"
    } 
    else if (note>=17){
        p.innerHTML="Trés bien"
    }  
    else if (note>=15){
        p.innerHTML="bien"
    }
    else if (note>=12){
        p.innerHTML="assez bien"
    }
    else if (note>=10){
        p.innerHTML="passable"
    }
    else{
        p.innerHTML="échoué"
    }
}

function eraser(divid){
    let element = document.getElementById(divid)
    element.remove()
}

function shownhide(divid){
    const div=document.getElementById(divid)
    if (div.style.display!=="none"){
        div.style.display="none"
    }
    else{
        div.style.display="block"
    }
}

var x=-1
function changeimg(imgid,n){
    const image = document.getElementById(imgid)
    if (n===1){
        x++
    }
    else if (n===0){
        x--
    }
    switch(x){
        case 0:
            image.removeAttribute("src")
            image.setAttribute("src","https://i.ibb.co/wQWjpDS/image.png")
            
            break
        case 1:
            image.removeAttribute("src")
            image.setAttribute("src","https://i.ibb.co/VBNKYVF/1.png")
            
            break
        case 2:
            image.removeAttribute("src")
            image.setAttribute("src","https://i.ibb.co/xf0nyVv/2.png")
             
            break
        case 3:
            image.removeAttribute("src")
            image.setAttribute("src","https://i.ibb.co/64VYWcy/3.png")
            
            break    
        case 4:
            image.removeAttribute("src")
            image.setAttribute("src","https://i.ibb.co/2hQZq28/4.png")
            
            break
        case 5:
            image.removeAttribute("src")
            image.setAttribute("src","https://i.ibb.co/9snSVbV/4-5.png")
            
            break
        case 6:
            image.removeAttribute("src")
            image.setAttribute("src","https://i.ibb.co/fNC09Dd/5.png")
            
            break
        case 7:
            image.removeAttribute("src")
            image.setAttribute("src","https://i.ibb.co/P5KGGht/6.png")
            
        case 8:
            image.removeAttribute("src")
            image.setAttribute("src","https://i.ibb.co/M7vvCyC/7.png")
            
            break
        case 9:
            image.removeAttribute("src")
            image.setAttribute("src","https://i.ibb.co/M1SsxNz/8.png")
            
            break
        case 10:
            image.removeAttribute("src")
            image.setAttribute("src","https://i.ibb.co/g61vFVL/9.png")
            
            break
        case 11:
            image.removeAttribute("src")
            image.setAttribute("src","https://i.ibb.co/znSbRJz/10.png")
            
            break
        case 12:
            image.removeAttribute("src")
            image.setAttribute("src","https://i.ibb.co/2ZNnVYv/11.png")
            
            break
        default:
            if (n===1){
                x--
            }
            else if (n===0){
                x++
            }   
    }
    return x
}

function numbering(elementid) {
    const h=document.getElementById(elementid)
    h.innerHTML=x
}