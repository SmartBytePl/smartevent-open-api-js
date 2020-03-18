/**
 * Smart Event Open API
 * Smart Event Open API documentation
 *
 * OpenAPI spec version: 2.0.9
 * Contact: info@smartevent.pl
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
* The Image model module.
* @module model/Image
* @version 2.0.9
*/
export default class Image {
    /**
    * Constructs a new <code>Image</code>.
    * @alias module:model/Image
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>Image</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Image} obj Optional instance to populate.
    * @return {module:model/Image} The populated <code>Image</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Image();
                        
            
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} type
    */
    type = undefined;
    /**
    * @member {String} path
    */
    path = undefined;




}
