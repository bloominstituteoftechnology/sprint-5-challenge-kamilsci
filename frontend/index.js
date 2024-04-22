async function sprintChallenge5() { // Note the async keyword, in case you wish to use `await` inside sprintChallenge5
 
  // 👇 WORK WORK BELOW THIS LINE 👇
  //axios get learner and get mentor 
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`





  // axios.get(' http://localhost:3003/api/learners').then(()=>)
  //axios.get('http://mentos').then(()=>{


  //} ).catch(()=> {


  //})

//   const getData = async (learners, mentors) => {
//     const data = await fetch(learners);
//     const data2 = await fetch(mentors)
//     const arrayOfData = await data.json();
//     console.log(arrayOfData);
//   }

// return getData


const leanerRes = await axios.get(' http://localhost:3003/api/learners')
const mentorRes = await axios.get('http://localhost:3003/api/mentors')
const learners = leanerRes.data
const mentors = mentorRes.data

//fetched the data
//combine the data into an array
//loop over the array
//for each obj make a div.card
//add click handler to each one
//if card does not have a selected, remove frome class that has it and add to clicked one
//set the correct  text in the div.info
//if clicked card has class selected 
// remove the class of selected 
// reset message of the dispatchEvent.info

//the info message
const info = document.querySelector('.info')
info.textContent = 'No learner is selected'
//formatting the data
const arrayOfData = []
learners.forEach(learner => {
  const result = {
    ...learner,
    mentors: learner.mentors.map(mentorID => {
      const mentor = mentors.find(mentorObj => mentorObj.id == mentorID)
      return mentor.firstName + ' ' + mentor.lastName


    })
  }
  arrayOfData.push(result)
  console.log(result)
 
});

arrayOfData.forEach(learner => {
  //creating elements
  const card = document.createElement('div')
  const name = document.createElement('h3')
  const email = document.createElement('div')
  const mentors = document.createElement('h4')
  const mentorsList = document.createElement('ul')

  //hiarchy

  card.appendChild(name)
  card.appendChild(email)
  card.appendChild(mentors)
  card.appendChild(mentorsList)
  learner.mentors.forEach(mentorName => {
    const li = document.createElement('li')
    li.textContent =  mentorName
    mentorsList.appendChild(li)
    
  })
  //adding classes
 card.classList.add('card')
 mentors.classList.add('closed')
 //adding text content to remaining elements
 name.textContent = learner.fullName
 email.textContent = learner.email
 mentors.textContent = 'Mentors'
 //DOM
 document.querySelector('.cards').appendChild(card)
 card.addEventListener('click', evt =>{
  if (!card.classList.contains('selected')){
    document.querySelectorAll('.card').forEach(crd => crd.classList.remove('selected'))
    card.classList.add('selected')
    info.textContent = `The selected learner is ${learner.fullName}`
  }else {
info.textContent = 'No learner is selected'
card.classList.remove('selected')

  }
 })
})



  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = { sprintChallenge5 }
else sprintChallenge5()
