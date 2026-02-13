// Typing Animation
const text = ["Web Developer","Java Programmer","DSA Learner"];
let count=0,index=0,currentText="",letter="";

(function type(){
    if(count===text.length){count=0;}
    currentText=text[count];
    letter=currentText.slice(0,++index);
    document.getElementById("typing").textContent=letter;
    if(letter.length===currentText.length){
        count++; index=0;
    }
    setTimeout(type,150);
})();

// Scroll Reveal
const faders=document.querySelectorAll(".fade");
window.addEventListener("scroll",()=>{
    faders.forEach(el=>{
        const top=el.getBoundingClientRect().top;
        if(top<window.innerHeight-100){
            el.classList.add("active");
        }
    });
});

// Skill Animation
const skills=document.querySelectorAll(".progress");
window.addEventListener("scroll",()=>{
    skills.forEach(skill=>{
        const top=skill.getBoundingClientRect().top;
        if(top<window.innerHeight-100){
            skill.style.width=skill.getAttribute("data-width");
        }
    });
});

// Dark Mode
function toggleDark(){
    document.body.classList.toggle("dark");
}