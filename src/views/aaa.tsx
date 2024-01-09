import { useCallback, useEffect, useState } from "react"

export default function aaaa() {

    const [result, setResult] = useState<string>('哈哈哈哈哈')

    useEffect(()=>{
        console.log(result);
    },[result])
    
    const SwitchChangeResult = useCallback((val: string)=>{
        setResult(val + Math.random())
    },[])

    return (
        <>
            <button onClick={()=>SwitchChangeResult('666666666666')}>click</button>
            test: {result}
        </>
    )
}