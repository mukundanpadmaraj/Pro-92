player_1_name=localStorage.getItem("player_1")
player_2_name=localStorage.getItem("player_2")

player_1_score=0;
player_2_score=0;

document.getElementById("player_1_name").innerHTML=player_1_name+" : ";
document.getElementById("player_2_name").innerHTML=player_2_name+" : ";

document.getElementById("player_1_score").innerHTML=player_1_score;
document.getElementById("player_2_score").innerHTML=player_2_score;

document.getElementById("player_question").innerHTML="Question turn - "+player_1_name;
document.getElementById("player_answer").innerHTML="Answer turn - "+player_2_name;

question_turn="player_1"
answer_turn="player_2"

function send(){
    number1=document.getElementById("num_1").value;
    number2=document.getElementById("num_2").value;
    actual_answer=parseInt(number1)*parseInt(number2)

    question_number="<h4>"+number1+"X"+number2+"</h4>"
    input_box="<br> Answer : <input type='text' id='input_checkbox'>"
    check_button="<br><br><button class='btn btn-info' onclick='check()'>Check</button>"
    row=question_number+input_box+check_button

    document.getElementById("output").innerHTML=row

    document.getElementById("num_1").value=""
    document.getElementById("num_2").value=""
}

function check(){
    get_answer=document.getElementById("input_checkbox").value;
    if(get_answer==actual_answer){
        if(answer_turn=="player_1"){
            update_player1_score=player_1_score+1;
            document.getElementById("player_1_score").innerHTML=update_player1_score
        }
        else{
            update_player2_score=player_2_score+1;
            document.getElementById("player_2_score").innerHTML=update_player2_score
            answer_turn="player_1"
        }
    }
    if(question_turn=="player_1"){
        question_turn=="player_2"
        document.getElementById("player_question").innerHTML="Question turn - "+player_2_name
    }
    else{
        question_turn=="player_1"
        document.getElementById("player_question").innerHTML="Question turn - "+player_1_name
    }

    if(answer_turn=="player_1"){
        answer_turn=="player_2"
        document.getElementById("player_answer").innerHTML="Answer turn - "+player_2_name
    }
    else{
        answer_turn=="player_1"
        document.getElementById("player_answer").innerHTML="Answer turn - "+player_1_name
    }
}