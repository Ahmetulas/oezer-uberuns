let widgetSectionPos = document.querySelector('.widget').getBoundingClientRect().top + window.scrollY;
let widgetSection = document.querySelector('.widget');

let staffSectionPos = document.querySelector('.staff').getBoundingClientRect().top + window.scrollY;
let staff = document.querySelectorAll('.person');

let feedBackPos = document.querySelector('.feedbackcontainer').getBoundingClientRect().top + window.scrollY;
let feedBackContainer = document.querySelector('.feedbackcontainer');
let feedBack = document.querySelector('.filter');

document.addEventListener('scroll', e => {
  let position = document.documentElement.scrollTop || document.body.scrollTop;
  let height = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;

  if(position >= widgetSectionPos && !widgetSection.classList.contains('animate')) {
    widgetSection.classList.add('animate');
  }
  if(staff) {
    if(position >= staffSectionPos && !staff[0].classList.contains('animate')) {
      staff.forEach((one, index) => {
        setTimeout(() => {
          one.classList.add('animate');
        }, 500 * index);
      })
    }
  }
  console.log("postition: " + position);
  console.log(feedBackPos);
  if(position >= feedBackPos/1.2 && !feedBackContainer.classList.contains('animate')) {
    feedBackContainer.classList.add('animate');
    feedBack.classList.add('animate');
  }

});
