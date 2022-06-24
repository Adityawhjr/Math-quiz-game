function adduser(){
    player1=document.getElementById("player1_name_input").value;
    localStorage.setItem("player1name",player1);
    player2=document.getElementById("player2_name_input").value;
    localStorage.setItem("player2name",player2);
    window.location="quizpage.html";
}