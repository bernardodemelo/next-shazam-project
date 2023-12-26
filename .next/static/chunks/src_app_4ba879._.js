(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_app_4ba879._.js", {

"[project]/src/app/index.module.css [app-client] (css module)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname }) => (() => {

__turbopack_export_value__({
  "homeSearch": "homeSearch__index__975169f2",
  "inputDiv": "inputDiv__index__975169f2",
  "shazaMainDiv": "shazaMainDiv__index__975169f2",
  "shazamLogo": "shazamLogo__index__975169f2",
});

})()),
"[project]/src/app/page.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>Home
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$crypto$2d$js$2f$sha256$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/crypto-js/sha256.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$index$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/app/index.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$input$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@nextui-org/input/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@nextui-org/button/dist/index.mjs [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
function Home() {
    _s();
    const [username, setUsername] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]("");
    const router = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]();
    function encryptAndSubmit() {
        const encryptPassword = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$crypto$2d$js$2f$sha256$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].encrypt(username);
        console.log(encryptPassword);
        let routerAdaptedPassword = "";
        for(let i = 0; i < encryptPassword.length; i++){
            console.log(encryptPassword[i]);
            if (encryptPassword[i] === "?" || encryptPassword[i] === "/") {
                break;
            } else {
                routerAdaptedPassword += encryptPassword[i];
            }
        }
        console.log(routerAdaptedPassword);
    //router.push(`/dashboard/${routerAdaptedPassword}`);
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$index$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].homeSearch,
        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$index$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].shazaMainDiv,
            children: [
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$index$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].shazamLogo
                }, void 0, false, {
                    fileName: "<[project]/src/app/page.js>",
                    lineNumber: 47,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$index$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputDiv,
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$input$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                            onChange: (e)=>setUsername(e.target.value),
                            placeholder: "Enter your name here... ",
                            value: username
                        }, void 0, false, {
                            fileName: "<[project]/src/app/page.js>",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: encryptAndSubmit,
                            radius: "full",
                            className: "",
                            children: "Button"
                        }, void 0, false, {
                            fileName: "<[project]/src/app/page.js>",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/src/app/page.js>",
                    lineNumber: 48,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "<[project]/src/app/page.js>",
            lineNumber: 46,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/src/app/page.js>",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
_s(Home, "f1AeDw7ze90vUAQeK1bYSN5GTYA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Home;
var _c;
__turbopack_refresh__.register(_c, "Home");

})()),
}]);

//# sourceMappingURL=src_app_4ba879._.js.map