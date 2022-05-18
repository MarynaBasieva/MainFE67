import React from 'react'
import './Header.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBed, faCalendarDays, faCar, faMonument, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { DateRange } from 'react-date-range';
import { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from "date-fns";

function Header(type) {
  const [openDate, setOpenDate] = useState(false)
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  })

  const handleOption = (name, operation) =>{
    setOptions(prev=>{return {
      ...prev, [name]: operation === "i" ? options[name] +1 : options[name] -1
    }})
  }


  return (
    <div className='header'>
      <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Помешкання</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Авіаквитки</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Оренда авто</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faMonument} />
            <span>Дозввілля</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Таксі з/до аеропрору</span>
          </div>
        </div>
        { type !== "list" &&
          <>
            <h1 className='headerTitle'>Знижки назавжди? Це Genius.</h1>
            <p className="headerDesc">Отримуйте винагороди за поїздки - економте 10% або більше з безкоштовним какунтом Booking.com</p>
            <button className='headerBtn'>Увійти / зареєструватися</button>
            <div className="headerSearch">
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                <input className='headerSearchInput' type="text" placeholder='Куди ви вирушаєте?' />
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                <span onClick={()=>setOpenDate(!openDate)} className='headerSearchText'>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                {openDate && <DateRange
                  className='date'
                  editableDateInputs={true}
                  onChange={item => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                />}
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <span onClick={()=>setOpenOptions(!openOptions)} className='headerSearchText'>{`${options.adult} Дорослих - ${options.children} Дітей - ${options.room} Номерів`}</span>
                {openOptions && <div className="options">
                  <div className="optionsItem">
                    <span className="optionText">Дорослих</span>
                    <div className="optionCounter">
                      <button disabled={options.adult <= 1} className="optionCounterButton" onClick={()=>handleOption("adult", "d")}>-</button>
                      <span className="optionCounterNumber">{options.adult}</span>
                      <button className="optionCounterButton" onClick={()=>handleOption("adult", "i")}>+</button>
                    </div>
                  </div>
                  <div className="optionsItem">
                    <span className="optionText">Дітей</span>
                    <div className="optionCounter">
                      <button disabled={options.children <= 0} className="optionCounterButton" onClick={()=>handleOption("children", "d")}>-</button>
                      <span className="optionCounterNumber">{options.children}</span>
                      <button className="optionCounterButton" onClick={()=>handleOption("children", "i")}>+</button>
                    </div>
                  </div>
                  <div className="optionsItem">
                    <span className="optionText">Номер</span>
                    <div className="optionCounter">
                      <button disabled={options.room <= 1}className="optionCounterButton" onClick={()=>handleOption("room", "d")}>-</button>
                      <span className="optionCounterNumber">{options.room}</span>
                      <button className="optionCounterButton" onClick={()=>handleOption("room", "i")}>+</button>
                    </div>
                  </div>
                </div>}
              </div>
              <div className="headerSearchItem">
                <button className='headerBtn'>Шукати</button>
              </div>
            </div>
          </>
        }
      </div>
    </div>
  )
}

export default Header