/**
 * 幂集算法 (Power Set) - 基于位运算实现
 * * 职责：
 * 在电商 SKU 场景中，该算法用于计算一个规格组合的所有子集。
 * 例如：输入 ['红色', '大号'] -> 输出 [[], ['红色'], ['大号'], ['红色', '大号']]
 * 这样可以用来预填充路径字典 (PathMap)，从而判断哪些规格组合是有货的。
 */
export default function getPowerSet (originalSet) {
  const subSets = []

  // 1. 计算总组合数
  // 对于长度为 n 的集合，共有 2^n 种组合方式（每个元素都有“选”或“不选”两种可能）
  const numberOfCombinations = 2 ** originalSet.length

  // 2. 遍历 0 到 2^n - 1 的所有数字
  // 每个数字的二进制位（0 或 1）正好代表了原集合中对应位置元素是否被选中
  for (let combinationIndex = 0; combinationIndex < numberOfCombinations; combinationIndex += 1) {
    const subSet = []

    // 3. 检查当前组合索引的每一位比特
    for (let setElementIndex = 0; setElementIndex < originalSet.length; setElementIndex += 1) {
      // 通过位移运算 (1 << index) 和按位与 (&) 判断第 n 位是否为 1
      if (combinationIndex & (1 << setElementIndex)) {
        subSet.push(originalSet[setElementIndex])
      }
    }

    // 4. 将生成的子集存入结果数组
    subSets.push(subSet)
  }

  return subSets
}
