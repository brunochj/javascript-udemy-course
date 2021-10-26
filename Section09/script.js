'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

  console.log(flights.split('+'))

  const getCode = str => {
    return str.slice(0,3).toUpperCase();
  }
  
  
  for(const flight of flights.split('+')){
    const [type, from, to, time] = flight.split(';');
    const output = `${type.startsWith('_Delayed') ? 'X' : ''} ${type.replaceAll('_', ' ')} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36)
    console.log(output);
  }


// Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
//   },

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };

//switching variables
// let [main, , secondary] = restaurant.categories
// console.log(main,secondary)
// const temp = main;
// main = secondary
// secondary = main

// [main, secondary] = [secondary, main]
// console.log(main, secondary)

// const [starter, mainCourse] = restaurant.order(2,0)
// console.log(starter, mainCourse);

// const newMenu = [...restaurant.mainMenu, 'Gnocci']
// console.log(newMenu)

// const mainMenuCopy = [...restaurant.mainMenu]

// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu]

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
  printGoals: function (...playersNames) {
    console.log(`${playersNames.length} goals were scored`)
    for (let i = 0; i < playersNames.length; i++) {
      console.log(playersNames[i])
    }
  }
};

// const [players1, players2] = game.players
// console.log(players1)
// console.log(players2)
// const [gk, ...fieldPlayers] = players1
// console.log(gk);
// console.log(fieldPlayers);
// const allPlayers = [...players1, ...players2]
// console.log(allPlayers);
// const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"]
// console.log(players1Final);
// const {odds: {team1, x: draw, team2}} = game
// console.log(team1)
// console.log(draw)
// console.log(team2)
// game.printGoals(...game.scored, "Davies", "Muller", "Lewandowski", "Kimmich")
// game.printGoals(...game.scored,)
// team1 > team2 && console.log("Borussia Dourtmond is more likely to win")
// team1 < team2 && console.log("Bayern Munich is more likely to win")




// for(const [i, player] of game.scored.entries()) 
//   console.log(`Goal ${i+1}: ${player}`)


// let oddsAvg = 0
// const oddsArray = Object.values(game.odds)
// for(const odds of oddsArray) oddsAvg += odds

// console.log(oddsAvg/oddsArray.length)


// const properties = Object.entries(game)
// const teams = []

// for(const [i, props] of properties){
//   if(i === "team1" || i === "team2"){
//     teams.push(props)
//   }
//   if(i === "odds"){
//     const odds = Object.entries(game.odds)
//     for(const [j, oddsTeam] of odds){
//       if(j === "x"){
//         console.log(`Odd of draw: ${oddsTeam}`)
//       }else if(j === "team1"){
//         console.log(`Odd of victory ${teams[0]}: ${oddsTeam}`)
//       }else if(j === "team2"){
//         console.log(`Odd of victory ${teams[1]}: ${oddsTeam}`)
//       }
//     }
//   }
// }



//   for(const[team, odd] of Object.entries(game.odds)){
//     const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`
//     console.log(`Odd of ${teamStr}: ${odd}`)
//   }

// const scorers = {}
// for (const player of game.scored){
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1) 
// }
// console.log(scorers)



// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// const events = [...new Set(gameEvents.values())]
// console.log(events);
// gameEvents.delete(64)
// const eventsAndTime = [...new Set(gameEvents)]
// console.log(events);
// console.log(`An event happend, on average, every ${90/eventsAndTime.length} minutes`)
// for(const [minute, event] of eventsAndTime){
//   (minute <= 45) 
//   ? console.log(`[FIRST HALF]: ${minute}: ${event}`)
//   : console.log(`[SECOND HALF]: ${minute}: ${event}`)

// }

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   const splitWords = text.split('\n')

//   for (let i = 0; i < splitWords.length; i++) {
//     const [firstWord, secondWord] = splitWords[i].toLowerCase().trim().split('_')
//     const output = `${firstWord}${secondWord.replace(secondWord[0], secondWord[0].toUpperCase())}`
//     console.log(`${output.padEnd(20)+'+'.repeat(i + 1)}`)
  // }
  
 

// })
