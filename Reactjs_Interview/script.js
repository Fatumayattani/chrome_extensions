var riddles = [
  {
    "question": "What is the purpose of the React reconciliation algorithm?",
    "answer": "To efficiently update the DOM by minimizing the number of changes through a diffing process."
  },
  {
    "question": "How does the Context API differ from Redux?",
    "answer": "While both manage state, Context API is primarily for prop drilling and simpler state management, whereas Redux offers a more structured approach with middleware for complex state logic."
  },
  {
    "question": "Explain the significance of the 'key' prop in React lists.",
    "answer": "Keys help React identify which items have changed, are added, or are removed, enabling optimal rendering and efficient updates."
  },
  {
    "question": "How does useEffect manage side effects in functional components?",
    "answer": "useEffect runs after every render, allowing you to manage side effects like data fetching, subscriptions, and DOM manipulation, and it can also return a cleanup function."
  },
  {
    "question": "What is the difference between a controlled component and an uncontrolled component?",
    "answer": "Controlled components have their state managed by React, while uncontrolled components maintain their own state, usually through refs."
  },
  {
    "question": "Explain how to optimize performance in React applications using memoization.",
    "answer": "By using React.memo to prevent unnecessary re-renders of functional components, and useMemo or useCallback to memoize values and functions."
  },
  {
    "question": "What are render props, and how do they work in React?",
    "answer": "Render props are a technique for sharing code between components using a prop whose value is a function that returns a React element."
  },
  {
    "question": "What is the difference between shallow rendering and full rendering?",
    "answer": "Shallow rendering renders a component one level deep, allowing you to test component outputs without rendering child components, while full rendering renders the entire component tree."
  },
  {
    "question": "How can you prevent a component from re-rendering in React?",
    "answer": "By using shouldComponentUpdate in class components or React.memo in functional components to control when a component should update."
  },
  {
    "question": "What are hooks, and why were they introduced in React?",
    "answer": "Hooks are functions that let you use state and lifecycle features in functional components, introduced to simplify component logic and promote code reuse."
  },
  {
    "question": "Explain the significance of the useLayoutEffect hook.",
    "answer": "useLayoutEffect runs synchronously after all DOM mutations but before the browser has painted, useful for measurements and synchronizing UI with DOM changes."
  },
  {
    "question": "How does the useImperativeHandle hook work, and when would you use it?",
    "answer": "useImperativeHandle customizes the instance value that is exposed when using refs, allowing you to control what is exposed to parent components."
  },
  {
    "question": "What are the implications of using React's Concurrent Mode?",
    "answer": "Concurrent Mode allows React to work on multiple tasks simultaneously, enabling smoother user experiences by prioritizing updates and rendering in chunks."
  },
  {
    "question": "How does the concept of higher-order components (HOCs) enhance React's capabilities?",
    "answer": "HOCs allow you to reuse component logic by wrapping a component to enhance its functionality, promoting code reuse and separation of concerns."
  },
  {
    "question": "What is the purpose of the React Profiler API?",
    "answer": "To measure the performance of React applications by tracking component render times and identifying performance bottlenecks."
  },
  {
    "question": "How can you manage global state in a React application without using Redux?",
    "answer": "By utilizing the Context API combined with useReducer to create a central store for managing global state across components."
  },
  {
    "question": "What is the significance of the useDeferredValue hook introduced in React 18?",
    "answer": "useDeferredValue allows you to defer updates for less urgent state, enabling React to prioritize more critical updates, improving the user experience."
  },
  {
    "question": "Explain how you would implement lazy loading in a React application.",
    "answer": "Using React.lazy to dynamically import components only when needed, combined with Suspense to handle loading states."
  },
  {
    "question": "How do you handle errors in React components?",
    "answer": "By using Error Boundaries to catch JavaScript errors in child components and prevent them from crashing the entire application."
  },
  {
    "question": "What are the trade-offs of using a single-page application (SPA) with React?",
    "answer": "SPAs provide a smoother user experience and faster navigation, but they can lead to SEO challenges and require more complex routing and state management."
  },
  {
    "question": "How do you ensure accessibility in your React applications?",
    "answer": "By following ARIA guidelines, semantic HTML practices, and using tools like react-axe to identify accessibility issues."
  },
  {
    "question": "What is the purpose of the StrictMode component in React?",
    "answer": "To activate additional checks and warnings for its descendants, helping developers find potential problems in their applications."
  },
  {
    "question": "What are the differences between client-side rendering (CSR) and server-side rendering (SSR)?",
    "answer": "CSR renders content in the browser, leading to faster interactions post-initial load, while SSR renders content on the server, providing quicker initial load times but potentially slower interactions."
  },
  {
    "question": "How can you implement theming in a React application?",
    "answer": "By using Context API for theme state management and styled-components or CSS-in-JS libraries to apply styles based on the current theme."
  },
  {
    "question": "What is the role of the Fragment component in React?",
    "answer": "To group multiple children without adding extra nodes to the DOM, maintaining a cleaner structure."
  },
  {
    "question": "How does the concept of 'composition over inheritance' apply to React?",
    "answer": "In React, components can be composed together to build complex UIs, promoting reusability and flexibility over traditional inheritance models."
  },
  {
    "question": "What are the challenges of managing asynchronous operations in React?",
    "answer": "Challenges include handling race conditions, managing loading states, and ensuring proper cleanup of subscriptions or event listeners."
  },
  {
    "question": "What are the differences between the default export and named export in ES6 modules?",
    "answer": "Default export allows one export per module and can be imported with any name, while named export allows multiple exports and must be imported with the exact name."
  },
  {
    "question": "How do you prevent state updates on unmounted components?",
    "answer": "By using cleanup functions in useEffect or keeping track of the component's mounted state."
  },
  {
    "question": "What is the purpose of the useDebugValue hook?",
    "answer": "To display a label for custom hooks in React DevTools for easier debugging."
  }
];
 

  document.getElementById("next").addEventListener("click",()=>{let n=Math.floor(Math.random()*11);

  document.querySelector("#question").textContent= riddles[n].question; 
  document.querySelector(".output").textContent=" " ;
  document.getElementById("clickme").addEventListener("click",()=>{
    document.querySelector(".output").textContent=riddles[n].answer ;

    });

    });

