class Course {
    constructor(name) {
        this.name = name;
        this.grades = [];
    }

    getName() {return this.name}

    addGrade(student, grade) {
        this.grades.push({ 
            student: student.getName(), 
            grade: grade });
    }

    getGrades() {
        return this.grades;
    }

    getAverageGrade() {
        if (this.grades.length === 0) return -1;
        const total = this.grades.reduce((sum, entry) => sum + entry.grade, 0);
        return total / this.grades.length;
    }

    description() {
        return `Course: ${this.name}`;
    }
}

module.exports = Course;
