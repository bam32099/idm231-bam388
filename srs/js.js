


function calculate(f){
  var zodiac={
  'Capricorn1':{'m':0,'d':20},
  'Aquarius':{'m':1,'d':19},
  'Pisces':{'m':2,'d':20},
  'Aries':{'m':3,'d':20},
  'Taurus':{'m':4,'d':21},
  'Gemini':{'m':5,'d':21},
  'Cancer':{'m':6,'d':22},
  'Leo':{'m':7,'d':22},
  'Virgo':{'m':8,'d':23},
  'Libra':{'m':9,'d':23},
  'Scorpio':{'m':10,'d':22},
  'Sagittarius':{'m':11,'d':21},
  'Capricorn2':{'m':11,'d':31}
  }
  var born=f['birthdate'].value;

  born=born.match(/\//)?born.split('/'):born.split('.');

  var yyyy=Number(born[2]);

  var mm=Number(born[1])-1;

  var dd=Number(born[0]);

  var bornDate=new Date(yyyy,mm,dd), zodiacEnd, astrologicalSign;

  for(z in zodiac){
  zodiacEnd=new Date(yyyy,zodiac[z]['m'],zodiac[z]['d']);
  if(bornDate<=zodiacEnd){astrologicalSign=z;break}
  }

  astrologicalSign.match(/\d/)?astrologicalSign=astrologicalSign.replace(/\d/g,''):null;
  var spanSign=document.getElementById('sign');
  spanSign.innerHTML=astrologicalSign;
  return false
  }

if ( document.getElementById('sign')= 'Aries' ) {

  document.getElementsByClass("over1").setAttribute(opacity, 1);
}


// IMPORTANT
// function myFunction() {

// var x = document.createElement("IMG");
// x.setAttribute("src", "../resources/aries.png");
// x.setAttribute("width", "300");
// x.setAttribute("height", "300");
// x.setAttribute("alt", "text");
// document.body.appendChild(x);
  
// }



function symbol1(){
var audio = new Audio("../sounds/sound1.mp3");
audio.play();
document.getElementById("who").innerHTML = "Aries - Cranidos";
document.getElementById("change").innerHTML = "Cranidos embodies the spirits of Aries.  Aries are seen as eager, quick and competitive, not unlike Cranidos!";
}

function symbol2(){
  var audio = new Audio("../sounds/sound2.mp3");
  audio.play();
  document.getElementById("who").innerHTML = "Taurus - Tauros";
document.getElementById("change").innerHTML = "Tauros and Taurus are too similar to not be put together!  Taurus individuals are as strong and dependable as a Tauros.";
  }

  function symbol3(){
    var audio = new Audio("../sounds/sound3.mp3");
    audio.play();
    document.getElementById("who").innerHTML = "Gemini - Doduo";
document.getElementById("change").innerHTML = "The twin-headed Doduo and Gemini are a perfect pair!  Gemini are curious, expressive, and versatile.  Guess twice is nice!";
    }

    function symbol4(){
      var audio = new Audio("../sounds/sound4.mp3");
      audio.play();
      document.getElementById("who").innerHTML = "Cancer - Crabrawler";
document.getElementById("change").innerHTML = "Those whose sign is Cancer tend to be emotional, protective and intuitive.  Just like Crabrawler, these people may seem standoffish at first, but they will keep your friendship for life!";
      }

      function symbol5(){
        var audio = new Audio("../sounds/sound5.mp3");
        audio.play();
        document.getElementById("who").innerHTML = "Leo - Pyroar";
document.getElementById("change").innerHTML = "Pyroar and Leo are both dramatic, outgoing and self-assured.  Their fiery spirits burn with justice with the need to become a great leader.";
        }

        function symbol6(){
          var audio = new Audio("../sounds/sound6.mp3");
          audio.play();
          document.getElementById("who").innerHTML = "Virgo - Jigglypuff";
document.getElementById("change").innerHTML = "Virgo are kind, smart, and are the best at planning.  Just like Jigglypuff, they may seem shy, but are more than willing to talk and sing.";
          }

          function symbol7(){
            var audio = new Audio("../sounds/sound7.mp3");
            audio.play();
            document.getElementById("who").innerHTML = "Libra - Lucario";
document.getElementById("change").innerHTML = "Both Libra and Lucario value harmony and compromise.  These people will be willing to put others before themselves in friend circles.";
            }

            function symbol8(){
              var audio = new Audio("../sounds/sound8.mp3");
              audio.play();
              document.getElementById("who").innerHTML = "Scorpio - Drapion";
document.getElementById("change").innerHTML = "Scorpio are unafraid to go off on their own with their independence, just like Drapion!  They love debates, controversy and being authentic all the time.";
              }

              function symbol9(){
                var audio = new Audio("../sounds/sound9.mp3");
                audio.play();
                document.getElementById("who").innerHTML = "Sagittarius - Decidueye";
document.getElementById("change").innerHTML = "Being adventurous, creative and strong willed are the foundations for Sagittaruis and Decidueye alike!  They are considered natural leaders and explorers.";
                }

                function symbol10(){
                  var audio = new Audio("../sounds/sound10.mp3");
                  audio.play();
                  document.getElementById("who").innerHTML = "Capricorn - Skiddo";
document.getElementById("change").innerHTML = "Capricorn are hardworking and will do what they set their minds to, no matter what!  Skiddo is just as determined to grow stronger to evolve!";
                  }

                  function symbol11(){
                    var audio = new Audio("../sounds/sound11.mp3");
                    audio.play();
                    document.getElementById("who").innerHTML = "Aquarius - Lapras";
document.getElementById("change").innerHTML = "Being lovers of art and compassion, Aquarius and Lapras are reflections of one another!  Being natural problem solvers and artistic, Lapras uses its shell as beauty and transport!";
                    }
                    
                    function symbol12(){
                      var audio = new Audio("../sounds/sound12.mp3");
                      audio.play();
                      document.getElementById("who").innerHTML = "Pisces - Goldeen";
document.getElementById("change").innerHTML = "Pisces are seen as gentle, affectionate and musical in nature.  Just like Pisces, Goldeen are known as water dancers, elegant yet independent.";
                      }


// Variables

// function playSound(name, sound, image, desc) {
//     this.name = name;
//     this.sound = sound;
//     this.image = image;
//     this.desc = desc;
//     this.playSound = function() 
// }

// const selectedSign = 'taurus';
// console.log(eval(selectedSign).image);

// const taurus = new AstroSign('taurus', 'running_bull', 'image', 'desc');

// console.log(taurus.sound); running_bull
// taurus.playSound();


// if ((whichMonth == 12 && whichDayOfMonth >= 22) || (whichMonth == 1 && whichDayOfMonth <= 19)) {
//     AstroSign = "Cap";
//   } else if ((whichMonth == 11 && whichDayOfMonth >= 22) || (whichMonth == 12 && whichDayOfMonth <= 21)) {
//     AstroSign = "Sag";
//   } else if ((whichMonth == 10 && whichDayOfMonth >= 24) || (whichMonth == 11 && whichDayOfMonth <= 21)) {
//     AstroSign = "Sco";
//   } else if ((whichMonth == 9 && whichDayOfMonth >= 23) || (whichMonth == 10 && whichDayOfMonth <= 23)) {
//     AstroSign = "Lib";
//   } else if ((whichMonth == 8 && whichDayOfMonth >= 23) || (whichMonth == 9 && whichDayOfMonth <= 22)) {
//     AstroSign = "Vir";
//   } else if ((whichMonth == 7 && whichDayOfMonth >= 23) || (whichMonth == 8 && whichDayOfMonth <= 22)) {
//     AstroSign = "Leo";
//   } else if ((whichMonth == 6 && whichDayOfMonth >= 22) || (whichMonth == 7 && whichDayOfMonth <= 22)) {
//     AstroSign = "Can";
//   } else if ((whichMonth == 5 && whichDayOfMonth >= 21) || (whichMonth == 6 && whichDayOfMonth <= 21)) {
//     AstroSign = "Gem";
//   } else if ((whichMonth == 4 && whichDayOfMonth >= 20) || (whichMonth == 5 && whichDayOfMonth <= 20)) {
//     AstroSign = "Tau";
//   } else if ((whichMonth == 3 && whichDayOfMonth >= 21) || (whichMonth == 4 && whichDayOfMonth <= 19)) {
//     AstroSign = "Ari";
//   } else if ((whichMonth == 2 && whichDayOfMonth >= 19) || (whichMonth == 3 && whichDayOfMonth <= 20)) {
//     AstroSign = "Pis";
//   } else if ((whichMonth == 1 && whichDayOfMonth >= 20) || (whichMonth == 2 && whichDayOfMonth <= 18)) {
//     AstroSign = "Aqu";
//   }

//   var dob;
//   var dob_month;
//   var dob_day;
//   var selected_sign;