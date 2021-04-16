import React, {useState} from "react"
import styled from "styled-components"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'

const Format = styled.div`
    margin: 0 auto;
    height: 500px;
    width: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #666666;
    border-radius: 10px;

    textarea {
        height: 200px;
        width: 500px;
    }
    div {
        width: 100%;
    }
`

function Form() {

    const [formIndex, setFormIndex] = useState(0);
    const [formValues, setFormValues] = useState({
        name: "", 
        date: "", 
        message: ""

    })

    const handleChange = e => {
        const {name, value} = e.target
        setFormValues({...formValues, [name]: value})
    }
    
    return (
        <Format>   
            <div>
                <Carousel axis='horizontal' showThumbs={false} showArrows={false} showIndicators={false} autoPlay={false} showStatus={false} selectedItem={formIndex}>
                    <div>
                        Make Appointment
                    </div>
            
                    <div>
                        <label>Name: </label>
                        <input type="text" name="name" value={formValues.name} onChange={handleChange}/>
                    </div> 

                    <div>
                        <label>Date: </label>
                        <input type="date" name="date" value={formValues.date} onChange={handleChange}/>
                    </div> 

                    <div>
                        <label>Problem: </label>
                        <input type="text"/>
                    </div>

                    <div>
                        <label>Describe the issue: </label>
                        <textarea name="message" value={formValues.message} onChange={handleChange} />
                    </div>
                    
                    <div>
                        Thank you, {formValues.name} for submitting the form.
                    </div> 
                </Carousel> 
                {formIndex !== 0 && <button onClick={() => setFormIndex(formIndex - 1)}>Back</button>}
                <button onClick={() => {setFormIndex(formIndex + 1)}} hidden={formIndex == 5 ? true : false}>
                        { formIndex !== 4 ? formIndex == 0 ? "Make Appointment" : "Next" : "Submit" }
                </button>
            </div>
        </Format>
    )
}

export default Form