                               E-Commerce App
------------------------------------------------------------------------

-Tailwind Css in React
    use the guidline from the given link :https://tailwindcss.com/docs/guides/vite
-Dynamic routing : changing one path of url , use : symbol. We can setup a dynamic or changing value in a url along with : . So react app will understand value along with a : is dynamic part  of this URL.
-To set up Page Not Fount : Use path as * and its path must be set up at the end of URL
Redux
-------
download redux 
then create a folder redux for redux
 then create cartstore.js -- then create  configurestore
 then entire app should must be inside provider .here import provider ,cartstore in main.js

 use createAsyncThunk-this api Used to make asynchronous call in action .It has 2 argument.Firstly action type string("slice-name/action-name) ,secondly a callback function .it can return promise.components calls action. function that return promise .promise returning happened only extrareducer predefined method .it output can be 3 different types: pending state/fullfilled state ,rejected state .
 action execute useDispatch returning function. output goes to extrareducer

 ExtraReducer in slice can handle promise return action .Because it has add/define different  cases to update slice state  based on promise output .
 builder -has capabaility to define cases .
 reducer function : 1 state 2 action output it is a object .payload
 reducer - state 
 action executed components 
 

 Dynamic Value of a route 
 useParams(): return dynamic value of a route associsted with a component
 use selector : select state from redux stotre 
 useDispatch : used to dispatch action from component
 for search product 
 1- create a reducer  in productslice and export that action 
 2- in header dispatch ..then onchange in that input 