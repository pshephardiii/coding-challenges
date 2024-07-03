// Class syntax overview:

// class - blueprint for creating objects with pre-defined properties and methods

class Student {
    constructor(firstName, lastName, year){
        // 'this' refers to the object created from that class (the instance)
        this.firstName = firstName
        this.lastName = lastName
        this.year = year
        this.tardies = 0
        this.scores = []
    }

    // Instance Method: pertains to a single instance of student
    fullName() {
        return `Your full name is ${this.firstName} ${this.lastName}`
    }

    markLate() {
        this.tardies += 1
        if (this.tardies >= 3){
            return "YOU ARE EXPELLED!!"
        }
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`
    }

    addScore(score){
        this.scores.push(score)
        return this.scores
    }

    calculateAverage(){
        let sum = this.scores.reduce(function(a,b){return a+b})
        return sum/this.scores.length
    }

    // Class Methods: pertinent to classes, but not necessarily individual instances of that class... like a utility function.
    // Needs 'static' keyword

    static enrollStudents(){
        return "ENROLLING STUDENTS"
    }
}

let firstStudent = new Student("Paul", "Shephard", 4)

// calling a class method:
Student.enrollStudents()

// Example of useful class method: a general function for calculating distance between two sets of x, y coordinates