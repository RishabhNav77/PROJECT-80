var sentence_array=[];
function getpara1(){
    var display_array=[];
     for (var i=1; i<=6; i++){
         var sentence=document.getElementById("input box "+i).value;
         console.log(sentence);
         sentence_array.push(sentence);
     }
     console.log(ssentece_array);
     var length=sentence_array.length;
     console.log(length);
     for (var k=0; k<length; k++){
         display_array.push("<h4>PARAGRAPH1  - "+ sentence_array[k]+"</h4>");
         console.log (display_array);

     }
     console.log(display_array);
     document.getElementById("display_sentence_with_fullstop").innerHTML=display_array;

     var remove=display_array.join("");
     console.log(remove);
     document.getElementById("display_sentence_without_fullstop").innerHTML=remove;
     document.getElementById("sentence_button").style.display = "none";
     document.getElementById("sort_button").style.display = "inline-block";
}
function sorting(){
sentence_array.sort();
console.log(sentence_array);
var sorted_array=[];
var length=sentence_array.length;
console.log(length);
for (var k=0; k<length; k++){
    sorted_array.push("<h4>NAME - "+ sentence_array[k]+"</h4>");
    console.log (sorted_array);

}
var remove=sorted_array.join("");
console.log(remove);
document.getElementById("display_sentence_without_fullstop").innerHTML=remove;

}

function newupdate(){
    document.getElementById("display_sentence_without_fullstop").innerHTML="<h1>"+sentence_array+"</h1>";  
}