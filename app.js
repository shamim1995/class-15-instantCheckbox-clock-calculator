/**
 * this function for instant change get checkbox value
 */


const skill = document.querySelectorAll('input[type="checkbox"]');
const all_skills = document.querySelector('.all_skills')

skill.forEach(skillData =>{

  skillData.addEventListener('change', function () {
    
    let skillChecked = document.querySelectorAll('input[type="checkbox"]:checked');

    let skill_arr = [];

    skillChecked.forEach(skillArry => {
      skill_arr.push(skillArry.value)
    });

    let list = '';
    skill_arr.map(data=>{

      list += `<li class="list-group-item"> ${data}</li>`

    });

    all_skills.innerHTML = list;

  });

});


/**
 * this for clock
 */

const sec = document.querySelector('.sec');
const min = document.querySelector('.min');
const hour = document.querySelector('.hour');


setInterval(() => {
let time = new Date();
let current_sec = time.getSeconds();
let current_min = time.getMinutes();
let current_hour = time.getHours();

sec.style.transform = `rotate( ${timeDiff( 60, current_sec )}deg )`;
min.style.transform = `rotate( ${timeDiff( 60, current_min )}deg )`;
hour.style.transform = `rotate( ${timeDiff( 12, current_hour )}deg )`;
},1000);

/**
 * this function for time calculation
 * @param {*} time 
 * @param {*} current 
 * @returns 
 */

function timeDiff(time, current) {
  return (360 * current) / time;
}


/**
 * this function for calculator
 */

let cal_arr = [];
function getcal(val) {

  cal_arr.push(val)

  document.querySelector('.first_display').innerHTML = cal_arr.join('')
  
}

let allclear = () => {
   cal_arr = [];
  document.querySelector('.first_display').innerHTML = 0;
  document.querySelector('.second_display').innerHTML = 0;
}

let cancel = () => {

  if(cal_arr.length > 1){
cal_arr.pop();
document.querySelector('.first_display').innerHTML = cal_arr.join('')
document.querySelector('.second_display').innerHTML = 0;
  }else{
    document.querySelector('.first_display').innerHTML = 0;
  }

  

}

let finalresult = ()=> {

  let calValue = cal_arr.join('');

  document.querySelector('.second_display').innerHTML = eval(calValue);
  getcal(val)
}


