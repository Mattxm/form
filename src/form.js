import React, {useState} from "react"
import styled from "styled-components"

const Format = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    textarea {
        height: 200px;
        width: 500px;
    }
`

function FormStep(index, values, event) {
    switch(index){
      case 0: return (
        <div>
          Make Appointment
        </div> )
      case 1: return (
        <div>
          <label>Name: </label>
          <input type="text" name="name" value={values.name} onChange={event}/>
        </div> )
      case 2: return (
        <div>
          <label>Date: </label>
          <input type="date" name="date" value={values.date} onChange={event}/>
        </div> )
      case 3: return (
        <div>
          <label>Problem: </label>
          <input type="text"/>
        </div> )
      case 4: return (
        <div>
          <label>Describe the issue: </label>
          <textarea/>
        </div> )
      default: return <div>Error</div>
    }
}

function Form2() {

    const [formIndex, setFormIndex] = useState(0);
    const [formValues, setFormValues] = useState({name: "", date: "", message: ""})

    const handleChange = e => {
        const {name, value} = e.target
        setFormValues({...formValues, [name]: value})
    }
    
    return (
        <Format>
        { formIndex !== 5 ? 
            <div>
                <form id="schedule">
                    {FormStep(formIndex, formValues, handleChange)}
                </form>
                {formIndex !== 0 && <button onClick={() => setFormIndex(formIndex - 1)}>Back</button>}
                <button onClick={() => {setFormIndex(formIndex + 1)}} hidden={formIndex == 5 ? true : false}>
                    { formIndex !== 4 ? formIndex == 0 ? "Make Appointment" : "Next" : "Submit" }
                </button>
            </div>
            :
            <div>
                Thank you, {formValues.name} for submitting the form.
            </div>
        }
        </Format>
    )
}

export default Form2