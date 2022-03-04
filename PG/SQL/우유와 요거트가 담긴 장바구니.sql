SELECT DISTINCT CART_ID
FROM CART_PRODUCTS
WHERE CART_ID IN
    (SELECT CART_ID
    FROM CART_PRODUCTS
    WHERE NAME = "Milk")
AND CART_ID IN
    (SELECT CART_ID
    FROM CART_PRODUCTS
    WHERE NAME = "Yogurt");

select cart_id
from cart_products
where name in ('Milk', 'Yogurt')
group by cart_id
having group_concat(distinct(name)) = 'Milk,Yogurt'