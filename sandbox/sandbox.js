const span        = document.querySelectorAll('span');
const maintime    = document.querySelector('.maintime');
const date    = document.querySelector('.date');




function twentyFourToTwelve() {
    let currentTime = new Date();
    let hours       = currentTime.getHours();
    let minutes     = currentTime.getMinutes();
    let seconds     = currentTime.getSeconds();
    let date        = currentTime.toDateString();

    if (minutes < 10)
    minutes = 0 + minutes;
    
    let suffix = "AM";
    if (hours >= 12) {
    suffix = "PM";
    hours = hours - 12;
    }
    if (hours == 0) {
    hours = 12;
    }
    let current_time =`${hours} : ${minutes} : ${seconds} ${suffix}`;
    //console.log("Current Your System Time is : " + current_time);
    return {
        hours , minutes , current_time , date
    };
}

function style(word) {
    span.forEach((e) =>{
    
        if(e.classList.contains(word)){
            e.classList.add('glow')
        }
        // else{
        //     e.classList.remove('glow')
        // }
     });
};



function check(h,m) {
    // Parse time values to light corresponding pixels 
    style('it');style('is');
    if ((m>=0 && m<5)){
        style('oclock');
      }
     
    if((m>=5 && m<10) || (m>=55 && m<60)){
        style('five');
        style('minute');
    }

    // Minutes between 10-15 or 50-55 - Light "TEN," "MINUTES"
    if ((m>=10 && m<15) || (m>=50 && m<55)){
        style('ten');
        style('minute');
    }
     // Minutes between 10-15 or 50-55 - Light "TEN," "MINUTES"  
    if ((m>=10 && m<15) || (m>=50 && m<55)){
        style('ten');
        style('minute');
    }

    // Minutes between 15-20 or 45-50 - Light "QUARTER"  
    if ((m>=15 && m<20) || (m>=45 && m<50)){
        style('quarter');
    }

    // Minutes between 20-25 or 40-45 - Light "TWENTY," "MINUTES"  
    if ((m>=20 && m<25) || (m>=40 && m<45)){
       
        style('twenty');
       
        style('minute');
    }  

    // Minutes between 25-30 or 35-40 - Light "TWENTY," "FIVE," "MINUTES"  
    if ((m>=25 && m<30) || (m>=35 && m<40)){
        
        style('twenty');
     
        style('five');

        style('minute');
    }

    // Minutes between 30-35 - Light "HALF"  
    if ((m>=30 && m<35)){
        style('half');
        
    }

    // Minutes between 5-35 - Light "PAST"  
    if ((m>=5) && (m<35)){
        style('past');
    }

     // Minutes between 35-60 - Light "TO" & MODIFY CURRENT HOUR VALUE 
    if (m>=35){
        style('to');
        h++; //Add 1 from current hour
            //Set time to twelve for hour around midnight, noon 
            if (h==0){
                h=12; 
            }
            // Corner case for 12:35-12:59 
            if (h==13){
                h=1;
            }
    }


    // Hour=1 - Light "ONE" 
    if (h==1){
        style('one');
    }

    //Hour=2 - Light "TWO" 
    if (h==2){
        style('two');
    }

    // Hour=3 - Light "THREE" 
    if (h==3){
        style('three');   
    }

    // Hour=4 - Light "FOUR" 
    if (h==4){
        style('four');
    }

    // Hour=5 - Light "FIVEl" 
    if (h==5){
        style('fivel');
    }

    // Hour=6 - Light "SIX" 
    if (h==6){
        style('six');
    }

    // Hour=7 - Light "SEVEN" 
    if (h==7){
        style('seven');
    }

    // Hour=8 - Light "EIGHT" 
    if (h==8){
        style('eight');
    }

    // Hour=9 - Light "NINE" 
    if (h==9){
     
        style('nine');
    }

    // Hour=10 - Light "TENl" 
    if (h==10){
   
        style('tenl');
    }

    // Hour=11 - Light "ELEVEN" 
    if (h==11){
        style('eleven');
    }

    // Hour=12 - Light "TWELVE" 
    if (h==12){
        style('twelve');
    }
   
};

//setInterval(twentyFourToTwelve(), 10000);

check(twentyFourToTwelve().hours,twentyFourToTwelve().minutes)

const tick = () =>{
    //console.log(twentyFourToTwelve().current_time);
    maintime.innerHTML= `<p>${twentyFourToTwelve().current_time}</p>`
};

date.innerHTML =`<p>${twentyFourToTwelve().date}</p>`

setInterval(tick, 1000);



