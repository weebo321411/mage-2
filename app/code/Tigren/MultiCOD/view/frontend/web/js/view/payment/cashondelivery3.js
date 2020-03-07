/*
 * Copyright (c) 2017 www.tigren.com
 */

define(
    [
        'uiComponent',
        'Magento_Checkout/js/model/payment/renderer-list'
    ],
    function (Component,
              rendererList) {
        'use strict';
        rendererList.push(
            {
                type: 'cashondelivery3',
                component: 'Tigren_MultiCOD/js/view/payment/method-renderer/cashondelivery3-method'
            }
        );
        return Component.extend({});
    }
);