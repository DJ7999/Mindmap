import React, { useState, useRef, useEffect } from 'react';

const Path=({node,pathCoordinates})=>{
    const pathRef=useRef(null);
    // let element=document.getElementById("svg_frame")
    // let currentHeight = element.clientHeight;
    // let currentWidth = element.clientWidth;
    // element.style.height = currentHeight<pathCoordinates.y2+window.scrollY?window.scrollY+pathCoordinates.y2:currentHeight;
    // element.style.width=currentWidth<pathCoordinates.x2+window.scrollX?window.scrollX+pathCoordinates.x2:currentWidth;
    
    useEffect(()=>{
        const updatePath=()=>{
            const svg = document.getElementById('svg_frame');
            const parentCoordinate = svg.createSVGPoint();
            const childCoordinate = svg.createSVGPoint();
            parentCoordinate.x=pathCoordinates.x1;
            parentCoordinate.y=pathCoordinates.y1;
            childCoordinate.x=pathCoordinates.x2;
            childCoordinate.y=pathCoordinates.y2;
            const svgparentCoordinate=parentCoordinate.matrixTransform(svg.getScreenCTM().inverse());
            const svgchildCoordinate=childCoordinate.matrixTransform(svg.getScreenCTM().inverse());
            if(pathRef.current){
                pathRef.current.setAttribute('d', `M ${svgparentCoordinate.x} ${svgparentCoordinate.y} C ${svgparentCoordinate.x + 100} ${svgparentCoordinate.y}, ${svgchildCoordinate.x - 100} ${svgchildCoordinate.y}, ${svgchildCoordinate.x} ${svgchildCoordinate.y}`);
            }
        
        };
        window.addEventListener("resize",updatePath);
        updatePath();
        return ()=>{
            window.removeEventListener("resize",updatePath);
        };
    },[pathCoordinates])
    // const pathComponent=pathRef.current;
    // console.log(pathCoordinates)
    // if(pathComponent!==null && pathCoordinates.x1!==0 && pathCoordinates.y1!==0 && pathCoordinates.x2!==0 && pathCoordinates.y2!==0){
    //     const svg=document.getElementById('svg_frame');
    //     const parentCoordinate=svg.createSVGPoint();
    //     const childCoordinate=svg.createSVGPoint();
    //     parentCoordinate.x=pathCoordinates.x1;
    //     parentCoordinate.y=pathCoordinates.y1;
    //     childCoordinate.x=pathCoordinates.x2;
    //     childCoordinate.y=pathCoordinates.y2;
    //     var svgparentCoordinate=parentCoordinate.matrixTransform(svg.getScreenCTM().inverse());
    //     var svgchildCoordinate=childCoordinate.matrixTransform(svg.getScreenCTM().inverse());
    //     pathComponent.setAttribute('d',`M ${svgparentCoordinate.x} ${svgparentCoordinate.y}
    //                                     c ${svgparentCoordinate.x+100} ${svgparentCoordinate.y},
    //                                       ${svgchildCoordinate.x-100} ${svgchildCoordinate.y},
    //                                       ${svgchildCoordinate.x} ${svgchildCoordinate.y}`)
    // }
    return <path ref={pathRef} fill='none' stroke='black'/>
}
export default Path;
