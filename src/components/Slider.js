import React, { Fragment } from 'react'
import classnames from 'classnames'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import './slider.scss'

// TODO:
// auto - слайдер сам переключается, если delay не указан, раз в 5 сек. А
// stopMouseHover - если навести мышкой на слайд, он не переключается, как только мышку убрали, снова пошло. Работает только когда auto равен true. true или false
// delay - время в секундах на показ слайда, если auto true

const Slider = ({ slides, loop, navs, pags, auto }) => {
   const [currentSlide, setCurrentSlide] = React.useState(0) // Current slide value

   // Left move
   const onMoveLeft = (side) => {
      if (side <= 0) {
         if (loop) setCurrentSlide(slides.length - 1)
         else setCurrentSlide(0)
      }
      else setCurrentSlide(side - 1)
   }

   // Right move
   const onMoveRight = React.useCallback((side) => {
      if (side >= slides.length - 1) {
         if (loop) setCurrentSlide(0)
         else setCurrentSlide(slides.length - 1)
      }
      else setCurrentSlide(side + 1)
   }, [loop, slides.length])

   // Loop moving with delay
   React.useEffect(() => {
      if (auto) {
         const timer = setInterval(() => onMoveRight(currentSlide), 1000)
         return () => clearInterval(timer)
      }
   }, [currentSlide, onMoveRight, auto])

   return (
      <div className="slider">
         <div className="slider__container" style={{ transform: `translateX(-${100 * currentSlide}%)` }}>
            {slides.map(slide => (
               <div className="slider__item" key={`slide-${slide.text}`}>
                  <img src={slide.img} alt="" />
                  <p>{slide.text}</p>
               </div>
            ))}
         </div>

         {pags &&
            <div className="pages">
               <span>{currentSlide + 1}</span>
               <span>/</span>
               <span>{slides.length}</span>
            </div>
         }

         {navs &&
            <Fragment>
               <button
                  className="move prev"
                  disabled={currentSlide === 0 && !loop}
                  onClick={e => onMoveLeft(currentSlide)}>
                  <LeftOutlined />
               </button>
               <button
                  className="move next"
                  disabled={currentSlide === slides.length - 1 && !loop}
                  onClick={e => onMoveRight(currentSlide)}>
                  <RightOutlined />
               </button>
            </Fragment>
         }

         <div className="dots">
            {slides.map((slide, index) => (
               <button
                  className={classnames("dots__item", { "active": index === currentSlide })}
                  onClick={e => setCurrentSlide(index)}
                  key={`dot-${slide.text}`}>
               </button>
            ))}
         </div>
      </div>
   )
}

export default Slider
