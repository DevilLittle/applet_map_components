Page({
    data: {
        latitude: 23.099994,
        longitude: 113.324520,

        selectHeight: 'height: 40px', // select 组件的高度
        selectList: [{
            label: 'name',
            value: '1'
        }, {
            label: 'age',
            value: '2'
        }, {
            label: 'sex',
            value: '3'
        }, {
            label: 'label',
            value: '4'
        }, {
            label: 'value',
            value: '5'
        }], // select 组件的可选项
        selectModel: '选择', // cover-view 显示的选中的内容
        selectValue:''
    },
    onReady: function(e) {
        this.mapCtx = wx.createMapContext('myMap')
    },

    /**
     * 显示 Select
     */
    tapSelect() {
        this.setData({
            selectHeight: 'max-height:200px;'
        })
    },

    /**
     * 初始化选中item
     */
    itemChosen() {
        
    },
    /**
     * 选择 item
     */
    chooseItem(e) {
        console.log(e.target.dataset.value);
        let value = e.target.dataset.value;

        let item = this.data.selectList.find((item) => item.value === value);
        this.setData({
            selectValue:item.value,
            selectModel: item.label,
            selectHeight: 'height:40px;'
        })
    }
})