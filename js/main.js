function _Main() {

    function _ruchome() {
        this.type = arguments[0]
        this.x = arguments[1]
        this.y = arguments[2]
        this.rangeLeft = arguments[3]
        this.rangeRight = arguments[4]
        this.time = arguments[5]
        this.zwrot = "l"
        this.touched = false
    }

    var levels = {}

    var game = {
        field: document.getElementById("game"),
        look: document.getElementById("look"),
        time: 0,//160,
        stoper: function () {
            setInterval(function () {
                game.time++
                //console.log(game.time)
                if (game.time == 160)
                    game.die()
            }, 1000)
        },
        die: function () {
            if (player.lifes == 0) {
                alert("A kto umarł, ten nie żyje")
                clearInterval(ground.init())
                clearInterval(ground.animate)
                clearInterval(game.init())
                clearInterval(player.move)
                clearInterval(game.stoper())
                ground.ctx2.drawImage(document.getElementById("over"), 0, 0, 647, 406)
                return;
            }
            player.lifes--
            game.time = 0
            game.init()
        },
        resetLevels: function () {
            levels = {
                zero: {
                    playerX: 231,
                    playerY: 3,
                    outPosition: [373, 60],
                    potions: 2,
                    data: [
                        new _ruchome("potion", 235, 270, 0, 0, 0),
                        new _ruchome("potion", 521, 141, 0, 0, 0),
                        new _ruchome("dragon", 373, 185, 357, 420, 0),
                        new _ruchome("fire", 373, 185, 48, 0, 0),//-szerokosc obrazka w range y
                        new _ruchome("platform", 341, 321, 104, 415, 0),//-szerokosc obrazka w range y
                        new _ruchome("fallingplatform", 420, 107, 140, 0, 0),//rangeX to zasieg upadku, rangeY to licznik, il erazy upadło
                        new _ruchome("fallingplatform", 420, 140, 171, 0, 0),//rangeX to zasieg upadku
                        new _ruchome("fallingplatform", 420, 171, 201, 0, 0)
                    ]
                },
                first: {
                    playerX: 353,
                    playerY: 138,
                    outPosition: [290, 254],
                    potions: 4,
                    data: [
                        new _ruchome("potion", 40, 47, 0, 0, 0),
                        new _ruchome("potion", 39, 174, 0, 0, 0),
                        new _ruchome("potion", 358, 207, 0, 0, 0),
                        new _ruchome("potion", 487, 303, 0, 0, 0),
                        new _ruchome("fallingplatform", 291, 109, 140, 0, 0),//rangeX to zasieg upadku, rangeY to licznik, il erazy upadło
                        new _ruchome("fallingplatform", 291, 140, 171, 0, 0),
                        new _ruchome("fallingplatform", 515, 108, 147, 0, 0),
                        new _ruchome("fallingplatform", 515, 147, 186, 0, 0),
                        new _ruchome("fallingplatform", 485, 204, 245, 0, 0),
                        new _ruchome("fallingplatform", 515, 204, 245, 0, 0),
                        new _ruchome("fallingplatform", 68, 204, 245, 0, 0),
                        new _ruchome("fallingplatform", 100, 204, 245, 0, 0),
                        new _ruchome("fallingplatform", 132, 204, 245, 0, 0),
                        new _ruchome("fallingplatform", 164, 204, 245, 0, 0),
                        new _ruchome("fallingplatform", 196, 204, 245, 0, 0),
                        new _ruchome("fallingplatform", 163, 333, 382, 0, 0),
                        new _ruchome("fallingplatform", 195, 333, 382, 0, 0),
                        new _ruchome("ant", 211, 359, 140, 440, 0),
                        new _ruchome("poison", 243, 55, 40, 164, 0)
                    ]
                }
            }
        },
        init: function () {
            console.log("game's getting started!")
            game.resetLevels()
            if (ground.lvl == 0) {
                player.x = levels.zero.playerX
                player.y = levels.zero.playerY
            }
            if (ground.lvl == 1) {
                player.x = levels.first.playerX
                player.y = levels.first.playerY
            }
            ground.init()
        }
    }

    var ground = {
        ctx1: game.field.getContext("2d"),
        ctx2: game.look.getContext("2d"),
        lvl: 0,
        init: function () {
            switch (ground.lvl) {
                case 0:
                    ground.ctx1.clearRect(0, 0, 647, 406);
                    ground.ctx2.clearRect(0, 0, 647, 406);

                    ground.ctx1.fillStyle = "grey";
                    ground.ctx1.fillRect(0, 0, 581, 406);
                    ground.ctx1.fillStyle = "white";
                    ground.ctx1.fillRect(38, 0, 513, 379);
                    ground.ctx1.fillStyle = "blue";
                    ground.ctx1.fillRect(player.x, player.y, 42, 48);
                    ground.ctx1.fillStyle = "grey";
                    ground.ctx1.fillRect(38, 282, 33, 97);
                    ground.ctx1.fillRect(70, 315, 33, 67);
                    ground.ctx1.fillRect(102, 347, 33, 37);

                    ground.ctx1.fillRect(518, 282, 33, 97);
                    ground.ctx1.fillRect(487, 315, 33, 67);
                    ground.ctx1.fillRect(454, 347, 33, 37);

                    ground.ctx1.fillRect(360, 250, 135, 7);

                    ground.ctx1.fillRect(515, 220, 50, 7);

                    ground.ctx1.fillRect(515, 170, 50, 7);

                    ground.ctx1.fillRect(100, 233, 35, 7);
                    ground.ctx1.fillRect(100, 155, 35, 7);
                    ground.ctx1.fillRect(37, 122, 35, 7);
                    ground.ctx1.fillRect(100, 73, 35, 7);

                    ground.ctx1.fillRect(195, 90, 195, 7);
                    ground.ctx1.fillRect(195, 235, 96, 7);
                    ground.ctx1.fillRect(195, 170, 35, 7);

                    ground.ctx1.fillRect(298, 0, 20, 95);


                    ground.ctx1.fillStyle = "red";
                    ground.ctx1.fillRect(165, 347, 65, 33);
                    ground.ctx1.fillRect(325, 347, 33, 33);
                    ground.ctx1.fillRect(389, 347, 33, 33);
                    //----------------------grafika
                    ground.ctx2.drawImage(document.getElementById("ground0"), 0, 0, 647, 406)
                    if (levels.zero.potions == 0)
                        ground.ctx2.drawImage(document.getElementById("ground0a"), 0, 0, 647, 406)
                    if (player.zwrot == "p") {
                        ground.ctx2.drawImage(document.getElementById("monkey"), player.x - 14, player.y, 56, 46)
                    } else {
                        ground.ctx2.drawImage(document.getElementById("monkeya"), player.x, player.y, 56, 46)
                    }

                    ground.ctx2.fillStyle = "black";
                    ground.ctx2.fillRect(596, 0, 647, 406);
                    for (var i = 0; i < player.lifes; i++)
                        ground.ctx2.drawImage(document.getElementById("life"), 596, 55 * i, 52, 55)


                    ground.ctx2.fillStyle = "orange";
                    ground.ctx2.fillRect(582, 0, 14, 306);

                    ground.ctx2.fillStyle = "brown";
                    ground.ctx2.fillRect(582, 300, 14, 106);

                    ground.ctx2.fillStyle = "black";
                    ground.ctx2.fillRect(582, 0, 14, game.time * 2.5);

                    ground.ctx2.fillStyle = "grey";
                    for (var i = 0; i < levels.zero.data.length; i++) {
                        //console.log(levels.zero.data)
                        switch (levels.zero.data[i].type) {
                            case "platform":
                                ground.ctx1.fillStyle = "grey"
                                ground.ctx1.fillRect(levels.zero.data[i].x, levels.zero.data[i].y, 65, 7);
                                ground.ctx2.drawImage(document.getElementById("platform"), levels.zero.data[i].x, levels.zero.data[i].y, 65, 14)
                                if (levels.zero.data[i].zwrot == "l") {
                                    levels.zero.data[i].x -= 0.5
                                    if (levels.zero.data[i].x <= levels.zero.data[i].rangeLeft)
                                        levels.zero.data[i].zwrot = "p"
                                } else {

                                    levels.zero.data[i].x += 0.5
                                    if (levels.zero.data[i].x >= levels.zero.data[i].rangeRight)
                                        levels.zero.data[i].zwrot = "l"
                                }
                                break;

                            case "potion":
                                if (!levels.zero.data[i].touched) {
                                    ground.ctx2.drawImage(document.getElementById("potion"), levels.zero.data[i].x, levels.zero.data[i].y, 24, 30)
                                    if (Math.abs(player.x - levels.zero.data[i].x) <= 40 && Math.abs(player.y - levels.zero.data[i].y) <= 10) {
                                        levels.zero.data[i].touched = true
                                        levels.zero.potions -= 1
                                    }
                                }
                                break;

                            case "fallingplatform":
                                ground.ctx1.fillStyle = "grey"
                                if (levels.zero.data[i].y < levels.zero.data[i].rangeLeft) {
                                    ground.ctx2.drawImage(document.getElementById("fallingplatform"), levels.zero.data[i].x, levels.zero.data[i].y, 32, 14)
                                    ground.ctx1.fillRect(levels.zero.data[i].x, levels.zero.data[i].y, 33, 7);
                                    if (Math.abs(player.x - levels.zero.data[i].x) <= 33 && levels.zero.data[i].y - player.y <= 55 && levels.zero.data[i].y - player.y >= 0) {
                                        levels.zero.data[i].y += 0.15
                                    }
                                }
                                break;

                            case "dragon":
                                ground.ctx1.fillStyle = "red"
                                if (levels.zero.data[i].zwrot == "l") {
                                    levels.zero.data[i].x -= 0.4
                                    ground.ctx2.drawImage(document.getElementById("dragon"), levels.zero.data[i].x, levels.zero.data[i].y, 55, 66)
                                    if (levels.zero.data[i].x <= levels.zero.data[i].rangeLeft) {
                                        levels.zero.data[i].zwrot = "p"
                                    }
                                } else {

                                    levels.zero.data[i].x += 0.4
                                    ground.ctx2.drawImage(document.getElementById("dragona"), levels.zero.data[i].x, levels.zero.data[i].y, 56, 66)
                                    if (levels.zero.data[i].x >= levels.zero.data[i].rangeRight) {
                                        levels.zero.data[i].zwrot = "l"
                                    }
                                }

                                if (levels.zero.data[i].x == 373 && levels.zero.data[i].zwrot == "l")
                                    levels.zero.data[i].x = 373
                                ground.ctx1.fillRect(levels.zero.data[i].x, levels.zero.data[i].y, 55, 66)
                                break;

                            case "fire":
                                ground.ctx1.fillStyle = "red"
                                levels.zero.data[i].x -= 1
                                ground.ctx2.drawImage(document.getElementById("fire"), levels.zero.data[i].x, levels.zero.data[i].y, 48, 24)
                                ground.ctx1.fillRect(levels.zero.data[i].x, levels.zero.data[i].y, 48, 24)
                                if (levels.zero.data[i].x <= levels.zero.data[i].rangeLeft) {
                                    levels.zero.data[i].x = 373
                                }
                                break;
                        }
                    }
                    break;

                case 1:

                    ground.ctx1.clearRect(0, 0, 647, 406);
                    ground.ctx2.clearRect(0, 0, 647, 406);

                    ground.ctx1.fillStyle = "grey";
                    ground.ctx1.fillRect(0, 0, 581, 406);
                    ground.ctx1.fillStyle = "white";
                    ground.ctx1.fillRect(38, 0, 513, 379);
                    ground.ctx1.fillStyle = "blue";
                    ground.ctx1.fillRect(player.x, player.y, 42, 48);
                    ground.ctx1.fillStyle = "grey";
                    ground.ctx1.fillRect(419, 157, 30, 75);
                    ground.ctx1.fillRect(353, 190, 66, 7);
                    ground.ctx1.fillRect(323, 93, 30, 195);
                    ground.ctx1.fillRect(449, 204, 35, 7);
                    ground.ctx1.fillRect(200, 284, 360, 7);
                    ground.ctx1.fillRect(514, 253, 37, 33);
                    ground.ctx1.fillRect(387, 93, 168, 7);
                    ground.ctx1.fillRect(387, 60, 31, 34);
                    ground.ctx1.fillRect(258, 220, 67, 7);
                    ground.ctx1.fillRect(226, 205, 35, 7);
                    ground.ctx1.fillRect(162, 157, 35, 7);
                    ground.ctx1.fillRect(98, 93, 35, 7);
                    ground.ctx1.fillRect(354, 348, 35, 7);
                    ground.ctx1.fillRect(35, 206, 35, 7);
                    ground.ctx1.fillRect(35, 141, 129, 7);
                    ground.ctx1.fillRect(35, 76, 32, 66);
                    ground.ctx1.fillRect(35, 285, 122, 7);


                    ground.ctx1.fillStyle = "red";
                    ground.ctx1.fillRect(514, 347, 31, 33);
                    ground.ctx1.fillRect(34, 349, 33, 33);
                    ground.ctx1.fillRect(98, 349, 33, 33);
                    ground.ctx1.fillRect(290, 188, 33, 33);


                    //----------------------grafika
                    ground.ctx2.drawImage(document.getElementById("ground1"), 0, 0, 647, 406)
                    if (levels.first.potions <= 1)
                        ground.ctx2.drawImage(document.getElementById("ground1a"), 0, 0, 647, 406)
                    if (player.zwrot == "p") {
                        ground.ctx2.drawImage(document.getElementById("monkey"), player.x - 14, player.y, 56, 46)
                    } else {
                        ground.ctx2.drawImage(document.getElementById("monkeya"), player.x, player.y, 56, 46)
                    }
                    ground.ctx2.fillStyle = "black";
                    ground.ctx2.fillRect(596, 0, 647, 406);
                    for (var i = 0; i < player.lifes; i++)
                        ground.ctx2.drawImage(document.getElementById("life"), 596, 55 * i, 52, 55)


                    ground.ctx2.fillStyle = "orange";
                    ground.ctx2.fillRect(582, 0, 14, 306);

                    ground.ctx2.fillStyle = "brown";
                    ground.ctx2.fillRect(582, 300, 14, 106);

                    ground.ctx2.fillStyle = "black";
                    ground.ctx2.fillRect(582, 0, 14, game.time * 2.5);

                    ground.ctx2.fillStyle = "grey";
                    for (var i = 0; i < levels.first.data.length; i++) {
                        //console.log(levels.zero.data)
                        switch (levels.first.data[i].type) {

                            case "potion":
                                if (!levels.first.data[i].touched) {
                                    ground.ctx2.drawImage(document.getElementById("potion"), levels.first.data[i].x, levels.first.data[i].y, 24, 30)
                                    if (Math.abs(player.x - levels.first.data[i].x) <= 40 && Math.abs(player.y - levels.first.data[i].y) <= 10) {
                                        levels.first.data[i].touched = true
                                        levels.first.potions -= 1
                                    }
                                }
                                break;

                            case "fallingplatform":
                                ground.ctx1.fillStyle = "grey"
                                if (levels.first.data[i].y < levels.first.data[i].rangeLeft) {
                                    ground.ctx2.drawImage(document.getElementById("fallingplatform"), levels.first.data[i].x, levels.first.data[i].y, 32, 14)
                                    ground.ctx1.fillRect(levels.first.data[i].x, levels.first.data[i].y, 33, 7);
                                    if (Math.abs(player.x - levels.first.data[i].x) <= 33 && levels.first.data[i].y - player.y <= 55 && levels.first.data[i].y - player.y >= 0) {
                                        levels.first.data[i].y += 0.15
                                    }
                                }
                                break;

                            case "ant":
                                ground.ctx1.fillStyle = "red"
                                if (levels.first.data[i].zwrot == "l") {
                                    levels.first.data[i].x -= 0.4
                                    ground.ctx2.drawImage(document.getElementById("ant"), levels.first.data[i].x, levels.first.data[i].y, 80, 24)
                                    if (levels.first.data[i].x <= levels.first.data[i].rangeLeft) {
                                        levels.first.data[i].zwrot = "p"
                                    }
                                } else {

                                    levels.first.data[i].x += 0.4
                                    ground.ctx2.drawImage(document.getElementById("anta"), levels.first.data[i].x, levels.first.data[i].y, 80, 24)
                                    if (levels.first.data[i].x >= levels.first.data[i].rangeRight) {
                                        levels.first.data[i].zwrot = "l"
                                    }
                                }

                                ground.ctx1.fillRect(levels.first.data[i].x, levels.first.data[i].y, 80, 24)
                                break;

                            case "poison":
                                ground.ctx1.fillStyle = "red"
                                if (levels.first.data[i].zwrot == "l") {
                                    levels.first.data[i].y -= 0.4
                                    ground.ctx2.drawImage(document.getElementById("poison"), levels.first.data[i].x, levels.first.data[i].y, 32, 36)
                                    if (levels.first.data[i].y <= levels.first.data[i].rangeLeft) {
                                        levels.first.data[i].zwrot = "p"
                                    }
                                } else {

                                    levels.first.data[i].y += 0.4
                                    ground.ctx2.drawImage(document.getElementById("poison"), levels.first.data[i].x, levels.first.data[i].y, 32, 36)
                                    if (levels.first.data[i].y >= levels.first.data[i].rangeRight) {
                                        levels.first.data[i].zwrot = "l"
                                    }
                                }

                                ground.ctx1.fillRect(levels.first.data[i].x, levels.first.data[i].y, 32, 36)
                                break;

                        }
                    }
                    break;
            }
        },

        animate: setInterval(function () {
            ground.init()
        }, 10)
    }


    var player = {
        x: 231,
        y: 3,
        lifes: 4,
        zwrot: "p",
        left: false,
        right: false,
        up: false,
        upCase: true,
        downrange: 0,

        move: setInterval(function () {


            //---------------red
            var red = false
            for (var i = 0; i < 42; i++) {
                var redCheck1 = ground.ctx1.getImageData(player.x + i, player.y - 1, 1, 1)
                var redCheck2 = ground.ctx1.getImageData(player.x + i, player.y + 50, 1, 1)
                if (redCheck1.data[0] == 255 && redCheck1.data[1] == 0 && redCheck1.data[2] == 0)
                    red = true
                if (redCheck2.data[0] == 255 && redCheck2.data[1] == 0 && redCheck2.data[2] == 0)
                    red = true
            }
            for (var i = 0; i < 48; i++) {
                var redCheck1 = ground.ctx1.getImageData(player.x - 1, player.y + i, 1, 1)
                var redCheck2 = ground.ctx1.getImageData(player.x + 43, player.y + i, 1, 1)
                if (redCheck1.data[0] == 255 && redCheck1.data[1] == 0 && redCheck1.data[2] == 0)
                    red = true
                if (redCheck2.data[0] == 255 && redCheck2.data[1] == 0 && redCheck2.data[2] == 0)
                    red = true
            }
            if (red)
                game.die()
            //-------------------

            //------------next level
            if (ground.lvl == 0)
                if (Math.abs(player.x - levels.zero.outPosition[0]) <= 11 && levels.zero.outPosition[1] - player.y <= 20 && levels.zero.outPosition[1] - player.y >= 0 && levels.zero.potions == 0) {
                    alert("Well done!")
                    ground.lvl++
                    player.x = levels.first.playerX
                    player.y = levels.first.playerY
                    game.time = 0
                }

            if (ground.lvl == 1)
                if (Math.abs(player.x - levels.first.outPosition[0]) <= 11 && levels.first.outPosition[1] - player.y <= 30 && levels.first.outPosition[1] - player.y >= 0 && levels.first.potions <= 1) {
                    alert("Well done!")
                    ground.lvl++
                }

            //----------------------

            var imgDataDown = ground.ctx1.getImageData(player.x + 5, player.y + 49, 1, 1)

            if (player.left) {
                player.zwrot = "l"
                var imgData = ground.ctx1.getImageData(player.x - 1, player.y + 48, 1, 1)
                if (imgData.data[0] != 128 && imgData.data[1] != 128 && imgData.data[2] != 128) {
                    player.x--
                }

            }


            if (player.right) {
                player.zwrot = "p"
                var imgData = ground.ctx1.getImageData(player.x + 44, player.y + 48, 1, 1)
                if (imgData.data[0] != 128 && imgData.data[1] != 128 && imgData.data[2] != 128) {
                    player.x++
                }

            }

            if (player.up && player.upCase) {
                var skok = setInterval(function () {
                    player.y -= 0.1
                }, 20)
                setTimeout(function () {
                    clearInterval(skok)
                    player.up = false
                }, 350)
                //}
            }
            if (!player.up) {
                var upadek = setInterval(function () {
                    player.upCase = false
                    var imgData2 = ground.ctx1.getImageData(player.x, player.y + 49, 40, 1)
                    //console.log(imgData2)
                    var falling = true;

                    for (var i = 0; i < imgData2.data.length; i++) {
                        if (imgData2.data[i] != 255) {
                            falling = false
                            //console.log(i, imgData2.data[i])
                        }
                    }


                    if (falling) {
                        //if (imgData2.data[0] != 128 && imgData2.data[1] != 128 && imgData2.data[2] != 128 && imgData3.data[0] != 128 && imgData3.data[1] != 128 && imgData3.data[2] != 128) {
                        player.y += 0.15
                        player.downrange += 0.15
                    }
                    else {
                        clearInterval(upadek)
                        player.upCase = true
                        //console.log(player.downrange)
                        if (player.downrange >= 93) {
                            game.die()
                        }
                        player.downrange = 0
                    }

                }, 10)
            }
        }, 10)
    }


    //----------------------------------------------------------------

    document.body.onkeydown = function (e) {
        var k = e.which
        switch (k) {
            case 37:
                player.left = true;
                break;

            case 38:
                if (!player.up)
                    player.up = true;
                break;

            case 39:
                player.right = true;
                break;

            case 32://spacja
                break;
        }
    }


    document.body.onkeyup = function (e) {
        var k = e.which
        console.log(k)
        switch (k) {
            case 37:
                player.left = false;
                break;

            case 38:
                break;

            case 39:
                player.right = false;
                break;

            case 32://spacja
                break;
        }
    }

    //----------------------------------------------
    game.init()
    game.stoper()

    function wsp(e) {
        var canvas = document.getElementsByTagName("canvas")[0];
        var l = e.clientX - parseInt(getComputedStyle(canvas).left)

    }
}