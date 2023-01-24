// 26/9/2022 reducer
// 27/9/2022 useContext
import { useReducer, useRef, useState } from "react";
import classNames from "classnames/bind";

import reducer from "./reducer";
import styles from "./styles.css";
import { handleAdd, handleEdit, handleDelete, evaluate } from "./handleEvent";
const KEY = "HD Cafe";
const SET_JOB = "SET";
const ADD_JOB = "ADD";
const DELETE_JOB = "DELETE";
const cx = classNames.bind(styles);

const initState = {
   todos: JSON.parse(localStorage.getItem(KEY)) || [],
};

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

function TodoList() {
   const nameRef = useRef();
   const moneyReceiptRef = useRef();
   // chạy logger, đưa reducer vào logger
   const [state, dispatch] = useReducer(reducer, initState);
   const [money, setMoney] = useState("");
   const { todos } = state;

   const renderTasks = () => {
      return (
         <>
            {todos.map((task, index) => (
               <tr key={index}>
                  <td>{task.name}</td>
                  <td>{`${task.foods}`}</td>
                  {/* <td>{INTEGER_FORMATER.format(evaluate(task.key, 50000))}</td> */}
                  <td>{evaluate(task.key, task.moneyReceipt)}</td>
                  <td>
                     <button
                        className={cx("btn")}
                        style={{ marginLeft: "5px" }}
                        onClick={() => handleDelete(index, dispatch)}
                     >
                        Xóa
                     </button>
                     <button
                        className={cx("btn")}
                        style={{ marginLeft: "5px" }}
                        onClick={() => handleEdit(index, todos, dispatch)}
                     >
                        Sửa
                     </button>
                     {/* <button className={cx("btn")} style={{ marginLeft: "5px" }} onClick={() => evaluate(task.key)}>
                        Tinh tien
                     </button> */}
                     {/* <button onClick={() => handleEdit(index)}>Sua</button> */}
                  </td>
               </tr>
            ))}
         </>
      );
   };
   localStorage.setItem(KEY, JSON.stringify(todos));

   return (
      <div className={cx("main-container")}>
         {/* <button onClick={context.toggleTheme}>Change theme</button> */}
         {/* phải dem themeProvider ra cấp cao hơn để nhận được toggleTheme */}
         {/* <ThemeProvider> */}
         {/* <Content /> */}
         {/* </ThemeProvider> */}
         <form className={cx("form-booking")}>
            <p className={cx("label")}>
               Tên:
               <input ref={nameRef} id="name-input" />
            </p>

            <input id="food" type="checkbox" />
            <label htmlFor="food" className={cx("label")}>
               Gọi đồ ăn:
               {/* <FontAwesomeIcon icon={faChevronDown} /> */}
            </label>
            <form className={cx("food-section")}>
               <div className={cx("item")}>
                  <label htmlFor="bun">Bún</label>
                  <select id="bun" className="food-value">
                     <option value={""}>0</option>
                     <option value={"bun.1"}>1</option>
                     <option value={"bun.2"}>2</option>
                     <option value={"bun.3"}>3</option>
                     <option value={"bun.4"}>4</option>
                     <option value={"bun.5"}>5</option>
                     <option value={"bun.6"}>6</option>
                  </select>
               </div>
               <div className={cx("item")}>
                  <label htmlFor="mi">Mì</label>
                  <select id="mi" className="food-value">
                     <option value={""}>0</option>
                     <option value={"mi.1"}>1</option>
                     <option value={"mi.2"}>2</option>
                     <option value={"mi.3"}>3</option>
                     <option value={"mi.4"}>4</option>
                     <option value={"mi.5"}>5</option>
                     <option value={"mi.6"}>6</option>
                  </select>
               </div>
               <div className={cx("item")}>
                  <label htmlFor="banhcanh">Bánh canh</label>
                  <select id="banhcanh" className="food-value">
                     <option value={""}>0</option>
                     <option value={"banhcanh.1"}>1</option>
                     <option value={"banhcanh.2"}>2</option>
                     <option value={"banhcanh.3"}>3</option>
                     <option value={"banhcanh.4"}>4</option>
                     <option value={"banhcanh.5"}>5</option>
                     <option value={"banhcanh.6"}>6</option>
                  </select>
               </div>
               <div className={cx("item")}>
                  <label htmlFor="nui">Nui</label>
                  <select id="nui" className="food-value">
                     <option value={""}>0</option>
                     <option value={"nui.1"}>1</option>
                     <option value={"nui.2"}>2</option>
                     <option value={"nui.3"}>3</option>
                     <option value={"nui.4"}>4</option>
                     <option value={"nui.5"}>5</option>
                     <option value={"nui.6"}>6</option>
                  </select>
               </div>
               <div className={cx("item")}>
                  <label htmlFor="hutieumi">Hủ tiếu mì</label>
                  <select id="hutieumi" className="food-value">
                     <option value={""}>0</option>
                     <option value={"hutieumi.1"}>1</option>
                     <option value={"hutieumi.2"}>2</option>
                     <option value={"hutieumi.3"}>3</option>
                     <option value={"hutieumi.4"}>4</option>
                     <option value={"hutieumi.5"}>5</option>
                     <option value={"hutieumi.6"}>6</option>
                  </select>
               </div>
               <div className={cx("item")}>
                  <label htmlFor="hutieu">Hủ tiếu</label>
                  <select id="hutieu" className="food-value">
                     <option value={""}>0</option>
                     <option value={"hutieu.1"}>1</option>
                     <option value={"hutieu.2"}>2</option>
                     <option value={"hutieu.3"}>3</option>
                     <option value={"hutieu.4"}>4</option>
                     <option value={"hutieu.5"}>5</option>
                     <option value={"hutieu.6"}>6</option>
                  </select>
               </div>
            </form>
            <input id="drink" type="checkbox" />
            <label htmlFor="drink" className={cx("label")}>
               Gọi nước:
            </label>
            <form className={cx("drink-section")}>
               <div className={cx("item")}>
                  <label htmlFor="caphe">Cà phê</label>
                  <select id="caphe" className="food-value">
                     <option value={""}>0</option>
                     <option value={"caphe.1"}>1</option>
                     <option value={"caphe.2"}>2</option>
                     <option value={"caphe.3"}>3</option>
                     <option value={"caphe.4"}>4</option>
                     <option value={"caphe.5"}>5</option>
                     <option value={"caphe.6"}>6</option>
                  </select>
               </div>
               <div className={cx("item")}>
                  <label htmlFor="traduong">Trà đường</label>
                  <select id="traduong" className="food-value">
                     <option value={""}>0</option>
                     <option value={"traduong.1"}>1</option>
                     <option value={"traduong.2"}>2</option>
                     <option value={"traduong.3"}>3</option>
                     <option value={"traduong.4"}>4</option>
                     <option value={"traduong.5"}>5</option>
                     <option value={"traduong.6"}>6</option>
                  </select>
               </div>
            </form>
            <p className={cx("label")}>
               Nhận tiền:
               <input type="number" ref={moneyReceiptRef} id="money-input" step="10000" />
            </p>
         </form>
         <button className={cx("add-btn")} onClick={() => handleAdd(dispatch, nameRef, moneyReceiptRef)}>
            Thêm
         </button>
         <table
            style={{
               width: "100%",
               fontSize: "1rem",
            }}
         >
            {todos.length >= 1 && (
               <tr style={{ textAlign: "left" }}>
                  <th style={{ width: "25%" }}>Tên</th>
                  <th style={{ width: "55%" }}>Gọi</th>
                  <th style={{ width: "20%" }}>Tổng</th>
                  <th></th>
               </tr>
            )}
            {renderTasks()}
         </table>
      </div>
   );
}

export default TodoList;
