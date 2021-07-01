import React, { useState } from 'react'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import './slider.scss'

// Функционал:
// кнопки далее и назад
// подпись текста к каждому слайду
// вывод номера и максимального количества (1/3,2/3,/3/3)
// пагинация (при клике - переключается на нужный слайд)
// Дополнительные параметры:

// loop - возможность листать слайдер по кругу (например когда на 3 слайде нажимаем далее - переходим на 1). true или false
// navs - Вывод стрелочек или их отключение. true или false
// pags - вывод пагинации или отключение. true или false
// auto - слайдер сам переключается, если delay не указан, раз в 5 сек. А
// stopMouseHover - если навести мышкой на слайд, он не переключается, как только мышку убрали, снова пошло. Работает только когда auto равен true. true или false
// delay - время в секундах на показ слайда, если auto true

const Slider = ({ slides }) => {
   const [currentSlide, setCurrentSlide] = React.useState(0)

   const onMoveLeft = () => {
      console.log(currentSlide)
      setCurrentSlide(currentSlide - 1)
   }
   const onMoveRight = (side) => {
      console.log(currentSlide)
      setCurrentSlide(currentSlide + 1)
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

         <button className="move prev" onClick={e => onMoveLeft()}><LeftOutlined /></button>
         <button className="move next" onClick={e => onMoveRight()}><RightOutlined /></button>

         <div className="dots">
            {slides.map(slide => (
               <button className="dots__item" key={`dot-${slide.text}`}></button>
            ))}
         </div>
      </div>
   )
}

export default Slider
