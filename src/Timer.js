import React, { useEffect, useState } from 'react'

const Timer = () => {

    const [second, setSecond] = useState(0)
    const [minut, setMinut] = useState(0)
    const [hour, setHour] = useState(0)

    var timer = 0
    useEffect(() => {

        timer = setInterval(() => {

            setSecond(second + 1)
            if (second === 59) {
                setMinut(minut + 1)
                setSecond(0)
            }

            if (minut === 59) {
                setHour(hour + 1)
                setMinut(0)
                // setSecond(0)
            }



        }, 1000);

        return () => {
            clearInterval(timer)
        }
    })

    const start = () => {
        setSecond(second+1)
    }

    const pause = () => {
        clearInterval(timer)
    }

    return (
        <>
            <div>
                <div>Timer</div>
                <div>
                    {hour < 10 ? "0" + hour : hour} : {minut < 10 ? "0" + minut : minut} : {second < 10 ? "0" + second : second}
                </div>
                <button onClick={start}>Start</button>
                <button onClick={pause}>Pause</button>
                <button >Save</button>
            </div>
        </>
    )
}

export default Timer