import React, { useState, Component, useRef, useEffect } from 'react';
import Buttonstyles from '../styles/Button.module.scss';
import Datastyles from '../styles/Datastyle.module.scss';
import Select from 'react-select';
import { withRouter } from 'next/router';

const options = [
  { value: 'Barcelona', label: 'Barcelona' },
  { value: 'Madrid', label: 'Madrid' },
  { value: 'Sevilla', label: 'Sevilla' },
];

class TransformButton extends React.Component  {
  constructor(){
    super();
    this.state = {
      value: false,
      selectedOptionFrom: null,
      selectedOptionTo: null,
      formInvalidFrom: false,
      formInvalidTo: false
    }

    this.handleButtonClick = this.handleButtonClick.bind(this);


    this.handleSubmit = this.handleSubmit.bind(this);

    this.formRef = React.createRef();
    this.buttonRef = React.createRef();

    this.handleDocumentClick = this.handleDocumentClick.bind(this)

  }


  handleChange = (e, label) => {

    
    label === 'from' ? this.setState({selectedOptionFrom: e}, () => {
      // console.log(e.value);
      this.setState({ formInvalidFrom: false });
    })
     : this.setState({selectedOptionTo: e}, () => {
      // console.log(this.state.selectedOptionTo)
      this.setState({ formInvalidTo: false });
    })
    
  }
  handleButtonClick() {
    this.setState({value: true})
    
 };

  handleDocumentClick(e) {
    this.state.value && this.formRef.current && !this.formRef.current.contains(e.target) ? this.setState({value:false}):null;
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleDocumentClick)
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleDocumentClick)
  }




 handleSubmit(e) {
  e.preventDefault()
  if (this.state.selectedOptionFrom === null || this.state.selectedOptionTo === null) {
    if (this.state.selectedOptionFrom === null) {
      this.setState({ formInvalidFrom: true });
    }
    if (this.state.selectedOptionTo === null) {
      this.setState({ formInvalidTo: true });
    }
    return;
  }

  this.props.router.push({
    pathname: '/quote',
    query: { from: this.state.selectedOptionFrom.value, to: this.state.selectedOptionTo.value}
  },
  );
 };
render() {
  
  const { selectedOptionFrom, selectedOptionTo} = this.state;

  const selectStylesFrom = {
    control: (provided, state) => ({
      ...provided,
      borderColor: this.state.formInvalidFrom ? 'red' : 'hsl(0, 0%, 100%);',
    }),
  };

  const selectStylesTo = {
    control: (provided, state) => ({
      ...provided,
      borderColor: this.state.formInvalidTo ? 'red' : 'hsl(0, 0%, 100%);',
    }),
  };
  return (
    <div>
      {!this.state.value && (
        <div className={`${Buttonstyles.button} ${Buttonstyles.headerButton}`} 
        onClick={this.handleButtonClick}
        ref={this.buttonRef}
        >
          Quick Moving Quote
        </div>
      )}

      {this.state.value && (

        <form
         className={`${Datastyles.form} ${Datastyles.select}`} 
         onSubmit={this.handleSubmit}
         ref={this.formRef}
         >
          

          <div>
            <label>From:</label>
            <Select
              classNamePrefix='select'
              value={selectedOptionFrom}
              onChange={(e) => this.handleChange(e, 'from')}
              options={options}
              styles={selectStylesFrom}
            />
          </div>
          
          <div>
            <label>To:</label>
            <Select
              classNamePrefix='react-select'

              name='To:'
              value={selectedOptionTo}
              onChange={(e) => this.handleChange(e, 'to')}
              options={options}
              styles={selectStylesTo}
            />
          </div>
          <div>
            <label></label>
            <input type ="submit" value ="Quote Me" className={Buttonstyles.button}/>
          </div>
          
      </form>
      )}
    </div>
 );
}

};

export default withRouter(TransformButton);