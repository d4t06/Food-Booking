import price from "./price.js";
export const INTEGER_FORMATER = new Intl.NumberFormat("en-us", {
   maximumFractionDigits: 1,
});
let isEdit = false;
export const handleDelete = (index, dispatch) => {
   dispatch({ type: "DELETE", payload: index });
};
export const handleAdd = (dispatch, nameRef, moneyReceiptRef) => {
   let isInludeValue = false;
   const nameEl = nameRef.current;
   const moneyReceiptEl = moneyReceiptRef.current;

   if (nameEl.value === "") {
      alert("Chưa điền tên");
      return;
   }

   let data = {
      name: nameEl.value,
      foods: "",
      key: "",
      moneyReceipt: moneyReceiptEl.value || 0,
   };
   const inputs = document.querySelectorAll(".food-value");
   inputs.forEach((input) => {
      if (!input.value) return;
      isInludeValue = true;
      const [key, value] = input.value.split("."); // vd: bun.1 => 'bun', '1'
      const [[label], quantity] = [input.labels, value];
      if (quantity == 0) return;
      data.foods += `${label.textContent}: ${quantity}, `;
      data.key += `${key}.${quantity},`;
   });

   if (!isInludeValue) {
      alert("Chưa chọn món");
      return;
   }

   dispatch({
      type: "ADD",
      payload: {
         ...data,
      },
   });
   moneyReceiptEl.value = 0;
   nameEl.value = "";
   handleClear(inputs);
   isEdit = false;
};
export const handleClear = (inputs) => {
   for (let input of inputs) {
      if (!!input.value) input.value = "";
   }
};

export const handleEdit = (index, todos, dispatch) => {
   if (isEdit) return;
   // xoa item
   handleDelete(index, dispatch);
   // gan ten
   document.getElementById("name-input").value = todos[index].name;
   //gan option
   const items = todos[index].key.split(",");
   items.forEach((item) => {
      if (!item.trim()) return;
      const [inputId, index] = item.split(".");
      //  xu li select option
      const inputEl = document.getElementById(inputId.trim());
      // console.log(inputEl, index);
      // return;
      inputEl.options[parseInt(index)].selected = true;
   });
   isEdit = true;
};

export const evaluate = (foods, moneyReceipt) => {
   const foodList = foods.split(",");
   let result = 0;
   foodList.forEach((item) => {
      if (!item.trim()) return;
      const [key, quantity] = item.split(".");
      result += price[key] * quantity;
   });
   if (moneyReceipt) {
      return `${INTEGER_FORMATER.format(moneyReceipt)} - ${INTEGER_FORMATER.format(result)}
       = ${INTEGER_FORMATER.format(moneyReceipt - result)}`;
   }
   return INTEGER_FORMATER.format(result);
};
