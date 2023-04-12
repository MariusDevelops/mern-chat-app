React.Js Node.Js App Final Project
Due April 17, 2023 11:59 PM
Instructions
// Functionality:

Register Page:
[]Create user (register)
Login Page:
[]Login with existing user
Profile:
[]Update logged user photo
[]Update logged user name
[]Update Logged User password
All Users Page:
[]Preview All users in app
Single User Profile:
[]Preview single user profile
[]Send message to other users
Conversations Page:
[]Preview all conversations
[]Delete conversation

// Pages

Register

[x]page in which user are registered. New user should provide his username, two passwords

[]Validate these fields:
[]username - min length 4, max length 20
[]password - min 4, max 20, upper case letter should be included, special symbol should be included (!@#$%^&\*\_+)
[]two users with same username can't be registered
[]Make sure validation errors is displayed
[]When user is registered successfully, he is navigated to login page

Login

[x]user login with his credentials (username, password)
[]If user does not exist, message should be displayed

[]When user logs in he is navigated to Profile page

[]When user logs in Toolbar should show three more links - Profile and All Users and Conversations

Profile

[]in this page user can change his profile picture
[]in this page user can change his password
[]in this page user can see his username (can't change if name is already used)

All users

[]in this page all users is shown in list
[]each user card should have username, user photo
[]when user card is clicked it should navigate to this particular user profile

Particular user profile /user/:username

[]in this page user info is shown - username, photo
[]in from this page you can send message to user

Conversations (link should show how many active conversations you have)

[]in this page you can see all conversations you having
[]when someone sends you new message it appears in this page as new conversation
[]user should be able to delete conversation (delete it for both users)
[]in this page you can open one of conversations to send message (or open conversation in new route like /chat/:conversationId)

Chat Page

[]In this page you can send messages
[]Also in this page you can like messages which was send by other user (you can't like your own messages)
[]In chat when user sends message, his photo and his username should be displayed
[]Also each message sent should display time

// TECHNOLOGIES TO USE
[x]Rreact.js -, Redux, React Router
[x]Node.js - router, controllers, middleware
[x]Database - you choice, use SQL or NoSQL (mongodb)