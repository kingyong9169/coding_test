const gcd = (a, b) => a % b !== 0 ? gcd(b, a % b) : b;

function solution(w, h) { // 테스트 케이스 3 * 5, 5 * 6, 2 * 2 등으로 규칙 찾아서 해결 but 왜 최대공약수를 사용하는지는 의문
    return w * h - (w + h - gcd(w, h));
}