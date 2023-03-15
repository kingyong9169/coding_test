function solution(routes) {
  routes.sort((a, b) => a[1] - b[1]); // n * log n
  let curCamera = routes[0][1];
  let answer = 1;

  for (let i = 1; i < routes.length; i++) {
    // n
    const [carIn, carOut] = routes[i];
    if (carIn <= curCamera) continue;
    curCamera = carOut;
    answer++;
  }

  return answer;
}

// 고속도로를 이용하면서 단속용 카메라를 한 번은 만나도록 카메라 설치
// 모든 차량이 한 번은 단속용 카메라를 만나도록 최소 몇 대의 카메라 설치

// 1 ~ 10000대
// 0 -> 진입, 1 -> 진출
// 진입/진출 지점에 카메라가 있어도 카메라를 만난 것
// -30000 ~ 30000

// 진출을 기준으로 오름차순 정렬
// 진출 지점에 카메라를 설치하고
// 다음 차량의 진입 지점이 현재 카메라 설치 지점보다 크면 해당 차량의 진출 지점에 카메라 설치
