//new Date()로 실행한 결과값 형식은 toString() 생략된 문자열이다.
//현재시간 : 운영체제 설정된 시간
console.log(new Date())
//Thu Mar 17 2022 10:30:57 GMT+0900, 요일 월 일 년도 시:분:초 GMT(그리니치천문대)+또는 시간
//날짜 지정 : 년도,월,일 (단 월0~11 이다.)
console.log(new Date(2022,05,01))   //날짜 지정 : Sat Jun 01 2002 00:00:00 GMT+0900 (대한민국 표준시) -> 6월
//날짜 시간 지정 : 년도,월,일,시,분,초
console.log(new Date(2022,02,16,9,30,25))   //날짜 지정 : Wed Mar 16 2022 09:30:25 GMT+0900 -> (3월)
//getTime 메소드 : 1970년 1월 1일 기준으로 지나온 시간을 ms단위로 계산하여 리턴
console.log(new Date().getTime())
//세계표준시
console.log(new Date().toUTCString())
//세계 표준시 : 출력형식이 다르다.
console.log(new Date().toISOString())
//운영체제에 설정된 국가에 맞는 형식
console.log(new Date().toLocaleString())
//get 메소드
const today = new Date();
console.log(today.getFullYear())
console.log(today.getMonth())
console.log(today.getDate())
console.log(today.getHours())   //getMinutes(분), getSeconds(초) 메소드도 있다.
console.log(today.getDay()) //요일 결과 확인해보기 : 0(일)~6(토)
today.setFullYear(today.getFullYear()+2);   //현재 today에서 2년후
console.log(today)
today.setFullYear(today.getFullYear()-2);   //현재 today에서 2년전
console.log(today)
//오늘날짜에서 15일 이후
today.setDate(today.getDate()+15);
console.log(today)

//출생일에서 3000일 기념일
let mybirth = new Date(1992,8,25)  //내 생일 
console.log('나의 생일: '+ mybirth.toLocaleString())
mybirth.setDate(mybirth.getDate()+3000)
console.log('탄생 3000일 기념일: '+ mybirth.toLocaleString())

//실기문제 : 오늘날짜를 년도 4자리, 월2자리, 일2자리
const today2 = new Date();
const year = today2.getFullYear();
const month = today2.getMonth()+1;
const day = today2.getDate();
console.log(year.toString()+month.toString().padStart(2,0)+day.toString().padStart(2,0))

const month2 = (today2.getMonth()+1).toString().padStart(2,0);
const day2 = today2.getDate().toString().padStart(2,0);
//필요한 값으로 배열을 만들고 join 메소드로 연결시켜 문자열을 생성 (연결기호는 없으므로 '')
console.log([year,month2,day2].join(''))
console.log([year,month2,day2].join('-'))
//기억하기 : 배열 -> 문자열 join,  문자열->배열로 split

console.log(new Date('2022-03-03'))
console.log(new Date('2022-03-06')-new Date('2022-03-03'))  //결과는 타임스탬프(timestamp)값
let diff = new Date('2022-03-06')-new Date('2022-03-03');
const oneday_timestamp = 1*24*60*60*1000;
console.log(oneday_timestamp)
console.log(diff/oneday_timestamp)  //두 날짜의 간격을 '일'로 구한다.