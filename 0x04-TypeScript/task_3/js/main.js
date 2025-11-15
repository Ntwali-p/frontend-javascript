"use strict";
// task_3/js/main.ts
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var CRUD = require("./crud.js");
// Create a row object
var row = {
    firstName: 'Guillaume',
    lastName: 'Salva',
};
// Insert row
var newRowID = CRUD.insertRow(row);
// Update row with age
var updatedRow = __assign(__assign({}, row), { age: 23 });
CRUD.updateRow(newRowID, updatedRow);
// Delete row
CRUD.deleteRow(newRowID);
