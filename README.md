# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React applications: creating an infinite loop within a `useEffect` hook.  The bug occurs because the state is updated within the effect, which triggers a re-render, causing the effect to run again, and the cycle repeats endlessly.

## Bug Description
The `useEffect` hook is intended to perform side effects, but if the effect itself changes the state, it can cause an infinite loop.  The provided example demonstrates how improper use of `setCount` creates this issue.

## Solution
The solution involves carefully considering the effect's dependencies and implementing a conditional check or preventing direct state updates within the effect.  The updated code provides a corrected version by introducing a conditional to prevent this infinite loop.

## How to Reproduce
1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Observe the error.  The counter will continuously increment until the browser crashes (or you stop the application).

## How to Solve
Look at the `bugSolution.js` file for the fix!