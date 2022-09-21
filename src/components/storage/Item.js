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
            <div id="paidServiceSquareTitle">{props.title}</div>
            <div className="itemDetails" >

                <div className="addItemDiv" >
                    <div className="disassembly" >
                        <input type='checkbox' />
                        <label>פירוק</label>
                    </div>
                    <div className="disassembly" >
                        <input type='checkbox' />
                        <label>הרכבה</label>
                    </div>
                </div>
                <h1 className="addItemDiv">{NumbersOfItems}</h1>

                <div className="addItemDiv" >
                    <button onClick={addItem} className="plusMinus">+</button>
                    <button onClick={lessItem} className="plusMinus">-</button>
                </div>

            </div>
        </div>
    );
};

export default Item;
