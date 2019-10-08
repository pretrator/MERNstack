import React,{useState} from 'react';
import { IoMdSend } from 'react-icons/io';

const Footer=()=>{
    const [inptxt, setinptxt] = useState("")
    const inptxtchanged=(event)=>{
        console.log(event.target.value)
        setinptxt(event.target.value)
    }
    const headStyle={
            padding:3,
            position:'absolute',
            bottom:'0',
            width:'100%',
            height:'50px',
            background:'#fb9224'
    }
    
    const inputStyle={
        paddingLeft:25,
        marginTop:2,
        marginRight:0,
        paddingRight:0,
        fontSize:20,
        borderRadius:20,
        height:40,
        width:'auto',
        display:'flex',
        flexGrow:100
    }

    const submitStyle={
        marginTop:2,
        WebkitAppearance:'none',
        marginLeft:5,
        display:'flex'
    }

    const styleDiv={
        margin:0
    }

    const handleSubmit=(event)=>{
        event.preventDefault()
        console.log("Submitted")
    }

    return (
        <h1 style={headStyle}>
            <form onSubmit={handleSubmit}>
                <div className="row" style={styleDiv}>
                <input placeholder="Type Your Notes Here" type="text" style={inputStyle} onChange={inptxtchanged}/>
                <IoMdSend onClick={handleSubmit} style={submitStyle}/>
                </div>
            </form>
        </h1>
    )
}
export default Footer;