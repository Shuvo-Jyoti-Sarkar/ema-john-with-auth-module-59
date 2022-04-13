/* 
* 1. create a new firebase project in console.firebase.google.com
* 2. npm install firebase
* 3. import firebase.init.js and import getAuth to export auth
* 4. Firebase settings > Authentication > enable Email and Password auth
* 5. Create components: Login,SignUp and setup routes
* 6. Attach form field handler and form submit handler
* 7. npm install --save react-firebase-hooks
* 8. useCreateUserWithEmailAndPassword from react-firebase-hooks
* 9. if user is created redirect to the expected page
*10. useSignInWithEmailAndPassword for log in
*11. Create requireAuth component ==> check user exists also track user location
*12. In Route wrap protected component by using requireAuth component
*/


/* 
*** Firebase Hosting steps:
* 1. npm install -g firebase-tools
* 2. firebase login
* 3. firebase init
* 4. firebase deploy
* 
*/