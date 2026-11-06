import React, { useState, useEffect } from 'react';

function DataFetcher() {
  const [userId, setUserId] = useState(1);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (posts.length === 0) {
      console.log("Монтирование компонента");
    } else {
      console.log("Обновление компонента");
    }

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
     
        const filteredPosts = data
          .filter(post => post.userId === userId)
          .slice(0, 5);
          
        setPosts(filteredPosts);
      } catch (error) {
        console.error("Ошибка при загрузке:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      console.log("Размонтирование компонента");
    };
  }, [userId]); 

  const handleIdChange = (e) => {
    setUserId(Number(e.target.value));
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', marginTop: '20px', borderRadius: '8px' }}>
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="user-select">Выберите ID пользователя: </label>
        <select id="user-select" value={userId} onChange={handleIdChange}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </select>
      </div>

      <h3>Посты пользователя #{userId}</h3>
      
      {loading ? (
        <p>Загрузка...</p>
      ) : (
        <ul>
          {posts.length > 0 ? (
            posts.map(post => (
              <li key={post.id}>{post.title}</li>
            ))
          ) : (
            <p>Посты не найдены.</p>
          )}
        </ul>
      )}
    </div>
  );
}

function DataFetcherContainer() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>Жизненный цикл компонента и useEffect</h2>
      
      <button 
        onClick={() => setIsVisible(!isVisible)}
        style={{ padding: '8px 16px', cursor: 'pointer', marginBottom: '10px' }}
      >
        {isVisible ? 'Скрыть компонент' : 'Показать компонент'}
      </button>

      {isVisible && <DataFetcher />}
    </div>
  );
}

export default DataFetcherContainer;