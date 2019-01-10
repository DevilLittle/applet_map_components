Page({
    data: {
        latitude: 23.099994,
        longitude: 113.324520,
        inputFocus: false, // input 框的focus状态
        inputModel: '', // input 框的输入内容
        inputInfo: '输入', // cover-view 显示的 input 的输入内容,初始值充当placeholder作用
    },

    onReady: function (e) {
        this.mapCtx = wx.createMapContext('myMap');
    },

    /**
     * 将焦点给到 input（在真机上不能获取input焦点）
     */
    tapInput() {
        this.setData({
            //在真机上将焦点给input
            inputFocus: true,
            //初始占位清空
            inputInfo: ''
        });
    },

    /**
     * input 失去焦点后将 input 的输入内容给到cover-view
     */
    blurInput(e) {
        this.setData({
            inputInfo: e.detail.value || '输入'
        });
    }
})