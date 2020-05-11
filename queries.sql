-- Database Queries

-- Find all customers with postal code 1010
select *
from customers
where PostalCode
is 1010;
-- Find the phone number for the supplier with the id 11
select Phone
from suppliers
where supplierId
is 11 ;
-- List first 10 orders placed, sorted descending by the order date
select *
from orders
order by orderDate desc;
-- Find all customers that live in London, Madrid, or Brazil
SELECT *
FROM Customers
WHERE (City) IN ('Madrid','London') or Country = 'Brazil';

-- Add a customer record for "The Shire", the contact name is "Bilbo Baggins" the address is -"1 Hobbit-Hole" in "Bag End", postal code "111" and the country is "Middle Earth"
insert into customers
    (customerName, contactName, [address], City, postalCode, Country)
values('The Shire', 'Fredo Baggins', '1 hobbit hole', 'Bag End', '111', 'Middle Earth')
-- Update Bilbo Baggins record so that the postal code changes to "11122"
update customers set PostalCode = 111222 where contactName = 'Fredo Baggins';

-- 

select *
from customers
where contactName = 'Fredo Baggins';


-- (Stretch) Find a query to discover how many different cities are stored in the Customers table. Repeats should not be double counted
select count(city)
from customers;

*92*


-- (Stretch) Find all suppliers who have names longer than 20 characters. You can use `length(SupplierName)` to get the length of the name
