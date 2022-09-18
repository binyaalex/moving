import React, { useState } from "react";

const Item = (props) => {
  
    const [NumbersOfItems, setNumbersOfItems] = useState(0);

    const addItem = (e) => {
        setNumbersOfItems(NumbersOfItems + 1)
        // const item = e.target.parentElement.parentElement ;
        // item.classList.add('paidServiceSquareDivActive')
    }

    const lessItem = () => {
        if (NumbersOfItems > 0) {            
            setNumbersOfItems(NumbersOfItems - 1)
        }
    }

    let itemClassName = 'paidServiceSquareDiv'
    if (NumbersOfItems > 0) {
        itemClassName = 'paidServiceSquareDiv paidServiceSquareDivActive'
    } else {
        itemClassName = 'paidServiceSquareDiv'
    }


    return (
        <div className={itemClassName} key={props.key}>
            <img onClick={addItem} className="paidServiceSquareImg" src={props.img} alt="aa" />
            <div className="addItemDiv" >
                <button onClick={lessItem} className="minusItem">-</button>
                <div className="NumbersOfItems">{NumbersOfItems}</div>
                <button onClick={addItem} className="minusItem">+</button>
            </div>
            <div className="addItemDiv" >
                <div className="disassembly" >
                    <label>פירוק</label>
                    <input type='checkbox' />
                </div>
                <div className="disassembly" >
                    <label>הרכבה</label>
                    <input type='checkbox' />
                </div>
            </div>
            <div id="paidServiceSquareTitle">{props.title}</div>
        </div>
    );
};

export default Item;
