/*private user data! 

We'd never do this in real life of course, but just for practice 
let's pretend we're unethical web hackers and transform the data 
in the way Evil Corp. has requested. They're quite particular and
just want an array of users with a fullname and human readable
birthday.   

Write a function that maps through the current data and returns
a new an array of objects with only two properties: 
fullName and birthday. Each result in your 
array should look like this when you're done: 

{
    fullName: "Levent Busser", 
    birthday: "Fri Aug 20 1971"
}

Read about toDateString() for info on formatting a readable date. 

*/

import { users } from "./data.mjs";

const userDataTransformedData = (data) => {
  return data.map((user) => {
    return {
      fullName: user.name.first + " " + user.name.last,
      birthday: new Date(user.dob.date).toDateString(),
    };
  });
};

console.log(userDataTransformedData(users));
