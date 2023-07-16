import React, { useState, useRef, useEffect } from 'react';
import './SKEditor.css';
const SKedit = ({ setContent, content, setEdit,updatenode,node,skeditrenderfirst ,setskeditrenderfirst }) => {
    const editorRef = useRef(null);
    console.log(node)
    let editorContent = node.data

    useEffect(() => {
        editorRef.current.innerHTML = node.editdata === undefined || node.editdata === null ? "" : node.editdata;
        
    })

    // const handleBold = () => {
    //     document.execCommand('bold', false, null);
    // };

    // const handleItalic = () => {
    //     document.execCommand('italic', false, null);
    // };

    // const handleUnderline = () => {
    //     document.execCommand('underline', false, null);
    // };

    // const handleLink = () => {
    //     const url = prompt('Enter the URL:');
    //     if (url) {
    //       document.execCommand('createLink', false, url);
    //     }
    //   };

    // const handleUnlink = () => {
    //     document.execCommand('unlink', false, null);
    // };

    // const handleInsertImage = () => {
    //     const url = prompt('Enter the image URL:');
    //     if (url) {
    //         //document.execCommand('insertImage', false, url);
    //         const imageTag = `<img src="${url}" alt="Image" style={{ maxWidth: '50px', maxHeight: '50px', width: '50px', height: '50px' }} />&nbsp`;
    //         document.execCommand('insertHTML', false, imageTag);
    //     }
    // };

    const handleEditorInput = () => {
        editorContent = editorRef.current.innerHTML;
        node.editdata=editorContent
    };

    return (
        <>
            <div style={{ border: '1px solid black', padding: "3px",height:"auto",width:"400px",overflow:"auto" }}>
                {/* <div className="sk-toolbar">
                    <button onClick={handleBold}>Bold</button>
                    <button onClick={handleItalic}>Italic</button>
                    <button onClick={handleUnderline}>Underline</button>
                    <button onClick={handleLink}>Link</button>
                    <button onClick={handleUnlink}>Unlink</button>
                    <button onClick={handleInsertImage}>Insert Image</button>
                </div> */}
                <div
                    ref={editorRef}
                    contentEditable
                    className="sk-content"
                    onInput={handleEditorInput}
                    style={{height:"100px",width:"auto",overflow:"auto"}}
                >
                </div>
                <button onClick={() => {
                    node.data=editorContent;
                    setEdit(false)
                    updatenode(node)
                    setskeditrenderfirst(false)
                }}>submit</button>
                <button onClick={() => {setEdit(false);
                    node.editdata=node.data
                    updatenode(node);
                    setskeditrenderfirst(false)}} >cancel</button>
            </div>
        </>
    )
};

export default SKedit;