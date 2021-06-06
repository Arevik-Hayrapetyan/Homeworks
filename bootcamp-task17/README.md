# Description
- In this folder solving following tasks:
1. CoffeeShop
Properties:

name: a string (basically, of the shop)

menu: an array of items (of object type), with each item containing the item (name of the item), type
(whetherfood or a drink) and price.

orders: an empty array

Methods:

addOrder: adds the name of the item to the end of the orders array if it exists on the menu. Otherwise,
return "This item is currently unavailable!"

fulfillOrder: if the orders array is not empty,return "The {item} is ready!". If the orders array is
empty,return "All orders have been fulfilled!"

 listOrders: returns the list of orders taken, otherwise, an
empty array.

dueAmount: returns the total amount due forthe orders taken.

cheapestItem: returns the name of the cheapest item on the menu.

drinksOnly:  returns only the item names of type drink from the menu.

foodOnly: returns only the item names of type food from the menu.
 
IMPORTANT:  Orders are fulfilled in a FIFO (first-in, first-out) order.


2. This challenge is an English twist on the Japanese word game Shiritori. The basic premise is to follow two rules:
- First character of next word must match last character of previous word.
- The word must not have already been said.

3. Create an Author class and a Book class.

Author should have:

- fields
- name
- email
- gender
- methods
- getters for fields
- toString()
- Book should have:
- fields
- title
- author(Author)
- price
- quantity
- methods
- getters for fields
- setters forfields
- getProfit() - which calculates the profit from the book based on the price and quantity.
- toString()