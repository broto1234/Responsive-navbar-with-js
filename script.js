const respIcon = document.getElementById('respIcon');
const respondBar = document.getElementById('respondBar');
const respCrossIcon = document.getElementById('respCrossIcon');

respIcon.addEventListener("click", function () {
  respondBar.classList.add('respondBarClass');
  respCrossIcon.classList.add('respondCrossBarClass');
  respIcon.style.opacity= 0;
  respCrossIcon.style.display="block";

})

respCrossIcon.addEventListener("click", function () {
  respondBar.classList.remove('respondBarClass');
  respIcon.style.opacity= 1;
  respCrossIcon.style.display="none";

})