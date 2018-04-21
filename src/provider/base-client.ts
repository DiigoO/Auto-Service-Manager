import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Headers, RequestOptionsArgs, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class BaseClient {
  public APIHOST : string = 'https://api.jacotei.com.br/';
  public consumerKey : string = 'f2d8c2f8599c46e4a4567b40126c8659';

  public constructor(private http : Http){}

  private pendingCallsCount : number = 0;

  public endpoint(path : string[] = []){
    let action = path.join('/');
    return `${this.APIHOST}/${action}`;
  }

  public options(urlParams = {}, headers = {}, body : any = null) : RequestOptionsArgs {
    let options : RequestOptionsArgs = {};
    options.search  = this.searchParams(urlParams);
    options.headers = this.headers(headers);
    if(body){
      options.body = body
    }
    return options;
  }

  public searchParams(urlParams = {}) : URLSearchParams {
    let urlSearchParams: URLSearchParams = new URLSearchParams();
    for(let paramName in urlParams){
      let paramValue = urlParams[paramName];
      if(paramValue === '' || paramName === undefined || paramName === null){
        continue;
      }
      if(Array.isArray(paramValue)){
        paramValue = paramValue.join(',');
      }
      urlSearchParams.set(paramName, paramValue);
    }
    return urlSearchParams;
  }

  public headers(headersArgs = {}) : Headers {
    let headers: Headers = new Headers();
    headers.append('consumerKey', this.consumerKey);
    for(let headerName in headersArgs){
      let headerValue = headersArgs[headerName];
      headers.append(headerName, headerValue);
    }
    return headers;
  }

  public get(path : string[], urlParams = {}, headers = {}, baseClientRequestOptions = {}) : Observable<any> {
    let endpoint = this.endpoint(path);
    let options  = this.options(urlParams, headers);
    console.log('get endpoint', endpoint);
    console.log('get options', options);
    let rhh = new RequestHandlerHelper(this, baseClientRequestOptions);
    return this.http.get(endpoint, options)
          .map(rhh.mapFunc)
          .catch(rhh.catchFunc);
  }

  public post(path : string[], body : any, urlParams = {}, headers = {}, baseClientRequestOptions = {}) : Observable<any> {
    let rhh = new RequestHandlerHelper(this, baseClientRequestOptions);
  
    return this.http.post(this.endpoint(path), body, this.options(urlParams, headers))
          .map(rhh.mapFunc)
          .catch(rhh.catchFunc);
  }

  public put(path : string[], body : any, urlParams = {}, headers = {}, baseClientRequestOptions = {}) : Observable<any> {
    let rhh = new RequestHandlerHelper(this, baseClientRequestOptions);
    return this.http.put(this.endpoint(path), body, this.options(urlParams, headers))
          .map(rhh.mapFunc)
          .catch(rhh.catchFunc);
  }

  public delete(path : string[], body : any = null, urlParams = {}, headers = {}, baseClientRequestOptions = {}) : Observable<any> {
    let rhh = new RequestHandlerHelper(this, baseClientRequestOptions);
    return this.http.delete(this.endpoint(path), this.options(urlParams, headers, body))
          .map(rhh.mapFunc)
          .catch(rhh.catchFunc);
    }
}

class RequestHandlerHelper {
  constructor(private baseClient:BaseClient, private options : any){
    this.defaultOptionValues({enableLoadSpinner:true});
  }

  public mapFunc = (res:Response) => {
    return res.json();
  };

  public catchFunc = (error:any) => {
    return Observable.throw(error.json().message || error.json().error || 'Server error');
  };

  private defaultOptionValues(defaults : any) {
    for(let optionName in defaults){
      let _default = defaults[optionName];
      if(this.options[optionName] === undefined || this.options[optionName] === null ){
        this.options[optionName] = _default;
      }
    }
  }

}