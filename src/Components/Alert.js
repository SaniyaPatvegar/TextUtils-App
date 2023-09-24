import React from 'react'

export default function Alert(props) {
    const capitalize=(word)=>{
        let atype=word.toLowerCase();
        return atype.charAt(0).toUpperCase()+atype.slice(1);
    }
  return (
    props.alert&&<div class={`alert alert-${props.alert.type} alert-dismissible fade show `}role="alert">
  <strong>{capitalize(props.alert.type)}</strong>:{capitalize(props.alert.msg)}
</div>
  )
}
