import React from "react";

const QuantityDropDown = (props) => {
  // const onQuantityDropdownChange = (event) => {
  //   props.onQuantityUnlimited(event.target.value);
  // };
  console.log('quantity', props);
  return (
    <>
      <select
        className={props.classname}
        onChange={(e) =>
          props.setcartSummaryResponse((prevState) => ({
            ...prevState,
            unlimited: {
              quantity: e.target.value,
            },
          }))
        }
      >
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
    </>
  );
};

export default QuantityDropDown;
