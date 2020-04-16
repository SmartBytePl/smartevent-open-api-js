/**
 * Smart Event Open API
 * Smart Event Open API documentation
 *
 * OpenAPI spec version: 2.0.15
 * Contact: info@smartevent.pl
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
* The CalculateResponse model module.
* @module model/CalculateResponse
* @version 2.0.15
*/
export default class CalculateResponse {
    /**
    * Constructs a new <code>CalculateResponse</code>.
    * @alias module:model/CalculateResponse
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>CalculateResponse</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/CalculateResponse} obj Optional instance to populate.
    * @return {module:model/CalculateResponse} The populated <code>CalculateResponse</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CalculateResponse();
                        
            
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
            if (data.hasOwnProperty('promotions')) {
                obj['promotions'] = ApiClient.convertToType(data['promotions'], 'Number');
            }
            if (data.hasOwnProperty('channel')) {
                obj['channel'] = ApiClient.convertToType(data['channel'], 'String');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('locale')) {
                obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
            }
            if (data.hasOwnProperty('check_id')) {
                obj['check_id'] = ApiClient.convertToType(data['check_id'], 'Number');
            }
        }
        return obj;
    }

    /**
    * Value in basic currency units (cents)
    * @member {Number} total
    */
    total = undefined;
    /**
    * Total value of discounts in basic value units (cents)
    * @member {Number} promotions
    */
    promotions = undefined;
    /**
    * Channel name
    * @member {String} channel
    */
    channel = undefined;
    /**
    * Currency name
    * @member {String} currency
    */
    currency = undefined;
    /**
    * Locale
    * @member {String} locale
    */
    locale = undefined;
    /**
    * @member {Number} check_id
    */
    check_id = undefined;




}
