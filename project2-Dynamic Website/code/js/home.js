//For Background color
function myFunction() {
  document.body.style.backgroundImage = "none";
  let x = document.getElementById("color").value;
  document.body.style.backgroundColor = x;
}

// For Font Family
var changeFont = function (font) {
  document.getElementById("fontstyle").style.fontFamily = font.value;
};

// For Font Family
var changeFontsize = function (font) {
  document.getElementById("newfontsize").style.fontSize = font.value;
  // document.body.style.fontSize = font.value;
};

function allLetter() {
  var letters = /[A-Za-z]+$/;
  if ($("#uname").val().match(letters) && $("#uname").val().length > 3) {
    //alert('Your name have accepted : you can try another');
    return true;
  } else {
    $("#erorr")
      .html("Username should be at least 3 digits !")
      .css("color", "red");
    return false;
  }
}

function Email() {
  //var email=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  var email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if ($("#email").val().match(email)) {
    //alert('Your name have accepted : you can try another');
    return true;
  } else {
    $("#erorr2").html("Please enter a valid email !").css("color", "red");
    return false;
  }
}

function Password() {
  var paswd = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,20}$/;
  if ($("#password").val().match(paswd)) {
    return true;
  } else {
    $("#erorr3")
      .html(
        "password should be between 6 to 20 characters & contains at least one numeric digit and a special character !"
      )
      .css("color", "red");
    return false;
  }
}

function Number() {
  // var num =  /^([9627]{4})([7-9]{1})([0-9]{7})/
  var num = /^\d{14}$/;

  if ($("#number").val().match(num)) {
    return true;
  } else {
    $("#erorr4")
      .html("the value should have 12 numeric digit starts with 9627 ! ")
      .css("color", "red");
    return false;
  }
}



// checkbox
function chBox() {
    var checkBox = document.getElementById("checkbox");
    if (checkBox.checked == true){
        $('#lbutton').removeAttr("disabled");
        $('#sbutton').removeAttr("disabled");
    }
    }



 
function lStorage() {
  let nKey = document.getElementById("uname").value;
  let eKey = document.getElementById("email").value;
  let pKey = document.getElementById("password").value;
  let dKey = document.getElementById("date").value;
  let numKey = document.getElementById("number").value;

  localStorage.setItem("nameKey", nKey);
  localStorage.setItem("emailKey", eKey);
  localStorage.setItem("passKey", pKey);
  localStorage.setItem("dopKey", dKey);
  localStorage.setItem("numberKey", numKey);
}


function sStorage() {
  let nKey2 = document.getElementById("uname").value;
  let eKey2 = document.getElementById("email").value;
  let pKey2 = document.getElementById("password").value;
  let dKey2 = document.getElementById("date").value;
  let numKey2 = document.getElementById("number").value;

  sessionStorage.setItem("nameKey2", nKey2);
  sessionStorage.setItem("emailKey2", eKey2);
  sessionStorage.setItem("passKey2", pKey2);
  sessionStorage.setItem("dopKey2", dKey2);
  sessionStorage.setItem("numberKey2", numKey2);
}

function cStorage() {
  document.getElementById("uname").value = "";
  //   $("uname").attribute("placehoder" , Username);
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
  document.getElementById("date").value = "";
  document.getElementById("number").value = "";

  
  sessionStorage.clear();
  localStorage.clear();
}





///////// page two /////////