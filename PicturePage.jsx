import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import SendIcon from '@mui/icons-material/Send'

function PicturePage() {
  const navigate = useNavigate();
  function handleGotoResult() {
    navigate('/result');
  }
  return (
    <div>
        <div className="picture"></div>
        <Button variant='contained' 
          endIcon={<SendIcon />}
          onClick={handleGotoResult}
        >결과보기</Button>
    </div>
  );
}

export default PicturePage;
