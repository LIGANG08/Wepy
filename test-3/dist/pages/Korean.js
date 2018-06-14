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
      koreanImg: ''
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
        method: 'GET',
        data: {},
        success: function success(res) {
          self.koreanImg = res.data;
          self.setData({
            koreanImg: res.data
          });
          console.log('korean', res.data);
        }
      });
    }
  }]);

  return Korean;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Korean , 'pages/Korean'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIktvcmVhbi5qcyJdLCJuYW1lcyI6WyJLb3JlYW4iLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZW5hYmxlUHVsbERvd25SZWZyZXNoIiwiZGF0YSIsIm5vdGNvbGxlY3QiLCJsYWNvbGxlY3QiLCJhY29sbGVjdCIsImtvcmVhbkltZyIsIm1ldGhvZHMiLCJjb2xsZWN0IiwiZSIsInNlbGYiLCJpbmRleCIsImN1cnJlbnRUYXJnZXQiLCJpZCIsImtvcmVhbiIsImtfbnVtYmVyIiwibGFnb29kcyIsIml0ZW0iLCJkYXRhc2V0IiwiY29uc29sZSIsImxvZyIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJyZXMiLCJzaG93VG9hc3QiLCJ0aXRsZSIsImljb24iLCJkdXJhdGlvbiIsInJlcXVlc3QiLCJtZXRob2QiLCJzdWNjZXNzIiwic2V0RGF0YSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUdBOzs7Ozs7Ozs7OztBQUZBO0FBQ0E7OztJQUVxQkEsTTs7Ozs7Ozs7Ozs7Ozs7c0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCLGNBRGpCO0FBRVBDLDZCQUF1QjtBQUZoQixLLFFBSVRDLEksR0FBTztBQUNMQyxrQkFBWSx3QkFEUDtBQUVMQyxpQkFBVyxLQUZOO0FBR0xDLGdCQUFVLEtBSEw7QUFJTEMsaUJBQVc7QUFKTixLLFFBTVBDLE8sR0FBVTtBQUNSQyxhQURRLG1CQUNBQyxDQURBLEVBQ0c7QUFDVCxZQUFJQyxPQUFPLElBQVg7QUFDQSxZQUFJQyxRQUFRRixFQUFFRyxhQUFGLENBQWdCQyxFQUE1QjtBQUNBSCxhQUFLSSxNQUFMLENBQVlILEtBQVosRUFBbUJOLFFBQW5CLEdBQThCLENBQUNLLEtBQUtJLE1BQUwsQ0FBWUgsS0FBWixFQUFtQk4sUUFBbEQ7QUFDQSxZQUFJSyxLQUFLSSxNQUFMLENBQVlILEtBQVosRUFBbUJOLFFBQXZCLEVBQWlDO0FBQy9CSyxlQUFLSSxNQUFMLENBQVlILEtBQVosRUFBbUJJLFFBQW5CO0FBQ0QsU0FGRCxNQUVPO0FBQ0xMLGVBQUtJLE1BQUwsQ0FBWUgsS0FBWixFQUFtQkksUUFBbkI7QUFDRDtBQUNGLE9BVk87QUFXUkMsYUFYUSxtQkFXQVAsQ0FYQSxFQVdHO0FBQ1QsWUFBSVEsT0FBT1IsRUFBRUcsYUFBRixDQUFnQk0sT0FBaEIsQ0FBd0JQLEtBQW5DO0FBQ0FRLGdCQUFRQyxHQUFSLENBQVlYLENBQVosRUFBZSxNQUFmO0FBQ0EsZ0JBQVFRLElBQVI7QUFDRSxlQUFLLENBQUw7QUFBUywyQkFBS0ksVUFBTCxDQUFnQjtBQUN2QkMsbUJBQUs7QUFEa0IsYUFBaEIsRUFFTDtBQUNKLGVBQUssQ0FBTDtBQUFTLDJCQUFLRCxVQUFMLENBQWdCO0FBQ3ZCQyxtQkFBSztBQURrQixhQUFoQixFQUVMO0FBTk47QUFRQSx1QkFBS0QsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHQTtBQUNBO0FBQ0EsdUJBQUtELFVBQUwsQ0FBZ0I7QUFDZDtBQURjLFNBQWhCO0FBR0Q7QUE5Qk8sSzs7Ozs7MkJBZ0NIRSxHLEVBQUs7QUFDVixVQUFJYixPQUFPLElBQVg7QUFDQTtBQUNBLHFCQUFLYyxTQUFMLENBQWU7QUFDYkMsZUFBTyxLQURNO0FBRWJDLGNBQU0sU0FGTztBQUdiQyxrQkFBVTtBQUhHLE9BQWY7QUFLQTtBQUNBLHFCQUFLQyxPQUFMLENBQWE7QUFDWE4sYUFBSyx5QkFETTtBQUVYTyxnQkFBUSxLQUZHO0FBR1gzQixjQUFNLEVBSEs7QUFLWDRCLGlCQUFTLGlCQUFVUCxHQUFWLEVBQWU7QUFDdEJiLGVBQUtKLFNBQUwsR0FBaUJpQixJQUFJckIsSUFBckI7QUFDQVEsZUFBS3FCLE9BQUwsQ0FBYTtBQUNYekIsdUJBQVdpQixJQUFJckI7QUFESixXQUFiO0FBR0FpQixrQkFBUUMsR0FBUixDQUFZLFFBQVosRUFBc0JHLElBQUlyQixJQUExQjtBQUNEO0FBWFUsT0FBYjtBQWFEOzs7O0VBakVpQyxlQUFLOEIsSTs7a0JBQXBCbEMsTSIsImZpbGUiOiJLb3JlYW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIGltcG9ydCBrb3JlYW4gZnJvbSAnLi4vZGF0YS9rb3JlYW4uanMnXG4vLyBpbXBvcnQga2RhdGEgZnJvbSAnLi4vbXlzcWwvaW5kZXgnXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS29yZWFuIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfpn6nlvI/lqZrnurEvd2VkZGluZycsXG4gICAgZW5hYmxlUHVsbERvd25SZWZyZXNoOiB0cnVlXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBub3Rjb2xsZWN0OiAnLi4vaW1hZ2VzL2Fjb2xsZWN0LnBuZycsXG4gICAgbGFjb2xsZWN0OiBmYWxzZSxcbiAgICBhY29sbGVjdDogZmFsc2UsXG4gICAga29yZWFuSW1nOiAnJ1xuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgY29sbGVjdChlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGxldCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5pZFxuICAgICAgc2VsZi5rb3JlYW5baW5kZXhdLmFjb2xsZWN0ID0gIXNlbGYua29yZWFuW2luZGV4XS5hY29sbGVjdFxuICAgICAgaWYgKHNlbGYua29yZWFuW2luZGV4XS5hY29sbGVjdCkge1xuICAgICAgICBzZWxmLmtvcmVhbltpbmRleF0ua19udW1iZXIrK1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZi5rb3JlYW5baW5kZXhdLmtfbnVtYmVyLS1cbiAgICAgIH1cbiAgICB9LFxuICAgIGxhZ29vZHMoZSkge1xuICAgICAgdmFyIGl0ZW0gPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleFxuICAgICAgY29uc29sZS5sb2coZSwgJ2l0ZW0nKVxuICAgICAgc3dpdGNoIChpdGVtKSB7XG4gICAgICAgIGNhc2UgMCA6IHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiAnLi4vcGFnZXMva2xhJ1xuICAgICAgICB9KTsgYnJlYWtcbiAgICAgICAgY2FzZSAxIDogd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6ICcuLi9wYWdlcy9rbGInXG4gICAgICAgIH0pOyBicmVha1xuICAgICAgfVxuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi4vcGFnZXMva2xhJ1xuICAgICAgfSlcbiAgICAgIC8vIGxldCBzZWxmID0gdGhpc1xuICAgICAgLy8gY29uc3QgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuaWRcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIC8vIHVybDogYC4va2xhP3BpYz0ke2tvcmVhbltpbmRleF0ucGljfSZ0aXRsZT0ke2tvcmVhbltpbmRleF0udGl0bGV9JnByaWNlPSR7a29yZWFuW2luZGV4XS5wcmljZX1gXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBvbkxvYWQocmVzKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgLy8g5Yqg6L29XG4gICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgdGl0bGU6ICfliqDovb3kuK0nLFxuICAgICAgaWNvbjogJ2xvYWRpbmcnLFxuICAgICAgZHVyYXRpb246IDEwMDBcbiAgICB9KVxuICAgIC8vIOi/nuaOpeWQjuWPsFxuICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjcwMDEvaycsXG4gICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgZGF0YToge1xuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgc2VsZi5rb3JlYW5JbWcgPSByZXMuZGF0YVxuICAgICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICAgIGtvcmVhbkltZzogcmVzLmRhdGFcbiAgICAgICAgfSlcbiAgICAgICAgY29uc29sZS5sb2coJ2tvcmVhbicsIHJlcy5kYXRhKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==