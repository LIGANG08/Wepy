'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import china from '../data/china.js'


var China = function (_wepy$page) {
  _inherits(China, _wepy$page);

  function China() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, China);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = China.__proto__ || Object.getPrototypeOf(China)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '中式婚纱/wedding'
    }, _this.data = {
      notcollect: '../images/acollect.png',
      lacollect: false,
      acollect: false,
      china: []

    }, _this.methods = {
      collect: function collect(e) {
        var self = this;
        var index = e.currentTarget.id;
        self.china[index].acollect = !self.china[index].acollect;
        // self.lacollect = '../images/收藏-选中.png'
        if (self.china[index].acollect) {
          self.china[index].c_number++;
        } else {
          self.china[index].c_number--;
        }
      },
      lagoods: function lagoods(e) {
        var item = e.currentTarget.dataset.index;
        console.log(e, 'item');
        switch (item) {
          case 0:
            _wepy2.default.navigateTo({
              url: '../pages/kla'
            });break;
          case 1:
            _wepy2.default.navigateTo({
              url: '../pages/klb'
            });break;
        }
        var self = this;
        var index = e.currentTarget.id;
        _wepy2.default.navigateTo({
          // url: `./kla?pic=${china[index].pic}&title=${china[index].title}&price=${china[index].price}`
        });
        console.log(self.china[index], '111111');
      }
      // lagoods(e) {
      //   let self = this
      //   const index = e.currentTarget.id
      //   wepy.navigateTo({
      //     url: `./kla`
      //   })
      //   console.log(self.korean[index], '111111')
      // }

    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(China, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      _wepy2.default.showToast({
        title: '加载中',
        icon: 'loading',
        duration: 1000
        // image: '../images/ahome.png'
      });
      // 连接后台
      _wepy2.default.request({
        url: 'http://127.0.0.1:7001/c',
        method: 'GET',
        success: function success(res) {
          self.china = res.data;
          self.setData({
            china: res.data
          });
          console.log('china', res.data);
        }
      });
    }
  }]);

  return China;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(China , 'pages/China'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNoaW5hLmpzIl0sIm5hbWVzIjpbIkNoaW5hIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJub3Rjb2xsZWN0IiwibGFjb2xsZWN0IiwiYWNvbGxlY3QiLCJjaGluYSIsIm1ldGhvZHMiLCJjb2xsZWN0IiwiZSIsInNlbGYiLCJpbmRleCIsImN1cnJlbnRUYXJnZXQiLCJpZCIsImNfbnVtYmVyIiwibGFnb29kcyIsIml0ZW0iLCJkYXRhc2V0IiwiY29uc29sZSIsImxvZyIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJzaG93VG9hc3QiLCJ0aXRsZSIsImljb24iLCJkdXJhdGlvbiIsInJlcXVlc3QiLCJtZXRob2QiLCJzdWNjZXNzIiwicmVzIiwic2V0RGF0YSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVBOzs7Ozs7Ozs7OztBQURBOzs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxrQkFBWSx3QkFEUDtBQUVMQyxpQkFBVyxLQUZOO0FBR0xDLGdCQUFVLEtBSEw7QUFJTEMsYUFBTzs7QUFKRixLLFFBT1BDLE8sR0FBVTtBQUNSQyxhQURRLG1CQUNBQyxDQURBLEVBQ0c7QUFDVCxZQUFJQyxPQUFPLElBQVg7QUFDQSxZQUFJQyxRQUFRRixFQUFFRyxhQUFGLENBQWdCQyxFQUE1QjtBQUNBSCxhQUFLSixLQUFMLENBQVdLLEtBQVgsRUFBa0JOLFFBQWxCLEdBQTZCLENBQUNLLEtBQUtKLEtBQUwsQ0FBV0ssS0FBWCxFQUFrQk4sUUFBaEQ7QUFDQTtBQUNBLFlBQUlLLEtBQUtKLEtBQUwsQ0FBV0ssS0FBWCxFQUFrQk4sUUFBdEIsRUFBZ0M7QUFDOUJLLGVBQUtKLEtBQUwsQ0FBV0ssS0FBWCxFQUFrQkcsUUFBbEI7QUFDRCxTQUZELE1BRU87QUFDTEosZUFBS0osS0FBTCxDQUFXSyxLQUFYLEVBQWtCRyxRQUFsQjtBQUNEO0FBQ0YsT0FYTztBQVlSQyxhQVpRLG1CQVlBTixDQVpBLEVBWUc7QUFDVCxZQUFJTyxPQUFPUCxFQUFFRyxhQUFGLENBQWdCSyxPQUFoQixDQUF3Qk4sS0FBbkM7QUFDQU8sZ0JBQVFDLEdBQVIsQ0FBWVYsQ0FBWixFQUFlLE1BQWY7QUFDQSxnQkFBUU8sSUFBUjtBQUNFLGVBQUssQ0FBTDtBQUFTLDJCQUFLSSxVQUFMLENBQWdCO0FBQ3ZCQyxtQkFBSztBQURrQixhQUFoQixFQUVMO0FBQ0osZUFBSyxDQUFMO0FBQVMsMkJBQUtELFVBQUwsQ0FBZ0I7QUFDdkJDLG1CQUFLO0FBRGtCLGFBQWhCLEVBRUw7QUFOTjtBQVFBLFlBQUlYLE9BQU8sSUFBWDtBQUNBLFlBQU1DLFFBQVFGLEVBQUVHLGFBQUYsQ0FBZ0JDLEVBQTlCO0FBQ0EsdUJBQUtPLFVBQUwsQ0FBZ0I7QUFDZDtBQURjLFNBQWhCO0FBR0FGLGdCQUFRQyxHQUFSLENBQVlULEtBQUtKLEtBQUwsQ0FBV0ssS0FBWCxDQUFaLEVBQStCLFFBQS9CO0FBQ0Q7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQXJDUSxLOzs7Ozs2QkF1Q0Q7QUFDUCxVQUFJRCxPQUFPLElBQVg7QUFDQSxxQkFBS1ksU0FBTCxDQUFlO0FBQ2JDLGVBQU8sS0FETTtBQUViQyxjQUFNLFNBRk87QUFHYkMsa0JBQVU7QUFDVjtBQUphLE9BQWY7QUFNRTtBQUNGLHFCQUFLQyxPQUFMLENBQWE7QUFDWEwsYUFBSyx5QkFETTtBQUVYTSxnQkFBUSxLQUZHO0FBR1hDLGlCQUFTLGlCQUFVQyxHQUFWLEVBQWU7QUFDdEJuQixlQUFLSixLQUFMLEdBQWF1QixJQUFJM0IsSUFBakI7QUFDQVEsZUFBS29CLE9BQUwsQ0FBYTtBQUNYeEIsbUJBQU91QixJQUFJM0I7QUFEQSxXQUFiO0FBR0FnQixrQkFBUUMsR0FBUixDQUFZLE9BQVosRUFBcUJVLElBQUkzQixJQUF6QjtBQUNEO0FBVFUsT0FBYjtBQVdEOzs7O0VBdEVnQyxlQUFLNkIsSTs7a0JBQW5CaEMsSyIsImZpbGUiOiJDaGluYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLy8gaW1wb3J0IGNoaW5hIGZyb20gJy4uL2RhdGEvY2hpbmEuanMnXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hpbmEgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+S4reW8j+Wpmue6sS93ZWRkaW5nJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgbm90Y29sbGVjdDogJy4uL2ltYWdlcy9hY29sbGVjdC5wbmcnLFxuICAgIGxhY29sbGVjdDogZmFsc2UsXG4gICAgYWNvbGxlY3Q6IGZhbHNlLFxuICAgIGNoaW5hOiBbXVxuXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBjb2xsZWN0KGUpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgbGV0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmlkXG4gICAgICBzZWxmLmNoaW5hW2luZGV4XS5hY29sbGVjdCA9ICFzZWxmLmNoaW5hW2luZGV4XS5hY29sbGVjdFxuICAgICAgLy8gc2VsZi5sYWNvbGxlY3QgPSAnLi4vaW1hZ2VzL+aUtuiXjy3pgInkuK0ucG5nJ1xuICAgICAgaWYgKHNlbGYuY2hpbmFbaW5kZXhdLmFjb2xsZWN0KSB7XG4gICAgICAgIHNlbGYuY2hpbmFbaW5kZXhdLmNfbnVtYmVyKytcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlbGYuY2hpbmFbaW5kZXhdLmNfbnVtYmVyLS1cbiAgICAgIH1cbiAgICB9LFxuICAgIGxhZ29vZHMoZSkge1xuICAgICAgdmFyIGl0ZW0gPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleFxuICAgICAgY29uc29sZS5sb2coZSwgJ2l0ZW0nKVxuICAgICAgc3dpdGNoIChpdGVtKSB7XG4gICAgICAgIGNhc2UgMCA6IHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiAnLi4vcGFnZXMva2xhJ1xuICAgICAgICB9KTsgYnJlYWtcbiAgICAgICAgY2FzZSAxIDogd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6ICcuLi9wYWdlcy9rbGInXG4gICAgICAgIH0pOyBicmVha1xuICAgICAgfVxuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBjb25zdCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5pZFxuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgLy8gdXJsOiBgLi9rbGE/cGljPSR7Y2hpbmFbaW5kZXhdLnBpY30mdGl0bGU9JHtjaGluYVtpbmRleF0udGl0bGV9JnByaWNlPSR7Y2hpbmFbaW5kZXhdLnByaWNlfWBcbiAgICAgIH0pXG4gICAgICBjb25zb2xlLmxvZyhzZWxmLmNoaW5hW2luZGV4XSwgJzExMTExMScpXG4gICAgfVxuICAgIC8vIGxhZ29vZHMoZSkge1xuICAgIC8vICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgLy8gICBjb25zdCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5pZFxuICAgIC8vICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAvLyAgICAgdXJsOiBgLi9rbGFgXG4gICAgLy8gICB9KVxuICAgIC8vICAgY29uc29sZS5sb2coc2VsZi5rb3JlYW5baW5kZXhdLCAnMTExMTExJylcbiAgICAvLyB9XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgIHRpdGxlOiAn5Yqg6L295LitJyxcbiAgICAgIGljb246ICdsb2FkaW5nJyxcbiAgICAgIGR1cmF0aW9uOiAxMDAwXG4gICAgICAvLyBpbWFnZTogJy4uL2ltYWdlcy9haG9tZS5wbmcnXG4gICAgfSlcbiAgICAgIC8vIOi/nuaOpeWQjuWPsFxuICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjcwMDEvYycsXG4gICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xuICAgICAgICBzZWxmLmNoaW5hID0gcmVzLmRhdGFcbiAgICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgICBjaGluYTogcmVzLmRhdGFcbiAgICAgICAgfSlcbiAgICAgICAgY29uc29sZS5sb2coJ2NoaW5hJywgcmVzLmRhdGEpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuIl19