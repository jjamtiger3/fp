import { useState } from 'react'
import { TextField, Button } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import { CONSTANT } from './constants';
import { useNavigate } from 'react-router-dom'


function StartPage() {
    const [nameValue, setNameValue] = useState('');
    const [isEnable, setIsEnable] = useState(false);
    const navigate = useNavigate();

    function handleNameChange(e) {
        const { value } = e.target;
        setNameValue(value);
        setIsEnable(value === CONSTANT.BRIDGE_NAME);
        // setIsEnable(value);
    }
    function handleGoToQuestion() {
      navigate('/question');
    }
    return (
      <div className='container'>
          <div>
              <TextField label="이름을 입력해 주십시오." 
                variant="outlined"
                onChange={handleNameChange}></TextField>
          </div>
          <div>
              <Button variant='contained' 
                disabled={!isEnable} 
                endIcon={<SendIcon />}
                onClick={handleGoToQuestion}
            >시작하기</Button>
          </div>
      </div>
    );
}

export default StartPage;