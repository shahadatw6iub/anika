"use client"
import React, { useEffect } from 'react';
import timeElapse from './Functions';

const MyVarchhu: React.FC = () => {
    useEffect(() => {
        const loveHeart = document.getElementById('loveHeart') as HTMLDivElement;
        const offsetX = loveHeart.offsetWidth / 2;
        const offsetY = loveHeart.offsetHeight / 2 - 55;

        const together = new Date();
        together.setFullYear(2016, 8, 5);
        together.setHours(16);
        together.setMinutes(30);
        together.setSeconds(0);
        together.setMilliseconds(0);

        if (!document.createElement('canvas').getContext) {
            const msg = document.createElement("div");
            msg.id = "errorMsg";
            msg.innerHTML = "Your browser doesn't support HTML5!<br/>Recommend use Chrome 14+/IE 9+/Firefox 7+/Safari 4+";
            document.body.appendChild(msg);
            document.execCommand("stop");
        } else {
            timeElapse(together);

        }
    }, []);

    return (
        <div id="mainDiv">
            <div id="content">
                <div id="code">
                    <span className="comments">/**</span><br />
                    <span className="space" /><span className="comments">*THE CODE OF LOVE</span><br />
                    <span className="space" /><span className="comments">*/</span><br />
                    Hey Girl!<br />
                    Do you remember the day we first met?<br />
                    <span className="comments">// The ET-LAB Friday. </span><br />
                    Since that day a spark begun;<br />
                    <span className="comments">// Your face Your Voice Your Words.</span><br />
                    Your everything got imprinted in my heart;<br />
                    As the time went on;<br />
                    The Bond grew stronger and stronger;<br />
                    Journey from Infatuation to Love;<br />
                    We have traveled a long way together;<br />
                    There have been fights ;<br />
                    <span className="comments">// And I'm sure there will be more.</span><br />
                    But our Bond will always grow back Stronger;<br /><br /><br />
                    All I want to say is:<br />
                    Baby, I will love you forever;<br /><br /><br />
                    Now If you want to hug me you can touch the heart below<br /><br />
                    <span id="heartspan">
                        <a href="image.jpg"><i className="fas fa-heart" id="icon"></i></a>
                    </span>
                </div>
                <div id="loveHeart">
                    <canvas id="garden"></canvas>
                    <div id="words">
                        <div id="messages">
                            वर्षा ऋतु FOREVER
                            <div id="elapseClock"></div>
                        </div>
                        <div id="loveu">
                            I LOVE YOU SO MUCH<br />
                            <div className="signature">- RITVIK</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyVarchhu;
