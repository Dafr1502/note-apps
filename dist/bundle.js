(() => {
  var t = {
      919: () => {
        function t(e) {
          return (
            (t =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            t(e)
          );
        }
        function e(t, e) {
          for (var r = 0; r < e.length; r++) {
            var o = e[r];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(t, n(o.key), o);
          }
        }
        function n(e) {
          var n = (function (e, n) {
            if ("object" != t(e) || !e) return e;
            var r = e[Symbol.toPrimitive];
            if (void 0 !== r) {
              var o = r.call(e, "string");
              if ("object" != t(o)) return o;
              throw new TypeError(
                "@@toPrimitive must return a primitive value.",
              );
            }
            return String(e);
          })(e);
          return "symbol" == t(n) ? n : n + "";
        }
        function r(t) {
          var e = "function" == typeof Map ? new Map() : void 0;
          return (
            (r = function (t) {
              if (
                null === t ||
                !(function (t) {
                  try {
                    return (
                      -1 !== Function.toString.call(t).indexOf("[native code]")
                    );
                  } catch (e) {
                    return "function" == typeof t;
                  }
                })(t)
              )
                return t;
              if ("function" != typeof t)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              if (void 0 !== e) {
                if (e.has(t)) return e.get(t);
                e.set(t, n);
              }
              function n() {
                return (function (t, e, n) {
                  if (o()) return Reflect.construct.apply(null, arguments);
                  var r = [null];
                  r.push.apply(r, e);
                  var a = new (t.bind.apply(t, r))();
                  return n && i(a, n.prototype), a;
                })(t, arguments, a(this).constructor);
              }
              return (
                (n.prototype = Object.create(t.prototype, {
                  constructor: {
                    value: n,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                i(n, t)
              );
            }),
            r(t)
          );
        }
        function o() {
          try {
            var t = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch (t) {}
          return (o = function () {
            return !!t;
          })();
        }
        function i(t, e) {
          return (
            (i = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            i(t, e)
          );
        }
        function a(t) {
          return (
            (a = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            a(t)
          );
        }
        var c = (function (n) {
          function r() {
            var e, n, i, c;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, r),
              ((n = this),
              (i = r),
              (i = a(i)),
              (e = (function (e, n) {
                if (n && ("object" === t(n) || "function" == typeof n))
                  return n;
                if (void 0 !== n)
                  throw new TypeError(
                    "Derived constructors may only return object or undefined",
                  );
                return (function (t) {
                  if (void 0 === t)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called",
                    );
                  return t;
                })(e);
              })(
                n,
                o()
                  ? Reflect.construct(i, c || [], a(n).constructor)
                  : i.apply(n, c),
              ))).attachShadow({ mode: "open" }),
              (e.shadowRoot.innerHTML =
                '\n            <style>\n            :host {\n                display: grid;\n                grid-template-columns: 1fr;\n                grid-gap: 5px;\n                justify-items: center;\n                font-family: sans-serif;\n            }\n\n            label {\n                font-weight: bold;\n                margin-top: 30px;\n                margin-bottom: 3px;\n            }\n\n            input[type="date"] {\n                width: 52%;\n                padding: 10px;\n                border: 1px solid #ccc;\n                border-radius: 5px;\n                font-size: 16px;\n                box-sizing: border-box;\n            }\n            </style>\n            <label for="date">Date:</label>\n            <input type="date" id="date">\n        '),
              e
            );
          }
          return (
            (function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e && i(t, e);
            })(r, n),
            (c = r),
            (u = [
              {
                key: "getValue",
                value: function () {
                  return this.shadowRoot.getElementById("date").value;
                },
              },
              {
                key: "setValue",
                value: function (t) {
                  this.shadowRoot.getElementById("date").value = t;
                },
              },
            ]) && e(c.prototype, u),
            Object.defineProperty(c, "prototype", { writable: !1 }),
            c
          );
          var c, u;
        })(r(HTMLElement));
        customElements.define("date-input", c),
          document.querySelector("add-note-button");
      },
      831: () => {
        function t(e) {
          return (
            (t =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            t(e)
          );
        }
        function e(t) {
          var i = "function" == typeof Map ? new Map() : void 0;
          return (
            (e = function (t) {
              if (
                null === t ||
                !(function (t) {
                  try {
                    return (
                      -1 !== Function.toString.call(t).indexOf("[native code]")
                    );
                  } catch (e) {
                    return "function" == typeof t;
                  }
                })(t)
              )
                return t;
              if ("function" != typeof t)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              if (void 0 !== i) {
                if (i.has(t)) return i.get(t);
                i.set(t, e);
              }
              function e() {
                return (function (t, e, o) {
                  if (n()) return Reflect.construct.apply(null, arguments);
                  var i = [null];
                  i.push.apply(i, e);
                  var a = new (t.bind.apply(t, i))();
                  return o && r(a, o.prototype), a;
                })(t, arguments, o(this).constructor);
              }
              return (
                (e.prototype = Object.create(t.prototype, {
                  constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                r(e, t)
              );
            }),
            e(t)
          );
        }
        function n() {
          try {
            var t = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch (t) {}
          return (n = function () {
            return !!t;
          })();
        }
        function r(t, e) {
          return (
            (r = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            r(t, e)
          );
        }
        function o(t) {
          return (
            (o = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            o(t)
          );
        }
        var i = (function (e) {
          function i() {
            var e, r, a, c;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, i),
              ((r = this),
              (a = i),
              (a = o(a)),
              (e = (function (e, n) {
                if (n && ("object" === t(n) || "function" == typeof n))
                  return n;
                if (void 0 !== n)
                  throw new TypeError(
                    "Derived constructors may only return object or undefined",
                  );
                return (function (t) {
                  if (void 0 === t)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called",
                    );
                  return t;
                })(e);
              })(
                r,
                n()
                  ? Reflect.construct(a, c || [], o(r).constructor)
                  : a.apply(r, c),
              ))).attachShadow({ mode: "open" }),
              (e.shadowRoot.innerHTML =
                '\n        <style>\n        :host {\n            display: grid;\n            grid-template-columns: 1fr;\n            grid-gap: 5px;\n            justify-items: center;\n            align-items: center;\n        }\n        \n        label {\n            font-weight: bold;\n            margin-top: 30px;\n            margin-bottom: 3px;\n            font-family: sans-serif;\n        }\n        \n        textarea {\n            width: 52%;\n            height: 100px;\n            font-family: sans-serif;\n            padding: 10px;\n            border: 1px solid #ccc;\n            border-radius: 5px;\n            font-size: 16px;\n            box-sizing: border-box; \n            resize: none;\n        }\n        </style>\n        <label for="description">Description:</label>\n        <textarea id="description" placeholder="Enter description"></textarea>\n    '),
              e
            );
          }
          return (
            (function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e && r(t, e);
            })(i, e),
            (a = i),
            Object.defineProperty(a, "prototype", { writable: !1 }),
            a
          );
          var a;
        })(e(HTMLElement));
        customElements.define("description-textarea", i),
          document.querySelector("description-textarea");
      },
      687: () => {
        function t(e) {
          return (
            (t =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            t(e)
          );
        }
        function e(t) {
          var i = "function" == typeof Map ? new Map() : void 0;
          return (
            (e = function (t) {
              if (
                null === t ||
                !(function (t) {
                  try {
                    return (
                      -1 !== Function.toString.call(t).indexOf("[native code]")
                    );
                  } catch (e) {
                    return "function" == typeof t;
                  }
                })(t)
              )
                return t;
              if ("function" != typeof t)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              if (void 0 !== i) {
                if (i.has(t)) return i.get(t);
                i.set(t, e);
              }
              function e() {
                return (function (t, e, o) {
                  if (n()) return Reflect.construct.apply(null, arguments);
                  var i = [null];
                  i.push.apply(i, e);
                  var a = new (t.bind.apply(t, i))();
                  return o && r(a, o.prototype), a;
                })(t, arguments, o(this).constructor);
              }
              return (
                (e.prototype = Object.create(t.prototype, {
                  constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                r(e, t)
              );
            }),
            e(t)
          );
        }
        function n() {
          try {
            var t = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch (t) {}
          return (n = function () {
            return !!t;
          })();
        }
        function r(t, e) {
          return (
            (r = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            r(t, e)
          );
        }
        function o(t) {
          return (
            (o = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            o(t)
          );
        }
        var i = (function (e) {
          function i() {
            var e, r, a, c;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, i),
              ((r = this),
              (a = i),
              (a = o(a)),
              (e = (function (e, n) {
                if (n && ("object" === t(n) || "function" == typeof n))
                  return n;
                if (void 0 !== n)
                  throw new TypeError(
                    "Derived constructors may only return object or undefined",
                  );
                return (function (t) {
                  if (void 0 === t)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called",
                    );
                  return t;
                })(e);
              })(
                r,
                n()
                  ? Reflect.construct(a, c || [], o(r).constructor)
                  : a.apply(r, c),
              ))).attachShadow({ mode: "open" }),
              (e.shadowRoot.innerHTML =
                '\n        <style>\n        :host {\n            display: grid;\n            grid-template-columns: 1fr;\n            grid-gap: 5px;\n            justify-items: center;\n            align-items: center;\n        }\n        \n        label {\n            font-weight: bold;\n            margin-top: 30px;\n            margin-bottom: 3px;\n            font-family: sans-serif;\n        }\n        \n        input {\n            font-family: sans-serif;\n            width: 52%;\n            padding: 10px;\n            border: 1px solid #ccc;\n            border-radius: 5px;\n            font-size: 16px;\n            box-sizing: border-box;\n        }\n        </style>\n        <label for="title">Title:</label>\n        <input type="text" id="title" placeholder="Enter title">\n    '),
              e
            );
          }
          return (
            (function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e && r(t, e);
            })(i, e),
            (a = i),
            Object.defineProperty(a, "prototype", { writable: !1 }),
            a
          );
          var a;
        })(e(HTMLElement));
        customElements.define("title-input", i),
          document.querySelector("title-input");
      },
      621: (t, e, n) => {
        "use strict";
        n.d(e, { A: () => c });
        var r = n(601),
          o = n.n(r),
          i = n(314),
          a = n.n(i)()(o());
        a.push([
          t.id,
          "header {\n    background-color: #007bff;\n    width: 100%;\n    height: 50px;\n    color: white;\n    text-align: center;\n    font-weight: lighter;\n    font-size: small;\n  }\n  \n  .header-content {\n    padding-top: 10px;\n  }\n  \n  h1 {\n    font-family: sans-serif;\n    margin: 0; \n    line-height: 30px; \n  }\n\n.notesContainer {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n  \n  .note {\n    font-family: sans-serif;\n    background-color: #f7f7f7;\n    padding: 20px;\n    margin-right: 20px;\n    margin-top: 40px;\n    margin-bottom: 20px;\n    border-radius: 8px;\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);\n    max-width: 300px; \n    width: 100%; \n    box-sizing: border-box; \n    transition: transform 0.3s ease; \n  }\n  \n  .note:hover {\n    transform: scale(1.05);\n  }  \n\n  .note h3 {\n    margin-top: 0;\n    margin-bottom: 10px;\n    color: #333;\n  }\n  \n  .note p {\n    margin-bottom: 10px;\n    color: #666;\n  }\n  \n  .note p:last-child {\n    margin-bottom: 0;\n  }\n\n.input-container {\n  display: flex;\n  flex-direction: column; \n  align-items: center; \n  margin-top: 30px; \n}\n\nbutton {\n  font-family: sans-serif;\n  width: 20%;\n  padding: 10px;\n  background-color: #007bff;\n  color: #fff;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n}\n\nbutton:hover {\n  background-color: #0056b3;\n}\n\n.container {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n    grid-gap: 20px;\n  }\n  \n  @media screen and (max-width: 768px) {\n    .container {\n      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n    }\n  }\n  \n  @media screen and (max-width: 480px) {\n    .container {\n      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n    }\n  }\n  \n  \n  ",
          "",
        ]);
        const c = a;
      },
      314: (t) => {
        "use strict";
        t.exports = function (t) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var n = "",
                  r = void 0 !== e[5];
                return (
                  e[4] && (n += "@supports (".concat(e[4], ") {")),
                  e[2] && (n += "@media ".concat(e[2], " {")),
                  r &&
                    (n += "@layer".concat(
                      e[5].length > 0 ? " ".concat(e[5]) : "",
                      " {",
                    )),
                  (n += t(e)),
                  r && (n += "}"),
                  e[2] && (n += "}"),
                  e[4] && (n += "}"),
                  n
                );
              }).join("");
            }),
            (e.i = function (t, n, r, o, i) {
              "string" == typeof t && (t = [[null, t, void 0]]);
              var a = {};
              if (r)
                for (var c = 0; c < this.length; c++) {
                  var u = this[c][0];
                  null != u && (a[u] = !0);
                }
              for (var s = 0; s < t.length; s++) {
                var l = [].concat(t[s]);
                (r && a[l[0]]) ||
                  (void 0 !== i &&
                    (void 0 === l[5] ||
                      (l[1] = "@layer"
                        .concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {")
                        .concat(l[1], "}")),
                    (l[5] = i)),
                  n &&
                    (l[2]
                      ? ((l[1] = "@media "
                          .concat(l[2], " {")
                          .concat(l[1], "}")),
                        (l[2] = n))
                      : (l[2] = n)),
                  o &&
                    (l[4]
                      ? ((l[1] = "@supports ("
                          .concat(l[4], ") {")
                          .concat(l[1], "}")),
                        (l[4] = o))
                      : (l[4] = "".concat(o))),
                  e.push(l));
              }
            }),
            e
          );
        };
      },
      601: (t) => {
        "use strict";
        t.exports = function (t) {
          return t[1];
        };
      },
      72: (t) => {
        "use strict";
        var e = [];
        function n(t) {
          for (var n = -1, r = 0; r < e.length; r++)
            if (e[r].identifier === t) {
              n = r;
              break;
            }
          return n;
        }
        function r(t, r) {
          for (var i = {}, a = [], c = 0; c < t.length; c++) {
            var u = t[c],
              s = r.base ? u[0] + r.base : u[0],
              l = i[s] || 0,
              p = "".concat(s, " ").concat(l);
            i[s] = l + 1;
            var d = n(p),
              f = {
                css: u[1],
                media: u[2],
                sourceMap: u[3],
                supports: u[4],
                layer: u[5],
              };
            if (-1 !== d) e[d].references++, e[d].updater(f);
            else {
              var y = o(f, r);
              (r.byIndex = c),
                e.splice(c, 0, { identifier: p, updater: y, references: 1 });
            }
            a.push(p);
          }
          return a;
        }
        function o(t, e) {
          var n = e.domAPI(e);
          return (
            n.update(t),
            function (e) {
              if (e) {
                if (
                  e.css === t.css &&
                  e.media === t.media &&
                  e.sourceMap === t.sourceMap &&
                  e.supports === t.supports &&
                  e.layer === t.layer
                )
                  return;
                n.update((t = e));
              } else n.remove();
            }
          );
        }
        t.exports = function (t, o) {
          var i = r((t = t || []), (o = o || {}));
          return function (t) {
            t = t || [];
            for (var a = 0; a < i.length; a++) {
              var c = n(i[a]);
              e[c].references--;
            }
            for (var u = r(t, o), s = 0; s < i.length; s++) {
              var l = n(i[s]);
              0 === e[l].references && (e[l].updater(), e.splice(l, 1));
            }
            i = u;
          };
        };
      },
      659: (t) => {
        "use strict";
        var e = {};
        t.exports = function (t, n) {
          var r = (function (t) {
            if (void 0 === e[t]) {
              var n = document.querySelector(t);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (t) {
                  n = null;
                }
              e[t] = n;
            }
            return e[t];
          })(t);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            );
          r.appendChild(n);
        };
      },
      540: (t) => {
        "use strict";
        t.exports = function (t) {
          var e = document.createElement("style");
          return t.setAttributes(e, t.attributes), t.insert(e, t.options), e;
        };
      },
      56: (t, e, n) => {
        "use strict";
        t.exports = function (t) {
          var e = n.nc;
          e && t.setAttribute("nonce", e);
        };
      },
      825: (t) => {
        "use strict";
        t.exports = function (t) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var e = t.insertStyleElement(t);
          return {
            update: function (n) {
              !(function (t, e, n) {
                var r = "";
                n.supports && (r += "@supports (".concat(n.supports, ") {")),
                  n.media && (r += "@media ".concat(n.media, " {"));
                var o = void 0 !== n.layer;
                o &&
                  (r += "@layer".concat(
                    n.layer.length > 0 ? " ".concat(n.layer) : "",
                    " {",
                  )),
                  (r += n.css),
                  o && (r += "}"),
                  n.media && (r += "}"),
                  n.supports && (r += "}");
                var i = n.sourceMap;
                i &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                      " */",
                    )),
                  e.styleTagTransform(r, t, e.options);
              })(e, t, n);
            },
            remove: function () {
              !(function (t) {
                if (null === t.parentNode) return !1;
                t.parentNode.removeChild(t);
              })(e);
            },
          };
        };
      },
      113: (t) => {
        "use strict";
        t.exports = function (t, e) {
          if (e.styleSheet) e.styleSheet.cssText = t;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(t));
          }
        };
      },
    },
    e = {};
  function n(r) {
    var o = e[r];
    if (void 0 !== o) return o.exports;
    var i = (e[r] = { id: r, exports: {} });
    return t[r](i, i.exports, n), i.exports;
  }
  (n.n = (t) => {
    var e = t && t.__esModule ? () => t.default : () => t;
    return n.d(e, { a: e }), e;
  }),
    (n.d = (t, e) => {
      for (var r in e)
        n.o(e, r) &&
          !n.o(t, r) &&
          Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
    }),
    (n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (n.nc = void 0),
    (() => {
      "use strict";
      n(919), n(831), n(687);
      var t = n(72),
        e = n.n(t),
        r = n(825),
        o = n.n(r),
        i = n(659),
        a = n.n(i),
        c = n(56),
        u = n.n(c),
        s = n(540),
        l = n.n(s),
        p = n(113),
        d = n.n(p),
        f = n(621),
        y = {};
      (y.styleTagTransform = d()),
        (y.setAttributes = u()),
        (y.insert = a().bind(null, "head")),
        (y.domAPI = o()),
        (y.insertStyleElement = l()),
        e()(f.A, y),
        f.A && f.A.locals && f.A.locals,
        document.addEventListener("DOMContentLoaded", function () {
          var t = document.getElementById("notesContainer"),
            e = [
              {
                id: "notes-jT-jjsyz61J8XKiI",
                title: "Welcome to Notes, Dimas!",
                body: "Welcome to Notes! This is your first note. You can archive it, delete it, or create new ones.",
                createdAt: "2022-07-28T10:03:12.594Z",
                archived: !1,
              },
              {
                id: "notes-aB-cdefg12345",
                title: "Meeting Agenda",
                body: "Discuss project updates and assign tasks for the upcoming week.",
                createdAt: "2022-08-05T15:30:00.000Z",
                archived: !1,
              },
              {
                id: "notes-XyZ-789012345",
                title: "Shopping List",
                body: "Milk, eggs, bread, fruits, and vegetables.",
                createdAt: "2022-08-10T08:45:23.120Z",
                archived: !1,
              },
              {
                id: "notes-1a-2b3c4d5e6f",
                title: "Personal Goals",
                body: "Read two books per month, exercise three times a week, learn a new language.",
                createdAt: "2022-08-15T18:12:55.789Z",
                archived: !1,
              },
              {
                id: "notes-LMN-456789",
                title: "Recipe: Spaghetti Bolognese",
                body: "Ingredients: ground beef, tomatoes, onions, garlic, pasta. Steps:...",
                createdAt: "2022-08-20T12:30:40.200Z",
                archived: !1,
              },
              {
                id: "notes-QwErTyUiOp",
                title: "Workout Routine",
                body: "Monday: Cardio, Tuesday: Upper body, Wednesday: Rest, Thursday: Lower body, Friday: Cardio.",
                createdAt: "2022-08-25T09:15:17.890Z",
                archived: !1,
              },
              {
                id: "notes-abcdef-987654",
                title: "Book Recommendations",
                body: "1. 'The Alchemist' by Paulo Coelho\n2. '1984' by George Orwell\n3. 'To Kill a Mockingbird' by Harper Lee",
                createdAt: "2022-09-01T14:20:05.321Z",
                archived: !1,
              },
              {
                id: "notes-zyxwv-54321",
                title: "Daily Reflections",
                body: "Write down three positive things that happened today and one thing to improve tomorrow.",
                createdAt: "2022-09-07T20:40:30.150Z",
                archived: !1,
              },
              {
                id: "notes-poiuyt-987654",
                title: "Travel Bucket List",
                body: "1. Paris, France\n2. Kyoto, Japan\n3. Santorini, Greece\n4. New York City, USA",
                createdAt: "2022-09-15T11:55:44.678Z",
                archived: !1,
              },
              {
                id: "notes-asdfgh-123456",
                title: "Coding Projects",
                body: "1. Build a personal website\n2. Create a mobile app\n3. Contribute to an open-source project",
                createdAt: "2022-09-20T17:10:12.987Z",
                archived: !1,
              },
              {
                id: "notes-5678-abcd-efgh",
                title: "Project Deadline",
                body: "Complete project tasks by the deadline on October 1st.",
                createdAt: "2022-09-28T14:00:00.000Z",
                archived: !1,
              },
              {
                id: "notes-9876-wxyz-1234",
                title: "Health Checkup",
                body: "Schedule a routine health checkup with the doctor.",
                createdAt: "2022-10-05T09:30:45.600Z",
                archived: !1,
              },
              {
                id: "notes-qwerty-8765-4321",
                title: "Financial Goals",
                body: "1. Create a monthly budget\n2. Save 20% of income\n3. Invest in a retirement fund.",
                createdAt: "2022-10-12T12:15:30.890Z",
                archived: !1,
              },
              {
                id: "notes-98765-54321-12345",
                title: "Holiday Plans",
                body: "Research and plan for the upcoming holiday destination.",
                createdAt: "2022-10-20T16:45:00.000Z",
                archived: !1,
              },
              {
                id: "notes-1234-abcd-5678",
                title: "Language Learning",
                body: "Practice Spanish vocabulary for 30 minutes every day.",
                createdAt: "2022-10-28T08:00:20.120Z",
                archived: !1,
              },
            ];
          function n() {
            (t.innerHTML = ""),
              e.forEach(function (e) {
                var n = document.createElement("div");
                n.classList.add("note");
                var r = new Date(e.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                });
                (n.innerHTML = "\n                <h3>"
                  .concat(e.title, "</h3>\n                <p>")
                  .concat(e.body, "</p>\n                <p>")
                  .concat(r, "</p>\n            ")),
                  t.appendChild(n);
              });
          }
          var r = document.querySelector("title-input"),
            o = document.querySelector("description-textarea"),
            i = document.querySelector("date-input");
          document
            .getElementById("addNoteButton")
            .addEventListener("click", function () {
              var t = r.shadowRoot.getElementById("title").value,
                a = o.shadowRoot.getElementById("description").value,
                c = i.getValue(),
                u = {
                  id: "notes-" + Date.now(),
                  title: t,
                  body: a,
                  createdAt: c,
                  archived: !1,
                };
              e.unshift(u), n();
            }),
            n();
        });
    })();
})();
