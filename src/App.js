import React, {useState} from "react";
import TextComponent from "./components/TextComponent";
import Button from "./components/Button";

function App() {
    const [step, setStep] = useState(0)

    const handlePlusStep = () => {
        setStep(step + 1)
    }

    const handleNext = () => {
        alert('Find out later!')
        setStep(0)
    }

    return (
        <div className="App">
            {
                step <= 0 &&
                <>
                    <TextComponent text={"I want to tell some words for you!"}/>
                    <TextComponent text={"Do you want to listen it?"}/>
                    <div className="buttonContainer">
                        <Button label={"Yes"} onClick={handlePlusStep}/>
                        <Button label={"No"}/>
                    </div>
                </>
            }
            {
                step > 0 && <>
                    <TextComponent
                        text="YOU are the best girl I have ever met in my life. Take it how you want, but this is how it is. Forgive me for everything I did to you... &#128149;&#128532;"/>
                    <Button label={"Next =>"} onClick={handleNext}/>
                </>
            }
        </div>
    );
}

export default App;
