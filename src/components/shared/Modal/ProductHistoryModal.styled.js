import styled from "styled-components";
import { StyledModal } from "./Modal.styled";

export const StyledProductHistory = styled(StyledModal)`
  /* MODAL STYLES */
  width: 80%;
  height: 90%;
  left: 11%;
  top: 2%;
  padding: 0;
  border-radius: 10px;

  @media screen and (max-width: 1190px) {
    left: 5%;
    width: 90%;
  }

  @media screen and (max-width: 890px) {
    left: 3%;
    top: 10%;
    width: 95%;
    height: 60%;
  }

  /* CONTAINER STYLES */
  .cd-container {
    font-family: "Open Sans", sans-serif;
    width: 100%;
    margin: 0;
    background: var(--clr-blue-dark);
    height: 100%;
    overflow-y: scroll;
    border-radius: 10px;

    /* width */
    ::-webkit-scrollbar {
      width: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: var(--clr-primary);
      border-radius: 5px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      
    }
  }

  .container::after {
    content: "";
    display: table;
    clear: both;
  }

  /* -------------------------------- 

Main components 

-------------------------------- */

  #cd-timeline {
    position: relative;
  }
  .cd-timeline-block {
    position: relative;
    padding-top: 4em;
    /* margin: 2em 0; */
  }
  .cd-timeline-block:last-child {
    padding-bottom: 4em;
  }
  .cd-timeline-block:after {
    content: "";
    display: table;
    clear: both;
  }

  .cd-timeline-block:before {
    content: "";
    position: absolute;
    top: 0;
    left: 25px !important;
    height: 100%;
    width: 4px;
    background: var(--clr-primary);
    margin-left: 2px;
  }
  .cd-timeline-block:first-child {
    margin-top: 0;
  }
  .cd-timeline-block:last-child {
    margin-bottom: 0;
  }
  @media only screen and (min-width: 1170px) {
    .cd-timeline-block {
      /* margin: 4em 0; */
    }
    .cd-timeline-block:first-child {
      margin-top: 0;
    }
    .cd-timeline-block:last-child {
      margin-bottom: 0;
    }

    .cd-timeline-block:before {
      left: 50% !important;
    }
  }

  .cd-timeline-img {
    position: absolute;
    top: 8px;
    left: 14px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-top: 64px;
    box-shadow: 0 0 0 4px var(--clr-primary), inset 0 2px 0 rgba(0, 0, 0, 0.08),
      0 3px 0 4px rgba(0, 0, 0, 0.05);
  }
  .cd-timeline-img {
    background: var(--clr-primary);
  }
  @media only screen and (min-width: 1170px) {
    .cd-timeline-img {
      width: 30px;
      height: 30px;
      left: 50%;
      margin-left: -11px;
      margin-top: 72px;
    }
    .cd-timeline-block::before {
      left: 10%;
    }
  }

  .cd-timeline-content {
    position: relative;
    margin-left: 60px;
    margin-right: 30px;
    background: #333c42;
    border-radius: 2px;
    padding: 1em;
    .timeline-content-info {
      background: var(--clr-primary);
      padding: 5px 10px;
      color: rgba(255, 255, 255, 0.7);
      font-size: 12px;
      box-shadow: inset 0 2px 0 rgba(0, 0, 0, 0.08);
      border-radius: 2px;
      i {
        margin-right: 5px;
      }
      .timeline-content-info-title,
      .timeline-content-info-date {
        width: calc(50% - 2px);
        display: inline-block;
      }
      @media (max-width: 500px) {
        .timeline-content-info-title,
        .timeline-content-info-date {
          display: block;
          width: 100%;
        }
      }
    }
    .content-skills {
      font-size: 12px;
      padding: 0;
      margin-bottom: 0;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      li {
        background: #40484d;
        border-radius: 2px;
        display: inline-block;
        padding: 2px 10px;
        color: rgba(255, 255, 255, 0.7);
        margin: 3px 2px;
        text-align: center;
        flex-grow: 1;
      }
    }
  }
  .cd-timeline-content:after {
    content: "";
    display: table;
    clear: both;
  }
  .cd-timeline-content h2 {
    color: rgba(255, 255, 255, 0.9);
    margin-top: 0;
    margin-bottom: 5px;
  }
  .cd-timeline-content p,
  .cd-timeline-content .cd-date {
    color: rgba(255, 255, 255, 0.7);
    font-size: 13px;
    font-size: 0.8125rem;
  }
  .cd-timeline-content .cd-date {
    display: inline-block;
  }
  .cd-timeline-content p {
    margin: 1em 0;
    line-height: 1.6;
  }

  .cd-timeline-content::before {
    content: "";
    position: absolute;
    top: 16px;
    right: 100%;
    height: 0;
    width: 0;
    border: 7px solid transparent;
    border-right: 7px solid #333c42;
  }

  @media only screen and (min-width: 768px) {
    .cd-timeline-content h2 {
      font-size: 20px;
      font-size: 1.25rem;
    }
    .cd-timeline-content p {
      font-size: 16px;
      font-size: 1rem;
    }
    .cd-timeline-content .cd-read-more,
    .cd-timeline-content .cd-date {
      font-size: 14px;
      font-size: 0.875rem;
    }
  }
  @media only screen and (min-width: 1170px) {
    .cd-timeline-content {
      color: white;
      margin-left: 0;
      padding: 1.6em;
      width: 36%;
      margin: 0 10%;
    }
    .cd-timeline-content::before {
      top: 24px;
      left: 100%;
      border-color: transparent;
      border-left-color: #333c42;
    }
    .cd-timeline-content .cd-date {
      position: absolute;
      width: 100%;
      left: 122%;
      top: 6px;
      font-size: 16px;
      font-size: 1rem;
    }
    .cd-timeline-block:nth-child(even) .cd-timeline-content {
      float: right;
    }
    .cd-timeline-block:nth-child(even) .cd-timeline-content::before {
      top: 24px;
      left: auto;
      right: 100%;
      border-color: transparent;
      border-right-color: #333c42;
    }
    .cd-timeline-block:nth-child(even) .cd-timeline-content .cd-read-more {
      float: right;
    }
    .cd-timeline-block:nth-child(even) .cd-timeline-content .cd-date {
      left: auto;
      right: 122%;
      text-align: right;
    }
  }
`;
