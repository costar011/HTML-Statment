const statement = () => {
  /**
   *
   * Statment (조건문)
   *
   *    - if 조건문
   *        = 만약 true라면, { * 내용 * }을 실행하는 코드이다.
   *        = 사용형식은
   *        if(조건식) {
   *            *내용*
   * }
   *
   *    [else if(조건식){ * 내용 * }]
   *    [else if(조건식){ * 내용 * }]
   *    [else if(조건식){ * 내용 * }]
   *
   *    [else { * 내용 * }]
   *
   *    - 삼항연산자
   *
   *        (조건식) ? true일 경우 : false일 경우
   *
   *
   */

  if (3 === 2) {
    console.log("네, 3은 3과 같습니다.");
  } else if (4 === 3) {
    console.log("네, 4는 4와 같습니다.");
  } else {
    console.log("다 올바르지 않음");
  }

  10 > 20 ? console.log("10이 더 큼") : console.log("10이 더 작음");
  // 조건식 ?     true일 경우         :     false일 경우
};

function init() {
  console.log("START INIT");

  statement();
}

init();
