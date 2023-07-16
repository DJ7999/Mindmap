import React, { useState, useRef, useEffect } from 'react';
import SKEditor from '../Editor/SKeditor';
const TextBox=({node,updatenode,deletenode,addnode})=>{
    const [initialValue,setinitialValue]=useState("");
    const divref=useRef();
    
    useEffect(()=>{
        setinitialValue(node.text);
        function handleresize(){
            if(JSON.stringify(node.coordinates)!=JSON.stringify(divref.current.getBoundingClientRect())){
                node.coordinates=divref.current.getBoundingClientRect();
                updatenode(node);
            }
        }
        handleresize();
        
    })
    return (
        <>
        
        <div ref={divref} style={{
          justifyContent: "center",
          margin: "10px 50px",
          alignItems: "center",
          display: "flex",height:"auto",width:"auto",backgroundColor: 'white'
        }}>
        {/* <input
        
        type="text"
        onChange={(e)=>{
            setinitialValue(e.target.value)
            node.text=e.target.value
        }} */}
        
        {/* /> */}
        <SKEditor       node={node}  
                        updatenode={(node_tobe_updated)=>updatenode(node_tobe_updated)}
                        deletenode={(node_tobe_deleted)=>deletenode(node_tobe_deleted)}
                        addnode={(parentnodeid)=>addnode(parentnodeid)}/>
        <h1 onClick={()=>{
            addnode(node.id);
            node.showChildren=true;
        }}>+</h1>
        {node.pid!==null?
        <h1 onClick={()=>deletenode(node)}>-</h1>:null}
        </div></>
    )
}
export default TextBox