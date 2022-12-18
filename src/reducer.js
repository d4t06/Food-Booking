const SET_JOB = "SET";
const ADD_JOB = "ADD";
const DELETE_JOB = "DELETE";
// 1. initial state
// tạo ra hai state
const setJob = function (payload) {
   return {
      type: SET_JOB,
      payload,
   };
};
const addJob = (payload) => {
   return {
      type: ADD_JOB,
      payload,
   };
};
const deleteJob = (payload) => {
   return {
      type: DELETE_JOB,
      payload,
   };
};

// 3. reducer
const reducer = (state, { type, payload }) => {
   switch (type) {
      case ADD_JOB:
         if (payload.name === "") return state;
         return {
            todos: [
               ...state.todos,
               {
                  name: payload.name,
                  foods: payload.foods,
                  key: payload.key,
                  moneyReceipt: payload.moneyReceipt,
               },
            ],
         };

      case DELETE_JOB:
         if (state.todos.length === 1)
            return {
               todos: [],
            };
         state.todos.splice(payload, 1);
         return {
            ...state,
         };

      default:
         throw new Error("invalid action");
   }
};
export default reducer;
