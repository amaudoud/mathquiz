var player1_name = localStorage.getItem ("player1");
var player2_name = localStorage.getItem ("player2");
var player1_score = 0;
var player2_score = 0;
document.getElementById("player1_name").innerHTML= player1_name + " :";
document.getElementById("player1_score").innerHTML= player1_score;
document.getElementById("player2_name").innerHTML= player2_name + " :";
document.getElementById("player2_score").innerHTML= player2_score;
document.getElementById("question").innerHTML = "Question turn : " + player1_name;
document.getElementById("answer").innerHTML = "Answer turn : " + player2_name;
function send () {
    var get_word= document.getElementById("word").value ;
    word = get_word.toLowerCase();
    console.log (word);
    document.getElementById("math").value= "";
    question_word = "<h4 id = 'math_display'> question mark </h4>"; 
    inputbox = "<br> answer : <input id = 'input_check_box'>";
    check_button = "<br> <button> CHECK</button>";
    row = question_word + inputbox + check_button;
    document.getElementById("output"). innerHTML= row; 
}