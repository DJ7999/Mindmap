import React, { useState, useRef, useEffect } from 'react';
import './SKEditor.css'; // Import the CSS file for the component
const SKpreview = ({ content, setEdit,updatenode,node,setskeditrenderfirst}) => {
  const previewRef = useRef(null);
  useEffect(() => {
    previewRef.current.innerHTML = node === undefined || node === null ? "" : node.data;
  });
  return (
    <div className="sk-preview" ref={previewRef} onClick={()=>{setEdit();updatenode(node);setskeditrenderfirst(true)}} style={{
      wordWrap: 'break-word',minHeight:"5px", height:"auto", minWidth:"5px",width:"auto", maxWidth:"300px",maxHeight:"300px",
      overflow: 'auto'
    }}></div>
  )
};

export default SKpreview;