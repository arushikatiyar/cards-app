import React from "react";
import styled from "styled-components";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import moment  from "moment";

function getCardNumber(numberInput: string) {
    const placeholder = "****************";
    const newPlaceholder = placeholder.substr(numberInput.length);
  
    return numberInput.concat("", newPlaceholder).match(/.{1,4}/g);
  }
  
  const StyledCard = styled.div`
    font-family: "Space Mono", monospace;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
    height: 200px;
    width: 320px;
    flex: 0 0 auto;
    padding: 0 1em;
  
    .card {
      height: 100%;
      border-radius: 8px;
      box-shadow: 1px 1px #aaa3a3;
      background: linear-gradient(45deg, #343a40, #666666, #343a40);
      color: #fff;
  
      .cardNumber {
        position: relative;
        top: 75px;
        display: flex;
        justify-content: space-between;
        font-size: 1.2em;
        word-spacing: 4px;
        letter-spacing: 2px;
        padding: 0 1em;
      }
  
      .cardInfo {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        letter-spacing: 1px;
        line-height: 18px;
        text-transform: uppercase;
        position: relative;
        top: 110px;
        padding: 0 1em;
  
        span {
          font-size: 11px;
        }
  
        p {
          margin-top: 8px;
          font-size: 16px;
        }
  
        .cardExpiry {
          text-align: right;
        }
       
      }
      .cardCvv {
        padding-top: 40%;
        float: right;
        padding-right: 10%;
      }
    }
  `;
  
  export const StyledTextInput = styled.div`
    color: #343a40;
  
    label {
      display: inline;
    }
  
    input {
      box-sizing: border-box;
      width: 100%;
      border-radius: 4px;
      outline: none;
      border: 1px solid #ebecee;
      padding: 10px;
      margin: 10px 0;
    }
  
    input:focus {
      border-color: #64b5f6;
  }
  `;
  
  export const StyledCardForm = styled.div`
    flex: 1 0 auto;
    background-color: #e0e0e0;
    border-radius: 8px;
    max-width: 400px;
    overflow: hidden;
    padding: 1em 2em;
    box-shadow: 2px 2px 8px 0px rgba(0,0,0,0.5);
  
    h2 {
      color: #343a40;
      margin: 0;
      padding-top: .25em;
      border-bottom: 1px solid #aeaeae;
      padding-bottom: .75em;
    }
    
    ul {
      list-style: none;
      padding: 0;
    
      li:not(:last-child) {
        margin-bottom: 15px;
      }
    }
  `;
  
  export const StyledCardContainer = styled.main`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 3em;
  justify-content: space-around;
  
    & > div:not(:last-child) {
      margin-bottom: 2em;
    }
  `
  
  const TextInput = ({ label, type = "text", id, value, ...props }) => (
    <StyledTextInput>
      {label && <label id={id}>{label}</label>}
      <input id={id} type={type} value={value} {...props} />
    </StyledTextInput>
  );
  
  const UserCard = ({
    cardInfo: { name, number, expiryDate, cvv }
  }) => {
    let cardNumber = getCardNumber(number);
    let cardCvv = cvv < 1? "***" : cvv;
    let cardName = name < 1 ? "Name" : name;
    let expiry = expiryDate === ""
        ? "00/00"
        : moment(expiryDate).format("MM/YY");
  
    return (
      <>
      <StyledCard>
        <div className="card">
          <div className="cardNumber">
            <span className="numberSection">{cardNumber[0]}</span>
            <span className="numberSection">{cardNumber[1]}</span>
            <span className="numberSection">{cardNumber[2]}</span>
            <span className="numberSection">{cardNumber[3]}</span>
            {cardNumber[4] && (
              <span className="numberSection">{cardNumber[4]}</span>
            )}
          </div>
          <div className="cardInfo">
            <div className="cardName">
              <span>Card Holder</span>
              <p>{cardName}</p>
            </div>
            <div className="cardExpiry">
              <span>Expires</span>
              <p>{expiry}</p>
            </div>
          </div>
        </div>
      </StyledCard>
       <StyledCard>
       <div className="card">
           <div className="cardCvv">
             <span>CVV</span>
             <p>{cardCvv}</p>
           </div>
       </div>
     </StyledCard>
     </>
    );
  };

  const re = /^[0-9\b]+$/;
  
  const UserCardForm = ({
    
    cardInfo: { name, number, expiryDate, cvv },
    onChange
  }) => (
    <StyledCardForm>
      <h2>Card Details</h2>
      <form>
        <ul>
          <li>
            <TextInput
              label="Card Holder Name"
              id="name"
              type="text"
              value={name}
              onChange={(e: { target: { value: any; }; }) => onChange({ key: "name", value: e.target.value })}
              minLength="1"
              maxLength="40"
              required
            />
          </li>
          <li>
            <TextInput
              label="Card Number"
              id="number"
              type="text"
              pattern="[0-9]*"
              value={number}
              onChange={(e: { target: { value: any; }; }) => onChange((e.target.value === '' || re.test(e.target.value)) ? { key: "number", value: e.target.value }: '')}
              placeholder="**** **** **** ****"
              minLength="16"
              maxLength="16"
              required
            />
          </li>
          <li>
            <div>Card Expiry</div>
            <DatePicker
            label="Expiry Date"
            id="expiryDate"
            minDate={ new Date() }
            selected={ expiryDate === "" ? new Date() : expiryDate }
            onChange={ (date) => onChange({ key: "expiryDate", value: date }) }
            dateFormat="MM/yyyy"
            showMonthYearPicker
            showFullMonthYearPicker
          />
          </li>
          <li>
            <TextInput
              label="CVV"
              id="cvv"
              type="text"
              placeholder="***"
              value={cvv}
              onChange={(e: { target: { value: any; }; }) => onChange((e.target.value === '' || re.test(e.target.value)) ? { key: "cvv", value: e.target.value }: '')}
              minLength="3"
              maxLength="3"
            />
          </li>
        </ul>
      </form>
    </StyledCardForm>
  );
  
  export const Card = () => {
    const initialState = {
      name: "",
      number: "",
      expiryDate: "",
      cvv: "",
    };

    
  
    const inputReducer = (state: any, action: { key: any; value: any; }) => {
      return { ...state, [action.key]: action.value };
    };
  
    const [cardInfo, handleOnChange] = React.useReducer(
      inputReducer,
      initialState
    );
  
    return (
      <StyledCardContainer>
        <UserCard cardInfo={cardInfo} />
        <UserCardForm cardInfo={cardInfo} onChange={handleOnChange} />
      </StyledCardContainer>
    );
  };
  