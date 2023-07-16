import React, { useRef, useEffect } from "react";
import Line from "./Line";

const Lines = ({ tree, pid, parent }) => {
  return (
    <>
      {tree
        .filter((child) => child.pid === pid)
        .map((child) => (
          <>
            {child.pid !== null ? (
              <Line
                node={child}
                tree={tree}
                edge={{
                  x1: parent?.cordinates?.x + parent?.cordinates?.width,
                  y1: parent?.cordinates?.y + parent?.cordinates?.height / 2,
                  x2: child.cordinates !== undefined ? child.cordinates.x : 0,
                  y2:
                    child.cordinates !== undefined
                      ? child.cordinates.y + child.cordinates.height / 2
                      : 0,
                }}
              />
            ) : null}
            {child.show ? (
              <Lines tree={tree} pid={child.id} parent={child} />
            ) : null}
          </>
        ))}
    </>
  );
};

export default Lines;
