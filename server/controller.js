const { response } = require("express");
const goalss = []
let globalId = 1;

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortune = ["A faithful friend is a strong defense.","A fresh start will put you on your way.","A pleasant surprise is waiting for you", "A soft voice may be awfully persuasive."];

        let randomComp = Math.floor(Math.random() * fortune.length);
        let randomFortune = fortune[randomComp];

        res.status(200).send(randomFortune);
    },

    getQuotes: (req, res) => {
        const quotes = ["The secret of happiness is not in doing what you like but in liking what you have to do. - Sathya Sai Baba","The goal is not to be perfect by the end, the goal is to be better today. - Simon Sinek","Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway. - Earl Nightingale", "Move out of your comfort zone. You can only grow if you are willing to feel awkward and uncomfortable when you try something new. - Brian Tracy"];

          let randomQuote = Math.floor(Math.random() * quotes.length);
            let randomizer = quotes[randomQuote];
    
            res.status(200).send(randomizer);

    },

    getEncor: (req, res) => {
        const encourage = ["Knowledge is power. Information is liberating. Education is the premise of progress. - Keep on learning","The greater part of progress is the desire to progress. - Youve got to want it","Progress grows out of motion - Keep moving", "Without deviation from the norm, progress is not possible. - Try new things"];

        let randomEncor = Math.floor(Math.random() * encourage.length);
        let encorRandomizer = encourage[randomEncor];

        res.status(200).send(encorRandomizer);
    },

    createGoal: (req, res) => {
        const {goals, time, city } = req.body;
        let newGoals = {
            id: globalId,
            goals,
            time,
            city
        };
        console.log('Creating goal card')
        console.log(req.body)
        goalss.push(newGoals)
        res.status(200).send(req.body)
        //globalId++
    },

    deleteGoals: (req, res) => {
        let {id} = req.params
        // for (let i=0; i<newGoals.length; i++){
        //     if(newGoals[i].id === id) {
                newGoals.splice(0, 1)
                res.status(200).send(newGoals)
        //     }
        // }
    },

    updateGoals: (req, res) => {
        let {id} = req.params
        let editGoals = req.body.goals
        for (let i = 0; i<newGoals.length; i++) {
            if(newGoals[i].id === id){
                newGoals[i].goals = editGoals
                console.log(req.body)
                goalss.push(newGoals)
                res.status(200).send(req.body)

            }
        }
    }

}