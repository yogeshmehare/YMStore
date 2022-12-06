"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/updateLaptop";
exports.ids = ["pages/api/updateLaptop"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./Models/Laptop.js":
/*!**************************!*\
  !*** ./Models/Laptop.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst LaptopSchema = new mongoose.Schema({\n    BrandName: {\n        type: String,\n        required: true\n    },\n    Title: {\n        type: String,\n        required: true\n    },\n    Slug: {\n        type: String,\n        required: true\n    },\n    Desc: {\n        type: String,\n        required: true\n    },\n    Image: {\n        type: String,\n        required: true\n    },\n    ColorVariant: {\n        type: String\n    },\n    Size: {\n        type: String\n    },\n    Category: {\n        type: String,\n        required: true\n    },\n    Price: {\n        type: Number,\n        required: true\n    },\n    Quantity: {\n        type: Number,\n        required: true\n    },\n    ReviewCount: {\n        type: Number\n    },\n    FavProduct: {\n        type: Boolean\n    }\n}, {\n    timestamps: true\n});\nmongoose.models = {};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mongoose.model(\"Laptop\", LaptopSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9Nb2RlbHMvTGFwdG9wLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxRQUFRLEdBQUdDLG1CQUFPLENBQUMsMEJBQVUsQ0FBQztBQUVwQyxNQUFNQyxZQUFZLEdBQUcsSUFBSUYsUUFBUSxDQUFDRyxNQUFNLENBQUM7SUFDckNDLFNBQVMsRUFBRTtRQUFDQyxJQUFJLEVBQUNDLE1BQU07UUFBRUMsUUFBUSxFQUFDLElBQUk7S0FBQztJQUN2Q0MsS0FBSyxFQUFHO1FBQUNILElBQUksRUFBQ0MsTUFBTTtRQUFFQyxRQUFRLEVBQUMsSUFBSTtLQUFDO0lBQ3BDRSxJQUFJLEVBQUc7UUFBQ0osSUFBSSxFQUFDQyxNQUFNO1FBQUVDLFFBQVEsRUFBQyxJQUFJO0tBQUM7SUFDbkNHLElBQUksRUFBRztRQUFDTCxJQUFJLEVBQUNDLE1BQU07UUFBRUMsUUFBUSxFQUFDLElBQUk7S0FBQztJQUNuQ0ksS0FBSyxFQUFHO1FBQUNOLElBQUksRUFBQ0MsTUFBTTtRQUFFQyxRQUFRLEVBQUMsSUFBSTtLQUFDO0lBQ3BDSyxZQUFZLEVBQUc7UUFBQ1AsSUFBSSxFQUFDQyxNQUFNO0tBQUM7SUFDNUJPLElBQUksRUFBRztRQUFDUixJQUFJLEVBQUNDLE1BQU07S0FBQztJQUNwQlEsUUFBUSxFQUFHO1FBQUNULElBQUksRUFBQ0MsTUFBTTtRQUFFQyxRQUFRLEVBQUMsSUFBSTtLQUFDO0lBQ3ZDUSxLQUFLLEVBQUc7UUFBQ1YsSUFBSSxFQUFDVyxNQUFNO1FBQUVULFFBQVEsRUFBQyxJQUFJO0tBQUM7SUFDcENVLFFBQVEsRUFBRztRQUFDWixJQUFJLEVBQUNXLE1BQU07UUFBRVQsUUFBUSxFQUFDLElBQUk7S0FBQztJQUN2Q1csV0FBVyxFQUFFO1FBQUNiLElBQUksRUFBQ1csTUFBTTtLQUFDO0lBQzFCRyxVQUFVLEVBQUU7UUFBQ2QsSUFBSSxFQUFDZSxPQUFPO0tBQUM7Q0FDN0IsRUFBQztJQUFDQyxVQUFVLEVBQUMsSUFBSTtDQUFDLENBQUM7QUFFcEJyQixRQUFRLENBQUNzQixNQUFNLEdBQUcsRUFBRTtBQUNwQixpRUFBZXRCLFFBQVEsQ0FBQ3VCLEtBQUssQ0FBQyxRQUFRLEVBQUNyQixZQUFZLENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FueV9zZWVkcy8uL01vZGVscy9MYXB0b3AuanM/MTI0MCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBtb25nb29zZSA9IHJlcXVpcmUoJ21vbmdvb3NlJyk7XHJcblxyXG5jb25zdCBMYXB0b3BTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcclxuICAgIEJyYW5kTmFtZSA6e3R5cGU6U3RyaW5nLCByZXF1aXJlZDp0cnVlfSxcclxuICAgIFRpdGxlIDoge3R5cGU6U3RyaW5nLCByZXF1aXJlZDp0cnVlfSxcclxuICAgIFNsdWcgOiB7dHlwZTpTdHJpbmcsIHJlcXVpcmVkOnRydWV9LFxyXG4gICAgRGVzYyA6IHt0eXBlOlN0cmluZywgcmVxdWlyZWQ6dHJ1ZX0sXHJcbiAgICBJbWFnZSA6IHt0eXBlOlN0cmluZywgcmVxdWlyZWQ6dHJ1ZX0sXHJcbiAgICBDb2xvclZhcmlhbnQgOiB7dHlwZTpTdHJpbmd9LFxyXG4gICAgU2l6ZSA6IHt0eXBlOlN0cmluZ30sXHJcbiAgICBDYXRlZ29yeSA6IHt0eXBlOlN0cmluZywgcmVxdWlyZWQ6dHJ1ZX0sXHJcbiAgICBQcmljZSA6IHt0eXBlOk51bWJlciwgcmVxdWlyZWQ6dHJ1ZX0sXHJcbiAgICBRdWFudGl0eSA6IHt0eXBlOk51bWJlciwgcmVxdWlyZWQ6dHJ1ZX0sXHJcbiAgICBSZXZpZXdDb3VudCA6e3R5cGU6TnVtYmVyfSxcclxuICAgIEZhdlByb2R1Y3QgOnt0eXBlOkJvb2xlYW59XHJcbn0se3RpbWVzdGFtcHM6dHJ1ZX0pO1xyXG5cclxubW9uZ29vc2UubW9kZWxzID0ge31cclxuZXhwb3J0IGRlZmF1bHQgbW9uZ29vc2UubW9kZWwoXCJMYXB0b3BcIixMYXB0b3BTY2hlbWEpOyJdLCJuYW1lcyI6WyJtb25nb29zZSIsInJlcXVpcmUiLCJMYXB0b3BTY2hlbWEiLCJTY2hlbWEiLCJCcmFuZE5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJUaXRsZSIsIlNsdWciLCJEZXNjIiwiSW1hZ2UiLCJDb2xvclZhcmlhbnQiLCJTaXplIiwiQ2F0ZWdvcnkiLCJQcmljZSIsIk51bWJlciIsIlF1YW50aXR5IiwiUmV2aWV3Q291bnQiLCJGYXZQcm9kdWN0IiwiQm9vbGVhbiIsInRpbWVzdGFtcHMiLCJtb2RlbHMiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./Models/Laptop.js\n");

/***/ }),

/***/ "(api)/./MongoDB/mongooseConnector.js":
/*!**************************************!*\
  !*** ./MongoDB/mongooseConnector.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connectToDB = (handler)=>async (req, res)=>{\n        if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections[0].readyState)) {\n            return handler(req, res);\n        }\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGO_URI);\n        return handler(req, res);\n    }\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectToDB);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9Nb25nb0RCL21vbmdvb3NlQ29ubmVjdG9yLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQyxNQUFNQyxXQUFXLEdBQUdDLENBQUFBLE9BQU8sR0FBSSxPQUFPQyxHQUFHLEVBQUNDLEdBQUcsR0FBSztRQUM5QyxJQUFHSiwyRUFBa0MsRUFBQztZQUNsQyxPQUFPRSxPQUFPLENBQUNDLEdBQUcsRUFBQ0MsR0FBRyxDQUFDO1NBQzFCO1FBQ0QsTUFBTUosdURBQWdCLENBQUNRLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxTQUFTLENBQUM7UUFDN0MsT0FBT1IsT0FBTyxDQUFDQyxHQUFHLEVBQUNDLEdBQUcsQ0FBQyxDQUFDO0tBQzNCO0FBQUE7QUFFRCxpRUFBZUgsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL2FueV9zZWVkcy8uL01vbmdvREIvbW9uZ29vc2VDb25uZWN0b3IuanM/Y2UxNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5jb25zdCBjb25uZWN0VG9EQiA9IGhhbmRsZXIgPT4gYXN5bmMgKHJlcSxyZXMpID0+IHtcclxuICAgIGlmKG1vbmdvb3NlLmNvbm5lY3Rpb25zWzBdLnJlYWR5U3RhdGUpe1xyXG4gICAgICAgIHJldHVybiBoYW5kbGVyKHJlcSxyZXMpXHJcbiAgICB9XHJcbiAgICBhd2FpdCBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPX1VSSSlcclxuICAgIHJldHVybiBoYW5kbGVyKHJlcSxyZXMpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0VG9EQiJdLCJuYW1lcyI6WyJtb25nb29zZSIsImNvbm5lY3RUb0RCIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImNvbm5lY3Rpb25zIiwicmVhZHlTdGF0ZSIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09fVVJJIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./MongoDB/mongooseConnector.js\n");

/***/ }),

/***/ "(api)/./pages/api/updateLaptop.js":
/*!***********************************!*\
  !*** ./pages/api/updateLaptop.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Models_Laptop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Models/Laptop */ \"(api)/./Models/Laptop.js\");\n/* harmony import */ var _MongoDB_mongooseConnector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../MongoDB/mongooseConnector */ \"(api)/./MongoDB/mongooseConnector.js\");\n\n\nconst handler = async (req, res)=>{\n    if (req.method == \"POST\") {\n        let count = 0;\n        count = (await _Models_Laptop__WEBPACK_IMPORTED_MODULE_0__[\"default\"].updateOne({\n            _id: req.body.id\n        }, {\n            FavProduct: req.body.FavProduct\n        })).modifiedCount;\n        console.log(count);\n        if (count == 0) {\n            count = (await Mobile.updateOne({\n                _id: req.body.id\n            }, {\n                FavProduct: req.body.FavProduct\n            })).modifiedCount;\n        }\n        console.log(count);\n        res.status(200).json({\n            success: \"success\"\n        });\n    } else {\n        res.status(400).json({\n            error: \"Error\"\n        });\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_MongoDB_mongooseConnector__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(handler));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXBkYXRlTGFwdG9wLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF5QztBQUNnQjtBQUV6RCxNQUFNRSxPQUFPLEdBQUcsT0FBT0MsR0FBRyxFQUFFQyxHQUFHLEdBQUs7SUFDaEMsSUFBSUQsR0FBRyxDQUFDRSxNQUFNLElBQUksTUFBTSxFQUFFO1FBQ3RCLElBQUlDLEtBQUssR0FBRyxDQUFDO1FBQ2JBLEtBQUssR0FBRyxDQUFDLE1BQU1OLGdFQUFnQixDQUFDO1lBQUNRLEdBQUcsRUFBQ0wsR0FBRyxDQUFDTSxJQUFJLENBQUNDLEVBQUU7U0FBQyxFQUFDO1lBQUNDLFVBQVUsRUFBQ1IsR0FBRyxDQUFDTSxJQUFJLENBQUNFLFVBQVU7U0FBQyxDQUFDLENBQUMsQ0FBQ0MsYUFBYTtRQUNsR0MsT0FBTyxDQUFDQyxHQUFHLENBQUNSLEtBQUssQ0FBQyxDQUFDO1FBQ25CLElBQUdBLEtBQUssSUFBRSxDQUFDLEVBQUM7WUFDUkEsS0FBSyxHQUFHLENBQUMsTUFBTVMsTUFBTSxDQUFDUixTQUFTLENBQUM7Z0JBQUNDLEdBQUcsRUFBQ0wsR0FBRyxDQUFDTSxJQUFJLENBQUNDLEVBQUU7YUFBQyxFQUFDO2dCQUFDQyxVQUFVLEVBQUNSLEdBQUcsQ0FBQ00sSUFBSSxDQUFDRSxVQUFVO2FBQUMsQ0FBQyxDQUFDLENBQUNDLGFBQWE7U0FDckc7UUFDREMsT0FBTyxDQUFDQyxHQUFHLENBQUNSLEtBQUssQ0FBQyxDQUFDO1FBQ25CRixHQUFHLENBQUNZLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUNDLE9BQU8sRUFBRyxTQUFTO1NBQUMsQ0FBQztLQUM5QyxNQUFJO1FBQ0RkLEdBQUcsQ0FBQ1ksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBQ0UsS0FBSyxFQUFHLE9BQU87U0FBQyxDQUFDO0tBQzFDO0NBQ0o7QUFFRCxpRUFBZWxCLHNFQUFXLENBQUNDLE9BQU8sQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FueV9zZWVkcy8uL3BhZ2VzL2FwaS91cGRhdGVMYXB0b3AuanM/MzVjMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGFwdG9wIGZyb20gXCIuLi8uLi9Nb2RlbHMvTGFwdG9wXCI7XHJcbmltcG9ydCBjb25uZWN0VG9EQiBmcm9tIFwiLi4vLi4vTW9uZ29EQi9tb25nb29zZUNvbm5lY3RvclwiXHJcblxyXG5jb25zdCBoYW5kbGVyID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICBpZiAocmVxLm1ldGhvZCA9PSAnUE9TVCcpIHtcclxuICAgICAgICBsZXQgY291bnQgPSAwO1xyXG4gICAgICAgIGNvdW50ID0gKGF3YWl0IExhcHRvcC51cGRhdGVPbmUoe19pZDpyZXEuYm9keS5pZH0se0ZhdlByb2R1Y3Q6cmVxLmJvZHkuRmF2UHJvZHVjdH0pKS5tb2RpZmllZENvdW50XHJcbiAgICAgICAgY29uc29sZS5sb2coY291bnQpO1xyXG4gICAgICAgIGlmKGNvdW50PT0wKXtcclxuICAgICAgICAgICAgY291bnQgPSAoYXdhaXQgTW9iaWxlLnVwZGF0ZU9uZSh7X2lkOnJlcS5ib2R5LmlkfSx7RmF2UHJvZHVjdDpyZXEuYm9keS5GYXZQcm9kdWN0fSkpLm1vZGlmaWVkQ291bnRcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coY291bnQpO1xyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtzdWNjZXNzIDogXCJzdWNjZXNzXCJ9KVxyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oe2Vycm9yIDogXCJFcnJvclwifSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdFRvREIoaGFuZGxlcilcclxuIl0sIm5hbWVzIjpbIkxhcHRvcCIsImNvbm5lY3RUb0RCIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImNvdW50IiwidXBkYXRlT25lIiwiX2lkIiwiYm9keSIsImlkIiwiRmF2UHJvZHVjdCIsIm1vZGlmaWVkQ291bnQiLCJjb25zb2xlIiwibG9nIiwiTW9iaWxlIiwic3RhdHVzIiwianNvbiIsInN1Y2Nlc3MiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/updateLaptop.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/updateLaptop.js"));
module.exports = __webpack_exports__;

})();