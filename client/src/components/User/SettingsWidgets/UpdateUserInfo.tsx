import { useState } from "react";
import Button from "../../_ui/Button/Button";
import Card from "../../_ui/Card/Card"

const UpdateUserInfo = () => {
    const [input, setInput] = useState({first: "", last: ""});

    const handleUpdate = () => {
        if (!input.first || !input.last) return;
        
    }

    return (
        <Card>
            <h1>Update User Information</h1>

            <form>
                <div>
                    <label htmlFor="first-name">First Name: </label>
                    <input onChange={(e) => setInput({...input, first: e.target.value})} type="text" autoComplete="First Name"></input>
                </div>

                <div>
                    <label htmlFor="last-name">Last Name: </label>
                    <input onChange={(e) => setInput({...input, last: e.target.value})} type="text" autoComplete="Last Name"></input>
                </div>
            </form>

            <Button onClick={handleUpdate}>Update</Button>
        </Card>
    )
}

export default UpdateUserInfo;