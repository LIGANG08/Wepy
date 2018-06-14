'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import data from './Korean'
// import korean from './Korean'
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
      navigationBarTitleText: 'kla'
    }, _this.data = {
      shopping_pic: 'http://i03.pictn.sogoucdn.com/33e697ad39393d3b',
      mapic: 'http://img1.imgtn.bdimg.com/it/u=2553322381,2925312760&fm=27&gp=0.jpg',
      ta: '加入购物车',
      tb: '立即购买',
      image: '',
      price: '',
      title: '',
      koreanImgurl: [],
      numbers: '数量',
      subtraction: '-',
      number: 1,
      add: '+',
      showLoading: true,
      check: false,
      a_M_color: 'black',
      a_M_border: '1px solid silver',
      // size_M: false,
      M_color: 'black',
      M_border: '1px solid silver',
      a_color: 'black',
      a_border: '1px solid silver',
      color: 'black',
      border: '1px solid silver',
      stock: 0,
      a_scolor: '颜色',
      a_size: '尺寸',
      scolor: '颜色',
      size: '尺寸',
      please: '请'
    }, _this.methods = {
      subtraction: function subtraction() {
        var self = this;
        if (self.number > 1) {
          self.number--;
        }
      },
      add: function add() {
        var self = this;
        if (self.add) {
          self.number++;
        }
      },

      // add_cart() {
      //   wepy.showToast({
      //     title: '加入成功'
      //     // icon: 'success'
      //     // duration: 2000
      //   })
      // },
      confirm_a: function confirm_a() {
        // console.log('请选择商品规格')
        // wepy.showToast({
        //   title: '请选择商品规格',
        //   image: '../images/confirm.png'
        // })
        var self = this;
        if (self.a_scolor === '颜色' || self.a_size === '尺寸' || self.number === 0) {
          _wepy2.default.showToast({
            title: '请选择商品规格',
            image: '../images/confirm.png'
          });
        } else {
          _wepy2.default.showToast({
            title: '加入成功'
            // image: '../images/confirm.png'
          });
        }
      },
      confirm: function confirm() {
        // console.log('请选择商品规格')
        // wepy.showToast({
        //   title: '请选择商品规格',
        //   image: '../images/confirm.png'
        // })
        var self = this;
        if (self.scolor === '颜色' || self.size === '尺寸' || self.number === 0) {
          _wepy2.default.showToast({
            title: '请选择商品规格',
            image: '../images/confirm.png'
          });
        } else {
          _wepy2.default.showToast({
            title: '已选择',
            image: '../images/confirm.png'
          });
          _wepy2.default.navigateTo({
            url: '../pages/confirm'
          });
        }
      },
      color_a: function color_a() {
        var self = this;
        self.check = !self.check;
        if (self.check) {
          self.a_border = '1px solid red';
          self.a_color = 'red';
          self.a_scolor = '"白色"';
          // self.please = '已'
        } else {
          self.a_border = '1px solid sliver';
          self.a_color = 'black';
          self.a_scolor = '颜色';
          self.please = '请';
        }
      },
      size_M_a: function size_M_a() {
        var self = this;
        self.s_m = !self.s_m;
        if (self.s_m) {
          self.a_M_border = '1px solid red';
          self.a_M_color = 'red';
          self.a_size = '"M"';
          self.please = '已';
        } else {
          self.a_M_border = '1px solid sliver';
          self.a_M_color = 'black';
          self.a_size = '尺寸';
          self.please = '请';
        }
      },
      color: function color() {
        var self = this;
        self.check = !self.check;
        if (self.check) {
          self.border = '1px solid red';
          self.color = 'red';
          self.scolor = '"白色"';
          // self.please = '已'
        } else {
          self.border = '1px solid sliver';
          self.color = 'black';
          self.scolor = '颜色';
          self.please = '请';
        }
      },
      size_M: function size_M() {
        var self = this;
        self.s_m = !self.s_m;
        if (self.s_m) {
          self.M_border = '1px solid red';
          self.M_color = 'red';
          self.size = '"M"';
          self.please = '已';
        } else {
          self.M_border = '1px solid sliver';
          self.M_color = 'black';
          self.size = '尺寸';
          self.please = '请';
        }
      },
      showModal_a: function showModal_a() {
        // 显示遮罩层
        // 实例化一个动画
        var animation = _wepy2.default.createAnimation({
          duration: 200, // 动画持续时间，单位ms，默认值 400
          timingFunction: 'linear', // 动画一直较为均匀
          delay: 0
        });
        this.animation = animation;
        animation.translateY(300).step();
        this.setData({
          animationData: animation.export(),
          showModalStatus_a: true
        });
        setTimeout(function () {
          animation.translateY(0).step();
          this.setData({
            animationData: animation.export()
          });
        }.bind(this), 200);
      },
      showModal: function showModal() {
        // 显示遮罩层
        // 实例化一个动画
        var animation = _wepy2.default.createAnimation({
          duration: 200, // 动画持续时间，单位ms，默认值 400
          timingFunction: 'linear', // 动画一直较为均匀
          delay: 0
        });
        this.animation = animation;
        animation.translateY(300).step();
        this.setData({
          animationData: animation.export(),
          showModalStatus: true
        });
        setTimeout(function () {
          animation.translateY(0).step();
          this.setData({
            animationData: animation.export()
          });
        }.bind(this), 200);
      },
      hideModal: function hideModal() {
        // 隐藏遮罩层
        var animation = _wepy2.default.createAnimation({
          duration: 200,
          timingFunction: 'linear',
          delay: 0
        });
        this.animation = animation;
        animation.translateY(3000).step();
        this.setData({
          animationData: animation.export()
        });
        setTimeout(function () {
          animation.translateY(0).step();
          this.setData({
            animationData: animation.export(),
            showModalStatus: false
          });
        }.bind(this), 20000);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',

    // showLoading() {
    //   this.setData({
    //     showLoading: false
    //   })
    // }
    // 显示操作菜单
    // pay() {
    //   wepy.showActionSheet({
    //     itemList: ['A', 'B', 'C'],
    //     success: function(res) {
    //       if (!res.cancel) {
    //         console.log(res.tapIndex)
    //       }
    //     }
    //   })
    // }

    // 动态改变当前页面标题
    // pay() {
    //   wepy.setNavigationBarTitle({
    //     title: '当前页面'
    //   })
    // }
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(params) {
        var self;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                self = this;
                // this.data.koreanImgurl = JSON.parse(params.koreanImgurl)

                console.log(params.title, 'ppppppppp');
                // self.title = korean.title
                self.title = params.title;
                self.image = params.pic;
                self.price = params.price;
                console.log(self.title, self.price, self.image, '22222');
                this.$apply();

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onLoad(_x) {
        return _ref2.apply(this, arguments);
      }

      return onLoad;
    }()
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/kla'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImtsYS5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwic2hvcHBpbmdfcGljIiwibWFwaWMiLCJ0YSIsInRiIiwiaW1hZ2UiLCJwcmljZSIsInRpdGxlIiwia29yZWFuSW1ndXJsIiwibnVtYmVycyIsInN1YnRyYWN0aW9uIiwibnVtYmVyIiwiYWRkIiwic2hvd0xvYWRpbmciLCJjaGVjayIsImFfTV9jb2xvciIsImFfTV9ib3JkZXIiLCJNX2NvbG9yIiwiTV9ib3JkZXIiLCJhX2NvbG9yIiwiYV9ib3JkZXIiLCJjb2xvciIsImJvcmRlciIsInN0b2NrIiwiYV9zY29sb3IiLCJhX3NpemUiLCJzY29sb3IiLCJzaXplIiwicGxlYXNlIiwibWV0aG9kcyIsInNlbGYiLCJjb25maXJtX2EiLCJzaG93VG9hc3QiLCJjb25maXJtIiwibmF2aWdhdGVUbyIsInVybCIsImNvbG9yX2EiLCJzaXplX01fYSIsInNfbSIsInNpemVfTSIsInNob3dNb2RhbF9hIiwiYW5pbWF0aW9uIiwiY3JlYXRlQW5pbWF0aW9uIiwiZHVyYXRpb24iLCJ0aW1pbmdGdW5jdGlvbiIsImRlbGF5IiwidHJhbnNsYXRlWSIsInN0ZXAiLCJzZXREYXRhIiwiYW5pbWF0aW9uRGF0YSIsImV4cG9ydCIsInNob3dNb2RhbFN0YXR1c19hIiwic2V0VGltZW91dCIsImJpbmQiLCJzaG93TW9kYWwiLCJzaG93TW9kYWxTdGF0dXMiLCJoaWRlTW9kYWwiLCJwYXJhbXMiLCJjb25zb2xlIiwibG9nIiwicGljIiwiJGFwcGx5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLG9CQUFjLGdEQURUO0FBRUxDLGFBQU8sdUVBRkY7QUFHTEMsVUFBSSxP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RCxPQUFPbkQsS0FBcEI7QUFDQW9ELHdCQUFRQyxHQUFSLENBQVk3QixLQUFLdkIsS0FBakIsRUFBd0J1QixLQUFLeEIsS0FBN0IsRUFBb0N3QixLQUFLekIsS0FBekMsRUFBZ0QsT0FBaEQ7QUFDQSxxQkFBS3dELE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUEzUCtCLGVBQUtDLEk7O2tCQUFuQmpFLEsiLCJmaWxlIjoia2xhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuLy8gaW1wb3J0IGRhdGEgZnJvbSAnLi9Lb3JlYW4nXG4vLyBpbXBvcnQga29yZWFuIGZyb20gJy4vS29yZWFuJ1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ2tsYSdcbiAgfVxuICBkYXRhID0ge1xuICAgIHNob3BwaW5nX3BpYzogJ2h0dHA6Ly9pMDMucGljdG4uc29nb3VjZG4uY29tLzMzZTY5N2FkMzkzOTNkM2InLFxuICAgIG1hcGljOiAnaHR0cDovL2ltZzEuaW1ndG4uYmRpbWcuY29tL2l0L3U9MjU1MzMyMjM4MSwyOTI1MzEyNzYwJmZtPTI3JmdwPTAuanBnJyxcbiAgICB0YTogJ+WKoOWFpei0reeJqei9picsXG4gICAgdGI6ICfnq4vljbPotK3kubAnLFxuICAgIGltYWdlOiAnJyxcbiAgICBwcmljZTogJycsXG4gICAgdGl0bGU6ICcnLFxuICAgIGtvcmVhbkltZ3VybDogW10sXG4gICAgbnVtYmVyczogJ+aVsOmHjycsXG4gICAgc3VidHJhY3Rpb246ICctJyxcbiAgICBudW1iZXI6IDEsXG4gICAgYWRkOiAnKycsXG4gICAgc2hvd0xvYWRpbmc6IHRydWUsXG4gICAgY2hlY2s6IGZhbHNlLFxuICAgIGFfTV9jb2xvcjogJ2JsYWNrJyxcbiAgICBhX01fYm9yZGVyOiAnMXB4IHNvbGlkIHNpbHZlcicsXG4gICAgLy8gc2l6ZV9NOiBmYWxzZSxcbiAgICBNX2NvbG9yOiAnYmxhY2snLFxuICAgIE1fYm9yZGVyOiAnMXB4IHNvbGlkIHNpbHZlcicsXG4gICAgYV9jb2xvcjogJ2JsYWNrJyxcbiAgICBhX2JvcmRlcjogJzFweCBzb2xpZCBzaWx2ZXInLFxuICAgIGNvbG9yOiAnYmxhY2snLFxuICAgIGJvcmRlcjogJzFweCBzb2xpZCBzaWx2ZXInLFxuICAgIHN0b2NrOiAwLFxuICAgIGFfc2NvbG9yOiAn6aKc6ImyJyxcbiAgICBhX3NpemU6ICflsLrlr7gnLFxuICAgIHNjb2xvcjogJ+minOiJsicsXG4gICAgc2l6ZTogJ+WwuuWvuCcsXG4gICAgcGxlYXNlOiAn6K+3J1xuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgc3VidHJhY3Rpb24oKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGlmIChzZWxmLm51bWJlciA+IDEpIHtcbiAgICAgICAgc2VsZi5udW1iZXItLVxuICAgICAgfVxuICAgIH0sXG4gICAgYWRkKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBpZiAoc2VsZi5hZGQpIHtcbiAgICAgICAgc2VsZi5udW1iZXIrK1xuICAgICAgfVxuICAgIH0sXG4gICAgLy8gYWRkX2NhcnQoKSB7XG4gICAgLy8gICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgLy8gICAgIHRpdGxlOiAn5Yqg5YWl5oiQ5YqfJ1xuICAgIC8vICAgICAvLyBpY29uOiAnc3VjY2VzcydcbiAgICAvLyAgICAgLy8gZHVyYXRpb246IDIwMDBcbiAgICAvLyAgIH0pXG4gICAgLy8gfSxcbiAgICBjb25maXJtX2EoKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygn6K+36YCJ5oup5ZWG5ZOB6KeE5qC8JylcbiAgICAgIC8vIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgIC8vICAgdGl0bGU6ICfor7fpgInmi6nllYblk4Hop4TmoLwnLFxuICAgICAgLy8gICBpbWFnZTogJy4uL2ltYWdlcy9jb25maXJtLnBuZydcbiAgICAgIC8vIH0pXG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGlmIChzZWxmLmFfc2NvbG9yID09PSAn6aKc6ImyJyB8fCBzZWxmLmFfc2l6ZSA9PT0gJ+WwuuWvuCcgfHwgc2VsZi5udW1iZXIgPT09IDApIHtcbiAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgIHRpdGxlOiAn6K+36YCJ5oup5ZWG5ZOB6KeE5qC8JyxcbiAgICAgICAgICBpbWFnZTogJy4uL2ltYWdlcy9jb25maXJtLnBuZydcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgICB0aXRsZTogJ+WKoOWFpeaIkOWKnydcbiAgICAgICAgICAvLyBpbWFnZTogJy4uL2ltYWdlcy9jb25maXJtLnBuZydcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbmZpcm0oKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygn6K+36YCJ5oup5ZWG5ZOB6KeE5qC8JylcbiAgICAgIC8vIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgIC8vICAgdGl0bGU6ICfor7fpgInmi6nllYblk4Hop4TmoLwnLFxuICAgICAgLy8gICBpbWFnZTogJy4uL2ltYWdlcy9jb25maXJtLnBuZydcbiAgICAgIC8vIH0pXG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGlmIChzZWxmLnNjb2xvciA9PT0gJ+minOiJsicgfHwgc2VsZi5zaXplID09PSAn5bC65a+4JyB8fCBzZWxmLm51bWJlciA9PT0gMCkge1xuICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgdGl0bGU6ICfor7fpgInmi6nllYblk4Hop4TmoLwnLFxuICAgICAgICAgIGltYWdlOiAnLi4vaW1hZ2VzL2NvbmZpcm0ucG5nJ1xuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgIHRpdGxlOiAn5bey6YCJ5oupJyxcbiAgICAgICAgICBpbWFnZTogJy4uL2ltYWdlcy9jb25maXJtLnBuZydcbiAgICAgICAgfSlcbiAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6ICcuLi9wYWdlcy9jb25maXJtJ1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0sXG4gICAgY29sb3JfYSgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi5jaGVjayA9ICFzZWxmLmNoZWNrXG4gICAgICBpZiAoc2VsZi5jaGVjaykge1xuICAgICAgICBzZWxmLmFfYm9yZGVyID0gJzFweCBzb2xpZCByZWQnXG4gICAgICAgIHNlbGYuYV9jb2xvciA9ICdyZWQnXG4gICAgICAgIHNlbGYuYV9zY29sb3IgPSAnXCLnmb3oibJcIidcbiAgICAgICAgLy8gc2VsZi5wbGVhc2UgPSAn5beyJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZi5hX2JvcmRlciA9ICcxcHggc29saWQgc2xpdmVyJ1xuICAgICAgICBzZWxmLmFfY29sb3IgPSAnYmxhY2snXG4gICAgICAgIHNlbGYuYV9zY29sb3IgPSAn6aKc6ImyJ1xuICAgICAgICBzZWxmLnBsZWFzZSA9ICfor7cnXG4gICAgICB9XG4gICAgfSxcbiAgICBzaXplX01fYSgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi5zX20gPSAhc2VsZi5zX21cbiAgICAgIGlmIChzZWxmLnNfbSkge1xuICAgICAgICBzZWxmLmFfTV9ib3JkZXIgPSAnMXB4IHNvbGlkIHJlZCdcbiAgICAgICAgc2VsZi5hX01fY29sb3IgPSAncmVkJ1xuICAgICAgICBzZWxmLmFfc2l6ZSA9ICdcIk1cIidcbiAgICAgICAgc2VsZi5wbGVhc2UgPSAn5beyJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZi5hX01fYm9yZGVyID0gJzFweCBzb2xpZCBzbGl2ZXInXG4gICAgICAgIHNlbGYuYV9NX2NvbG9yID0gJ2JsYWNrJ1xuICAgICAgICBzZWxmLmFfc2l6ZSA9ICflsLrlr7gnXG4gICAgICAgIHNlbGYucGxlYXNlID0gJ+ivtydcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbG9yKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLmNoZWNrID0gIXNlbGYuY2hlY2tcbiAgICAgIGlmIChzZWxmLmNoZWNrKSB7XG4gICAgICAgIHNlbGYuYm9yZGVyID0gJzFweCBzb2xpZCByZWQnXG4gICAgICAgIHNlbGYuY29sb3IgPSAncmVkJ1xuICAgICAgICBzZWxmLnNjb2xvciA9ICdcIueZveiJslwiJ1xuICAgICAgICAvLyBzZWxmLnBsZWFzZSA9ICflt7InXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxmLmJvcmRlciA9ICcxcHggc29saWQgc2xpdmVyJ1xuICAgICAgICBzZWxmLmNvbG9yID0gJ2JsYWNrJ1xuICAgICAgICBzZWxmLnNjb2xvciA9ICfpopzoibInXG4gICAgICAgIHNlbGYucGxlYXNlID0gJ+ivtydcbiAgICAgIH1cbiAgICB9LFxuICAgIHNpemVfTSgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi5zX20gPSAhc2VsZi5zX21cbiAgICAgIGlmIChzZWxmLnNfbSkge1xuICAgICAgICBzZWxmLk1fYm9yZGVyID0gJzFweCBzb2xpZCByZWQnXG4gICAgICAgIHNlbGYuTV9jb2xvciA9ICdyZWQnXG4gICAgICAgIHNlbGYuc2l6ZSA9ICdcIk1cIidcbiAgICAgICAgc2VsZi5wbGVhc2UgPSAn5beyJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZi5NX2JvcmRlciA9ICcxcHggc29saWQgc2xpdmVyJ1xuICAgICAgICBzZWxmLk1fY29sb3IgPSAnYmxhY2snXG4gICAgICAgIHNlbGYuc2l6ZSA9ICflsLrlr7gnXG4gICAgICAgIHNlbGYucGxlYXNlID0gJ+ivtydcbiAgICAgIH1cbiAgICB9LFxuICAgIHNob3dNb2RhbF9hKCkge1xuICAgIC8vIOaYvuekuumBrue9qeWxglxuICAgIC8vIOWunuS+i+WMluS4gOS4quWKqOeUu1xuICAgICAgdmFyIGFuaW1hdGlvbiA9IHdlcHkuY3JlYXRlQW5pbWF0aW9uKHtcbiAgICAgICAgZHVyYXRpb246IDIwMCwgLy8g5Yqo55S75oyB57ut5pe26Ze077yM5Y2V5L2NbXPvvIzpu5jorqTlgLwgNDAwXG4gICAgICAgIHRpbWluZ0Z1bmN0aW9uOiAnbGluZWFyJywgLy8g5Yqo55S75LiA55u06L6D5Li65Z2H5YyAXG4gICAgICAgIGRlbGF5OiAwXG4gICAgICB9KVxuICAgICAgdGhpcy5hbmltYXRpb24gPSBhbmltYXRpb25cbiAgICAgIGFuaW1hdGlvbi50cmFuc2xhdGVZKDMwMCkuc3RlcCgpXG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBhbmltYXRpb25EYXRhOiBhbmltYXRpb24uZXhwb3J0KCksXG4gICAgICAgIHNob3dNb2RhbFN0YXR1c19hOiB0cnVlXG4gICAgICB9KVxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGFuaW1hdGlvbi50cmFuc2xhdGVZKDApLnN0ZXAoKVxuICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgIGFuaW1hdGlvbkRhdGE6IGFuaW1hdGlvbi5leHBvcnQoKVxuICAgICAgICB9KVxuICAgICAgfS5iaW5kKHRoaXMpLCAyMDApXG4gICAgfSxcbiAgICBzaG93TW9kYWwoKSB7XG4gICAgLy8g5pi+56S66YGu572p5bGCXG4gICAgLy8g5a6e5L6L5YyW5LiA5Liq5Yqo55S7XG4gICAgICB2YXIgYW5pbWF0aW9uID0gd2VweS5jcmVhdGVBbmltYXRpb24oe1xuICAgICAgICBkdXJhdGlvbjogMjAwLCAvLyDliqjnlLvmjIHnu63ml7bpl7TvvIzljZXkvY1tc++8jOm7mOiupOWAvCA0MDBcbiAgICAgICAgdGltaW5nRnVuY3Rpb246ICdsaW5lYXInLCAvLyDliqjnlLvkuIDnm7TovoPkuLrlnYfljIBcbiAgICAgICAgZGVsYXk6IDBcbiAgICAgIH0pXG4gICAgICB0aGlzLmFuaW1hdGlvbiA9IGFuaW1hdGlvblxuICAgICAgYW5pbWF0aW9uLnRyYW5zbGF0ZVkoMzAwKS5zdGVwKClcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIGFuaW1hdGlvbkRhdGE6IGFuaW1hdGlvbi5leHBvcnQoKSxcbiAgICAgICAgc2hvd01vZGFsU3RhdHVzOiB0cnVlXG4gICAgICB9KVxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGFuaW1hdGlvbi50cmFuc2xhdGVZKDApLnN0ZXAoKVxuICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgIGFuaW1hdGlvbkRhdGE6IGFuaW1hdGlvbi5leHBvcnQoKVxuICAgICAgICB9KVxuICAgICAgfS5iaW5kKHRoaXMpLCAyMDApXG4gICAgfSxcbiAgICBoaWRlTW9kYWwoKSB7XG4gICAgLy8g6ZqQ6JeP6YGu572p5bGCXG4gICAgICB2YXIgYW5pbWF0aW9uID0gd2VweS5jcmVhdGVBbmltYXRpb24oe1xuICAgICAgICBkdXJhdGlvbjogMjAwLFxuICAgICAgICB0aW1pbmdGdW5jdGlvbjogJ2xpbmVhcicsXG4gICAgICAgIGRlbGF5OiAwXG4gICAgICB9KVxuICAgICAgdGhpcy5hbmltYXRpb24gPSBhbmltYXRpb25cbiAgICAgIGFuaW1hdGlvbi50cmFuc2xhdGVZKDMwMDApLnN0ZXAoKVxuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgYW5pbWF0aW9uRGF0YTogYW5pbWF0aW9uLmV4cG9ydCgpXG4gICAgICB9KVxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGFuaW1hdGlvbi50cmFuc2xhdGVZKDApLnN0ZXAoKVxuICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgIGFuaW1hdGlvbkRhdGE6IGFuaW1hdGlvbi5leHBvcnQoKSxcbiAgICAgICAgICBzaG93TW9kYWxTdGF0dXM6IGZhbHNlXG4gICAgICAgIH0pXG4gICAgICB9LmJpbmQodGhpcyksIDIwMDAwKVxuICAgIH1cbiAgfVxuICAgIC8vIHNob3dMb2FkaW5nKCkge1xuICAgIC8vICAgdGhpcy5zZXREYXRhKHtcbiAgICAvLyAgICAgc2hvd0xvYWRpbmc6IGZhbHNlXG4gICAgLy8gICB9KVxuICAgIC8vIH1cbiAgICAvLyDmmL7npLrmk43kvZzoj5zljZVcbiAgICAvLyBwYXkoKSB7XG4gICAgLy8gICB3ZXB5LnNob3dBY3Rpb25TaGVldCh7XG4gICAgLy8gICAgIGl0ZW1MaXN0OiBbJ0EnLCAnQicsICdDJ10sXG4gICAgLy8gICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgIC8vICAgICAgIGlmICghcmVzLmNhbmNlbCkge1xuICAgIC8vICAgICAgICAgY29uc29sZS5sb2cocmVzLnRhcEluZGV4KVxuICAgIC8vICAgICAgIH1cbiAgICAvLyAgICAgfVxuICAgIC8vICAgfSlcbiAgICAvLyB9XG5cbiAgICAvLyDliqjmgIHmlLnlj5jlvZPliY3pobXpnaLmoIfpophcbiAgICAvLyBwYXkoKSB7XG4gICAgLy8gICB3ZXB5LnNldE5hdmlnYXRpb25CYXJUaXRsZSh7XG4gICAgLy8gICAgIHRpdGxlOiAn5b2T5YmN6aG16Z2iJ1xuICAgIC8vICAgfSlcbiAgICAvLyB9XG4gIGFzeW5jIG9uTG9hZChwYXJhbXMpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAvLyB0aGlzLmRhdGEua29yZWFuSW1ndXJsID0gSlNPTi5wYXJzZShwYXJhbXMua29yZWFuSW1ndXJsKVxuICAgIGNvbnNvbGUubG9nKHBhcmFtcy50aXRsZSwgJ3BwcHBwcHBwcCcpXG4gICAgLy8gc2VsZi50aXRsZSA9IGtvcmVhbi50aXRsZVxuICAgIHNlbGYudGl0bGUgPSBwYXJhbXMudGl0bGVcbiAgICBzZWxmLmltYWdlID0gcGFyYW1zLnBpY1xuICAgIHNlbGYucHJpY2UgPSBwYXJhbXMucHJpY2VcbiAgICBjb25zb2xlLmxvZyhzZWxmLnRpdGxlLCBzZWxmLnByaWNlLCBzZWxmLmltYWdlLCAnMjIyMjInKVxuICAgIHRoaXMuJGFwcGx5KClcbiAgfVxufVxuIl19