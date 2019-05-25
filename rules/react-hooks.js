module.exports = {
  rules: {
    /**
     * Checks rules of Hooks
     * 
     * Rules:
     * 
     * 1. Only call hooks at the top level. Do not call 
     *    hooks inside loops, conditions, or nested functions.
     * 2. Only call hooks from React functions.
     *    Don't call hooks from regular JavaScript functions.
     * 
     * @see
     * https://reactjs.org/docs/hooks-rules.html
     */
    "react-hooks/rules-of-hooks": "error",
    /**
     * Checks for state closure pitfalls by verifying the list of 
     * dependencies for hooks
     * 
     * @see
     * https://github.com/facebook/react/issues/14920
     */
    "react-hooks/exhaustive-deps": "error"
  }
}
