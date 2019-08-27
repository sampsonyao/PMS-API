
 # PMS-api
People management system api

Installation & configuration
1.NodeJS required 
2.Install expressjs framework
   npm install express
3.Make sure you have mysql installed 
4.Import database tables
5.Navigate project directory
6.Run npm start to launch the app.
7.Then, load http://localhost:3000/ in a browser to see the output

Api end points
BASE URL:http://localhost:3000/api/
1.View users
url:http://localhost:3000/api/users
method:GET, parameters:none

2.View user detail
url:http://localhost:3000/api/users/:id
method:GET, parameters:id(user id)

3.View members
url:http://localhost:3000/api/members/
method:GET, parameters:none

4.View member detail
url:http://localhost:3000/api/member/:id
method:GET, parameters:id(member id)

5.Add member 
url:http://localhost:3000/api/members/add
method:POST, parameters: first_name,last_name, email,  phone, gender, country, occupation, address, hobbies, comments, age, picture

6.Edit member 
url:http://localhost:3000/api/members/edit
method:POST, parameters:id(member id) first_name,last_name, email,  phone, gender, country, occupation, address, hobbies, comments, age, picture

7.Delete member 
url:http://localhost:3000/api/members/delete
method:POST, parameters:id(member id) 

8.View Groups
url:http://localhost:3000/api/groups
method:GET, parameters:none

9.Add Groups
url:http://localhost:3000/api/groups/add
method:POST, parameters:name, members(members'id)

10.Edit Group 
url:http://localhost:3000/api/groups/edit
method:POST, parameters:id(group id), name, members(members'id)

11.Assign people to Group 
url:http://localhost:3000/api/groups/assign
method:POST, parameters:id(group id), member_id(member'id)

12.Search members 
url:http://localhost:3000/api/members/search
method:POST, parameters:search(search keywords)

13.Search Groups 
url:http://localhost:3000/api/groups/search
method:POST, parameters:search(search keywords)
