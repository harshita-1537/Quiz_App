var questions = [
    {
        question:"A complete graph can have",
            a:"nn-2 spanning trees",
            b:"nn-3 spanning trees",
            c:"nn-4 spanning trees",
            d:"nn-5 spanning trees",
        correct:"a",
        correct1:"nn-2 spanning trees"
    },
    {
          question:"What is full form of CSS",
            a:"country side show",
            b:"country show side",
            c:"Cascading Style side",
            d:"None of the above",
        correct:"d",
        correct1:"None of the above"
    },
    {
         question:"How to include javascript in HTML document",
            a:"head",
            b:"css",
            c:"script",
            d:"None of the above",
        correct:"c",
        correct1:"script"
    },
    {
         question:"How to declare variable in javascript",
            a:"var",
            b:"const",
            c:"let",
            d:"All of the above",
        correct:"d",
        correct1:"All of the above"
    },
    {
     question:"What => means in javascript",
            a:"function",
            b:"calling function",
            c:"Arrow function",
            d:"None of the above",
          correct:"c",
          correct1:"Arrow function"
    },
    {
         question:"Which of the following is not a javascript framework",
            a:"Django",
            b:"React",
            c:"Nodejs",
            d:"All of the above",
        correct:"a",
        correct1:"Django"
    },
    {
         question:"How do you define objects in js",
            a:"[]",
            b:"{}",
            c:"()",
            d:"<>",
        correct:"b",
        correct1:"{}"
    },
    {
         question:"Which of these is not a valid js version",
            a:"ES5",
            b:"ES6",
            c:"EX19",
            d:"ES7",
        correct:"c",
        correct1:"EX19"
    },
    {
         question:"What is the input of '2'+2",
            a:"22",
            b:"4",
            c:"222",
            d:"None of the above",
        correct:"a",
        correct1:"22"
    },
    {
         question:"what is the output of '2'-1",
            a:"1",
            b:"21",
            c:"3",
            d:"None of the above",
        correct:"c",
        correct1:"3"
    },
    {
         question:"How to check if a value is NaN in javascript",
            a:"typeof(val)",
            b:"isNaN(val)",
            c:"val",
            d:"None of the above",
        correct:"b",
        correct1:"isNaN(val)"
    }
]; 
var starting=0;
var ending=questions.length-1;
var score=0;
var g,a;
function abc()
{
document.getElementById("start").style.display= "none";
builtquiz();
document.getElementById("i4").style.display= "block";
}
function builtquiz()
{
    var q=questions[starting];
document.getElementById("question1").innerHTML=q.question;
document.getElementById("answer1").innerHTML="<input type='radio' name='answers' value='a'>"+" "+q.a;
document.getElementById("answer2").innerHTML="<input type='radio' name='answers' value='b'>"+" "+q.b;
document.getElementById("answer3").innerHTML="<input type='radio' name='answers' value='c'>"+" "+q.c;
document.getElementById("answer4").innerHTML="<input type='radio' name='answers' value='d'>"+" "+q.d;
}
var val;
function abc1()
{
var x=document.getElementsByName('answers');
for(var k=0;k<x.length;k++)
{
    if(x[k].checked)
    {
       val=x[k].value;
       break; 
    } 
}
if(val==questions[starting].correct)
{
    correct();
}
else{
    incorrect();
}
document.getElementById("correct1").style.display="block";
document.getElementById("submit").style.display="none";
document.getElementById("next").style.display="block";
}
function correct()
{
    document.getElementById("correct1").innerHTML='<button type="button" id="correct" disabled>'+'correct'+'</button>';
    score++;
}
function incorrect()
{
    document.getElementById("correct1").innerHTML='<button type="button" id="incorrect" disabled>'+'Incorrect'+'</button>';
}
function nextquestion()
{
    starting++;
    if(starting<ending)
    {
        builtquiz();
        document.getElementById("correct1").style.display="none";
        document.getElementById("submit").style.display="block";
        document.getElementById("next").style.display="none";
    }
    else{
        document.getElementById("main").style.display="none";
        document.getElementById("ans").style.display="block";
        document.getElementById("p").innerHTML="Score: "+score;
        g=document.getElementById("u");
        for(let i=0;i<questions.length;i++)
        {
            var li=document.createElement('li');
            var text=document.createTextNode(questions[i].question+'-');
            li.appendChild(text);
            var span=document.createElement('span');
            
            span.classList.add('badge');
            span.classList.add('badge-success');
            span.innerHTML=questions[i].correct1;        
            
            li.appendChild(span);
            g.appendChild(li);
        }
    }
}
function restart()
{
    location.reload();
}






