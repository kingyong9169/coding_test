SELECT o.ANIMAL_ID, o.NAME
FROM ANIMAL_INS i
JOIN ANIMAL_OUTS o
ON i.ANIMAL_ID = o.ANIMAL_ID
AND i.DATETIME > o.DATETIME
ORDER BY i.DATETIME;

SELECT o.ANIMAL_ID, o.NAME
FROM ANIMAL_INS i, ANIMAL_OUTS o
WHERE i.ANIMAL_ID = o.ANIMAL_ID
AND i.DATETIME > o.DATETIME
ORDER BY i.DATETIME;