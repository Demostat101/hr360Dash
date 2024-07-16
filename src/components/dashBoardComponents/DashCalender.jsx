import { useState } from "react";
import Calendar from "react-calendar";
import styled from "styled-components";

const DashCalender = () => {
  const [calender, setCalender] = useState(new Date());
  return (
    <CalendarContainer>
      <Calendar setCalender={setCalender} calender={calender} />
    </CalendarContainer>
  );
};

export default DashCalender;

const CalendarContainer = styled.div`
  /* ~~~ container styles ~~~ */
  max-width: 600px;
  border-radius: 3px;

  /* ~~~ navigation styles ~~~ */
  .react-calendar__navigation {
    display: flex;

    .react-calendar__navigation__label {
      font-weight: bold;
    }
  }

  /* ~~~ button styles ~~~ */
  button {
    width: 30px;
    height: 30px;
    border: 0;
    border-radius: 50%;
    color: black;
    display: grid;
    place-items: center;

    &:hover {
      background-color: #176b87;
      color: white;
    }

    &:active {
      background-color: #176b87;
    }
  }

  button:nth-child(3):hover {
    color: black;
    background-color: white;
  }

  /* ~~~ day grid styles ~~~ */
  .react-calendar__month-view__days {
    display: grid !important;
    grid-template-columns: 14.2% 14.2% 14.2% 14.2% 14.2% 14.2% 14.2%;

    .react-calendar__tile {
      max-width: initial !important;
    }
  }

  /* ~~~ neighboring month & weekend styles ~~~ */
  .react-calendar__month-view__days__day--neighboringMonth {
    opacity: 0.7;
  }
  .react-calendar__month-view__days__day--weekend {
    color: #dfdfdf;
  }

  /* ~~~ other view styles ~~~ */
  .react-calendar__year-view__months,
  .react-calendar__decade-view__years,
  .react-calendar__century-view__decades {
    display: grid !important;
    grid-template-columns: 20% 20% 20% 20% 20%;

    &.react-calendar__year-view__months {
      grid-template-columns: 33.3% 33.3% 33.3%;
    }

    .react-calendar__tile {
      max-width: initial !important;
    }
  }
`;
