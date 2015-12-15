function Zoom(setting) {
    this.iNow = 0;
    this.aSort = [];
    this.zoompcitimer = null;
    this.$liBox = setting.box;
    this.aLi = this.$liBox.find("li");
    this.aPosition = setting.aPosition;
    this.maxWidth = setting.maxWidth;
    this.duration = setting.duration || 200;
    this.isShadow = setting.isShadow;
}

Zoom.prototype.init = function () {
    var t = this;
    $.each(t.aLi, function (key, value) {
        var pItem = t.aSort[key] = t.aPosition[key],
            $li = $(value)
        $li.css({
            width: pItem.width,
            height: pItem.height,
            top: pItem.top,
            left: pItem.left,
            zIndex: pItem.zIndex
        });
        t.shadow(pItem.width + "px", $li);
    })

    t.aLi.click(function () {
        var iSort = $(this).index();
        t.tab(iSort)
        if ($(this).css("width") == t.maxWidth) {
            window.location = $(t.aLi[iSort]).find("a").attr("href");
        }
    })

    return t;
}


Zoom.prototype.autoPlay = function () {
    /*轮播开启与关闭*/
    var t = this;
    t.$liBox.hover(function () {
        clearInterval(t.zoompcitimer);
    }, function () {
        t.zoompcitimer = setInterval(function () {
            t.setInter();
        }, 5000);
    })

    /*轮播定义*/
    t.zoompcitimer = setInterval(function () {
        t.setInter();
    }, 5000);

    return t;
}

Zoom.prototype.setInter = function () {
    this.iNow++;
    if (this.iNow > this.aLi.length - 1) this.iNow = 0;
    this.tab(this.iNow);

    return this;
}

Zoom.prototype.tab = function (index) {
    var iSort = index;
    this.sort();
    for (var i = 0; i < iSort; i++) {
        this.aSort.unshift(this.aSort.pop());
    }
    this.sMove(index);

    return this;
}

Zoom.prototype.sort = function () {
    for (var i = 0; i < this.aLi.length; i++) {
        this.aSort[i] = this.aPosition[i];
    }
    return;
}

Zoom.prototype.sMove = function (index) {
    var t = this;
    t.aLi.removeClass("active");
    $.each(t.aLi, function (key, value) {
        $(value).animate(t.aSort[key], t.duration, "linear", function () {
            var maxLi = t.aLi.eq(index)
            t.shadow(maxLi.css("width"), maxLi);
        });
    })
}

Zoom.prototype.shadow = function (w, tli) {
    if (this.isShadow && tli.css("width") == this.maxWidth) {
        tli.addClass("active");
    }
}