/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PersonPrivate } from '../models/PersonPrivate';
import type { PersonPublic } from '../models/PersonPublic';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DefaultService {

    /**
     * Person List
     * @returns PersonPublic Successful Response
     * @throws ApiError
     */
    public static personListPersonListPost(): CancelablePromise<Array<PersonPublic>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/person_list/',
        });
    }

    /**
     * Person
     * @param idx
     * @returns PersonPrivate Successful Response
     * @throws ApiError
     */
    public static personPersonIdxPost(
        idx: number,
    ): CancelablePromise<PersonPrivate> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/person/{idx}',
            path: {
                'idx': idx,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
