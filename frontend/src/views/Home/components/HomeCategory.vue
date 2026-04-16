<script setup lang="ts">
import { useCategoryStore } from '@/stores/categoryStore'

const categoryStore = useCategoryStore()
</script>

<template>
  <div class="home-category">
    <ul class="menu">
      <li v-for="item in categoryStore.categoryList" :key="item.id">
        <div class="category-item">
          <RouterLink to="/">{{ item.name }}</RouterLink>
          <span class="subtitle">{{ item.subtitle }}</span>
        </div>

        <div class="layer">
          <h4>分类推荐 <small>根据您的购买或浏览记录推荐</small></h4>
          <ul>
            <li v-for="i in item.goods?.slice(0, 9)" :key="i.id">
              <RouterLink :to="`/detail/${i.id}`">
                <img v-img-lazy="i.picture" alt="" />
                <div class="info">
                  <p class="name ellipsis-2">
                    {{ i.name }}
                  </p>
                  <p class="desc ellipsis">{{ i.desc }}</p>
                  <p class="price"><i>¥</i>{{ i.price }}</p>
                </div>
              </RouterLink>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.home-category {
  width: 180px;
  height: 500px;
  background: rgba(0, 0, 0, 0.8);
  position: relative;
  z-index: 99;

  .menu {
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 8px 0;

    li {
      flex: 1;
      padding-left: 16px;
      display: flex;
      align-items: center;

      &:hover {
        background: $campusColor;
      }

      .category-item {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-right: 4px;

        a {
          color: #fff;
          font-size: 14px;
          margin-right: 12px;
        }

        .subtitle {
          color: rgba(255, 255, 255, 0.7);
          font-size: 11px;
        }
      }

      a {
        margin-right: 4px;
        color: #fff;
        font-size: 14px;
      }

      .layer {
        width: 1060px;
        height: 500px;
        background: rgba(255, 255, 255, 0.98);
        position: absolute;
        left: 180px;
        top: 0;
        display: none;
        padding: 10px 15px 20px;

        h4 {
          font-size: 20px;
          font-weight: normal;
          line-height: 60px;

          small {
            font-size: 16px;
            color: #666;
          }
        }

        ul {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;

          li {
            flex: none;
            width: calc((100% - 30px) / 3);
            height: 120px;
            border: 1px solid #eee;
            border-radius: $borderRadiusSmall;
            background: #fff;
            transition: all 0.3s ease;
            &:hover {
              background: $campusColorLight;
              transform: translateY(-1.5px);
              box-shadow: 0 4px 12px rgba(0, 91, 172, 0.1);
            }

            a {
              display: flex;
              width: 100%;
              height: 100%;
              align-items: center;
              padding: 10px;

              img {
                width: 95px;
                height: 95px;
              }

              .info {
                padding-left: 10px;
                line-height: 24px;
                overflow: hidden;

                .name {
                  font-size: 16px;
                  color: #666;
                }

                .desc {
                  color: #999;
                }

                .price {
                  font-size: 22px;
                  color: $priceColor;

                  i {
                    font-size: 16px;
                  }
                }
              }
            }
          }
        }
      }

      // hover状态下的layer盒子变成block
      &:hover {
        .layer {
          display: block;
        }
      }
    }
  }
}
</style>
