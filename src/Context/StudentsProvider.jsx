import React, { createContext, useReducer, useContext, useRef } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE": {
      const { id, name, content } = action;
      return [
        ...state,
        {
          id,
          name,
          content,
        },
      ];
    }
    case "DELETE": {
      const { id } = action;
      return state.filter((item) => item.id !== id);
    }
  }
};

const StudentsStateContext = createContext();
const StudentsDispatchContext = createContext();
const StudentsIdContext = createContext();

export const StudentsProvider = ({ children }) => {
  const [students, dispatch] = useReducer(reducer, []);
  const nextId = useRef(1);

  return (
    <StudentsStateContext.Provider value={students}>
      <StudentsDispatchContext.Provider value={dispatch}>
        <StudentsIdContext.Provider value={nextId}>
          {children}
        </StudentsIdContext.Provider>
      </StudentsDispatchContext.Provider>
    </StudentsStateContext.Provider>
  );
};

export const useStudentsState = () => {
  return useContext(StudentsStateContext);
};

export const useStudentsDispatch = () => {
  return useContext(StudentsDispatchContext);
};

export const useStudentId = () => {
  return useContext(StudentsIdContext);
};
