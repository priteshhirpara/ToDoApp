export const userReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.data, isCreateTodoVisible: true };
    case 'REGISTER':
      return { ...state, user: action.data, isCreateTodoVisible: true };
    case 'LOGOUT':
      return { ...state, user: '', isCreateTodoVisible: false };
    case 'INITIALIZE_TODOS':
      return Array.isArray(action.data) ? action.data.reverse() : state;
    case 'CREATE_TODO':
      return Array.isArray(state) ? [...state, action.data] : state;
    case 'TOGGLE_TODO':
      return Array.isArray(state)
        ? state.map((todo) =>
            todo === action.data
              ? { ...todo, complete: !todo.complete, dateCompleted: todo.complete ? null : Date.now() }
              : todo
          )
        : state;
    case 'DELETE_TODO':
      return Array.isArray(state) ? state.filter((todo) => todo !== action.data) : state;
    default:
      return state;
  }
};
