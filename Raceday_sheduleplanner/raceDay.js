name_field = document.getElementById('name_input');
age_field = document.getElementById('age_input');
time_field = document.getElementById('time_input');
submit_btn = document.getElementById('submit_btn');
output_field = document.getElementById('output');

let registration;
submit_btn.addEventListener('click', () => {
    enterRacer();
});

const enterRacer = () => {
    //racer name
    let racerName = (name_field.value).toUpperCase();
    // random racenumber
    let raceNumber = Math.floor(Math.random() * 1000);
    console.log(raceNumber);
    // registration time early or not
    regi_time = (time_field.value).split(":").join("");
    regi_time = +regi_time;
    console.log(regi_time);
    regi_time < 900 ? registration = true : registration = false;
    console.log(registration);
    // racer age
    let racerAge = +(age_field.value);
    console.log(racerAge, typeof(racerAge));
    // if: adult and early registration...
    racerAge > 18 && registration ? raceNumber += 1000 : raceNumber;
    console.log(raceNumber);
    // give starttime
    let startTime;
    // if age >= 18 and early registration ...time... else if ...time... else ...time...
    racerAge >= 18 && registration ? startTime = "9:30" : racerAge > 18 ? startTime = "11:00" : startTime = "12:30";
    console.log(startTime);
    // print the racers-info
    let output = `racer:&nbsp;${racerName}&nbsp;&nbsp;&#9679&nbsp;&nbsp;nr:&nbsp;${raceNumber}&nbsp;&nbsp;&#9679&nbsp;&nbsp;starts:&nbsp;${startTime}`;
    console.log(output);
    output_field.innerHTML = output;
}
