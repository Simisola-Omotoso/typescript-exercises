type Student = {
    readonly id: number;
    name: string;
    grade: number;
    isEnrolled: boolean;
    status: "freshman" | "sophomore" | "junior" | "senior";
    email?: string;
};

let students: Student[] = [
    {id: 1, name: "Simisola", grade: 12, isEnrolled: true, status: "senior", email: "somotoso@outlook.com"},
    {id: 2, name: "Isaac", grade: 11, isEnrolled: true, status: "junior"},
    {id: 3, name: "Oyinkansola", grade: 9, isEnrolled: false, status: "sophomore"},
]

function addAStudent(student: Student): Student[] {
    students.push({id: 4, name: "Feyisayo", grade: 8, isEnrolled: false, status: "freshman"});
    return students;
}

function filterByEnrolled(student: Student): Student[] {
    return students.filter(student => student.isEnrolled === true);
}

function filterBySenior(student: Student): Student[] {
    return students.filter(student => student.status === "senior");
}

let extra: Student = {
    id: 5,
    name: "Mary",
    grade: 13,
    isEnrolled: false,
    status: "senior",
}

//extra.id = 6;

function studentSummary(student: Student): string {
    return `${student.name} ({$student.status}) - Enrolled?: {$student.isEnrolled}`;
}