import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FormControlLabel, FormControl, FormLabel, RadioGroup, Radio, Button } from '@mui/material'
import { QUESTION_LIST } from './constants';
import SendIcon from '@mui/icons-material/Send'

function QuestionPage() {
    const [step, setStep] = useState(0);
    const navigate = useNavigate();
    function handleGotoNext() {
        if (step < 4) {
            const _step = step + 1;
            setStep(_step);
        } else {
            navigate('/picture');
        }
    }
    return (
      <div>
        {
            QUESTION_LIST.map((question, index) => {
                return step === index && 
                    (<div className="question-container" key={`question_${index}`}>
                        <FormControl>
                            <FormLabel>{question}</FormLabel>
                            <RadioGroup defaultValue="yes" name="question-1-group">
                                <FormControlLabel value={index === 4 ? 'no' : 'yes'} control={<Radio />} label={index === 4 ? '아니오' : '예'}></FormControlLabel>
                                <FormControlLabel value={index === 4 ? 'nope' : 'ok'} control={<Radio />} label={index === 4 ? '아뇨' : '네'}></FormControlLabel>
                            </RadioGroup>
                            <Button variant='contained' 
                              endIcon={<SendIcon />}
                              onClick={handleGotoNext}
                            >시작하기</Button>
                        </FormControl>
                    </div>)
            })
        }
      </div>
    );
}

export default QuestionPage;