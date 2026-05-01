/**
 * 幂集算法 (Power Set) - 基于位运算实现
 * 职责：
 * 在电商 SKU 场景中，该算法用于计算一个规格组合的所有子集。
 * 例如：输入 ['红色', '大号'] -> 输出 [[], ['红色'], ['大号'], ['红色', '大号']]
 * 这样可以用来预填充路径字典 (PathMap)，从而判断哪些规格组合是有货的。
 */

/**
 * 获取集合的所有子集（幂集）
 * @param originalSet - 原始集合数组
 * @returns 所有子集组成的二维数组
 */
export default function getPowerSet<T>(originalSet: T[]): T[][] {
  /** 所有子集结果数组 */
  const subSets: T[][] = []

  /** 总组合数（2^n 种组合） */
  const numberOfCombinations = 2 ** originalSet.length

  for (let combinationIndex = 0; combinationIndex < numberOfCombinations; combinationIndex += 1) {
    /** 当前子集 */
    const subSet: T[] = []

    for (let setElementIndex = 0; setElementIndex < originalSet.length; setElementIndex += 1) {
      if (combinationIndex & (1 << setElementIndex)) {
        subSet.push(originalSet[setElementIndex])
      }
    }

    subSets.push(subSet)
  }

  return subSets
}
