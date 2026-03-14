import { useState } from 'react'

function FetchData() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [fetched, setFetched] = useState(false)

  const fetchPosts = () => {
    setLoading(true)
    setError(null)
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
      .then(res => {
        if (!res.ok) throw new Error(`HTTP error ${res.status}`)
        return res.json()
      })
      .then(data => {
        setPosts(data)
        setFetched(true)
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
  }

  return (
    <div className="card">
      <h2>Fetch Data</h2>
      <p>Practice: <code>useEffect</code>, <code>fetch</code>, async data loading</p>
      {!fetched && (
        <button onClick={fetchPosts} disabled={loading}>
          {loading ? 'Loading…' : 'Load Posts'}
        </button>
      )}
      {error && <p className="error">Error: {error}</p>}
      {fetched && (
        <>
          <ul className="post-list">
            {posts.map(post => (
              <li key={post.id}>
                <strong>{post.title}</strong>
                <p>{post.body}</p>
              </li>
            ))}
          </ul>
          <button className="secondary" onClick={() => { setPosts([]); setFetched(false) }}>
            Clear
          </button>
        </>
      )}
    </div>
  )
}

export default FetchData
