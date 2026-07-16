import React, {useEffect, useState} from 'react';
import {plainPic} from "../assets/assets.js";

function MainPart() {

    const targetDate = new Date("2026-07-20T21:40:00+03:00").getTime();

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    const [isSpecial, setIsSpecial] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance > 0) {
                setTimeLeft({
                    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((distance % (1000 * 60)) / 1000),
                });
            } else {
                clearInterval(timer);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        console.log(timeLeft.days);
        // if (timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0)//todo: make it work
        if (timeLeft.days === 1 && timeLeft.hours === 1 && timeLeft.minutes === 1 && timeLeft.seconds === 1){
            setIsSpecial(true)
        }else {
            setIsSpecial(false)
        }
    }, [timeLeft])

    return (
        <div className="w-full h-dvh bg-size-[100%_auto] bg-bottom bg-no-repeat bg-[#67a2e8] flex flex-col justify-center "
             style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${plainPic})`}}>
            {/*TODO: pic as <img> not bg*/}
            <div className="text-center">
                <h1 className="font-bold text-white text-3xl">
                    لم يتبقى الكثير <br/> رحلتك القادمة تبدأ بعد
                </h1>
                {/* تصميم العداد الزمني */}
                <div className="flex justify-center text-white text-7xl">
                    <div>
                        <div className="text-red-400">{String(timeLeft.days).padStart(2, '0')}</div>
                        <div className="text-xl">يوم</div>
                    </div>
                    <div>:</div>
                    <div>
                        <div>{String(timeLeft.hours).padStart(2, '0')}</div>
                        <div className="text-xl">ساعة</div>
                    </div>
                    <div>:</div>
                    <div>
                        <div>{String(timeLeft.minutes).padStart(2, '0')}</div>
                        <div className="text-xl">دقيقة</div>
                    </div>
                    <div>:</div>
                    <div>
                        <div>{String(timeLeft.seconds).padStart(2, '0')}</div>
                        <div className="text-xl">ثانية</div>
                    </div>
                </div>
                {/*  لوحة شكر  */}
                <div className={`text-amber-400 text-2xl mt-4 absolute align-middle w-full ${isSpecial ? "block" : "hidden" } `}>
                    واحد ثفر واحد ثفر واحد ثفر واحد ثفر
                    <br/>
                    <span>&#x1F90D;</span>
                    شكرا بابا
                </div>
            </div>
        </div>
    );
}

export default MainPart;