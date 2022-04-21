import React, {useEffect} from 'react'

function About()
{
    useEffect(() => {
        document.title = 'About'
      },[])
    return (
    <div>about</div>
    )
}

export default About