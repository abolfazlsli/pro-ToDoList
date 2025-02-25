import { Button, Input } from "@ui-kitten/components"
import { useEffect, useState } from "react"

const InputCustom = ({type , placeholder , value , onChnage}) => {
    const [ptype , setType] = useState(false)
    useEffect(() => type === "password"? setType(true) : setType(false) , [])
    return (
        <>
        {
            type === "password"? <>
            
                <Input secureTextEntry={ptype} placeholder={placeholder} value={value} onChnage={onChnage}  />
                <Button onPress={e => setType(!ptype)} />
            </> : <>
            <Input secureTextEntry={false} placeholder={placeholder} value={value} onChnage={onChnage} />
            </>
        }
            
        </>
    )
}

export default InputCustom