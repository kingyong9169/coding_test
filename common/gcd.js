const gcd = (a, b) => a % b !== 0 ? gcd(b, a % b) : b; // 최대공약수 : 유클리드 호제법
const lcm = (a, b) => a * b / gcd(a, b); // 최소공배수