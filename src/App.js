import React, { useState } from 'react';
import TodoList from './ToDoList'
import Button from '@material-ui/core/Button';
import LibraryAddCheckIcon from '@material-ui/icons/LibraryAddCheck';

const App = () => {
    const [inputList, setInputList] = useState("");
    const [items, setItems] = useState([]);
    const itemEvents = (event) => {
        setInputList(event.target.value);
    }
    const listOfItems = () => {
        setItems((oldItems) => {
            return [...oldItems, inputList];
        });
        setInputList('');
    }
    const deleteItem = (id) => {
        console.log("delete")
        setItems((oldItems) => {
            return oldItems.filter((arrElem, index) => {
                return index !== id;
            })
        })
    }
    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1>ToDo List </h1>
                    <br />
                    <input type="text" placeholder="Add a item" value={inputList} onChange={itemEvents} />
                    <button onClick={listOfItems} className="Ve">< LibraryAddCheckIcon /></button>
                    <ol>
                        {
                            items.map((itemval, index) => {
                                return <TodoList
                                    key={index}
                                    id={index}
                                    text={itemval}
                                    onSelect={deleteItem}
                                />;
                            })
                        }
                    </ol>
                </div>
            </div>
        </>
    )
};
export default App;