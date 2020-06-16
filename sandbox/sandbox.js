const now = new Date();
let h           = now.getHours();
let m           = (now.getMinutes() + 5); // +5 to set time 5 minutes forward
let s           = now.getSeconds();

//let array= [];

const span = document.querySelectorAll('span')


// for(let i=0; i<104;i++){
//     array.push(0);
// };

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




//console.log(array);

function check(h,m) {
    // Parse time values to light corresponding pixels 
    // array[0]  = 1 ; array[1]  = 1 ;
    style('it');style('is');
    if ((m>=0 && m<5)){
        // array[28]=1;
        // array[29]=1;
        style('oclock');
      }
     
    if((m>=5 && m<10) || (m>=55 && m<60)){
        // array[8]  = 1;
        // array[9]  = 1;
        // array[10] = 1;
        style('five');
        style('minute');
    }

    // Minutes between 10-15 or 50-55 - Light "TEN," "MINUTES"
    if ((m>=10 && m<15) || (m>=50 && m<55)){
        // array[2]  = 1;
        // array[9]  = 1;
        // array[10] = 1;
        style('ten');
        style('minute');
    }
     /* Minutes between 10-15 or 50-55 - Light "TEN," "MINUTES" */
    if ((m>=10 && m<15) || (m>=50 && m<55)){
        // array[2]  = 1;
        // array[9]  = 1;
        // array[10] = 1;
        style('ten');
        style('minute');
    }

    /* Minutes between 15-20 or 45-50 - Light "QUARTER" */
    if ((m>=15 && m<20) || (m>=45 && m<50)){
        // array[6] = 1;
        // array[7] = 1;
        style('quarter');
    }

    /* Minutes between 20-25 or 40-45 - Light "TWENTY," "MINUTES" */
    if ((m>=20 && m<25) || (m>=40 && m<45)){
        // array[4]  = 1;
        // array[5]  = 1;
        style('twenty');
        // array[9]  = 1;
        // array[10] = 1;
        style('minute');
    }  

    /* Minutes between 25-30 or 35-40 - Light "TWENTY," "FIVE," "MINUTES" */
    if ((m>=25 && m<30) || (m>=35 && m<40)){
        // array[4]  = 1;
        // array[5]  = 1;
        style('twenty');
        // array[8]  = 1;
        style('five');
        // array[9]  = 1;
        // array[10] = 1;
        style('minute');
    }

    /* Minutes between 30-35 - Light "HALF" */
    if ((m>=30 && m<35)){
        // array[3]=1;
        style('half');
        
    }

    /* Minutes between 5-35 - Light "PAST" */
    if ((m>=5) && (m<35)){
        // array[14]=1;
        style('past');
    }

     /* Minutes between 35-60 - Light "TO" & MODIFY CURRENT HOUR VALUE */
    if (m>=35){
        // array[13]=1;
        style('to');
        h++; //Add 1 from current hour
            /*Set time to twelve for hour around midnight, noon */
            if (h==0){
                h=12; 
            }
            /*Corner case for 12:35-12:59 */
            if (h==13){
                h=1;
            }
    }


    /* Hour=1 - Light "ONE" */
    if (h==1){
        // array[12]=1;
        style('one');
    }

    /* Hour=2 - Light "TWO" */
    if (h==2){
        // array[11]=1;
        style('two');
    }

    /* Hour=3 - Light "THREE" */
    if (h==3){
        // array[15]=1;
        // array[16]=1; 
        style('three');   
    }

    /* Hour=4 - Light "FOUR" */
    if (h==4){
        // array[17]=1;
        style('four');
    }

    /* Hour=5 - Light "FIVE" */
    if (h==5){
        // array[18]=1;
        style('five');
    }

    /* Hour=6 - Light "SIX" */
    if (h==6){
        // array[23]=1;
        style('six');
    }

    /* Hour=7 - Light "SEVEN" */
    if (h==7){
        // array[21]=1;
        // array[22]=1;
        style('seven');
    }

    /* Hour=8 - Light "EIGHT" */
    if (h==8){
        // array[19]=1;
        // array[20]=1;
        style('eight');
    }

    /* Hour=9 - Light "NINE" */
    if (h==9){
        // array[24]=1;
        style('nine');
    }

    /* Hour=10 - Light "TEN" */
    if (h==10){
        // array[25]=1;
        style('tenl');
    }

    /* Hour=11 - Light "ELEVEN" */
    if (h==11){
        // array[26]=1;
        // array[27]=1;
        style('eleven');
    }

    /* Hour=12 - Light "TWELVE" */
    if (h==12){
        // array[30]=1;
        // array[31]=1;
        style('twelve');
    }
    // return array;

};

check(11,30);
console.log(h,m)

// const show = () =>{
//  array.forEach(e => {
//      if(e==0){
//         console.log("off")
//      }
//      else{
//         console.log("on")
//      }
     
//  });
// }


//console.log(span.classList);

