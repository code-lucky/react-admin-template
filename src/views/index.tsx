import React, { useState } from "react"

function test(){
    const toLearn = [ 'react' , 'vue' , 'webpack' , 'nodejs'  ]

  const TextComponent = () => <div> hello , i am function component </div>

  const renderFoot = () => <div> i am foot </div>

  const status = false

  const Son = (props: any) =>{
    const { fatherSay, sayFather } = props

    return <>
      <div className='son' >
          我是子组件
          <div> 父组件对我说：{ fatherSay } </div>
          <input placeholder="我对父组件说" onChange={ (e)=>sayFather(e.target.value) }   />
      </div>
    </>
  }

  const Father = () =>{
    const [ childSay, setChildSay] = useState('')
    const [ fatherSay, setFaterSay ] = useState('')

    return <>
      <div>我是父组件</div>
      <div>子组件对我说：{ childSay }</div>
      <input type="text" placeholder='我对子组件说' onChange={ (e)=>setFaterSay(e.target.value)}/>
      <Son fatherSay={fatherSay}  sayFather={ setChildSay }/>
    </>
  }

  return (
    <>
      <div>hello world</div>
      <React.Fragment>
          <div> 👽👽 </div>
      </React.Fragment>
      { toLearn.map( item => <div key={item}> let us learn {item} </div>) }
      { status ? <TextComponent /> : <div>三元运算</div> }
      <TextComponent/>
      { renderFoot() }
      <Father/>
    </>
  )
}

export default test