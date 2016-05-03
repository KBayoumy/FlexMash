if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/aui-form-builder-field-radio/aui-form-builder-field-radio.js']) {
   __coverage__['build/aui-form-builder-field-radio/aui-form-builder-field-radio.js'] = {"path":"build/aui-form-builder-field-radio/aui-form-builder-field-radio.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":40},"end":{"line":1,"column":59}}},"2":{"name":"(anonymous_2)","line":57,"loc":{"start":{"line":57,"column":21},"end":{"line":57,"column":32}}},"3":{"name":"(anonymous_3)","line":99,"loc":{"start":{"line":99,"column":17},"end":{"line":99,"column":28}}},"4":{"name":"(anonymous_4)","line":110,"loc":{"start":{"line":110,"column":24},"end":{"line":110,"column":38}}},"5":{"name":"(anonymous_5)","line":114,"loc":{"start":{"line":114,"column":43},"end":{"line":114,"column":59}}},"6":{"name":"(anonymous_6)","line":131,"loc":{"start":{"line":131,"column":23},"end":{"line":131,"column":37}}},"7":{"name":"(anonymous_7)","line":138,"loc":{"start":{"line":138,"column":24},"end":{"line":138,"column":39}}},"8":{"name":"(anonymous_8)","line":169,"loc":{"start":{"line":169,"column":31},"end":{"line":169,"column":45}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":190,"column":54}},"2":{"start":{"line":10,"column":0},"end":{"line":28,"column":100}},"3":{"start":{"line":39,"column":0},"end":{"line":183,"column":3}},"4":{"start":{"line":58,"column":16},"end":{"line":58,"column":33}},"5":{"start":{"line":100,"column":12},"end":{"line":100,"column":41}},"6":{"start":{"line":111,"column":12},"end":{"line":112,"column":60}},"7":{"start":{"line":114,"column":12},"end":{"line":121,"column":15}},"8":{"start":{"line":115,"column":16},"end":{"line":120,"column":17}},"9":{"start":{"line":116,"column":20},"end":{"line":116,"column":56}},"10":{"start":{"line":119,"column":20},"end":{"line":119,"column":54}},"11":{"start":{"line":132,"column":12},"end":{"line":136,"column":60}},"12":{"start":{"line":138,"column":12},"end":{"line":153,"column":15}},"13":{"start":{"line":139,"column":16},"end":{"line":139,"column":80}},"14":{"start":{"line":141,"column":16},"end":{"line":152,"column":18}},"15":{"start":{"line":155,"column":12},"end":{"line":155,"column":70}},"16":{"start":{"line":157,"column":12},"end":{"line":157,"column":58}},"17":{"start":{"line":159,"column":12},"end":{"line":159,"column":56}},"18":{"start":{"line":170,"column":12},"end":{"line":171,"column":51}},"19":{"start":{"line":173,"column":12},"end":{"line":175,"column":13}},"20":{"start":{"line":174,"column":16},"end":{"line":174,"column":23}},"21":{"start":{"line":177,"column":12},"end":{"line":177,"column":46}},"22":{"start":{"line":179,"column":12},"end":{"line":179,"column":93}},"23":{"start":{"line":185,"column":0},"end":{"line":185,"column":48}},"24":{"start":{"line":187,"column":0},"end":{"line":187,"column":57}}},"branchMap":{"1":{"line":115,"type":"if","locations":[{"start":{"line":115,"column":16},"end":{"line":115,"column":16}},{"start":{"line":115,"column":16},"end":{"line":115,"column":16}}]},"2":{"line":144,"type":"cond-expr","locations":[{"start":{"line":144,"column":47},"end":{"line":144,"column":66}},{"start":{"line":144,"column":69},"end":{"line":144,"column":71}}]},"3":{"line":145,"type":"cond-expr","locations":[{"start":{"line":145,"column":65},"end":{"line":145,"column":86}},{"start":{"line":145,"column":89},"end":{"line":145,"column":91}}]},"4":{"line":173,"type":"if","locations":[{"start":{"line":173,"column":12},"end":{"line":173,"column":12}},{"start":{"line":173,"column":12},"end":{"line":173,"column":12}}]}},"code":["(function () { YUI.add('aui-form-builder-field-radio', function (A, NAME) {","","/**"," * The Form Builder Component"," *"," * @module aui-form-builder"," * @submodule aui-form-builder-field-radio"," */","","var L = A.Lang,","","    AEscape = A.Escape,","","    getCN = A.getClassName,","","    CSS_RADIO = getCN('radio'),","    CSS_FIELD = getCN('field'),","    CSS_FIELD_CHOICE = getCN('field', 'choice'),","    CSS_FIELD_RADIO = getCN('field', 'radio'),","    CSS_FORM_BUILDER_FIELD = getCN('form-builder-field'),","    CSS_FORM_BUILDER_FIELD_NODE = getCN('form-builder-field', 'node'),","    CSS_FORM_BUILDER_FIELD_OPTIONS_CONTAINER = getCN('form-builder-field', 'options', 'container'),","","    TPL_OPTIONS_CONTAINER = '<div class=\"' + CSS_FORM_BUILDER_FIELD_OPTIONS_CONTAINER + '\"></div>',","    TPL_RADIO =","        '<div class=\"' + CSS_RADIO + '\"><label class=\"field-label\" for=\"{id}\"><input id=\"{id}\" class=\"' +","        [CSS_FIELD, CSS_FIELD_CHOICE, CSS_FIELD_RADIO, CSS_FORM_BUILDER_FIELD_NODE].join(' ') +","        '\" name=\"{name}\" type=\"radio\" value=\"{value}\" {checked} {disabled} />{label}</label></div>';","","/**"," * A base class for `A.FormBuilderRadioField`."," *"," * @class A.FormBuilderRadioField"," * @extends A.FormBuilderMultipleChoiceField"," * @param {Object} config Object literal specifying widget configuration"," *     properties."," * @constructor"," */","var FormBuilderRadioField = A.Component.create({","","    /**","     * Static property used to define the default attribute","     * configuration for the `A.FormBuilderRadioField`.","     *","     * @property ATTRS","     * @type Object","     * @static","     */","    ATTRS: {","","        /**","         * Reusable block of markup used to generate the field.","         *","         * @attribute template","         */","        template: {","            valueFn: function() {","                return TPL_RADIO;","            }","        }","","    },","","    /**","     * Static property provides a string to identify the CSS prefix.","     *","     * @property CSS_PREFIX","     * @type String","     * @static","     */","    CSS_PREFIX: CSS_FORM_BUILDER_FIELD,","","    /**","     * Static property used to define which component it extends.","     *","     * @property EXTENDS","     * @type Object","     * @static","     */","    EXTENDS: A.FormBuilderMultipleChoiceField,","","    /**","     * Static property provides a string to identify the class.","     *","     * @property NAME","     * @type String","     * @static","     */","    NAME: 'form-builder-radio-field',","","    prototype: {","","        /**","         * Returns the HTML template.","         *","         * @method getHTML","         * @return {String}","         */","        getHTML: function() {","            return TPL_OPTIONS_CONTAINER;","        },","","        /**","         * Set the `disabled` attribute in the UI.","         *","         * @method _uiSetDisabled","         * @param val","         * @protected","         */","        _uiSetDisabled: function(val) {","            var instance = this,","                templateNode = instance.get('templateNode');","","            templateNode.all('input').each(function(input) {","                if (val) {","                    input.setAttribute('disabled', val);","                }","                else {","                    input.removeAttribute('disabled');","                }","            });","        },","","        /**","         * Set the `options` attribute in the UI.","         *","         * @method _uiSetOptions","         * @param val","         * @protected","         */","        _uiSetOptions: function(val) {","            var instance = this,","                buffer = [],","                counter = 0,","                predefinedValue = instance.get('predefinedValue'),","                templateNode = instance.get('templateNode');","","            A.each(val, function(item) {","                var checked = A.Array.indexOf(predefinedValue, item.value) > -1;","","                buffer.push(","                    L.sub(","                        TPL_RADIO, {","                            checked: checked ? 'checked=\"checked\"' : '',","                            disabled: instance.get('disabled') ? 'disabled=\"disabled\"' : '',","                            id: AEscape.html(instance.get('id') + counter++),","                            label: AEscape.html(item.label),","                            name: AEscape.html(instance.get('name')),","                            value: AEscape.html(item.value)","                        }","                    )","                );","            });","","            instance.optionNodes = A.NodeList.create(buffer.join(''));","","            templateNode.setContent(instance.optionNodes);","","            instance.get('builder').editField(instance);","        },","","        /**","         * Set the `predefinedValue` attribute in the UI.","         *","         * @method _uiSetPredefinedValue","         * @param val","         * @protected","         */","        _uiSetPredefinedValue: function(val) {","            var instance = this,","                optionNodes = instance.optionNodes;","","            if (!optionNodes) {","                return;","            }","","            optionNodes.set('checked', false);","","            optionNodes.all('input[value=\"' + AEscape.html(val) + '\"]').set('checked', true);","        }","    }","","});","","A.FormBuilderRadioField = FormBuilderRadioField;","","A.FormBuilderField.types.radio = A.FormBuilderRadioField;","","","}, '3.0.0', {\"requires\": [\"aui-form-builder-field\"]});","","}());"]};
}
var __cov_rj82TCxXIPzU8QsFvY0YlA = __coverage__['build/aui-form-builder-field-radio/aui-form-builder-field-radio.js'];
__cov_rj82TCxXIPzU8QsFvY0YlA.s['1']++;YUI.add('aui-form-builder-field-radio',function(A,NAME){__cov_rj82TCxXIPzU8QsFvY0YlA.f['1']++;__cov_rj82TCxXIPzU8QsFvY0YlA.s['2']++;var L=A.Lang,AEscape=A.Escape,getCN=A.getClassName,CSS_RADIO=getCN('radio'),CSS_FIELD=getCN('field'),CSS_FIELD_CHOICE=getCN('field','choice'),CSS_FIELD_RADIO=getCN('field','radio'),CSS_FORM_BUILDER_FIELD=getCN('form-builder-field'),CSS_FORM_BUILDER_FIELD_NODE=getCN('form-builder-field','node'),CSS_FORM_BUILDER_FIELD_OPTIONS_CONTAINER=getCN('form-builder-field','options','container'),TPL_OPTIONS_CONTAINER='<div class="'+CSS_FORM_BUILDER_FIELD_OPTIONS_CONTAINER+'"></div>',TPL_RADIO='<div class="'+CSS_RADIO+'"><label class="field-label" for="{id}"><input id="{id}" class="'+[CSS_FIELD,CSS_FIELD_CHOICE,CSS_FIELD_RADIO,CSS_FORM_BUILDER_FIELD_NODE].join(' ')+'" name="{name}" type="radio" value="{value}" {checked} {disabled} />{label}</label></div>';__cov_rj82TCxXIPzU8QsFvY0YlA.s['3']++;var FormBuilderRadioField=A.Component.create({ATTRS:{template:{valueFn:function(){__cov_rj82TCxXIPzU8QsFvY0YlA.f['2']++;__cov_rj82TCxXIPzU8QsFvY0YlA.s['4']++;return TPL_RADIO;}}},CSS_PREFIX:CSS_FORM_BUILDER_FIELD,EXTENDS:A.FormBuilderMultipleChoiceField,NAME:'form-builder-radio-field',prototype:{getHTML:function(){__cov_rj82TCxXIPzU8QsFvY0YlA.f['3']++;__cov_rj82TCxXIPzU8QsFvY0YlA.s['5']++;return TPL_OPTIONS_CONTAINER;},_uiSetDisabled:function(val){__cov_rj82TCxXIPzU8QsFvY0YlA.f['4']++;__cov_rj82TCxXIPzU8QsFvY0YlA.s['6']++;var instance=this,templateNode=instance.get('templateNode');__cov_rj82TCxXIPzU8QsFvY0YlA.s['7']++;templateNode.all('input').each(function(input){__cov_rj82TCxXIPzU8QsFvY0YlA.f['5']++;__cov_rj82TCxXIPzU8QsFvY0YlA.s['8']++;if(val){__cov_rj82TCxXIPzU8QsFvY0YlA.b['1'][0]++;__cov_rj82TCxXIPzU8QsFvY0YlA.s['9']++;input.setAttribute('disabled',val);}else{__cov_rj82TCxXIPzU8QsFvY0YlA.b['1'][1]++;__cov_rj82TCxXIPzU8QsFvY0YlA.s['10']++;input.removeAttribute('disabled');}});},_uiSetOptions:function(val){__cov_rj82TCxXIPzU8QsFvY0YlA.f['6']++;__cov_rj82TCxXIPzU8QsFvY0YlA.s['11']++;var instance=this,buffer=[],counter=0,predefinedValue=instance.get('predefinedValue'),templateNode=instance.get('templateNode');__cov_rj82TCxXIPzU8QsFvY0YlA.s['12']++;A.each(val,function(item){__cov_rj82TCxXIPzU8QsFvY0YlA.f['7']++;__cov_rj82TCxXIPzU8QsFvY0YlA.s['13']++;var checked=A.Array.indexOf(predefinedValue,item.value)>-1;__cov_rj82TCxXIPzU8QsFvY0YlA.s['14']++;buffer.push(L.sub(TPL_RADIO,{checked:checked?(__cov_rj82TCxXIPzU8QsFvY0YlA.b['2'][0]++,'checked="checked"'):(__cov_rj82TCxXIPzU8QsFvY0YlA.b['2'][1]++,''),disabled:instance.get('disabled')?(__cov_rj82TCxXIPzU8QsFvY0YlA.b['3'][0]++,'disabled="disabled"'):(__cov_rj82TCxXIPzU8QsFvY0YlA.b['3'][1]++,''),id:AEscape.html(instance.get('id')+counter++),label:AEscape.html(item.label),name:AEscape.html(instance.get('name')),value:AEscape.html(item.value)}));});__cov_rj82TCxXIPzU8QsFvY0YlA.s['15']++;instance.optionNodes=A.NodeList.create(buffer.join(''));__cov_rj82TCxXIPzU8QsFvY0YlA.s['16']++;templateNode.setContent(instance.optionNodes);__cov_rj82TCxXIPzU8QsFvY0YlA.s['17']++;instance.get('builder').editField(instance);},_uiSetPredefinedValue:function(val){__cov_rj82TCxXIPzU8QsFvY0YlA.f['8']++;__cov_rj82TCxXIPzU8QsFvY0YlA.s['18']++;var instance=this,optionNodes=instance.optionNodes;__cov_rj82TCxXIPzU8QsFvY0YlA.s['19']++;if(!optionNodes){__cov_rj82TCxXIPzU8QsFvY0YlA.b['4'][0]++;__cov_rj82TCxXIPzU8QsFvY0YlA.s['20']++;return;}else{__cov_rj82TCxXIPzU8QsFvY0YlA.b['4'][1]++;}__cov_rj82TCxXIPzU8QsFvY0YlA.s['21']++;optionNodes.set('checked',false);__cov_rj82TCxXIPzU8QsFvY0YlA.s['22']++;optionNodes.all('input[value="'+AEscape.html(val)+'"]').set('checked',true);}}});__cov_rj82TCxXIPzU8QsFvY0YlA.s['23']++;A.FormBuilderRadioField=FormBuilderRadioField;__cov_rj82TCxXIPzU8QsFvY0YlA.s['24']++;A.FormBuilderField.types.radio=A.FormBuilderRadioField;},'3.0.0',{'requires':['aui-form-builder-field']});