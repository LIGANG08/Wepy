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
        url: 'http://127.0.0.1:7001/Img',
        method: 'GET',
        success: function success(res) {
          self.home = res.data;
          self.setData({
            home: res.data
          });
          console.log(res.data);
        }
      });
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJpbWdVcmxzIiwiaW5kaWNhdG9yRG90cyIsImF1dG9wbGF5IiwiaW50ZXJ2YWwiLCJkdXJhdGlvbiIsInNwaWMiLCJob21lIiwiaGVpZ2h0Iiwid2lkdGgiLCJtZXRob2RzIiwic2VhcmNoIiwibmF2aWdhdGVUbyIsInVybCIsInN0eWxlIiwiZSIsIml0ZW0iLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImluZGV4IiwiY29uc29sZSIsImxvZyIsInNlbGYiLCJnZXRTeXN0ZW1JbmZvIiwic3VjY2VzcyIsInJlcyIsIndpbmRvd0hlaWdodCIsIndpbmRvd1dpZHRoIiwic2hvd0xvYWRpbmciLCJ0aXRsZSIsImltYWdlIiwicmVxdWVzdCIsIm1ldGhvZCIsInNldERhdGEiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxlQUFTLENBQ1AsdUVBRE8sRUFFUCwrRkFGTyxFQUdQLGdHQUhPO0FBSVA7QUFDQSxzR0FMTyxFQU1QLGdHQU5PLEVBT1AsZ0dBUE87QUFRUDtBQUNBLHNHQVRPLEVBVVAsOEZBVk8sRUFXUCxnR0FYTyxFQVlQLGdHQVpPLEVBYVAsK0ZBYk8sRUFjUCxnR0FkTyxFQWVQLGdHQWZPLEVBZ0JQLCtGQWhCTyxFQWlCUCxnR0FqQk8sRUFrQlAsK0ZBbEJPLEVBbUJQLGdHQW5CTyxFQW9CUCxnR0FwQk8sRUFxQlAsK0ZBckJPLEVBc0JQLGdHQXRCTyxDQURKO0FBeUJMQyxxQkFBZSxJQXpCVjtBQTBCTEMsZ0JBQVUsSUExQkw7QUEyQkxDLGdCQUFVLE1BM0JMO0FBNEJMQyxnQkFBVSxLQTVCTDtBQTZCTEMsWUFBTSxzQkE3QkQ7QUE4QkxDLFlBQU0sRUE5QkQ7QUErQkxDLGNBQVEsQ0EvQkg7QUFnQ0xDLGFBQU87QUFoQ0YsSyxRQWtDUEMsTyxHQUFVO0FBQ1JDLFlBRFEsb0JBQ0M7QUFDUCx1QkFBS0MsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRCxPQUxPO0FBTVJDLFdBTlEsaUJBTUZDLENBTkUsRUFNQztBQUNQLFlBQUlDLE9BQU9ELEVBQUVFLGFBQUYsQ0FBZ0JDLE9BQWhCLENBQXdCQyxLQUFuQztBQUNBQyxnQkFBUUMsR0FBUixDQUFZTixDQUFaLEVBQWUsTUFBZjtBQUNBLGdCQUFRQyxJQUFSO0FBQ0UsZUFBSyxDQUFMO0FBQVMsMkJBQUtKLFVBQUwsQ0FBZ0I7QUFDdkJDLG1CQUFLO0FBRGtCLGFBQWhCLEVBRUw7QUFDSixlQUFLLENBQUw7QUFBUywyQkFBS0QsVUFBTCxDQUFnQjtBQUN2QkMsbUJBQUs7QUFEa0IsYUFBaEIsRUFFTDtBQUNKLGVBQUssQ0FBTDtBQUFTLDJCQUFLRCxVQUFMLENBQWdCO0FBQ3ZCQyxtQkFBSztBQURrQixhQUFoQixFQUVMO0FBQ0osZUFBSyxDQUFMO0FBQVMsMkJBQUtELFVBQUwsQ0FBZ0I7QUFDdkJDLG1CQUFLO0FBRGtCLGFBQWhCLEVBRUw7QUFaTjtBQWNEO0FBdkJPLEs7Ozs7OzZCQXlCRDtBQUNQLFVBQUlTLE9BQU8sSUFBWDtBQUNBQSxXQUFLZixJQUFMO0FBQ0E7QUFDQSxxQkFBS2dCLGFBQUwsQ0FBbUI7QUFDakJDLGVBRGlCLG1CQUNUQyxHQURTLEVBQ0o7QUFDWEgsZUFBS2QsTUFBTCxHQUFjaUIsSUFBSUMsWUFBbEI7QUFDQUosZUFBS2IsS0FBTCxHQUFhZ0IsSUFBSUUsV0FBakI7QUFDRDtBQUpnQixPQUFuQjtBQU1BUCxjQUFRQyxHQUFSLENBQVlDLEtBQUtiLEtBQWpCLEVBQXdCLE9BQXhCO0FBQ0FXLGNBQVFDLEdBQVIsQ0FBWUMsS0FBS2QsTUFBakIsRUFBeUIsUUFBekI7QUFDQTtBQUNBLHFCQUFLb0IsV0FBTCxDQUFpQjtBQUNmQyxlQUFPLEtBRFE7QUFFZnhCLGtCQUFVLElBRks7QUFHZnlCLGVBQU87QUFIUSxPQUFqQjs7QUFNQTtBQUNBLHFCQUFLQyxPQUFMLENBQWE7QUFDWGxCLGFBQUssMkJBRE07QUFFWG1CLGdCQUFRLEtBRkc7QUFHWFIsaUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQkgsZUFBS2YsSUFBTCxHQUFZa0IsSUFBSXpCLElBQWhCO0FBQ0FzQixlQUFLVyxPQUFMLENBQWE7QUFDWDFCLGtCQUFNa0IsSUFBSXpCO0FBREMsV0FBYjtBQUdBb0Isa0JBQVFDLEdBQVIsQ0FBWUksSUFBSXpCLElBQWhCO0FBQ0Q7QUFUVSxPQUFiO0FBV0Q7Ozs7RUE5RmdDLGVBQUtrQyxJOztrQkFBbkJyQyxLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgaG9tZSBmcm9tICcuLi9kYXRhL2hvbWUuanMnXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ01JTEFOIOeVheS6q+W5uOemjydcbiAgfVxuICBkYXRhID0ge1xuICAgIGltZ1VybHM6IFtcbiAgICAgICdodHRwOi8vaW1nMS5pbWd0bi5iZGltZy5jb20vaXQvdT0yNTUzMzIyMzgxLDI5MjUzMTI3NjAmZm09MjcmZ3A9MC5qcGcnLFxuICAgICAgJ2h0dHBzOi8vc3MzLmJkc3RhdGljLmNvbS83MGNGdjhTaF9RMVlueEdrcG9XSzFIRjZoaHkvaXQvdT0yMjY5MTE3OTA1LDg4MzAwNjY5MiZmbT0yNyZncD0wLmpwZycsXG4gICAgICAnaHR0cHM6Ly9zczEuYmRzdGF0aWMuY29tLzcwY0Z2WFNoX1ExWW54R2twb1dLMUhGNmhoeS9pdC91PTI2ODUyMTAwMjgsMzQ1NzM3MjA3NSZmbT0yNyZncD0wLmpwZycsXG4gICAgICAvLyAnaHR0cHM6Ly9zczEuYmRzdGF0aWMuY29tLzcwY0Z2WFNoX1ExWW54R2twb1dLMUhGNmhoeS9pdC91PTE5NDM0MzU4NjUsODA0NDMwMzQ4JmZtPTI3JmdwPTAuanBnJyxcbiAgICAgICdodHRwczovL3NzMy5iZHN0YXRpYy5jb20vNzBjRnY4U2hfUTFZbnhHa3BvV0sxSEY2aGh5L2l0L3U9Mzk2MDg3NzM4MywxMDUxNDg0ODY2JmZtPTI3JmdwPTAuanBnJyxcbiAgICAgICdodHRwczovL3NzMi5iZHN0YXRpYy5jb20vNzBjRnZuU2hfUTFZbnhHa3BvV0sxSEY2aGh5L2l0L3U9MTQ1MzUwMjg0OSwyNzI3NTk5ODg5JmZtPTI3JmdwPTAuanBnJyxcbiAgICAgICdodHRwczovL3NzMi5iZHN0YXRpYy5jb20vNzBjRnZuU2hfUTFZbnhHa3BvV0sxSEY2aGh5L2l0L3U9MTE2MTgxMzU2MywzMDY5NTEyMzMxJmZtPTI3JmdwPTAuanBnJyxcbiAgICAgIC8vICdodHRwczovL3NzMS5iZHN0YXRpYy5jb20vNzBjRnZYU2hfUTFZbnhHa3BvV0sxSEY2aGh5L2l0L3U9MjY1MDc1MzYxMCwyNzI1Njc3NDQxJmZtPTI3JmdwPTAuanBnJyxcbiAgICAgICdodHRwczovL3NzMy5iZHN0YXRpYy5jb20vNzBjRnY4U2hfUTFZbnhHa3BvV0sxSEY2aGh5L2l0L3U9MjU2MzIxMjMwMywyMzg2Nzc3ODcwJmZtPTI3JmdwPTAuanBnJyxcbiAgICAgICdodHRwczovL3NzMy5iZHN0YXRpYy5jb20vNzBjRnY4U2hfUTFZbnhHa3BvV0sxSEY2aGh5L2l0L3U9MzAxNjM4MjY2LDExODE5NTI3MyZmbT0yNyZncD0wLmpwZycsXG4gICAgICAnaHR0cHM6Ly9zczAuYmRzdGF0aWMuY29tLzcwY0Z2SFNoX1ExWW54R2twb1dLMUhGNmhoeS9pdC91PTExOTUxOTU4NzcsMzczMjMwNzEwMyZmbT0yNyZncD0wLmpwZycsXG4gICAgICAnaHR0cHM6Ly9zczEuYmRzdGF0aWMuY29tLzcwY0Z2WFNoX1ExWW54R2twb1dLMUhGNmhoeS9pdC91PTI5NzcxMDg0MTcsNDA2NjQ0ODMwOCZmbT0yNyZncD0wLmpwZycsXG4gICAgICAnaHR0cHM6Ly9zczEuYmRzdGF0aWMuY29tLzcwY0Z1WFNoX1ExWW54R2twb1dLMUhGNmhoeS9pdC91PTI4MDg5MjExNDQsMzgzODcwMDM5JmZtPTI3JmdwPTAuanBnJyxcbiAgICAgICdodHRwczovL3NzMC5iZHN0YXRpYy5jb20vNzBjRnVIU2hfUTFZbnhHa3BvV0sxSEY2aGh5L2l0L3U9MTcxMDExOTk5NCwxNzg1NDIyMjM2JmZtPTI3JmdwPTAuanBnJyxcbiAgICAgICdodHRwczovL3NzMS5iZHN0YXRpYy5jb20vNzBjRnVYU2hfUTFZbnhHa3BvV0sxSEY2aGh5L2l0L3U9MTAzOTcyMzE0OSw0MTgwNjg5MzU0JmZtPTI3JmdwPTAuanBnJyxcbiAgICAgICdodHRwczovL3NzMy5iZHN0YXRpYy5jb20vNzBjRnY4U2hfUTFZbnhHa3BvV0sxSEY2aGh5L2l0L3U9MTA1MDg0ODEyOSw2NTM1OTMzMTImZm09MjcmZ3A9MC5qcGcnLFxuICAgICAgJ2h0dHBzOi8vc3MxLmJkc3RhdGljLmNvbS83MGNGdlhTaF9RMVlueEdrcG9XSzFIRjZoaHkvaXQvdT0yNzkyOTI4MDI2LDQwMzU1Njk4NzcmZm09MjcmZ3A9MC5qcGcnLFxuICAgICAgJ2h0dHBzOi8vc3MzLmJkc3RhdGljLmNvbS83MGNGdjhTaF9RMVlueEdrcG9XSzFIRjZoaHkvaXQvdT00MDA2MTkxNDUsMjgxNjYxNjc2OCZmbT0yNyZncD0wLmpwZycsXG4gICAgICAnaHR0cHM6Ly9zczAuYmRzdGF0aWMuY29tLzcwY0Z1SFNoX1ExWW54R2twb1dLMUhGNmhoeS9pdC91PTE4ODc5NzYwMTcsMzEzNDgyNDc1MSZmbT0yNyZncD0wLmpwZycsXG4gICAgICAnaHR0cHM6Ly9zczAuYmRzdGF0aWMuY29tLzcwY0Z2SFNoX1ExWW54R2twb1dLMUhGNmhoeS9pdC91PTQxMDkxNDAyODgsNDA0NTY5ODgxNiZmbT0yNyZncD0wLmpwZycsXG4gICAgICAnaHR0cHM6Ly9zczEuYmRzdGF0aWMuY29tLzcwY0Z1WFNoX1ExWW54R2twb1dLMUhGNmhoeS9pdC91PTY5MTg1MzkwOCwzODM1MzUzOTk1JmZtPTI3JmdwPTAuanBnJyxcbiAgICAgICdodHRwczovL3NzMS5iZHN0YXRpYy5jb20vNzBjRnVYU2hfUTFZbnhHa3BvV0sxSEY2aGh5L2l0L3U9MTMzMDA2Mjk5MCw0MjQ1Njk2MTg5JmZtPTI3JmdwPTAuanBnJ1xuICAgIF0sXG4gICAgaW5kaWNhdG9yRG90czogdHJ1ZSxcbiAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICBpbnRlcnZhbDogJzMwMDAnLFxuICAgIGR1cmF0aW9uOiAnMzAwJyxcbiAgICBzcGljOiAnLi4vaW1hZ2VzL3NlYXJjaC5wbmcnLFxuICAgIGhvbWU6ICcnLFxuICAgIGhlaWdodDogMCxcbiAgICB3aWR0aDogMFxuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgc2VhcmNoKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi4vcGFnZXMvc2VhcmNoJ1xuICAgICAgfSlcbiAgICB9LFxuICAgIHN0eWxlKGUpIHtcbiAgICAgIHZhciBpdGVtID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXhcbiAgICAgIGNvbnNvbGUubG9nKGUsICdpdGVtJylcbiAgICAgIHN3aXRjaCAoaXRlbSkge1xuICAgICAgICBjYXNlIDAgOiB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogJy4uL3BhZ2VzL0tvcmVhbidcbiAgICAgICAgfSk7IGJyZWFrXG4gICAgICAgIGNhc2UgMSA6IHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiAnLi4vcGFnZXMvZXVyYW1lcmljYW4nXG4gICAgICAgIH0pOyBicmVha1xuICAgICAgICBjYXNlIDIgOiB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogJy4uL3BhZ2VzL0NoaW5hJ1xuICAgICAgICB9KTsgYnJlYWtcbiAgICAgICAgY2FzZSAzIDogd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6ICcuLi9wYWdlcy9mcmVzaCdcbiAgICAgICAgfSk7IGJyZWFrXG4gICAgICB9XG4gICAgfVxuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICBzZWxmLmhvbWUgPSBob21lXG4gICAgLy8g6I635Y+W57O757uf5L+h5oGvKOmrmOW6pu+8jOWuveW6pilcbiAgICB3ZXB5LmdldFN5c3RlbUluZm8oe1xuICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgc2VsZi5oZWlnaHQgPSByZXMud2luZG93SGVpZ2h0XG4gICAgICAgIHNlbGYud2lkdGggPSByZXMud2luZG93V2lkdGhcbiAgICAgIH1cbiAgICB9KVxuICAgIGNvbnNvbGUubG9nKHNlbGYud2lkdGgsICd3aWR0aCcpXG4gICAgY29uc29sZS5sb2coc2VsZi5oZWlnaHQsICdoZWlnaHQnKVxuICAgIC8vIOWKoOi9vVxuICAgIHdlcHkuc2hvd0xvYWRpbmcoe1xuICAgICAgdGl0bGU6ICfliqDovb3kuK0nLFxuICAgICAgZHVyYXRpb246IDIwMDAsXG4gICAgICBpbWFnZTogJy4uL2ltYWdlcy9haG9tZS5wbmcnXG4gICAgfSlcblxuICAgIC8vIOi/nuaOpeWQjuWPsFxuICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjcwMDEvSW1nJyxcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgc2VsZi5ob21lID0gcmVzLmRhdGFcbiAgICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgICBob21lOiByZXMuZGF0YVxuICAgICAgICB9KVxuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iXX0=