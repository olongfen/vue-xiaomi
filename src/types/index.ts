// 商品信息
interface Good {
  name: string
  price: number
  img: string
  desc?: string
  del?: number
  unit: string

}
interface CategoryGood {
  name: string,
  img: string
}


interface CategoryGoods {
  category?: string,
  list: Good[],
}

interface BaseShow {
  title: string
  imgs: string[]
  goods: CategoryGoods[]
  category?: string[]
}

export type {
  CategoryGoods,
  Good,
  CategoryGood,
  BaseShow
}

