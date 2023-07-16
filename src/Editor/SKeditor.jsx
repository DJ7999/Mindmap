import React, { useState, useRef, useEffect } from 'react';
import './SKEditor.css'; // Import the CSS file for the component
import SKpreview from './skpreview';
import SKedit from './skedit';

const SKEditor = ({ node ,updatenode,deletenode,addnode}) => {
  const [skeditrenderfirst,setskeditrenderfirst]=useState(false);
  const [content, setContent] = useState(node !=undefined && node !=null?node.text:"");
  const [edit, setEdit] = useState(false);
  return (
    <div className="sk-editor" style={{height:"auto",width:"auto"}}>
      {
        edit ?
          <SKedit setContent={(param) => setContent(param)} content={{ content: content }} setEdit={(param) => setEdit(param)} updatenode={() => updatenode(node)} node={node} skeditrenderfirst={skeditrenderfirst} setskeditrenderfirst={(param)=>setskeditrenderfirst(param)}/>
          :
          <SKpreview content={{ c: content }} setEdit={() => setEdit(true)} updatenode={() => updatenode(node)} node={node} setskeditrenderfirst={(param)=>setskeditrenderfirst(param)}/>
      }

    </div>
  );
};

export default SKEditor;