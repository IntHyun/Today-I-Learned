const students = [];

students.push({ name: '수현', 국어: 87, 수학: 63, 사회: 42, 영어: 32 });
students.push({ name: '강철', 국어: 78, 수학: 77, 사회: 13, 영어: 58 });
students.push({ name: '남기', 국어: 45, 수학: 56, 사회: 88, 영어: 73 });
students.push({ name: '범수', 국어: 65, 수학: 100, 사회: 97, 영어: 100 });

// console.log(JSON.stringify(students, null, 2));

let output = '이름\t총점\t평균\n';

for (const s of students) {
    const sum = s.국어 + s.수학 + s.사회 + s.영어;
    const average = sum / students.length;

    output += `${s.name}\t${sum}점\t${average}점\n`;
}

// console.log(output);

function getSumOf(student) {
    return student.국어 + student.수학 + student.사회 + student.영어;
}

function getAvrOf(student) {
    return getSumOf(student) / 4;
}

let output2 = '이름\t총점\t평균\n';

for (const s of students) {
    output2 += `${s.name}\t${getSumOf(s)}점\t${getAvrOf(s)}점\n`;
}

// console.log(output2);

for (const s of students) {
    s.getSum = function () {
        return this.국어 + this.영어 + this.수학 + this.사회;
    };

    s.getAvr = function () {
        return this.getSum() / 4;
    };
}

// console.log(students);

function createStudent(이름, 국어, 영어, 수학, 과학) {
    return {
        이름: 이름,
        국어: 국어,
        영어: 영어,
        수학: 수학,
        과학: 과학,

        getSum: function () {
            return this.국어 + this.영어 + this.수학 + this.과학;
        },

        getAvr() {
            this.getSum() / 4;
        },

        toString22() {
            return `${this.이름}\t${this.getSum()}점\t${this.getAvr()}점\n`;
        },
    };
}

// console.log(createStudent());

const newStu = createStudent('정수현', 48, 32, 40, 100);

class HiRobot {
    constructor(이름, 성별, 나이) {
        this.이름 = 이름;
        this.성별 = 성별;
        this.나이 = 나이;
    }

    sayHello() {
        console.log(
            `반갑습니다 ${this.이름}님 성별은 ${this.성별}이며 당신의 나이는 ${this.나이} 입니다.`
        );
    }
}

const hiHuman = new HiRobot('정수현');

class UpgradeHiRobot extends HiRobot {
    constructor(이름, 성별, 나이, 키) {
        super(이름, 성별, 나이);
        this.키 = 키;
    }

    sayHello() {
        super.sayHello();
        console.log('hi');
    }
}

const hiHuman2 = new UpgradeHiRobot('강호동', '여자', 12, 178);
hiHuman2.sayHello();
