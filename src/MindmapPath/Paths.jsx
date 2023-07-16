import React, { useState, useRef, useEffect } from 'react';
import Path from './path';

const Paths=({mindmap,parent})=>{
    const parentId=parent?parent.id:null;
    return(
        <>
        {mindmap
        .filter((node)=>node.pid===parentId)
        .map((node)=>(
            <>
            {node.pid!==null?
            <Path
            node={node}
            pathCoordinates={{
                x1:parent?.coordinates?parent?.coordinates?.x+parent?.coordinates?.width:0,
                y1:parent?.coordinates?parent?.coordinates?.y+parent?.coordinates?.height/2:0,
                x2:node?.coordinates?node?.coordinates?.x:0,
                y2:node?.coordinates?node?.coordinates?.y+node?.coordinates?.height/2:0,
            }}
            />
            :null
            }
            {node.showChildren ?<Paths mindmap={mindmap} parent={node}/>:null}
            </>
        ))
        }
        </>
    )
}
export default Paths