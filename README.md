# React Native Deprecation Warning: componentWillReceiveProps

This repository demonstrates a common error in React Native applications: the use of the deprecated `componentWillReceiveProps` lifecycle method.  This method is no longer recommended and can lead to unexpected behavior, including infinite update loops.

## Problem

The `bug.js` file contains code that uses `componentWillReceiveProps` to update the component's state based on changes in props. This approach is problematic because it can lead to uncontrolled re-renders and performance issues.

## Solution

The `bugSolution.js` file provides a corrected version using the recommended `getDerivedStateFromProps` static method or `useEffect` hook.  These methods offer a more controlled and efficient way to handle prop changes.

## How to Reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run the application (using appropriate React Native commands).
4. Observe the console warnings and the application's behavior.

## Note

Always refer to the latest React Native documentation for the most up-to-date best practices.