nform=document.querySelector('#form');
nform.addEventListener('submit',(e)=>{
    e.preventDefault();
    table=document.querySelector('.table');
    fn=document.querySelector('#first-name').value;
    ln=document.querySelector('#last-name').value;
    addr=document.querySelector('#address').value;
    pc=document.querySelector('#pincode').value;
    st=document.querySelector('#st').value;
    cntry=document.querySelector('#cntry').value;
    gen=gender();
    food = fav_food();
    if(food[1]<2)
    {
        alert('Select atleast 2 food options');
    }
    else {
        table.setAttribute("style", "display:block");
        table.innerHTML += `<tr><td>${fn}</td><td>${ln}</td><td>${gen}</td><td>${food[0]}</td><td>${addr}</td><td>${pc}</td><td>${st}</td><td>${cntry}</td></tr>`;
        nform.reset();
    }
})
function fav_food(){
    var chkbx = document.getElementsByName('food');
    let food="",count=0;
    for(let i=0;i<chkbx.length;i++){
        if(chkbx[i].checked){
            count +=1;
            food += chkbx[i].value + ", ";
        }
    }
    if(count==0){
        alert('Select atleast 2 food options')
    }
    else{
        return [food.slice(0,-2),count];
    }
}
function gender() {
    var gen = document.getElementsByName('gender');
    let rd_btn="";
    for(i = 0; i < gen.length; i++) {
        if(gen[i].checked){
            rd_btn=gen[i].value;
        }
    }
    return rd_btn;
}