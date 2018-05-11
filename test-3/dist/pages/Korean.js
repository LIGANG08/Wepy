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
          // case 1 : wepy.navigateTo({
          //   url: '../pages/klb'
          // }); break
        }
        var self = this;
        var index = e.currentTarget.id;
        _wepy2.default.navigateTo({
          // url: `./kla?pic=${korean[index].Imgurl}&title=${korean[index].title}&price=${korean[index].price}`
          // url: `{./kla?pic=${korean}}`
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

  _createClass(Korean, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      // 加载
      _wepy2.default.showToast({
        title: '加载中',
        icon: 'loading',
        duration: 1000
        // image: '../images/ahome.png'
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIktvcmVhbi5qcyJdLCJuYW1lcyI6WyJLb3JlYW4iLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZW5hYmxlUHVsbERvd25SZWZyZXNoIiwiZGF0YSIsIm5vdGNvbGxlY3QiLCJsYWNvbGxlY3QiLCJhY29sbGVjdCIsImtvcmVhbiIsIm1ldGhvZHMiLCJjb2xsZWN0IiwiZSIsInNlbGYiLCJpbmRleCIsImN1cnJlbnRUYXJnZXQiLCJpZCIsImtfbnVtYmVyIiwibGFnb29kcyIsIml0ZW0iLCJkYXRhc2V0IiwiY29uc29sZSIsImxvZyIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJjaGluYSIsInNob3dUb2FzdCIsInRpdGxlIiwiaWNvbiIsImR1cmF0aW9uIiwicmVxdWVzdCIsIm1ldGhvZCIsInN1Y2Nlc3MiLCJyZXMiLCJzZXREYXRhIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7O0FBREE7OztJQUVxQkEsTTs7Ozs7Ozs7Ozs7Ozs7c0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCLGNBRGpCO0FBRVBDLDZCQUF1QjtBQUZoQixLLFFBSVRDLEksR0FBTztBQUNMQyxrQkFBWSx3QkFEUDtBQUVMQyxpQkFBVyxLQUZOO0FBR0xDLGdCQUFVLEtBSEw7QUFJTEMsY0FBUTtBQUpILEssUUFNUEMsTyxHQUFVO0FBQ1JDLGFBRFEsbUJBQ0FDLENBREEsRUFDRztBQUNULFlBQUlDLE9BQU8sSUFBWDtBQUNBLFlBQUlDLFFBQVFGLEVBQUVHLGFBQUYsQ0FBZ0JDLEVBQTVCO0FBQ0FILGFBQUtKLE1BQUwsQ0FBWUssS0FBWixFQUFtQk4sUUFBbkIsR0FBOEIsQ0FBQ0ssS0FBS0osTUFBTCxDQUFZSyxLQUFaLEVBQW1CTixRQUFsRDtBQUNBLFlBQUlLLEtBQUtKLE1BQUwsQ0FBWUssS0FBWixFQUFtQk4sUUFBdkIsRUFBaUM7QUFDL0JLLGVBQUtKLE1BQUwsQ0FBWUssS0FBWixFQUFtQkcsUUFBbkI7QUFDRCxTQUZELE1BRU87QUFDTEosZUFBS0osTUFBTCxDQUFZSyxLQUFaLEVBQW1CRyxRQUFuQjtBQUNEO0FBQ0YsT0FWTztBQVdSQyxhQVhRLG1CQVdBTixDQVhBLEVBV0c7QUFDVCxZQUFJTyxPQUFPUCxFQUFFRyxhQUFGLENBQWdCSyxPQUFoQixDQUF3Qk4sS0FBbkM7QUFDQU8sZ0JBQVFDLEdBQVIsQ0FBWVYsQ0FBWixFQUFlLE1BQWY7QUFDQSxnQkFBUU8sSUFBUjtBQUNFLGVBQUssQ0FBTDtBQUFTLDJCQUFLSSxVQUFMLENBQWdCO0FBQ3ZCQyxtQkFBSztBQURrQixhQUFoQixFQUVMO0FBQ0o7QUFDQTtBQUNBO0FBTkY7QUFRQSxZQUFJWCxPQUFPLElBQVg7QUFDQSxZQUFNQyxRQUFRRixFQUFFRyxhQUFGLENBQWdCQyxFQUE5QjtBQUNBLHVCQUFLTyxVQUFMLENBQWdCO0FBQ2Q7QUFDQTtBQUZjLFNBQWhCO0FBSUFGLGdCQUFRQyxHQUFSLENBQVlULEtBQUtZLEtBQUwsQ0FBV1gsS0FBWCxDQUFaLEVBQStCLFFBQS9CO0FBQ0Q7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQXJDUSxLOzs7Ozs2QkF1Q0Q7QUFDUCxVQUFJRCxPQUFPLElBQVg7QUFDQTtBQUNBLHFCQUFLYSxTQUFMLENBQWU7QUFDYkMsZUFBTyxLQURNO0FBRWJDLGNBQU0sU0FGTztBQUdiQyxrQkFBVTtBQUNWO0FBSmEsT0FBZjtBQU1BO0FBQ0EscUJBQUtDLE9BQUwsQ0FBYTtBQUNYTixhQUFLLHlCQURNO0FBRVhPLGdCQUFRLEtBRkc7QUFHWEMsaUJBQVMsaUJBQVVDLEdBQVYsRUFBZTtBQUN0QnBCLGVBQUtKLE1BQUwsR0FBY3dCLElBQUk1QixJQUFsQjtBQUNBUSxlQUFLcUIsT0FBTCxDQUFhO0FBQ1h6QixvQkFBUXdCLElBQUk1QjtBQURELFdBQWI7QUFHQWdCLGtCQUFRQyxHQUFSLENBQVksUUFBWixFQUFzQlcsSUFBSTVCLElBQTFCO0FBQ0Q7QUFUVSxPQUFiO0FBV0Q7Ozs7RUF2RWlDLGVBQUs4QixJOztrQkFBcEJsQyxNIiwiZmlsZSI6IktvcmVhbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLy8gaW1wb3J0IGtvcmVhbiBmcm9tICcuLi9kYXRhL2tvcmVhbi5qcydcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLb3JlYW4gZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+mfqeW8j+Wpmue6sS93ZWRkaW5nJyxcbiAgICBlbmFibGVQdWxsRG93blJlZnJlc2g6IHRydWVcbiAgfVxuICBkYXRhID0ge1xuICAgIG5vdGNvbGxlY3Q6ICcuLi9pbWFnZXMvYWNvbGxlY3QucG5nJyxcbiAgICBsYWNvbGxlY3Q6IGZhbHNlLFxuICAgIGFjb2xsZWN0OiBmYWxzZSxcbiAgICBrb3JlYW46ICcnXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBjb2xsZWN0KGUpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgbGV0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmlkXG4gICAgICBzZWxmLmtvcmVhbltpbmRleF0uYWNvbGxlY3QgPSAhc2VsZi5rb3JlYW5baW5kZXhdLmFjb2xsZWN0XG4gICAgICBpZiAoc2VsZi5rb3JlYW5baW5kZXhdLmFjb2xsZWN0KSB7XG4gICAgICAgIHNlbGYua29yZWFuW2luZGV4XS5rX251bWJlcisrXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxmLmtvcmVhbltpbmRleF0ua19udW1iZXItLVxuICAgICAgfVxuICAgIH0sXG4gICAgbGFnb29kcyhlKSB7XG4gICAgICB2YXIgaXRlbSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4XG4gICAgICBjb25zb2xlLmxvZyhlLCAnaXRlbScpXG4gICAgICBzd2l0Y2ggKGl0ZW0pIHtcbiAgICAgICAgY2FzZSAwIDogd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6ICcuLi9wYWdlcy9rbGEnXG4gICAgICAgIH0pOyBicmVha1xuICAgICAgICAvLyBjYXNlIDEgOiB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAvLyAgIHVybDogJy4uL3BhZ2VzL2tsYidcbiAgICAgICAgLy8gfSk7IGJyZWFrXG4gICAgICB9XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGNvbnN0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmlkXG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAvLyB1cmw6IGAuL2tsYT9waWM9JHtrb3JlYW5baW5kZXhdLkltZ3VybH0mdGl0bGU9JHtrb3JlYW5baW5kZXhdLnRpdGxlfSZwcmljZT0ke2tvcmVhbltpbmRleF0ucHJpY2V9YFxuICAgICAgICAvLyB1cmw6IGB7Li9rbGE/cGljPSR7a29yZWFufX1gXG4gICAgICB9KVxuICAgICAgY29uc29sZS5sb2coc2VsZi5jaGluYVtpbmRleF0sICcxMTExMTEnKVxuICAgIH1cbiAgICAvLyBsYWdvb2RzKGUpIHtcbiAgICAvLyAgIGxldCBzZWxmID0gdGhpc1xuICAgIC8vICAgY29uc3QgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuaWRcbiAgICAvLyAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgLy8gICAgIHVybDogYC4va2xhYFxuICAgIC8vICAgfSlcbiAgICAvLyAgIGNvbnNvbGUubG9nKHNlbGYua29yZWFuW2luZGV4XSwgJzExMTExMScpXG4gICAgLy8gfVxuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAvLyDliqDovb1cbiAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICB0aXRsZTogJ+WKoOi9veS4rScsXG4gICAgICBpY29uOiAnbG9hZGluZycsXG4gICAgICBkdXJhdGlvbjogMTAwMFxuICAgICAgLy8gaW1hZ2U6ICcuLi9pbWFnZXMvYWhvbWUucG5nJ1xuICAgIH0pXG4gICAgLy8g6L+e5o6l5ZCO5Y+wXG4gICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6NzAwMS9rJyxcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgIHNlbGYua29yZWFuID0gcmVzLmRhdGFcbiAgICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgICBrb3JlYW46IHJlcy5kYXRhXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnNvbGUubG9nKCdrb3JlYW4nLCByZXMuZGF0YSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iXX0=