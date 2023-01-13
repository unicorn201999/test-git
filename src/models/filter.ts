export type Order = "lover-to-bigger" | "bigger-to-lower"
export type FilterBy = "price" | "publish-date"

export interface IFilter {
  name: string
  order: Order
  filterBy: FilterBy
}
