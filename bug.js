```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This will cause an infinite loop because the effect depends on the count,
    // which changes whenever the effect runs.  useEffect runs after every render,
    // and in this case, every render causes the count to be updated, and the effect is called again
    setCount(count + 1);
  }, []);

  return <div>Count: {count}</div>;
}
```