# INFO834_ProjChat

This is a school project, we didn't have time to complete it.
## Aims :
The goal was to create a chat server in which it is possible:
  - to create an account
  - to connect
  - to know who is connected
  - to have the history of the messages
  - to be able to make a chat with another user
 
## Used tools :
- Node.js
- Socket.io
- Mongo Atlas

## How to run : 
  1. Clone the repository:
git clone https://github.com/LolaDP/INFO834_ProjChat.git

  2. Go to the repository:
cd INFO834_ProjChat

  3. Install the dependencies (removed from Git repository):
npm install

  4. Go to https://www.mongodb.com/ and create an account
  
  5. Go to Organizations and click Create an Organization 
give it the name you want and choose MongoDB Atlas as Feature

  6. Click Create an Organisation and click New Project 
Name the Project and choose if you want to add your collaborators

  7. On the cluster tab do "build a cluster", choose the Free Version and create the cluster

  8. Create the database
click collection
click Add My Own Data
Name your database "message-database" and name your collection "messages" (you can delete it later)
Create 

  9. Get the link
Go to Database Access
Add New Database User
Enter your username and password and Add a user
Go back to Clusters and click Connect
Click "connect your application"
Copy the link and paste it in Server.js, line 5 in const mongoDB (be sure to replace <password> by your password and <dbname> by message-database in the link)
  
  10. In server.js line 6 get your path to access user.js and paste it in pathmodels
  
  11. Install Live Server 
  
  12.Open a terminal, run the server
node server.js
If everything went smoothly, you should see the message connected in your terminal
  
  12. Open connection.html with Live Server


