export const userReducer = (state, action) => {
    switch (action.type) {
      case 'LOGIN':
        return { ...state, user: action.data, isCreateTodoVisible: true };
      case 'REGISTER':
        return { ...state, user: action.data, isCreateTodoVisible: true };
      case 'LOGOUT':
        return { ...state, user: '', isCreateTodoVisible: false };
      default:
        return state;
    }
  };
  