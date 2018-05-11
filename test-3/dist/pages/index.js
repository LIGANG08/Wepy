'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _home = require('./../data/home.js');

var _home2 = _interopRequireDefault(_home);

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
      imgUrls: ['http://img1.imgtn.bdimg.com/it/u=2553322381,2925312760&fm=27&gp=0.jpg', 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2269117905,883006692&fm=27&gp=0.jpg', 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2685210028,3457372075&fm=27&gp=0.jpg',
      // 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1943435865,804430348&fm=27&gp=0.jpg',
      'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3960877383,1051484866&fm=27&gp=0.jpg', 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1453502849,2727599889&fm=27&gp=0.jpg', 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1161813563,3069512331&fm=27&gp=0.jpg',
      // 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2650753610,2725677441&fm=27&gp=0.jpg',
      'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2563212303,2386777870&fm=27&gp=0.jpg', 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=301638266,118195273&fm=27&gp=0.jpg', 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1195195877,3732307103&fm=27&gp=0.jpg', 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2977108417,4066448308&fm=27&gp=0.jpg', 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2808921144,383870039&fm=27&gp=0.jpg', 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1710119994,1785422236&fm=27&gp=0.jpg', 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1039723149,4180689354&fm=27&gp=0.jpg', 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1050848129,653593312&fm=27&gp=0.jpg', 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2792928026,4035569877&fm=27&gp=0.jpg', 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=400619145,2816616768&fm=27&gp=0.jpg', 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1887976017,3134824751&fm=27&gp=0.jpg', 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4109140288,4045698816&fm=27&gp=0.jpg', 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=691853908,3835353995&fm=27&gp=0.jpg', 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1330062990,4245696189&fm=27&gp=0.jpg'],
      indicatorDots: true,
      autoplay: true,
      interval: '3000',
      duration: '300',
      spic: '../images/search.png',
      home: '',
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
      self.home = _home2.default;
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
          self.home = res.data;
          self.setData({
            home: res.data
          });
          console.log(res.data);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJpbWdVcmxzIiwiaW5kaWNhdG9yRG90cyIsImF1dG9wbGF5IiwiaW50ZXJ2YWwiLCJkdXJhdGlvbiIsInNwaWMiLCJob21lIiwiaGVpZ2h0Iiwid2lkdGgiLCJtZXRob2RzIiwic2VhcmNoIiwibmF2aWdhdGVUbyIsInVybCIsInN0eWxlIiwiZSIsIml0ZW0iLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImluZGV4IiwiY29uc29sZSIsImxvZyIsInNlbGYiLCJnZXRTeXN0ZW1JbmZvIiwic3VjY2VzcyIsInJlcyIsIndpbmRvd0hlaWdodCIsIndpbmRvd1dpZHRoIiwic2hvd0xvYWRpbmciLCJ0aXRsZSIsImltYWdlIiwicmVxdWVzdCIsIm1ldGhvZCIsInNldERhdGEiLCJtb3ZlIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsZUFBUyxDQUNQLHVFQURPLEVBRVAsK0ZBRk8sRUFHUCxnR0FITztBQUlQO0FBQ0Esc0dBTE8sRUFNUCxnR0FOTyxFQU9QLGdHQVBPO0FBUVA7QUFDQSxzR0FUTyxFQVVQLDhGQVZPLEVBV1AsZ0dBWE8sRUFZUCxnR0FaTyxFQWFQLCtGQWJPLEVBY1AsZ0dBZE8sRUFlUCxnR0FmTyxFQWdCUCwrRkFoQk8sRUFpQlAsZ0dBakJPLEVBa0JQLCtGQWxCTyxFQW1CUCxnR0FuQk8sRUFvQlAsZ0dBcEJPLEVBcUJQLCtGQXJCTyxFQXNCUCxnR0F0Qk8sQ0FESjtBQXlCTEMscUJBQWUsSUF6QlY7QUEwQkxDLGdCQUFVLElBMUJMO0FBMkJMQyxnQkFBVSxNQTNCTDtBQTRCTEMsZ0JBQVUsS0E1Qkw7QUE2QkxDLFlBQU0sc0JBN0JEO0FBOEJMQyxZQUFNLEVBOUJEO0FBK0JMQyxjQUFRLENBL0JIO0FBZ0NMQyxhQUFPO0FBaENGLEssUUFrQ1BDLE8sR0FBVTtBQUNSQyxZQURRLG9CQUNDO0FBQ1AsdUJBQUtDLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0QsT0FMTztBQU1SQyxXQU5RLGlCQU1GQyxDQU5FLEVBTUM7QUFDUCxZQUFJQyxPQUFPRCxFQUFFRSxhQUFGLENBQWdCQyxPQUFoQixDQUF3QkMsS0FBbkM7QUFDQUMsZ0JBQVFDLEdBQVIsQ0FBWU4sQ0FBWixFQUFlLE1BQWY7QUFDQSxnQkFBUUMsSUFBUjtBQUNFLGVBQUssQ0FBTDtBQUFTLDJCQUFLSixVQUFMLENBQWdCO0FBQ3ZCQyxtQkFBSztBQURrQixhQUFoQixFQUVMO0FBQ0osZUFBSyxDQUFMO0FBQVMsMkJBQUtELFVBQUwsQ0FBZ0I7QUFDdkJDLG1CQUFLO0FBRGtCLGFBQWhCLEVBRUw7QUFDSixlQUFLLENBQUw7QUFBUywyQkFBS0QsVUFBTCxDQUFnQjtBQUN2QkMsbUJBQUs7QUFEa0IsYUFBaEIsRUFFTDtBQUNKLGVBQUssQ0FBTDtBQUFTLDJCQUFLRCxVQUFMLENBQWdCO0FBQ3ZCQyxtQkFBSztBQURrQixhQUFoQixFQUVMO0FBWk47QUFjRDtBQXZCTyxLOzs7Ozs2QkF5QkQ7QUFDUCxVQUFJUyxPQUFPLElBQVg7QUFDQUEsV0FBS2YsSUFBTDtBQUNBO0FBQ0EscUJBQUtnQixhQUFMLENBQW1CO0FBQ2pCQyxlQURpQixtQkFDVEMsR0FEUyxFQUNKO0FBQ1hILGVBQUtkLE1BQUwsR0FBY2lCLElBQUlDLFlBQWxCO0FBQ0FKLGVBQUtiLEtBQUwsR0FBYWdCLElBQUlFLFdBQWpCO0FBQ0Q7QUFKZ0IsT0FBbkI7QUFNQVAsY0FBUUMsR0FBUixDQUFZQyxLQUFLYixLQUFqQixFQUF3QixPQUF4QjtBQUNBVyxjQUFRQyxHQUFSLENBQVlDLEtBQUtkLE1BQWpCLEVBQXlCLFFBQXpCO0FBQ0E7QUFDQSxxQkFBS29CLFdBQUwsQ0FBaUI7QUFDZkMsZUFBTyxLQURRO0FBRWZ4QixrQkFBVSxJQUZLO0FBR2Z5QixlQUFPO0FBSFEsT0FBakI7O0FBTUE7QUFDQSxxQkFBS0MsT0FBTCxDQUFhO0FBQ1hsQixhQUFLLDRCQURNO0FBRVhtQixnQkFBUSxLQUZHO0FBR1hSLGlCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckJILGVBQUtmLElBQUwsR0FBWWtCLElBQUl6QixJQUFoQjtBQUNBc0IsZUFBS1csT0FBTCxDQUFhO0FBQ1gxQixrQkFBTWtCLElBQUl6QjtBQURDLFdBQWI7QUFHQW9CLGtCQUFRQyxHQUFSLENBQVlJLElBQUl6QixJQUFoQjtBQUNEO0FBVFUsT0FBYjtBQVdBLHFCQUFLK0IsT0FBTCxDQUFhO0FBQ1hsQixhQUFLLDRCQURNO0FBRVhtQixnQkFBUSxLQUZHO0FBR1hSLGlCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckJILGVBQUtZLElBQUwsR0FBWVQsSUFBSXpCLElBQWhCO0FBQ0FzQixlQUFLVyxPQUFMLENBQWE7QUFDWEMsa0JBQU1ULElBQUl6QjtBQURDLFdBQWI7QUFHQW9CLGtCQUFRQyxHQUFSLENBQVlJLElBQUl6QixJQUFoQjtBQUNEO0FBVFUsT0FBYjtBQVdEOzs7O0VBekdnQyxlQUFLbUMsSTs7a0JBQW5CdEMsSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IGhvbWUgZnJvbSAnLi4vZGF0YS9ob21lLmpzJ1xuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICdNSUxBTiDnlYXkuqvlubjnpo8nXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBpbWdVcmxzOiBbXG4gICAgICAnaHR0cDovL2ltZzEuaW1ndG4uYmRpbWcuY29tL2l0L3U9MjU1MzMyMjM4MSwyOTI1MzEyNzYwJmZtPTI3JmdwPTAuanBnJyxcbiAgICAgICdodHRwczovL3NzMy5iZHN0YXRpYy5jb20vNzBjRnY4U2hfUTFZbnhHa3BvV0sxSEY2aGh5L2l0L3U9MjI2OTExNzkwNSw4ODMwMDY2OTImZm09MjcmZ3A9MC5qcGcnLFxuICAgICAgJ2h0dHBzOi8vc3MxLmJkc3RhdGljLmNvbS83MGNGdlhTaF9RMVlueEdrcG9XSzFIRjZoaHkvaXQvdT0yNjg1MjEwMDI4LDM0NTczNzIwNzUmZm09MjcmZ3A9MC5qcGcnLFxuICAgICAgLy8gJ2h0dHBzOi8vc3MxLmJkc3RhdGljLmNvbS83MGNGdlhTaF9RMVlueEdrcG9XSzFIRjZoaHkvaXQvdT0xOTQzNDM1ODY1LDgwNDQzMDM0OCZmbT0yNyZncD0wLmpwZycsXG4gICAgICAnaHR0cHM6Ly9zczMuYmRzdGF0aWMuY29tLzcwY0Z2OFNoX1ExWW54R2twb1dLMUhGNmhoeS9pdC91PTM5NjA4NzczODMsMTA1MTQ4NDg2NiZmbT0yNyZncD0wLmpwZycsXG4gICAgICAnaHR0cHM6Ly9zczIuYmRzdGF0aWMuY29tLzcwY0Z2blNoX1ExWW54R2twb1dLMUhGNmhoeS9pdC91PTE0NTM1MDI4NDksMjcyNzU5OTg4OSZmbT0yNyZncD0wLmpwZycsXG4gICAgICAnaHR0cHM6Ly9zczIuYmRzdGF0aWMuY29tLzcwY0Z2blNoX1ExWW54R2twb1dLMUhGNmhoeS9pdC91PTExNjE4MTM1NjMsMzA2OTUxMjMzMSZmbT0yNyZncD0wLmpwZycsXG4gICAgICAvLyAnaHR0cHM6Ly9zczEuYmRzdGF0aWMuY29tLzcwY0Z2WFNoX1ExWW54R2twb1dLMUhGNmhoeS9pdC91PTI2NTA3NTM2MTAsMjcyNTY3NzQ0MSZmbT0yNyZncD0wLmpwZycsXG4gICAgICAnaHR0cHM6Ly9zczMuYmRzdGF0aWMuY29tLzcwY0Z2OFNoX1ExWW54R2twb1dLMUhGNmhoeS9pdC91PTI1NjMyMTIzMDMsMjM4Njc3Nzg3MCZmbT0yNyZncD0wLmpwZycsXG4gICAgICAnaHR0cHM6Ly9zczMuYmRzdGF0aWMuY29tLzcwY0Z2OFNoX1ExWW54R2twb1dLMUhGNmhoeS9pdC91PTMwMTYzODI2NiwxMTgxOTUyNzMmZm09MjcmZ3A9MC5qcGcnLFxuICAgICAgJ2h0dHBzOi8vc3MwLmJkc3RhdGljLmNvbS83MGNGdkhTaF9RMVlueEdrcG9XSzFIRjZoaHkvaXQvdT0xMTk1MTk1ODc3LDM3MzIzMDcxMDMmZm09MjcmZ3A9MC5qcGcnLFxuICAgICAgJ2h0dHBzOi8vc3MxLmJkc3RhdGljLmNvbS83MGNGdlhTaF9RMVlueEdrcG9XSzFIRjZoaHkvaXQvdT0yOTc3MTA4NDE3LDQwNjY0NDgzMDgmZm09MjcmZ3A9MC5qcGcnLFxuICAgICAgJ2h0dHBzOi8vc3MxLmJkc3RhdGljLmNvbS83MGNGdVhTaF9RMVlueEdrcG9XSzFIRjZoaHkvaXQvdT0yODA4OTIxMTQ0LDM4Mzg3MDAzOSZmbT0yNyZncD0wLmpwZycsXG4gICAgICAnaHR0cHM6Ly9zczAuYmRzdGF0aWMuY29tLzcwY0Z1SFNoX1ExWW54R2twb1dLMUhGNmhoeS9pdC91PTE3MTAxMTk5OTQsMTc4NTQyMjIzNiZmbT0yNyZncD0wLmpwZycsXG4gICAgICAnaHR0cHM6Ly9zczEuYmRzdGF0aWMuY29tLzcwY0Z1WFNoX1ExWW54R2twb1dLMUhGNmhoeS9pdC91PTEwMzk3MjMxNDksNDE4MDY4OTM1NCZmbT0yNyZncD0wLmpwZycsXG4gICAgICAnaHR0cHM6Ly9zczMuYmRzdGF0aWMuY29tLzcwY0Z2OFNoX1ExWW54R2twb1dLMUhGNmhoeS9pdC91PTEwNTA4NDgxMjksNjUzNTkzMzEyJmZtPTI3JmdwPTAuanBnJyxcbiAgICAgICdodHRwczovL3NzMS5iZHN0YXRpYy5jb20vNzBjRnZYU2hfUTFZbnhHa3BvV0sxSEY2aGh5L2l0L3U9Mjc5MjkyODAyNiw0MDM1NTY5ODc3JmZtPTI3JmdwPTAuanBnJyxcbiAgICAgICdodHRwczovL3NzMy5iZHN0YXRpYy5jb20vNzBjRnY4U2hfUTFZbnhHa3BvV0sxSEY2aGh5L2l0L3U9NDAwNjE5MTQ1LDI4MTY2MTY3NjgmZm09MjcmZ3A9MC5qcGcnLFxuICAgICAgJ2h0dHBzOi8vc3MwLmJkc3RhdGljLmNvbS83MGNGdUhTaF9RMVlueEdrcG9XSzFIRjZoaHkvaXQvdT0xODg3OTc2MDE3LDMxMzQ4MjQ3NTEmZm09MjcmZ3A9MC5qcGcnLFxuICAgICAgJ2h0dHBzOi8vc3MwLmJkc3RhdGljLmNvbS83MGNGdkhTaF9RMVlueEdrcG9XSzFIRjZoaHkvaXQvdT00MTA5MTQwMjg4LDQwNDU2OTg4MTYmZm09MjcmZ3A9MC5qcGcnLFxuICAgICAgJ2h0dHBzOi8vc3MxLmJkc3RhdGljLmNvbS83MGNGdVhTaF9RMVlueEdrcG9XSzFIRjZoaHkvaXQvdT02OTE4NTM5MDgsMzgzNTM1Mzk5NSZmbT0yNyZncD0wLmpwZycsXG4gICAgICAnaHR0cHM6Ly9zczEuYmRzdGF0aWMuY29tLzcwY0Z1WFNoX1ExWW54R2twb1dLMUhGNmhoeS9pdC91PTEzMzAwNjI5OTAsNDI0NTY5NjE4OSZmbT0yNyZncD0wLmpwZydcbiAgICBdLFxuICAgIGluZGljYXRvckRvdHM6IHRydWUsXG4gICAgYXV0b3BsYXk6IHRydWUsXG4gICAgaW50ZXJ2YWw6ICczMDAwJyxcbiAgICBkdXJhdGlvbjogJzMwMCcsXG4gICAgc3BpYzogJy4uL2ltYWdlcy9zZWFyY2gucG5nJyxcbiAgICBob21lOiAnJyxcbiAgICBoZWlnaHQ6IDAsXG4gICAgd2lkdGg6IDBcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIHNlYXJjaCgpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4uL3BhZ2VzL3NlYXJjaCdcbiAgICAgIH0pXG4gICAgfSxcbiAgICBzdHlsZShlKSB7XG4gICAgICB2YXIgaXRlbSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4XG4gICAgICBjb25zb2xlLmxvZyhlLCAnaXRlbScpXG4gICAgICBzd2l0Y2ggKGl0ZW0pIHtcbiAgICAgICAgY2FzZSAwIDogd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6ICcuLi9wYWdlcy9Lb3JlYW4nXG4gICAgICAgIH0pOyBicmVha1xuICAgICAgICBjYXNlIDEgOiB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogJy4uL3BhZ2VzL2V1cmFtZXJpY2FuJ1xuICAgICAgICB9KTsgYnJlYWtcbiAgICAgICAgY2FzZSAyIDogd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6ICcuLi9wYWdlcy9DaGluYSdcbiAgICAgICAgfSk7IGJyZWFrXG4gICAgICAgIGNhc2UgMyA6IHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiAnLi4vcGFnZXMvZnJlc2gnXG4gICAgICAgIH0pOyBicmVha1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgc2VsZi5ob21lID0gaG9tZVxuICAgIC8vIOiOt+WPluezu+e7n+S/oeaBryjpq5jluqbvvIzlrr3luqYpXG4gICAgd2VweS5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIHNlbGYuaGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodFxuICAgICAgICBzZWxmLndpZHRoID0gcmVzLndpbmRvd1dpZHRoXG4gICAgICB9XG4gICAgfSlcbiAgICBjb25zb2xlLmxvZyhzZWxmLndpZHRoLCAnd2lkdGgnKVxuICAgIGNvbnNvbGUubG9nKHNlbGYuaGVpZ2h0LCAnaGVpZ2h0JylcbiAgICAvLyDliqDovb1cbiAgICB3ZXB5LnNob3dMb2FkaW5nKHtcbiAgICAgIHRpdGxlOiAn5Yqg6L295LitJyxcbiAgICAgIGR1cmF0aW9uOiAyMDAwLFxuICAgICAgaW1hZ2U6ICcuLi9pbWFnZXMvYWhvbWUucG5nJ1xuICAgIH0pXG5cbiAgICAvLyDov57mjqXlkI7lj7BcbiAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTo3MDAxL2hpbWcnLFxuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICBzZWxmLmhvbWUgPSByZXMuZGF0YVxuICAgICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICAgIGhvbWU6IHJlcy5kYXRhXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKVxuICAgICAgfVxuICAgIH0pXG4gICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6NzAwMS9taW1nJyxcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgc2VsZi5tb3ZlID0gcmVzLmRhdGFcbiAgICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgICBtb3ZlOiByZXMuZGF0YVxuICAgICAgICB9KVxuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iXX0=