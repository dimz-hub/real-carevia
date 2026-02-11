(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/ServiceSlide.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ServiceSlide
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const cards = [
    {
        id: 1,
        title: "Home Care",
        img: '/hero-img.jpg'
    },
    {
        id: 2,
        title: "Domiciliary Care",
        img: '/hero-img.jpg'
    },
    {
        id: 3,
        title: "Dementia Care",
        img: '/hero-img.jpg'
    },
    {
        id: 4,
        title: "Learning Difficulty Care",
        img: '/hero-img.jpg'
    },
    {
        id: 5,
        title: "End Of Life Care",
        img: '/hero-img.jpg'
    },
    {
        id: 6,
        title: "Respite Care",
        img: '/hero-img.jpg'
    }
];
function ServiceSlide() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(28);
    if ($[0] !== "13bedf8880bbf9335b909165a52c177904fcb59e66e546d1bdf71c43adc2dd9b") {
        for(let $i = 0; $i < 28; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "13bedf8880bbf9335b909165a52c177904fcb59e66e546d1bdf71c43adc2dd9b";
    }
    const [index, setIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isDesktop, setIsDesktop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "ServiceSlide[useEffect()]": ()=>{
                const updateSize = {
                    "ServiceSlide[useEffect() > updateSize]": ()=>setIsDesktop(window.innerWidth >= 1024)
                }["ServiceSlide[useEffect() > updateSize]"];
                updateSize();
                window.addEventListener("resize", updateSize);
                return ()=>window.removeEventListener("resize", updateSize);
            }
        })["ServiceSlide[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    const totalSlides = isDesktop ? Math.ceil(cards.length / 3) : cards.length;
    let t2;
    if ($[3] !== totalSlides) {
        t2 = ({
            "ServiceSlide[prev]": ()=>{
                setIndex({
                    "ServiceSlide[prev > setIndex()]": (i)=>i === 0 ? totalSlides - 1 : i - 1
                }["ServiceSlide[prev > setIndex()]"]);
            }
        })["ServiceSlide[prev]"];
        $[3] = totalSlides;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const prev = t2;
    let t3;
    if ($[5] !== totalSlides) {
        t3 = ({
            "ServiceSlide[next]": ()=>{
                setIndex({
                    "ServiceSlide[next > setIndex()]": (i_0)=>i_0 === totalSlides - 1 ? 0 : i_0 + 1
                }["ServiceSlide[next > setIndex()]"]);
            }
        })["ServiceSlide[next]"];
        $[5] = totalSlides;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    const next = t3;
    let t4;
    if ($[7] !== next) {
        t4 = ({
            "ServiceSlide[useEffect()]": ()=>{
                const timer = setInterval(next, 4000);
                return ()=>clearInterval(timer);
            }
        })["ServiceSlide[useEffect()]"];
        $[7] = next;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    let t5;
    if ($[9] !== isDesktop) {
        t5 = [
            isDesktop
        ];
        $[9] = isDesktop;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t4, t5);
    let t6;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
            color: "green"
        }, void 0, false, {
            fileName: "[project]/src/components/ServiceSlide.jsx",
            lineNumber: 118,
            columnNumber: 10
        }, this);
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    let t7;
    if ($[12] !== prev) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: prev,
            className: "p-2 rounded-full border-2 border-green-800/40",
            children: t6
        }, void 0, false, {
            fileName: "[project]/src/components/ServiceSlide.jsx",
            lineNumber: 125,
            columnNumber: 10
        }, this);
        $[12] = prev;
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    let t8;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
            color: "green"
        }, void 0, false, {
            fileName: "[project]/src/components/ServiceSlide.jsx",
            lineNumber: 133,
            columnNumber: 10
        }, this);
        $[14] = t8;
    } else {
        t8 = $[14];
    }
    let t9;
    if ($[15] !== next) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: next,
            className: "p-2 rounded-full border-2 border-green-800/40",
            children: t8
        }, void 0, false, {
            fileName: "[project]/src/components/ServiceSlide.jsx",
            lineNumber: 140,
            columnNumber: 10
        }, this);
        $[15] = next;
        $[16] = t9;
    } else {
        t9 = $[16];
    }
    let t10;
    if ($[17] !== t7 || $[18] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-end gap-3 mb-4 px-4",
            children: [
                t7,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ServiceSlide.jsx",
            lineNumber: 148,
            columnNumber: 11
        }, this);
        $[17] = t7;
        $[18] = t9;
        $[19] = t10;
    } else {
        t10 = $[19];
    }
    const t11 = `translateX(-${index * (isDesktop ? 100 : 100)}%)`;
    let t12;
    if ($[20] !== t11) {
        t12 = {
            transform: t11
        };
        $[20] = t11;
        $[21] = t12;
    } else {
        t12 = $[21];
    }
    let t13;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = cards.map(_ServiceSlideCardsMap);
        $[22] = t13;
    } else {
        t13 = $[22];
    }
    let t14;
    if ($[23] !== t12) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "overflow-hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex transition-transform duration-500 ease-out",
                style: t12,
                children: t13
            }, void 0, false, {
                fileName: "[project]/src/components/ServiceSlide.jsx",
                lineNumber: 175,
                columnNumber: 44
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ServiceSlide.jsx",
            lineNumber: 175,
            columnNumber: 11
        }, this);
        $[23] = t12;
        $[24] = t14;
    } else {
        t14 = $[24];
    }
    let t15;
    if ($[25] !== t10 || $[26] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-6xl mx-auto pt-[25px] ",
            children: [
                t10,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ServiceSlide.jsx",
            lineNumber: 183,
            columnNumber: 11
        }, this);
        $[25] = t10;
        $[26] = t14;
        $[27] = t15;
    } else {
        t15 = $[27];
    }
    return t15;
}
_s(ServiceSlide, "wvfqEM9t406WbleEZADIxKxTZCE=");
_c = ServiceSlide;
function _ServiceSlideCardsMap(card, i_1) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "\r\n                flex-shrink-0\r\n                w-full\r\n                lg:w-1/3\r\n                flex\r\n                justify-center\r\n              ",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-[90%] lg:w-[95%] bg-gradient-to-r from-white to-blue-100 rounded-xl shadow p-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-[26px] capitalize font-semibold mb-2 text-[#0E6BA8]",
                    children: card.title
                }, void 0, false, {
                    fileName: "[project]/src/components/ServiceSlide.jsx",
                    lineNumber: 193,
                    columnNumber: 305
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: card.img,
                        alt: "service-img",
                        width: 1000,
                        height: 300,
                        className: "w-[450px] rounded-2xl text-center"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ServiceSlide.jsx",
                        lineNumber: 193,
                        columnNumber: 400
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ServiceSlide.jsx",
                    lineNumber: 193,
                    columnNumber: 395
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "pt-[20px]",
                    children: "Professional and compassionate eldercare staffing services."
                }, void 0, false, {
                    fileName: "[project]/src/components/ServiceSlide.jsx",
                    lineNumber: 193,
                    columnNumber: 520
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ServiceSlide.jsx",
            lineNumber: 193,
            columnNumber: 207
        }, this)
    }, card.id, false, {
        fileName: "[project]/src/components/ServiceSlide.jsx",
        lineNumber: 193,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "ServiceSlide");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_ServiceSlide_jsx_d388993f._.js.map