import React from "react"
import Box from "./Box";

console.clear();

function Boardline(){
    let pre=[0,10,20,30,40,50,60,70,80,90];
    let post=[1,2,3,4,5,6,7,8,9,10];

    return <div>
    <div>  
            {pre.map(preNo=>{
                return <div className="Row">
                {post.map(postNo=>{
        return <div className="Box 2">{preNo+postNo}</div>}
             )}
                </div>
            })}
      
    </div>
    </div>
}

export default Boardline;