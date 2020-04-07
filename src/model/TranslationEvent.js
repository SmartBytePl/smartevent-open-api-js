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
* The TranslationEvent model module.
* @module model/TranslationEvent
* @version 2.0.12
*/
export default class TranslationEvent {
    /**
    * Constructs a new <code>TranslationEvent</code>.
    * @alias module:model/TranslationEvent
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>TranslationEvent</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/TranslationEvent} obj Optional instance to populate.
    * @return {module:model/TranslationEvent} The populated <code>TranslationEvent</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TranslationEvent();
                        
            
            if (data.hasOwnProperty('locale')) {
                obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('alternative_name')) {
                obj['alternative_name'] = ApiClient.convertToType(data['alternative_name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('short_description')) {
                obj['short_description'] = ApiClient.convertToType(data['short_description'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} locale
    */
    locale = undefined;
    /**
    * @member {String} name
    */
    name = undefined;
    /**
    * @member {String} alternative_name
    */
    alternative_name = undefined;
    /**
    * @member {String} description
    */
    description = undefined;
    /**
    * @member {String} short_description
    */
    short_description = undefined;




}
