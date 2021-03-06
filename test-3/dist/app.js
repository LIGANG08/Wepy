'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.config = {
      pages: ['pages/index', 'pages/search', 'pages/mine', 'pages/myadderss', 'pages/addmyaddress', 'pages/mycorder', 'pages/mycart', 'pages/mycollect', 'pages/Korean', 'pages/China', 'pages/euramerican', 'pages/fresh', 'pages/mynickname', 'pages/mycode', 'pages/kla', 'pages/confirm', 'pages/mypay', 'pages/mygoods', 'pages/myappraise', 'pages/mynews', 'pages/myfeedback'],
      tabBar: {
        color: 'black',
        selectedColor: '#1296db',
        backgroundColor: 'silver',
        list: [{
          pagePath: 'pages/index',
          text: '首页',
          iconPath: './images/ahome.png',
          selectedIconPath: './images/bhome.png'
        }, {
          pagePath: 'pages/mine',
          text: '个人',
          iconPath: './images/aexpression.png',
          selectedIconPath: './images/bexpression.png'
        }]
      },
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: 'silver',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'black',
        enablePullDownRefresh: true // 默认刷新
      }
    };
    _this.globalData = {
      userInfo: null,
      nickName: 'Beautiful'
    };

    _this.use('requestfix');
    return _this;
  }

  _createClass(_default, [{
    key: 'onLaunch',
    value: function onLaunch() {
      this.testAsync();
    }
  }, {
    key: 'sleep',
    value: function sleep(s) {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve('promise resolved');
        }, s * 1000);
      });
    }
  }, {
    key: 'testAsync',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.sleep(3);

              case 2:
                data = _context.sent;

                console.log(data);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function testAsync() {
        return _ref.apply(this, arguments);
      }

      return testAsync;
    }()
  }, {
    key: 'getUserInfo',
    value: function getUserInfo(cb) {
      var that = this;
      if (this.globalData.userInfo) {
        return this.globalData.userInfo;
      }
      _wepy2.default.getUserInfo({
        success: function success(res) {
          that.globalData.userInfo = res.userInfo;
          cb && cb(res.userInfo);
        }
      });
    }
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, undefined));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsInRhYkJhciIsImNvbG9yIiwic2VsZWN0ZWRDb2xvciIsImJhY2tncm91bmRDb2xvciIsImxpc3QiLCJwYWdlUGF0aCIsInRleHQiLCJpY29uUGF0aCIsInNlbGVjdGVkSWNvblBhdGgiLCJ3aW5kb3ciLCJiYWNrZ3JvdW5kVGV4dFN0eWxlIiwibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvciIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlIiwiZW5hYmxlUHVsbERvd25SZWZyZXNoIiwiZ2xvYmFsRGF0YSIsInVzZXJJbmZvIiwibmlja05hbWUiLCJ1c2UiLCJ0ZXN0QXN5bmMiLCJzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzZXRUaW1lb3V0Iiwic2xlZXAiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImNiIiwidGhhdCIsImdldFVzZXJJbmZvIiwic3VjY2VzcyIsInJlcyIsImFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FBMERFLHNCQUFjO0FBQUE7O0FBQUE7O0FBQUEsVUF2RGRBLE1BdURjLEdBdkRMO0FBQ1BDLGFBQU8sQ0FDTCxhQURLLEVBRUwsY0FGSyxFQUdMLFlBSEssRUFJTCxpQkFKSyxFQUtMLG9CQUxLLEVBTUwsZ0JBTkssRUFPTCxjQVBLLEVBUUwsaUJBUkssRUFTTCxjQVRLLEVBVUwsYUFWSyxFQVdMLG1CQVhLLEVBWUwsYUFaSyxFQWFMLGtCQWJLLEVBY0wsY0FkSyxFQWVMLFdBZkssRUFnQkwsZUFoQkssRUFpQkwsYUFqQkssRUFrQkwsZUFsQkssRUFtQkwsa0JBbkJLLEVBb0JMLGNBcEJLLEVBcUJMLGtCQXJCSyxDQURBO0FBd0JQQyxjQUFRO0FBQ05DLGVBQU8sT0FERDtBQUVOQyx1QkFBZSxTQUZUO0FBR05DLHlCQUFpQixRQUhYO0FBSU5DLGNBQU0sQ0FBQztBQUNMQyxvQkFBVSxhQURMO0FBRUxDLGdCQUFNLElBRkQ7QUFHTEMsb0JBQVUsb0JBSEw7QUFJTEMsNEJBQWtCO0FBSmIsU0FBRCxFQU1OO0FBQ0VILG9CQUFVLFlBRFo7QUFFRUMsZ0JBQU0sSUFGUjtBQUdFQyxvQkFBVSwwQkFIWjtBQUlFQyw0QkFBa0I7QUFKcEIsU0FOTTtBQUpBLE9BeEJEO0FBeUNQQyxjQUFRO0FBQ05DLDZCQUFxQixPQURmO0FBRU5DLHNDQUE4QixRQUZ4QjtBQUdOQyxnQ0FBd0IsUUFIbEI7QUFJTkMsZ0NBQXdCLE9BSmxCO0FBS05DLCtCQUF1QixJQUxqQixDQUtzQjtBQUx0QjtBQXpDRCxLQXVESztBQUFBLFVBTGRDLFVBS2MsR0FMRDtBQUNYQyxnQkFBVSxJQURDO0FBRVhDLGdCQUFVO0FBRkMsS0FLQzs7QUFFWixVQUFLQyxHQUFMLENBQVMsWUFBVDtBQUZZO0FBR2I7Ozs7K0JBRVU7QUFDVCxXQUFLQyxTQUFMO0FBQ0Q7OzswQkFFS0MsQyxFQUFHO0FBQ1AsYUFBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDQyxtQkFBVyxZQUFNO0FBQ2ZGLGtCQUFRLGtCQUFSO0FBQ0QsU0FGRCxFQUVHRixJQUFJLElBRlA7QUFHRCxPQUpNLENBQVA7QUFLRDs7Ozs7Ozs7Ozs7dUJBR29CLEtBQUtLLEtBQUwsQ0FBVyxDQUFYLEM7OztBQUFiQyxvQjs7QUFDTkMsd0JBQVFDLEdBQVIsQ0FBWUYsSUFBWjs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dDQUdVRyxFLEVBQUk7QUFDZCxVQUFNQyxPQUFPLElBQWI7QUFDQSxVQUFJLEtBQUtmLFVBQUwsQ0FBZ0JDLFFBQXBCLEVBQThCO0FBQzVCLGVBQU8sS0FBS0QsVUFBTCxDQUFnQkMsUUFBdkI7QUFDRDtBQUNELHFCQUFLZSxXQUFMLENBQWlCO0FBQ2ZDLGVBRGUsbUJBQ1BDLEdBRE8sRUFDRjtBQUNYSCxlQUFLZixVQUFMLENBQWdCQyxRQUFoQixHQUEyQmlCLElBQUlqQixRQUEvQjtBQUNBYSxnQkFBTUEsR0FBR0ksSUFBSWpCLFFBQVAsQ0FBTjtBQUNEO0FBSmMsT0FBakI7QUFNRDs7OztFQXpGMEIsZUFBS2tCLEciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCAnd2VweS1hc3luYy1mdW5jdGlvbidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgd2VweS5hcHAge1xyXG4gIGNvbmZpZyA9IHtcclxuICAgIHBhZ2VzOiBbXHJcbiAgICAgICdwYWdlcy9pbmRleCcsXHJcbiAgICAgICdwYWdlcy9zZWFyY2gnLFxyXG4gICAgICAncGFnZXMvbWluZScsXHJcbiAgICAgICdwYWdlcy9teWFkZGVyc3MnLFxyXG4gICAgICAncGFnZXMvYWRkbXlhZGRyZXNzJyxcclxuICAgICAgJ3BhZ2VzL215Y29yZGVyJyxcclxuICAgICAgJ3BhZ2VzL215Y2FydCcsXHJcbiAgICAgICdwYWdlcy9teWNvbGxlY3QnLFxyXG4gICAgICAncGFnZXMvS29yZWFuJyxcclxuICAgICAgJ3BhZ2VzL0NoaW5hJyxcclxuICAgICAgJ3BhZ2VzL2V1cmFtZXJpY2FuJyxcclxuICAgICAgJ3BhZ2VzL2ZyZXNoJyxcclxuICAgICAgJ3BhZ2VzL215bmlja25hbWUnLFxyXG4gICAgICAncGFnZXMvbXljb2RlJyxcclxuICAgICAgJ3BhZ2VzL2tsYScsXHJcbiAgICAgICdwYWdlcy9jb25maXJtJyxcclxuICAgICAgJ3BhZ2VzL215cGF5JyxcclxuICAgICAgJ3BhZ2VzL215Z29vZHMnLFxyXG4gICAgICAncGFnZXMvbXlhcHByYWlzZScsXHJcbiAgICAgICdwYWdlcy9teW5ld3MnLFxyXG4gICAgICAncGFnZXMvbXlmZWVkYmFjaydcclxuICAgIF0sXHJcbiAgICB0YWJCYXI6IHtcclxuICAgICAgY29sb3I6ICdibGFjaycsXHJcbiAgICAgIHNlbGVjdGVkQ29sb3I6ICcjMTI5NmRiJyxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnc2lsdmVyJyxcclxuICAgICAgbGlzdDogW3tcclxuICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL2luZGV4JyxcclxuICAgICAgICB0ZXh0OiAn6aaW6aG1JyxcclxuICAgICAgICBpY29uUGF0aDogJy4vaW1hZ2VzL2Fob21lLnBuZycsXHJcbiAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJy4vaW1hZ2VzL2Job21lLnBuZydcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvbWluZScsXHJcbiAgICAgICAgdGV4dDogJ+S4quS6uicsXHJcbiAgICAgICAgaWNvblBhdGg6ICcuL2ltYWdlcy9hZXhwcmVzc2lvbi5wbmcnLFxyXG4gICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICcuL2ltYWdlcy9iZXhwcmVzc2lvbi5wbmcnXHJcbiAgICAgIH1dXHJcbiAgICB9LFxyXG4gICAgd2luZG93OiB7XHJcbiAgICAgIGJhY2tncm91bmRUZXh0U3R5bGU6ICdsaWdodCcsXHJcbiAgICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICdzaWx2ZXInLFxyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAnV2VDaGF0JyxcclxuICAgICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJ2JsYWNrJyxcclxuICAgICAgZW5hYmxlUHVsbERvd25SZWZyZXNoOiB0cnVlIC8vIOm7mOiupOWIt+aWsFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2xvYmFsRGF0YSA9IHtcclxuICAgIHVzZXJJbmZvOiBudWxsLFxyXG4gICAgbmlja05hbWU6ICdCZWF1dGlmdWwnXHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKClcclxuICAgIHRoaXMudXNlKCdyZXF1ZXN0Zml4JylcclxuICB9XHJcblxyXG4gIG9uTGF1bmNoKCkge1xyXG4gICAgdGhpcy50ZXN0QXN5bmMoKVxyXG4gIH1cclxuXHJcbiAgc2xlZXAocykge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgcmVzb2x2ZSgncHJvbWlzZSByZXNvbHZlZCcpXHJcbiAgICAgIH0sIHMgKiAxMDAwKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGFzeW5jIHRlc3RBc3luYygpIHtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLnNsZWVwKDMpXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gIH1cclxuXHJcbiAgZ2V0VXNlckluZm8oY2IpIHtcclxuICAgIGNvbnN0IHRoYXQgPSB0aGlzXHJcbiAgICBpZiAodGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmdsb2JhbERhdGEudXNlckluZm9cclxuICAgIH1cclxuICAgIHdlcHkuZ2V0VXNlckluZm8oe1xyXG4gICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgIHRoYXQuZ2xvYmFsRGF0YS51c2VySW5mbyA9IHJlcy51c2VySW5mb1xyXG4gICAgICAgIGNiICYmIGNiKHJlcy51c2VySW5mbylcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuIl19