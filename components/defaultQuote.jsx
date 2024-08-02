import React, { Component, setState, useState, createRef} from 'react';
import { withRouter } from 'next/router';

import Quotestyles from '../styles/Quote.module.scss';

import Select from 'react-select'

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"

import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const options = [
  { value: 'Barcelona', label: 'Barcelona' },
  { value: 'Madrid', label: 'Madrid' },
  { value: 'Sevilla', label: 'Sevilla' },
];



class Quote extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      focused: false,
      onFocusStyle0: 
        { border: '1px solid hsl(0, 0%, 80%)',
          boxShadow: 'none'},
      onFocusStyle1: 
       { border: '1px solid hsl(0, 0%, 80%)',
         boxShadow: 'none'},
      selectedOptionFrom: {value: props.router.query.from, label: props.router.query.from},
      selectedOptionTo: {value: props.router.query.to, label: props.router.query.to},
      startDate: new Date(),
    };

    this.inputRefs = [createRef(), createRef()];

  }

  handleChange(e, label) {
    label === 'from' ? this.setState({selectedOptionFrom: e}) 
    : this.setState({selectedOptionTo: e});
  }

  handleFocus = (ref) => {

    ref.target.style.border = '1px solid #2684FF';
    ref.target.style.boxShadow = '0 0 0 1px #2684FF';
    // console.log(ref.target.style.border)
  }

  handleBlur = (ref) => {

    ref.target.style.border = '1px solid hsl(0, 0%, 80%)';
    ref.target.style.boxShadow = 'none';
  }

  setStartDate = (newStartDate) => {
    this.setState({ startDate: newStartDate })
  }


    render(){

      const { selectedOptionFrom, selectedOptionTo } = this.state;
      const border = {border: '1px solid hsl(0, 0%, 80%)', boxShadow: 'none', borderRadius: '6px'};
      const { startDate } = this.state;

        return (
          <div className={Quotestyles.Quote}>
            <div>
              <h1>Ask for a budget</h1>
              <h2>If you would like a quote for your removal, we will send a sales representative to your home without any cost. Once the FILEPORTES representative has visited you, we will provide you with a closed quote in writing.</h2>
            </div>
            {/* Quote Container */}
            <div className={Quotestyles.Quote_Container}>
              <form>

                <div className={Quotestyles.Quote_location_container}>
                  <div>
                  {/* From Container */}
                    <div className={Quotestyles.Quote_location}>
                      <div>
                        <label>From:</label>
                        <Select
                          classNamePrefix='select'
                          isClearable='true'
                          value={selectedOptionFrom}
                          onChange={(e) => this.handleChange(e, 'from')}
                          options={options}
                        />
                      </div>
                      {/* To Postcode Container */}
                      <div >
                        <label>Collection Postcode:</label>
                        <input 
                          placeholder='Postcode' 
                          onFocus={(ref) => this.handleFocus(ref)} 
                          onBlur={(ref) => this.handleBlur(ref)}
                          style={border}
                        />
                      </div>
                    </div>
                        {/* To Container */}
                    <div className={Quotestyles.Quote_location}>
                      <div>
                        <label>To:</label>
                        <Select
                          classNamePrefix='select'
                          isClearable='true'
                          value={selectedOptionTo}
                          onChange={(e) => this.handleChange(e, 'to')}
                          options={options}
                        />
                      </div>
                      {/* To Postcode Container */}
                      <div>
                        <label>Destination Postcode:</label>
                        <input
                        placeholder='Postcode' 
                        onFocus={(ref) => this.handleFocus(ref)} 
                        onBlur={(ref) => this.handleBlur(ref)}
                        style={border}
                        />
                      </div>
                    </div>
                  </div>
                  <span>Enter postcodes for a more accurate quote</span>
                </div>

             
                
                <div className={Quotestyles.Quote_radio}>
                  <label><input
                    type='radio'
                    defaultChecked={true}
                    name='radioQuoteOption'
                    value='option1'
                  /> You want to arrange a visit</label>
                  <label><input
                    type='radio'
                    name='radioQuoteOption'
                    value='option2'
                  /> You want information by email</label>
                  <label><input
                    type='radio'
                    name='radioQuoteOption'
                    value='option3'
                  /> You want information by phone</label>
                </div>

                <div className={Quotestyles.Quote_credentials}>
                  <div>
                    <label>Name</label>
                    <input
                      required={true}
                      placeholder='...' 
                      onFocus={(ref) => this.handleFocus(ref)} 
                      onBlur={(ref) => this.handleBlur(ref)}
                      style={border}
                    />
                  </div>
                  <div>
                    <label>Surname</label>
                    <input
                      required={true}
                      placeholder='...' 
                      onFocus={(ref) => this.handleFocus(ref)} 
                      onBlur={(ref) => this.handleBlur(ref)}
                      style={border}
                    />
                  </div>

                </div>
                
                <div className={Quotestyles.Quote_address}>
                  <div>
                  <label>From Address:</label>
                    <input
                      required={true}
                      placeholder='...' 
                      onFocus={(ref) => this.handleFocus(ref)} 
                      onBlur={(ref) => this.handleBlur(ref)}
                      style={border}
                    />
                    <label>Gate:</label>
                    <input
                      placeholder='...' 
                      onFocus={(ref) => this.handleFocus(ref)} 
                      onBlur={(ref) => this.handleBlur(ref)}
                      style={border}
                    />
                    <label>Floor:</label>
                    <input
                      placeholder='...' 
                      onFocus={(ref) => this.handleFocus(ref)} 
                      onBlur={(ref) => this.handleBlur(ref)}
                      style={border}
                    />
                    <label>Door:</label>
                    <input
                      placeholder='...' 
                      onFocus={(ref) => this.handleFocus(ref)} 
                      onBlur={(ref) => this.handleBlur(ref)}
                      style={border}
                    />
                  </div>
                  <div>
                  <label>To Address:</label>
                    <input
                      required={true}
                      placeholder='...' 
                      onFocus={(ref) => this.handleFocus(ref)} 
                      onBlur={(ref) => this.handleBlur(ref)}
                      style={border}
                    />
                    <label>Gate:</label>
                    <input
                      placeholder='...' 
                      onFocus={(ref) => this.handleFocus(ref)} 
                      onBlur={(ref) => this.handleBlur(ref)}
                      style={border}
                    />
                    <label>Floor:</label>
                    <input
                      placeholder='...' 
                      onFocus={(ref) => this.handleFocus(ref)} 
                      onBlur={(ref) => this.handleBlur(ref)}
                      style={border}
                    />
                    <label>Door:</label>
                    <input
                      placeholder='...'
                      onFocus={(ref) => this.handleFocus(ref)} 
                      onBlur={(ref) => this.handleBlur(ref)}
                      style={border}
                    />
                  </div>
                </div>
               

                <div>
                  <label>Planned Moving Date:</label>
                  <DatePicker 
                    className='date'
                    showIcon
                    isClearable
                    selected={startDate} 
                    onChange={() => this.setStartDate(new Date())} 
                    onFocus={(ref) => this.handleFocus(ref)} 
                    onBlur={(ref) => this.handleBlur(ref)}
                    style={border}
                  />
                </div>
                <div className={Quotestyles.Quote_contact}>
                  <div>
                    <label>Phone:</label>
                    <PhoneInput
                    country={'es'}
                    value={this.state.phone}
                    onChange={phone => this.setState({ phone })}
                    onFocus={(ref) => this.handleFocus(ref)} 
                    onBlur={(ref) => this.handleBlur(ref)}
                    style={border}
                    />
                  </div>
                  <div>
                    <label>Email:</label>
                    <input
                      required={true}
                      placeholder='...' 
                      onFocus={(ref) => this.handleFocus(ref)} 
                      onBlur={(ref) => this.handleBlur(ref)}
                      style={border}
                      />
                  </div>
                </div>
                <div>
                  <label>How did you hear about us?</label>
                  <input
                  required={true}
                  placeholder='...'
                  onFocus={(ref) => this.handleFocus(ref)} 
                  onBlur={(ref) => this.handleBlur(ref)}
                  style={border}
                  />
                </div>
                <div>
                  <label>Additional Message:</label>
                  <textarea
                  required={true}
                  placeholder='...' 
                  onFocus={(ref) => this.handleFocus(ref)} 
                  onBlur={(ref) => this.handleBlur(ref)}
                  style={border}
                  />
                </div>
              </form>


            </div>

          </div>
        )

    }
    
  }
  
  export default withRouter(Quote);