import React from 'react'
import classnames from 'classnames'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import './slider.scss'

// TODO:
// loop - возможность листать слайдер по кругу (например когда на 3 слайде нажимаем далее - переходим на 1). true или false
// navs - Вывод стрелочек или их отключение. true или false
// pags - вывод пагинации или отключение. true или false
// auto - слайдер сам переключается, если delay не указан, раз в 5 сек. А
// stopMouseHover - если навести мышкой на слайд, он не переключается, как только мышку убрали, снова пошло. Работает только когда auto равен true. true или false
// delay - время в секундах на показ слайда, если auto true

const Slider = ({ slides }) => {
   const [currentSlide, setCurrentSlide] = React.useState(0) // Current slide value

   // Left move
   const onMoveLeft = (side) => {
      if (side <= 0) setCurrentSlide(0)
      else setCurrentSlide(side - 1)
   }

   // Right move
   const onMoveRight = (side) => {
      if (side >= slides.length - 1) setCurrentSlide(slides.length - 1)
      else setCurrentSlide(side + 1)
   }

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

         <div className="pages">
            <span>{currentSlide + 1}</span>
            <span>/</span>
            <span>{slides.length}</span>
         </div>

         <button
            className="move prev" 
            disabled={currentSlide === 0}
            onClick={e => onMoveLeft(currentSlide)}>
            <LeftOutlined />
         </button>
         <button
            className="move next"
            disabled={currentSlide === slides.length - 1}
            onClick={e => onMoveRight(currentSlide)}>
            <RightOutlined />
         </button>

         <div className="dots">
            {slides.map((slide, index) => (
               <button
                  className={classnames("dots__item", {"active": index === currentSlide})}
                  onClick={e => setCurrentSlide(index)}
                  key={`dot-${slide.text}`}>
               </button>
            ))}
         </div>
      </div>
   )
}

export default Slider
