let yes1 = document.querySelector('#yes1');
let no1 = document.querySelector('#no1');
let yes2 = document.querySelector('#yes2');
let no2 = document.querySelector('#no2');
let yes3 = document.querySelector('#yes3');
let no3 = document.querySelector('#no3');
let yes4 = document.querySelector('#yes4');
let no4 = document.querySelector('#no4');
let yes5 = document.querySelector('#yes5');
let no5 = document.querySelector('#no5');
let yes6 = document.querySelector('#yes6');
let no6 = document.querySelector('#no6');
let yes7 = document.querySelector('#yes7');
let no7 = document.querySelector('#no7');
let yes8 = document.querySelector('#yes8');
let no8 = document.querySelector('#no8');
let yes9 = document.querySelector('#yes9');
let no9 = document.querySelector('#no9');
let yes10 = document.querySelector('#yes10');
let no10 = document.querySelector('#no10');
let yes11 = document.querySelector('#yes11');
let no11 = document.querySelector('#no11');
let yes12 = document.querySelector('#yes12');
let no12 = document.querySelector('#no12');
let yes13 = document.querySelector('#yes13');
let no13 = document.querySelector('#no13');
let yes14 = document.querySelector('#yes14');
let no14 = document.querySelector('#no14');
let yes15 = document.querySelector('#yes15');
let no15 = document.querySelector('#no15');
let yes16 = document.querySelector('#yes16');
let no16 = document.querySelector('#no16');
let yes17 = document.querySelector('#yes17');
let no17 = document.querySelector('#no17');
let yes18 = document.querySelector('#yes18');
let no18 = document.querySelector('#no18');
let yes19 = document.querySelector('#yes19');
let no19 = document.querySelector('#no19');
let yes20 = document.querySelector('#yes20');
let no20 = document.querySelector('#no20');
let yes21 = document.querySelector('#yes21');
let no21 = document.querySelector('#no21');


let inpCh = document.querySelector('#chM');
let inpAnx = document.querySelector('#anxM');
let inpSt = document.querySelector('#stM');
let inpDe = document.querySelector('#deM');
let inpAng = document.querySelector('#angM');

let done = document.querySelector("#done");

var message = "These are your music recommendations:\n";


/*QUESTION1*/
yes1.addEventListener('click', () => {
    yes1.disabled=true;
    no1.disabled=true;

    inpCh.value = parseInt(inpCh.value) + 1;
});

/*QUESTION2*/
yes2.addEventListener('click', () => {
    yes2.disabled=true;
    no2.disabled=true;

    inpAnx.value = parseInt(inpAnx.value) + 1;
});

/*QUESTION3*/
yes3.addEventListener('click', () => {
    yes3.disabled=true;
    no3.disabled=true;

    inpAnx.value = parseInt(inpAnx.value) + 1;
    inpSt.value = parseInt(inpSt.value) + 1;
});

/*QUESTION4*/
yes4.addEventListener('click', () => {
    yes4.disabled=true;
    no4.disabled=true;

    inpAnx.value = parseInt(inpAnx.value) + 1;
    inpSt.value = parseInt(inpSt.value) + 1;
});

/*QUESTION5*/
yes5.addEventListener('click', () => {
    yes5.disabled=true;
    no5.disabled=true;

    inpAnx.value = parseInt(inpAnx.value) + 1;
});

/*QUESTION6*/
yes6.addEventListener('click', () => {
    yes6.disabled=true;
    no6.disabled=true;

    inpAng.value = parseInt(inpAng.value) + 1;
    inpSt.value = parseInt(inpSt.value) + 1;
});

/*QUESTION7*/
yes7.addEventListener('click', () => {
    yes7.disabled=true;
    no7.disabled=true;

    inpAng.value = parseInt(inpAng.value) + 1;
});

/*QUESTION8*/
yes8.addEventListener('click', () => {
    yes8.disabled=true;
    no8.disabled=true;

    inpAng.value = parseInt(inpAng.value) + 1;
    inpAnx.value = parseInt(inpAnx.value) + 1;
    inpDe.value = parseInt(inpDe.value) + 1;
});

/*QUESTION9*/
yes9.addEventListener('click', () => {
    yes9.disabled=true;
    no9.disabled=true;

    inpAng.value = parseInt(inpAng.value) + 1;
    inpSt.value = parseInt(inpSt.value) + 1;
});

/*QUESTION10*/
yes10.addEventListener('click', () => {
    yes10.disabled=true;
    no10.disabled=true;

    inpAng.value = parseInt(inpAng.value) + 1;
    inpAnx.value = parseInt(inpAnx.value) + 1;
});

/*QUESTION11*/
yes11.addEventListener('click', () => {
    yes11.disabled=true;
    no11.disabled=true;

    inpCh.value = parseInt(inpCh.value) + 1;
});

/*QUESTION12*/
yes12.addEventListener('click', () => {
    yes12.disabled=true;
    no12.disabled=true;

    inpDe.value = parseInt(inpDe.value) + 1;
    inpSt.value = parseInt(inpSt.value) + 1;
});

/*QUESTION13*/
yes13.addEventListener('click', () => {
    yes13.disabled=true;
    no13.disabled=true;

    inpCh.value = parseInt(inpCh.value) + 1;
});

/*QUESTION14*/
yes14.addEventListener('click', () => {
    yes14.disabled=true;
    no14.disabled=true;

    inpCh.value = parseInt(inpCh.value) + 1;
});

/*QUESTION15*/
yes15.addEventListener('click', () => {
    yes15.disabled=true;
    no15.disabled=true;

    inpCh.value = parseInt(inpCh.value) + 1;
});

/*QUESTION16*/
yes16.addEventListener('click', () => {
    yes16.disabled=true;
    no16.disabled=true;

    inpCh.value = parseInt(inpCh.value) + 1;
});

/*QUESTION17*/
yes17.addEventListener('click', () => {
    yes17.disabled=true;
    no17.disabled=true;

    inpCh.value = parseInt(inpCh.value) + 1;
});

/*QUESTION18*/
yes18.addEventListener('click', () => {
    yes18.disabled=true;
    no18.disabled=true;

    inpDe.value = parseInt(inpDe.value) + 1;
});

/*QUESTION19*/
yes19.addEventListener('click', () => {
    yes19.disabled=true;
    no19.disabled=true;

    inpDe.value = parseInt(inpDe.value) + 1;
});

/*QUESTION20*/
yes20.addEventListener('click', () => {
    yes20.disabled=true;
    no20.disabled=true;

    inpDe.value = parseInt(inpDe.value) + 1;
    inpAnx.value = parseInt(inpAnx.value) + 1;
    inpAng.value = parseInt(inpAng.value) + 1;
    inpSt.value = parseInt(inpSt.value) + 1;
});

/*QUESTION21*/
yes21.addEventListener('click', () => {
    yes21.disabled=true;
    no21.disabled=true;

    inpDe.value = parseInt(inpDe.value) + 1;
});

/*QUESTION1*/
no1.addEventListener('click', () => {
    yes1.disabled=true;
    no1.disabled=true;
});

/*QUESTION2*/
no2.addEventListener('click', () => {
    yes2.disabled=true;
    no2.disabled=true;
});

/*QUESTION3*/
no3.addEventListener('click', () => {
    yes3.disabled=true;
    no3.disabled=true;
});

/*QUESTION4*/
no4.addEventListener('click', () => {
    yes4.disabled=true;
    no4.disabled=true;
});

/*QUESTION5*/
no5.addEventListener('click', () => {
    yes5.disabled=true;
    no5.disabled=true;
});

/*QUESTION6*/
no6.addEventListener('click', () => {
    yes6.disabled=true;
    no6.disabled=true;
});

/*QUESTION7*/
no7.addEventListener('click', () => {
    yes7.disabled=true;
    no7.disabled=true;
});

/*QUESTION8*/
no8.addEventListener('click', () => {
    yes8.disabled=true;
    no8.disabled=true;
});

/*QUESTION9*/
no9.addEventListener('click', () => {
    yes9.disabled=true;
    no9.disabled=true;
});

/*QUESTION10*/
no10.addEventListener('click', () => {
    yes10.disabled=true;
    no10.disabled=true;
});

/*QUESTION11*/
no11.addEventListener('click', () => {
    yes11.disabled=true;
    no11.disabled=true;
});

/*QUESTION12*/
no12.addEventListener('click', () => {
    yes12.disabled=true;
    no12.disabled=true;
});

/*QUESTION13*/
no13.addEventListener('click', () => {
    yes13.disabled=true;
    no13.disabled=true;
});

/*QUESTION14*/
no14.addEventListener('click', () => {
    yes14.disabled=true;
    no14.disabled=true;
});

/*QUESTION15*/
no15.addEventListener('click', () => {
    yes15.disabled=true;
    no15.disabled=true;
});

/*QUESTION16*/
no16.addEventListener('click', () => {
    yes16.disabled=true;
    no16.disabled=true;
});

/*QUESTION17*/
no17.addEventListener('click', () => {
    yes17.disabled=true;
    no17.disabled=true;
});

/*QUESTION18*/
no18.addEventListener('click', () => {
    yes18.disabled=true;
    no18.disabled=true;
});

/*QUESTION19*/
no19.addEventListener('click', () => {
    yes19.disabled=true;
    no19.disabled=true;
});

/*QUESTION20*/
no20.addEventListener('click', () => {
    yes20.disabled=true;
    no20.disabled=true;
});

/*QUESTION21*/
no21.addEventListener('click', () => {
    yes21.disabled=true;
    no21.disabled=true;
});

/*DONE*/
done.addEventListener('click', () => {
    done.disabled=true;

    if (inpCh.value >= inpAnx.value && inpCh.value >= inpSt.value && inpCh.value >= inpDe.value && inpCh.value >= inpAng.value) {
        var ch = document.getElementById("chR");
        ch.style.display = "block";
    }
    if (inpAnx.value >= inpCh.value && inpAnx.value >= inpSt.value && inpAnx.value >= inpDe.value && inpAnx.value >= inpAng.value) {
        var anx = document.getElementById("anxR");
        anx.style.display = "block";
    }
    if (inpSt.value >= inpAnx.value && inpSt.value >= inpCh.value && inpSt.value >= inpDe.value && inpSt.value >= inpAng.value) {
        var st = document.getElementById("stR");
        st.style.display = "block";
    }
    if (inpDe.value >= inpAnx.value && inpDe.value >= inpSt.value && inpDe.value >= inpCh.value && inpDe.value >= inpAng.value) {
        var de = document.getElementById("deR");
        de.style.display = "block";
    }
    if (inpAng.value >= inpAnx.value && inpAng.value >= inpSt.value && inpAng.value >= inpDe.value && inpAng.value >= inpCh.value) {
        var ang = document.getElementById("angR");
        ang.style.display = "block";
    }

    var subhead = document.getElementById("subhead");
    subhead.style.display = "block";
    window.alert("Scroll down to see your recommendations \nHope you feel better!");
});
