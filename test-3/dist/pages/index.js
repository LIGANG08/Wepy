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
// import home from '../data/home.js'


var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: 'MILAN 畅享幸福'
    }, _this.data = {
      indicatorDots: true,
      autoplay: true,
      interval: '3000',
      duration: '300',
      spic: '../images/search.png',
      homeImg: '',
      height: 0,
      width: 0
    }, _this.methods = {
      search: function search() {
        _wepy2.default.navigateTo({
          url: '../pages/search'
        });
      },
      style: function style(e) {
        var item = e.currentTarget.dataset.index;
        console.log(e, 'item');
        switch (item) {
          case 0:
            _wepy2.default.navigateTo({
              url: '../pages/Korean'
            });break;
          case 1:
            _wepy2.default.navigateTo({
              url: '../pages/euramerican'
            });break;
          case 2:
            _wepy2.default.navigateTo({
              url: '../pages/China'
            });break;
          case 3:
            _wepy2.default.navigateTo({
              url: '../pages/fresh'
            });break;
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      // 获取系统信息(高度，宽度)
      _wepy2.default.getSystemInfo({
        success: function success(res) {
          self.height = res.windowHeight;
          self.width = res.windowWidth;
        }
      });
      console.log(self.width, 'width');
      console.log(self.height, 'height');
      // 加载
      _wepy2.default.showLoading({
        title: '加载中',
        duration: 2000,
        image: '../images/ahome.png'
      });

      // 连接后台
      _wepy2.default.request({
        url: 'http://127.0.0.1:7001/himg',
        method: 'GET',
        success: function success(res) {
          self.homeImg = res.data;
          self.setData({
            homeImg: res.data
          });
          console.log('111', self.homeImg);
          console.log('222', res.data);
        }
      });

      _wepy2.default.request({
        url: 'http://127.0.0.1:7001/mimg',
        method: 'GET',
        success: function success(res) {
          self.move = res.data;
          self.setData({
            move: res.data
          });
          console.log(res.data);
        }
      });
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJpbmRpY2F0b3JEb3RzIiwiYXV0b3BsYXkiLCJpbnRlcnZhbCIsImR1cmF0aW9uIiwic3BpYyIsImhvbWVJbWciLCJoZWlnaHQiLCJ3aWR0aCIsIm1ldGhvZHMiLCJzZWFyY2giLCJuYXZpZ2F0ZVRvIiwidXJsIiwic3R5bGUiLCJlIiwiaXRlbSIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiaW5kZXgiLCJjb25zb2xlIiwibG9nIiwic2VsZiIsImdldFN5c3RlbUluZm8iLCJzdWNjZXNzIiwicmVzIiwid2luZG93SGVpZ2h0Iiwid2luZG93V2lkdGgiLCJzaG93TG9hZGluZyIsInRpdGxlIiwiaW1hZ2UiLCJyZXF1ZXN0IiwibWV0aG9kIiwic2V0RGF0YSIsIm1vdmUiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFQTs7Ozs7Ozs7Ozs7QUFEQTs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMscUJBQWUsSUFEVjtBQUVMQyxnQkFBVSxJQUZMO0FBR0xDLGdCQUFVLE1BSEw7QUFJTEMsZ0JBQVUsS0FKTDtBQUtMQyxZQUFNLHNCQUxEO0FBTUxDLGVBQVMsRUFOSjtBQU9MQyxjQUFRLENBUEg7QUFRTEMsYUFBTztBQVJGLEssUUFVUEMsTyxHQUFVO0FBQ1JDLFlBRFEsb0JBQ0M7QUFDUCx1QkFBS0MsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRCxPQUxPO0FBTVJDLFdBTlEsaUJBTUZDLENBTkUsRUFNQztBQUNQLFlBQUlDLE9BQU9ELEVBQUVFLGFBQUYsQ0FBZ0JDLE9BQWhCLENBQXdCQyxLQUFuQztBQUNBQyxnQkFBUUMsR0FBUixDQUFZTixDQUFaLEVBQWUsTUFBZjtBQUNBLGdCQUFRQyxJQUFSO0FBQ0UsZUFBSyxDQUFMO0FBQVMsMkJBQUtKLFVBQUwsQ0FBZ0I7QUFDdkJDLG1CQUFLO0FBRGtCLGFBQWhCLEVBRUw7QUFDSixlQUFLLENBQUw7QUFBUywyQkFBS0QsVUFBTCxDQUFnQjtBQUN2QkMsbUJBQUs7QUFEa0IsYUFBaEIsRUFFTDtBQUNKLGVBQUssQ0FBTDtBQUFTLDJCQUFLRCxVQUFMLENBQWdCO0FBQ3ZCQyxtQkFBSztBQURrQixhQUFoQixFQUVMO0FBQ0osZUFBSyxDQUFMO0FBQVMsMkJBQUtELFVBQUwsQ0FBZ0I7QUFDdkJDLG1CQUFLO0FBRGtCLGFBQWhCLEVBRUw7QUFaTjtBQWNEO0FBdkJPLEs7Ozs7OzZCQXlCRDtBQUNQLFVBQUlTLE9BQU8sSUFBWDtBQUNBO0FBQ0EscUJBQUtDLGFBQUwsQ0FBbUI7QUFDakJDLGVBRGlCLG1CQUNUQyxHQURTLEVBQ0o7QUFDWEgsZUFBS2QsTUFBTCxHQUFjaUIsSUFBSUMsWUFBbEI7QUFDQUosZUFBS2IsS0FBTCxHQUFhZ0IsSUFBSUUsV0FBakI7QUFDRDtBQUpnQixPQUFuQjtBQU1BUCxjQUFRQyxHQUFSLENBQVlDLEtBQUtiLEtBQWpCLEVBQXdCLE9BQXhCO0FBQ0FXLGNBQVFDLEdBQVIsQ0FBWUMsS0FBS2QsTUFBakIsRUFBeUIsUUFBekI7QUFDQTtBQUNBLHFCQUFLb0IsV0FBTCxDQUFpQjtBQUNmQyxlQUFPLEtBRFE7QUFFZnhCLGtCQUFVLElBRks7QUFHZnlCLGVBQU87QUFIUSxPQUFqQjs7QUFNQTtBQUNBLHFCQUFLQyxPQUFMLENBQWE7QUFDWGxCLGFBQUssNEJBRE07QUFFWG1CLGdCQUFRLEtBRkc7QUFHWFIsaUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQkgsZUFBS2YsT0FBTCxHQUFla0IsSUFBSXhCLElBQW5CO0FBQ0FxQixlQUFLVyxPQUFMLENBQWE7QUFDWDFCLHFCQUFTa0IsSUFBSXhCO0FBREYsV0FBYjtBQUdBbUIsa0JBQVFDLEdBQVIsQ0FBWSxLQUFaLEVBQW1CQyxLQUFLZixPQUF4QjtBQUNBYSxrQkFBUUMsR0FBUixDQUFZLEtBQVosRUFBbUJJLElBQUl4QixJQUF2QjtBQUNEO0FBVlUsT0FBYjs7QUFhQSxxQkFBSzhCLE9BQUwsQ0FBYTtBQUNYbEIsYUFBSyw0QkFETTtBQUVYbUIsZ0JBQVEsS0FGRztBQUdYUixpQkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCSCxlQUFLWSxJQUFMLEdBQVlULElBQUl4QixJQUFoQjtBQUNBcUIsZUFBS1csT0FBTCxDQUFhO0FBQ1hDLGtCQUFNVCxJQUFJeEI7QUFEQyxXQUFiO0FBR0FtQixrQkFBUUMsR0FBUixDQUFZSSxJQUFJeEIsSUFBaEI7QUFDRDtBQVRVLE9BQWI7QUFXRDs7OztFQWxGZ0MsZUFBS2tDLEk7O2tCQUFuQnJDLEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIGltcG9ydCBob21lIGZyb20gJy4uL2RhdGEvaG9tZS5qcydcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAnTUlMQU4g55WF5Lqr5bm456aPJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgaW5kaWNhdG9yRG90czogdHJ1ZSxcbiAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICBpbnRlcnZhbDogJzMwMDAnLFxuICAgIGR1cmF0aW9uOiAnMzAwJyxcbiAgICBzcGljOiAnLi4vaW1hZ2VzL3NlYXJjaC5wbmcnLFxuICAgIGhvbWVJbWc6ICcnLFxuICAgIGhlaWdodDogMCxcbiAgICB3aWR0aDogMFxuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgc2VhcmNoKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi4vcGFnZXMvc2VhcmNoJ1xuICAgICAgfSlcbiAgICB9LFxuICAgIHN0eWxlKGUpIHtcbiAgICAgIHZhciBpdGVtID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXhcbiAgICAgIGNvbnNvbGUubG9nKGUsICdpdGVtJylcbiAgICAgIHN3aXRjaCAoaXRlbSkge1xuICAgICAgICBjYXNlIDAgOiB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogJy4uL3BhZ2VzL0tvcmVhbidcbiAgICAgICAgfSk7IGJyZWFrXG4gICAgICAgIGNhc2UgMSA6IHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiAnLi4vcGFnZXMvZXVyYW1lcmljYW4nXG4gICAgICAgIH0pOyBicmVha1xuICAgICAgICBjYXNlIDIgOiB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogJy4uL3BhZ2VzL0NoaW5hJ1xuICAgICAgICB9KTsgYnJlYWtcbiAgICAgICAgY2FzZSAzIDogd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6ICcuLi9wYWdlcy9mcmVzaCdcbiAgICAgICAgfSk7IGJyZWFrXG4gICAgICB9XG4gICAgfVxuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAvLyDojrflj5bns7vnu5/kv6Hmga8o6auY5bqm77yM5a695bqmKVxuICAgIHdlcHkuZ2V0U3lzdGVtSW5mbyh7XG4gICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICBzZWxmLmhlaWdodCA9IHJlcy53aW5kb3dIZWlnaHRcbiAgICAgICAgc2VsZi53aWR0aCA9IHJlcy53aW5kb3dXaWR0aFxuICAgICAgfVxuICAgIH0pXG4gICAgY29uc29sZS5sb2coc2VsZi53aWR0aCwgJ3dpZHRoJylcbiAgICBjb25zb2xlLmxvZyhzZWxmLmhlaWdodCwgJ2hlaWdodCcpXG4gICAgLy8g5Yqg6L29XG4gICAgd2VweS5zaG93TG9hZGluZyh7XG4gICAgICB0aXRsZTogJ+WKoOi9veS4rScsXG4gICAgICBkdXJhdGlvbjogMjAwMCxcbiAgICAgIGltYWdlOiAnLi4vaW1hZ2VzL2Fob21lLnBuZydcbiAgICB9KVxuXG4gICAgLy8g6L+e5o6l5ZCO5Y+wXG4gICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6NzAwMS9oaW1nJyxcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgc2VsZi5ob21lSW1nID0gcmVzLmRhdGFcbiAgICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgICBob21lSW1nOiByZXMuZGF0YVxuICAgICAgICB9KVxuICAgICAgICBjb25zb2xlLmxvZygnMTExJywgc2VsZi5ob21lSW1nKVxuICAgICAgICBjb25zb2xlLmxvZygnMjIyJywgcmVzLmRhdGEpXG4gICAgICB9XG4gICAgfSlcblxuICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjcwMDEvbWltZycsXG4gICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIHNlbGYubW92ZSA9IHJlcy5kYXRhXG4gICAgICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgICAgbW92ZTogcmVzLmRhdGFcbiAgICAgICAgfSlcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuIl19