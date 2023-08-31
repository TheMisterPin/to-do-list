import React, { useState } from "react";
import { v4 as uuidV4 } from "uuid";
import {  Button, Modal  } from "antd"


function ListHeader({ setTodos, todos, list, setList, listTitle, setListTitle}) {
  const onInputChange = (event) => {
  
    setListTitle(event.target.value);
  
  };
  const newListHandler = () => {
    const newList = [...list, { id: uuidV4(), todos: todos, listTitle }];
    setList(newList);   
    setTodos([""])
  };


      //Modal
      const [isModalOpen, setIsModalOpen] = useState(false);
      const showModal = () => {
        setIsModalOpen(true);
      };
      const handleOk = () => {
        setIsModalOpen(false);
        newListHandler();
      };
      const handleCancel = () => {
        setIsModalOpen(false);
      };


  return (
<>      <div> <h2>{listTitle}</h2>
<Button type="primary" onClick={showModal} className="newList btn" >
 create new list 
</Button>
      </div>



<Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
 <input
 placeholder="pick a title" 
 type="text"
 value={listTitle} 
 required 
 onChange={onInputChange}
 />
</Modal>
<ul className="todo-list">
  {list.map(item => (
    <li key={item.id}>{item.listTitle}</li>
  ))}
</ul>

</>
  );
}

export default ListHeader;




