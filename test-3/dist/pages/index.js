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
      // imgUrls: [
      //   'http://img1.imgtn.bdimg.com/it/u=2553322381,2925312760&fm=27&gp=0.jpg',
      //   'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2269117905,883006692&fm=27&gp=0.jpg',
      //   'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2685210028,3457372075&fm=27&gp=0.jpg',
      //   // 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1943435865,804430348&fm=27&gp=0.jpg',
      //   'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3960877383,1051484866&fm=27&gp=0.jpg',
      //   'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1453502849,2727599889&fm=27&gp=0.jpg',
      //   'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1161813563,3069512331&fm=27&gp=0.jpg',
      //   // 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2650753610,2725677441&fm=27&gp=0.jpg',
      //   'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2563212303,2386777870&fm=27&gp=0.jpg',
      //   'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=301638266,118195273&fm=27&gp=0.jpg',
      //   'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1195195877,3732307103&fm=27&gp=0.jpg',
      //   'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2977108417,4066448308&fm=27&gp=0.jpg',
      //   'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2808921144,383870039&fm=27&gp=0.jpg',
      //   'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1710119994,1785422236&fm=27&gp=0.jpg',
      //   'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1039723149,4180689354&fm=27&gp=0.jpg',
      //   'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1050848129,653593312&fm=27&gp=0.jpg',
      //   'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2792928026,4035569877&fm=27&gp=0.jpg',
      //   'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=400619145,2816616768&fm=27&gp=0.jpg',
      //   'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1887976017,3134824751&fm=27&gp=0.jpg',
      //   'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4109140288,4045698816&fm=27&gp=0.jpg',
      //   'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=691853908,3835353995&fm=27&gp=0.jpg',
      //   'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1330062990,4245696189&fm=27&gp=0.jpg'
      // ],
      indicatorDots: true,
      autoplay: true,
      interval: '3000',
      duration: '300',
      spic: '../images/search.png',
      homeImg: '',
      // move: '',
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJpbmRpY2F0b3JEb3RzIiwiYXV0b3BsYXkiLCJpbnRlcnZhbCIsImR1cmF0aW9uIiwic3BpYyIsImhvbWVJbWciLCJoZWlnaHQiLCJ3aWR0aCIsIm1ldGhvZHMiLCJzZWFyY2giLCJuYXZpZ2F0ZVRvIiwidXJsIiwic3R5bGUiLCJlIiwiaXRlbSIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiaW5kZXgiLCJjb25zb2xlIiwibG9nIiwic2VsZiIsImdldFN5c3RlbUluZm8iLCJzdWNjZXNzIiwicmVzIiwid2luZG93SGVpZ2h0Iiwid2luZG93V2lkdGgiLCJzaG93TG9hZGluZyIsInRpdGxlIiwiaW1hZ2UiLCJyZXF1ZXN0IiwibWV0aG9kIiwic2V0RGF0YSIsIm1vdmUiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFQTs7Ozs7Ozs7Ozs7QUFEQTs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQUMscUJBQWUsSUF6QlY7QUEwQkxDLGdCQUFVLElBMUJMO0FBMkJMQyxnQkFBVSxNQTNCTDtBQTRCTEMsZ0JBQVUsS0E1Qkw7QUE2QkxDLFlBQU0sc0JBN0JEO0FBOEJMQyxlQUFTLEVBOUJKO0FBK0JMO0FBQ0FDLGNBQVEsQ0FoQ0g7QUFpQ0xDLGFBQU87QUFqQ0YsSyxRQW1DUEMsTyxHQUFVO0FBQ1JDLFlBRFEsb0JBQ0M7QUFDUCx1QkFBS0MsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRCxPQUxPO0FBTVJDLFdBTlEsaUJBTUZDLENBTkUsRUFNQztBQUNQLFlBQUlDLE9BQU9ELEVBQUVFLGFBQUYsQ0FBZ0JDLE9BQWhCLENBQXdCQyxLQUFuQztBQUNBQyxnQkFBUUMsR0FBUixDQUFZTixDQUFaLEVBQWUsTUFBZjtBQUNBLGdCQUFRQyxJQUFSO0FBQ0UsZUFBSyxDQUFMO0FBQVMsMkJBQUtKLFVBQUwsQ0FBZ0I7QUFDdkJDLG1CQUFLO0FBRGtCLGFBQWhCLEVBRUw7QUFDSixlQUFLLENBQUw7QUFBUywyQkFBS0QsVUFBTCxDQUFnQjtBQUN2QkMsbUJBQUs7QUFEa0IsYUFBaEIsRUFFTDtBQUNKLGVBQUssQ0FBTDtBQUFTLDJCQUFLRCxVQUFMLENBQWdCO0FBQ3ZCQyxtQkFBSztBQURrQixhQUFoQixFQUVMO0FBQ0osZUFBSyxDQUFMO0FBQVMsMkJBQUtELFVBQUwsQ0FBZ0I7QUFDdkJDLG1CQUFLO0FBRGtCLGFBQWhCLEVBRUw7QUFaTjtBQWNEO0FBdkJPLEs7Ozs7OzZCQXlCRDtBQUNQLFVBQUlTLE9BQU8sSUFBWDtBQUNBO0FBQ0EscUJBQUtDLGFBQUwsQ0FBbUI7QUFDakJDLGVBRGlCLG1CQUNUQyxHQURTLEVBQ0o7QUFDWEgsZUFBS2QsTUFBTCxHQUFjaUIsSUFBSUMsWUFBbEI7QUFDQUosZUFBS2IsS0FBTCxHQUFhZ0IsSUFBSUUsV0FBakI7QUFDRDtBQUpnQixPQUFuQjtBQU1BUCxjQUFRQyxHQUFSLENBQVlDLEtBQUtiLEtBQWpCLEVBQXdCLE9BQXhCO0FBQ0FXLGNBQVFDLEdBQVIsQ0FBWUMsS0FBS2QsTUFBakIsRUFBeUIsUUFBekI7QUFDQTtBQUNBLHFCQUFLb0IsV0FBTCxDQUFpQjtBQUNmQyxlQUFPLEtBRFE7QUFFZnhCLGtCQUFVLElBRks7QUFHZnlCLGVBQU87QUFIUSxPQUFqQjs7QUFNQTtBQUNBLHFCQUFLQyxPQUFMLENBQWE7QUFDWGxCLGFBQUssNEJBRE07QUFFWG1CLGdCQUFRLEtBRkc7QUFHWFIsaUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQkgsZUFBS2YsT0FBTCxHQUFla0IsSUFBSXhCLElBQW5CO0FBQ0FxQixlQUFLVyxPQUFMLENBQWE7QUFDWDFCLHFCQUFTa0IsSUFBSXhCO0FBREYsV0FBYjtBQUdBbUIsa0JBQVFDLEdBQVIsQ0FBWSxLQUFaLEVBQW1CQyxLQUFLZixPQUF4QjtBQUNBYSxrQkFBUUMsR0FBUixDQUFZLEtBQVosRUFBbUJJLElBQUl4QixJQUF2QjtBQUNEO0FBVlUsT0FBYjs7QUFhQSxxQkFBSzhCLE9BQUwsQ0FBYTtBQUNYbEIsYUFBSyw0QkFETTtBQUVYbUIsZ0JBQVEsS0FGRztBQUdYUixpQkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCSCxlQUFLWSxJQUFMLEdBQVlULElBQUl4QixJQUFoQjtBQUNBcUIsZUFBS1csT0FBTCxDQUFhO0FBQ1hDLGtCQUFNVCxJQUFJeEI7QUFEQyxXQUFiO0FBR0FtQixrQkFBUUMsR0FBUixDQUFZSSxJQUFJeEIsSUFBaEI7QUFDRDtBQVRVLE9BQWI7QUFXRDs7OztFQTNHZ0MsZUFBS2tDLEk7O2tCQUFuQnJDLEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIGltcG9ydCBob21lIGZyb20gJy4uL2RhdGEvaG9tZS5qcydcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAnTUlMQU4g55WF5Lqr5bm456aPJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgLy8gaW1nVXJsczogW1xuICAgIC8vICAgJ2h0dHA6Ly9pbWcxLmltZ3RuLmJkaW1nLmNvbS9pdC91PTI1NTMzMjIzODEsMjkyNTMxMjc2MCZmbT0yNyZncD0wLmpwZycsXG4gICAgLy8gICAnaHR0cHM6Ly9zczMuYmRzdGF0aWMuY29tLzcwY0Z2OFNoX1ExWW54R2twb1dLMUhGNmhoeS9pdC91PTIyNjkxMTc5MDUsODgzMDA2NjkyJmZtPTI3JmdwPTAuanBnJyxcbiAgICAvLyAgICdodHRwczovL3NzMS5iZHN0YXRpYy5jb20vNzBjRnZYU2hfUTFZbnhHa3BvV0sxSEY2aGh5L2l0L3U9MjY4NTIxMDAyOCwzNDU3MzcyMDc1JmZtPTI3JmdwPTAuanBnJyxcbiAgICAvLyAgIC8vICdodHRwczovL3NzMS5iZHN0YXRpYy5jb20vNzBjRnZYU2hfUTFZbnhHa3BvV0sxSEY2aGh5L2l0L3U9MTk0MzQzNTg2NSw4MDQ0MzAzNDgmZm09MjcmZ3A9MC5qcGcnLFxuICAgIC8vICAgJ2h0dHBzOi8vc3MzLmJkc3RhdGljLmNvbS83MGNGdjhTaF9RMVlueEdrcG9XSzFIRjZoaHkvaXQvdT0zOTYwODc3MzgzLDEwNTE0ODQ4NjYmZm09MjcmZ3A9MC5qcGcnLFxuICAgIC8vICAgJ2h0dHBzOi8vc3MyLmJkc3RhdGljLmNvbS83MGNGdm5TaF9RMVlueEdrcG9XSzFIRjZoaHkvaXQvdT0xNDUzNTAyODQ5LDI3Mjc1OTk4ODkmZm09MjcmZ3A9MC5qcGcnLFxuICAgIC8vICAgJ2h0dHBzOi8vc3MyLmJkc3RhdGljLmNvbS83MGNGdm5TaF9RMVlueEdrcG9XSzFIRjZoaHkvaXQvdT0xMTYxODEzNTYzLDMwNjk1MTIzMzEmZm09MjcmZ3A9MC5qcGcnLFxuICAgIC8vICAgLy8gJ2h0dHBzOi8vc3MxLmJkc3RhdGljLmNvbS83MGNGdlhTaF9RMVlueEdrcG9XSzFIRjZoaHkvaXQvdT0yNjUwNzUzNjEwLDI3MjU2Nzc0NDEmZm09MjcmZ3A9MC5qcGcnLFxuICAgIC8vICAgJ2h0dHBzOi8vc3MzLmJkc3RhdGljLmNvbS83MGNGdjhTaF9RMVlueEdrcG9XSzFIRjZoaHkvaXQvdT0yNTYzMjEyMzAzLDIzODY3Nzc4NzAmZm09MjcmZ3A9MC5qcGcnLFxuICAgIC8vICAgJ2h0dHBzOi8vc3MzLmJkc3RhdGljLmNvbS83MGNGdjhTaF9RMVlueEdrcG9XSzFIRjZoaHkvaXQvdT0zMDE2MzgyNjYsMTE4MTk1MjczJmZtPTI3JmdwPTAuanBnJyxcbiAgICAvLyAgICdodHRwczovL3NzMC5iZHN0YXRpYy5jb20vNzBjRnZIU2hfUTFZbnhHa3BvV0sxSEY2aGh5L2l0L3U9MTE5NTE5NTg3NywzNzMyMzA3MTAzJmZtPTI3JmdwPTAuanBnJyxcbiAgICAvLyAgICdodHRwczovL3NzMS5iZHN0YXRpYy5jb20vNzBjRnZYU2hfUTFZbnhHa3BvV0sxSEY2aGh5L2l0L3U9Mjk3NzEwODQxNyw0MDY2NDQ4MzA4JmZtPTI3JmdwPTAuanBnJyxcbiAgICAvLyAgICdodHRwczovL3NzMS5iZHN0YXRpYy5jb20vNzBjRnVYU2hfUTFZbnhHa3BvV0sxSEY2aGh5L2l0L3U9MjgwODkyMTE0NCwzODM4NzAwMzkmZm09MjcmZ3A9MC5qcGcnLFxuICAgIC8vICAgJ2h0dHBzOi8vc3MwLmJkc3RhdGljLmNvbS83MGNGdUhTaF9RMVlueEdrcG9XSzFIRjZoaHkvaXQvdT0xNzEwMTE5OTk0LDE3ODU0MjIyMzYmZm09MjcmZ3A9MC5qcGcnLFxuICAgIC8vICAgJ2h0dHBzOi8vc3MxLmJkc3RhdGljLmNvbS83MGNGdVhTaF9RMVlueEdrcG9XSzFIRjZoaHkvaXQvdT0xMDM5NzIzMTQ5LDQxODA2ODkzNTQmZm09MjcmZ3A9MC5qcGcnLFxuICAgIC8vICAgJ2h0dHBzOi8vc3MzLmJkc3RhdGljLmNvbS83MGNGdjhTaF9RMVlueEdrcG9XSzFIRjZoaHkvaXQvdT0xMDUwODQ4MTI5LDY1MzU5MzMxMiZmbT0yNyZncD0wLmpwZycsXG4gICAgLy8gICAnaHR0cHM6Ly9zczEuYmRzdGF0aWMuY29tLzcwY0Z2WFNoX1ExWW54R2twb1dLMUhGNmhoeS9pdC91PTI3OTI5MjgwMjYsNDAzNTU2OTg3NyZmbT0yNyZncD0wLmpwZycsXG4gICAgLy8gICAnaHR0cHM6Ly9zczMuYmRzdGF0aWMuY29tLzcwY0Z2OFNoX1ExWW54R2twb1dLMUhGNmhoeS9pdC91PTQwMDYxOTE0NSwyODE2NjE2NzY4JmZtPTI3JmdwPTAuanBnJyxcbiAgICAvLyAgICdodHRwczovL3NzMC5iZHN0YXRpYy5jb20vNzBjRnVIU2hfUTFZbnhHa3BvV0sxSEY2aGh5L2l0L3U9MTg4Nzk3NjAxNywzMTM0ODI0NzUxJmZtPTI3JmdwPTAuanBnJyxcbiAgICAvLyAgICdodHRwczovL3NzMC5iZHN0YXRpYy5jb20vNzBjRnZIU2hfUTFZbnhHa3BvV0sxSEY2aGh5L2l0L3U9NDEwOTE0MDI4OCw0MDQ1Njk4ODE2JmZtPTI3JmdwPTAuanBnJyxcbiAgICAvLyAgICdodHRwczovL3NzMS5iZHN0YXRpYy5jb20vNzBjRnVYU2hfUTFZbnhHa3BvV0sxSEY2aGh5L2l0L3U9NjkxODUzOTA4LDM4MzUzNTM5OTUmZm09MjcmZ3A9MC5qcGcnLFxuICAgIC8vICAgJ2h0dHBzOi8vc3MxLmJkc3RhdGljLmNvbS83MGNGdVhTaF9RMVlueEdrcG9XSzFIRjZoaHkvaXQvdT0xMzMwMDYyOTkwLDQyNDU2OTYxODkmZm09MjcmZ3A9MC5qcGcnXG4gICAgLy8gXSxcbiAgICBpbmRpY2F0b3JEb3RzOiB0cnVlLFxuICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgIGludGVydmFsOiAnMzAwMCcsXG4gICAgZHVyYXRpb246ICczMDAnLFxuICAgIHNwaWM6ICcuLi9pbWFnZXMvc2VhcmNoLnBuZycsXG4gICAgaG9tZUltZzogJycsXG4gICAgLy8gbW92ZTogJycsXG4gICAgaGVpZ2h0OiAwLFxuICAgIHdpZHRoOiAwXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBzZWFyY2goKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuLi9wYWdlcy9zZWFyY2gnXG4gICAgICB9KVxuICAgIH0sXG4gICAgc3R5bGUoZSkge1xuICAgICAgdmFyIGl0ZW0gPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleFxuICAgICAgY29uc29sZS5sb2coZSwgJ2l0ZW0nKVxuICAgICAgc3dpdGNoIChpdGVtKSB7XG4gICAgICAgIGNhc2UgMCA6IHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiAnLi4vcGFnZXMvS29yZWFuJ1xuICAgICAgICB9KTsgYnJlYWtcbiAgICAgICAgY2FzZSAxIDogd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6ICcuLi9wYWdlcy9ldXJhbWVyaWNhbidcbiAgICAgICAgfSk7IGJyZWFrXG4gICAgICAgIGNhc2UgMiA6IHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiAnLi4vcGFnZXMvQ2hpbmEnXG4gICAgICAgIH0pOyBicmVha1xuICAgICAgICBjYXNlIDMgOiB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogJy4uL3BhZ2VzL2ZyZXNoJ1xuICAgICAgICB9KTsgYnJlYWtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIC8vIOiOt+WPluezu+e7n+S/oeaBryjpq5jluqbvvIzlrr3luqYpXG4gICAgd2VweS5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIHNlbGYuaGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodFxuICAgICAgICBzZWxmLndpZHRoID0gcmVzLndpbmRvd1dpZHRoXG4gICAgICB9XG4gICAgfSlcbiAgICBjb25zb2xlLmxvZyhzZWxmLndpZHRoLCAnd2lkdGgnKVxuICAgIGNvbnNvbGUubG9nKHNlbGYuaGVpZ2h0LCAnaGVpZ2h0JylcbiAgICAvLyDliqDovb1cbiAgICB3ZXB5LnNob3dMb2FkaW5nKHtcbiAgICAgIHRpdGxlOiAn5Yqg6L295LitJyxcbiAgICAgIGR1cmF0aW9uOiAyMDAwLFxuICAgICAgaW1hZ2U6ICcuLi9pbWFnZXMvYWhvbWUucG5nJ1xuICAgIH0pXG5cbiAgICAvLyDov57mjqXlkI7lj7BcbiAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTo3MDAxL2hpbWcnLFxuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICBzZWxmLmhvbWVJbWcgPSByZXMuZGF0YVxuICAgICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICAgIGhvbWVJbWc6IHJlcy5kYXRhXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnNvbGUubG9nKCcxMTEnLCBzZWxmLmhvbWVJbWcpXG4gICAgICAgIGNvbnNvbGUubG9nKCcyMjInLCByZXMuZGF0YSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6NzAwMS9taW1nJyxcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgc2VsZi5tb3ZlID0gcmVzLmRhdGFcbiAgICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgICBtb3ZlOiByZXMuZGF0YVxuICAgICAgICB9KVxuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iXX0=