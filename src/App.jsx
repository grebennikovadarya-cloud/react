import React, { useState } from 'react';
import HabitItem from './HabitItem';

function App() {
  const [habits, setHabits] = useState([
    { id: 1, name: 'Пить воду', icon: '💧', completedDays: [0, 1, 2] },
    { id: 2, name: 'Читать книгу', icon: '📚', completedDays: [0, 3] },
    { id: 3, name: 'Спорт', icon: '🏃', completedDays: [] },
  ]);

  const [newName, setNewName] = useState('');
  const [newIcon, setNewIcon] = useState('⭐');

  const handleAdd = (e) => {
    e.preventDefault();
    if (newName.trim() === '') return;

    const newHabit = {
      id: Date.now(),
      name: newName,
      icon: newIcon || '⭐',
      completedDays: []
    };

    setHabits([...habits, newHabit]);
    setNewName(''); 
    setNewIcon('⭐');
  };

  const handleDelete = (id) => {
    setHabits(habits.filter(habit => habit.id !== id));
  };

  const handleEdit = (id, newName, newIcon) => {
    setHabits(habits.map(habit => 
      habit.id === id ? { ...habit, name: newName, icon: newIcon } : habit
    ));
  };

  const handleToggleDay = (habitId, dayIndex) => {
    setHabits(habits.map(habit => {
      if (habit.id === habitId) {
        const isCompleted = habit.completedDays.includes(dayIndex);
        return {
          ...habit,
          completedDays: isCompleted 
            ? habit.completedDays.filter(d => d !== dayIndex) 
            : [...habit.completedDays, dayIndex] 
        };
      }
      return habit;
    }));
  };

  const handleReset = () => {
    if (window.confirm('Вы уверены, что хотите сбросить все отметки?')) {
      setHabits(habits.map(habit => ({ ...habit, completedDays: [] })));
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '700px', margin: '0 auto' }}>
      <h1>Трекер привычек</h1>
      
      <p style={{ fontSize: '18px', fontWeight: 'bold' }}>
        Всего привычек: {habits.length}
      </p>

      <form onSubmit={handleAdd} style={{ display: 'flex', gap: '10px', marginBottom: '20px', backgroundColor: '#e3f2fd', padding: '15px', borderRadius: '8px' }}>
        <input 
          value={newIcon} 
          onChange={(e) => setNewIcon(e.target.value)} 
          style={{ width: '50px', textAlign: 'center', fontSize: '18px' }}
          maxLength="2"
          title="Иконка (эмодзи)"
        />
        <input 
          placeholder="Название привычки..." 
          value={newName} 
          onChange={(e) => setNewName(e.target.value)} 
          style={{ flexGrow: 1, padding: '8px' }}
        />
        <button type="submit" style={{ padding: '8px 15px', cursor: 'pointer' }}>Добавить</button>
      </form>

      <div style={{ marginBottom: '20px', textAlign: 'right' }}>
        <button onClick={handleReset} style={{ padding: '8px 15px', cursor: 'pointer', backgroundColor: '#ffcdd2' }}>
          Сбросить все отметки
        </button>
      </div>

      <div>
        {habits.length === 0 && <p>У вас пока нет привычек. Добавьте первую!</p>}
        
        {habits.map(habit => (
          <HabitItem 
            key={habit.id} 
            habit={habit} 
            onDelete={handleDelete} 
            onToggleDay={handleToggleDay}
            onEdit={handleEdit}
          />
        ))}
      </div>
    </div>
  );
}

export default App;