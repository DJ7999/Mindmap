import React, { useState, useRef, useEffect } from 'react';
import SKEditor from '../Editor/SKeditor';
import TextBox from './textbox';
const MindmapTree=({mindmap,parentId,updatenode,deletenode,addnode})=>{
    return (
        <div style={{display:"block"}}>
            {mindmap
                .filter((node)=>node.pid===parentId)
                .map((node)=>(
                    <div style={{display:"flex",alignItems:"center"}}>
                        <TextBox
                        node={node}
                        updatenode={(node_tobe_updated)=>updatenode(node_tobe_updated)}
                        deletenode={(node_tobe_deleted)=>deletenode(node_tobe_deleted)}
                        addnode={(parentnodeid)=>addnode(parentnodeid)}
                        />
                        {mindmap.filter((item)=>item.pid===node.id).length!==0?
                        <button style={{height:"auto"}} onClick={()=>{node.showChildren=!node.showChildren;updatenode(node)}}> {!node.showChildren?"show":"hide"}</button>
                        :null
                        }
                        {node.showChildren?
                        <MindmapTree
                        mindmap={mindmap}
                        parentId={node.id}
                        updatenode={(node_tobe_updated)=>updatenode(node_tobe_updated)}
                        deletenode={(node_tobe_deleted)=>deletenode(node_tobe_deleted)}
                        addnode={(parentnodeid)=>addnode(parentnodeid)}
                        />
                        :null
                        }
                    </div>
                ))
                }

        </div>
    )
}
export default MindmapTree