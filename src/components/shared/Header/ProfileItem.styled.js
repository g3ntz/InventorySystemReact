import styled from "styled-components";

export const StyledProfileItem = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  cursor: pointer;
  transition: all 0.2s ease;

  .profile-infos {
    margin-right: 20px;
    display: flex;
    flex-direction: column;
    align-items: end;
  }

  .profile-name {
    color: var(--clr-primary);
    font-weight: 700;
    font-size: 0.9em;
  }

  .profile-email {
    font-size: 0.6em;
    font-weight: 700;
    margin-top: 3px;
  }

  .profile-item img {
    object-fit: cover;
  }
`;
