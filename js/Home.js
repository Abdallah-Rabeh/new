"use strict"
let myform = document.querySelector(".form");
var search = document.querySelector(".search-input");
var sort = document.querySelector(".list-input");
var x = document.querySelectorAll(".name");
var y = document.querySelectorAll(".phone");
let tables = document.querySelector(".table tbody");
let inputs = document.querySelectorAll("input");
let bor = document.querySelector("#box");
let i1 = document.querySelector("i1");
let i2 = document.querySelector("i2");
let i8 = document.querySelectorAll("#i7");
let i3 = document.querySelector("i3")
let cant= document.querySelector(".contact-counter");
let can= document.querySelector("#add");
let prat= document.querySelector(".prat-1");
let prat_2= document.querySelector(".prat-2");
let mytr = document.querySelector("tr");
let mytd = document.querySelector(".body"); 
let mytree = document.querySelector(".terr"); 
let adde = [];
let tree=document.querySelector(".fa-eye-slash")
if (localStorage.getItem("adde") == null) {
    localStorage.setItem('adde', JSON.stringify(adde));

} else {
    adde = JSON.parse(localStorage.getItem("adde"));
    getphone(adde);
}
myform.addEventListener('submit', function (e) {
    e.preventDefault();
    let insret = {
        'Name': inputs[2].value,
        'Phone': inputs[3].value,
        'Addrss': inputs[4].value,

    }
    adde.push(insret);
    localStorage.setItem('adde', JSON.stringify(adde));
    tables.innerHTML += `
        <tr>
        <td>${insret.Name}</td>
        <td>${insret.Phone}</td>
        <td>${insret.Addrss}</td>
        <td>
        <i1 class="fas fa-eye-slash mr-2 eyeSlash show" Deletestudents(this) style="font-size:25px"></i1>
        <i8 class="fas fa-edit i2 mr-3" id="i7"onclick="EditPhone(this)"></i8>
        <i class="fas fa-phone-volume i3"></i>
        </td>
        <td>
        </td>
        </tr>
        `;
    for (let input of inputs) {
        input.value = '';

    }


});
function getphone(adde) {
    tables.innerHTML = "";
    localStorage.setItem('adde', JSON.stringify(adde));
    for (let student of adde) {
        tables.innerHTML += `
    <tr> 
    <td>${student.Name}</td>
    <td>${student.Phone}</td>
    <td>${student.Addrss}</td>
    <td>
    <i1 class="fas fa-eye-slash mr-2 eyeSlash show" onclick="Deletestudents(this)"style="font-size:25px"></i1>
    <i8 class="fas fa-edit i2 mr-3" id="i7"onclick="EditPhone(this)"></i8>
    <i class="fas fa-phone-volume i3"></i></td>
    <td>
    </td>
    </tr>
    `;
    };

}
i1.onclick = function () {
    i1.classList.add('hide')
    tables.classList.toggle('hide')
   // localStorage.setItem('adde', JSON.stringify(i1));
}; 
/*
function Deletestudent(){
   tables.classList.remove('body');
     
   let myStudent= that.parentElement.parentElement;
    let Studentindex=adde.findIndex( (adde) =>{return adde.i1==myStudent.children[0].textContent});
      adde.splice(Studentindex,1);
     bor.classList.add('bot');
    localStorage.setItem('adde',JSON.stringify(adde));
    
};
*/
function Deletestudents(that){
    let myStudent= that.parentElement.parentElement;
    let Studentindex=adde.findIndex( (adde) =>{return adde.i1==myStudent.children[0].textContent});
    adde.splice(Studentindex, 1);
    myStudent.remove();  
    bor.classList.add('bot');
   localStorage.setItem('adde',JSON.stringify(adde));
    

};
can.onclick=function(){
    for(let i =0 ;i<mytd.children.length;i++){
        cant.textContent= mytd.children.length;
        localStorage.setItem('adde',JSON.stringify(adde));    

    }
  
   
};
i3.onclick=function(){
    mytd.remove();
    localStorage.setItem('adde',JSON.stringify(adde));    
}
mytree.onclick=function() {
    adde.sort()
   
  }
  $('#Name').blur(function () {
    var regex = /^[a-zA-Z]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/;
    if (regex.test($('#Name').val())) {
        $('#nameAlert').css('display', 'none');
    }
    else {
        $('#nameAlert').css('display', 'block');
    }

})
$('#Phone').blur(function () {
    var regex = /^(002)?01[0-2|5]{1}[0-9]{8}$/;
    if (regex.test($('#Phone').val())) {
        $('#phoneAlert').css('display', 'none');
    }
    else {
        $('#phoneAlert').css('display', 'block');
    }

})
$(document).ready(function(){
    $("p").hide();
  });
  function searchPhone(e) {

    tr = document.querySelectorAll(".tr");
    if (isNaN($(search).val())) {
        var term = e.target.value.toLowerCase();

        for (var i = 0; i < x.length; i++) {

            if (x[i].innerHTML.toLowerCase().indexOf(term) != -1) {

                tr[i].style.display = "table-row"
            }
            else {
                tr[i].style.display = "none"
            }

        }
    }
    else{
        var term = e.target.value.toLowerCase();

        for (var i = 0; i < x.length; i++) {

            if ($('.phone').eq(i).text().indexOf(term) != -1) {

                tr[i].style.display = "table-row"
            }
            else {
                tr[i].style.display = "none"
            }

    }



}

}

    function EditPhone(that){
        let myNameElemnt =that.parentElement.parentElement;
        let myName ={
          'Name':myNameElemnt.children[0].textContent,
           'Phone':myNameElemnt.children[1].textContent,
           'Addrss':myNameElemnt.children[2].textContent,
        };
        inputs[2].value=myName['Name'];
        inputs[3].value=myName['Phone'];
        inputs[4].value=myName['Addrss'];
        let i=0
        for(let key in myName){
            inputs[i++].value=myName[key];
        } 
        can.textContent="Edit";
        can.onclick=function(){
            can.textContent="Add";
        }
        
    }