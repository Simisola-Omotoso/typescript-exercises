type Student = {
    id: number;
    name: string;
    grade: number;
    isEnrolled: boolean;
};

let students: Student[] = [
    {id: 1, name: "Simisola", grade: 12, isEnrolled: true},
    {id: 2, name: "Isaac", grade: 11, isEnrolled: true},
    {id: 3, name: "Oyinkansola", grade: 9, isEnrolled: false},
]

function addAStudent(student: Student): Student[] {
    students.push({id: 4, name: "Feyisayo", grade: 8, isEnrolled: false});
    return students;
}

function filterByEnrolled(student: Student): Student[] {
    return students.filter(student => student.isEnrolled === true);
}