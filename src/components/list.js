import React from 'react';
const List=(prop)=>{
    console.log(prop.lis)
    const styleList={
        color:'#fb9224'
    }
    return (
        <div>
            <ul style={styleList}>
                {prop.lis.map((not,id)=><li key={id}>{not}</li>)}
                {console.log(prop.lis.map((not,id)=><li key={id}>not</li>))}
            </ul>
        </div>
    )
}
export default List;