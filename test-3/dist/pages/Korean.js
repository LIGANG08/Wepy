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
        var self = this;
        // var res
        var index = e.currentTarget.id;
        _wepy2.default.navigateTo({
          // url: `./kla?pic=${korean[index].Imgurl}&title=${korean[index].title}&price=${korean[index].price}`
          // url: `./kla?pic=${data[index].pic}&title=${item.title}&price=${item.price}`
          // url: ''
          // url: `./kla?data=${res.data}`
        });
        console.log(self.china[index], '111111');
        console.log('pic', item.Imgurl);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Korean, [{
    key: 'onLoad',
    value: function onLoad() {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIktvcmVhbi5qcyJdLCJuYW1lcyI6WyJLb3JlYW4iLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZW5hYmxlUHVsbERvd25SZWZyZXNoIiwiZGF0YSIsIm5vdGNvbGxlY3QiLCJsYWNvbGxlY3QiLCJhY29sbGVjdCIsImtvcmVhbiIsIm1ldGhvZHMiLCJjb2xsZWN0IiwiZSIsInNlbGYiLCJpbmRleCIsImN1cnJlbnRUYXJnZXQiLCJpZCIsImtfbnVtYmVyIiwibGFnb29kcyIsIml0ZW0iLCJkYXRhc2V0IiwiY29uc29sZSIsImxvZyIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJjaGluYSIsIkltZ3VybCIsInNob3dUb2FzdCIsInRpdGxlIiwiaWNvbiIsImR1cmF0aW9uIiwicmVxdWVzdCIsIm1ldGhvZCIsInN1Y2Nlc3MiLCJyZXMiLCJzZXREYXRhIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBR0E7Ozs7Ozs7Ozs7O0FBRkE7QUFDQTs7O0lBRXFCQSxNOzs7Ozs7Ozs7Ozs7OztzTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0IsY0FEakI7QUFFUEMsNkJBQXVCO0FBRmhCLEssUUFJVEMsSSxHQUFPO0FBQ0xDLGtCQUFZLHdCQURQO0FBRUxDLGlCQUFXLEtBRk47QUFHTEMsZ0JBQVUsS0FITDtBQUlMQyxjQUFRO0FBSkgsSyxRQU1QQyxPLEdBQVU7QUFDUkMsYUFEUSxtQkFDQUMsQ0FEQSxFQUNHO0FBQ1QsWUFBSUMsT0FBTyxJQUFYO0FBQ0EsWUFBSUMsUUFBUUYsRUFBRUcsYUFBRixDQUFnQkMsRUFBNUI7QUFDQUgsYUFBS0osTUFBTCxDQUFZSyxLQUFaLEVBQW1CTixRQUFuQixHQUE4QixDQUFDSyxLQUFLSixNQUFMLENBQVlLLEtBQVosRUFBbUJOLFFBQWxEO0FBQ0EsWUFBSUssS0FBS0osTUFBTCxDQUFZSyxLQUFaLEVBQW1CTixRQUF2QixFQUFpQztBQUMvQkssZUFBS0osTUFBTCxDQUFZSyxLQUFaLEVBQW1CRyxRQUFuQjtBQUNELFNBRkQsTUFFTztBQUNMSixlQUFLSixNQUFMLENBQVlLLEtBQVosRUFBbUJHLFFBQW5CO0FBQ0Q7QUFDRixPQVZPO0FBV1JDLGFBWFEsbUJBV0FOLENBWEEsRUFXRztBQUNULFlBQUlPLE9BQU9QLEVBQUVHLGFBQUYsQ0FBZ0JLLE9BQWhCLENBQXdCTixLQUFuQztBQUNBTyxnQkFBUUMsR0FBUixDQUFZVixDQUFaLEVBQWUsTUFBZjtBQUNBLGdCQUFRTyxJQUFSO0FBQ0UsZUFBSyxDQUFMO0FBQVMsMkJBQUtJLFVBQUwsQ0FBZ0I7QUFDdkJDLG1CQUFLO0FBRGtCLGFBQWhCLEVBRUw7QUFDSixlQUFLLENBQUw7QUFBUywyQkFBS0QsVUFBTCxDQUFnQjtBQUN2QkMsbUJBQUs7QUFEa0IsYUFBaEIsRUFFTDtBQU5OO0FBUUEsdUJBQUtELFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0EsWUFBSVgsT0FBTyxJQUFYO0FBQ0E7QUFDQSxZQUFNQyxRQUFRRixFQUFFRyxhQUFGLENBQWdCQyxFQUE5QjtBQUNBLHVCQUFLTyxVQUFMLENBQWdCO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFKYyxTQUFoQjtBQU1BRixnQkFBUUMsR0FBUixDQUFZVCxLQUFLWSxLQUFMLENBQVdYLEtBQVgsQ0FBWixFQUErQixRQUEvQjtBQUNBTyxnQkFBUUMsR0FBUixDQUFZLEtBQVosRUFBbUJILEtBQUtPLE1BQXhCO0FBQ0Q7QUFwQ08sSzs7Ozs7NkJBc0NEO0FBQ1AsVUFBSWIsT0FBTyxJQUFYO0FBQ0E7QUFDQSxxQkFBS2MsU0FBTCxDQUFlO0FBQ2JDLGVBQU8sS0FETTtBQUViQyxjQUFNLFNBRk87QUFHYkMsa0JBQVU7QUFIRyxPQUFmO0FBS0E7QUFDQSxxQkFBS0MsT0FBTCxDQUFhO0FBQ1hQLGFBQUsseUJBRE07QUFFWFEsZ0JBQVEsS0FGRztBQUdYQyxpQkFBUyxpQkFBVUMsR0FBVixFQUFlO0FBQ3RCckIsZUFBS0osTUFBTCxHQUFjeUIsSUFBSTdCLElBQWxCO0FBQ0FRLGVBQUtzQixPQUFMLENBQWE7QUFDWDFCLG9CQUFReUIsSUFBSTdCO0FBREQsV0FBYjtBQUdBZ0Isa0JBQVFDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCWSxJQUFJN0IsSUFBMUI7QUFDRDtBQVRVLE9BQWI7QUFXRDs7OztFQXJFaUMsZUFBSytCLEk7O2tCQUFwQm5DLE0iLCJmaWxlIjoiS29yZWFuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vLyBpbXBvcnQga29yZWFuIGZyb20gJy4uL2RhdGEva29yZWFuLmpzJ1xuLy8gaW1wb3J0IGtkYXRhIGZyb20gJy4uL215c3FsL2luZGV4J1xuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtvcmVhbiBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6Z+p5byP5ama57qxL3dlZGRpbmcnLFxuICAgIGVuYWJsZVB1bGxEb3duUmVmcmVzaDogdHJ1ZVxuICB9XG4gIGRhdGEgPSB7XG4gICAgbm90Y29sbGVjdDogJy4uL2ltYWdlcy9hY29sbGVjdC5wbmcnLFxuICAgIGxhY29sbGVjdDogZmFsc2UsXG4gICAgYWNvbGxlY3Q6IGZhbHNlLFxuICAgIGtvcmVhbjogJydcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIGNvbGxlY3QoZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBsZXQgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuaWRcbiAgICAgIHNlbGYua29yZWFuW2luZGV4XS5hY29sbGVjdCA9ICFzZWxmLmtvcmVhbltpbmRleF0uYWNvbGxlY3RcbiAgICAgIGlmIChzZWxmLmtvcmVhbltpbmRleF0uYWNvbGxlY3QpIHtcbiAgICAgICAgc2VsZi5rb3JlYW5baW5kZXhdLmtfbnVtYmVyKytcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlbGYua29yZWFuW2luZGV4XS5rX251bWJlci0tXG4gICAgICB9XG4gICAgfSxcbiAgICBsYWdvb2RzKGUpIHtcbiAgICAgIHZhciBpdGVtID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXhcbiAgICAgIGNvbnNvbGUubG9nKGUsICdpdGVtJylcbiAgICAgIHN3aXRjaCAoaXRlbSkge1xuICAgICAgICBjYXNlIDAgOiB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogJy4uL3BhZ2VzL2tsYSdcbiAgICAgICAgfSk7IGJyZWFrXG4gICAgICAgIGNhc2UgMSA6IHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiAnLi4vcGFnZXMva2xiJ1xuICAgICAgICB9KTsgYnJlYWtcbiAgICAgIH1cbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4uL3BhZ2VzL2tsYSdcbiAgICAgIH0pXG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIC8vIHZhciByZXNcbiAgICAgIGNvbnN0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmlkXG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAvLyB1cmw6IGAuL2tsYT9waWM9JHtrb3JlYW5baW5kZXhdLkltZ3VybH0mdGl0bGU9JHtrb3JlYW5baW5kZXhdLnRpdGxlfSZwcmljZT0ke2tvcmVhbltpbmRleF0ucHJpY2V9YFxuICAgICAgICAvLyB1cmw6IGAuL2tsYT9waWM9JHtkYXRhW2luZGV4XS5waWN9JnRpdGxlPSR7aXRlbS50aXRsZX0mcHJpY2U9JHtpdGVtLnByaWNlfWBcbiAgICAgICAgLy8gdXJsOiAnJ1xuICAgICAgICAvLyB1cmw6IGAuL2tsYT9kYXRhPSR7cmVzLmRhdGF9YFxuICAgICAgfSlcbiAgICAgIGNvbnNvbGUubG9nKHNlbGYuY2hpbmFbaW5kZXhdLCAnMTExMTExJylcbiAgICAgIGNvbnNvbGUubG9nKCdwaWMnLCBpdGVtLkltZ3VybClcbiAgICB9XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIC8vIOWKoOi9vVxuICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgIHRpdGxlOiAn5Yqg6L295LitJyxcbiAgICAgIGljb246ICdsb2FkaW5nJyxcbiAgICAgIGR1cmF0aW9uOiAxMDAwXG4gICAgfSlcbiAgICAvLyDov57mjqXlkI7lj7BcbiAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTo3MDAxL2snLFxuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgc2VsZi5rb3JlYW4gPSByZXMuZGF0YVxuICAgICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICAgIGtvcmVhbjogcmVzLmRhdGFcbiAgICAgICAgfSlcbiAgICAgICAgY29uc29sZS5sb2coJ2tvcmVhbicsIHJlcy5kYXRhKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==