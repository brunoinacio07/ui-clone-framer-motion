import { motion, useScroll, useTransform } from 'framer-motion'
import { Sticky } from '../../styles'

export function FirstAndSecond() {
  const { scrollYProgress } = useScroll()

  const frameOpacity = useTransform(scrollYProgress, [0.196, 0.198], [0, 1])
  const frameScale = useTransform(scrollYProgress, [0.558, 0.627], [0.511, 0.8])

  return (
    <Sticky className='second'>
      <First />
      <motion.div
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          height: '100vh',
          borderRadius: '4px',
          border: '4px solid #fff',
          opacity: frameOpacity,
          scale: frameScale
        }}
      />
    </Sticky>
  )
}

export function First() {
  const { scrollYProgress } = useScroll()

  const firstScale = useTransform(
    scrollYProgress,
    [0.198, 0.264, 0.558, 0.627],
    [1, 0.511, 0.511, 1]
  )

  const firstRadius = useTransform(
    scrollYProgress,
    [0.198, 0.264, 0.558, 0.627],
    [0, 4, 4, 0]
  )

  const leftSideHeigth = useTransform(scrollYProgress, [0, 0.058], ['20vh', '100vh'])

  const rightSideScale = useTransform(scrollYProgress, [0.047, 0.093], [0, 0.511])

  const rightSideY = useTransform(scrollYProgress, [0.047, 0.093], ['58vh', '0vh'])

  const offsetY = useTransform(
    scrollYProgress,
    [0.328, 0.397, 0.461, 0.53],
    ['0%', '-100%', '-100%', '-200%']
  )

  return (
    <Sticky className='first' style={{ scale: firstScale, borderRadius: firstRadius }}>
      <motion.div
        className='offset'
        style={{
          y: offsetY
        }}
      >
        <div className='a'>
          <motion.div
            className='left-side'
            style={{
              height: leftSideHeigth
            }}
          />
          <div className='right-side'>
            <motion.div
              className='right-image'
              style={{
                y: rightSideY,
                scale: rightSideScale
              }}
            >
              {/* <img src="https://github.com/brunoinacio07.png" alt="" /> */}
            </motion.div>
          </div>
        </div>
        <div className='b'></div>
        <div className='c'></div>
      </motion.div>
    </Sticky>
  )
}
