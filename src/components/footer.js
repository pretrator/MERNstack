import React from 'react';
import Form from 'react-bootstrap/Form';
import { IoMdSend } from 'react-icons/io';
import Button from 'react-bootstrap/Button';

const Footer=()=>{
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
        float:'right',
        width:'90%'
    }

    const submitStyle={
        marginTop:1,
        WebkitAppearance:'none',
        marginLeft:5
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
                <input placeholder="Type Your Notes Here" type="text" style={inputStyle}/>
                    <IoMdSend type="submit" style={submitStyle}/>
                </div>
            </form>
        </h1>
    )
}
export default Footer;