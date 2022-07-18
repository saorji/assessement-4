const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")

const submitBtn = document.getElementById("submit")
const goalformBtn = document.querySelector('#goal-form')
const goalContainer = document.getElementById("goal-container")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
complimentBtn.addEventListener('click', getCompliment);

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
    .then(res => {
        const data = res.data;
        alert(data);
});
};
fortuneBtn.addEventListener('click', getFortune)


const getQuotes = () => {
    let dropdown = document.getElementById("selector");
    let value = dropdown.options[dropdown.selectedIndex].value
    if(value === "quote"){
        axios.get("http://localhost:4000/api/quotes/")
        .then(res => {
            const data = res.data;
            alert(data);
        });
    }else if(value === "encor"){
        axios.get("http://localhost:4000/api/encourage/")
    .then(res => {
        const data = res.data;
        alert(data);
});
    }
};
submitBtn.addEventListener('click', getQuotes);


const createGoal = body =>axios.post("http://localhost:4000/api/createGoal", body).then(res => {
    createGoalCard(res.data)
}).catch(err => {
    console.log(err)
})

// const deleteGoals = body => axios.delete("http://localhost:4000/api/newGoals", body).then(res => {
//     createGoalCard(res.data)
// }).catch(err => {
//     console.log(err)
// });

// const updateGoals = body => axios.put("http://localhost:4000/api/createGoal", body).then(res => {
//     createGoalCard(res.data)
// }).catch(err => {
//     console.log(err)
// });


function goalSubmitHandler(e) {
    e.preventDefault()

    let goals = document.querySelector("#goals")
    let time = document.querySelector("#time")
    let city = document.querySelector("#city")

    let bodyObj = {
        goals: goals.value,
        time: time.value,
        city: city.value
    }

    createGoal(bodyObj)

    goals.value = ''
    time.value = ''
    city.value = ''

}

function createGoalCard(data){
    goalContainer.innerHTML = ''
    const goalCard = document.createElement('div')
    goalCard.classList.add('goal-card')

    goalCard.innerHTML = `<p class="goals">Your Goal: ${data.goals}</p>
    <p class="times">When you want to achieve your goal: ${data.time}</p>
    <p class="cityy">City you'd love to live: ${data.city}
    <div class="upd-del-btns">
    <button onclick="updateGoals">Update your entry</button>
    <button onclick="deleteGoals">Delete Entry</button>
    </div>`

    goalContainer.appendChild(goalCard)
}

goalformBtn.addEventListener('submit',goalSubmitHandler)