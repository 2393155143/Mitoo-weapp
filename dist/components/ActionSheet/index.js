Component({behaviors:[],properties:{visible:{type:Boolean,value:!1},maskClosable:{type:Boolean,value:!0},title:{type:String,value:""},options:{type:Object},cancelButtonText:{type:String}},methods:{close(){this.setData({visible:!1})},cancelButton(){this.close()},tapMask(t){"mask"==t.target.dataset.role&&this.data.maskClosable&&this.close()},tapItem(t){const e={index:t.currentTarget.dataset.index};this.triggerEvent("tapItem",e,{bubbles:!1,composed:!1})}}});