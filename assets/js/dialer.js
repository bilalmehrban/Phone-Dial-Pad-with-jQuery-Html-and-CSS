var number = '';
var ph_no = '+44';
function sendDigit(num){
  if(number.length < 10)
  {
    number = number + num;
    document.getElementById("dialer_input").value = number;
  }
}
function toggleCall(){
  ph_no = ph_no + number;
  console.log("total number = ", ph_no);
  ph_no = '+44';
}
function removeDigit(){
  number = $("#dialer_input").val().substring(0, $("#dialer_input").val().length-1)
    document.getElementById("dialer_input").value = number;
    console.log("ok",number);
}

document.addEventListener("keyup", KeyCheck); 
  function KeyCheck(event)
  {
      var KeyID = event.keyCode;
      switch(KeyID)
          {
              case 8:
                number = document.getElementById("dialer_input").value;
                console.log("backspace",number);
                break;
                default:

                break;
          }
  }
  function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
    { 
      return false;
    }
    else{
      return true;
    }
}