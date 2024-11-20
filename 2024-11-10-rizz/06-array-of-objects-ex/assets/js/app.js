const students = [
    {
        firstName: `Tamir`,
        lastName: `Tamirstoff`,
        grades:[60,70,80]
    },
    {
        firstName: `Mira`,
        lastName:`Mirastoff`,
        grades:[52,68,97]
    },
    {
        firstName: `Tomer`,
        lastName:`Tomerstoff`,
        grades:[49,63,100]
    }
]

console.log(students)



for(const student of students){
    let sum=0
    for(const grade of student.grades){
        sum += grade
    }
console.log(`name of studen is ${student.firstName} and their average is ${parseInt(sum / student.grades.length)}`)

}