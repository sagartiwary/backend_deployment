
### A Social Media App

### Backend
  -- Multiple users should be able to register on the app
  -- while registering accept the following details
  name=>String
  email=>string
  gender=string
  password=string

  3- These users can create multiple posts
  4- Post will have the following details
   
   title=>string
   body=string
   device=string

   5- Only logged in users can do any of the CRUD operations
   6- A user can read, update and delete his/her posts only
   7- following routes should be there

   /users/register => to register a new user
   /users/login => for logging in generating a token
   /posts => This will show the posts of logged in users
   /posts/update => The logged in user can update his/her posts
   /posts/delete => The logged in user can delete his/her posts

   Following filtering functionlalities should also be there

   1 If the devicename is passed as query, then it should show only these posts from which user can see the posts 
   ex-> device=mobile ==> will give mobile posts only

   8- mongo atlas should be used.
   9- Relationships between posts and user should be managed


   ### Middleware
   Authetication middleware should be there to authenctication the user for all the 
   restricted routes.


   ### All the good practices while coding should be followed 
   1. Hashing the password
   2. JWT
   3. MVC
   4. .env for keeping crucial staff.


   ### Frontend
    Follwing pages should be there
    1. Home page
    2. Signup page
    3. Login page
    4. posts page ==> Only that user's posts should be visible who has logged in.
    5. A delete button should also be there, which will delete that particular post.
    6. Along with delete button, there should be an update button as well, which will
       take you to a form that will ask for things to be updated and once you fill
       them and click on the ok button, that particular post should be updated.

    7. There should be navbar as well which should be visible all the time
    8. A logout button should be there which will log out the user take you to posts 
      page and no posts should be visible then at posts page.
    9. A counter should be there at the top left corner which will show the number of
    posts ,a and once the user logs out should become 0.

