import express, { Request, Response } from 'express';

import ControllerBase from './../base/Controller.base';

export default class HomeController extends ControllerBase {
    constructor() {
        super('/', express.Router());
        console.log(this.path);
    }
}