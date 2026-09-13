🧱 DevStack - Build Your Dream Tech Stack
A React-based web application that allows developers to browse various modern technologies—from frontend frameworks to database systems—and build their ideal project architecture by mixing and matching items into a personalized stack.

⚙️ Technologies Used
React.js

Vite

Tailwind CSS

DaisyUI

React-Toastify

✨ Key Features
Interactive Tech Grid: Browse 15 different technologies categorized by Frontend, Backend, DevOps, and more.

Custom Stack Builder: Add your favorite technologies to a personalized "Your Stack" sidebar panel, with the ability to remove single items or clear the entire stack at once.

Smart Validation & Alerts: Real-time toast notifications alert you when an item is successfully added, removed, or if you attempt to add a duplicate technology.

📝 React Concepts (Q&A)
1. What is JSX, and why is it used in React?
JSX is a syntax that lets us write HTML directly inside our JavaScript. It is used in React because it makes building UI components much easier to read and write.

2. What is the difference between props and state?
Props are read-only data passed from a parent to a child component. State is local, changeable data managed inside the component itself.

3. What does the useState hook do, and where did you use it in this project?
useState lets a component remember and update its own data. I used it to store the fetched technologies and the list of items added to the user's stack.

4. What does the useEffect hook do, and why did you need it to load the JSON data?
useEffect allows us to run side tasks like fetching data. I used it to load the JSON data exactly once when the website first loads.

5. Why does every item in a .map() list need a unique key prop?
React uses the unique key to easily track which specific list items are added, changed, or removed without reloading the whole list.

6. What is conditional rendering? Show one place you used it.
Conditional rendering is showing different UI elements based on an if/else condition. I used it to display the "Your stack is empty" message when the user has 0 items selected.

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
A parent passes data down to a child using props. A child sends data back up by calling a function that the parent provided to it via props.