SELECT NAME
FROM ANIMAL_INS
ORDER BY DATETIME LIMIT 1;

SELECT NAME
FROM ANIMAL_INS
WHERE DATETIME =
(SELECT min(DATETIME)
FROM ANIMAL_INS);
# 다시 풀어보기