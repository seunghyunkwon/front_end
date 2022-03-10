const fruit=["Banana", "Orange", "Apple", "Mango"];
fruit.sort();  // 1. 배열값들을 오름차순 정렬  -- 알파벳 순서
console.log(fruit)

fruit.reverse(); // 2. 내림차순 정렬(역순)
console.log(fruit)
const points=[40,100,1,5,25,10];

points.sort();      // 3. 정수값 배열 - 사전식 알파벳 순서
console.log(points)     //[1, 10, 100, 25, 40, 5]

points.sort(function(a,b){  //4. sort 메소드에 callback 함수 사용
    return a-b;  //a>b 일때는 양수, a<b 일때는 음수  a==b 일때는 0 리턴 -> 이 결과로 정렬
})
console.log(points) //위의 콜백함수를 적용하여 정렬한 결과  [1,5,10,25,40,100]

points.reverse()    //5. points.sort에서 적용된 콜백함수 정렬기준이 계속 적용
console.log('**'+points)
//값이 큰 순서에서 작은 순서로 하기

points.reverse(function(a,b){       //6. points 배열의 역순 callback함수 사용
    return a-b;
})
console.log(points) //  [100,40,25,10,5,1]

//배열에서 최대값, 최소값 찾기 Math.max.apply(~~), Math.min.apply(~~)

//객체 배열 정렬- 자바스크립트에서 객체 리터럴은 { } 기호로 표시
// {type:'BMW',year:2010}는 객체, 객체를 미리 클래스로 정의하지 않고 사용할 때 정의 (프로토타입)
const cars = [{type:'Volvo',year:2016},{type:'Saab',year:2001},{type:'BMW',year:2010}] //객체를 3개 참조하는 배열
cars.sort(function(a,b){     //a,b는 객체타입 변수
    return a.year-b.year;
})
console.log(cars[0])
console.log(cars[1])
console.log(cars[2])
