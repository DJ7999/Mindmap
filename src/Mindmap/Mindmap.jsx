import React, { useState, useRef, useEffect } from 'react';
import Paths from '../MindmapPath/Paths';
import MindmapTree from './MindmapTree';
/**
 * 
 * @param data data array of tree if you are using it for the first time please you can send variable with empty array
 * @param getUpdatedData you can send a function as a prop in return you will receive param which will have a updated array of data
 */
const Mindmap = ({ data ,getUpdatedData}) => {
    const [mindmap,setMindmap]=useState(data && data.length!==0?data:[{id:1,data:"",pid:null}])

    useEffect(()=>{
    let svgelement=document.getElementById("svg_frame")
    let mindmapelement=document.getElementById("mind_map")
    svgelement.style.height = mindmapelement.clientHeight;
    svgelement.style.width = mindmapelement.clientWidth;
    })
    const handleBold = () => {
        document.execCommand('bold', false, null);
    };

    const handleItalic = () => {
        document.execCommand('italic', false, null);
    };

    const handleUnderline = () => {
        document.execCommand('underline', false, null);
    };

    const handleLink = () => {
        const url = prompt('Enter the URL:');
        if (url) {
          document.execCommand('createLink', false, url);
        }
      };

    const handleUnlink = () => {
        document.execCommand('unlink', false, null);
    };

    const handleInsertImage = () => {
        const url = prompt('Enter the image URL:');
        if (url) {
            //document.execCommand('insertImage', false, url);
            const imageTag = `<img src="${url}" alt="Image" style={{ maxWidth: '50px', maxHeight: '50px', width: '50px', height: '50px' }} />&nbsp`;
            document.execCommand('insertHTML', false, imageTag);
        }
    };

    const deletenode=(node_tobe_deleted)=>{
        const new_mindmap=mindmap
        .filter((node)=>node.id!==node_tobe_deleted.id)
        .map((node)=>{
            if(node.pid===node_tobe_deleted.id){
                node.pid=node_tobe_deleted.pid;
            }
            return node;
        })
        setMindmap(new_mindmap);
    }

    const addnode=(parentnodeid)=>{
        const last_nodeid=mindmap[mindmap.length-1].id;
        const new_nodeid=last_nodeid+1;
        const new_mindmap=[...mindmap,{id:new_nodeid,data:"",pid:parentnodeid}];
        setMindmap(new_mindmap);
    }

    const updatenode=(node_tobe_updated)=>{
        const new_mindmap=mindmap.map((node)=>{
            return node.id===node_tobe_updated.id?node_tobe_updated:node;
        })
        setMindmap(new_mindmap);
    }

    return (<>
    
    <div style={{height:"100%",width:"100%", overflow:"auto",position:"relative"}}>
        <div id="mind_map" style={{position:"absolute"}}>
        <div className="sk-toolbar">
                    <button onClick={handleBold}>Bold</button>
                    <button onClick={handleItalic}>Italic</button>
                    <button onClick={handleUnderline}>Underline</button>
                    <button onClick={handleLink}>Link</button>
                    <button onClick={handleUnlink}>Unlink</button>
                    <button onClick={handleInsertImage}>Insert Image</button>
        </div>
            <MindmapTree
            mindmap={mindmap}
            parentId={null}
            updatenode={(node_tobe_updated)=>updatenode(node_tobe_updated)}
            deletenode={(node_tobe_deleted)=>deletenode(node_tobe_deleted)}
            addnode={(parentnodeid)=>addnode(parentnodeid)}
            />
        </div>
        <svg id="svg_frame" style={{width:"100%",height:"100%",display: "block",margin: "0"}}>
            <Paths mindmap={mindmap} parent={null}/>
        </svg>
        </div>
        {getUpdatedData!=undefined?<button onClick={()=>getUpdatedData(mindmap)}>submit</button>:null}
        </>
        
    )

}

export default Mindmap;