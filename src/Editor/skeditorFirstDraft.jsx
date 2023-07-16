import React, { useState, useRef, useEffect } from 'react';
import './SKEditor.css'; // Import the CSS file for the component

const SKEditorf = ( ) => {
  const [content, setContent] = useState();
  const editorRef = useRef(null);
  const previewRef = useRef(null);

  useEffect(() => {
    previewRef.current.innerHTML = content;
  }, [content]);

  // const handleBold = () => {
  //   document.execCommand('bold', false, null);
  // };

  // const handleItalic = () => {
  //   document.execCommand('italic', false, null);
  // };

  // const handleUnderline = () => {
  //   document.execCommand('underline', false, null);
  // };

  const handleLink = () => {
    const url = prompt('Enter the URL:');
    if (url) {
      const linkText = prompt('Enter the link text:');
      const linkHTML = `<a href="${url}">${linkText || 'Click here'}</a>`;
      insertHTMLAtCaret(linkHTML);
    }
  };

  // const handleUnlink = () => {
  //   document.execCommand('unlink', false, null);
  // };

  const handleInsertImage = () => {
    const url = prompt('Enter the image URL:');
    if (url) {
      const imageTag = `<img src="${url}" alt="Image" />`;
      insertHTMLAtCaret(imageTag);
    }
  };

  const handleEditorInput = () => {
    const editorContent = editorRef.current.innerHTML;
    setContent(editorContent);
  };

  const insertHTMLAtCaret = (html) => {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const fragment = range.createContextualFragment(html);
    range.deleteContents();
    range.insertNode(fragment);
  };

  return (
    <div className="sk-editor">
      <div className="sk-toolbar">
        {/* <button onClick={handleBold}>Bold</button>
        <button onClick={handleItalic}>Italic</button>
        <button onClick={handleUnderline}>Underline</button> */}
        <button onClick={handleLink}>Link</button>
        {/* <button onClick={handleUnlink}>Unlink</button> */}
        <button onClick={handleInsertImage}>Insert Image</button>
      </div>
      <div
        ref={editorRef}
        contentEditable
        className="sk-content"
        onInput={handleEditorInput}
      ></div>
      <div className="sk-preview" ref={previewRef}></div>
    </div>
  );
};

export default SKEditorf;