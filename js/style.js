let changer=document.getElementById('changer');
setInterval(()=>{

if(changer.textContent==='developer')
{
changer.textContent='designer';
}
else if(changer.textContent==='designer'){
    changer.textContent='developer';
}
}
,3000)


