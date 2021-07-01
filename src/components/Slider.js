import React from 'react'
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
   return (
      <div className="slider">
         {slides.map(slide => (
            <div className="slider__item" key={`slide-${slide.text}`}>
               <img src={slide.img} alt="" />
               <p>{slide.text}</p>
            </div>
         ))}
         <button className="move"></button>
         <button className="move"></button>
      </div>
   )
}

export default Slider
