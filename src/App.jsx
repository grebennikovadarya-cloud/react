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

  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all'); 
  const [sortType, setSortType] = useState('default'); 

  const handleAdd = (e) => {
    e.preventDefault();
    if (newName.trim() === '') return;
    const newHabit = { id: Date.now(), name: newName, icon: newIcon || '⭐', completedDays: [] };
    setHabits([...habits, newHabit]);
    setNewName('');
    setNewIcon('⭐');
  };

  const handleDelete = (id) => setHabits(habits.filter(h => h.id !== id));
  
  const handleEdit = (id, newName, newIcon) => {
    setHabits(habits.map(h => h.id === id ? { ...h, name: newName, icon: newIcon } : h));
  };

  const handleMove = (id, direction) => {
    const currentIndex = habits.findIndex(h => h.id === id);
    if (currentIndex === -1) return;

    const newIndex = direction === 'up' ? currentIndex - 1 : currentIndex + 1;

    if (newIndex < 0 || newIndex >= habits.length) return;

    const newHabits = [...habits];
    const temp = newHabits[currentIndex];
    newHabits[currentIndex] = newHabits[newIndex];
    newHabits[newIndex] = temp;

    setHabits(newHabits);
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
    if (window.confirm('Сбросить все отметки?')) {
      setHabits(habits.map(habit => ({ ...habit, completedDays: [] })));
    }
  };

  const totalPossibleChecks = habits.length * 7;
  const totalChecks = habits.reduce((sum, habit) => sum + habit.completedDays.length, 0);
  const progressPercent = totalPossibleChecks === 0 ? 0 : Math.round((totalChecks / totalPossibleChecks) * 100);

  let visibleHabits = [...habits];

  if (searchQuery) {
    visibleHabits = visibleHabits.filter(h => h.name.toLowerCase().includes(searchQuery.toLowerCase()));
  }

  if (filterType === 'completed') {
    visibleHabits = visibleHabits.filter(h => h.completedDays.length > 0);
  } else if (filterType === 'uncompleted') {
    visibleHabits = visibleHabits.filter(h => h.completedDays.length === 0);
  }

  if (sortType === 'az') {
    visibleHabits.sort((a, b) => a.name.localeCompare(b.name)); 
  } else if (sortType === 'za') {
    visibleHabits.sort((a, b) => b.name.localeCompare(a.name)); 
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Трекер привычек 2.0</h1>

      <div style={{ marginBottom: '20px', background: '#eee', borderRadius: '10px', overflow: 'hidden', height: '25px' }}>
        <div style={{ 
          width: `${progressPercent}%`, 
          backgroundColor: '#4caf50', 
          height: '100%', 
          color: 'white', 
          textAlign: 'center',
          lineHeight: '25px',
          transition: 'width 0.3s ease'
        }}>
          {progressPercent}%
        </div>
      </div>

      <div style={{ display: 'flex', gap: '10px', marginBottom: '15px', flexWrap: 'wrap' }}>
        <input 
          placeholder="Поиск..." 
          value={searchQuery} 
          onChange={(e) => setSearchQuery(e.target.value)} 
          style={{ padding: '8px', flexGrow: 1 }}
        />
        
        <select value={sortType} onChange={(e) => setSortType(e.target.value)} style={{ padding: '8px' }}>
          <option value="default">Без сортировки</option>
          <option value="az">По алфавиту (А-Я)</option>
          <option value="za">По алфавиту (Я-А)</option>
        </select>

        <select value={filterType} onChange={(e) => setFilterType(e.target.value)} style={{ padding: '8px' }}>
          <option value="all">Все</option>
          <option value="completed">Выполненные</option>
          <option value="uncompleted">Невыполненные</option>
        </select>
      </div>

      <form onSubmit={handleAdd} style={{ display: 'flex', gap: '10px', marginBottom: '20px', backgroundColor: '#e3f2fd', padding: '15px', borderRadius: '8px' }}>
        <input value={newIcon} onChange={(e) => setNewIcon(e.target.value)} style={{ width: '50px', textAlign: 'center' }} maxLength="2" />
        <input placeholder="Название..." value={newName} onChange={(e) => setNewName(e.target.value)} style={{ flexGrow: 1, padding: '8px' }} />
        <button type="submit" style={{ padding: '8px 15px', cursor: 'pointer' }}>Добавить</button>
      </form>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <span>Всего привычек: <b>{habits.length}</b></span>
        <button onClick={handleReset} style={{ cursor: 'pointer', backgroundColor: '#ffcdd2' }}>Сбросить отметки</button>
      </div>

      <div>
        {visibleHabits.length === 0 && <p>Ничего не найдено.</p>}
        
        {visibleHabits.map(habit => (
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