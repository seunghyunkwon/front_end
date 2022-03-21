/*
문자열 메소드
*/

/*문자열 부분 추출하기
    slice(start,end)
    substring(start,end)
    substr(start,end)
*/
let str = "Apple, Banana, Kiwi";
//slice()에 대한 부분 추출하기
console.log(str.slice(7,13));   //Banana
//0번째 부터 시작 (A) 13번째에서 끝 (,)  *END 입력 부분은 출력되지 않는다.
console.log(str.slice(-12,-6)); //Banana
//문장의 끝에서부터 -숫자만큼 이동 후 입력된 범위 내에서 문자열을 추출한다. 
console.log(str.slice(7));      //Banana, Kiwi
//7번째부터 끝까지 실행된다.
console.log(str.slice(-12));    //Banana, Kiwi
//끝에서부터 -12번 째부터 문장의 끝까지 실행된다.

//substring()에 대한 부분 추출하기
console.log(str.substring(7,13));   //Banana
//slice()와 같은 결과값을 갖는다. 단 substring의 경우 음수인덱스에 대한 값을 제공하지 않는다.

//substr()에 대한 부분 추출하기 *왜 줄이 가있는지 모르겠지만 성격만 파악
console.log(str.substr(7));     //Banana, Kiwi
//7번째 인덱스 위치부터 실행
console.log(str.substr(7,10));  //Banana, Ki
//7번째 인덱스 위치부터 실행해서 실행된 인덱스 위치의 10번째 인덱스 위치가 end(출력안됨)까지 실행
console.log(str.substr(-4));    //Kiwi
//문장의 마지막부터 실행

/*
문자열 내용 바꾸기 replace()의 특징
- 문자열을 변경하지 않는다.
- 새 문자열을 반환한다.
- 첫 번째 일치 항목만 대체한다.
- 전체 일치 항목을 바꾸려면 별도의 정규식 /인자/g 를 실행해야한다.
- 대소문자를 구분해야한다.
- 대소문자 구분을 하지않고 실행을 하려면 /인자/i 형태로 실행이 가능하다.
*/
let text = ("I want replace Mic and Mic");
console.log(text); //실행결과 : I want replace Mic and Mic
//첫 번째 일치 항목만 대체한다.
console.log(text.replace("Mic","W3S")); //실행결과 : I want replace W3S and Mic
console.log(text); //실행결과 : I want replace Mic and Mic
//대소문자를 구분해야한다.
console.log(text.replace("MIC","W3S")); //실행결과 : I want replace Mic and Mic
//별도의 정규식 /인자/i 형태로 대소문자 구분없이 실행이 가능하다.
console.log(text.replace(/MIC/i,"W3S")); //실행결과 : I want replace W3S and Mic
//별도의 정규식 /인자/g 형태로 일괄 변경이 가능하다.
console.log(text.replace(/Mic/g,"W3S")); //실행결과 : I want replace W3S and W3S

/*
문자열 대소문자 toUpperCase(), toLowerCase()
*/
let text1 = "Hello World!";
console.log(text1); //실행결과 : Hello World!
console.log(text1.toUpperCase()); //실행결과: HELLO WORLD!
console.log(text1.toLowerCase()); //실행결과: hello world!

/*
문자열 연결 concat();
*/
let text2 = "Hello";
let text3 = "World3!";
console.log(text2.concat(" ",text3));   //실행결과 : Hello World!
// text2("Hello") + " " + text3("World!") = "Hello World"!

/*
문자열 공백 지우기 trim(); 
 */
let text4 = "     Hello World4!     ";
console.log(text4.trim()); //실행결과 : Hello World4!

/*
padStart() : 예제 참고
*/
/*
padEnd() : 예제 참고
*/

/*
charAt() 원하는 인덱스 값 찾기
*/
let text5 = "Hello World!"
console.log(text5.charAt(0));   //실행결과 : H
console.log(text5.charAt(1));   //실행결과 : e

/*
charCodeAt() 원하는 인덱스 값 유니코드로 반환받기 
*/
let text6 = "Hello World!"
console.log(text6.charCodeAt(0));   //72
console.log(text6.charCodeAt(1));   //101
console.log(text6.charCodeAt(2));   //108



