function student() {
    this.name = "Nick",
    this.age = 16,
    this.grade = 10,
    this.gender = "Male"
}

var student = new student();

console.log(student.name);

function Movie(movie_title, movie_year){
    this.title = movie_title,
    this.year = movie_year

}

let movie1 = new Movie("Frozen", 2013);
let movie2 = new Movie("Moana", 2016);

console.log(`${movie1.title}, ${movie1.year}`);