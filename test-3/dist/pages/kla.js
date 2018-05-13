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
      price: '',
      title: '',
      numbers: '数量',
      subtraction: '-',
      number: 1,
      add: '+',
      image: '',
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
    value: function onLoad(data) {
      var self = this;
      // self.title = korean.title
      self.title = data.title;
      self.image = data.pic;
      self.price = data.price;
      console.log(self.title, '22222');
      console.log(self.image, '图片');
      console.log(self.price, '价格');
      console.log(data.setData.title, 'setdata');
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/kla'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImtsYS5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwic2hvcHBpbmdfcGljIiwibWFwaWMiLCJ0YSIsInRiIiwicHJpY2UiLCJ0aXRsZSIsIm51bWJlcnMiLCJzdWJ0cmFjdGlvbiIsIm51bWJlciIsImFkZCIsImltYWdlIiwic2hvd0xvYWRpbmciLCJjaGVjayIsImFfTV9jb2xvciIsImFfTV9ib3JkZXIiLCJNX2NvbG9yIiwiTV9ib3JkZXIiLCJhX2NvbG9yIiwiYV9ib3JkZXIiLCJjb2xvciIsImJvcmRlciIsInN0b2NrIiwiYV9zY29sb3IiLCJhX3NpemUiLCJzY29sb3IiLCJzaXplIiwicGxlYXNlIiwibWV0aG9kcyIsInNlbGYiLCJjb25maXJtX2EiLCJzaG93VG9hc3QiLCJjb25maXJtIiwibmF2aWdhdGVUbyIsInVybCIsImNvbG9yX2EiLCJzaXplX01fYSIsInNfbSIsInNpemVfTSIsInNob3dNb2RhbF9hIiwiYW5pbWF0aW9uIiwiY3JlYXRlQW5pbWF0aW9uIiwiZHVyYXRpb24iLCJ0aW1pbmdGdW5jdGlvbiIsImRlbGF5IiwidHJhbnNsYXRlWSIsInN0ZXAiLCJzZXREYXRhIiwiYW5pbWF0aW9uRGF0YSIsImV4cG9ydCIsInNob3dNb2RhbFN0YXR1c19hIiwic2V0VGltZW91dCIsImJpbmQiLCJzaG93TW9kYWwiLCJzaG93TW9kYWxTdGF0dXMiLCJoaWRlTW9kYWwiLCJwaWMiLCJjb25zb2xlIiwibG9nIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxvQkFBYyxnREFEVDtBQUVMQyxhQUFPLHVFQUZGO0FBR0xDLFVBQUksT0FIQztBQUlMQyxVQUFJLE1BSkM7QUFLTEMsYUFBTyxFQUxG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QjtBQUNBOEMsY0FBUUMsR0FBUixDQUFZN0IsS0FBS3hCLEtBQWpCLEVBQXdCLElBQXhCO0FBQ0FvRCxjQUFRQyxHQUFSLENBQVkxRCxLQUFLK0MsT0FBTCxDQUFhekMsS0FBekIsRUFBZ0MsU0FBaEM7QUFDRDs7OztFQTNQZ0MsZUFBS3FELEk7O2tCQUFuQjlELEsiLCJmaWxlIjoia2xhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuLy8gaW1wb3J0IGRhdGEgZnJvbSAnLi9Lb3JlYW4nXG4vLyBpbXBvcnQga29yZWFuIGZyb20gJy4vS29yZWFuJ1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ2tsYSdcbiAgfVxuICBkYXRhID0ge1xuICAgIHNob3BwaW5nX3BpYzogJ2h0dHA6Ly9pMDMucGljdG4uc29nb3VjZG4uY29tLzMzZTY5N2FkMzkzOTNkM2InLFxuICAgIG1hcGljOiAnaHR0cDovL2ltZzEuaW1ndG4uYmRpbWcuY29tL2l0L3U9MjU1MzMyMjM4MSwyOTI1MzEyNzYwJmZtPTI3JmdwPTAuanBnJyxcbiAgICB0YTogJ+WKoOWFpei0reeJqei9picsXG4gICAgdGI6ICfnq4vljbPotK3kubAnLFxuICAgIHByaWNlOiAnJyxcbiAgICB0aXRsZTogJycsXG4gICAgbnVtYmVyczogJ+aVsOmHjycsXG4gICAgc3VidHJhY3Rpb246ICctJyxcbiAgICBudW1iZXI6IDEsXG4gICAgYWRkOiAnKycsXG4gICAgaW1hZ2U6ICcnLFxuICAgIHNob3dMb2FkaW5nOiB0cnVlLFxuICAgIGNoZWNrOiBmYWxzZSxcbiAgICBhX01fY29sb3I6ICdibGFjaycsXG4gICAgYV9NX2JvcmRlcjogJzFweCBzb2xpZCBzaWx2ZXInLFxuICAgIC8vIHNpemVfTTogZmFsc2UsXG4gICAgTV9jb2xvcjogJ2JsYWNrJyxcbiAgICBNX2JvcmRlcjogJzFweCBzb2xpZCBzaWx2ZXInLFxuICAgIGFfY29sb3I6ICdibGFjaycsXG4gICAgYV9ib3JkZXI6ICcxcHggc29saWQgc2lsdmVyJyxcbiAgICBjb2xvcjogJ2JsYWNrJyxcbiAgICBib3JkZXI6ICcxcHggc29saWQgc2lsdmVyJyxcbiAgICBzdG9jazogMCxcbiAgICBhX3Njb2xvcjogJ+minOiJsicsXG4gICAgYV9zaXplOiAn5bC65a+4JyxcbiAgICBzY29sb3I6ICfpopzoibInLFxuICAgIHNpemU6ICflsLrlr7gnLFxuICAgIHBsZWFzZTogJ+ivtydcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIHN1YnRyYWN0aW9uKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBpZiAoc2VsZi5udW1iZXIgPiAxKSB7XG4gICAgICAgIHNlbGYubnVtYmVyLS1cbiAgICAgIH1cbiAgICB9LFxuICAgIGFkZCgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgaWYgKHNlbGYuYWRkKSB7XG4gICAgICAgIHNlbGYubnVtYmVyKytcbiAgICAgIH1cbiAgICB9LFxuICAgIC8vIGFkZF9jYXJ0KCkge1xuICAgIC8vICAgd2VweS5zaG93VG9hc3Qoe1xuICAgIC8vICAgICB0aXRsZTogJ+WKoOWFpeaIkOWKnydcbiAgICAvLyAgICAgLy8gaWNvbjogJ3N1Y2Nlc3MnXG4gICAgLy8gICAgIC8vIGR1cmF0aW9uOiAyMDAwXG4gICAgLy8gICB9KVxuICAgIC8vIH0sXG4gICAgY29uZmlybV9hKCkge1xuICAgICAgLy8gY29uc29sZS5sb2coJ+ivt+mAieaLqeWVhuWTgeinhOagvCcpXG4gICAgICAvLyB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAvLyAgIHRpdGxlOiAn6K+36YCJ5oup5ZWG5ZOB6KeE5qC8JyxcbiAgICAgIC8vICAgaW1hZ2U6ICcuLi9pbWFnZXMvY29uZmlybS5wbmcnXG4gICAgICAvLyB9KVxuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBpZiAoc2VsZi5hX3Njb2xvciA9PT0gJ+minOiJsicgfHwgc2VsZi5hX3NpemUgPT09ICflsLrlr7gnIHx8IHNlbGYubnVtYmVyID09PSAwKSB7XG4gICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgICB0aXRsZTogJ+ivt+mAieaLqeWVhuWTgeinhOagvCcsXG4gICAgICAgICAgaW1hZ2U6ICcuLi9pbWFnZXMvY29uZmlybS5wbmcnXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgdGl0bGU6ICfliqDlhaXmiJDlip8nXG4gICAgICAgICAgLy8gaW1hZ2U6ICcuLi9pbWFnZXMvY29uZmlybS5wbmcnXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSxcbiAgICBjb25maXJtKCkge1xuICAgICAgLy8gY29uc29sZS5sb2coJ+ivt+mAieaLqeWVhuWTgeinhOagvCcpXG4gICAgICAvLyB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAvLyAgIHRpdGxlOiAn6K+36YCJ5oup5ZWG5ZOB6KeE5qC8JyxcbiAgICAgIC8vICAgaW1hZ2U6ICcuLi9pbWFnZXMvY29uZmlybS5wbmcnXG4gICAgICAvLyB9KVxuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBpZiAoc2VsZi5zY29sb3IgPT09ICfpopzoibInIHx8IHNlbGYuc2l6ZSA9PT0gJ+WwuuWvuCcgfHwgc2VsZi5udW1iZXIgPT09IDApIHtcbiAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgIHRpdGxlOiAn6K+36YCJ5oup5ZWG5ZOB6KeE5qC8JyxcbiAgICAgICAgICBpbWFnZTogJy4uL2ltYWdlcy9jb25maXJtLnBuZydcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgICB0aXRsZTogJ+W3sumAieaLqScsXG4gICAgICAgICAgaW1hZ2U6ICcuLi9pbWFnZXMvY29uZmlybS5wbmcnXG4gICAgICAgIH0pXG4gICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiAnLi4vcGFnZXMvY29uZmlybSdcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbG9yX2EoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYuY2hlY2sgPSAhc2VsZi5jaGVja1xuICAgICAgaWYgKHNlbGYuY2hlY2spIHtcbiAgICAgICAgc2VsZi5hX2JvcmRlciA9ICcxcHggc29saWQgcmVkJ1xuICAgICAgICBzZWxmLmFfY29sb3IgPSAncmVkJ1xuICAgICAgICBzZWxmLmFfc2NvbG9yID0gJ1wi55m96ImyXCInXG4gICAgICAgIC8vIHNlbGYucGxlYXNlID0gJ+W3sidcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlbGYuYV9ib3JkZXIgPSAnMXB4IHNvbGlkIHNsaXZlcidcbiAgICAgICAgc2VsZi5hX2NvbG9yID0gJ2JsYWNrJ1xuICAgICAgICBzZWxmLmFfc2NvbG9yID0gJ+minOiJsidcbiAgICAgICAgc2VsZi5wbGVhc2UgPSAn6K+3J1xuICAgICAgfVxuICAgIH0sXG4gICAgc2l6ZV9NX2EoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYuc19tID0gIXNlbGYuc19tXG4gICAgICBpZiAoc2VsZi5zX20pIHtcbiAgICAgICAgc2VsZi5hX01fYm9yZGVyID0gJzFweCBzb2xpZCByZWQnXG4gICAgICAgIHNlbGYuYV9NX2NvbG9yID0gJ3JlZCdcbiAgICAgICAgc2VsZi5hX3NpemUgPSAnXCJNXCInXG4gICAgICAgIHNlbGYucGxlYXNlID0gJ+W3sidcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlbGYuYV9NX2JvcmRlciA9ICcxcHggc29saWQgc2xpdmVyJ1xuICAgICAgICBzZWxmLmFfTV9jb2xvciA9ICdibGFjaydcbiAgICAgICAgc2VsZi5hX3NpemUgPSAn5bC65a+4J1xuICAgICAgICBzZWxmLnBsZWFzZSA9ICfor7cnXG4gICAgICB9XG4gICAgfSxcbiAgICBjb2xvcigpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi5jaGVjayA9ICFzZWxmLmNoZWNrXG4gICAgICBpZiAoc2VsZi5jaGVjaykge1xuICAgICAgICBzZWxmLmJvcmRlciA9ICcxcHggc29saWQgcmVkJ1xuICAgICAgICBzZWxmLmNvbG9yID0gJ3JlZCdcbiAgICAgICAgc2VsZi5zY29sb3IgPSAnXCLnmb3oibJcIidcbiAgICAgICAgLy8gc2VsZi5wbGVhc2UgPSAn5beyJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZi5ib3JkZXIgPSAnMXB4IHNvbGlkIHNsaXZlcidcbiAgICAgICAgc2VsZi5jb2xvciA9ICdibGFjaydcbiAgICAgICAgc2VsZi5zY29sb3IgPSAn6aKc6ImyJ1xuICAgICAgICBzZWxmLnBsZWFzZSA9ICfor7cnXG4gICAgICB9XG4gICAgfSxcbiAgICBzaXplX00oKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYuc19tID0gIXNlbGYuc19tXG4gICAgICBpZiAoc2VsZi5zX20pIHtcbiAgICAgICAgc2VsZi5NX2JvcmRlciA9ICcxcHggc29saWQgcmVkJ1xuICAgICAgICBzZWxmLk1fY29sb3IgPSAncmVkJ1xuICAgICAgICBzZWxmLnNpemUgPSAnXCJNXCInXG4gICAgICAgIHNlbGYucGxlYXNlID0gJ+W3sidcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlbGYuTV9ib3JkZXIgPSAnMXB4IHNvbGlkIHNsaXZlcidcbiAgICAgICAgc2VsZi5NX2NvbG9yID0gJ2JsYWNrJ1xuICAgICAgICBzZWxmLnNpemUgPSAn5bC65a+4J1xuICAgICAgICBzZWxmLnBsZWFzZSA9ICfor7cnXG4gICAgICB9XG4gICAgfSxcbiAgICBzaG93TW9kYWxfYSgpIHtcbiAgICAvLyDmmL7npLrpga7nvanlsYJcbiAgICAvLyDlrp7kvovljJbkuIDkuKrliqjnlLtcbiAgICAgIHZhciBhbmltYXRpb24gPSB3ZXB5LmNyZWF0ZUFuaW1hdGlvbih7XG4gICAgICAgIGR1cmF0aW9uOiAyMDAsIC8vIOWKqOeUu+aMgee7reaXtumXtO+8jOWNleS9jW1z77yM6buY6K6k5YC8IDQwMFxuICAgICAgICB0aW1pbmdGdW5jdGlvbjogJ2xpbmVhcicsIC8vIOWKqOeUu+S4gOebtOi+g+S4uuWdh+WMgFxuICAgICAgICBkZWxheTogMFxuICAgICAgfSlcbiAgICAgIHRoaXMuYW5pbWF0aW9uID0gYW5pbWF0aW9uXG4gICAgICBhbmltYXRpb24udHJhbnNsYXRlWSgzMDApLnN0ZXAoKVxuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgYW5pbWF0aW9uRGF0YTogYW5pbWF0aW9uLmV4cG9ydCgpLFxuICAgICAgICBzaG93TW9kYWxTdGF0dXNfYTogdHJ1ZVxuICAgICAgfSlcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBhbmltYXRpb24udHJhbnNsYXRlWSgwKS5zdGVwKClcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICBhbmltYXRpb25EYXRhOiBhbmltYXRpb24uZXhwb3J0KClcbiAgICAgICAgfSlcbiAgICAgIH0uYmluZCh0aGlzKSwgMjAwKVxuICAgIH0sXG4gICAgc2hvd01vZGFsKCkge1xuICAgIC8vIOaYvuekuumBrue9qeWxglxuICAgIC8vIOWunuS+i+WMluS4gOS4quWKqOeUu1xuICAgICAgdmFyIGFuaW1hdGlvbiA9IHdlcHkuY3JlYXRlQW5pbWF0aW9uKHtcbiAgICAgICAgZHVyYXRpb246IDIwMCwgLy8g5Yqo55S75oyB57ut5pe26Ze077yM5Y2V5L2NbXPvvIzpu5jorqTlgLwgNDAwXG4gICAgICAgIHRpbWluZ0Z1bmN0aW9uOiAnbGluZWFyJywgLy8g5Yqo55S75LiA55u06L6D5Li65Z2H5YyAXG4gICAgICAgIGRlbGF5OiAwXG4gICAgICB9KVxuICAgICAgdGhpcy5hbmltYXRpb24gPSBhbmltYXRpb25cbiAgICAgIGFuaW1hdGlvbi50cmFuc2xhdGVZKDMwMCkuc3RlcCgpXG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBhbmltYXRpb25EYXRhOiBhbmltYXRpb24uZXhwb3J0KCksXG4gICAgICAgIHNob3dNb2RhbFN0YXR1czogdHJ1ZVxuICAgICAgfSlcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBhbmltYXRpb24udHJhbnNsYXRlWSgwKS5zdGVwKClcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICBhbmltYXRpb25EYXRhOiBhbmltYXRpb24uZXhwb3J0KClcbiAgICAgICAgfSlcbiAgICAgIH0uYmluZCh0aGlzKSwgMjAwKVxuICAgIH0sXG4gICAgaGlkZU1vZGFsKCkge1xuICAgIC8vIOmakOiXj+mBrue9qeWxglxuICAgICAgdmFyIGFuaW1hdGlvbiA9IHdlcHkuY3JlYXRlQW5pbWF0aW9uKHtcbiAgICAgICAgZHVyYXRpb246IDIwMCxcbiAgICAgICAgdGltaW5nRnVuY3Rpb246ICdsaW5lYXInLFxuICAgICAgICBkZWxheTogMFxuICAgICAgfSlcbiAgICAgIHRoaXMuYW5pbWF0aW9uID0gYW5pbWF0aW9uXG4gICAgICBhbmltYXRpb24udHJhbnNsYXRlWSgzMDAwKS5zdGVwKClcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIGFuaW1hdGlvbkRhdGE6IGFuaW1hdGlvbi5leHBvcnQoKVxuICAgICAgfSlcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBhbmltYXRpb24udHJhbnNsYXRlWSgwKS5zdGVwKClcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICBhbmltYXRpb25EYXRhOiBhbmltYXRpb24uZXhwb3J0KCksXG4gICAgICAgICAgc2hvd01vZGFsU3RhdHVzOiBmYWxzZVxuICAgICAgICB9KVxuICAgICAgfS5iaW5kKHRoaXMpLCAyMDAwMClcbiAgICB9XG4gIH1cbiAgICAvLyBzaG93TG9hZGluZygpIHtcbiAgICAvLyAgIHRoaXMuc2V0RGF0YSh7XG4gICAgLy8gICAgIHNob3dMb2FkaW5nOiBmYWxzZVxuICAgIC8vICAgfSlcbiAgICAvLyB9XG4gICAgLy8g5pi+56S65pON5L2c6I+c5Y2VXG4gICAgLy8gcGF5KCkge1xuICAgIC8vICAgd2VweS5zaG93QWN0aW9uU2hlZXQoe1xuICAgIC8vICAgICBpdGVtTGlzdDogWydBJywgJ0InLCAnQyddLFxuICAgIC8vICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAvLyAgICAgICBpZiAoIXJlcy5jYW5jZWwpIHtcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKHJlcy50YXBJbmRleClcbiAgICAvLyAgICAgICB9XG4gICAgLy8gICAgIH1cbiAgICAvLyAgIH0pXG4gICAgLy8gfVxuXG4gICAgLy8g5Yqo5oCB5pS55Y+Y5b2T5YmN6aG16Z2i5qCH6aKYXG4gICAgLy8gcGF5KCkge1xuICAgIC8vICAgd2VweS5zZXROYXZpZ2F0aW9uQmFyVGl0bGUoe1xuICAgIC8vICAgICB0aXRsZTogJ+W9k+WJjemhtemdoidcbiAgICAvLyAgIH0pXG4gICAgLy8gfVxuICBvbkxvYWQoZGF0YSkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIC8vIHNlbGYudGl0bGUgPSBrb3JlYW4udGl0bGVcbiAgICBzZWxmLnRpdGxlID0gZGF0YS50aXRsZVxuICAgIHNlbGYuaW1hZ2UgPSBkYXRhLnBpY1xuICAgIHNlbGYucHJpY2UgPSBkYXRhLnByaWNlXG4gICAgY29uc29sZS5sb2coc2VsZi50aXRsZSwgJzIyMjIyJylcbiAgICBjb25zb2xlLmxvZyhzZWxmLmltYWdlLCAn5Zu+54mHJylcbiAgICBjb25zb2xlLmxvZyhzZWxmLnByaWNlLCAn5Lu35qC8JylcbiAgICBjb25zb2xlLmxvZyhkYXRhLnNldERhdGEudGl0bGUsICdzZXRkYXRhJylcbiAgfVxufVxuIl19