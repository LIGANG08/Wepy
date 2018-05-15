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
// import korean from '../data/korean.js'
// import kdata from '../mysql/index'


var Korean = function (_wepy$page) {
  _inherits(Korean, _wepy$page);

  function Korean() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Korean);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Korean.__proto__ || Object.getPrototypeOf(Korean)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '韩式婚纱/wedding',
      enablePullDownRefresh: true
    }, _this.data = {
      notcollect: '../images/acollect.png',
      lacollect: false,
      acollect: false,
      korean: ''
    }, _this.methods = {
      collect: function collect(e) {
        var self = this;
        var index = e.currentTarget.id;
        self.korean[index].acollect = !self.korean[index].acollect;
        if (self.korean[index].acollect) {
          self.korean[index].k_number++;
        } else {
          self.korean[index].k_number--;
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
        _wepy2.default.navigateTo({
          url: '../pages/kla'
        });
        // let self = this
        // const index = e.currentTarget.id
        _wepy2.default.navigateTo({
          // url: `./kla?pic=${korean[index].pic}&title=${korean[index].title}&price=${korean[index].price}`
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Korean, [{
    key: 'onLoad',
    value: function onLoad(res) {
      var self = this;
      // 加载
      _wepy2.default.showToast({
        title: '加载中',
        icon: 'loading',
        duration: 1000
      });
      // 连接后台
      _wepy2.default.request({
        url: 'http://127.0.0.1:7001/k',
        method: 'POST',
        data: {
          pic: res.pic,
          title: res.title,
          price: res.price
        },
        success: function success(res) {
          self.korean = res.data;
          self.setData({
            korean: res.data
          });
          console.log('korean', res.data);
        }
      });
    }
  }]);

  return Korean;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Korean , 'pages/Korean'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIktvcmVhbi5qcyJdLCJuYW1lcyI6WyJLb3JlYW4iLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZW5hYmxlUHVsbERvd25SZWZyZXNoIiwiZGF0YSIsIm5vdGNvbGxlY3QiLCJsYWNvbGxlY3QiLCJhY29sbGVjdCIsImtvcmVhbiIsIm1ldGhvZHMiLCJjb2xsZWN0IiwiZSIsInNlbGYiLCJpbmRleCIsImN1cnJlbnRUYXJnZXQiLCJpZCIsImtfbnVtYmVyIiwibGFnb29kcyIsIml0ZW0iLCJkYXRhc2V0IiwiY29uc29sZSIsImxvZyIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJyZXMiLCJzaG93VG9hc3QiLCJ0aXRsZSIsImljb24iLCJkdXJhdGlvbiIsInJlcXVlc3QiLCJtZXRob2QiLCJwaWMiLCJwcmljZSIsInN1Y2Nlc3MiLCJzZXREYXRhIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBR0E7Ozs7Ozs7Ozs7O0FBRkE7QUFDQTs7O0lBRXFCQSxNOzs7Ozs7Ozs7Ozs7OztzTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0IsY0FEakI7QUFFUEMsNkJBQXVCO0FBRmhCLEssUUFJVEMsSSxHQUFPO0FBQ0xDLGtCQUFZLHdCQURQO0FBRUxDLGlCQUFXLEtBRk47QUFHTEMsZ0JBQVUsS0FITDtBQUlMQyxjQUFRO0FBSkgsSyxRQU1QQyxPLEdBQVU7QUFDUkMsYUFEUSxtQkFDQUMsQ0FEQSxFQUNHO0FBQ1QsWUFBSUMsT0FBTyxJQUFYO0FBQ0EsWUFBSUMsUUFBUUYsRUFBRUcsYUFBRixDQUFnQkMsRUFBNUI7QUFDQUgsYUFBS0osTUFBTCxDQUFZSyxLQUFaLEVBQW1CTixRQUFuQixHQUE4QixDQUFDSyxLQUFLSixNQUFMLENBQVlLLEtBQVosRUFBbUJOLFFBQWxEO0FBQ0EsWUFBSUssS0FBS0osTUFBTCxDQUFZSyxLQUFaLEVBQW1CTixRQUF2QixFQUFpQztBQUMvQkssZUFBS0osTUFBTCxDQUFZSyxLQUFaLEVBQW1CRyxRQUFuQjtBQUNELFNBRkQsTUFFTztBQUNMSixlQUFLSixNQUFMLENBQVlLLEtBQVosRUFBbUJHLFFBQW5CO0FBQ0Q7QUFDRixPQVZPO0FBV1JDLGFBWFEsbUJBV0FOLENBWEEsRUFXRztBQUNULFlBQUlPLE9BQU9QLEVBQUVHLGFBQUYsQ0FBZ0JLLE9BQWhCLENBQXdCTixLQUFuQztBQUNBTyxnQkFBUUMsR0FBUixDQUFZVixDQUFaLEVBQWUsTUFBZjtBQUNBLGdCQUFRTyxJQUFSO0FBQ0UsZUFBSyxDQUFMO0FBQVMsMkJBQUtJLFVBQUwsQ0FBZ0I7QUFDdkJDLG1CQUFLO0FBRGtCLGFBQWhCLEVBRUw7QUFDSixlQUFLLENBQUw7QUFBUywyQkFBS0QsVUFBTCxDQUFnQjtBQUN2QkMsbUJBQUs7QUFEa0IsYUFBaEIsRUFFTDtBQU5OO0FBUUEsdUJBQUtELFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0E7QUFDQTtBQUNBLHVCQUFLRCxVQUFMLENBQWdCO0FBQ2Q7QUFEYyxTQUFoQjtBQUdEO0FBOUJPLEs7Ozs7OzJCQWdDSEUsRyxFQUFLO0FBQ1YsVUFBSVosT0FBTyxJQUFYO0FBQ0E7QUFDQSxxQkFBS2EsU0FBTCxDQUFlO0FBQ2JDLGVBQU8sS0FETTtBQUViQyxjQUFNLFNBRk87QUFHYkMsa0JBQVU7QUFIRyxPQUFmO0FBS0E7QUFDQSxxQkFBS0MsT0FBTCxDQUFhO0FBQ1hOLGFBQUsseUJBRE07QUFFWE8sZ0JBQVEsTUFGRztBQUdYMUIsY0FBTTtBQUNKMkIsZUFBS1AsSUFBSU8sR0FETDtBQUVKTCxpQkFBT0YsSUFBSUUsS0FGUDtBQUdKTSxpQkFBT1IsSUFBSVE7QUFIUCxTQUhLO0FBUVhDLGlCQUFTLGlCQUFVVCxHQUFWLEVBQWU7QUFDdEJaLGVBQUtKLE1BQUwsR0FBY2dCLElBQUlwQixJQUFsQjtBQUNBUSxlQUFLc0IsT0FBTCxDQUFhO0FBQ1gxQixvQkFBUWdCLElBQUlwQjtBQURELFdBQWI7QUFHQWdCLGtCQUFRQyxHQUFSLENBQVksUUFBWixFQUFzQkcsSUFBSXBCLElBQTFCO0FBQ0Q7QUFkVSxPQUFiO0FBZ0JEOzs7O0VBcEVpQyxlQUFLK0IsSTs7a0JBQXBCbkMsTSIsImZpbGUiOiJLb3JlYW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIGltcG9ydCBrb3JlYW4gZnJvbSAnLi4vZGF0YS9rb3JlYW4uanMnXG4vLyBpbXBvcnQga2RhdGEgZnJvbSAnLi4vbXlzcWwvaW5kZXgnXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS29yZWFuIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfpn6nlvI/lqZrnurEvd2VkZGluZycsXG4gICAgZW5hYmxlUHVsbERvd25SZWZyZXNoOiB0cnVlXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBub3Rjb2xsZWN0OiAnLi4vaW1hZ2VzL2Fjb2xsZWN0LnBuZycsXG4gICAgbGFjb2xsZWN0OiBmYWxzZSxcbiAgICBhY29sbGVjdDogZmFsc2UsXG4gICAga29yZWFuOiAnJ1xuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgY29sbGVjdChlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGxldCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5pZFxuICAgICAgc2VsZi5rb3JlYW5baW5kZXhdLmFjb2xsZWN0ID0gIXNlbGYua29yZWFuW2luZGV4XS5hY29sbGVjdFxuICAgICAgaWYgKHNlbGYua29yZWFuW2luZGV4XS5hY29sbGVjdCkge1xuICAgICAgICBzZWxmLmtvcmVhbltpbmRleF0ua19udW1iZXIrK1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZi5rb3JlYW5baW5kZXhdLmtfbnVtYmVyLS1cbiAgICAgIH1cbiAgICB9LFxuICAgIGxhZ29vZHMoZSkge1xuICAgICAgdmFyIGl0ZW0gPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleFxuICAgICAgY29uc29sZS5sb2coZSwgJ2l0ZW0nKVxuICAgICAgc3dpdGNoIChpdGVtKSB7XG4gICAgICAgIGNhc2UgMCA6IHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiAnLi4vcGFnZXMva2xhJ1xuICAgICAgICB9KTsgYnJlYWtcbiAgICAgICAgY2FzZSAxIDogd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6ICcuLi9wYWdlcy9rbGInXG4gICAgICAgIH0pOyBicmVha1xuICAgICAgfVxuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi4vcGFnZXMva2xhJ1xuICAgICAgfSlcbiAgICAgIC8vIGxldCBzZWxmID0gdGhpc1xuICAgICAgLy8gY29uc3QgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuaWRcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIC8vIHVybDogYC4va2xhP3BpYz0ke2tvcmVhbltpbmRleF0ucGljfSZ0aXRsZT0ke2tvcmVhbltpbmRleF0udGl0bGV9JnByaWNlPSR7a29yZWFuW2luZGV4XS5wcmljZX1gXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBvbkxvYWQocmVzKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgLy8g5Yqg6L29XG4gICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgdGl0bGU6ICfliqDovb3kuK0nLFxuICAgICAgaWNvbjogJ2xvYWRpbmcnLFxuICAgICAgZHVyYXRpb246IDEwMDBcbiAgICB9KVxuICAgIC8vIOi/nuaOpeWQjuWPsFxuICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjcwMDEvaycsXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgcGljOiByZXMucGljLFxuICAgICAgICB0aXRsZTogcmVzLnRpdGxlLFxuICAgICAgICBwcmljZTogcmVzLnByaWNlXG4gICAgICB9LFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xuICAgICAgICBzZWxmLmtvcmVhbiA9IHJlcy5kYXRhXG4gICAgICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgICAga29yZWFuOiByZXMuZGF0YVxuICAgICAgICB9KVxuICAgICAgICBjb25zb2xlLmxvZygna29yZWFuJywgcmVzLmRhdGEpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuIl19