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
* The Currency model module.
* @module model/Currency
* @version 2.0.12
*/
export default class Currency {
    /**
    * Constructs a new <code>Currency</code>.
    * @alias module:model/Currency
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>Currency</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Currency} obj Optional instance to populate.
    * @return {module:model/Currency} The populated <code>Currency</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Currency();
                        
            
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} code
    */
    code = undefined;
    /**
    * @member {String} name
    */
    name = undefined;




}
