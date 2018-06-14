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
        var self = this;
        // var item = e.currentTarget.index
        // console.log(e, item,'item')
        // switch (item) {
        //   case 0 : wepy.navigateTo({
        //     url: '../pages/kla'
        //   }); break
        //   case 1 : wepy.navigateTo({
        //     url: '../pages/klb'
        //   }); break
        // }
        // wepy.navigateTo({
        //   url: '../pages/kla'
        // })
        // let self = this
        // koreanImg = res.data
        var index = e.currentTarget.id;
        console.log(self.koreanImg[index], 'item');
        _wepy2.default.navigateTo({
          url: '../pages/kla?pic=' + self.koreanImg[index].Imgurl + '&title=' + self.koreanImg[index].title + '&price=' + self.koreanImg[index].price
          // url: `./kla?pic = $ {this.koreanImg[index].Imgurl}＆title = $ {this.koreanImg[index].title}＆price = $ {this.koreanImg[index].price}`
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIktvcmVhbi5qcyJdLCJuYW1lcyI6WyJLb3JlYW4iLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZW5hYmxlUHVsbERvd25SZWZyZXNoIiwiZGF0YSIsIm5vdGNvbGxlY3QiLCJsYWNvbGxlY3QiLCJhY29sbGVjdCIsImtvcmVhbkltZyIsIm1ldGhvZHMiLCJjb2xsZWN0IiwiZSIsInNlbGYiLCJpbmRleCIsImN1cnJlbnRUYXJnZXQiLCJpZCIsImtvcmVhbiIsImtfbnVtYmVyIiwibGFnb29kcyIsImNvbnNvbGUiLCJsb2ciLCJuYXZpZ2F0ZVRvIiwidXJsIiwiSW1ndXJsIiwidGl0bGUiLCJwcmljZSIsInJlcyIsInNob3dUb2FzdCIsImljb24iLCJkdXJhdGlvbiIsInJlcXVlc3QiLCJtZXRob2QiLCJzdWNjZXNzIiwic2V0RGF0YSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUdBOzs7Ozs7Ozs7OztBQUZBO0FBQ0E7OztJQUVxQkEsTTs7Ozs7Ozs7Ozs7Ozs7c0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCLGNBRGpCO0FBRVBDLDZCQUF1QjtBQUZoQixLLFFBSVRDLEksR0FBTztBQUNMQyxrQkFBWSx3QkFEUDtBQUVMQyxpQkFBVyxLQUZOO0FBR0xDLGdCQUFVLEtBSEw7QUFJTEMsaUJBQVc7QUFKTixLLFFBTVBDLE8sR0FBVTtBQUNSQyxhQURRLG1CQUNBQyxDQURBLEVBQ0c7QUFDVCxZQUFJQyxPQUFPLElBQVg7QUFDQSxZQUFJQyxRQUFRRixFQUFFRyxhQUFGLENBQWdCQyxFQUE1QjtBQUNBSCxhQUFLSSxNQUFMLENBQVlILEtBQVosRUFBbUJOLFFBQW5CLEdBQThCLENBQUNLLEtBQUtJLE1BQUwsQ0FBWUgsS0FBWixFQUFtQk4sUUFBbEQ7QUFDQSxZQUFJSyxLQUFLSSxNQUFMLENBQVlILEtBQVosRUFBbUJOLFFBQXZCLEVBQWlDO0FBQy9CSyxlQUFLSSxNQUFMLENBQVlILEtBQVosRUFBbUJJLFFBQW5CO0FBQ0QsU0FGRCxNQUVPO0FBQ0xMLGVBQUtJLE1BQUwsQ0FBWUgsS0FBWixFQUFtQkksUUFBbkI7QUFDRDtBQUNGLE9BVk87QUFXUkMsYUFYUSxtQkFXQVAsQ0FYQSxFQVdHO0FBQ1QsWUFBSUMsT0FBTyxJQUFYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBTUMsUUFBUUYsRUFBRUcsYUFBRixDQUFnQkMsRUFBOUI7QUFDQUksZ0JBQVFDLEdBQVIsQ0FBWVIsS0FBS0osU0FBTCxDQUFlSyxLQUFmLENBQVosRUFBa0MsTUFBbEM7QUFDQSx1QkFBS1EsVUFBTCxDQUFnQjtBQUNkQyxxQ0FBeUJWLEtBQUtKLFNBQUwsQ0FBZUssS0FBZixFQUFzQlUsTUFBL0MsZUFBK0RYLEtBQUtKLFNBQUwsQ0FBZUssS0FBZixFQUFzQlcsS0FBckYsZUFBb0daLEtBQUtKLFNBQUwsQ0FBZUssS0FBZixFQUFzQlk7QUFDMUg7QUFGYyxTQUFoQjtBQUlEO0FBbENPLEs7Ozs7OzJCQW9DSEMsRyxFQUFLO0FBQ1YsVUFBSWQsT0FBTyxJQUFYO0FBQ0E7QUFDQSxxQkFBS2UsU0FBTCxDQUFlO0FBQ2JILGVBQU8sS0FETTtBQUViSSxjQUFNLFNBRk87QUFHYkMsa0JBQVU7QUFIRyxPQUFmO0FBS0E7QUFDQSxxQkFBS0MsT0FBTCxDQUFhO0FBQ1hSLGFBQUsseUJBRE07QUFFWFMsZ0JBQVEsS0FGRztBQUdYM0IsY0FBTSxFQUhLO0FBS1g0QixpQkFBUyxpQkFBVU4sR0FBVixFQUFlO0FBQ3RCZCxlQUFLSixTQUFMLEdBQWlCa0IsSUFBSXRCLElBQXJCO0FBQ0FRLGVBQUtxQixPQUFMLENBQWE7QUFDWHpCLHVCQUFXa0IsSUFBSXRCO0FBREosV0FBYjtBQUdBZSxrQkFBUUMsR0FBUixDQUFZLFFBQVosRUFBc0JNLElBQUl0QixJQUExQjtBQUNEO0FBWFUsT0FBYjtBQWFEOzs7O0VBckVpQyxlQUFLOEIsSTs7a0JBQXBCbEMsTSIsImZpbGUiOiJLb3JlYW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIGltcG9ydCBrb3JlYW4gZnJvbSAnLi4vZGF0YS9rb3JlYW4uanMnXG4vLyBpbXBvcnQga2RhdGEgZnJvbSAnLi4vbXlzcWwvaW5kZXgnXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS29yZWFuIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfpn6nlvI/lqZrnurEvd2VkZGluZycsXG4gICAgZW5hYmxlUHVsbERvd25SZWZyZXNoOiB0cnVlXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBub3Rjb2xsZWN0OiAnLi4vaW1hZ2VzL2Fjb2xsZWN0LnBuZycsXG4gICAgbGFjb2xsZWN0OiBmYWxzZSxcbiAgICBhY29sbGVjdDogZmFsc2UsXG4gICAga29yZWFuSW1nOiAnJ1xuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgY29sbGVjdChlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGxldCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5pZFxuICAgICAgc2VsZi5rb3JlYW5baW5kZXhdLmFjb2xsZWN0ID0gIXNlbGYua29yZWFuW2luZGV4XS5hY29sbGVjdFxuICAgICAgaWYgKHNlbGYua29yZWFuW2luZGV4XS5hY29sbGVjdCkge1xuICAgICAgICBzZWxmLmtvcmVhbltpbmRleF0ua19udW1iZXIrK1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZi5rb3JlYW5baW5kZXhdLmtfbnVtYmVyLS1cbiAgICAgIH1cbiAgICB9LFxuICAgIGxhZ29vZHMoZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICAvLyB2YXIgaXRlbSA9IGUuY3VycmVudFRhcmdldC5pbmRleFxuICAgICAgLy8gY29uc29sZS5sb2coZSwgaXRlbSwnaXRlbScpXG4gICAgICAvLyBzd2l0Y2ggKGl0ZW0pIHtcbiAgICAgIC8vICAgY2FzZSAwIDogd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgIC8vICAgICB1cmw6ICcuLi9wYWdlcy9rbGEnXG4gICAgICAvLyAgIH0pOyBicmVha1xuICAgICAgLy8gICBjYXNlIDEgOiB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgLy8gICAgIHVybDogJy4uL3BhZ2VzL2tsYidcbiAgICAgIC8vICAgfSk7IGJyZWFrXG4gICAgICAvLyB9XG4gICAgICAvLyB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgLy8gICB1cmw6ICcuLi9wYWdlcy9rbGEnXG4gICAgICAvLyB9KVxuICAgICAgLy8gbGV0IHNlbGYgPSB0aGlzXG4gICAgICAvLyBrb3JlYW5JbWcgPSByZXMuZGF0YVxuICAgICAgY29uc3QgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuaWRcbiAgICAgIGNvbnNvbGUubG9nKHNlbGYua29yZWFuSW1nW2luZGV4XSwnaXRlbScpXG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6IGAuLi9wYWdlcy9rbGE/cGljPSR7c2VsZi5rb3JlYW5JbWdbaW5kZXhdLkltZ3VybH0mdGl0bGU9JHtzZWxmLmtvcmVhbkltZ1tpbmRleF0udGl0bGV9JnByaWNlPSR7c2VsZi5rb3JlYW5JbWdbaW5kZXhdLnByaWNlfWBcbiAgICAgICAgLy8gdXJsOiBgLi9rbGE/cGljID0gJCB7dGhpcy5rb3JlYW5JbWdbaW5kZXhdLkltZ3VybH3vvIZ0aXRsZSA9ICQge3RoaXMua29yZWFuSW1nW2luZGV4XS50aXRsZX3vvIZwcmljZSA9ICQge3RoaXMua29yZWFuSW1nW2luZGV4XS5wcmljZX1gXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBvbkxvYWQocmVzKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgLy8g5Yqg6L29XG4gICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgdGl0bGU6ICfliqDovb3kuK0nLFxuICAgICAgaWNvbjogJ2xvYWRpbmcnLFxuICAgICAgZHVyYXRpb246IDEwMDBcbiAgICB9KVxuICAgIC8vIOi/nuaOpeWQjuWPsFxuICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjcwMDEvaycsXG4gICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgZGF0YToge1xuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgc2VsZi5rb3JlYW5JbWcgPSByZXMuZGF0YVxuICAgICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICAgIGtvcmVhbkltZzogcmVzLmRhdGFcbiAgICAgICAgfSlcbiAgICAgICAgY29uc29sZS5sb2coJ2tvcmVhbicsIHJlcy5kYXRhKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==