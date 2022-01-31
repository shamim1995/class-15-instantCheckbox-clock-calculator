
const skill = document.querySelectorAll('input[type="checkbox"]')
const all_skills = document.querySelector('.all_skills')

skill.forEach(skillData=>{

  skillData.addEventListener('change', function(){

      let skillValue = document.querySelectorAll('input[type="checkbox"]:checked');
      let skill_arr = [];

    skillValue.forEach( skills=>{
       skill_arr.push(skills.value);
    });

    let list = ' ';
    skill_arr.map( data => {
     list += `<li class = "list-group-item"> ${data} </li>`;
});
all_skills.innerHTML = list;
   

  });
});
