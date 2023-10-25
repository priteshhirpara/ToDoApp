export const todoReducer = (state, action) => {
    switch (action.type) {
      case 'CREATE_TODO':
        return [...state, action.data];
      case 'TOGGLE_TODO':
        return state.map(todo =>
          todo === action.data ? { ...todo, complete: !todo.complete, dateCompleted: todo.complete ? null : Date.now() } : todo
        );
      case 'DELETE_TODO':
        return state.filter(todo => todo !== action.data);
      default:
        return state;
    }
  };
  