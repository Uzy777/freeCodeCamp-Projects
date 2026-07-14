const { useState, useEffect, useRef } = React;

export const OTPGenerator = () => {
    const [otp, setOtp] = useState("");
    const [secondsRemaining, setSecondsRemaining] = useState();

    useEffect(() => {
        const timer = setInterval(() => {
            setSecondsRemaining(prev => {
                if (prev <= 1) {
                    clearInterval(timer);
                    return 0;
                }
                return prev - 1;
            })
        }, 1000);
        return () => clearInterval(timer);
    }, [otp]);

    function generateOtp() {
        setOtp(Math.floor(Math.random() * (1 - 999999 + 1)) + 999999)
        setSecondsRemaining(5)
    }


    return (
        <div className="container">
            <h1 id="otp-title">OTP Generator</h1>
            <h2 id="otp-display">{otp > 0 ? otp : "Click 'Generate OTP' to get a code"}</h2>
            <p id="otp-timer" aria-live="assertive">
                {!otp
                    ? ""
                    : secondsRemaining > 0
                        ? `Expires in: ${secondsRemaining} seconds`
                        : "OTP expired. Click the button to generate a new OTP."
                }
            </p>
            <button id="generate-otp-button" onClick={generateOtp} disabled={secondsRemaining > 0 ? true : false}>Generate OTP</button>
        </div>
    )
};