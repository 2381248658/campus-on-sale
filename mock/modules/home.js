import Mock from 'mockjs'

const baseURL = '/api/campus/v1'

// 校园语义映射
const campusNames = {
  1: { name: '宿舍百货', subtitle: '生活必备' },
  2: { name: '校园零食', subtitle: '美味享不停' },
  3: { name: '二手教材', subtitle: '学习好帮手' },
  4: { name: '代取服务', subtitle: '懒人福音' },
  5: { name: '数码租赁', subtitle: '科技生活' },
  6: { name: '学长推荐', subtitle: '值得信赖' },
  7: { name: '电子产品', subtitle: '最新科技' },
}

export default [
  // 1.1 轮播图
  {
    url: `${baseURL}/recommend/banner`,
    method: 'get',
    response: () => ({
      code: '1',
      msg: 'success',
      result: [
        { id: '1', imgUrl: 'https://picsum.photos/1240/500?random=1' },
        { id: '2', imgUrl: 'https://picsum.photos/1240/500?random=2' },
        { id: '3', imgUrl: 'https://picsum.photos/1240/500?random=3' },
        { id: '4', imgUrl: 'https://picsum.photos/1240/500?random=4' },
        { id: '5', imgUrl: 'https://picsum.photos/1240/500?random=5' },
        { id: '6', imgUrl: 'https://picsum.photos/1240/500?random=6' },
        { id: '7', imgUrl: 'https://picsum.photos/1240/500?random=7' },
      ],
    }),
  },

  // 1.2 学长推荐
  {
    url: `${baseURL}/recommend/fresh`,
    method: 'get',
    response: () => {
      const list = Array.from({ length: 4 }).map(() => {
        const id = `senior_${Mock.mock('@guid')}`;

        // 使用ID作为种子生成一致的商品名称
        let seed = 0;
        for (let i = 0; i < id.length; i++) {
          seed += id.charCodeAt(i);
        }

        // 基于种子的伪随机数生成函数
        function seededRandom(seed) {
          const x = Math.sin(seed++) * 10000;
          return x - Math.floor(x);
        }

        // 基于种子生成一致的随机索引
        function getSeededIndex(seed, max) {
          return Math.floor(seededRandom(seed) * max);
        }

        // 根据ID的最后一位字符的ASCII码决定商品类型（兼容GUID格式）
        const lastChar = id.slice(-1);
        const type = (lastChar.charCodeAt(0) % 3);

        // 根据类型生成对应的商品名称
        let name, price;
        if (type === 0) {
          // 数码产品
          name = `【校园惠】${['考研平板', '游戏笔记本', '专业相机', '设计显示器'][getSeededIndex(seed, 4)]} - ${['九成新', '近全新', '全新'][getSeededIndex(seed + 1, 3)]}`;
          price = (Math.floor(seededRandom(seed + 2) * 3000) + 2000).toFixed(2);
        } else if (type === 1) {
          // 电子产品
          name = `【校园惠】${['无线蓝牙耳机', '智能手表', '机械键盘', '游戏鼠标'][getSeededIndex(seed + 4, 4)]} - ${['学长自用', '全新未拆', '仅试戴'][getSeededIndex(seed + 5, 3)]}`;
          price = (Math.floor(seededRandom(seed + 6) * 900) + 100).toFixed(2);
        } else {
          // 二手教材
          name = `【校园惠】${['考研英语真题', '高等数学教材', '专业课程辅导书', '英语六级词汇'][getSeededIndex(seed + 8, 4)]} - ${['含解析', '带笔记', '全新未用'][getSeededIndex(seed + 9, 3)]}`;
          price = (Math.floor(seededRandom(seed + 10) * 80) + 20).toFixed(2);
        }

        return {
          id,
          name,
          desc: Mock.mock('@cparagraph(1)'),
          price,
          picture: `https://picsum.photos/300/300?random=${Mock.mock('@id')}`,
        }
      });
      return { code: '1', msg: 'success', result: list };
    },
  },

  // 1.3 人气推荐
  {
    url: `${baseURL}/recommend/hot`,
    method: 'get',
    response: () => {
      const list = Array.from({ length: 4 }).map(() => {
        const id = Mock.mock('@id');

        // 使用ID作为种子生成一致的商品标题
        let seed = 0;
        for (let i = 0; i < id.length; i++) {
          seed += id.charCodeAt(i);
        }

        // 基于种子的伪随机数生成函数
        function seededRandom(seed) {
          const x = Math.sin(seed++) * 10000;
          return x - Math.floor(x);
        }

        // 基于种子生成一致的随机索引
        function getSeededIndex(seed, max) {
          return Math.floor(seededRandom(seed) * max);
        }

        // 定义标题词库
        const titleWords = ['超值', '热销', '精品', '新品', '限时', '爆款', '精选', '特惠'];
        const altWords = ['校园生活', '学习必备', '数码科技', '美食零食', '宿舍神器', '运动健身', '美妆护肤', '文具用品'];

        // 生成一致的标题和alt
        const title = titleWords[getSeededIndex(seed, titleWords.length)] +
                     titleWords[getSeededIndex(seed + 1, titleWords.length)] +
                     titleWords[getSeededIndex(seed + 2, titleWords.length)] +
                     titleWords[getSeededIndex(seed + 3, titleWords.length)];

        const alt = altWords[getSeededIndex(seed + 4, altWords.length)] +
                   altWords[getSeededIndex(seed + 5, altWords.length)];

        return {
          id,
          title: title.substring(0, 4), // 确保4个汉字
          alt: alt.substring(0, 8),     // 确保8个汉字
          picture: `https://picsum.photos/300/300?random=${Mock.mock('@id')}`,
        };
      });
      return { code: '1', msg: 'success', result: list };
    },
  },

  // 1.4 分类导航
  {
    url: `${baseURL}/home/category/head`,
    method: 'get',
    response: () => ({
      code: '1',
      msg: 'success',
      result: Object.entries(campusNames).map(([id, category]) => ({
        id,
        name: category.name,
        subtitle: category.subtitle,
        goods: Array.from({ length: 9 }).map(() => {
          const goodsId = Mock.mock('@guid');
          // 使用与详情页相同的逻辑决定商品类型
          const lastChar = goodsId.slice(-1);
          const type = (lastChar.charCodeAt(0) % 3);

          // 基于ID生成一致的商品名称
          let seed = 0;
          for (let i = 0; i < goodsId.length; i++) {
            seed += goodsId.charCodeAt(i);
          }

          function seededRandom(seed) {
            const x = Math.sin(seed++) * 10000;
            return x - Math.floor(x);
          }

          function getSeededIndex(seed, max) {
            return Math.floor(seededRandom(seed) * max);
          }

          // 根据类型生成对应的商品名称
          let name, price;
          if (type === 0) {
            // 数码产品
            name = `【校园惠】${['考研平板', '游戏笔记本', '专业相机', '设计显示器'][getSeededIndex(seed, 4)]} - ${['九成新', '近全新', '全新'][getSeededIndex(seed + 1, 3)]}`;
            price = (Math.floor(seededRandom(seed + 2) * 3000) + 2000).toFixed(2);
          } else if (type === 1) {
            // 电子产品
            name = `【校园惠】${['无线蓝牙耳机', '智能手表', '机械键盘', '游戏鼠标'][getSeededIndex(seed + 4, 4)]} - ${['学长自用', '全新未拆', '仅试戴'][getSeededIndex(seed + 5, 3)]}`;
            price = (Math.floor(seededRandom(seed + 6) * 900) + 100).toFixed(2);
          } else {
            // 二手教材
            name = `【校园惠】${['考研英语真题', '高等数学教材', '专业课程辅导书', '英语六级词汇'][getSeededIndex(seed + 8, 4)]} - ${['含解析', '带笔记', '全新未用'][getSeededIndex(seed + 9, 3)]}`;
            price = (Math.floor(seededRandom(seed + 10) * 80) + 20).toFixed(2);
          }

          return {
            id: goodsId,
            name: name,
            desc: Mock.mock('@ctitle(20)'),
            price: price,
            picture: `https://picsum.photos/200/200?random=${Mock.mock('@id')}`,
          };
        })
      })),
    }),
  },

  // 1.5 首页产品板块
  {
    url: `${baseURL}/campus/goods/all`,
    method: 'get',
    response: () => {
      // 使用统一的校园分类命名
      const categories = ['宿舍百货', '校园零食', '数码租赁', '电子产品']
      const list = categories.map((name, index) => ({
        id: (index + 1).toString(),
        name,
        picture: `https://picsum.photos/240/610?random=floor_${index}`,
        goods: Array.from({ length: 8 }).map(() => {
          const id = Mock.mock('@guid');

          // 使用ID作为种子生成一致的商品名称
          let seed = 0;
          for (let i = 0; i < id.length; i++) {
            seed += id.charCodeAt(i);
          }

          // 基于种子的伪随机数生成函数
          function seededRandom(seed) {
            const x = Math.sin(seed++) * 10000;
            return x - Math.floor(x);
          }

          // 基于种子生成一致的随机索引
          function getSeededIndex(seed, max) {
            return Math.floor(seededRandom(seed) * max);
          }

          // 根据ID的最后一位字符的ASCII码决定商品类型（兼容GUID格式）
          const lastChar = id.slice(-1);
          const type = (lastChar.charCodeAt(0) % 3);

          // 根据类型生成对应的商品名称
          let goodsName, price;
          if (type === 0) {
            // 数码产品
            goodsName = `【校园惠】${['考研平板', '游戏笔记本', '专业相机', '设计显示器'][getSeededIndex(seed, 4)]} - ${['九成新', '近全新', '全新'][getSeededIndex(seed + 1, 3)]}`;
            price = (Math.floor(seededRandom(seed + 2) * 3000) + 2000).toFixed(2);
          } else if (type === 1) {
            // 电子产品
            goodsName = `【校园惠】${['无线蓝牙耳机', '智能手表', '机械键盘', '游戏鼠标'][getSeededIndex(seed + 4, 4)]} - ${['学长自用', '全新未拆', '仅试戴'][getSeededIndex(seed + 5, 3)]}`;
            price = (Math.floor(seededRandom(seed + 6) * 900) + 100).toFixed(2);
          } else {
            // 二手教材
            goodsName = `【校园惠】${['考研英语真题', '高等数学教材', '专业课程辅导书', '英语六级词汇'][getSeededIndex(seed + 8, 4)]} - ${['含解析', '带笔记', '全新未用'][getSeededIndex(seed + 9, 3)]}`;
            price = (Math.floor(seededRandom(seed + 10) * 80) + 20).toFixed(2);
          }

          return {
            id,
            name: goodsName,
            desc: Mock.mock('@ctitle(15, 20)'),
            price,
            picture: `https://picsum.photos/200/200?random=${Mock.mock('@id')}`,
          };
        }),
      }))
      return { code: '1', msg: 'success', result: list }
    },
  },

  // 1.6 一级分类详情页
  {
    url: `${baseURL}/category`,
    method: 'get',
    response: (config) => {
      const urlParams = new URLSearchParams(config.url.split('?')[1] || '')
      const id = urlParams.get('id') || '1'

      return {
        code: '1',
        msg: 'success',
        result: {
          id,
          name: campusNames[id]?.name || '校园好物',
          subtitle: campusNames[id]?.subtitle || '',
          picture: `https://picsum.photos/1240/500?random=cat_${id}`,
          children: (() => {
            // 为每个一级分类定义对应的二级分类名称
            const subCategoriesMap = {
              1: ['床上用品', '洗漱用品', '收纳整理', '清洁用品', '文具用品', '装饰用品', '生活用品'], // 宿舍百货
              2: ['膨化食品', '饼干糕点', '饮料饮品', '坚果炒货', '方便速食', '糖果巧克力', '水果零食'], // 校园零食
              3: ['专业课教材', '公共课教材', '辅导资料', '考试真题', '参考书籍', '外文原版', '工具书'], // 二手教材
              4: ['快递代取', '外卖代取', '文件代取', '物品代送', '打印服务', '跑腿服务', '其他服务'], // 代取服务
              5: ['手机租赁', '电脑租赁', '相机租赁', '平板租赁', '配件租赁', '游戏设备', '其他数码'], // 数码租赁
              6: ['生活用品', '学习用品', '数码产品', '零食饮品', '运动器材', '护肤美妆', '其他推荐'], // 学长推荐
              7: ['手机配件', '电脑配件', '智能设备', '影音设备', '数码周边', '游戏装备', '其他电子'], // 电子产品
            };

            const subCategories = subCategoriesMap[id] || [];
            return subCategories.map((name, idx) => ({
              id: `sub_${id}_${idx}`,
              name,
              picture: `https://picsum.photos/150/150?random=sub_${id}_${idx}`,
              goods: Array.from({ length: 5 }).map(() => {
                const goodsId = Mock.mock('@guid');

                // 使用ID作为种子生成一致的商品名称
                let seed = 0;
                for (let i = 0; i < goodsId.length; i++) {
                  seed += goodsId.charCodeAt(i);
                }

                // 基于种子的伪随机数生成函数
                function seededRandom(seed) {
                  const x = Math.sin(seed++) * 10000;
                  return x - Math.floor(x);
                }

                // 基于种子生成一致的随机索引
                function getSeededIndex(seed, max) {
                  return Math.floor(seededRandom(seed) * max);
                }

                // 根据ID的最后一位字符的ASCII码决定商品类型（兼容GUID格式）
                const lastChar = goodsId.slice(-1);
                const type = (lastChar.charCodeAt(0) % 3);

                // 根据类型生成对应的商品名称
                let name, price;
                if (type === 0) {
                  // 数码产品
                  name = `【校园惠】${['考研平板', '游戏笔记本', '专业相机', '设计显示器'][getSeededIndex(seed, 4)]} - ${['九成新', '近全新', '全新'][getSeededIndex(seed + 1, 3)]}`;
                  price = (Math.floor(seededRandom(seed + 2) * 3000) + 2000).toFixed(2);
                } else if (type === 1) {
                  // 电子产品
                  name = `【校园惠】${['无线蓝牙耳机', '智能手表', '机械键盘', '游戏鼠标'][getSeededIndex(seed + 4, 4)]} - ${['学长自用', '全新未拆', '仅试戴'][getSeededIndex(seed + 5, 3)]}`;
                  price = (Math.floor(seededRandom(seed + 6) * 900) + 100).toFixed(2);
                } else {
                  // 二手教材
                  name = `【校园惠】${['考研英语真题', '高等数学教材', '专业课程辅导书', '英语六级词汇'][getSeededIndex(seed + 8, 4)]} - ${['含解析', '带笔记', '全新未用'][getSeededIndex(seed + 9, 3)]}`;
                  price = (Math.floor(seededRandom(seed + 10) * 80) + 20).toFixed(2);
                }

                return {
                  id: goodsId,
                  name,
                  desc: Mock.mock('@ctitle(20)'),
                  price,
                  picture: `https://picsum.photos/200/200?random=${Mock.mock('@id')}`,
                };
              })
            }));
          })()
        }
      }
    }
  },

  // 1.7 二级分类筛选
  {
    url: `${baseURL}/category/sub/filter`,
    method: 'get',
    response: (config) => {
      const urlParams = new URLSearchParams(config.url.split('?')[1] || '')
      const subId = urlParams.get('id') || 'sub_1_0'
      const parentId = subId.split('_')[1] || '1'
      const subIndex = parseInt(subId.split('_')[2] || '0')

      // 使用与一级分类详情相同的二级分类命名映射
      const subCategoriesMap = {
        1: ['床上用品', '洗漱用品', '收纳整理', '清洁用品', '文具用品', '装饰用品', '生活用品'], // 宿舍百货
        2: ['膨化食品', '饼干糕点', '饮料饮品', '坚果炒货', '方便速食', '糖果巧克力', '水果零食'], // 校园零食
        3: ['专业课教材', '公共课教材', '辅导资料', '考试真题', '参考书籍', '外文原版', '工具书'], // 二手教材
        4: ['快递代取', '外卖代取', '文件代取', '物品代送', '打印服务', '跑腿服务', '其他服务'], // 代取服务
        5: ['手机租赁', '电脑租赁', '相机租赁', '平板租赁', '配件租赁', '游戏设备', '其他数码'], // 数码租赁
        6: ['生活用品', '学习用品', '数码产品', '零食饮品', '运动器材', '护肤美妆', '其他推荐'], // 学长推荐
        7: ['手机配件', '电脑配件', '智能设备', '影音设备', '数码周边', '游戏装备', '其他电子'], // 电子产品
      }

      const subCategories = subCategoriesMap[parentId] || []
      const subCategoryName = subCategories[subIndex] || `${campusNames[parentId]?.name || '校园'}精选子类`

      return {
        code: '1',
        msg: 'success',
        result: {
          id: subId,
          name: subCategoryName,
          parentId,
          parentName: campusNames[parentId]?.name || '校园惠',
          categories: Array.from({ length: 4 }).map((_, i) => ({
            id: Mock.mock('@id'),
            name: ['品牌', '规格', '价格', '销量'][i] || '筛选条件' + (i + 1),
        })),
        },
      }
    },
  },

  // 1.8 二级分类商品列表
  {
    url: '/api/campus/v1/category/goods/temporary',
    method: 'post',
    response: (config) => {
      const body = typeof config.body === 'string' ? JSON.parse(config.body) : config.body
      const page = body.page || 1
      const pageSize = body.pageSize || 20

      // 根据不同分类生成更具校园特色的商品名称前缀
      const categoryPrefixes = [
        '宿舍必备：',
        '校园美食：',
        '学习利器：',
        '贴心服务：',
        '科技体验：',
        '学长力荐：',
        '数码精选：'
      ]
      const randomPrefix = categoryPrefixes[Math.floor(Math.random() * categoryPrefixes.length)]

      return {
        code: '1',
        msg: 'success',
        result: {
          counts: 80,
          pageSize,
          pages: 4,
          page,
          items: Array.from({ length: pageSize }).map(() => {
            const id = Mock.mock('@guid');

            // 使用ID作为种子生成一致的商品名称
            let seed = 0;
            for (let i = 0; i < id.length; i++) {
              seed += id.charCodeAt(i);
            }

            // 基于种子的伪随机数生成函数
            function seededRandom(seed) {
              const x = Math.sin(seed++) * 10000;
              return x - Math.floor(x);
            }

            // 基于种子生成一致的随机索引
            function getSeededIndex(seed, max) {
              return Math.floor(seededRandom(seed) * max);
            }

            // 根据ID的最后一位字符的ASCII码决定商品类型（兼容GUID格式）
            const lastChar = id.slice(-1);
            const type = (lastChar.charCodeAt(0) % 3);

            // 根据类型生成对应的商品名称
            let name, price;
            if (type === 0) {
              // 数码产品
              name = `${randomPrefix}【校园惠】${['考研平板', '游戏笔记本', '专业相机', '设计显示器'][getSeededIndex(seed, 4)]} - ${['九成新', '近全新', '全新'][getSeededIndex(seed + 1, 3)]}`;
              price = (Math.floor(seededRandom(seed + 2) * 3000) + 2000).toFixed(2);
            } else if (type === 1) {
              // 电子产品
              name = `${randomPrefix}【校园惠】${['无线蓝牙耳机', '智能手表', '机械键盘', '游戏鼠标'][getSeededIndex(seed + 4, 4)]} - ${['学长自用', '全新未拆', '仅试戴'][getSeededIndex(seed + 5, 3)]}`;
              price = (Math.floor(seededRandom(seed + 6) * 900) + 100).toFixed(2);
            } else {
              // 二手教材
              name = `${randomPrefix}【校园惠】${['考研英语真题', '高等数学教材', '专业课程辅导书', '英语六级词汇'][getSeededIndex(seed + 8, 4)]} - ${['含解析', '带笔记', '全新未用'][getSeededIndex(seed + 9, 3)]}`;
              price = (Math.floor(seededRandom(seed + 10) * 80) + 20).toFixed(2);
            }

            return {
              id,
              name,
              desc: Mock.mock('@ctitle(20, 30)'),
              price,
              picture: `https://picsum.photos/300/300?random=${Mock.mock('@id')}`,
            };
          })
        }
      }
    },
  },
  {
    url: '/api/campus/v1/goods',
    method: 'get',
    response: (config) => {
      // 获取请求参数中的商品ID
      const urlParams = new URLSearchParams(config.url.split('?')[1] || '')
      const id = urlParams.get('id') || '1234567'

      // 只允许学长推荐的商品（ID以senior_开头）查看详情
      if (!id.startsWith('senior_')) {
        return {
          code: '0',
          msg: '该商品仅供展示，无法查看详情',
          result: null
        }
      }

      // 根据ID的最后一位字符的ASCII码决定商品类型（兼容GUID格式）
      const lastChar = id.slice(-1)
      const type = (lastChar.charCodeAt(0) % 3)
      const mockId = Mock.mock('@id')

      // 使用ID作为种子生成一致的商品名称
      // 将ID转换为数字作为随机数种子
      let seed = 0;
      for (let i = 0; i < id.length; i++) {
        seed += id.charCodeAt(i);
      }

      // 基于种子的伪随机数生成函数
      function seededRandom(seed) {
        const x = Math.sin(seed++) * 10000;
        return x - Math.floor(x);
      }

      // 基于种子生成一致的随机索引
      function getSeededIndex(seed, max) {
        return Math.floor(seededRandom(seed) * max);
      }

      // 商品模板
      const goodsTemplates = [
        // 模板0: 数码产品
        {
          name: `【校园惠】${['考研平板', '游戏笔记本', '专业相机', '设计显示器'][getSeededIndex(seed, 4)]} - ${['九成新', '近全新', '全新'][getSeededIndex(seed + 1, 3)]}`,
          price: (Math.floor(seededRandom(seed + 2) * 3000) + 2000).toFixed(2),
          oldPrice: (Math.floor(seededRandom(seed + 3) * 3500) + 2500).toFixed(2),
          mainPictures: Array.from({ length: 5 }).map(() =>
            `https://picsum.photos/400/400?random=${mockId}_main_${Mock.mock('@id')}`),
          specs: [
            {
              name: '成色',
              values: [
                { name: '九成新' },
                { name: '近全新' },
                { name: '全新' },
              ],
            },
            {
              name: '容量',
              values: ['64G', '128G', '256G', '512G'].map(name => ({ name })),
            },
            {
              name: '颜色',
              values: ['深空灰', '银色', '金色'].map((name) => ({
                name
              })),
            },
          ],
          skus: Array.from({ length: Mock.mock('@natural(5, 10)') }).map((_, idx) => ({
            id: `sku_${id}_${idx + 1}`,
            inventory: Mock.mock('@natural(0, 20)'),
            price: (Math.floor(seededRandom(seed + 2 + idx) * 3000) + 2000).toFixed(2),
            oldPrice: (Math.floor(seededRandom(seed + 3 + idx) * 3500) + 2500).toFixed(2),
            specs: [
              { name: '成色', valueName: ['九成新', '近全新', '全新'][getSeededIndex(seed + 1 + idx, 3)] },
              { name: '容量', valueName: ['64G', '128G', '256G', '512G'][getSeededIndex(seed + 2 + idx, 4)] },
              { name: '颜色', valueName: ['深空灰', '银色', '金色'][getSeededIndex(seed + 3 + idx, 3)] },
            ],
          })),
          details: {
            properties: [{ name: '成色', value: ['九成新', '近全新', '全新'][getSeededIndex(seed + 1, 3)] }],
            pictures: Array.from({ length: 7 }).map(() =>
              `https://picsum.photos/800/800?random=${mockId}_detail_${Mock.mock('@id')}`),
          },
          categories: [{ id: '1', name: '数码产品' }],
        },
        // 模板1: 电子产品
        {
          name: `【校园惠】${['无线蓝牙耳机', '智能手表', '机械键盘', '游戏鼠标'][getSeededIndex(seed + 4, 4)]} - ${['学长自用', '全新未拆', '仅试戴'][getSeededIndex(seed + 5, 3)]}`,
          price: (Math.floor(seededRandom(seed + 6) * 900) + 100).toFixed(2),
          oldPrice: (Math.floor(seededRandom(seed + 7) * 1350) + 150).toFixed(2),
          mainPictures: Array.from({ length: 5 }).map(() =>
            `https://picsum.photos/400/400?random=${mockId}_main_${Mock.mock('@id')}`),
          specs: [
            {
              name: '成色',
              values: [
                { name: '九成新' },
                { name: '近全新' },
              ],
            },
            {
              name: '颜色',
              values: ['黑色', '白色', '蓝色', '红色'].map((name) => ({
                name
              })),
            },
          ],
          skus: Array.from({ length: Mock.mock('@natural(2, 6)') }).map((_, idx) => ({
            id: `sku_${id}_${idx + 1}`,
            inventory: Mock.mock('@natural(0, 30)'),
            price: (Math.floor(seededRandom(seed + 6 + idx) * 900) + 100).toFixed(2),
            oldPrice: (Math.floor(seededRandom(seed + 7 + idx) * 1350) + 150).toFixed(2),
            specs: [
              { name: '成色', valueName: ['九成新', '近全新'][getSeededIndex(seed + 5 + idx, 2)] },
              { name: '颜色', valueName: ['黑色', '白色', '蓝色', '红色'][getSeededIndex(seed + 6 + idx, 4)] },
            ],
          })),
          details: {
            properties: [{ name: '品牌', value: ['Apple', 'Samsung', 'Sony', 'Xiaomi', 'Huawei'][getSeededIndex(seed + 7, 5)] }],
            pictures: Array.from({ length: 7 }).map(() =>
              `https://picsum.photos/800/800?random=${mockId}_detail_${Mock.mock('@id')}`),
          },
          categories: [{ id: '7', name: '电子产品' }],
        },
        // 模板2: 二手教材
        {
          name: `【校园惠】${['考研英语真题', '高等数学教材', '专业课程辅导书', '英语六级词汇'][getSeededIndex(seed + 8, 4)]} - ${['含解析', '带笔记', '全新未用'][getSeededIndex(seed + 9, 3)]}`,
          price: (Math.floor(seededRandom(seed + 10) * 80) + 20).toFixed(2),
          oldPrice: (Math.floor(seededRandom(seed + 11) * 120) + 30).toFixed(2),
          mainPictures: Array.from({ length: 5 }).map(() =>
            `https://picsum.photos/400/400?random=${mockId}_main_${Mock.mock('@id')}`),
          specs: [
            {
              name: '科目',
              values: ['英语', '数学', '专业课', '政治'].map(name => ({ name })),
            },
            {
              name: '版本',
              values: ['2023版', '2024版', '2025版'].map(name => ({ name })),
            },
          ],
          skus: Array.from({ length: Mock.mock('@natural(2, 4)') }).map((_, idx) => ({
            id: `sku_${id}_${idx + 1}`,
            inventory: Mock.mock('@natural(0, 50)'),
            price: (Math.floor(seededRandom(seed + 10 + idx) * 80) + 20).toFixed(2),
            oldPrice: (Math.floor(seededRandom(seed + 11 + idx) * 120) + 30).toFixed(2),
            specs: [
              { name: '科目', valueName: ['英语', '数学', '专业课', '政治'][getSeededIndex(seed + 9 + idx, 4)] },
              { name: '版本', valueName: ['2023版', '2024版', '2025版'][getSeededIndex(seed + 10 + idx, 3)] },
            ],
          })),
          details: {
            properties: [{ name: '类型', value: ['考试用书', '教材', '辅导资料'][getSeededIndex(seed + 12, 3)] }],
            pictures: Array.from({ length: 7 }).map(() =>
              `https://picsum.photos/800/800?random=${mockId}_detail_${Mock.mock('@id')}`),
          },
          categories: [{ id: '3', name: '二手教材' }],
        }
      ]

      // 获取对应的模板
      const template = goodsTemplates[type]

      // 生成商品数据
      const goods = {
        id,
        ...template
      }

      return {
        code: '1',
        msg: 'success',
        result: goods
      }
    },
  },

  // 1.10 热销榜单
  {
    url: '/api/campus/v1/goods/hot',
    method: 'get',
    response: (config) => {
      const { type } = config.query
      const titlePrefix = type === '1' ? '【24h热销】' : '【本周榜首】'

      return {
        code: '1',
        msg: 'success',
        result: Array.from({ length: 3 }).map(() => {
          const id = Mock.mock('@id');

          // 使用ID作为种子生成一致的商品名称
          let seed = 0;
          for (let i = 0; i < id.length; i++) {
            seed += id.charCodeAt(i);
          }

          // 基于种子的伪随机数生成函数
          function seededRandom(seed) {
            const x = Math.sin(seed++) * 10000;
            return x - Math.floor(x);
          }

          // 基于种子生成一致的随机索引
          function getSeededIndex(seed, max) {
            return Math.floor(seededRandom(seed) * max);
          }

          // 根据ID的最后一位字符的ASCII码决定商品类型（兼容GUID格式）
          const lastChar = id.slice(-1);
          const type = (lastChar.charCodeAt(0) % 3);

          // 根据类型生成对应的商品名称
          let name, price;
          if (type === 0) {
            // 数码产品
            name = titlePrefix + `【校园惠】${['考研平板', '游戏笔记本', '专业相机', '设计显示器'][getSeededIndex(seed, 4)]} - ${['九成新', '近全新', '全新'][getSeededIndex(seed + 1, 3)]}`;
            price = (Math.floor(seededRandom(seed + 2) * 3000) + 2000).toFixed(2);
          } else if (type === 1) {
            // 电子产品
            name = titlePrefix + `【校园惠】${['无线蓝牙耳机', '智能手表', '机械键盘', '游戏鼠标'][getSeededIndex(seed + 4, 4)]} - ${['学长自用', '全新未拆', '仅试戴'][getSeededIndex(seed + 5, 3)]}`;
            price = (Math.floor(seededRandom(seed + 6) * 900) + 100).toFixed(2);
          } else {
            // 二手教材
            name = titlePrefix + `【校园惠】${['考研英语真题', '高等数学教材', '专业课程辅导书', '英语六级词汇'][getSeededIndex(seed + 8, 4)]} - ${['含解析', '带笔记', '全新未用'][getSeededIndex(seed + 9, 3)]}`;
            price = (Math.floor(seededRandom(seed + 10) * 80) + 20).toFixed(2);
          }

          return {
            id,
            name,
            desc: Mock.mock('@ctitle(10, 20)'),
            price,
            picture: `https://picsum.photos/200/200?random=${Mock.mock('@id')}`,
          };
        })
      }
    },
  },
]
