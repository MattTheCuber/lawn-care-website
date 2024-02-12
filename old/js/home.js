function timeGreet() {
    //getting time
    now = new Date();

    month_of_year = now.getMonth();
    day_of_month = now.getDate();
    hour_of_day = now.getHours();

    //writing greet
    if (hour_of_day < 10) {
        document.write("<strong>Good morning.</strong>");
    } else if ((hour_of_day >= 13) && (hour_of_day <= 17)) {
        document.write("<strong>Good afternoon.</strong>");
    } else if (hour_of_day >= 17) {
        document.write("<strong>Good evening.</strong>");
    } else if ((hour_of_day >= 12) && (hour_of_day <= 13)) {
        document.write("<strong>Lunch Time</strong>");
    } else if (hour_of_day >19) {
        document.write("<strong>Good night.</strong>")
    } else {
        document.write("<strong>Have a good day.</strong>");
    }
}
function writeDate() {
    document.write(document.lastModified);
}
                        function makeClock() {
                            var canvas = document.getElementById("canvas");
                            var ctx = canvas.getContext("2d");
                            var radius = canvas.height /2;
                            ctx.translate(radius, radius);
                            radius = radius * 0.9
                            setInterval(drawClock, 1);

                            function drawClock() {
                              drawFace(ctx, radius);
                              drawNumbers(ctx, radius);
                              drawTime(ctx, radius);
                            }

                            function drawFace(ctx, radius) {
                              var grad;
                              ctx.beginPath();
                              ctx.arc(0, 0, radius, 0, 2*Math.PI);
                              ctx.fillStyle = '#b3efe9';
                              ctx.fill();
                              grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
                              grad.addColorStop(0, '#166600');
                              grad.addColorStop(0.5, '#1e8a00');
                              grad.addColorStop(1, '#29bd00');
                              ctx.strokeStyle = grad;
                              ctx.lineWidth = radius*0.1;
                              ctx.stroke();
                              ctx.beginPath();
                              ctx.arc(0, 0, radius*0.1, 0, 2*Math.PI);
                              ctx.fillStyle = '#1e8a00';
                              ctx.fill();
                            }

                            function drawNumbers(ctx, radius) {
                              var ang;
                              var num;
                              ctx.font = radius*0.15 + "px times new roman";
                              ctx.textBaseline="middle";
                              ctx.textAlign="center";
                              ctx.fillStyle = 'black';
                              for(num = 1; num < 13; num++){
                                ang = num * Math.PI / 6;
                                ctx.rotate(ang);
                                ctx.translate(0, -radius*0.85);
                                ctx.rotate(-ang);
                                ctx.fillText(num.toString(), 0, 0);
                                ctx.rotate(ang);
                                ctx.translate(0, radius*0.85);
                                ctx.rotate(-ang);
                              }
                            }

                            function drawTime(ctx, radius){
                                var now = new Date();
                                var hour = now.getHours();
                                var minute = now.getMinutes();
                                var second = now.getSeconds();
                                //hour
                                hour=hour%12;
                                hour=(hour*Math.PI/6)+
                                (minute*Math.PI/(6*60))+
                                (second*Math.PI/(360*60));
                                drawHand(ctx, hour, radius*0.5, radius*0.07);
                                //minute
                                minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
                                drawHand(ctx, minute, radius*0.8, radius*0.07);
                                // second
                                second=(second*Math.PI/30);
                                drawHand(ctx, second, radius*0.9, radius*0.02);
                            }

                            function drawHand(ctx, pos, length, width) {
                                ctx.beginPath();
                                ctx.lineWidth = width;
                                ctx.lineCap = "round";
                                ctx.moveTo(0,0);
                                ctx.rotate(pos);
                                ctx.lineTo(0, -length);
                                ctx.stroke();
                                ctx.rotate(-pos);
                            }
                          }