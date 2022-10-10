  // Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let allDirectors = moviesArray.map(({director}) => director);
    return allDirectors;
}
getAllDirectors(movies);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if (!moviesArray[0]) {
         return 0
    }
    let spielbergFilms = moviesArray.filter((el) => el.director === 'Steven Spielberg' && el.genre.includes('Drama'));
    //console.log(spielbergFilms)
    return spielbergFilms.length;
}
howManyMovies(movies);

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (!moviesArray[0]){
        return 0;
    }
    let sum = moviesArray.reduce(function(accumulator, curValue){
        if (curValue.score) {
            return accumulator + curValue.score
        } else {
            return accumulator
        }
    //return accumulator + curValue.score / moviesArray.length;
},0);
let result = Math.round(sum / moviesArray.length * 100) / 100;
return result;
}

scoresAverage(movies);
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    if (!moviesArray[0]){
        return 0;
    }
    let allDramaFilms = moviesArray.filter((el)=> el.genre.includes('Drama'))
    let sum = allDramaFilms.reduce(function(accumulator, curValue){
    return accumulator + curValue.score / allDramaFilms.length;
},0);
return Math.round(sum * 100) / 100;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
let moviesArrayCopy = [...moviesArray];
//let sortedByYear = moviesArrayCopy.sort((a, b) => a.year - b.year)
moviesArrayCopy.sort (function (a, b) {
    if (a.year < b.year) return -1;
    if (a.year > b.year) return 1;
    if (a.title > b.title) return 1;
    if (a.title < b.title) return -1;
});
return moviesArrayCopy;
}

orderByYear(movies);

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let moviesArrayCopy = [...moviesArray];
    let titles = [];
    for (let i = 0; i < moviesArrayCopy.length; i++){
        titles.push(moviesArrayCopy[i].title);
    }
    let orderedTitles = titles.sort()
    return orderedTitles.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    let duration;
    let moviesArrayCopy = [...moviesArray];
    moviesArrayCopy.map((el) => {
        return duration = el.duration;
    })
    console.log (duration[0] * 60);
}
turnHoursToMinutes(movies);
// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
