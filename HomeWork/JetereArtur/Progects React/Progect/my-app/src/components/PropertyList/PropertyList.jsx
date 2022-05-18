import React from 'react'
import "./PropertyList.css"

function PropertyList() {
  return (
    <div className='pList'>
      <div className="pListItem">
        <img src="https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=" alt="" />
        <h2>Готелі</h2>
        <p>861 086 готелів</p>
      </div>
      <div className="pListItem">
        <img src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg" alt="" />
        <h2>Апартаменти</h2>
        <p>824 571 апартаменти</p>
      </div>
      <div className="pListItem">
        <img src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg" alt="" />
        <h2>Курортні готелі</h2>
        <p>17 917 курортних готелів</p>
      </div>
      <div className="pListItem">
        <img src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg" alt="" />
        <h2>Вілли</h2>
        <p>431 282 вілли</p>
      </div>
      <div className="pListItem">
        <img src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg" alt="" />
        <h2>Шале</h2>
        <p>33 868 шале</p>
      </div>
      <div className="pListItem">
        <img src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_cottages/5e1fd9cd716f4825c6c7eac5abe692c52cc64516.jpg" alt="" />
        <h2>Котеджі</h2>
        <p>144 561 котедж</p>
      </div>
    </div>
  )
}

export default PropertyList