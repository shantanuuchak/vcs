/*! Video.js v4.2.1 Copyright 2013 Brightcove, Inc. https://github.com/videojs/video.js/blob/master/LICENSE */ (function () {
  var b = void 0,
    f = !0,
    j = null,
    l = !1;
  function m() {
    return function () {};
  }
  function p(a) {
    return function () {
      return this[a];
    };
  }
  function q(a) {
    return function () {
      return a;
    };
  }
  var t;
  document.createElement("video");
  document.createElement("audio");
  document.createElement("track");
  function u(a, c, d) {
    if ("string" === typeof a) {
      0 === a.indexOf("#") && (a = a.slice(1));
      if (u.wa[a]) return u.wa[a];
      a = u.v(a);
    }
    if (!a || !a.nodeName)
      throw new TypeError("The element or ID supplied is not valid. (videojs)");
    return a.player || new u.w(a, c, d);
  }
  var v = u;
  window.Qd = window.Rd = u;
  u.Rb = "4.2";
  u.Bc = "https:" == document.location.protocol ? "https://" : "https://";
  u.options = {
    techOrder: ["html5", "flash"],
    html5: {},
    flash: {},
    width: 300,
    height: 150,
    defaultVolume: 0,
    children: {
      mediaLoader: {},
      posterImage: {},
      textTrackDisplay: {},
      loadingSpinner: {},
      bigPlayButton: {},
      controlBar: {},
    },
    notSupportedMessage:
      'Sorry, no compatible source and playback technology were found for this video. Try using another browser like <a href="https://bit.ly/ccMUEC">Chrome</a> or download the latest <a href="https://adobe.ly/mwfN1">Adobe Flash Player</a>.',
  };
  "GENERATED_CDN_VSN" !== u.Rb &&
    (v.options.flash.swf = u.Bc + "vjs.zencdn.net/" + u.Rb + "/video-js.swf");
  u.wa = {};
  u.ka = u.CoreObject = m();
  u.ka.extend = function (a) {
    var c, d;
    a = a || {};
    c = a.init || a.i || this.prototype.init || this.prototype.i || m();
    d = function () {
      c.apply(this, arguments);
    };
    d.prototype = u.k.create(this.prototype);
    d.prototype.constructor = d;
    d.extend = u.ka.extend;
    d.create = u.ka.create;
    for (var e in a) a.hasOwnProperty(e) && (d.prototype[e] = a[e]);
    return d;
  };
  u.ka.create = function () {
    var a = u.k.create(this.prototype);
    this.apply(a, arguments);
    return a;
  };
  u.d = function (a, c, d) {
    var e = u.getData(a);
    e.z || (e.z = {});
    e.z[c] || (e.z[c] = []);
    d.s || (d.s = u.s++);
    e.z[c].push(d);
    e.W ||
      ((e.disabled = l),
      (e.W = function (c) {
        if (!e.disabled) {
          c = u.gc(c);
          var d = e.z[c.type];
          if (d)
            for (var d = d.slice(0), k = 0, r = d.length; k < r && !c.lc(); k++)
              d[k].call(a, c);
        }
      }));
    1 == e.z[c].length &&
      (document.addEventListener
        ? a.addEventListener(c, e.W, l)
        : document.attachEvent && a.attachEvent("on" + c, e.W));
  };
  u.n = function (a, c, d) {
    if (u.kc(a)) {
      var e = u.getData(a);
      if (e.z)
        if (c) {
          var g = e.z[c];
          if (g) {
            if (d) {
              if (d.s)
                for (e = 0; e < g.length; e++)
                  g[e].s === d.s && g.splice(e--, 1);
            } else e.z[c] = [];
            u.dc(a, c);
          }
        } else for (g in e.z) (c = g), (e.z[c] = []), u.dc(a, c);
    }
  };
  u.dc = function (a, c) {
    var d = u.getData(a);
    0 === d.z[c].length &&
      (delete d.z[c],
      document.removeEventListener
        ? a.removeEventListener(c, d.W, l)
        : document.detachEvent && a.detachEvent("on" + c, d.W));
    u.Ab(d.z) && (delete d.z, delete d.W, delete d.disabled);
    u.Ab(d) && u.qc(a);
  };
  u.gc = function (a) {
    function c() {
      return f;
    }
    function d() {
      return l;
    }
    if (!a || !a.Bb) {
      var e = a || window.event;
      a = {};
      for (var g in e) "layerX" !== g && "layerY" !== g && (a[g] = e[g]);
      a.target || (a.target = a.srcElement || document);
      a.relatedTarget =
        a.fromElement === a.target ? a.toElement : a.fromElement;
      a.preventDefault = function () {
        e.preventDefault && e.preventDefault();
        a.returnValue = l;
        a.zb = c;
      };
      a.zb = d;
      a.stopPropagation = function () {
        e.stopPropagation && e.stopPropagation();
        a.cancelBubble = f;
        a.Bb = c;
      };
      a.Bb = d;
      a.stopImmediatePropagation = function () {
        e.stopImmediatePropagation && e.stopImmediatePropagation();
        a.lc = c;
        a.stopPropagation();
      };
      a.lc = d;
      if (a.clientX != j) {
        g = document.documentElement;
        var h = document.body;
        a.pageX =
          a.clientX +
          ((g && g.scrollLeft) || (h && h.scrollLeft) || 0) -
          ((g && g.clientLeft) || (h && h.clientLeft) || 0);
        a.pageY =
          a.clientY +
          ((g && g.scrollTop) || (h && h.scrollTop) || 0) -
          ((g && g.clientTop) || (h && h.clientTop) || 0);
      }
      a.which = a.charCode || a.keyCode;
      a.button != j &&
        (a.button = a.button & 1 ? 0 : a.button & 4 ? 1 : a.button & 2 ? 2 : 0);
    }
    return a;
  };
  u.j = function (a, c) {
    var d = u.kc(a) ? u.getData(a) : {},
      e = a.parentNode || a.ownerDocument;
    "string" === typeof c && (c = { type: c, target: a });
    c = u.gc(c);
    d.W && d.W.call(a, c);
    if (e && !c.Bb() && c.bubbles !== l) u.j(e, c);
    else if (!e && !c.zb() && ((d = u.getData(c.target)), c.target[c.type])) {
      d.disabled = f;
      if ("function" === typeof c.target[c.type]) c.target[c.type]();
      d.disabled = l;
    }
    return !c.zb();
  };
  u.U = function (a, c, d) {
    function e() {
      u.n(a, c, e);
      d.apply(this, arguments);
    }
    e.s = d.s = d.s || u.s++;
    u.d(a, c, e);
  };
  var w = Object.prototype.hasOwnProperty;
  u.e = function (a, c) {
    var d, e;
    d = document.createElement(a || "div");
    for (e in c)
      w.call(c, e) &&
        (-1 !== e.indexOf("aria-") || "role" == e
          ? d.setAttribute(e, c[e])
          : (d[e] = c[e]));
    return d;
  };
  u.$ = function (a) {
    return a.charAt(0).toUpperCase() + a.slice(1);
  };
  u.k = {};
  u.k.create =
    Object.create ||
    function (a) {
      function c() {}
      c.prototype = a;
      return new c();
    };
  u.k.ta = function (a, c, d) {
    for (var e in a) w.call(a, e) && c.call(d || this, e, a[e]);
  };
  u.k.B = function (a, c) {
    if (!c) return a;
    for (var d in c) w.call(c, d) && (a[d] = c[d]);
    return a;
  };
  u.k.fc = function (a, c) {
    var d, e, g;
    a = u.k.copy(a);
    for (d in c)
      w.call(c, d) &&
        ((e = a[d]),
        (g = c[d]),
        (a[d] = u.k.mc(e) && u.k.mc(g) ? u.k.fc(e, g) : c[d]));
    return a;
  };
  u.k.copy = function (a) {
    return u.k.B({}, a);
  };
  u.k.mc = function (a) {
    return (
      !!a &&
      "object" === typeof a &&
      "[object Object]" === a.toString() &&
      a.constructor === Object
    );
  };
  u.bind = function (a, c, d) {
    function e() {
      return c.apply(a, arguments);
    }
    c.s || (c.s = u.s++);
    e.s = d ? d + "_" + c.s : c.s;
    return e;
  };
  u.qa = {};
  u.s = 1;
  u.expando = "vdata" + new Date().getTime();
  u.getData = function (a) {
    var c = a[u.expando];
    c || ((c = a[u.expando] = u.s++), (u.qa[c] = {}));
    return u.qa[c];
  };
  u.kc = function (a) {
    a = a[u.expando];
    return !(!a || u.Ab(u.qa[a]));
  };
  u.qc = function (a) {
    var c = a[u.expando];
    if (c) {
      delete u.qa[c];
      try {
        delete a[u.expando];
      } catch (d) {
        a.removeAttribute ? a.removeAttribute(u.expando) : (a[u.expando] = j);
      }
    }
  };
  u.Ab = function (a) {
    for (var c in a) if (a[c] !== j) return l;
    return f;
  };
  u.m = function (a, c) {
    -1 == (" " + a.className + " ").indexOf(" " + c + " ") &&
      (a.className = "" === a.className ? c : a.className + " " + c);
  };
  u.t = function (a, c) {
    var d, e;
    if (-1 != a.className.indexOf(c)) {
      d = a.className.split(" ");
      for (e = d.length - 1; 0 <= e; e--) d[e] === c && d.splice(e, 1);
      a.className = d.join(" ");
    }
  };
  u.ma = u.e("video");
  u.G = navigator.userAgent;
  u.Hc = /iPhone/i.test(u.G);
  u.Gc = /iPad/i.test(u.G);
  u.Ic = /iPod/i.test(u.G);
  u.Fc = u.Hc || u.Gc || u.Ic;
  var aa = u,
    x;
  var y = u.G.match(/OS (\d+)_/i);
  x = y && y[1] ? y[1] : b;
  aa.Cd = x;
  u.Dc = /Android/i.test(u.G);
  var ba = u,
    z;
  var A = u.G.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i),
    B,
    C;
  A
    ? ((B = A[1] && parseFloat(A[1])),
      (C = A[2] && parseFloat(A[2])),
      (z = B && C ? parseFloat(A[1] + "." + A[2]) : B ? B : j))
    : (z = j);
  ba.Cc = z;
  u.Jc = u.Dc && /webkit/i.test(u.G) && 2.3 > u.Cc;
  u.Ec = /Firefox/i.test(u.G);
  u.Dd = /Chrome/i.test(u.G);
  u.Mc = "ontouchstart" in window;
  u.wb = function (a) {
    var c, d, e, g;
    c = {};
    if (a && a.attributes && 0 < a.attributes.length) {
      d = a.attributes;
      for (var h = d.length - 1; 0 <= h; h--) {
        e = d[h].name;
        g = d[h].value;
        if (
          "boolean" === typeof a[e] ||
          -1 !== ",autoplay,controls,loop,muted,default,".indexOf("," + e + ",")
        )
          g = g !== j ? f : l;
        c[e] = g;
      }
    }
    return c;
  };
  u.Hd = function (a, c) {
    var d = "";
    document.defaultView && document.defaultView.getComputedStyle
      ? (d = document.defaultView.getComputedStyle(a, "").getPropertyValue(c))
      : a.currentStyle &&
        (d = a["client" + c.substr(0, 1).toUpperCase() + c.substr(1)] + "px");
    return d;
  };
  u.yb = function (a, c) {
    c.firstChild ? c.insertBefore(a, c.firstChild) : c.appendChild(a);
  };
  u.Nb = {};
  u.v = function (a) {
    0 === a.indexOf("#") && (a = a.slice(1));
    return document.getElementById(a);
  };
  u.Ka = function (a, c) {
    c = c || a;
    var d = Math.floor(a % 60),
      e = Math.floor((a / 60) % 60),
      g = Math.floor(a / 3600),
      h = Math.floor((c / 60) % 60),
      k = Math.floor(c / 3600);
    if (isNaN(a) || Infinity === a) g = e = d = "-";
    g = 0 < g || 0 < k ? g + ":" : "";
    return (
      g +
      (((g || 10 <= h) && 10 > e ? "0" + e : e) + ":") +
      (10 > d ? "0" + d : d)
    );
  };
  u.Pc = function () {
    document.body.focus();
    document.onselectstart = q(l);
  };
  u.yd = function () {
    document.onselectstart = q(f);
  };
  u.trim = function (a) {
    return (a + "").replace(/^\s+|\s+$/g, "");
  };
  u.round = function (a, c) {
    c || (c = 0);
    return Math.round(a * Math.pow(10, c)) / Math.pow(10, c);
  };
  u.sb = function (a, c) {
    return {
      length: 1,
      start: function () {
        return a;
      },
      end: function () {
        return c;
      },
    };
  };
  u.get = function (a, c, d) {
    var e, g;
    "undefined" === typeof XMLHttpRequest &&
      (window.XMLHttpRequest = function () {
        try {
          return new window.ActiveXObject("Msxml2.XMLHTTP.6.0");
        } catch (a) {}
        try {
          return new window.ActiveXObject("Msxml2.XMLHTTP.3.0");
        } catch (c) {}
        try {
          return new window.ActiveXObject("Msxml2.XMLHTTP");
        } catch (d) {}
        throw Error("This browser does not support XMLHttpRequest.");
      });
    g = new XMLHttpRequest();
    try {
      g.open("GET", a);
    } catch (h) {
      d(h);
    }
    e =
      0 === a.indexOf("file:") ||
      (0 === window.location.href.indexOf("file:") && -1 === a.indexOf("http"));
    g.onreadystatechange = function () {
      4 === g.readyState &&
        (200 === g.status || (e && 0 === g.status)
          ? c(g.responseText)
          : d && d());
    };
    try {
      g.send();
    } catch (k) {
      d && d(k);
    }
  };
  u.qd = function (a) {
    try {
      var c = window.localStorage || l;
      c && (c.volume = a);
    } catch (d) {
      22 == d.code || 1014 == d.code
        ? u.log("LocalStorage Full (VideoJS)", d)
        : 18 == d.code
        ? u.log("LocalStorage not allowed (VideoJS)", d)
        : u.log("LocalStorage Error (VideoJS)", d);
    }
  };
  u.ic = function (a) {
    a.match(/^https?:\/\//) ||
      (a = u.e("div", { innerHTML: '<a href="' + a + '">x</a>' }).firstChild
        .href);
    return a;
  };
  u.log = function () {
    u.log.history = u.log.history || [];
    u.log.history.push(arguments);
    window.console && window.console.log(Array.prototype.slice.call(arguments));
  };
  u.Xc = function (a) {
    var c, d;
    a.getBoundingClientRect && a.parentNode && (c = a.getBoundingClientRect());
    if (!c) return { left: 0, top: 0 };
    a = document.documentElement;
    d = document.body;
    return {
      left:
        c.left +
        (window.pageXOffset || d.scrollLeft) -
        (a.clientLeft || d.clientLeft || 0),
      top:
        c.top +
        (window.pageYOffset || d.scrollTop) -
        (a.clientTop || d.clientTop || 0),
    };
  };
  u.c = u.ka.extend({
    i: function (a, c, d) {
      this.b = a;
      this.g = u.k.copy(this.g);
      c = this.options(c);
      this.Q =
        c.id || (c.el && c.el.id ? c.el.id : a.id() + "_component_" + u.s++);
      this.cd = c.name || j;
      this.a = c.el || this.e();
      this.H = [];
      this.pb = {};
      this.V = {};
      if ((a = this.g) && a.children) {
        var e = this;
        u.k.ta(a.children, function (a, c) {
          c !== l && !c.loadEvent && (e[a] = e.Z(a, c));
        });
      }
      this.M(d);
    },
  });
  t = u.c.prototype;
  t.D = function () {
    this.j("dispose");
    if (this.H)
      for (var a = this.H.length - 1; 0 <= a; a--) this.H[a].D && this.H[a].D();
    this.V = this.pb = this.H = j;
    this.n();
    this.a.parentNode && this.a.parentNode.removeChild(this.a);
    u.qc(this.a);
    this.a = j;
  };
  t.L = p("b");
  t.options = function (a) {
    return a === b ? this.g : (this.g = u.k.fc(this.g, a));
  };
  t.e = function (a, c) {
    return u.e(a, c);
  };
  t.v = p("a");
  t.id = p("Q");
  t.name = p("cd");
  t.children = p("H");
  t.Z = function (a, c) {
    var d, e;
    "string" === typeof a
      ? ((e = a),
        (c = c || {}),
        (d = c.componentClass || u.$(e)),
        (c.name = e),
        (d = new window.videojs[d](this.b || this, c)))
      : (d = a);
    this.H.push(d);
    "function" === typeof d.id && (this.pb[d.id()] = d);
    (e = e || (d.name && d.name())) && (this.V[e] = d);
    "function" === typeof d.el &&
      d.el() &&
      (this.ra || this.a).appendChild(d.el());
    return d;
  };
  t.removeChild = function (a) {
    "string" === typeof a && (a = this.V[a]);
    if (a && this.H) {
      for (var c = l, d = this.H.length - 1; 0 <= d; d--)
        if (this.H[d] === a) {
          c = f;
          this.H.splice(d, 1);
          break;
        }
      c &&
        ((this.pb[a.id] = j),
        (this.V[a.name] = j),
        (c = a.v()) &&
          c.parentNode === (this.ra || this.a) &&
          (this.ra || this.a).removeChild(a.v()));
    }
  };
  t.T = q("");
  t.d = function (a, c) {
    u.d(this.a, a, u.bind(this, c));
    return this;
  };
  t.n = function (a, c) {
    u.n(this.a, a, c);
    return this;
  };
  t.U = function (a, c) {
    u.U(this.a, a, u.bind(this, c));
    return this;
  };
  t.j = function (a, c) {
    u.j(this.a, a, c);
    return this;
  };
  t.M = function (a) {
    a &&
      (this.aa
        ? a.call(this)
        : (this.Ra === b && (this.Ra = []), this.Ra.push(a)));
    return this;
  };
  t.Ta = function () {
    this.aa = f;
    var a = this.Ra;
    if (a && 0 < a.length) {
      for (var c = 0, d = a.length; c < d; c++) a[c].call(this);
      this.Ra = [];
      this.j("ready");
    }
  };
  t.m = function (a) {
    u.m(this.a, a);
    return this;
  };
  t.t = function (a) {
    u.t(this.a, a);
    return this;
  };
  t.show = function () {
    this.a.style.display = "block";
    return this;
  };
  t.C = function () {
    this.a.style.display = "none";
    return this;
  };
  function D(a) {
    a.t("vjs-lock-showing");
  }
  t.disable = function () {
    this.C();
    this.show = m();
  };
  t.width = function (a, c) {
    return E(this, "width", a, c);
  };
  t.height = function (a, c) {
    return E(this, "height", a, c);
  };
  t.Tc = function (a, c) {
    return this.width(a, f).height(c);
  };
  function E(a, c, d, e) {
    if (d !== b)
      return (
        (a.a.style[c] =
          -1 !== ("" + d).indexOf("%") || -1 !== ("" + d).indexOf("px")
            ? d
            : "auto" === d
            ? ""
            : d + "px"),
        e || a.j("resize"),
        a
      );
    if (!a.a) return 0;
    d = a.a.style[c];
    e = d.indexOf("px");
    return -1 !== e
      ? parseInt(d.slice(0, e), 10)
      : parseInt(a.a["offset" + u.$(c)], 10);
  }
  u.q = u.c.extend({
    i: function (a, c) {
      u.c.call(this, a, c);
      var d = l;
      this.d("touchstart", function (a) {
        a.preventDefault();
        d = f;
      });
      this.d("touchmove", function () {
        d = l;
      });
      var e = this;
      this.d("touchend", function (a) {
        d && e.p(a);
        a.preventDefault();
      });
      this.d("click", this.p);
      this.d("focus", this.Na);
      this.d("blur", this.Ma);
    },
  });
  t = u.q.prototype;
  t.e = function (a, c) {
    c = u.k.B(
      {
        className: this.T(),
        innerHTML:
          '<div class="vjs-control-content"><span class="vjs-control-text">' +
          (this.pa || "Need Text") +
          "</span></div>",
        nd: "button",
        "aria-live": "polite",
        tabIndex: 0,
      },
      c
    );
    return u.c.prototype.e.call(this, a, c);
  };
  t.T = function () {
    return "vjs-control " + u.c.prototype.T.call(this);
  };
  t.p = m();
  t.Na = function () {
    u.d(document, "keyup", u.bind(this, this.ba));
  };
  t.ba = function (a) {
    if (32 == a.which || 13 == a.which) a.preventDefault(), this.p();
  };
  t.Ma = function () {
    u.n(document, "keyup", u.bind(this, this.ba));
  };
  u.O = u.c.extend({
    i: function (a, c) {
      u.c.call(this, a, c);
      this.Oc = this.V[this.g.barName];
      this.handle = this.V[this.g.handleName];
      a.d(this.oc, u.bind(this, this.update));
      this.d("mousedown", this.Oa);
      this.d("touchstart", this.Oa);
      this.d("focus", this.Na);
      this.d("blur", this.Ma);
      this.d("click", this.p);
      this.b.d("controlsvisible", u.bind(this, this.update));
      a.M(u.bind(this, this.update));
      this.P = {};
    },
  });
  t = u.O.prototype;
  t.e = function (a, c) {
    c = c || {};
    c.className += " vjs-slider";
    c = u.k.B(
      {
        nd: "slider",
        "aria-valuenow": 0,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        tabIndex: 0,
      },
      c
    );
    return u.c.prototype.e.call(this, a, c);
  };
  t.Oa = function (a) {
    a.preventDefault();
    u.Pc();
    this.P.move = u.bind(this, this.Gb);
    this.P.end = u.bind(this, this.Hb);
    u.d(document, "mousemove", this.P.move);
    u.d(document, "mouseup", this.P.end);
    u.d(document, "touchmove", this.P.move);
    u.d(document, "touchend", this.P.end);
    this.Gb(a);
  };
  t.Hb = function () {
    u.yd();
    u.n(document, "mousemove", this.P.move, l);
    u.n(document, "mouseup", this.P.end, l);
    u.n(document, "touchmove", this.P.move, l);
    u.n(document, "touchend", this.P.end, l);
    this.update();
  };
  t.update = function () {
    if (this.a) {
      var a,
        c = this.xb(),
        d = this.handle,
        e = this.Oc;
      isNaN(c) && (c = 0);
      a = c;
      if (d) {
        a = this.a.offsetWidth;
        var g = d.v().offsetWidth;
        a = g ? g / a : 0;
        c *= 1 - a;
        a = c + a / 2;
        d.v().style.left = u.round(100 * c, 2) + "%";
      }
      e.v().style.width = u.round(100 * a, 2) + "%";
    }
  };
  function F(a, c) {
    var d, e, g, h;
    d = a.a;
    e = u.Xc(d);
    h = g = d.offsetWidth;
    d = a.handle;
    if (a.g.zd)
      return (
        (h = e.top),
        (e = c.changedTouches ? c.changedTouches[0].pageY : c.pageY),
        d && ((d = d.v().offsetHeight), (h += d / 2), (g -= d)),
        Math.max(0, Math.min(1, (h - e + g) / g))
      );
    g = e.left;
    e = c.changedTouches ? c.changedTouches[0].pageX : c.pageX;
    d && ((d = d.v().offsetWidth), (g += d / 2), (h -= d));
    return Math.max(0, Math.min(1, (e - g) / h));
  }
  t.Na = function () {
    u.d(document, "keyup", u.bind(this, this.ba));
  };
  t.ba = function (a) {
    37 == a.which
      ? (a.preventDefault(), this.uc())
      : 39 == a.which && (a.preventDefault(), this.vc());
  };
  t.Ma = function () {
    u.n(document, "keyup", u.bind(this, this.ba));
  };
  t.p = function (a) {
    a.stopImmediatePropagation();
    a.preventDefault();
  };
  u.ea = u.c.extend();
  u.ea.prototype.defaultValue = 0;
  u.ea.prototype.e = function (a, c) {
    c = c || {};
    c.className += " vjs-slider-handle";
    c = u.k.B(
      {
        innerHTML:
          '<span class="vjs-control-text">' + this.defaultValue + "</span>",
      },
      c
    );
    return u.c.prototype.e.call(this, "div", c);
  };
  u.la = u.c.extend();
  function ca(a, c) {
    a.Z(c);
    c.d(
      "click",
      u.bind(a, function () {
        D(this);
      })
    );
  }
  u.la.prototype.e = function () {
    var a = this.options().Rc || "ul";
    this.ra = u.e(a, { className: "vjs-menu-content" });
    a = u.c.prototype.e.call(this, "div", {
      append: this.ra,
      className: "vjs-menu",
    });
    a.appendChild(this.ra);
    u.d(a, "click", function (a) {
      a.preventDefault();
      a.stopImmediatePropagation();
    });
    return a;
  };
  u.N = u.q.extend({
    i: function (a, c) {
      u.q.call(this, a, c);
      this.selected(c.selected);
    },
  });
  u.N.prototype.e = function (a, c) {
    return u.q.prototype.e.call(
      this,
      "li",
      u.k.B({ className: "vjs-menu-item", innerHTML: this.g.label }, c)
    );
  };
  u.N.prototype.p = function () {
    this.selected(f);
  };
  u.N.prototype.selected = function (a) {
    a
      ? (this.m("vjs-selected"), this.a.setAttribute("aria-selected", f))
      : (this.t("vjs-selected"), this.a.setAttribute("aria-selected", l));
  };
  u.R = u.q.extend({
    i: function (a, c) {
      u.q.call(this, a, c);
      this.va = this.Ja();
      this.Z(this.va);
      this.J && 0 === this.J.length && this.C();
      this.d("keyup", this.ba);
      this.a.setAttribute("aria-haspopup", f);
      this.a.setAttribute("role", "button");
    },
  });
  t = u.R.prototype;
  t.oa = l;
  t.Ja = function () {
    var a = new u.la(this.b);
    this.options().title &&
      a
        .v()
        .appendChild(
          u.e("li", {
            className: "vjs-menu-title",
            innerHTML: u.$(this.A),
            wd: -1,
          })
        );
    if ((this.J = this.createItems()))
      for (var c = 0; c < this.J.length; c++) ca(a, this.J[c]);
    return a;
  };
  t.sa = m();
  t.T = function () {
    return this.className + " vjs-menu-button " + u.q.prototype.T.call(this);
  };
  t.Na = m();
  t.Ma = m();
  t.p = function () {
    this.U(
      "mouseout",
      u.bind(this, function () {
        D(this.va);
        this.a.blur();
      })
    );
    this.oa ? G(this) : H(this);
  };
  t.ba = function (a) {
    a.preventDefault();
    32 == a.which || 13 == a.which
      ? this.oa
        ? G(this)
        : H(this)
      : 27 == a.which && this.oa && G(this);
  };
  function H(a) {
    a.oa = f;
    a.va.m("vjs-lock-showing");
    a.a.setAttribute("aria-pressed", f);
    a.J && 0 < a.J.length && a.J[0].v().focus();
  }
  function G(a) {
    a.oa = l;
    D(a.va);
    a.a.setAttribute("aria-pressed", l);
  }
  u.w = u.c.extend({
    i: function (a, c, d) {
      this.F = a;
      c = u.k.B(da(a), c);
      this.u = {};
      this.pc = c.poster;
      this.rb = c.controls;
      a.controls = l;
      u.c.call(this, this, c, d);
      this.controls()
        ? this.m("vjs-controls-enabled")
        : this.m("vjs-controls-disabled");
      this.U("play", function (a) {
        u.j(this.a, { type: "firstplay", target: this.a }) ||
          (a.preventDefault(),
          a.stopPropagation(),
          a.stopImmediatePropagation());
      });
      this.d("ended", this.ed);
      this.d("play", this.Jb);
      this.d("firstplay", this.fd);
      this.d("pause", this.Ib);
      this.d("progress", this.hd);
      this.d("durationchange", this.dd);
      this.d("error", this.Fb);
      this.d("fullscreenchange", this.gd);
      u.wa[this.Q] = this;
      c.plugins &&
        u.k.ta(
          c.plugins,
          function (a, c) {
            this[a](c);
          },
          this
        );
      var e, g, h, k;
      e = this.rc;
      a = function () {
        e();
        clearInterval(g);
        g = setInterval(u.bind(this, e), 250);
      };
      c = function () {
        e();
        clearInterval(g);
      };
      this.d("mousedown", a);
      this.d("mousemove", e);
      this.d("mouseup", c);
      this.d("keydown", e);
      this.d("keyup", e);
      this.d("touchstart", a);
      this.d("touchmove", e);
      this.d("touchend", c);
      this.d("touchcancel", c);
      h = setInterval(
        u.bind(this, function () {
          this.ja &&
            ((this.ja = l),
            I(this, f),
            clearTimeout(k),
            (k = setTimeout(
              u.bind(this, function () {
                this.ja || I(this, l);
              }),
              2e3
            )));
        }),
        250
      );
      this.d("dispose", function () {
        clearInterval(h);
        clearTimeout(k);
      });
    },
  });
  t = u.w.prototype;
  t.g = u.options;
  t.D = function () {
    this.j("dispose");
    this.n("dispose");
    u.wa[this.Q] = j;
    this.F && this.F.player && (this.F.player = j);
    this.a && this.a.player && (this.a.player = j);
    clearInterval(this.Qa);
    this.ya();
    this.h && this.h.D();
    u.c.prototype.D.call(this);
  };
  function da(a) {
    var c = { sources: [], tracks: [] };
    u.k.B(c, u.wb(a));
    if (a.hasChildNodes()) {
      var d, e, g, h;
      a = a.childNodes;
      g = 0;
      for (h = a.length; g < h; g++)
        (d = a[g]),
          (e = d.nodeName.toLowerCase()),
          "source" === e
            ? c.sources.push(u.wb(d))
            : "track" === e && c.tracks.push(u.wb(d));
    }
    return c;
  }
  t.e = function () {
    var a = (this.a = u.c.prototype.e.call(this, "div")),
      c = this.F;
    c.removeAttribute("width");
    c.removeAttribute("height");
    if (c.hasChildNodes()) {
      var d, e, g, h, k;
      d = c.childNodes;
      e = d.length;
      for (k = []; e--; )
        (g = d[e]),
          (h = g.nodeName.toLowerCase()),
          ("source" === h || "track" === h) && k.push(g);
      for (d = 0; d < k.length; d++) c.removeChild(k[d]);
    }
    c.id = c.id || "vjs_video_" + u.s++;
    a.id = c.id;
    a.className = c.className;
    c.id += "_html5_api";
    c.className = "vjs-tech";
    c.player = a.player = this;
    this.m("vjs-paused");
    this.width(this.g.width, f);
    this.height(this.g.height, f);
    c.parentNode && c.parentNode.insertBefore(a, c);
    u.yb(c, a);
    return a;
  };
  function J(a, c, d) {
    a.h
      ? ((a.aa = l),
        a.h.D(),
        a.Db && ((a.Db = l), clearInterval(a.Qa)),
        a.Eb && K(a),
        (a.h = l))
      : "Html5" !== c &&
        a.F &&
        (a.a.removeChild(a.F), (a.F.player = j), (a.F = j));
    a.ia = c;
    a.aa = l;
    var e = u.k.B({ source: d, parentEl: a.a }, a.g[c.toLowerCase()]);
    d &&
      (d.src == a.u.src &&
        0 < a.u.currentTime &&
        (e.startTime = a.u.currentTime),
      (a.u.src = d.src));
    a.h = new window.videojs[c](a, e);
    a.h.M(function () {
      this.b.Ta();
      if (!this.l.progressEvents) {
        var a = this.b;
        a.Db = f;
        a.Qa = setInterval(
          u.bind(a, function () {
            this.u.kb < this.buffered().end(0)
              ? this.j("progress")
              : 1 == this.Ia() && (clearInterval(this.Qa), this.j("progress"));
          }),
          500
        );
        a.h.U("progress", function () {
          this.l.progressEvents = f;
          var a = this.b;
          a.Db = l;
          clearInterval(a.Qa);
        });
      }
      this.l.timeupdateEvents ||
        ((a = this.b),
        (a.Eb = f),
        a.d("play", a.yc),
        a.d("pause", a.ya),
        a.h.U("timeupdate", function () {
          this.l.timeupdateEvents = f;
          K(this.b);
        }));
    });
  }
  function K(a) {
    a.Eb = l;
    a.ya();
    a.n("play", a.yc);
    a.n("pause", a.ya);
  }
  t.yc = function () {
    this.ec && this.ya();
    this.ec = setInterval(
      u.bind(this, function () {
        this.j("timeupdate");
      }),
      250
    );
  };
  t.ya = function () {
    clearInterval(this.ec);
  };
  t.ed = function () {
    this.g.loop && (this.currentTime(0), this.play());
  };
  t.Jb = function () {
    u.t(this.a, "vjs-paused");
    u.m(this.a, "vjs-playing");
  };
  t.fd = function () {
    this.g.starttime && this.currentTime(this.g.starttime);
    this.m("vjs-has-started");
  };
  t.Ib = function () {
    u.t(this.a, "vjs-playing");
    u.m(this.a, "vjs-paused");
  };
  t.hd = function () {
    1 == this.Ia() && this.j("loadedalldata");
  };
  t.dd = function () {
    this.duration(L(this, "duration"));
  };
  t.Fb = function (a) {
    u.log("Video Error", a);
  };
  t.gd = function () {
    this.I ? this.m("vjs-fullscreen") : this.t("vjs-fullscreen");
  };
  function M(a, c, d) {
    if (a.h && !a.h.aa)
      a.h.M(function () {
        this[c](d);
      });
    else
      try {
        a.h[c](d);
      } catch (e) {
        throw (u.log(e), e);
      }
  }
  function L(a, c) {
    if (a.h && a.h.aa)
      try {
        return a.h[c]();
      } catch (d) {
        throw (
          (a.h[c] === b
            ? u.log(
                "Video.js: " +
                  c +
                  " method not defined for " +
                  a.ia +
                  " playback technology.",
                d
              )
            : "TypeError" == d.name
            ? (u.log(
                "Video.js: " +
                  c +
                  " unavailable on " +
                  a.ia +
                  " playback technology element.",
                d
              ),
              (a.h.aa = l))
            : u.log(d),
          d)
        );
      }
  }
  t.play = function () {
    M(this, "play");
    return this;
  };
  t.pause = function () {
    M(this, "pause");
    return this;
  };
  t.paused = function () {
    return L(this, "paused") === l ? l : f;
  };
  t.currentTime = function (a) {
    return a !== b
      ? ((this.u.nc = a),
        M(this, "setCurrentTime", a),
        this.Eb && this.j("timeupdate"),
        this)
      : (this.u.currentTime = L(this, "currentTime") || 0);
  };
  t.duration = function (a) {
    return a !== b
      ? ((this.u.duration = parseFloat(a)), this)
      : this.u.duration;
  };
  t.buffered = function () {
    var a = L(this, "buffered"),
      c = a.length - 1,
      d = (this.u.kb = this.u.kb || 0);
    a && 0 <= c && a.end(c) !== d && ((d = a.end(c)), (this.u.kb = d));
    return u.sb(0, d);
  };
  t.Ia = function () {
    return this.duration() ? this.buffered().end(0) / this.duration() : 0;
  };
  t.volume = function (a) {
    if (a !== b)
      return (
        (a = Math.max(0, Math.min(1, parseFloat(a)))),
        (this.u.volume = a),
        M(this, "setVolume", a),
        u.qd(a),
        this
      );
    a = parseFloat(L(this, "volume"));
    return isNaN(a) ? 1 : a;
  };
  t.muted = function (a) {
    return a !== b ? (M(this, "setMuted", a), this) : L(this, "muted") || l;
  };
  t.Sa = function () {
    return L(this, "supportsFullScreen") || l;
  };
  t.xa = function () {
    var a = u.Nb.xa;
    this.I = f;
    a
      ? (u.d(
          document,
          a.ub,
          u.bind(this, function (c) {
            this.I = document[a.I];
            this.I === l && u.n(document, a.ub, arguments.callee);
            this.j("fullscreenchange");
          })
        ),
        this.a[a.sc]())
      : this.h.Sa()
      ? M(this, "enterFullScreen")
      : ((this.Zc = f),
        (this.Uc = document.documentElement.style.overflow),
        u.d(document, "keydown", u.bind(this, this.hc)),
        (document.documentElement.style.overflow = "hidden"),
        u.m(document.body, "vjs-full-window"),
        this.j("enterFullWindow"),
        this.j("fullscreenchange"));
    return this;
  };
  t.nb = function () {
    var a = u.Nb.xa;
    this.I = l;
    if (a) document[a.mb]();
    else
      this.h.Sa()
        ? M(this, "exitFullScreen")
        : (N(this), this.j("fullscreenchange"));
    return this;
  };
  t.hc = function (a) {
    27 === a.keyCode && (this.I === f ? this.nb() : N(this));
  };
  function N(a) {
    a.Zc = l;
    u.n(document, "keydown", a.hc);
    document.documentElement.style.overflow = a.Uc;
    u.t(document.body, "vjs-full-window");
    a.j("exitFullWindow");
  }
  t.src = function (a) {
    if (a instanceof Array) {
      var c;
      a: {
        c = a;
        for (var d = 0, e = this.g.techOrder; d < e.length; d++) {
          var g = u.$(e[d]),
            h = window.videojs[g];
          if (h.isSupported())
            for (var k = 0, r = c; k < r.length; k++) {
              var n = r[k];
              if (h.canPlaySource(n)) {
                c = { source: n, h: g };
                break a;
              }
            }
        }
        c = l;
      }
      c
        ? ((a = c.source),
          (c = c.h),
          c == this.ia ? this.src(a) : J(this, c, a))
        : this.a.appendChild(
            u.e("p", { innerHTML: this.options().notSupportedMessage })
          );
    } else
      a instanceof Object
        ? window.videojs[this.ia].canPlaySource(a)
          ? this.src(a.src)
          : this.src([a])
        : ((this.u.src = a),
          this.aa
            ? (M(this, "src", a),
              "auto" == this.g.preload && this.load(),
              this.g.autoplay && this.play())
            : this.M(function () {
                this.src(a);
              }));
    return this;
  };
  t.load = function () {
    M(this, "load");
    return this;
  };
  t.currentSrc = function () {
    return L(this, "currentSrc") || this.u.src || "";
  };
  t.Pa = function (a) {
    return a !== b
      ? (M(this, "setPreload", a), (this.g.preload = a), this)
      : L(this, "preload");
  };
  t.autoplay = function (a) {
    return a !== b
      ? (M(this, "setAutoplay", a), (this.g.autoplay = a), this)
      : L(this, "autoplay");
  };
  t.loop = function (a) {
    return a !== b
      ? (M(this, "setLoop", a), (this.g.loop = a), this)
      : L(this, "loop");
  };
  t.poster = function (a) {
    a !== b && (this.pc = a);
    return this.pc;
  };
  t.controls = function (a) {
    return a !== b
      ? ((a = !!a),
        this.rb !== a &&
          ((this.rb = a)
            ? (this.t("vjs-controls-disabled"),
              this.m("vjs-controls-enabled"),
              this.j("controlsenabled"))
            : (this.t("vjs-controls-enabled"),
              this.m("vjs-controls-disabled"),
              this.j("controlsdisabled"))),
        this)
      : this.rb;
  };
  u.w.prototype.Qb;
  t = u.w.prototype;
  t.Pb = function (a) {
    return a !== b
      ? ((a = !!a),
        this.Qb !== a &&
          ((this.Qb = a)
            ? (this.m("vjs-using-native-controls"),
              this.j("usingnativecontrols"))
            : (this.t("vjs-using-native-controls"),
              this.j("usingcustomcontrols"))),
        this)
      : this.Qb;
  };
  t.error = function () {
    return L(this, "error");
  };
  t.seeking = function () {
    return L(this, "seeking");
  };
  t.ja = f;
  t.rc = function () {
    this.ja = f;
  };
  t.Ob = f;
  function I(a, c) {
    return c !== b
      ? ((c = !!c),
        c !== a.Ob &&
          ((a.Ob = c)
            ? ((a.ja = f),
              a.t("vjs-user-inactive"),
              a.m("vjs-user-active"),
              a.j("useractive"))
            : ((a.ja = l),
              a.h.U("mousemove", function (a) {
                a.stopPropagation();
                a.preventDefault();
              }),
              a.t("vjs-user-active"),
              a.m("vjs-user-inactive"),
              a.j("userinactive"))),
        a)
      : a.Ob;
  }
  var O, P, Q;
  Q = document.createElement("div");
  P = {};
  Q.Ed !== b
    ? ((P.sc = "requestFullscreen"),
      (P.mb = "exitFullscreen"),
      (P.ub = "fullscreenchange"),
      (P.I = "fullScreen"))
    : (document.mozCancelFullScreen
        ? ((O = "moz"), (P.I = O + "FullScreen"))
        : ((O = "webkit"), (P.I = O + "IsFullScreen")),
      Q[O + "RequestFullScreen"] &&
        ((P.sc = O + "RequestFullScreen"), (P.mb = O + "CancelFullScreen")),
      (P.ub = O + "fullscreenchange"));
  document[P.mb] && (u.Nb.xa = P);
  u.Ea = u.c.extend();
  u.Ea.prototype.g = {
    Jd: "play",
    children: {
      playToggle: {},
      currentTimeDisplay: {},
      timeDivider: {},
      durationDisplay: {},
      remainingTimeDisplay: {},
      progressControl: {},
      fullscreenToggle: {},
      volumeControl: {},
      muteToggle: {},
    },
  };
  u.Ea.prototype.e = function () {
    return u.e("div", { className: "vjs-control-bar" });
  };
  u.Wb = u.q.extend({
    i: function (a, c) {
      u.q.call(this, a, c);
      a.d("play", u.bind(this, this.Jb));
      a.d("pause", u.bind(this, this.Ib));
    },
  });
  t = u.Wb.prototype;
  t.pa = "Play";
  t.T = function () {
    return "vjs-play-control " + u.q.prototype.T.call(this);
  };
  t.p = function () {
    this.b.paused() ? this.b.play() : this.b.pause();
  };
  t.Jb = function () {
    u.t(this.a, "vjs-paused");
    u.m(this.a, "vjs-playing");
    this.a.children[0].children[0].innerHTML = "Pause";
  };
  t.Ib = function () {
    u.t(this.a, "vjs-playing");
    u.m(this.a, "vjs-paused");
    this.a.children[0].children[0].innerHTML = "Play";
  };
  u.Xa = u.c.extend({
    i: function (a, c) {
      u.c.call(this, a, c);
      a.d("timeupdate", u.bind(this, this.Ba));
    },
  });
  u.Xa.prototype.e = function () {
    var a = u.c.prototype.e.call(this, "div", {
      className: "vjs-current-time vjs-time-controls vjs-control",
    });
    this.content = u.e("div", {
      className: "vjs-current-time-display",
      innerHTML: '<span class="vjs-control-text">Current Time </span>0:00',
      "aria-live": "off",
    });
    a.appendChild(u.e("div").appendChild(this.content));
    return a;
  };
  u.Xa.prototype.Ba = function () {
    var a = this.b.Lb ? this.b.u.currentTime : this.b.currentTime();
    this.content.innerHTML =
      '<span class="vjs-control-text">Current Time </span>' +
      u.Ka(a, this.b.duration());
  };
  u.Ya = u.c.extend({
    i: function (a, c) {
      u.c.call(this, a, c);
      a.d("timeupdate", u.bind(this, this.Ba));
    },
  });
  u.Ya.prototype.e = function () {
    var a = u.c.prototype.e.call(this, "div", {
      className: "vjs-duration vjs-time-controls vjs-control",
    });
    this.content = u.e("div", {
      className: "vjs-duration-display",
      innerHTML: '<span class="vjs-control-text">Duration Time </span>0:00',
      "aria-live": "off",
    });
    a.appendChild(u.e("div").appendChild(this.content));
    return a;
  };
  u.Ya.prototype.Ba = function () {
    var a = this.b.duration();
    a &&
      (this.content.innerHTML =
        '<span class="vjs-control-text">Duration Time </span>' + u.Ka(a));
  };
  u.$b = u.c.extend({
    i: function (a, c) {
      u.c.call(this, a, c);
    },
  });
  u.$b.prototype.e = function () {
    return u.c.prototype.e.call(this, "div", {
      className: "vjs-time-divider",
      innerHTML: "<div><span>/</span></div>",
    });
  };
  u.eb = u.c.extend({
    i: function (a, c) {
      u.c.call(this, a, c);
      a.d("timeupdate", u.bind(this, this.Ba));
    },
  });
  u.eb.prototype.e = function () {
    var a = u.c.prototype.e.call(this, "div", {
      className: "vjs-remaining-time vjs-time-controls vjs-control",
    });
    this.content = u.e("div", {
      className: "vjs-remaining-time-display",
      innerHTML: '<span class="vjs-control-text">Remaining Time </span>-0:00',
      "aria-live": "off",
    });
    a.appendChild(u.e("div").appendChild(this.content));
    return a;
  };
  u.eb.prototype.Ba = function () {
    this.b.duration() &&
      (this.content.innerHTML =
        '<span class="vjs-control-text">Remaining Time </span>-' +
        u.Ka(this.b.duration() - this.b.currentTime()));
  };
  u.Fa = u.q.extend({
    i: function (a, c) {
      u.q.call(this, a, c);
    },
  });
  u.Fa.prototype.pa = "Fullscreen";
  u.Fa.prototype.T = function () {
    return "vjs-fullscreen-control " + u.q.prototype.T.call(this);
  };
  u.Fa.prototype.p = function () {
    this.b.I
      ? (this.b.nb(), (this.a.children[0].children[0].innerHTML = "Fullscreen"))
      : (this.b.xa(),
        (this.a.children[0].children[0].innerHTML = "Non-Fullscreen"));
  };
  u.cb = u.c.extend({
    i: function (a, c) {
      u.c.call(this, a, c);
    },
  });
  u.cb.prototype.g = { children: { seekBar: {} } };
  u.cb.prototype.e = function () {
    return u.c.prototype.e.call(this, "div", {
      className: "vjs-progress-control vjs-control",
    });
  };
  u.Xb = u.O.extend({
    i: function (a, c) {
      u.O.call(this, a, c);
      a.d("timeupdate", u.bind(this, this.Aa));
      a.M(u.bind(this, this.Aa));
    },
  });
  t = u.Xb.prototype;
  t.g = {
    children: { loadProgressBar: {}, playProgressBar: {}, seekHandle: {} },
    barName: "playProgressBar",
    handleName: "seekHandle",
  };
  t.oc = "timeupdate";
  t.e = function () {
    return u.O.prototype.e.call(this, "div", {
      className: "vjs-progress-holder",
      "aria-label": "video progress bar",
    });
  };
  t.Aa = function () {
    var a = this.b.Lb ? this.b.u.currentTime : this.b.currentTime();
    this.a.setAttribute("aria-valuenow", u.round(100 * this.xb(), 2));
    this.a.setAttribute("aria-valuetext", u.Ka(a, this.b.duration()));
  };
  t.xb = function () {
    var a;
    "Flash" === this.b.ia && this.b.seeking()
      ? ((a = this.b.u), (a = a.nc ? a.nc : this.b.currentTime()))
      : (a = this.b.currentTime());
    return a / this.b.duration();
  };
  t.Oa = function (a) {
    u.O.prototype.Oa.call(this, a);
    this.b.Lb = f;
    this.Ad = !this.b.paused();
    this.b.pause();
  };
  t.Gb = function (a) {
    a = F(this, a) * this.b.duration();
    a == this.b.duration() && (a -= 0.1);
    this.b.currentTime(a);
  };
  t.Hb = function (a) {
    u.O.prototype.Hb.call(this, a);
    this.b.Lb = l;
    this.Ad && this.b.play();
  };
  t.vc = function () {
    this.b.currentTime(this.b.currentTime() + 5);
  };
  t.uc = function () {
    this.b.currentTime(this.b.currentTime() - 5);
  };
  u.$a = u.c.extend({
    i: function (a, c) {
      u.c.call(this, a, c);
      a.d("progress", u.bind(this, this.update));
    },
  });
  u.$a.prototype.e = function () {
    return u.c.prototype.e.call(this, "div", {
      className: "vjs-load-progress",
      innerHTML: '<span class="vjs-control-text">Loaded: 0%</span>',
    });
  };
  u.$a.prototype.update = function () {
    this.a.style && (this.a.style.width = u.round(100 * this.b.Ia(), 2) + "%");
  };
  u.Vb = u.c.extend({
    i: function (a, c) {
      u.c.call(this, a, c);
    },
  });
  u.Vb.prototype.e = function () {
    return u.c.prototype.e.call(this, "div", {
      className: "vjs-play-progress",
      innerHTML: '<span class="vjs-control-text">Progress: 0%</span>',
    });
  };
  u.fb = u.ea.extend();
  u.fb.prototype.defaultValue = "00:00";
  u.fb.prototype.e = function () {
    return u.ea.prototype.e.call(this, "div", { className: "vjs-seek-handle" });
  };
  u.hb = u.c.extend({
    i: function (a, c) {
      u.c.call(this, a, c);
      a.h && a.h.l && a.h.l.volumeControl === l && this.m("vjs-hidden");
      a.d(
        "loadstart",
        u.bind(this, function () {
          a.h.l && a.h.l.volumeControl === l
            ? this.m("vjs-hidden")
            : this.t("vjs-hidden");
        })
      );
    },
  });
  u.hb.prototype.g = { children: { volumeBar: {} } };
  u.hb.prototype.e = function () {
    return u.c.prototype.e.call(this, "div", {
      className: "vjs-volume-control vjs-control",
    });
  };
  u.gb = u.O.extend({
    i: function (a, c) {
      u.O.call(this, a, c);
      a.d("volumechange", u.bind(this, this.Aa));
      a.M(u.bind(this, this.Aa));
      setTimeout(u.bind(this, this.update), 0);
    },
  });
  t = u.gb.prototype;
  t.Aa = function () {
    this.a.setAttribute("aria-valuenow", u.round(100 * this.b.volume(), 2));
    this.a.setAttribute(
      "aria-valuetext",
      u.round(100 * this.b.volume(), 2) + "%"
    );
  };
  t.g = {
    children: { volumeLevel: {}, volumeHandle: {} },
    barName: "volumeLevel",
    handleName: "volumeHandle",
  };
  t.oc = "volumechange";
  t.e = function () {
    return u.O.prototype.e.call(this, "div", {
      className: "vjs-volume-bar",
      "aria-label": "volume level",
    });
  };
  t.Gb = function (a) {
    this.b.volume(F(this, a));
  };
  t.xb = function () {
    return this.b.muted() ? 0 : this.b.volume();
  };
  t.vc = function () {
    this.b.volume(this.b.volume() + 0.1);
  };
  t.uc = function () {
    this.b.volume(this.b.volume() - 0.1);
  };
  u.ac = u.c.extend({
    i: function (a, c) {
      u.c.call(this, a, c);
    },
  });
  u.ac.prototype.e = function () {
    return u.c.prototype.e.call(this, "div", {
      className: "vjs-volume-level",
      innerHTML: '<span class="vjs-control-text"></span>',
    });
  };
  u.ib = u.ea.extend();
  u.ib.prototype.defaultValue = "00:00";
  u.ib.prototype.e = function () {
    return u.ea.prototype.e.call(this, "div", {
      className: "vjs-volume-handle",
    });
  };
  u.da = u.q.extend({
    i: function (a, c) {
      u.q.call(this, a, c);
      a.d("volumechange", u.bind(this, this.update));
      a.h && a.h.l && a.h.l.volumeControl === l && this.m("vjs-hidden");
      a.d(
        "loadstart",
        u.bind(this, function () {
          a.h.l && a.h.l.volumeControl === l
            ? this.m("vjs-hidden")
            : this.t("vjs-hidden");
        })
      );
    },
  });
  u.da.prototype.e = function () {
    return u.q.prototype.e.call(this, "div", {
      className: "vjs-mute-control vjs-control",
      innerHTML: '<div><span class="vjs-control-text">Mute</span></div>',
    });
  };
  u.da.prototype.p = function () {
    this.b.muted(this.b.muted() ? l : f);
  };
  u.da.prototype.update = function () {
    var a = this.b.volume(),
      c = 3;
    0 === a || this.b.muted()
      ? (c = 0)
      : 0.33 > a
      ? (c = 1)
      : 0.67 > a && (c = 2);
    this.b.muted()
      ? "Unmute" != this.a.children[0].children[0].innerHTML &&
        (this.a.children[0].children[0].innerHTML = "Unmute")
      : "Mute" != this.a.children[0].children[0].innerHTML &&
        (this.a.children[0].children[0].innerHTML = "Mute");
    for (a = 0; 4 > a; a++) u.t(this.a, "vjs-vol-" + a);
    u.m(this.a, "vjs-vol-" + c);
  };
  u.na = u.R.extend({
    i: function (a, c) {
      u.R.call(this, a, c);
      a.d("volumechange", u.bind(this, this.update));
      a.h && a.h.l && a.h.l.zc === l && this.m("vjs-hidden");
      a.d(
        "loadstart",
        u.bind(this, function () {
          a.h.l && a.h.l.zc === l ? this.m("vjs-hidden") : this.t("vjs-hidden");
        })
      );
      this.m("vjs-menu-button");
    },
  });
  u.na.prototype.Ja = function () {
    var a = new u.la(this.b, { Rc: "div" }),
      c = new u.gb(this.b, u.k.B({ zd: f }, this.g.Sd));
    a.Z(c);
    return a;
  };
  u.na.prototype.p = function () {
    u.da.prototype.p.call(this);
    u.R.prototype.p.call(this);
  };
  u.na.prototype.e = function () {
    return u.q.prototype.e.call(this, "div", {
      className: "vjs-volume-menu-button vjs-menu-button vjs-control",
      innerHTML: '<div><span class="vjs-control-text">Mute</span></div>',
    });
  };
  u.na.prototype.update = u.da.prototype.update;
  u.bb = u.q.extend({
    i: function (a, c) {
      u.q.call(this, a, c);
      (!a.poster() || !a.controls()) && this.C();
      a.d("play", u.bind(this, this.C));
    },
  });
  u.bb.prototype.e = function () {
    var a = u.e("div", { className: "vjs-poster", tabIndex: -1 }),
      c = this.b.poster();
    c &&
      ("backgroundSize" in a.style
        ? (a.style.backgroundImage = 'url("' + c + '")')
        : a.appendChild(u.e("img", { src: c })));
    return a;
  };
  u.bb.prototype.p = function () {
    this.L().controls() && this.b.play();
  };
  u.Ub = u.c.extend({
    i: function (a, c) {
      u.c.call(this, a, c);
      a.d("canplay", u.bind(this, this.C));
      a.d("canplaythrough", u.bind(this, this.C));
      a.d("playing", u.bind(this, this.C));
      a.d("seeked", u.bind(this, this.C));
      a.d("seeking", u.bind(this, this.show));
      a.d("seeked", u.bind(this, this.C));
      a.d("error", u.bind(this, this.show));
      a.d("waiting", u.bind(this, this.show));
    },
  });
  u.Ub.prototype.e = function () {
    return u.c.prototype.e.call(this, "div", {
      className: "vjs-loading-spinner",
    });
  };
  u.Va = u.q.extend();
  u.Va.prototype.e = function () {
    return u.q.prototype.e.call(this, "div", {
      className: "vjs-big-play-button",
      innerHTML: "<span></span>",
      "aria-label": "play video",
    });
  };
  u.Va.prototype.p = function () {
    this.b.play();
  };
  u.r = u.c.extend({
    i: function (a, c, d) {
      u.c.call(this, a, c, d);
      var e, g;
      g = this;
      e = this.L();
      a = function () {
        if (e.controls() && !e.Pb()) {
          var a, c;
          g.d("mousedown", g.p);
          g.d("touchstart", function (a) {
            a.preventDefault();
            a.stopPropagation();
            c = I(this.b);
          });
          a = function (a) {
            a.stopPropagation();
            c && this.b.rc();
          };
          g.d("touchmove", a);
          g.d("touchleave", a);
          g.d("touchcancel", a);
          g.d("touchend", a);
          var d, n, s;
          d = 0;
          g.d("touchstart", function () {
            d = new Date().getTime();
            s = f;
          });
          a = function () {
            s = l;
          };
          g.d("touchmove", a);
          g.d("touchleave", a);
          g.d("touchcancel", a);
          g.d("touchend", function () {
            s === f &&
              ((n = new Date().getTime() - d), 250 > n && this.j("tap"));
          });
          g.d("tap", g.jd);
        }
      };
      c = u.bind(g, g.md);
      this.M(a);
      e.d("controlsenabled", a);
      e.d("controlsdisabled", c);
    },
  });
  u.r.prototype.md = function () {
    this.n("tap");
    this.n("touchstart");
    this.n("touchmove");
    this.n("touchleave");
    this.n("touchcancel");
    this.n("touchend");
    this.n("click");
    this.n("mousedown");
  };
  u.r.prototype.p = function (a) {
    0 === a.button &&
      this.L().controls() &&
      (this.L().paused() ? this.L().play() : this.L().pause());
  };
  u.r.prototype.jd = function () {
    I(this.L(), !I(this.L()));
  };
  u.r.prototype.l = {
    volumeControl: f,
    fullscreenResize: l,
    progressEvents: l,
    timeupdateEvents: l,
  };
  u.media = {};
  u.media.Ua =
    "play pause paused currentTime setCurrentTime duration buffered volume setVolume muted setMuted width height supportsFullScreen enterFullScreen src load currentSrc preload setPreload autoplay setAutoplay loop setLoop error networkState readyState seeking initialTime startOffsetTime played seekable ended videoTracks audioTracks videoWidth videoHeight textTracks defaultPlaybackRate playbackRate mediaGroup controller controls defaultMuted".split(
      " "
    );
  function ea() {
    var a = u.media.Ua[i];
    return function () {
      throw Error(
        'The "' +
          a +
          "\" method is not available on the playback technology's API"
      );
    };
  }
  for (var i = u.media.Ua.length - 1; 0 <= i; i--)
    u.r.prototype[u.media.Ua[i]] = ea();
  u.o = u.r.extend({
    i: function (a, c, d) {
      this.l.volumeControl = u.o.Qc();
      this.l.movingMediaElementInDOM = !u.Fc;
      this.l.fullscreenResize = f;
      u.r.call(this, a, c, d);
      (c = c.source) && this.a.currentSrc == c.src
        ? a.j("loadstart")
        : c && (this.a.src = c.src);
      if (u.Mc && a.options().nativeControlsForTouch !== l) {
        var e, g, h, k;
        e = this;
        g = this.L();
        c = g.controls();
        e.a.controls = !!c;
        h = function () {
          e.a.controls = f;
        };
        k = function () {
          e.a.controls = l;
        };
        g.d("controlsenabled", h);
        g.d("controlsdisabled", k);
        c = function () {
          g.n("controlsenabled", h);
          g.n("controlsdisabled", k);
        };
        e.d("dispose", c);
        g.d("usingcustomcontrols", c);
        g.Pb(f);
      }
      a.M(function () {
        this.F &&
          this.g.autoplay &&
          this.paused() &&
          (delete this.F.poster, this.play());
      });
      for (a = u.o.Za.length - 1; 0 <= a; a--)
        u.d(this.a, u.o.Za[a], u.bind(this.b, this.Wc));
      this.Ta();
    },
  });
  t = u.o.prototype;
  t.D = function () {
    u.r.prototype.D.call(this);
  };
  t.e = function () {
    var a = this.b,
      c = a.F;
    if (!c || this.l.movingMediaElementInDOM === l)
      c
        ? ((c.player = j),
          (a.F = j),
          a.v().removeChild(c),
          (c = c.cloneNode(l)))
        : (c = u.e("video", {
            id: a.id() + "_html5_api",
            className: "vjs-tech",
          })),
        (c.player = a),
        u.yb(c, a.v());
    for (
      var d = ["autoplay", "preload", "loop", "muted"], e = d.length - 1;
      0 <= e;
      e--
    ) {
      var g = d[e];
      a.g[g] !== j && (c[g] = a.g[g]);
    }
    return c;
  };
  t.Wc = function (a) {
    this.j(a);
    a.stopPropagation();
  };
  t.play = function () {
    this.a.play();
  };
  t.pause = function () {
    this.a.pause();
  };
  t.paused = function () {
    return this.a.paused;
  };
  t.currentTime = function () {
    return this.a.currentTime;
  };
  t.pd = function (a) {
    try {
      this.a.currentTime = a;
    } catch (c) {
      u.log(c, "Video is not ready. (Video.js)");
    }
  };
  t.duration = function () {
    return this.a.duration || 0;
  };
  t.buffered = function () {
    return this.a.buffered;
  };
  t.volume = function () {
    return this.a.volume;
  };
  t.ud = function (a) {
    this.a.volume = a;
  };
  t.muted = function () {
    return this.a.muted;
  };
  t.sd = function (a) {
    this.a.muted = a;
  };
  t.width = function () {
    return this.a.offsetWidth;
  };
  t.height = function () {
    return this.a.offsetHeight;
  };
  t.Sa = function () {
    return "function" == typeof this.a.webkitEnterFullScreen &&
      (/Android/.test(u.G) || !/Chrome|Mac OS X 10.5/.test(u.G))
      ? f
      : l;
  };
  t.src = function (a) {
    this.a.src = a;
  };
  t.load = function () {
    this.a.load();
  };
  t.currentSrc = function () {
    return this.a.currentSrc;
  };
  t.Pa = function () {
    return this.a.Pa;
  };
  t.td = function (a) {
    this.a.Pa = a;
  };
  t.autoplay = function () {
    return this.a.autoplay;
  };
  t.od = function (a) {
    this.a.autoplay = a;
  };
  t.controls = function () {
    return this.a.controls;
  };
  t.loop = function () {
    return this.a.loop;
  };
  t.rd = function (a) {
    this.a.loop = a;
  };
  t.error = function () {
    return this.a.error;
  };
  t.seeking = function () {
    return this.a.seeking;
  };
  u.o.isSupported = function () {
    return !!u.ma.canPlayType;
  };
  u.o.lb = function (a) {
    try {
      return !!u.ma.canPlayType(a.type);
    } catch (c) {
      return "";
    }
  };
  u.o.Qc = function () {
    var a = u.ma.volume;
    u.ma.volume = a / 2 + 0.1;
    return a !== u.ma.volume;
  };
  u.o.Za =
    "loadstart suspend abort error emptied stalled loadedmetadata loadeddata canplay canplaythrough playing waiting seeking seeked ended durationchange timeupdate progress play pause ratechange volumechange".split(
      " "
    );
  u.Jc &&
    (document.createElement("video").constructor.prototype.canPlayType =
      function (a) {
        return a && -1 != a.toLowerCase().indexOf("video/mp4") ? "maybe" : "";
      });
  u.f = u.r.extend({
    i: function (a, c, d) {
      u.r.call(this, a, c, d);
      var e = c.source;
      d = c.parentEl;
      var g = (this.a = u.e("div", { id: a.id() + "_temp_flash" })),
        h = a.id() + "_flash_api";
      a = a.g;
      var k = u.k.B(
          {
            readyFunction: "videojs.Flash.onReady",
            eventProxyFunction: "videojs.Flash.onEvent",
            errorEventProxyFunction: "videojs.Flash.onError",
            autoplay: a.autoplay,
            preload: a.Pa,
            loop: a.loop,
            muted: a.muted,
          },
          c.flashVars
        ),
        r = u.k.B({ wmode: "opaque", bgcolor: "#000000" }, c.params),
        n = u.k.B({ id: h, name: h, class: "vjs-tech" }, c.attributes);
      e &&
        (e.type && u.f.ad(e.type)
          ? ((a = u.f.wc(e.src)),
            (k.rtmpConnection = encodeURIComponent(a.qb)),
            (k.rtmpStream = encodeURIComponent(a.Mb)))
          : (k.src = encodeURIComponent(u.ic(e.src))));
      u.yb(g, d);
      c.startTime &&
        this.M(function () {
          this.load();
          this.play();
          this.currentTime(c.startTime);
        });
      if (c.iFrameMode === f && !u.Ec) {
        var s = u.e("iframe", {
          id: h + "_iframe",
          name: h + "_iframe",
          className: "vjs-tech",
          scrolling: "no",
          marginWidth: 0,
          marginHeight: 0,
          frameBorder: 0,
        });
        k.readyFunction = "ready";
        k.eventProxyFunction = "events";
        k.errorEventProxyFunction = "errors";
        u.d(
          s,
          "load",
          u.bind(this, function () {
            var a,
              d = s.contentWindow;
            a = s.contentDocument
              ? s.contentDocument
              : s.contentWindow.document;
            a.write(u.f.jc(c.swf, k, r, n));
            d.player = this.b;
            d.ready = u.bind(this.b, function (c) {
              var d = this.h;
              d.a = a.getElementById(c);
              u.f.ob(d);
            });
            d.events = u.bind(this.b, function (a, c) {
              this && "flash" === this.ia && this.j(c);
            });
            d.errors = u.bind(this.b, function (a, c) {
              u.log("Flash Error", c);
            });
          })
        );
        g.parentNode.replaceChild(s, g);
      } else u.f.Vc(c.swf, g, k, r, n);
    },
  });
  t = u.f.prototype;
  t.D = function () {
    u.r.prototype.D.call(this);
  };
  t.play = function () {
    this.a.vjs_play();
  };
  t.pause = function () {
    this.a.vjs_pause();
  };
  t.src = function (a) {
    u.f.$c(a)
      ? ((a = u.f.wc(a)), this.Nd(a.qb), this.Od(a.Mb))
      : ((a = u.ic(a)), this.a.vjs_src(a));
    if (this.b.autoplay()) {
      var c = this;
      setTimeout(function () {
        c.play();
      }, 0);
    }
  };
  t.currentSrc = function () {
    var a = this.a.vjs_getProperty("currentSrc");
    if (a == j) {
      var c = this.Ld(),
        d = this.Md();
      c && d && (a = u.f.vd(c, d));
    }
    return a;
  };
  t.load = function () {
    this.a.vjs_load();
  };
  t.poster = function () {
    this.a.vjs_getProperty("poster");
  };
  t.buffered = function () {
    return u.sb(0, this.a.vjs_getProperty("buffered"));
  };
  t.Sa = q(l);
  var R = u.f.prototype,
    S =
      "rtmpConnection rtmpStream preload currentTime defaultPlaybackRate playbackRate autoplay loop mediaGroup controller controls volume muted defaultMuted".split(
        " "
      ),
    T =
      "error currentSrc networkState readyState seeking initialTime duration startOffsetTime paused played seekable ended videoTracks audioTracks videoWidth videoHeight textTracks".split(
        " "
      );
  function fa() {
    var a = S[U],
      c = a.charAt(0).toUpperCase() + a.slice(1);
    R["set" + c] = function (c) {
      return this.a.vjs_setProperty(a, c);
    };
  }
  function V(a) {
    R[a] = function () {
      return this.a.vjs_getProperty(a);
    };
  }
  var U;
  for (U = 0; U < S.length; U++) V(S[U]), fa();
  for (U = 0; U < T.length; U++) V(T[U]);
  u.f.isSupported = function () {
    return 10 <= u.f.version()[0];
  };
  u.f.lb = function (a) {
    if (a.type in u.f.Yc || a.type in u.f.xc) return "maybe";
  };
  u.f.Yc = {
    "video/flv": "FLV",
    "video/x-flv": "FLV",
    "video/mp4": "MP4",
    "video/m4v": "MP4",
  };
  u.f.xc = { "rtmp/mp4": "MP4", "rtmp/flv": "FLV" };
  u.f.onReady = function (a) {
    a = u.v(a);
    var c = a.player || a.parentNode.player,
      d = c.h;
    a.player = c;
    d.a = a;
    u.f.ob(d);
  };
  u.f.ob = function (a) {
    a.v().vjs_getProperty
      ? a.Ta()
      : setTimeout(function () {
          u.f.ob(a);
        }, 50);
  };
  u.f.onEvent = function (a, c) {
    u.v(a).player.j(c);
  };
  u.f.onError = function (a, c) {
    u.v(a).player.j("error");
    u.log("Flash Error", c, a);
  };
  u.f.version = function () {
    var a = "0,0,0";
    try {
      a = new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash")
        .GetVariable("$version")
        .replace(/\D+/g, ",")
        .match(/^,?(.+),?$/)[1];
    } catch (c) {
      try {
        navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin &&
          (a = (
            navigator.plugins["Shockwave Flash 2.0"] ||
            navigator.plugins["Shockwave Flash"]
          ).description
            .replace(/\D+/g, ",")
            .match(/^,?(.+),?$/)[1]);
      } catch (d) {}
    }
    return a.split(",");
  };
  u.f.Vc = function (a, c, d, e, g) {
    a = u.f.jc(a, d, e, g);
    a = u.e("div", { innerHTML: a }).childNodes[0];
    d = c.parentNode;
    c.parentNode.replaceChild(a, c);
    var h = d.childNodes[0];
    setTimeout(function () {
      h.style.display = "block";
    }, 1e3);
  };
  u.f.jc = function (a, c, d, e) {
    var g = "",
      h = "",
      k = "";
    c &&
      u.k.ta(c, function (a, c) {
        g += a + "=" + c + "&amp;";
      });
    d = u.k.B(
      {
        movie: a,
        flashvars: g,
        allowScriptAccess: "always",
        allowNetworking: "all",
      },
      d
    );
    u.k.ta(d, function (a, c) {
      h += '<param name="' + a + '" value="' + c + '" />';
    });
    e = u.k.B({ data: a, width: "100%", height: "100%" }, e);
    u.k.ta(e, function (a, c) {
      k += a + '="' + c + '" ';
    });
    return (
      '<object type="application/x-shockwave-flash"' + k + ">" + h + "</object>"
    );
  };
  u.f.vd = function (a, c) {
    return a + "&" + c;
  };
  u.f.wc = function (a) {
    var c = { qb: "", Mb: "" };
    if (!a) return c;
    var d = a.indexOf("&"),
      e;
    -1 !== d
      ? (e = d + 1)
      : ((d = e = a.lastIndexOf("/") + 1), 0 === d && (d = e = a.length));
    c.qb = a.substring(0, d);
    c.Mb = a.substring(e, a.length);
    return c;
  };
  u.f.ad = function (a) {
    return a in u.f.xc;
  };
  u.f.Lc = /^rtmp[set]?:\/\//i;
  u.f.$c = function (a) {
    return u.f.Lc.test(a);
  };
  u.Kc = u.c.extend({
    i: function (a, c, d) {
      u.c.call(this, a, c, d);
      if (!a.g.sources || 0 === a.g.sources.length) {
        c = 0;
        for (d = a.g.techOrder; c < d.length; c++) {
          var e = u.$(d[c]),
            g = window.videojs[e];
          if (g && g.isSupported()) {
            J(a, e);
            break;
          }
        }
      } else a.src(a.g.sources);
    },
  });
  function W(a) {
    a.za = a.za || [];
    return a.za;
  }
  function X(a, c, d) {
    for (var e = a.za, g = 0, h = e.length, k, r; g < h; g++)
      (k = e[g]),
        k.id() === c
          ? (k.show(), (r = k))
          : d && k.K() == d && 0 < k.mode() && k.disable();
    (c = r ? r.K() : d ? d : l) && a.j(c + "trackchange");
  }
  u.X = u.c.extend({
    i: function (a, c) {
      u.c.call(this, a, c);
      this.Q = c.id || "vjs_" + c.kind + "_" + c.language + "_" + u.s++;
      this.tc = c.src;
      this.Sc = c["default"] || c.dflt;
      this.xd = c.title;
      this.Id = c.srclang;
      this.bd = c.label;
      this.fa = [];
      this.bc = [];
      this.ga = this.ha = 0;
      this.b.d("fullscreenchange", u.bind(this, this.Nc));
    },
  });
  t = u.X.prototype;
  t.K = p("A");
  t.src = p("tc");
  t.tb = p("Sc");
  t.title = p("xd");
  t.label = p("bd");
  t.readyState = p("ha");
  t.mode = p("ga");
  t.Nc = function () {
    this.a.style.fontSize = this.b.I
      ? 140 * (screen.width / this.b.width()) + "%"
      : "";
  };
  t.e = function () {
    return u.c.prototype.e.call(this, "div", {
      className: "vjs-" + this.A + " vjs-text-track",
    });
  };
  t.show = function () {
    Y(this);
    this.ga = 2;
    u.c.prototype.show.call(this);
  };
  t.C = function () {
    Y(this);
    this.ga = 1;
    u.c.prototype.C.call(this);
  };
  t.disable = function () {
    2 == this.ga && this.C();
    this.b.n("timeupdate", u.bind(this, this.update, this.Q));
    this.b.n("ended", u.bind(this, this.reset, this.Q));
    this.reset();
    this.b.V.textTrackDisplay.removeChild(this);
    this.ga = 0;
  };
  function Y(a) {
    0 === a.ha && a.load();
    0 === a.ga &&
      (a.b.d("timeupdate", u.bind(a, a.update, a.Q)),
      a.b.d("ended", u.bind(a, a.reset, a.Q)),
      ("captions" === a.A || "subtitles" === a.A) &&
        a.b.V.textTrackDisplay.Z(a));
  }
  t.load = function () {
    0 === this.ha &&
      ((this.ha = 1),
      u.get(this.tc, u.bind(this, this.kd), u.bind(this, this.Fb)));
  };
  t.Fb = function (a) {
    this.error = a;
    this.ha = 3;
    this.j("error");
  };
  t.kd = function (a) {
    var c, d;
    a = a.split("\n");
    for (var e = "", g = 1, h = a.length; g < h; g++)
      if ((e = u.trim(a[g]))) {
        -1 == e.indexOf("--\x3e")
          ? ((c = e), (e = u.trim(a[++g])))
          : (c = this.fa.length);
        c = { id: c, index: this.fa.length };
        d = e.split(" --\x3e ");
        c.startTime = ga(d[0]);
        c.ua = ga(d[1]);
        for (d = []; a[++g] && (e = u.trim(a[g])); ) d.push(e);
        c.text = d.join("<br/>");
        this.fa.push(c);
      }
    this.ha = 2;
    this.j("loaded");
  };
  function ga(a) {
    var c = a.split(":");
    a = 0;
    var d, e, g;
    3 == c.length
      ? ((d = c[0]), (e = c[1]), (c = c[2]))
      : ((d = 0), (e = c[0]), (c = c[1]));
    c = c.split(/\s+/);
    c = c.splice(0, 1)[0];
    c = c.split(/\.|,/);
    g = parseFloat(c[1]);
    c = c[0];
    a += 3600 * parseFloat(d);
    a += 60 * parseFloat(e);
    a += parseFloat(c);
    g && (a += g / 1e3);
    return a;
  }
  t.update = function () {
    if (0 < this.fa.length) {
      var a = this.b.currentTime();
      if (this.Kb === b || a < this.Kb || this.La <= a) {
        var c = this.fa,
          d = this.b.duration(),
          e = 0,
          g = l,
          h = [],
          k,
          r,
          n,
          s;
        a >= this.La || this.La === b
          ? (s = this.vb !== b ? this.vb : 0)
          : ((g = f), (s = this.Cb !== b ? this.Cb : c.length - 1));
        for (;;) {
          n = c[s];
          if (n.ua <= a) (e = Math.max(e, n.ua)), n.Ha && (n.Ha = l);
          else if (a < n.startTime) {
            if (((d = Math.min(d, n.startTime)), n.Ha && (n.Ha = l), !g)) break;
          } else
            g
              ? (h.splice(0, 0, n), r === b && (r = s), (k = s))
              : (h.push(n), k === b && (k = s), (r = s)),
              (d = Math.min(d, n.ua)),
              (e = Math.max(e, n.startTime)),
              (n.Ha = f);
          if (g)
            if (0 === s) break;
            else s--;
          else if (s === c.length - 1) break;
          else s++;
        }
        this.bc = h;
        this.La = d;
        this.Kb = e;
        this.vb = k;
        this.Cb = r;
        a = this.bc;
        c = "";
        d = 0;
        for (e = a.length; d < e; d++)
          c += '<span class="vjs-tt-cue">' + a[d].text + "</span>";
        this.a.innerHTML = c;
        this.j("cuechange");
      }
    }
  };
  t.reset = function () {
    this.La = 0;
    this.Kb = this.b.duration();
    this.Cb = this.vb = 0;
  };
  u.Sb = u.X.extend();
  u.Sb.prototype.A = "captions";
  u.Yb = u.X.extend();
  u.Yb.prototype.A = "subtitles";
  u.Tb = u.X.extend();
  u.Tb.prototype.A = "chapters";
  u.Zb = u.c.extend({
    i: function (a, c, d) {
      u.c.call(this, a, c, d);
      if (a.g.tracks && 0 < a.g.tracks.length) {
        c = this.b;
        a = a.g.tracks;
        var e;
        for (d = 0; d < a.length; d++) {
          e = a[d];
          var g = c,
            h = e.kind,
            k = e.label,
            r = e.language,
            n = e;
          e = g.za = g.za || [];
          n = n || {};
          n.kind = h;
          n.label = k;
          n.language = r;
          h = u.$(h || "subtitles");
          g = new window.videojs[h + "Track"](g, n);
          e.push(g);
        }
      }
    },
  });
  u.Zb.prototype.e = function () {
    return u.c.prototype.e.call(this, "div", {
      className: "vjs-text-track-display",
    });
  };
  u.Y = u.N.extend({
    i: function (a, c) {
      var d = (this.ca = c.track);
      c.label = d.label();
      c.selected = d.tb();
      u.N.call(this, a, c);
      this.b.d(d.K() + "trackchange", u.bind(this, this.update));
    },
  });
  u.Y.prototype.p = function () {
    u.N.prototype.p.call(this);
    X(this.b, this.ca.Q, this.ca.K());
  };
  u.Y.prototype.update = function () {
    this.selected(2 == this.ca.mode());
  };
  u.ab = u.Y.extend({
    i: function (a, c) {
      c.track = {
        K: function () {
          return c.kind;
        },
        L: a,
        label: function () {
          return c.kind + " off";
        },
        tb: q(l),
        mode: q(l),
      };
      u.Y.call(this, a, c);
      this.selected(f);
    },
  });
  u.ab.prototype.p = function () {
    u.Y.prototype.p.call(this);
    X(this.b, this.ca.Q, this.ca.K());
  };
  u.ab.prototype.update = function () {
    for (var a = W(this.b), c = 0, d = a.length, e, g = f; c < d; c++)
      (e = a[c]), e.K() == this.ca.K() && 2 == e.mode() && (g = l);
    this.selected(g);
  };
  u.S = u.R.extend({
    i: function (a, c) {
      u.R.call(this, a, c);
      1 >= this.J.length && this.C();
    },
  });
  u.S.prototype.sa = function () {
    var a = [],
      c;
    a.push(new u.ab(this.b, { kind: this.A }));
    for (var d = 0; d < W(this.b).length; d++)
      (c = W(this.b)[d]),
        c.K() === this.A && a.push(new u.Y(this.b, { track: c }));
    return a;
  };
  u.Ca = u.S.extend({
    i: function (a, c, d) {
      u.S.call(this, a, c, d);
      this.a.setAttribute("aria-label", "Captions Menu");
    },
  });
  u.Ca.prototype.A = "captions";
  u.Ca.prototype.pa = "Captions";
  u.Ca.prototype.className = "vjs-captions-button";
  u.Ga = u.S.extend({
    i: function (a, c, d) {
      u.S.call(this, a, c, d);
      this.a.setAttribute("aria-label", "Subtitles Menu");
    },
  });
  u.Ga.prototype.A = "subtitles";
  u.Ga.prototype.pa = "Subtitles";
  u.Ga.prototype.className = "vjs-subtitles-button";
  u.Da = u.S.extend({
    i: function (a, c, d) {
      u.S.call(this, a, c, d);
      this.a.setAttribute("aria-label", "Chapters Menu");
    },
  });
  t = u.Da.prototype;
  t.A = "chapters";
  t.pa = "Chapters";
  t.className = "vjs-chapters-button";
  t.sa = function () {
    for (var a = [], c, d = 0; d < W(this.b).length; d++)
      (c = W(this.b)[d]),
        c.K() === this.A && a.push(new u.Y(this.b, { track: c }));
    return a;
  };
  t.Ja = function () {
    for (
      var a = W(this.b), c = 0, d = a.length, e, g, h = (this.J = []);
      c < d;
      c++
    )
      if (((e = a[c]), e.K() == this.A && e.tb())) {
        if (2 > e.readyState()) {
          this.Fd = e;
          e.d("loaded", u.bind(this, this.Ja));
          return;
        }
        g = e;
        break;
      }
    a = this.va = new u.la(this.b);
    a.a.appendChild(
      u.e("li", { className: "vjs-menu-title", innerHTML: u.$(this.A), wd: -1 })
    );
    if (g) {
      e = g.fa;
      for (var k, c = 0, d = e.length; c < d; c++)
        (k = e[c]),
          (k = new u.Wa(this.b, { track: g, cue: k })),
          h.push(k),
          a.Z(k);
    }
    0 < this.J.length && this.show();
    return a;
  };
  u.Wa = u.N.extend({
    i: function (a, c) {
      var d = (this.ca = c.track),
        e = (this.cue = c.cue),
        g = a.currentTime();
      c.label = e.text;
      c.selected = e.startTime <= g && g < e.ua;
      u.N.call(this, a, c);
      d.d("cuechange", u.bind(this, this.update));
    },
  });
  u.Wa.prototype.p = function () {
    u.N.prototype.p.call(this);
    this.b.currentTime(this.cue.startTime);
    this.update(this.cue.startTime);
  };
  u.Wa.prototype.update = function () {
    var a = this.cue,
      c = this.b.currentTime();
    this.selected(a.startTime <= c && c < a.ua);
  };
  u.k.B(u.Ea.prototype.g.children, {
    subtitlesButton: {},
    captionsButton: {},
    chaptersButton: {},
  });
  if ("undefined" !== typeof window.JSON && "function" === window.JSON.parse)
    u.JSON = window.JSON;
  else {
    u.JSON = {};
    var Z =
      /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
    u.JSON.parse = function (a, c) {
      function d(a, e) {
        var k,
          r,
          n = a[e];
        if (n && "object" === typeof n)
          for (k in n)
            Object.prototype.hasOwnProperty.call(n, k) &&
              ((r = d(n, k)), r !== b ? (n[k] = r) : delete n[k]);
        return c.call(a, e, n);
      }
      var e;
      a = String(a);
      Z.lastIndex = 0;
      Z.test(a) &&
        (a = a.replace(Z, function (a) {
          return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
        }));
      if (
        /^[\],:{}\s]*$/.test(
          a
            .replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@")
            .replace(
              /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
              "]"
            )
            .replace(/(?:^|:|,)(?:\s*\[)+/g, "")
        )
      )
        return (
          (e = eval("(" + a + ")")),
          "function" === typeof c ? d({ "": e }, "") : e
        );
      throw new SyntaxError("JSON.parse(): invalid or malformed JSON data");
    };
  }
  u.cc = function () {
    var a,
      c,
      d = document.getElementsByTagName("video");
    if (d && 0 < d.length)
      for (var e = 0, g = d.length; e < g; e++)
        if ((c = d[e]) && c.getAttribute)
          c.player === b &&
            ((a = c.getAttribute("data-setup")),
            a !== j && ((a = u.JSON.parse(a || "{}")), v(c, a)));
        else {
          u.jb();
          break;
        }
    else u.Ac || u.jb();
  };
  u.jb = function () {
    setTimeout(u.cc, 1);
  };
  "complete" === document.readyState
    ? (u.Ac = f)
    : u.U(window, "load", function () {
        u.Ac = f;
      });
  u.jb();
  u.ld = function (a, c) {
    u.w.prototype[a] = c;
  };
  var ha = this;
  ha.Bd = f;
  function $(a, c) {
    var d = a.split("."),
      e = ha;
    !(d[0] in e) && e.execScript && e.execScript("var " + d[0]);
    for (var g; d.length && (g = d.shift()); )
      !d.length && c !== b ? (e[g] = c) : (e = e[g] ? e[g] : (e[g] = {}));
  }
  $("videojs", u);
  $("_V_", u);
  $("videojs.options", u.options);
  $("videojs.players", u.wa);
  $("videojs.cache", u.qa);
  $("videojs.Component", u.c);
  u.c.prototype.player = u.c.prototype.L;
  u.c.prototype.dispose = u.c.prototype.D;
  u.c.prototype.createEl = u.c.prototype.e;
  u.c.prototype.el = u.c.prototype.v;
  u.c.prototype.addChild = u.c.prototype.Z;
  u.c.prototype.children = u.c.prototype.children;
  u.c.prototype.on = u.c.prototype.d;
  u.c.prototype.off = u.c.prototype.n;
  u.c.prototype.one = u.c.prototype.U;
  u.c.prototype.trigger = u.c.prototype.j;
  u.c.prototype.triggerReady = u.c.prototype.Ta;
  u.c.prototype.show = u.c.prototype.show;
  u.c.prototype.hide = u.c.prototype.C;
  u.c.prototype.width = u.c.prototype.width;
  u.c.prototype.height = u.c.prototype.height;
  u.c.prototype.dimensions = u.c.prototype.Tc;
  u.c.prototype.ready = u.c.prototype.M;
  u.c.prototype.addClass = u.c.prototype.m;
  u.c.prototype.removeClass = u.c.prototype.t;
  $("videojs.Player", u.w);
  u.w.prototype.dispose = u.w.prototype.D;
  u.w.prototype.requestFullScreen = u.w.prototype.xa;
  u.w.prototype.cancelFullScreen = u.w.prototype.nb;
  u.w.prototype.bufferedPercent = u.w.prototype.Ia;
  u.w.prototype.usingNativeControls = u.w.prototype.Pb;
  $("videojs.MediaLoader", u.Kc);
  $("videojs.TextTrackDisplay", u.Zb);
  $("videojs.ControlBar", u.Ea);
  $("videojs.Button", u.q);
  $("videojs.PlayToggle", u.Wb);
  $("videojs.FullscreenToggle", u.Fa);
  $("videojs.BigPlayButton", u.Va);
  $("videojs.LoadingSpinner", u.Ub);
  $("videojs.CurrentTimeDisplay", u.Xa);
  $("videojs.DurationDisplay", u.Ya);
  $("videojs.TimeDivider", u.$b);
  $("videojs.RemainingTimeDisplay", u.eb);
  $("videojs.Slider", u.O);
  $("videojs.ProgressControl", u.cb);
  $("videojs.SeekBar", u.Xb);
  $("videojs.LoadProgressBar", u.$a);
  $("videojs.PlayProgressBar", u.Vb);
  $("videojs.SeekHandle", u.fb);
  $("videojs.VolumeControl", u.hb);
  $("videojs.VolumeBar", u.gb);
  $("videojs.VolumeLevel", u.ac);
  $("videojs.VolumeMenuButton", u.na);
  $("videojs.VolumeHandle", u.ib);
  $("videojs.MuteToggle", u.da);
  $("videojs.PosterImage", u.bb);
  $("videojs.Menu", u.la);
  $("videojs.MenuItem", u.N);
  $("videojs.MenuButton", u.R);
  u.R.prototype.createItems = u.R.prototype.sa;
  u.S.prototype.createItems = u.S.prototype.sa;
  u.Da.prototype.createItems = u.Da.prototype.sa;
  $("videojs.SubtitlesButton", u.Ga);
  $("videojs.CaptionsButton", u.Ca);
  $("videojs.ChaptersButton", u.Da);
  $("videojs.MediaTechController", u.r);
  u.r.prototype.features = u.r.prototype.l;
  u.r.prototype.l.volumeControl = u.r.prototype.l.zc;
  u.r.prototype.l.fullscreenResize = u.r.prototype.l.Gd;
  u.r.prototype.l.progressEvents = u.r.prototype.l.Kd;
  u.r.prototype.l.timeupdateEvents = u.r.prototype.l.Pd;
  $("videojs.Html5", u.o);
  u.o.Events = u.o.Za;
  u.o.isSupported = u.o.isSupported;
  u.o.canPlaySource = u.o.lb;
  u.o.prototype.setCurrentTime = u.o.prototype.pd;
  u.o.prototype.setVolume = u.o.prototype.ud;
  u.o.prototype.setMuted = u.o.prototype.sd;
  u.o.prototype.setPreload = u.o.prototype.td;
  u.o.prototype.setAutoplay = u.o.prototype.od;
  u.o.prototype.setLoop = u.o.prototype.rd;
  $("videojs.Flash", u.f);
  u.f.isSupported = u.f.isSupported;
  u.f.canPlaySource = u.f.lb;
  u.f.onReady = u.f.onReady;
  $("videojs.TextTrack", u.X);
  u.X.prototype.label = u.X.prototype.label;
  $("videojs.CaptionsTrack", u.Sb);
  $("videojs.SubtitlesTrack", u.Yb);
  $("videojs.ChaptersTrack", u.Tb);
  $("videojs.autoSetup", u.cc);
  $("videojs.plugin", u.ld);
  $("videojs.createTimeRange", u.sb);
})();
