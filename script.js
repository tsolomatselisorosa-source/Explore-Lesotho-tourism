// Simple creative effect for About page
window.addEventListener("scroll", function(){
  let box = document.querySelector(".about-box");
  if(box){
    box.style.transform = "translateY(" + window.scrollY * 0.02 + "px)";
  }
});

document.addEventListener('DOMContentLoaded', function(){
  const form = document.getElementById('registrationForm');
  if(!form) return;
  form.addEventListener('submit', function(e){
    e.preventDefault();
    let isValid = true;
    document.querySelectorAll('.error-msg').forEach(el => el.style.display='none');
    document.querySelectorAll('.form-control').forEach(el => el.classList.remove('error','success'));
    let name = document.getElementById('fullName').value.trim();
    if(name.length < 3){ document.getElementById('nameError').style.display='block'; document.getElementById('fullName').classList.add('error'); isValid=false; } else { document.getElementById('fullName').classList.add('success'); }
    let email = document.getElementById('email').value.trim();
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!email.match(emailPattern)){ document.getElementById('emailError').style.display='block'; document.getElementById('email').classList.add('error'); isValid=false; } else { document.getElementById('email').classList.add('success'); }
    let phone = document.getElementById('phone').value.trim();
    if(phone.length < 8){ document.getElementById('phoneError').style.display='block'; document.getElementById('phone').classList.add('error'); isValid=false; } else { document.getElementById('phone').classList.add('success'); }
    let gender = document.getElementById('gender').value;
    if(gender === ""){ document.getElementById('genderError').style.display='block'; document.getElementById('gender').classList.add('error'); isValid=false; } else { document.getElementById('gender').classList.add('success'); }
    let password = document.getElementById('password').value;
    if(password.length < 6){ document.getElementById('passwordError').style.display='block'; document.getElementById('password').classList.add('error'); isValid=false; } else { document.getElementById('password').classList.add('success'); }
    let confirmPassword = document.getElementById('confirmPassword').value;
    if(confirmPassword !== password || confirmPassword === ""){ document.getElementById('confirmError').style.display='block'; document.getElementById('confirmPassword').classList.add('error'); isValid=false; } else { document.getElementById('confirmPassword').classList.add('success'); }
    if(isValid){ document.getElementById('successBox').style.display='block'; setTimeout(()=>{ form.reset(); document.querySelectorAll('.form-control').forEach(el => el.classList.remove('success')); document.getElementById('successBox').style.display='none'; }, 4000); }
  });
});