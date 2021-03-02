var para_value = [];

function showParagraph()
 {
     for(var i = 1 ; i <=6 ; i++)
     {
         para_value.push(document.getElementById("input_" + i).value);
         console.log("student values are inserting inside the para value");
         
     }
     document.getElementById("make_para").innerHTML = para_value.join(".")
 }