import { useEffect, useState } from "react";
import { MdOutlineRingVolume } from "react-icons/md";

const Assignment = () =>{

    const [text, setText] = useState('');
    const str = "AB\tCD\nC BA"; // Input string to check

    const Reverse = () => {
        // Remove all spaces, tabs, and newlines, and convert to lowercase
        const cleanedStr = str.replace(/\s+/g, '').toLowerCase();

        // Reverse the cleaned string
        const reversedStr = [...cleanedStr].reverse().join('');

        console.log("Cleaned String:", cleanedStr);
        console.log("Reversed String:", reversedStr);

        // Check if the original cleaned string matches the reversed string
        if (cleanedStr === reversedStr) {
            setText("The string is a palindrome");
        } else {
            setText("The string is not a palindrome");
        }
    };

    // Run Reverse function when the component mounts
    useEffect(() => {
        Reverse();
    }, []);

    return (
        <div>
            <h1>Palindrome Checker</h1>
            <p>{text}</p>
        </div>
    );
};

    export default Assignment

