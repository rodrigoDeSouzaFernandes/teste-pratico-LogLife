import styled from 'styled-components';

import { TextField, Button } from '@material-ui/core'

export const ClientForm = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
width: 350px;
`;

export const ClientTextField = styled(TextField)`
  .MuiInputBase-root {
    margin-bottom: 5px
  }

  .MuiOutlinedInput-input {
    padding: 20px 30px
  }
`;
