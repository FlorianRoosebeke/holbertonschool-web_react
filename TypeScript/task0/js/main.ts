
interface Student {
	firstname: string;
	lastname: string;
	age: number;
	location: string;
}

const student1: Student = {
	firstname: 'Florian',
	lastname: 'Roosebeke',
	age: 35,
	location: 'Baraqueville',
}

const student2: Student = {
	firstname: 'Michael',
	lastname: 'Roosebeke',
	age: 35,
	location: 'Toulouse',
}

const studentlist: Student[] = [student1, student2];
