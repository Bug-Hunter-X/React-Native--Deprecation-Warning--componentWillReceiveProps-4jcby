The solution uses the `useEffect` hook for handling prop changes.  This approach is cleaner and avoids the deprecation warning.

```javascript
import React, { useEffect, useState } from 'react';

function MyComponent(props) {
  const [data, setData] = useState(props.data);

  useEffect(() => {
    setData(props.data);
  }, [props.data]);

  return (
    <div>
      {/* Render data */}
    </div>
  );
}

```
Alternatively, you can use `getDerivedStateFromProps` static method:
```javascript
static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.data !== prevState.data) {
      return { data: nextProps.data };
    }
    return null;
  }
```