(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/Review.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Review
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const reviews = [
    {
        id: 1,
        name: "Samuel Edwards",
        role: "Family Member",
        text: "When my mother was diagnosed with dementia, caring for her became overwhelming for our family. We wanted her to remain at home, but we needed professional support. Carevia Solutions provided a caregiver who was not only highly skilled in dementia care but also kind, patient, and understanding. She quickly built a bond with my mother, helping her feel calm, safe, and respected in her own home.knowing my mother was in compassionate and capable hands gave our family real peace of mind. We’re truly grateful for the care and support we received."
    },
    {
        id: 2,
        name: "Jasmine Woods",
        role: "Client",
        text: `After my accident, I needed extra support to manage daily life and recover safely. The caregiver provided by  Carevia Solutions was patient, professional, and genuinely caring.With their help, I felt supported, respected, and confident as I worked toward regaining my independence. The care made a real difference during a challenging time.`
    },
    {
        id: 3,
        name: "Mary Johnson",
        role: "Family Member",
        text: "Supporting our loved one with learning disabilities has always been important to us, but we knew we needed professional help to give them the best quality of life.Carevia Solutions provided a caregiver who was patient, understanding, and truly committed. They supported daily routines, encouraged independence, and treated our family member with dignity and respect.Knowing our loved one was in safe and caring hands gave us confidence and peace of mind."
    }
];
function Review() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(21);
    if ($[0] !== "c529bfcaddd5e568418436d388af1a8bc1d8b593481d7a970ab8a01be5176a29") {
        for(let $i = 0; $i < 21; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c529bfcaddd5e568418436d388af1a8bc1d8b593481d7a970ab8a01be5176a29";
    }
    const [index, setIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "Review[useEffect()]": ()=>{
                const interval = setInterval({
                    "Review[useEffect() > setInterval()]": ()=>{
                        setIndex(_ReviewUseEffectSetIntervalSetIndex);
                    }
                }["Review[useEffect() > setInterval()]"], 4000);
                return ()=>clearInterval(interval);
            }
        })["Review[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-[30px] font-bold text-[#629FAD]",
            children: "Care Stories"
        }, void 0, false, {
            fileName: "[project]/src/components/Review.jsx",
            lineNumber: 53,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const t3 = reviews[index];
    let t4;
    if ($[4] !== t3.text) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-700 text-lg mb-4",
            children: t3.text
        }, void 0, false, {
            fileName: "[project]/src/components/Review.jsx",
            lineNumber: 61,
            columnNumber: 10
        }, this);
        $[4] = t3.text;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    const t5 = reviews[index];
    let t6;
    if ($[6] !== t5.name) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "font-semibold text-[#0E6BA8] text-xl",
            children: t5.name
        }, void 0, false, {
            fileName: "[project]/src/components/Review.jsx",
            lineNumber: 70,
            columnNumber: 10
        }, this);
        $[6] = t5.name;
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    const t7 = reviews[index];
    let t8;
    if ($[8] !== t7.role) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-gray-500",
            children: t7.role
        }, void 0, false, {
            fileName: "[project]/src/components/Review.jsx",
            lineNumber: 79,
            columnNumber: 10
        }, this);
        $[8] = t7.role;
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    let t9;
    if ($[10] !== t4 || $[11] !== t6 || $[12] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-[90%] mx-auto mt-[20px] lg:w-[95%] bg-gradient-to-r from-white  rounded-xl shadow p-6 transition-all duration-500",
            children: [
                t4,
                t6,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Review.jsx",
            lineNumber: 87,
            columnNumber: 10
        }, this);
        $[10] = t4;
        $[11] = t6;
        $[12] = t8;
        $[13] = t9;
    } else {
        t9 = $[13];
    }
    let t10;
    if ($[14] !== index) {
        t10 = reviews.map({
            "Review[reviews.map()]": (_, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: {
                        "Review[reviews.map() > <button>.onClick]": ()=>setIndex(idx)
                    }["Review[reviews.map() > <button>.onClick]"],
                    className: `w-4 h-4 rounded-full transition-all duration-300 ${idx === index ? "bg-[#296374]" : "bg-gray-300"}`
                }, idx, false, {
                    fileName: "[project]/src/components/Review.jsx",
                    lineNumber: 98,
                    columnNumber: 44
                }, this)
        }["Review[reviews.map()]"]);
        $[14] = index;
        $[15] = t10;
    } else {
        t10 = $[15];
    }
    let t11;
    if ($[16] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-center mt-6 gap-4",
            children: t10
        }, void 0, false, {
            fileName: "[project]/src/components/Review.jsx",
            lineNumber: 109,
            columnNumber: 11
        }, this);
        $[16] = t10;
        $[17] = t11;
    } else {
        t11 = $[17];
    }
    let t12;
    if ($[18] !== t11 || $[19] !== t9) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-2xl mx-auto text-center py-10 px-4",
            children: [
                t2,
                t9,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Review.jsx",
            lineNumber: 117,
            columnNumber: 11
        }, this);
        $[18] = t11;
        $[19] = t9;
        $[20] = t12;
    } else {
        t12 = $[20];
    }
    return t12;
}
_s(Review, "c3fuAdVwNN91t4bNS1qBXl5hAWY=");
_c = Review;
function _ReviewUseEffectSetIntervalSetIndex(prev) {
    return (prev + 1) % reviews.length;
}
var _c;
__turbopack_context__.k.register(_c, "Review");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
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
    if ($[0] !== "d64c619f47acbe11eaa45e4818271f01e1c6bd866b140a5d9ef8f1d5ba48d839") {
        for(let $i = 0; $i < 28; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d64c619f47acbe11eaa45e4818271f01e1c6bd866b140a5d9ef8f1d5ba48d839";
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
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {}, void 0, false, {
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
            className: "p-2 rounded-full border-2 border-[#0E2954]",
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
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {}, void 0, false, {
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
            className: "p-2 rounded-full border-2 border-[#0E295",
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
            className: "w-[90%] lg:w-[95%] bg-gradient-to-r from-white to-[#1F6E8C] rounded-xl shadow p-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-[26px] capitalize font-semibold mb-2 text-[#0E2954]",
                    children: card.title
                }, void 0, false, {
                    fileName: "[project]/src/components/ServiceSlide.jsx",
                    lineNumber: 193,
                    columnNumber: 306
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
                        columnNumber: 401
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ServiceSlide.jsx",
                    lineNumber: 193,
                    columnNumber: 396
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "pt-[20px]",
                    children: "Professional and compassionate eldercare staffing services."
                }, void 0, false, {
                    fileName: "[project]/src/components/ServiceSlide.jsx",
                    lineNumber: 193,
                    columnNumber: 521
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

//# sourceMappingURL=src_components_4d12b3e3._.js.map