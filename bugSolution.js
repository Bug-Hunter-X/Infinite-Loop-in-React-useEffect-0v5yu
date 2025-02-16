```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct implementation: only update the count once
    let didMount = useRef(false);
    if (!didMount.current) {
      setCount(count + 1);
      didMount.current = true;
    }
  }, []);

  return <div>Count: {count}</div>;
}
```