import { useEffect, useState } from "react";
import { MdOutlineRingVolume } from "react-icons/md";

const Assignments = () =>{

//     const [text, setText] = useState('');
//     const str = "AB\tCD\nC BA"; // Input string to check

//     const Reverse = () => {
//         // Remove all spaces, tabs, and newlines, and convert to lowercase
//         const cleanedStr = str.replace(/\s+/g, '').toLowerCase();

//         // Reverse the cleaned string
//         const reversedStr = [...cleanedStr].reverse().join('');

//         console.log("Cleaned String:", cleanedStr);
//         console.log("Reversed String:", reversedStr);

//         // Check if the original cleaned string matches the reversed string
//         if (cleanedStr === reversedStr) {
//             setText("The string is a palindrome");
//         } else {
//             setText("The string is not a palindrome");
//         }
//     };

//     // Run Reverse function when the component mounts
//     useEffect(() => {
//         Reverse();
//     }, []);

//     return (
//         <div>
//             <h1>Palindrome Checker</h1>
//             <p>{text}</p>
//         </div>
//     );
// };

function fetchUserData(userIds) {
    console.log("userIds",userIds)
    let users = [];
    
    userIds.forEach((id) => {
        getUser(id, function(user) {

            users.push(user);
            console.log("users",users)

        });
    });
    console.log("userIds22", userIds.length)
    console.log("users222", users.length)

    // Check if all users were fetched
    if (users.length === userIds.length) {
        console.log('All users fetched:', users);
    } else {
        console.log('Not all users were fetched.');
    }
}
 
// Simulated async API call
function getUser(id, callback) {
    setTimeout(() => {
        callback({ id: id, name: 'User' + id });
    }, Math.random() * 1000);
}
 
// Example usage
let userIds = [1, 2, 3, 4, 5];
fetchUserData(userIds);
return (
            <div>
                <h1>Palindrome Checker</h1>
            </div>
        );
    }
    export default Assignments

