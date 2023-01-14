export type Order = "lover-to-bigger" | "bigger-to-lower"
export type FilterBy = "Price" | "Publish Date"

export interface IFilter {
  name: string
  order: Order
  filterBy: FilterBy
}
