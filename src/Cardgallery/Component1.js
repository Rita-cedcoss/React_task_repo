import React from 'react'
import './Component.css'
import CardComponent from './CardComponent'
const Component1=()=> {
  return (
    <div id="outer">
     <CardComponent borderColor="1px solid #031db5" color="#0012ff;" Text3="Primary Card Title" Text1="Header1" Text2="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"></CardComponent>
     <CardComponent borderColor="1px solid #706262" color="rgb(116, 116, 116)" Text3="Secondary Card Title" Text1="Header2" Text2="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,"></CardComponent>
     <CardComponent borderColor="1px solid #04581496" color="#056c38" Text1="Header3" Text2="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy" Text3="Success Card Title"></CardComponent>
     <CardComponent borderColor="1px solid rgb(185 0 82 / 59%)" color="#e91e63" Text1="Header4" Text2="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy" Text3="Danger Card Title"></CardComponent>
    </div>
  )
}

export default Component1