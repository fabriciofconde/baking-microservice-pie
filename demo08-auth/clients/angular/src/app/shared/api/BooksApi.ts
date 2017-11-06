/**
 * Book API
 * Operations for Books.
 *
 * OpenAPI spec version: 02
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { Http, Headers, URLSearchParams }                    from '@angular/http';
import { RequestMethod, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Response, ResponseContentType }                     from '@angular/http';

import { Observable }                                        from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import * as models                                           from '../model/models';
import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';
import { AuthService } from '../auth.service';


@Injectable()
export class BooksApi {

    protected basePath = 'http://localhost:9000';
    public defaultHeaders: Headers = new Headers();
    public configuration: Configuration = new Configuration();

    constructor(protected http: Http,
                protected authService: AuthService,
                @Optional()@Inject(BASE_PATH) basePath: string,
                @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
        }
    }

    /**
     *
     * @summary Delete a Book
     * @param id
     */
    public _delete(id: number, extraHttpRequestParams?: any): Observable<{}> {
        return this._deleteWithHttpInfo(id, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     *
     * @summary Create a Book
     * @param body Book to be created
     */
    public create(body: models.Book, extraHttpRequestParams?: any): Observable<{}> {
        return this.createWithHttpInfo(body, extraHttpRequestParams)
            .map((response: Response) => {
                switch (response.status) {
                    case 204 :
                        return undefined;
                    case 201 :
                        return response;
                    default :
                        return response.json();
                }
            });
    }

    /**
     *
     * @summary Find all Books
     */
    public findAll(extraHttpRequestParams?: any): Observable<Array<models.Book>> {
        return this.findAllWithHttpInfo(extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     *
     * @summary Find a Book by the Id.
     * @param id
     */
    public findById(id: number, extraHttpRequestParams?: any): Observable<models.Book> {
        return this.findByIdWithHttpInfo(id, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     *
     * @summary Update a Book
     * @param body Book to be created
     */
    public update(body: models.Book, extraHttpRequestParams?: any): Observable<models.Book> {
        return this.updateWithHttpInfo(body, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }


    /**
     * Delete a Book
     *
     * @param id
     */
    // tag::adocSnippet[]
    public _deleteWithHttpInfo(id: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/books/${id}'.replace('${' + 'id' + '}', String(id));

        let queryParameters = new URLSearchParams();
        var jwt = this.authService.jwt;
        if (jwt != null) {
          this.defaultHeaders.set('Authorization', jwt);
        }
        // tag::adocSkip[]
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling _delete.');
        }
        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
        ];

        // end::adocSkip[]
        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Delete,
            headers: headers,
            search: queryParameters,
            withCredentials:this.configuration.withCredentials
        });
        // tag::adocSkip[]
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }
        // end::adocSkip[]

        return this.http.request(path, requestOptions);
    }
    // end::adocSnippet[]

    /**
     * Create a Book
     *
     * @param body Book to be created
     */
    public createWithHttpInfo(body: models.Book, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/books';

        let queryParameters = new URLSearchParams();
        var jwt = this.authService.jwt;
        if (jwt != null) {
          this.defaultHeaders.set('Authorization', jwt);
        }
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
          // verify required parameter 'body' is not null or undefined
          if (body === null || body === undefined) {
              throw new Error('Required parameter body was null or undefined when calling create.');
          }
          // to determine the Content-Type header
          let consumes: string[] = [
              'application/json'
          ];

          // to determine the Accept header
          let produces: string[] = [
          ];

          headers.set('Content-Type', 'application/json');

          let requestOptions: RequestOptionsArgs = new RequestOptions({
              method: RequestMethod.Post,
              headers: headers,
              body: body == null ? '' : JSON.stringify(body), // https://github.com/angular/angular/issues/10612
              search: queryParameters,
              withCredentials:this.configuration.withCredentials
          });
          // https://github.com/swagger-api/swagger-codegen/issues/4037
          if (extraHttpRequestParams) {
              requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
          }

          return this.http.request(path, requestOptions);
    }

    /**
     * Find all Books
     *
     */
    public findAllWithHttpInfo(extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/books';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            withCredentials:this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Find a Book by the Id.
     *
     * @param id
     */
    public findByIdWithHttpInfo(id: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/books/${id}'
                    .replace('${' + 'id' + '}', String(id));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling findById.');
        }
        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            withCredentials:this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Update a Book
     *
     * @param body Book to be created
     */
    public updateWithHttpInfo(body: models.Book, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/books';

        let queryParameters = new URLSearchParams();
        var jwt = this.authService.jwt;
        if (jwt != null) {
          this.defaultHeaders.set('Authorization', jwt);
        }
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling update.');
        }
        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        headers.set('Content-Type', 'application/json');

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Put,
            headers: headers,
            body: body == null ? '' : JSON.stringify(body), // https://github.com/angular/angular/issues/10612
            search: queryParameters,
            withCredentials:this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

}
