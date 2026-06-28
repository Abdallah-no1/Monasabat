import React, {useEffect, useState} from 'react';
import {plainPic} from "../assets/assets.js";

function MainPart() {

    const targetDate = new Date("2026-07-20T21:40:00+03:00").getTime();
    console.log(targetDate);
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;
            console.log(distance);

            if (distance > 0) {
                setTimeLeft({
                    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((distance % (1000 * 60)) / 1000),
                });
            } else {
                clearInterval(timer); // إيقاف العداد إذا انتهى الوقت
            }
        }, 1000);

        // تنظيف العداد لما المستخدم يطلع من الصفحة
        return () => clearInterval(timer);
    }, [targetDate]);

    return (
        <div className="w-full h-dvh bg-size-[100%_auto] bg-bottom bg-no-repeat bg-[#67a2e8] flex flex-col justify-center "
             style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${plainPic}))`}}>
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
            </div>
        </div>
    );
}

export default MainPart;