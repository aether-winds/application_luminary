import { Handler, NextFunction, Request, Response } from 'express';

export interface HtmxFilterOptions {}

const DefaultHtmxFilterOptions: HtmxFilterOptions = {};

export default function HtmxFilterMiddlewareImpl(_: HtmxFilterOptions = {}): Handler {
  return (request: Request, response: Response, next: NextFunction) => {
    const isHtmxRequest: boolean = !!request.get('HX-Request');
    const pathStartsWithAssets: boolean = request.path.startsWith('/static');
    if (!isHtmxRequest && !pathStartsWithAssets) {
      response.append('Cache-Control', 'no-cache, no-store, must-revalidate');
      response.render('design', {
        nonce: response.locals.nonce,
        path: request.path,
      });
    } else {
      next();
    }
  }
}
