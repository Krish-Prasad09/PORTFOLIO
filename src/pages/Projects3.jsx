import React, { useEffect } from 'react'
import p1 from '../assets/projects/titanus.png';
import p2 from '../assets/projects/finit.png';
import p3 from '../assets/projects/apple.png';

const Projects3 = () => {
  useEffect(() => {
      Shery.imageEffect("#pp", {
  style: 5,
  debug:true,
  /*optional parameters
  these parameter dose not applies to custom scroll trigger callback */
  scrollSnapping: true,
  scrollSpeed: 6,
  touchSpeed: 6,
  damping: 7,
  gooey: true,
  config: {"a":{"value":0.23,"range":[0,30]},"b":{"value":-0.79,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":1.9413548739911783},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0.02,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":1.37,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":3}},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}
});
  }, [])
  
  return (
    <div id='pp' className='w-full h-screen'>
      <img src={p1} alt="" />
      <img src={p2} alt="" />
      <img src={p3} alt="" />
    </div>
  )
}

export default Projects3