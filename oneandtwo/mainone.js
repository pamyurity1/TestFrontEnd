window.onload = function() {

    var text = document.getElementById("texts").innerHTML = "GDL Group was founded in 2004. We are a professional IT Solution provider across various geographies. Our business has grown significantly since our inception. Our risk-sharing approach and our commitment to our client have led us to significantly reduce their total cost of ownership (TCO) as well as transactional Sustaining vital connections with employees, suppliers and customers is the lifeblood of your business and it depends on an IT infrastructure that encourages collaboration and assures optimum performance at every link in your value chain, around-the-clock. GDL Group is about optimizing investments, transforming capabilities and achieving greater business value from IT costs.";
var textsplit = text.split("");

var countA =0;
var countE =0;
var countI =0;
var countO =0;
var countU =0;

for(var j =0;j<textsplit.length;j++){
    if(textsplit[j]=='A'||textsplit[j]=='a'){
        countA++
    }else if(textsplit[j]=='E'||textsplit[j]=='e'){
        countE++
    }else if(textsplit[j]=='I'||textsplit[j]=='i'){
        countI++

    }else if(textsplit[j]=='O'||textsplit[j]=='o'){
        countO++

    }else if(textsplit[j]=='U'||textsplit[j]=='u'){
        countU++

    }
}

document.getElementById("countA").innerHTML = countA;
document.getElementById("countE").innerHTML = countE;
document.getElementById("countI").innerHTML = countI;
document.getElementById("countO").innerHTML = countO;
document.getElementById("countU").innerHTML = countU;
}


function Submit() {

    var fristname = document.getElementById("fristname").value;
    var lestname = document.getElementById("lestname").value;
    var nickname = document.getElementById("nickname").value;
    var age = document.getElementById("age").value;
    document.getElementById("nameOut").innerHTML = fristname+" "+lestname;
    document.getElementById("nicknameOut").innerHTML = nickname;
    document.getElementById("ageOut").innerHTML = age;

    var ArrCredits = ["creditA","creditB","creditC","creditD"];
    var ArrGrades = ["gradeA","gradeB","gradeC","gradeD"];
    var CreditandGrade = 0;
    var SumCredit = 0;
    var GPA = 0;

    for(var i =0;i<ArrCredits.length;i++){
        var Credit = document.getElementById(ArrCredits[i]).value;
        var Grade = document.getElementById(ArrGrades[i]).value;
        CreditandGrade += (Credit*Grade);
        SumCredit += parseFloat(Credit);
        GPA = CreditandGrade/SumCredit;
    }

    document.getElementById("GPAOut").innerHTML = Math.floor(GPA* 100) / 100;
  }

function Reset(){
    document.getElementById("fristname").value = '';
    document.getElementById("lestname").value= '';
    document.getElementById("nickname").value= '';
    document.getElementById("age").value= '';
    document.getElementById("nameOut").innerHTML = '';
    document.getElementById("nicknameOut").innerHTML = '';
    document.getElementById("ageOut").innerHTML = '';
    document.getElementById("GPAOut").innerHTML = '';
    var ArrCredits = ["creditA","creditB","creditC","creditD"];
    var ArrGrades = ["gradeA","gradeB","gradeC","gradeD"];
    for(var i =0;i<ArrCredits.length;i++){
        document.getElementById(ArrCredits[i]).value='';
        document.getElementById(ArrGrades[i]).value='';
    }

}
