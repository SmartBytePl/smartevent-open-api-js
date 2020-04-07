/**
 * Smart Event Open API
 * Smart Event Open API documentation
 *
 * OpenAPI spec version: 2.0.12
 * Contact: info@smartevent.pl
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
* The GeneralError model module.
* @module model/GeneralError
* @version 2.0.12
*/
export default class GeneralError {
    /**
    * Constructs a new <code>GeneralError</code>.
    * @alias module:model/GeneralError
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>GeneralError</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/GeneralError} obj Optional instance to populate.
    * @return {module:model/GeneralError} The populated <code>GeneralError</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GeneralError();
                        
            
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'Number');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ApiClient.convertToType(data['errors'], {'String': ['String']});
            }
        }
        return obj;
    }

    /**
    * @member {Number} code
    */
    code = undefined;
    /**
    * @member {String} message
    */
    message = undefined;
    /**
    * Keys reference to the fields where the error occurred.
    * @member {Object.<String, Array.<String>>} errors
    */
    errors = undefined;




}
