import { useEffect } from "react"

function App() {
  useEffect(() => {
    fetch("/movies")
    .then(r => r.json())
    .then(movies => console.log(movies))
  })
  return (
    <h1>Hello from React front end application</h1>
  );
}

export default App;
